#!/usr/bin/env python3
"""
provenance-verify — verify Sigstore signatures and SLSA provenance, fail closed.

Wraps the real cosign and slsa-verifier CLIs:
  - cosign:        https://github.com/sigstore/cosign
  - slsa-verifier: https://github.com/slsa-framework/slsa-verifier

Install the binaries first:
    go install github.com/sigstore/cosign/v2/cmd/cosign@latest
    go install github.com/slsa-framework/slsa-verifier/v2/cli/slsa-verifier@latest

Examples:
    python agent.py image \
        --image ghcr.io/myorg/myrepo:v1.2.3 \
        --oidc-issuer https://token.actions.githubusercontent.com \
        --identity-regexp '^https://github.com/myorg/myrepo/'

    python agent.py artifact \
        --artifact ./mybin \
        --provenance ./mybin.intoto.jsonl \
        --source-uri github.com/myorg/myrepo \
        --source-tag v1.2.3
"""
import argparse
import base64
import json
import shutil
import subprocess
import sys

GITHUB_OIDC = "https://token.actions.githubusercontent.com"


def _require(tool: str) -> None:
    if shutil.which(tool) is None:
        sys.exit(f"error: '{tool}' not found on PATH. See the skill prerequisites.")


def _run(argv: list, capture: bool = False) -> subprocess.CompletedProcess:
    print(f"[*] {' '.join(argv)}", file=sys.stderr)
    return subprocess.run(argv, capture_output=capture, text=True)


def verify_image(args) -> int:
    _require("cosign")
    issuer = args.oidc_issuer
    # 1) signature
    sig = ["cosign", "verify",
           "--certificate-oidc-issuer", issuer]
    if args.identity:
        sig += ["--certificate-identity", args.identity]
    else:
        sig += ["--certificate-identity-regexp", args.identity_regexp]
    sig.append(args.image)
    if _run(sig).returncode != 0:
        print("[!] signature verification FAILED", file=sys.stderr)
        return 1
    print("[+] signature OK", file=sys.stderr)

    # 2) SLSA provenance attestation
    att = ["cosign", "verify-attestation", "--type", args.predicate_type,
           "--certificate-oidc-issuer", issuer]
    if args.identity:
        att += ["--certificate-identity", args.identity]
    else:
        att += ["--certificate-identity-regexp", args.identity_regexp]
    att.append(args.image)
    proc = _run(att, capture=True)
    if proc.returncode != 0:
        print("[!] provenance verification FAILED", file=sys.stderr)
        print(proc.stderr, file=sys.stderr)
        return 1
    print("[+] SLSA provenance OK", file=sys.stderr)

    # 3) decode and surface key provenance fields
    try:
        payload = json.loads(proc.stdout.splitlines()[0])["payload"]
        decoded = json.loads(base64.b64decode(payload))
        pred = decoded.get("predicate", {})
        builder = (pred.get("runDetails", {}).get("builder", {}).get("id")
                   or pred.get("builder", {}).get("id"))
        print(json.dumps({"image": args.image, "verified": True,
                          "builder_id": builder}, indent=2))
    except Exception:
        print(json.dumps({"image": args.image, "verified": True}, indent=2))
    return 0


def verify_artifact(args) -> int:
    _require("slsa-verifier")
    argv = ["slsa-verifier", "verify-artifact", args.artifact,
            "--provenance-path", args.provenance,
            "--source-uri", args.source_uri]
    if args.source_tag:
        argv += ["--source-tag", args.source_tag]
    if args.builder_id:
        argv += ["--builder-id", args.builder_id]
    rc = _run(argv).returncode
    if rc != 0:
        print("[!] artifact provenance verification FAILED", file=sys.stderr)
        return 1
    print(json.dumps({"artifact": args.artifact, "verified": True,
                      "source_uri": args.source_uri,
                      "source_tag": args.source_tag}, indent=2))
    return 0


def main() -> int:
    p = argparse.ArgumentParser(description="Verify Sigstore signatures and SLSA provenance.")
    sub = p.add_subparsers(dest="cmd", required=True)

    im = sub.add_parser("image", help="verify container image signature + provenance")
    im.add_argument("--image", required=True)
    im.add_argument("--oidc-issuer", default=GITHUB_OIDC)
    g = im.add_mutually_exclusive_group(required=True)
    g.add_argument("--identity")
    g.add_argument("--identity-regexp")
    im.add_argument("--predicate-type", default="slsaprovenance")
    im.set_defaults(func=verify_image)

    ar = sub.add_parser("artifact", help="verify binary/artifact provenance via slsa-verifier")
    ar.add_argument("--artifact", required=True)
    ar.add_argument("--provenance", required=True)
    ar.add_argument("--source-uri", required=True)
    ar.add_argument("--source-tag")
    ar.add_argument("--builder-id")
    ar.set_defaults(func=verify_artifact)

    args = p.parse_args()
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
