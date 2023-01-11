---
title: "Teaclave Meetup #14"
date: 2022-12-14
author: He Sun
---

## Agenda

### Introduction

### Teaclave FaaS

- Upgrade to Rust SGX SDK 2.0
- Q: DockerHub image (Mingshen: add He as owner)
- MS: apache DockerHub infra for Teaclave
- Protected FS in 2.0 for macos/iOS is not supported (Ran)
- Replace RPC as tonic based on RA-TLS (Yingchun: create a github issue)
- RA-TLS standard (CCC, Ali, Intel, etc)
- Function languages: Rust, WebAssembly, Python, Occlum

### Teaclave SGX SDK (Rust SGX SDK)

- Protected FS in SDK is not compatible with Intel SGX SDK
- Supports Teaclave and Occlum features
- Cache size/key policy added in Teaclave SGX SDK
- 2.0 release
    - testing
        - unit test
        - Rust std tests (800) and benchmark
        - sample code test
        - teaclave dependencies
    - document
    - CI
    - EDMM in 2.0 (Occlum will use EDMM)

### Teaclave Java TEE SDK

- 0.1 release
    - Voting
    - Checklist
- CI (self-hosted runner for GitHub Actions)
    - Apache Infra Jira ticket, Github Actions token (Mingshen: apply token)

### Teaclave TrustZone SDK (Rust OP-TEE TrustZone SDK)

- N/A

## Attendees

- He Sun
- Hongbo chen
- Kailun Qin
- Mingshen Sun
- Qinkun Bao
- Ran Duan
- Sanhong Li
- Shaojun Wang
- Yingchun Gao
- Yu Lei
- Ziyi Lin
