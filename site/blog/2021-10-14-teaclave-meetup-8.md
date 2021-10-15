---
title: "Teaclave Meetup #8"
date: 2021-10-14
author: Mingshen Sun
---

## Agenda

- Recent update in Teaclave — Mingshen Sun
- Using and Customizing Teaclave SGX SDK — Shunfan Zhou

## Notes

### Recent Update in Teaclave — Mingshen

**Platform**

- [docker] start Teaclave docker services with auto-detection mechanism (#559).
- Use `run-teaclave-service.sh` instead of using `docker-compose` directly.

**SGX SDK**

- v1.1.4-testing: [https://github.com/apache/incubator-teaclave-sgx-sdk/commits/v1.1.4-testing](https://github.com/apache/incubator-teaclave-sgx-sdk/commits/v1.1.4-testing)
    - Rust `nightly-2021-09-13`
    - Support Intel SGX SDK 2.15 and DCAP 1.12
- Project template refactoring
- README polishing

**TrustZone SDK**

- Teaclave/OP-TEE: Integrating examples in Rust TrustZone SDK in OP-TEE
    - Multiple PRs to OP-TEE's `manifest`, `build` repos.
    - Now in the `master` branch, should be available in the next release 3.15 in Oct 15.
    - OP-TEE with Rust: [https://optee.readthedocs.io/en/latest/building/optee_with_rust.html](https://optee.readthedocs.io/en/latest/building/optee_with_rust.html)

![OP-TEE with Rust](./img/optee-with-rust-doc.png)

**Website**

- Add project/organization logos in the "Powered By" page: [https://teaclave.apache.org/powered-by/](https://teaclave.apache.org/powered-by/)

![Project Powered By Teaclave](./img/project-powered-by-teaclave-logo.png)

- Redesign the "Contributors" page
    - add Apache ID, GitHub ID to mentors, PPMC, and committers
    - Tags for committers to show areas that they are familiar with
- Add API Docs (references) of TrustZone SDK both for host and TA sides
    - Host: [https://teaclave.apache.org/api-docs/trustzone-sdk/optee-teec](https://teaclave.apache.org/api-docs/trustzone-sdk/optee-teec)
    - TA: [https://teaclave.apache.org/api-docs/trustzone-sdk/optee-utee](https://teaclave.apache.org/api-docs/trustzone-sdk/optee-utee)
    
![Teaclave TrustZone SDK Links in Homepage](./img/teaclave-trustzone-sdk-links-in-homepage.png)
    
- Blog
    - [Podling Teaclave Report - October 2021](https://teaclave.apache.org/blog/2021-10-06-podling-teaclave-report-october-2021/) · Oct 05 2021
    - [Announcing Apache Teaclave (incubating) 0.3.0](https://teaclave.apache.org/blog/2021-10-01-announcing-teaclave-0-3-0/) · Sep 30 2021

**Community**

- New committers: Yuan Zhuang and Rong Fan from Baidu
- Discord: Connect directly with Teaclave community members (join link: [https://discord.gg/ynECXsxm5P](https://discord.gg/ynECXsxm5P))

**Security**

- *SmashEx: Smashing SGX Enclaves Using Exceptions* (to appear at CCS 2021):
  Jinhua Cui (National University of Defense Technology, National University of
  Singapore); Zhijingcheng Yu (National University of Singapore); Shweta Shinde
  (ETH Zurich); Prateek Saxena (National University of Singapore); Zhiping Cai
  (National University of Defense Technology)
- [https://arxiv.org/ftp/arxiv/papers/2110/2110.06657.pdf](https://arxiv.org/ftp/arxiv/papers/2110/2110.06657.pdf)
- CVE-2021-0186
    - [https://www.intel.com/content/www/us/en/security-center/advisory/intel-sa-00548.html](https://www.intel.com/content/www/us/en/security-center/advisory/intel-sa-00548.html)
    - **Description**: Improper input validation in the Intel(R) SGX SDK
      applications compiled for SGX2 enabled processors may allow a privileged
      user to potentially escalation of privilege via local access.
    - **Affected Products**: Intel SGX SDK for Windows v2.12 and earlier, Intel
      SGX SDK for Linux v2.13 and earlier, Intel® Processors supporting SGX2.
    - Intel recommends updating the Intel® SGX SDK to the versions listed below.
      Enclaves built with the new Intel® SGX SDK version should increment the
      value of their ISVSVN field.
- Patch: [https://github.com/intel/linux-sgx/commit/edfe42a517b3e4b1d81204c3cdef6da6cb35fefc](https://github.com/intel/linux-sgx/commit/edfe42a517b3e4b1d81204c3cdef6da6cb35fefc)

![Patch in Intel SGX SDK](./img/cve-2021-0186-patch.png)

### Using and Customizing Teaclave SGX SDK — Shunfan Zhou

- Teaclave SGX SDK
    - pro: security
    - con: testing is hard
- Case study: rust-bitcoin
    - std
    - Feature
    - Port dependencies recursively
- Some issues
    - efforts of porting
    - security: 1) updates of upstream, 2) unit tests
    - More TEE backend: AMD SEV, ARM CCA
- libs is not completed in SGX for vanilla Rust standard library
- Phala libc-hacks
    - directly use Intel's libc
    - use ocall warpper functions
- Conflicts: multiple language items in Rust
- Runtime behavior checks
- HW mode issue: `rand::thread_rnd()` is using CPUID, which is not allowed in SGX
- Check instructions after compiling

### Free Discussion

- About AMD SEV in Azure: [https://azure.microsoft.com/en-us/blog/azure-and-amd-enable-lift-and-shift-confidential-computing/](https://azure.microsoft.com/en-us/blog/azure-and-amd-enable-lift-and-shift-confidential-computing/)

## Attendees

- Mingshen Sun
- Qinkun Bao
- He Sun
- George
- Hongbo Chen
- hang
- Kevin
- Ben
- Ruide
- Rudong Zhou
- shelven
- Tongxin Li
- Weijie Liu
- Zha0Chan
- Tianyi Li
- DuanRan
- Gordon
- david


## Group Photo

![Group Photo](./img/teaclave-meetup-8-zoom.png)
