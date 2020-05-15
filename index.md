---
home: true
heroText: Apache Teaclave (incubating)
tagline:  an open source universal secure computing platform, making computation on privacy-sensitive data safe and simple
actionText: Get Started →
actionLink: /docs/my-first-function/
---

## Highlights

- **Security**:
  Teaclave adopts multiple security technologies to enable secure computing, in
  particular, Teaclave uses Intel SGX to serve the most security-sensitive tasks
  with *hardware-based isolation*, *memory encryption* and *attestation*.
  Also, Teaclave is written in Rust to prevent *memory-safety* issues.
- **Functionality**:
  Teaclave is provided as a *function-as-a-service platform*. With many built-in
  functions, it supports tasks like machine learning, private set intersection,
  crypto computation, etc. In addition, developers can also deploy and execute
  Python scripts in Teaclave. More importantly, unlike traditional FaaS,
  Teaclave supports both general secure computing tasks and *flexible
  single- and multi-party secure computation*.
- **Usability**:
  Teaclave builds its components in containers, therefore, it supports
  deployment both locally and within cloud infrastructures. Teaclave also
  provides convenient endpoint APIs, client SDKs and command line tools.
- **Modularity**:
  Components in Teaclave are designed in modular, and some like remote
  attestation can be easily embedded in other projects. In addition, Teaclave
  SGX SDK can also be used separately to write standalone SGX enclaves for other
  purposes.
