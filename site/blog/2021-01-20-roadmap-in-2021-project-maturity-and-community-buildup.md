---
title: "Roadmap in 2021: Project Maturity and Community Buildup"
date: 2021-01-20
author: Mingshen Sun
---

Last year, we published an RFC - "[Roadmap: Towards the First Public Release](https://github.com/apache/incubator-teaclave/issues/121)". Thanks
for the continuous efforts made by the community. We have completed several
milestones and amazing achievements.

Specifically, we published the first Apache incubator release - [version 0.1.0](https://teaclave.apache.org/blog/2020-10-21-announcing-teaclave-0-1-0/). In this release, we refactored and rewrote almost all core components for
better engineering. New features and enhancements was implemented and well
tested. Also we wrote plenty of documents for the design, implementation, as
well as the code base. Furthermore, the [homepage](https://teaclave.apache.org/)
of Apache Teaclave (incubating) was built and online, which contains many
useful information on the project and community. We also organized several
offline meetups to build up and grow the Teaclave family. In addition, for
better explaining the project, we introduced the blog in the Teaclave homepage
and then published an [article about the ecosystem](https://teaclave.apache.org/blog/2020-12-08-teaclave-ecosystem/).
In this article, we spent some time to summarize existing open source projects
powered by Teaclave. Last but not least, we also attended SGX Workshop and
ApacheCon to introduce our project. Overall we're very glad to see the
development of the project and growth of the community.

In the year of 2021, we need to focus on the maturity of the project and
building a healthier and more sustainable community. Therefore, I summarize
several to-do lists here. There are mainly four parts. The first three are about
the project's features and enhancements, which include Teaclave FaaS framework,
Teaclave SGX SDK, and Teaclave TrustZone SDK (this project just completed the
donation voting, more things need to do later). The last one is about community
buildup. Yes, this is a very long list. Please let me know if you are interested
in. I'm more than happy to help you if not familiar with Teaclave, SGX, or Rust.
At last, this is not a complete list. Feel free to comment and discuss in this
thread.

## Teaclave FaaS Framework

  - Support WebAssembly executor
  - Expose attestation related functions to the executor runtime
  - Database persistency
  - Execution report for end user
  - Async RPC framework for better throughput performance
  - Monitoring
  - Performance/Scalability evaluation
  - Multi-language client SDK: C, Rust client SDK
  - Improve legacy code using latest compiler features
  - Documentation: Lifecycle of a task in Teaclave
  - Documentation: How to launch a multi-party secure computation task
  - Documentation: FAQ
  - Technical report
  - Use a separated service and rule evaluation engine for access control
  - Implement KMS
  - Attestation specification for third party enclaves
  - Automatic state transition of pre-approved tasks
  - Local configuration of attestation method
  - Better attestation report freshness management
  - Refactor RPC interfaces
  - Add a secure logging service
  - Active enclaves status service
  - Support multiple TEE implementations
  - GRPC or thrift compatibility
  - Universal TEE interface design and implementation

## Teaclave SGX SDK

  - Security auditing and enhancement
  - Code polishing
  - Publish an Apache release
  - Design a proper development, releasing development lifecycle
  - Documentation polishing
  - Tutorial
  - Maintenance of Rust crates for Teaclave
  - Document porting guideline for Rust crates for SGX
  - std Aware Cargo supports
  - Rust secure file system

## Teaclave TrustZone SDK

  - Keep update to the latest Rust standard library
  - Keep update to the latest OP-TEE version
  - Rust Crates for TrustZone, examples
  - Design attestation framework for TZ

## Teaclave Community

  - Organize meetups on topics around Teaclave
  - Give public talks to developers
  - Reach out to more Teaclave users
  - Collaboration with industry and academia
  - Blogs on Rust, TEE, and Teaclave
