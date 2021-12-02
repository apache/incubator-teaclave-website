---
title: "Teaclave Meetup #9"
date: 2021-11-30
author: Mingshen Sun
---

## Agenda

- SmashEx: Smashing SGX Enclaves Using Exceptions — Jinhua Cui

## Notes

- *SmashEx: Smashing SGX Enclaves Using Exceptions* (CCS 2021):
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
- [Security Advisory from the Teaclave Community](https://teaclave.apache.org/blog/2021-10-25-security-advisory-of-smashex-and-cve-2021-0186/)

## Attendees

- Jinghua
- Ran Duan
- Rong Fan
- Gordon
- He Sun
- Hongbo Chen
- Jason Yu
- Pei Wang
- ruanwenwen
- Rundong
- Tongxin Li
- Weijie Liu
- Yuan Zhuang
- Zha0Chan
- Mingshen Sun

## Group Photo

![Group Photo](./img/teaclave-meetup-9-zoom.png)
