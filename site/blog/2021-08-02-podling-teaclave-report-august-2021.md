---
title: Podling Teaclave Report - August 2021
date: 2021-08-02
author: Mingshen Sun
---

## Teaclave

Teaclave is a universal secure computing platform, making computation on
privacy-sensitive data safe and simple.

Teaclave has been incubating since 2019-08-20.

### Three most important unfinished issues to address before graduating:

- Improve project structure and documentation
- Grow the community (attracting more committers, contributors, users)
- Publish Apache releases (resolving logistics on Apache release)

### Are there any issues that the IPMC or ASF Board need to be aware of?

None. 

### How has the community developed since the last report?

Since the last report, we have organized three monthly virtual meetups. Many
people from the community share their usage experience of Teaclave. Also, we
invited some contributors to talk about some technical details of the design and
implementation. For each meetup, we have minutes write-up published on the
Teaclave blog.
  - Teaclave Meetup #4: <https://teaclave.apache.org/blog/2021-04-29-teaclave-meetup-4/>
  - Teaclave Meetup #5: <https://teaclave.apache.org/blog/2021-06-24-teaclave-meetup-5/>
  - Teaclave Meetup #6: <https://teaclave.apache.org/blog/2021-07-29-teaclave-meetup-6/>

We also have two new members:
  - 2021-07-09, Hongbo Chen (ya0guang), Commiter
  - 2021-07-25, Gordon King (garyw), Mentor

### How has the project developed since the last report?

Here are the summaries of recent progress of our three sub-projects:

Teaclave:
  - Change the executor's payload type from `String` to `Vec<u8>`.
  - Unify the launch of teaclave services.
  - Add WebAssembly Executor and corresponding examples.
  - Upgrade Intel SGX SDK to the latest release (SGX 2.14.100.2, DCAP 1.11.100.2).
  - Some minor fixes of the building system and documentation.

Teaclave SGX SDK:
  - Minor bug fixes.

Teaclave TrustZone SDK:
  - Release the first Apache Incubator version 0.1.0: [Announcing Apache Teaclave TrustZone SDK (Incubating) 0.1.0](https://teaclave.apache.org/blog/2021-06-16-announcing-teaclave-trustzone-sdk-0-1-0/).
  - Update to OP-TEE 3.13.0.
  - Implement the `iSocket` APIs and corresponding examples.
  - Implement loadable plugin for TA and corresponding examples.
  - Some minor fixes and repository cleanups.

### How would you assess the podling's maturity?
Please feel free to add your own commentary.

  - [ ] Initial setup
  - [ ] Working towards first release
  - [x] Community building
  - [ ] Nearing graduation
  - [ ] Other:

### Date of last release:

  2021-06-10: Apache Teaclave TrustZone SDK (incubating) 0.1.0

### When were the last committers or PPMC members elected?

  2021-07-25, Gordon King (garyw), Mentor

### Have your mentors been helpful and responsive?

  Yes, our mentors work responsively to help us with electing new mentors, proposing new features, and expanding the community.

### Is the PPMC managing the podling's brand / trademarks?

  We don't find any 3rd parties incorrectly using the podling's name and brand. The VP, Brand has approved the project name. (PODLINGNAMESEARCH-175)
