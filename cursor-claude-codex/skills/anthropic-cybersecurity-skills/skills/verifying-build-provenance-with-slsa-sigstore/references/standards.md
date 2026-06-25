# Standards Mapping — Verifying Build Provenance with SLSA and Sigstore

## MITRE ATT&CK

| ID | Technique Name | Rationale |
|----|----------------|-----------|
| T1195 | Supply Chain Compromise | Verifying signatures and SLSA provenance detects artifacts tampered with or substituted anywhere in the build and distribution chain, blocking supply-chain compromise before deployment. Ref: https://attack.mitre.org/techniques/T1195/ |

## NIST Cybersecurity Framework 2.0

| ID | Subcategory | Rationale |
|----|-------------|-----------|
| PR.DS-06 | Integrity-checking mechanisms are used to verify software, firmware, and information integrity | cosign signature verification and SLSA provenance verification are integrity-checking mechanisms that cryptographically confirm an artifact was built from the expected source by the expected builder and was not modified. |

## SLSA Build Levels

| Level | Guarantee |
|-------|-----------|
| Build L1 | Provenance exists (may be forgeable) |
| Build L2 | Provenance signed by a hosted build service |
| Build L3 | Non-forgeable provenance from a hardened, isolated builder |

Ref: https://slsa.dev/spec/v1.0/levels

## Supporting References

- Sigstore architecture (Fulcio short-lived certs, Rekor transparency log): https://docs.sigstore.dev/
- slsa-github-generator (L3 producer): https://github.com/slsa-framework/slsa-github-generator
