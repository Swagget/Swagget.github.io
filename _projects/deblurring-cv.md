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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VIZPOVU%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T073555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH37%2FPAapPl%2BkyyZeQIjx11VG%2BevEIRPO08yIqCNtYIjAiB1TmNKGJwunOx8uUnRhl2wdqykz6G2hNN%2Fm%2BtJiVrycCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMV%2Byle9WUrM2PmNpPKtwDB5EYHPwNmqcV6JHHQc%2FNwdzIXRDxWDfQ2k%2Bt2zTaJ%2BfLqb9iS9DhSrWcj9MDoRLYfLea%2BIQnBctFWaxXa%2B2%2BMTx0BpI4VJBJHJbFtOB7ZkZC5iWBXLUMI2%2FSve0dVh700ne8hU8ZfPa7pCcHB9xqHpPq25wWT9nXOrVr6DjwqX06yoBVenjiN7uip7Fmmy9vRLieYKJmcShfMu%2BnuJsXOSwlRHcDAS%2FuJ%2BbRLVVfnfJFsF2yz6mc5Voommq9ASL2xtSOZEHRocnV9VaAlbkcXS0iU2zm2tnbj%2FjbgvI%2BkTEUuUH62db74WDyViFb7zDLRrTmUeH74M%2FCFLsxhx1VDaGKDo%2BeS8ptcXi12UuBn5irrllJaJJOy92P3pbquqJQKA6B5uISo7K0N07TOR2cUXdSQ8z1v9pZLYMbpW9OU%2FKlesitBASdGK2%2BIg4Iku7bhFE%2BZufXKl38TcQfkhRlrQZU4gfMH5ramqZmOkykC7XpCepVmzZoVXZPTrAsRyl2VnbNifrdXHQ%2FO0XPqpf5zIgy2pN1mgNiKWJOTbuKfHxXxuTLzzaQksUANctPSb35rhLPfUVfc5ruwAHNniAyrSTLc%2BYZ8WI1M26lhHHz76rMEVDb%2BWL08t1eGrMwzsOl0wY6pgF79Aa5pIGr0W0WqD6fDroB3ut0kL1dT9rNiT1CQIvja7ECDVw3j%2F1dYjWaF6jJdIUlWYXJtE8QtDXTTmxHZkz9ssP%2BuOormU7IeRsAHtGVhkMbuQBQ1iaL81WAxmTf2Ph9WCOfX9S9J1K%2FXTqVMfp2cEgKlOFGth2zTGxen891FVCxbciLdm%2F8atzkc0d%2BLLk8D3u0r34E%2BqlUYJwFtE92EXLXLCVO&X-Amz-Signature=08dbd143ab61d9f77041e9ba3d196be4abbd53ed5f6bfe238c7ede6f92876876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

