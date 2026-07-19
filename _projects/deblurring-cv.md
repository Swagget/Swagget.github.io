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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZS2G7F%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T154326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwEMLsuSRrdSJGV7uMxq6T52c7CLY3PcU%2BYARJLxuX%2FgIhAM9PGmDsPLqX5V78Z9BZvhnmbMGhg3Zu6Jl4K%2Fup1aS6KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNrJrmRuoJgp8mEukq3ANVo4jTJCj6DrS3NHwydMgiu6eAqCZRmBqmlVpMAJWgYpSbc703luraj%2Bjmninba4E13aaAwJoEciSPLy%2Fv%2BPFexQM59pyQnqQMgWnLv23igUJ1EGuGts0r%2BKycOnHKxmeAlVH3iFW4SO7n2LMLIw0Lbufc643CnPSlgpEzwZI79RkHrcZWGJ8bRGFxfct8cw4%2BsFjh21C%2BzDm5d1KRllVk2vSsgFCcQJPBHOFxzuRwObaYkngpzujaV0v7EFhVbgqJxA11x0cw0gZ18rycEuSRmyQZC7fWzSLlHsk7N7dVG4vgDXn2%2BQhqYAyCU%2BNxvHNUMpIdYGa86XIReSg%2BFGt0NtlsV5yNRPRnnAtMJWuBFn8pgdFmRi2uNBArz9nu4lbgM2MArmgbYCFqtXXGxtqPV9jFG5jgvjT7PgdkCh9NdVj1VMwCH9Gfa6hwo2dmHcv0A1aEMU%2F044i%2BNFselWXUN3URMC5w4dUTXtZ8Dim5KgJlUt%2BsXbcqVBGUIN4LCGRrCO80sg4u%2FEyqRkM2aKUUlr8I5yf3u8ATX1IwfKyKvYI%2BW333xoRsspegL0N6K%2FXy2iMbWDgiqjDswxL6hmEpEnEZu9oJsPsXKhqr0Si50GvXsCqk0Q36VfdcBjDAofPSBjqkAV1H5vEq4gwP5VdhHEC%2FIJ5nFRUCRTL3dJa0gKYz5p4uteCoz5EbN8ZXfDG43nC45XXL%2FsPtPCCSv7hu4Hq5H2OB%2BomikeJ9vYuz6n2hDy%2BAyrbjxSf9qUDn7%2F0QBWvR1GorPC9ttfr5TXgTte7xA0445yHD%2FoSBc1J9DauklYId%2F4aZzKx4qshm9pY3rA67igaDytigZmQNwTf5BCgG%2F1N0%2BEgi&X-Amz-Signature=80e179a3481f6023697db9b5d4de79ca3ab43d924bd96fe4cb0bbfe0f969fa27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

