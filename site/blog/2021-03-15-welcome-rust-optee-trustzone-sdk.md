---
title: Welcome Rust OP-TEE TrustZone SDK to Teaclave
date: 2021-03-15
author: Mingshen Sun
---

[English](/blog/2021-03-14-welcome-rust-optee-trustzone-sdk) | [中文](/blog/2021-03-14-welcome-rust-optee-trustzone-sdk-cn)

TrustZone is a security feature by ARM SoC to provide a trusted execution
environment to protect areas like mobile computing, edge computing, and
emerging confidential computing, supporting scenarios like payments, key
management, model protection, etc. However, one major security threat in
TrustZone applications is the memory safety issue. For instance, a
vulnerability of Qualcomm's QSEE is caused by the memory safety issue [1].
Attackers can even get the full-disk encryption key by exploiting such kind of
vulnerability [2].

In 2019, Baidu open sourced the Rust OP-TEE TrustZone SDK project, enabling
safe, functional, and ergonomic development of TrustZone app developments.
The SDK provides a safer APIs based on the GlobalPlatform's TEE standard.
In addition, Rust OP-TEE TrustZone SDK also support Rust's standard library and
third-party crates (i.e., libraries). This will improve the efficiency of
developments of TrustZone apps, and also extend its usage scenarios.

To accelerate the development of confidential computing ecosystem and improve
TrustZone's foundation, Baidu has donated Rust OP-TEE TrustZone SDK to Apache Software
Foundation as a subproject of Teaclave, and renamed it as Teaclave TrustZone SDK.
The location of new repository is 
[https://github.com/apache/incubator-teaclave-trustzone-sdk](https://github.com/apache/incubator-teaclave-trustzone-sdk).
Similar to Teaclave SGX SDK, Teaclave TrustZone SDK will be the foundation of
Teaclave FaaS platform to support multiple trusted execution environments.

## Design and Implementation of Teaclave TrustZone SDK

Based on the GlobalPlatform's C APIs, Teaclave TrustZone SDK provides safer Rust interfaces.
With the SDK, TrustZone apps will not be affected by any memory safety issues
caused by the Rust's strong type system.

![Teaclave TrustZone SDK Design](./img/teaclave-trustzone-sdk-design.png)

We also created procedure macros to help developments. For example, developers
can simply put
`#[ta_create]`, `#[ta_open_session]`, `#[ta_close_session]`, `#[ta_destory]`,
and `#[ta_invoke_command]` annotations before corresponding functions. These
annotations will automatically generate helper functions to bridge the normal/secure worlds.

![Teaclave TrustZone SDK Macros](./img/teaclave-trustzone-sdk-macros.png)

By using the rich type system of Rust, the memory safety issues will be reported
at compile time. For example, in the following case, compared to C's APIs, the
Rust APIs have clearer semantics and more strict type checking.

![Teaclave TrustZone SDK APIs](./img/teaclave-trustzone-sdk-apis.png)

The project also has 13 samples, including encryption/decryption, secure storage, HOTP, etc.
Also, we provide a message passing sample code by using `serde` for
serialization and de-serialization between different worlds to avoid any
security issues caused by improper design in boundaries.

## Getting Started and Documentations

All APIs in Teaclave TrustZone SDK are well documented. In the project's Wiki
page, we have [a quick-start document](https://github.com/apache/incubator-teaclave-trustzone-sdk/wiki/Getting-started-with-OPTEE-for-QEMU-ARMv8)
to guide you compiling and running a TrustZone app in QEMU emulators.
You can find more design and performance evaluation in our paper published in ACSAC 2020.

![Teaclave TrustZone Paper](./img/teaclave-trustzone-sdk-paper.png)

## Teaclave TrustZone SDK Timeline

- 2019: Open source.
- 2019: Talks in Linaro Connect and RustCon Asia.
- 2020: Technical report published in ACSAC 2020.
- 2020: Many open source projects started to use the SDK. E.g., [Veracruz by ARM Research](https://github.com/veracruz-project/veracruz)
  is an experimental projects on confidential computing using the SDK.
- Feb 2021: Support OP-TEE 3.11 and 3.12.
- Feb 2021: Initial the donation procedure.
- Mar 2021: Officially transferred to Teaclave.

![Teacalve TrustZone SDK Timeline](./img/teaclave-trustzone-sdk-timeline.png)

References:

[1] Qualcomm's Secure Execution Environment (QSEE) privilege escalation
vulnerability and exploit (CVE-2015-6639) :
[http://bits-please.blogspot.com/2016/05/qsee-privilege-escalation-vulnerability.html](http://bits-please.blogspot.com/2016/05/qsee-privilege-escalation-vulnerability.html)

[2] Extracting Qualcomm's KeyMaster Keys - Breaking Android Full Disk
Encryption:
[http://bits-please.blogspot.com/2016/06/extracting-qualcomms-keymaster-keys.html](http://bits-please.blogspot.com/2016/06/extracting-qualcomms-keymaster-keys.html)
