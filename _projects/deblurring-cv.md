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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6KFXHL%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T085536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIELU1xlW0OnfgODuavujXbr5TtJGgIel7WROGQ%2Bl9UhmAiAEcLxfDK0jCTrsMH3gkdLywwGRXuDedXDPQo8WEngP%2BiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJGei4Q2BulBEsi1cKtwDrZrHv0Q14dlXuIvkwvpe%2FhRWCx%2Fg2D5U%2B7nqogYyeRQWqgDCukG9abpnDQLrkeySQ1ooASOCueBRSWESvzRS8QaGcpA%2Fsi1Amc1Hqq9QFjcxWaUp4rfx6ntwEl%2FF5vB5gRMm1FhbcZA7rxtYxRoGA1GOsQ9CjPOsgXtpDNJzwWwnOzp7IwVFwNZFTBbelhfNMX06j0ckuMAMvMYd1jnH7LHFPmnk1tetTvNJuTdyIoUUw3EM3gKaE3HtXz2NEB%2FOv3eoyoRlRc6IKfrmsP83d4oJnbzcneqG2w8h7mn0WOv%2FRMkhAsCeyBnLgSOGvHCSxICJZ%2FLyYDrKZdCzbEkLA%2FYQLTu45Vgbrve9AydZmnCWlUsQq5NuCfgaybYbGeh7Y4yocmSwePWvkBXDwpvMvAUPAA5E7CK1DwlUUMZutrok8niYHBeWcQPeKrlJvI%2FZScbGi2s5Mdzt2SSTsCMRDBy0VieBI8ZvrOGexWhNe0OI4arSqM0Hg9mlf5I8L0I1Ti2xQhEVp3SgqafLsqEkUB4QkIbjw%2FxSQx7vUYIV1w%2Fe%2F4k4HIXGHxh2Za1aWEhyJnRx4Okayc3aRzktScUuDgJ3VvHzhUq%2BOIQS7saraMgbnuRVhrKmYfzoTtEwiojB0wY6pgGxqXTXLgVdQ4JDIrcDoWxkrELUXluIsJelFfj6fpFXxzQc2vvUIYLQPxhycbSzv3G%2FWiWRbm3Ew5paARyLtSPAHjpCJWQYA3wZWOI8yv3VIKJAYiSz3eQCJPimFddU0w01kk%2Fr4S%2BZwRxQ53wNZlJMCl1R6Jsm6Es2%2FhFXACUzoLto%2F1sHrZps5%2BKsLUj7rrbUNhzz1GpYAp6YHU3OxxfxpfRBv%2B%2FN&X-Amz-Signature=9ba01a0cfbc2155e4e5bd225cb24b8920526303e6c84d5b5cd1c5a50989d6f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

