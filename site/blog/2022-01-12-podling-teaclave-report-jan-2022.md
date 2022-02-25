---
title: Podling Teaclave Report - Jan 2022
date: 2022-01-12
author: Mingshen Sun
---

## Teaclave

### Three most important unfinished issues to address before graduating:

  - Improve project structure and documentation
  - Grow the community (attracting more committers, contributors, users)
  - Publish Apache releases (resolving logistics on Apache release)

### Are there any issues that the IPMC or ASF Board need to be aware of?

None.

### How has the community developed since the last report?

Since the last report, we have organized two monthly virtual meetups. For each meetup, we have write-ups published on the Teaclave blog.
  - Teaclave Meetup #8: <https://teaclave.apache.org/blog/2021-10-14-teaclave-meetup-8/>
  - Teaclave Meetup #9: <https://teaclave.apache.org/blog/2021-11-30-teaclave-meetup-9/>

We also published a security advisory on a recent vulnerability on Intel SGX SDK.
  - SECURITY ADVISORY OF SMASHEX AND CVE-2021-0186: <https://teaclave.apache.org/blog/2021-10-25-security-advisory-of-smashex-and-cve-2021-0186/>

To promote the recent TrustZone SDK in the Chinese community, we published a blog on getting started with the SDK for newcomers.
  - 使用 TEACLAVE TRUSTZONE SDK 开发 TRUSTZONE 应用: <https://teaclave.apache.org/blog/2021-10-15-developing-teaclave-application-with-teaclave-trustzone-sdk/>

### How has the project developed since the last report?

Here are the summaries of recent progress:

Teaclave Faas Platform

  - [docker] start Teaclave docker services with auto-detection mechanism
  - Support selectively including executors (#574)
  - Optimize RPC memory footprint of serde (#577)
  - Persistent MockDB in test mode. (#580)
  - Flush DB and compact_range after dequeue operation
  - API updates (#588): UpdateFunction, ListFunciton, DeleteFunction, UserUpdate, UserRegister, UserUpdate
  - Introduce role-based user management and access control
  - Bug fixes and code refactoring

Teaclave TrustZone SDK

  - Update Rust toolchain to nightly-2021-09-20 an std to 1.56.1

Teaclave SGX SDK

  - Support Intel SGX SDK 2.15, DCAP 1.12
  - Update rust toolchain to nightly-2021-11-01

Website

  - [blog] Teaclave Meetup #8: <https://teaclave.apache.org/blog/2021-10-14-teaclave-meetup-8/>
  - [blog] Teaclave Meetup #9: <https://teaclave.apache.org/blog/2021-11-30-teaclave-meetup-9/>
  - [blog] SECURITY ADVISORY OF SMASHEX AND CVE-2021-0186: <https://teaclave.apache.org/blog/2021-10-25-security-advisory-of-smashex-and-cve-2021-0186/>
  - [blog] 使用 TEACLAVE TRUSTZONE SDK 开发 TRUSTZONE 应用: <https://teaclave.apache.org/blog/2021-10-15-developing-teaclave-application-with-teaclave-trustzone-sdk/>

### How would you assess the podling's maturity?
Please feel free to add your own commentary.

  - [ ] Initial setup
  - [ ] Working towards first release
  - [x] Community building
  - [ ] Nearing graduation
  - [ ] Other:

### Date of last release:

  2021-08-23: Apache Teaclave (incubating) 0.3.0

### When were the last committers or PPMC members elected?

  - 2021-09-20: Yuan Zhuang (Apache ID: yuanz), Committer
  - 2021-09-20: Rong Fan (Apache ID: fanrong), Committer

### Have your mentors been helpful and responsive?

Yes, our mentors work responsively to help us with electing new mentors, developing new features, fixing bugs, and expanding the community.

### Is the PPMC managing the podling's brand / trademarks?

We don't find any 3rd parties incorrectly using the podling's name and brand.  The VP, Brand has approved the project name. (PODLINGNAMESEARCH-175)
