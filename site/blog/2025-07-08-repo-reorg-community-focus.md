---

title: Teaclave Repository Restructuring and Community Focus
date: 2025-07-08
author: zfc@apache.org

---

Teaclave was originally created with a broad vision to explore the possibilities of confidential computing. It consisted of multiple components, including SDKs supporting Intel SGX and Arm TrustZone, a general-purpose application framework (FaaS), and experimental verification efforts, spanning several repositories under the Apache Incubator.

Over the years, as the field of confidential computing evolved, we observed a clear trend: developers increasingly preferred building their own Trusted Applications using SDKs directly, rather than relying on a general-purpose FaaS framework. This organic shift in usage has also been reflected in our contributor activities. Most community engagement and active development now center around the SDKs, especially the Rust-based TrustZone and SGX SDKs.

As part of our preparation for graduation from the Apache Incubator, we’ve received recurring questions about what Teaclave is today, and what its long-term focus should be. To address this and align with current usage and contributions, we propose a refined mission and corresponding repository restructuring.

---

## Refined Mission

`Teaclave empowers developers to build memory-safe (e.g. Rust) Trusted Applications across diverse confidential computing platforms.`  
Our primary focus going forward will be on maintaining and improving SDKs that support this mission.

---

## Repository Restructuring Plan

### Goals

- Reflect Teaclave’s active development and current focus  
- Reduce long-term maintenance costs for inactive components  
- Preserve historical contributions and community merit  

### `incubator-teaclave`

**Current Status:**  
- Role: Former flagship repository for the FaaS-style confidential computing framework.  
- Activity: Last commit in July 2023.  
- Maintenance: No longer actively developed or aligned with the community’s current direction.  

**Shift in Focus:**  
- This repository will be repurposed as the **main landing page** for the Teaclave project (Podling or TLP). It will provide high-level documentation, links to active SDKs, examples to help users get started, and showcases to build with Teaclave SDKs.  
- Historical contributions and community merit will be preserved [1].  
- Preview of reorganized content is already hosted on the `main` branch [2].
  - A clear project overview 
  - Links to active SDK repositories (TrustZone, SGX, etc.)  
  - Showcases for each SDK  
  - A unified contribution guide and roadmap  

[1]: https://github.com/apache/incubator-teaclave/graphs/contributors
[2]: https://github.com/apache/incubator-teaclave/tree/main  

**Action Items:**  
- Deprecate the existing `master` branch and rename it to `legacy`  
- Set `main` as the default branch  

### `incubator-teaclave-crates`

**Current Status:**  
- Role: Hosts ported/forked crates for TEE platforms (e.g., sgx-crypto, protobuf)  
- Activity: Some crates are outdated or redundant  
- Maintenance: Partial  

**Shift in Focus:**  
This repository will remain an **auxiliary dependency hub** supporting only the active SDKs. It will be **cleaned and scoped down** to what is still necessary for TrustZone/SGX development.  
**Action Items:**  
- Retain the repository to support SDK builds and examples  
- Remove:  
  - Crates no longer used by maintained SDKs or demos  
  - Redundant forks of crates that now work upstream  
- Preserve and maintain:  
  - Crates required by `incubator-teaclave-trustzone-sdk` or `incubator-teaclave-sgx-sdk`  

### `incubator-teaclave-verification`

**Current Status:**  
- Role: Experimental repo for formal verification methods  
- Activity: No active development or adoption  
- Maintenance: Unmaintained  

**Shift in Focus:**  
This repository will become a **historical archive** for early verification efforts, preserved for transparency and reference.  

**Action Items:**  
- Archive the repository on GitHub (read-only)  
- Add a short README noting its archival status and rationale  

### Active SDKs

These SDKs are actively maintained and form the core of Teaclave’s current focus:  
- `incubator-teaclave-trustzone-sdk`  
- `incubator-teaclave-sgx-sdk`  
- `incubator-teaclave-java-tee-sdk`  

No changes are proposed at this time. Any future updates will be discussed in separate threads.