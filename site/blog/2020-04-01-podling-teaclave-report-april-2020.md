---
title: Podling Teaclave Report - April 2020
date: 2020-04-01
author: Mingshen Sun
---


## Teaclave

Teaclave is a universal secure computing platform.

Teaclave has been incubating since 2019-08-20.

### Three most important unfinished issues to address before graduating:

  1. Improving project structure and documentation
  2. Grow the community (committers, contributors, users)
  3. Publish Apache release

### Are there any issues that the IPMC or ASF Board need to be aware of?

No.

### How has the community developed since the last report?

  - Since last report, one external contributor has became our regular
    contributor.
  - Compared to the last report, we have seen more pull request from external
    contributors.
  - We received emails from some companies which are interested in the
    project and willing to make some contributions for the secure computing
    community.
  - Since we are mainly working on GitHub, with the help of the INFRA team,
    we can sync the notifications of GitHub with our mailing list.

### How has the project developed since the last report?

  - Since last report, the whole project has been refactored to be more
    functional, as well as readable and approachable for new contributors.
  - We have rewrote the framework for implementing enclave services. Also, we
    have redesigned current services into seven core services
including access control,
    authentication, execution, frontend, management, scheduler, and storage
    service. Communication protocols between services are defined in protobuf.
  - RPC between services has been redesigned to supported TLS-based attestation.
  - We have added DCAP attestation algorithm in the platform so that people can
    deploy the system in environments without Intel's attestation service.
  - Communication between app and enclave has been also redesigned
with better APIs.
  - All updates is currently in the `develop` branch. We plan to merge
into `master`
    when main refactoring is done.

### How would you assess the podling's maturity?
Please feel free to add your own commentary.

  - [ ] Initial setup
  - [x] Working towards first release
  - [ ] Community building
  - [ ] Nearing graduation
  - [ ] Other:

### Date of last release:

N/A

### When were the last committers or PPMC members elected?

We haven't started new committers or PPMC members elections yet. Currently, our
work focus on improving the design and documents to make the project more
approachable for newcomers.

### Have your mentors been helpful and responsive?

Yes, our mentors help use to resolve the mailing list moderator issues.

### Is the PPMC managing the podling's brand / trademarks?

We don't find any 3rd parties incorrectly using the podling's name and brand.
The VP, Brand has approve the project name. (PODLINGNAMESEARCH-175)
