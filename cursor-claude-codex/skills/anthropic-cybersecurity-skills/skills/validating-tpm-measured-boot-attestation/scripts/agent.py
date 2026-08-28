#!/usr/bin/env python3
"""
TPM 2.0 measured-boot and attestation helper.

Reads PCRs via tpm2-tools, replays the firmware event log, optionally produces
and verifies a nonce-bound quote, and diffs measured PCRs against a golden
baseline JSON. Emits a structured report.

Requires tpm2-tools (tpm2_pcrread, tpm2_eventlog, tpm2_quote, tpm2_checkquote).
Authorized integrity-verification use only.
"""
import argparse
import json
import os
import re
import secrets
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

EVENTLOG = "/sys/kernel/security/tpm0/binary_bios_measurements"


def run(cmd: list[str], timeout: int = 120) -> tuple[int, str, str]:
    try:
        p = subprocess.run(cmd, capture_output=True, text=True, timeout=timeout)
        return p.returncode, p.stdout, p.stderr
    except FileNotFoundError:
        return 127, "", f"not found: {cmd[0]}"
    except subprocess.SubprocessError as exc:
        return 1, "", str(exc)


def need(tool: str) -> bool:
    if not shutil.which(tool):
        print(f"[error] required tool missing: {tool}", file=sys.stderr)
        return False
    return True


def read_pcrs(selection: str) -> dict:
    if not need("tpm2_pcrread"):
        return {"error": "tpm2_pcrread missing"}
    rc, out, err = run(["tpm2_pcrread", f"sha256:{selection}"])
    if rc != 0:
        return {"error": err.strip() or "tpm2_pcrread failed", "returncode": rc}
    pcrs = {}
    for line in out.splitlines():
        m = re.match(r"\s*(\d+)\s*:\s*(0x[0-9A-Fa-f]+)", line)
        if m:
            pcrs[m.group(1)] = m.group(2).lower()
    return pcrs


def replay_eventlog() -> dict:
    if not need("tpm2_eventlog"):
        return {"error": "tpm2_eventlog missing"}
    if not os.path.exists(EVENTLOG):
        return {"error": f"event log not found at {EVENTLOG} (run as root?)"}
    rc, out, err = run(["tpm2_eventlog", EVENTLOG])
    if rc != 0:
        return {"error": err.strip() or "tpm2_eventlog failed"}
    # Pull the calculated pcrs section emitted by the tool
    calc = {}
    for line in out.splitlines():
        m = re.match(r"\s*(\d+)\s*:\s*(0x[0-9A-Fa-f]+)", line)
        if m:
            calc[m.group(1)] = m.group(2).lower()
    return {"calculated_pcrs": calc, "event_count": out.count("EventNum")}


def attest(selection: str, workdir: Path) -> dict:
    for tool in ("tpm2_createprimary", "tpm2_create", "tpm2_load", "tpm2_readpublic",
                 "tpm2_quote", "tpm2_checkquote"):
        if not need(tool):
            return {"error": f"{tool} missing"}
    primary = workdir / "primary.ctx"
    akpub, akpriv, akctx, akpem = (workdir / f for f in ("ak.pub", "ak.priv", "ak.ctx", "ak.pem"))
    qmsg, qsig, qpcrs = (workdir / f for f in ("quote.msg", "quote.sig", "quote.pcrs"))
    nonce = secrets.token_hex(20)

    steps = [
        ["tpm2_createprimary", "-C", "e", "-g", "sha256", "-G", "rsa", "-c", str(primary)],
        ["tpm2_create", "-C", str(primary), "-G", "rsa", "-u", str(akpub), "-r", str(akpriv),
         "-a", "fixedtpm|fixedparent|sensitivedataorigin|userwithauth|restricted|sign"],
        ["tpm2_load", "-C", str(primary), "-u", str(akpub), "-r", str(akpriv), "-c", str(akctx)],
        ["tpm2_readpublic", "-c", str(akctx), "-o", str(akpem), "-f", "pem"],
        ["tpm2_quote", "-c", str(akctx), "-l", f"sha256:{selection}", "-q", nonce,
         "-m", str(qmsg), "-s", str(qsig), "-o", str(qpcrs), "-g", "sha256"],
    ]
    for cmd in steps:
        rc, out, err = run(cmd)
        if rc != 0:
            return {"error": f"{cmd[0]} failed: {err.strip()}"}

    rc, out, err = run(["tpm2_checkquote", "-u", str(akpem), "-m", str(qmsg),
                        "-s", str(qsig), "-f", str(qpcrs), "-q", nonce, "-g", "sha256"])
    return {"nonce": nonce, "verified": rc == 0,
            "checkquote_output": (out or err)[:800]}


def diff_baseline(pcrs: dict, baseline_path: str) -> dict:
    try:
        baseline = json.loads(Path(baseline_path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        return {"error": f"cannot read baseline: {exc}"}
    drift = {k: {"expected": baseline[k], "actual": pcrs.get(k)}
             for k in baseline if baseline.get(k) != pcrs.get(k)}
    return {"match": not drift, "drift": drift}


def main() -> int:
    ap = argparse.ArgumentParser(description="TPM measured-boot attestation helper")
    ap.add_argument("--pcrs", default="0,1,2,3,4,5,6,7", help="comma-separated PCR indices")
    ap.add_argument("--quote", action="store_true", help="produce + verify an AK quote")
    ap.add_argument("--baseline", help="golden PCR baseline JSON to diff against")
    ap.add_argument("--save-baseline", help="write current PCRs as a baseline JSON")
    ap.add_argument("--output", help="write JSON report")
    args = ap.parse_args()

    report = {"pcr_selection": args.pcrs}
    pcrs = read_pcrs(args.pcrs)
    report["pcrs"] = pcrs
    if "error" not in pcrs:
        for idx, val in sorted(pcrs.items(), key=lambda x: int(x[0])):
            print(f"PCR[{idx}] = {val}")

    report["eventlog"] = replay_eventlog()
    if isinstance(pcrs, dict) and "calculated_pcrs" in report["eventlog"]:
        calc = report["eventlog"]["calculated_pcrs"]
        mismatches = {k: (pcrs.get(k), calc.get(k)) for k in calc if pcrs.get(k) != calc.get(k)}
        report["eventlog_replay_match"] = not mismatches
        if mismatches:
            print(f"[!] event-log replay MISMATCH: {mismatches}")
        else:
            print("[+] event-log replay matches live PCRs")

    if args.save_baseline and "error" not in pcrs:
        Path(args.save_baseline).write_text(json.dumps(pcrs, indent=2), encoding="utf-8")
        print(f"[+] baseline saved to {args.save_baseline}")

    if args.baseline and "error" not in pcrs:
        report["baseline_diff"] = diff_baseline(pcrs, args.baseline)
        print(f"[+] baseline match: {report['baseline_diff'].get('match')}")

    if args.quote:
        with tempfile.TemporaryDirectory() as td:
            report["attestation"] = attest(args.pcrs, Path(td))
        print(f"[+] quote verified: {report['attestation'].get('verified')}")

    if args.output:
        Path(args.output).write_text(json.dumps(report, indent=2), encoding="utf-8")
        print(f"[+] report written to {args.output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
