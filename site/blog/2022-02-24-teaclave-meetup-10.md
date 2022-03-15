---
title: "Teaclave Meetup #10"
date: 2022-02-24
author: Mingshen Sun
---

## Agenda

- Recent Updates on Teaclave - Mingshen Sun (15m)
- Proof of Being Forgotten: Verified Privacy Protection in Confidential Computing Platform - Hongbo Chen (30m)
- Free discussion (15m)

## Notes

**Teaclave Recent Updates**

- Teaclave FaaS
    - Optimize RPC memory footprint of `serde`
    - Server error refactoring
    - Executor watchdog
    - Task canceling
    - APIs: `list_users`, `delete_user`, `reset_user`, `user_change_password`, `disable_function`
    - Optional input/output files
- Teaclave TrustZone SDK
    - Update to OP-TEE 3.16.0 (no breaking change)
- GSoC 2022 call for participation
- Powered by Teaclave - P4Cleanroom: P4Cleanroom is a confidential cloud service
  for hosting computational biology algorithms as SaaS services on the cloud.
  Computational biology researchers can publish their algorithms on P4Cleanroom
  as a SaaS service to customers, such as researchers in pharmaceutical
  companies and health care institutes.

![P4Cleanroom - Powered by Teclave](./img/p4cleanroom-powered-by-teaclave.png)

**Proof of Being Forgotten**

The talk is same with the recent talk on OC3. Video can be found at:

- Video: [https://www.youtube.com/watch?v=NrOySgI7O3o&list=PLEhAl3D5WVvSD7Kh1lyF95dWmcPICXc2u](https://www.youtube.com/watch?v=NrOySgI7O3o&list=PLEhAl3D5WVvSD7Kh1lyF95dWmcPICXc2u)

Q&A during the talk:

Gary: Assumption on reusing TEE sandbox?

Hongbo: No, if not reuse TEE, still has leakage.

Gary: What is Zone, is it heap?

Hongbo: No only. E.g., secrets in stack and also in general purpose registers.

Gary: How to demonstrate/show the Proof of Being Forgotten? Attestation? Enclave hash?

Mingshen: PoBF is a statically verified property. We also consider to add
dynamic traces for post-mortem auditing. Combined with the enclave hash and
reproducible build, we can provide the proof before the execution statically,
and after the execution dynamically.

**Topic for the Next Meetup**

- HyperEnclave in Ant Finance - Shuang Liu

## Attendees

- Hongbo Chen
- Gary
- Ran Duan
- He Sun
- Ruide Zhang
- Weijie Liu
- Chan Zhao
