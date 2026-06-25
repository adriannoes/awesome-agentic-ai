# Standards and References — Prompt Injection Testing in RAG Pipelines

## MITRE ATLAS References

| Technique ID | Name | Tactic | Rationale |
|--------------|------|--------|-----------|
| AML.T0051 | LLM Prompt Injection | ML Attack Staging / Initial Access | Injected instructions in retrieved context override system intent |
| AML.T0051.001 | LLM Prompt Injection: Indirect | Initial Access | Payload delivered through ingested documents, not direct user input |
| AML.T0057 | LLM Data Leakage | Exfiltration | RAG injections aim to leak system/other-tenant documents |
| AML.T0024 | Exfiltration via ML Inference API | Exfiltration | Model responses act as the document exfiltration channel |

## NIST AI RMF References

| ID | Name | Rationale |
|----|------|-----------|
| MEASURE-2.7 | AI system security and resilience are evaluated and documented | Injection probing measures the security/resilience of the RAG system |

## OWASP Top 10 for LLM Applications (2025)

| ID | Name | Rationale |
|----|------|-----------|
| LLM01:2025 | Prompt Injection | Primary risk tested, including indirect injection via retrieval |
| LLM02:2025 | Sensitive Information Disclosure | Successful injections often exfiltrate private corpus data |
| LLM08:2025 | Vector and Embedding Weaknesses | Embedding-space retrieval poisoning surface |

## Official Resources

- MITRE ATLAS: https://atlas.mitre.org/
- OWASP LLM01:2025 Prompt Injection: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
- NVIDIA garak: https://github.com/NVIDIA/garak
- Promptfoo RAG red teaming: https://www.promptfoo.dev/docs/red-team/rag/
- Microsoft PyRIT: https://github.com/Azure/PyRIT
- NIST AI RMF: https://www.nist.gov/itl/ai-risk-management-framework
