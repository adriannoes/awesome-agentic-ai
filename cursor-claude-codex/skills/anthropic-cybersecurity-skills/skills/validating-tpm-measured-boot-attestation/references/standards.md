# Standards and Framework Mapping

## MITRE ATT&CK

| ID | Name | Rationale |
|----|------|-----------|
| T1542 | Pre-OS Boot | Measured boot detects the pre-OS tampering this technique relies on. |
| T1542.001 | Pre-OS Boot: System Firmware | PCR 0–7 drift reveals unauthorized firmware modification. |
| T1542.003 | Pre-OS Boot: Bootkit | Bootloader/kernel measurements (PCR 8–10) expose bootkit changes. |
| T1014 | Rootkit | Quote verification and IMA measurements surface concealed tampering. |
| T1601.001 | Modify System Image: Patch System Image | Attestation against golden values flags unauthorized image patches. |

## NIST Cybersecurity Framework 2.0

| ID | Name | Rationale |
|----|------|-----------|
| PR.PS-01 | Configuration management practices are established and applied | Measured-boot baselining and attestation enforce and verify the approved firmware/kernel configuration of platforms. |

## Supporting Standards and References

- **TCG TPM 2.0 Library Specification.** Defines PCRs, extend semantics, quotes, and attestation keys.
- **TCG PC Client Platform Firmware Profile.** Assigns PCR index meanings (PCR 0–7 firmware, PCR 7 Secure Boot, PCR 8–10 OS/IMA).
- **RFC 9683 — Remote Integrity Verification of Network Devices Containing TPMs.** Standardizes TPM-based remote attestation.
- **NIST SP 800-155 — BIOS Integrity Measurement Guidelines.** Measured-boot and integrity reporting guidance.
- **NSA UEFI/Boot Security guidance.** Recommends measured boot + attestation alongside Secure Boot.
