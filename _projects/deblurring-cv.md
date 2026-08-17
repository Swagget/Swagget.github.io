---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: "Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving."
date: 2021-10-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving.


We then used optical flow with a threshold, when the threshold was crossed we used the prior method, however when the optical threshold wasn’t crossed, we used the frames from the input image itself.


We then wrote the methods in the form of a research paper.


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJATIH6F%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T161223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE8rIJgw0Wey%2FAT5zNCA0ZGrwXxMRWwHpBEdXK0WWObaAiEAuniADc4u2f0Xabkqs8zWf3qD24fVuPcM6zipHyPYhkQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDC1TNhDU8KcSzzw0OircA5IFyvtbugcUXGQtn4sxrvOMwyX5kwMB5Zw0Ec5OtfQoL0V7ad8dMMLZiq1jiwmhbw9rkemrtMTBwkL0P5MIz%2FDoBb5MmgiE0dBbn40Rns8wnXz6jnhTft7u1RyQX76NtK91C9QhTutlIJCp12bWhUNWYpAHN1ivR6YaBcgMvTzB8nTVOSMhnPTZfXrQOS%2F6YpOKNmGs2OV6F2VYtBu5hyihS2j%2BoxoNF1kGdtpnXvz%2Bn5tS9RPs46B3wQrCSR50oGxPsSl91hdByQry0BYeNgp1d5Rk27Eu7GIqbMlNkihTCJBPwLbDM6TELjiJJd9EwbOyWOI3TtOdGgggaHJKB0Cqy3IONSxvxQM7kCmAdyirtxojABeFTZxIngZWVSmdkZFkwzUXuY5xzqXDg1r3dq8elwMT0n2N4Z5JqWmT27HOoRQw4zY%2FqNduADBC6nXD37LgE7pFQgVMbfWw41mGHgN%2BYPirEwswAp58dxPBzbES%2BqBG%2Bv6gka3s%2Bw%2FWDfNHcF2y2pioEFiel3CplhJvL2PJOOmgMJ%2FjIEH4Dapsiyx%2BUuft06AG1L0AfP0HajxCqbCACJAg7rcHw8KqwW6rsfHyJzes7%2BP7R0LVjbjbRCPHCkov0InYSiPWG6QqMP32i9QGOqUB4M93qxA5SO9jZKEZJ2eZgTHKFRrWgbjHaucfiBIoitvPaK8Ki5R4M%2BNnGEz3gNj%2Bl%2BZugP2HNS8y18xqlSkDov0n7ORlhIBNJH8mokdlNPPVYLHsH0HCj1VjglDuggcPGCEx4TZxFkwhznsfb6wQyrvljWEkNU18MI%2F3BQG440t97ovsUBGatGvuhDopQA%2FRy4Bn1o9zGPxTiXfgseMsw6vqeqOu&X-Amz-Signature=38dde7d002ef17d94c16e3d0b74dcc9885bd0ac8e6429e1964becbd5a1b8c064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

