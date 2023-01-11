---
title: "Teaclave Meetup #15"
date: 2022-12-21
author: He Sun
---

## Agenda 

### Propose He as Committer

### Teaclave FaaS

- upgrading Teacalve SGX SDK 2.0 PR
    - disable macos/ios CI
    - protected fs in teaclavs SGX sdk is not compatible with intel sgx sdk
    - TODO: support macos/ios target for protected fs in Teaclave SGX SDK
    - third-party crates
        - new repo to host forked crates: incubator-teaclave-crates
        - no need to vendor third-party crates, having a Cargo.lock to lock the third-party
        - update readme to explain the supply chain issue
    - need review

### Java TEE SDK

- S2 (March 2023): integrate with Teaclave SGX SDK 2.0
- Release PR

### Discussion
[https://r3conclave.github.io/ccl-documentation/](https://r3conclave.github.io/ccl-documentation/)

## Attendees

- He Sun
- Hongbo chen
- Kailun Qin
- Mingshen Sun
- Qinkun Bao
- Ran Duan
- Sanhong Li
- Shaojun Wang
- Yingchun Gao
- Yu Lei
- Ziyi Lin
