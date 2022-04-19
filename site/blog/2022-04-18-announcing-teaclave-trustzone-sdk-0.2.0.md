---
title: Announcing Apache Teaclave TrustZone SDK (incubating) 0.2.0
date: 2022-04-18
author: Mingshen Sun
---

On behalf of the Teaclave community, I am happy to announce the release of
Teaclave TrustZone SDK 0.2.0.

Teaclave TrustZone SDK provides abilities to build safe TrustZone applications
in Rust. The SDK is based on the OP-TEE project which follows GlobalPlatform TEE
specifications and provides ergonomic APIs. In addition, it enables capability
to write TrustZone applications with Rust's standard library and many
third-party libraries (i.e., crates). Teaclave TrustZone SDK is a sub-project of
Apache Teaclave (incubating). To learn more about the design and history of
TrustZone SDK,
please read the blog [Welcome Rust OP-TEE TrustZone SDK To Teaclave](https://teaclave.apache.org/blog/2021-03-14-welcome-rust-optee-trustzone-sdk/).

This is the second Apache Incubator release of Teaclave TrustZone SDK. Teaclave
TrustZone SDK provides abilities to build safe TrustZone applications in Rust.
The SDK is based on the OP-TEE project which follows GlobalPlatform TEE
specifications and provides ergonomic APIs. In addition, it enables the
capability to write TrustZone applications with Rust's standard library and many
third-party libraries (i.e., crates). Teaclave TrustZone SDK is a sub-project of
Apache Teaclave (incubating).

During this period, we are working closely with the OP-TEE community to
integrate TA examples written in Rust into the upstream repository. You can try
and play with the examples written in Rust with Teaclave TrustZone SDK since the
OP-TEE 3.15.0 release.

More specifically, in this release we have the following updates:

## Features

- Add support for tee-supplicant loadable plugins and examples
- Add TEE Socket APIs and examples

## Enhancements

#### Integration into OP-TEE

- Add the `-rs` suffix to examples and update test scripts ([#34](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/34))
- Update to OP-TEE 3.14.0 ([#35](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/35))
- Update to OP-TEE 3.16.0 ([#59](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/59))

#### Building

- Upgrade building docker to Ubuntu 20.04 ([#33](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/33))
- Update Rust toolchain to nightly-2021-09-20 and std to 1.56.1 ([#53](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/53))
- Add setup.sh to setup rust environment and initialize submodules ([#40](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/40), [#63](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/63))

#### CI

- Switch to GitHub Actions ([#33](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/33))
- Add expect script for OP-TEE CI and fix CI errors ([#45](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/45), [#50](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/50))

## Bug fixes

- Fix ldelf error of arm32 ta ([#38](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/38))
- fix error when making the plugin example second time ([#42](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/42))
- Correct toolchain PATH env ([#44](https://github.com/apache/incubator-teaclave-trustzone-sdk/pull/44))

## Docs

- Add debugging OP-TEE TA doc: Debugging OP-TEE TA
- Add documentation of Rust examples: Overview of OP-TEE Rust Examples
- Polish the getting started documentation

## Download

You can download the release from the
[download](https://teaclave.apache.org/download/) page. Also, please checkout
our [repository](https://github.com/apache/incubator-teaclave-trustzone-sdk)
hosted on GitHub.

## Contributing

Teaclave TrustZone SDK is under the Apache License v2 and open source in The
Apache Way. We aim to create a project that is maintained and owned by the
community. All kinds of contributions are welcome. Thanks to our contributors.
