---
title: Podling Teaclave Report - October 2021
date: 2021-10-06
author: Mingshen Sun
---

## Teaclave

Teaclave is a universal secure computing platform, making computation on privacy-sensitive data safe and simple.

Teaclave has been incubating since 2019-08-20.

### Three most important unfinished issues to address before graduating:

  - Improve project structure and documentation
  - Grow the community (attracting more committers, contributors, users)
  - Publish Apache releases (resolving logistics on Apache release)

### Are there any issues that the IPMC or ASF Board need to be aware of?

None.

### How has the community developed since the last report?

Since the last report, we have organized one monthly virtual meetup (we skipped one due to the public holiday). For each meetup, we have minutes write-up published on the Teaclave blog.
  - Teaclave Meetup #7: <https://teaclave.apache.org/blog/2021-08-26-teaclave-meetup-7/>

Starting from this meetup, we use Google Calendar to show the meetup schedule and location (i.e., the Zoom link).
  - Teaclave Community Calendar: <https://calendar.google.com/calendar/u/0/embed?src=l1q5osem2br8i4bj7dgik5sae4@group.calendar.google.com>

We also have two new members elected since the last report:
  - 2021-09-20: Yuan Zhuang (Apache ID: TBD), Committer
  - 2021-09-20: Rong Fan (Apache ID: TBD), Commiter

### How has the project developed since the last report?

Here are the summaries of recent progress:

Teaclave Faas Platform

  - Add TVM MNIST example
  - Add IDE helper script
  - Add license header and include SkyWalking Eyes in CI for automatic checking
  - Release v0.3.0: https://teaclave.apache.org/download/#teaclave
  - Consolidate `docker-compose` scripts for servers with different SGX drivers

Teaclave TrustZone SDK

  - TEE Socket APIs and examples
  - Upgrade building docker to Ubuntu 20.04
  - Switch to GitHub Actions
  - Add -rs to examples and update test scripts
  - Update to OP-TEE 3.14.0

Teaclave SGX SDK

  - Intel SGX SDK 2.14
  - Move wiki pages to the document directory for homepage rendering
  - Better project template

Website

  - [blog] 使用 Teaclave SGX SDK 开发 SGX 应用 · Aug 24 2021: <https://teaclave.apache.org/blog/2021-08-25-developing-sgx-application-with-teaclave-sgx-sdk/>
  - [blog] Announcing Apache Teaclave (incubating) 0.3.0 · Sep 30 2021: <https://teaclave.apache.org/blog/2021-10-01-announcing-teaclave-0-3-0/>
  - [style] Update the contributors page to include Apache ID and tags for each committers

Community Collaboration

  - Teaclave/Intel: Integrating Graphene as a new Library OS executor
  - Teaclave/OP-TEE: Integrating examples in Rust TrustZone SDK in OP-TEE

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

  - 2021-09-20: Yuan Zhuang (Apache ID: TBD), Committer
  - 2021-09-20: Rong Fan (Apache ID: TBD), Committer

### Have your mentors been helpful and responsive?

Yes, our mentors work responsively to help us with electing new mentors, developing new features, fixing bugs, and expanding the community.

### Is the PPMC managing the podling's brand / trademarks?

We don't find any 3rd parties incorrectly using the podling's name and brand.  The VP, Brand has approved the project name. (PODLINGNAMESEARCH-175)
