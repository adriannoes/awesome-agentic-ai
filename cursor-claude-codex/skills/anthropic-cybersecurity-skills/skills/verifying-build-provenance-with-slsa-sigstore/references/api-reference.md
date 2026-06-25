# cosign & slsa-verifier CLI Reference

Sources:
- https://github.com/sigstore/cosign
- https://github.com/slsa-framework/slsa-verifier
- https://docs.sigstore.dev/cosign/verifying/verify/

## cosign — verification commands

| Command | Purpose |
|---------|---------|
| `cosign verify <image>` | Verify image signature(s) |
| `cosign verify-attestation <image>` | Verify in-toto attestation attached to image |
| `cosign verify-blob <file>` | Verify a detached signature on a blob |
| `cosign verify-blob-attestation <file>` | Verify an attestation bundle for a blob |
| `cosign download attestation <image>` | Pull attestations for offline inspection |
| `cosign tree <image>` | Show signatures/attestations attached to an image |

## cosign — key verification flags

| Flag | Meaning |
|------|---------|
| `--certificate-oidc-issuer <url>` | Required keyless: OIDC issuer that minted the cert |
| `--certificate-identity <san>` | Exact certificate identity (workflow SAN) |
| `--certificate-identity-regexp <re>` | Regex form of identity |
| `--type <type>` | Predicate type: `slsaprovenance`, `slsaprovenance02`, `slsaprovenance1`, `spdx`, `cyclonedx`, `vuln`, custom |
| `--bundle <file>` | Sigstore bundle for blob attestation |
| `--new-bundle-format` | Use the new Sigstore bundle format |
| `--key <path>` | Verify with a fixed public key (non-keyless) |
| `--rekor-url <url>` | Transparency log (default https://rekor.sigstore.dev) |

### GitHub OIDC issuer (constant)
```
https://token.actions.githubusercontent.com
```

## slsa-verifier

| Command | Purpose |
|---------|---------|
| `slsa-verifier verify-artifact <artifact>` | Verify provenance for a binary/artifact |
| `slsa-verifier verify-image <image>` | Verify provenance for a container image |
| `slsa-verifier verify-npm-package <tarball>` | Verify npm package provenance |

### slsa-verifier flags

| Flag | Meaning |
|------|---------|
| `--provenance-path <file>` | Path to provenance (.intoto.jsonl / .sigstore) |
| `--source-uri <repo>` | Expected source repository (GitHub URIs) |
| `--source-tag <tag>` | Expected git tag |
| `--source-versioned-tag <tag>` | Semver-aware tag match |
| `--builder-id <ref>` | Pin the trusted builder workflow (SLSA L3) |
| `--print-provenance` | Print the verified provenance to stdout |

## GitHub CLI native verification

| Command | Purpose |
|---------|---------|
| `gh attestation verify <artifact> --repo <org>/<repo>` | Verify GitHub-generated build provenance |
