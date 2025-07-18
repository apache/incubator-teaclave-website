---
permalink: /maturity
---

# Maturity Assessment For The Teaclave Ecosystem

This is a maturity assessment of Apache Teaclave based on the ASF project 
[maturity model](https://community.apache.org/apache-way/apache-project-maturity-model.html).

It is used to evaluate the overall maturity for the project and the codebase 
it remains. It is also presented here to assist in the decision by the mentors, 
community, Incubator PMC, and ASF Board of Directors on Teaclave's graduation 
to a top-level Apache project.

## Status of this Document
The project has been filled out by the PPMC members of Apache Teaclave and 
welcomes any updates if necessary.

## Maturity Model Assessment

### Code Development (CD)

| ID | Description | Status |
|----|-------------|--------|
| CD10 | The project produces Open Source software for distribution to the public, at no charge. | **YES** The project's source code is licensed under the `Apache License 2.0`. |
| CD20 | Anyone can easily discover and access the project's code. | **YES** The [official website](https://teaclave.incubator.apache.org/) includes GitHub link which can access the project's repository on GitHub directly. |
| CD30 | Anyone using standard, widely-available tools, can build the code in a reproducible way. | **YES** We have `How to Build` files in `/docs` to guide users on how to setup the build environment and build the source code. |
| CD40 | The full history of the project's code is available via a source code control system, in a way that allows anyone to recreate any released version. | **YES** The project uses `git`, and anyone can view the full history of the project via commit logs. |
| CD50 | The source code control system establishes the provenance of each line of code in a reliable way, based on strong authentication of the committer. When third parties contribute code, commit messages provide reliable information about the code provenance. | **YES** The project uses GitHub and is managed by Apache Infra, ensuring provenance of each line of code to a committer. Third-party contributions follow the contributing guidelines. |

### Licenses and Copyright (LC)

| ID | Description | Status |
|----|-------------|--------|
| LC10 | The Apache License, version 2.0, covers the released code. | **YES** The LICENSE is in GitHub repository. All source files are checked with CI to ensure no missing LICENSE. |
| LC20 | Libraries that are mandatory dependencies of the project's code do not create more restrictions than the Apache License does. | **YES** All dependencies are listed. |
| LC30 | The libraries mentioned in LC20 are available as Open Source software. | **YES** All dependencies listed are available as Open Source software. |
| LC40 | Committers are bound by an Individual Contributor Agreement (the "Apache iCLA") that defines which code they may commit and how they need to identify code that is not their own. | **YES** All committers have iCLAs. |
| LC50 | The project clearly defines and documents the copyright ownership of everything that the project produces. | **YES** All source files include an APLv2 header. |

### Releases (RE)

| ID | Description | Status |
|----|-------------|--------|
| RE10 | Releases consist of source code, distributed using standard and open archive formats that are expected to stay readable in the long term. | **YES** Source releases are distributed via dist.apache.org and linked from the download page. |
| RE20 | The project's PMC (Project Management Committee, see CS10) approves each software release in order to make the release an act of the Foundation. | **YES** All releases have been voted at `dev@teaclave.apache.org` and `general@incubator.apache.org`, and have at least 3 PPMC member's votes. |
| RE30 | Releases are signed and/or distributed along with digests that anyone can reliably use to validate the downloaded archives. | **YES** All releases are signed, and the [KEYS](https://downloads.apache.org/incubator/teaclave/KEYS) are available. |
| RE40 | The project can distribute convenience binaries alongside source code, but they are not Apache Releases, they are provided with no guarantee. | **YES** Convenience binaries are distributed via dist.apache.org. |
| RE50 | The project documents a repeatable release process so that someone new to the project can independently generate the complete set of artifacts required for a release. | **YES** We document the Release Guide that the community can follow to make a new Apache Teaclave release. |

### Quality (QU)

| ID | Description | Status |
|----|-------------|--------|
| QU10 | The project is open and honest about the quality of its code. Various levels of quality and maturity for various modules are natural and acceptable as long as they are clearly communicated. | **YES** We encourage users to [report issues](https://teaclave.incubator.apache.org/contributing/#bug-reports). |
| QU20 | The project puts a very high priority on producing secure software. | **YES** All security-related issues are handled with high priority. |
| QU30 | The project provides a well-documented, secure and private channel to report security issues, along with a documented way of responding to them. | **YES** The GitHub project page provides a security page. |
| QU40 | The project puts a high priority on backwards compatibility and aims to document any incompatible changes and provide tools and documentation to help users transition to new features. | **YES** We try our best to follow backwards compatibility. If there is an incompatible API change, we provide a migration guide. |
| QU50 | The project strives to respond to documented bug reports in a timely manner. | **YES** The project has resolved 400+ issues and 800+ pull requests so far, with very prompt responses. |

### Community (CO)

| ID | Description | Status |
|----|-------------|--------|
| CO10 | The project has a well-known homepage that points to all the information required to operate according to this maturity model. | **YES** The [official website](https://teaclave.apache.org/) includes all information users need to run the project. |
| CO20 | The community welcomes contributions from anyone who acts in good faith and in a respectful manner, and who adds value to the project. | **YES** The community welcomes and respects contributions in different aspects of the project. |
| CO30 | Contributions include source code, documentation, constructive bug reports, constructive discussions, marketing and generally anything that adds value to the project. | **YES** We detail various contributing methods in our [contributing](https://teaclave.apache.org/contributing/) doc. |
| CO40 | The community strives to be meritocratic and gives more rights and responsibilities to contributors who, over time, add value to the project. | **YES** Based on meritocracy, the community has elected 8 new committers during incubation. |
| CO50 | The project documents how contributors can earn more rights such as commit access or decision power, and applies these principles consistently. | **YES** The community has clear docs on nominating committers and PPMC members. |
| CO60 | The community operates based on consensus of its members (see CS10) who have decision power. Dictators, benevolent or not, are not welcome in Apache projects. | **YES** Teaclave community operates based on consensus. All discussions and votes are transparent in the mailing list. |
| CO70 | The project strives to answer user questions in a timely manner. | **YES** Teaclave community prioritizes user support by promptly addressing questions through mailing lists and GitHub issues. |

### Consensus Building (CS)

| ID | Description | Status |
|----|-------------|--------|
| CS10 | The project maintains a public list of its contributors who have decision power. The project's PMC (Project Management Committee) consists of those contributors. | **YES** The [website](https://teaclave.apache.org/contributors) contains a full list of committers and PPMC members. |
| CS20 | Decisions require a consensus among PMC members and are documented on the project's main communications channel. The PMC takes community opinions into account, but the PMC has the final word. | **YES** Teaclave community has been making important decisions and discussions on the dev mailing list. |
| CS30 | The project uses documented voting rules to build consensus when discussion is not sufficient. | **YES** The project uses the standard ASF voting rules. Voting rules are clearly stated before each vote. |
| CS40 | In Apache projects, vetoes are only valid for code commits. The person exercising the veto must justify it with a technical explanation, as per the Apache voting rules defined in CS30. | **YES** Vetoes are only permitted during code review and must be based strictly on technical or code quality considerations. |
| CS50 | All "important" discussions happen asynchronously in written form on the project's main communications channel. Offline, face-to-face or private discussions that affect the project are also documented on that channel. | **YES** Teaclave community has been making every important decision on mailing lists. |

### Independence (IN)

| ID | Description | Status |
|----|-------------|--------|
| IN10 | The project is independent from any corporate or organizational influence. | **YES** The Teaclave project maintains complete independence from corporate or organizational influence, with individual contributors shaping the community solely through transparent contributions. |
| IN20 | Contributors act as themselves, not as representatives of a corporation or organization. | **YES** The committers and contributors act independently on their own initiative. |

