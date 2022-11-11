---
title: Accepting Rust OP-TEE TrustZone SDK to Apache Teaclave (incubating) Proposal
date: 2021-06-04
author: The Teaclave PPMC
---

## Abstract

Rust OP-TEE TrustZone SDK provides abilities to build safe TrustZone
applications in Rust. The SDK is based on the OP-TEE project which
follows GlobalPlatform TEE specifications and provides ergonomic APIs.
More information can be found at the project repository:
https://github.com/sccommunity/rust-optee-trustzone-sdk.

## Proposal

Rust OP-TEE TrustZone SDK provides abilities to build safe TrustZone
applications in Rust.

### Background

The Rust OP-TEE TrustZone project is being actively developed within
Baidu. It was open source on Jan 30, 2019.

### Rationale

ARM TrustZone is another hardware trusted execution environment
implementation. The goal of Teaclave is to provide a universal secure
computing platform which is agnostic with TEE implementation.
Currently, Teaclave has Teaclave SGX SDK and only supports Intel SGX.
With the Rust OP-TEE TrustZone SDK, we can build the Teaclave platform
on ARM TrustZone.

### Initial Goals

- Transfer repository to the Apache Incubator under the Teaclave project
- Code cleanup and more documentation

#### Meritocracy:

The Rust OP-TEE TrustZone SDK project was originally developed by
Shengye Wan and Mingshen Sun within Baidu. The project now has new
committers from around the world. Some open source projects like
https://github.com/veracruz-project are using the SDK to build their
systems. We encourage everyone to ask questions and create pull
requests to the project.

#### Community:

We see several open source projects which are using the SDK for
development. Also, we already receive contributions from external
comitters. The community is growing overtime.

#### Core Developers:

The core developers are:
- Shengye Wan (simonsywan at gmail dot com)
- Mingshen Sun (mssun at apache.org)

#### Alignment:

The project is a complimentary of Teaclave's TEE backends.

### Known Risks

An exercise in self-knowledge. Risks don't mean that a project is
unacceptable. If they are recognized and noted, then they can be
addressed during incubation.

#### Project Name

Since the project will be accepted as a subproject in Teaclave, the
project is renamed to Teaclave TrustZone SDK.

#### Inexperience with Open Source:

One of the core developers, Mingshen Sun is from the Teaclave
community. He's familiar with The Apache Way for the open source
community.

#### Length of Incubation:

The project will be in incubation with Apache Teaclave (incubating) project.

### Documentation

- https://github.com/sccommunity/rust-optee-trustzone-sdk/wiki/Getting-started-with-OPTEE-for-QEMU-ARMv8

### Initial Source

- https://github.com/sccommunity/rust-optee-trustzone-sdk

### Source and Intellectual Property Submission Plan

We will submit a Software Grant for this project later.

#### External Dependencies:

The dependencies have Apache compatible license, which is provided
under the BSD 2-Clause license.

#### Cryptography:

N/A

### Required Resources

#### Mailing lists:

The project shares the same mailing list of Teaclave.

#### Git Repositories:

- https://gitbox.apache.org/repos/asf/incubator-teaclave-trustzone-sdk.git
- https://github.com/apache/incubator-teaclave-trustzone-sdk

#### Issue Tracking:

Same with Teaclave.

#### Other Resources:

N/A

### Initial Committers

- Mingshen Sun (mssun at apache dot org)
- Shengye Wan (simonsywan at gmail dot com)
