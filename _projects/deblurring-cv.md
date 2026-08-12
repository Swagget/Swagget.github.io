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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQGKQBU7%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T174734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDiGA03k2EbfwWiKE3lO6uk%2B3X3iLGH2xJlwg%2FVJJFOCAIhAIOE%2FrnpQmljIDiE67emg5ErOIYf7Rh9HQG9ogPrkLQgKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW6KLSFF3SnasBXH4q3APgQHDmepWEYQfN7Ucq81QK%2F0o7tlJgKybuWQg2DHwhj3Zh%2B0FhQKkd8KotfqJILh1kz9zghr%2Bu1eYuS6ICc4ODQjlAE0LAzGtLBEDNFS7NmkCGNlEwYObMBpR%2BTp7KsiekpxFThE4EEuOG33%2FF%2B%2FfUg6fqm5%2BWZ%2FXv3jryemFH78GjRq70%2B7X2MVOpSQL0juA8RIzBitQrp20WbfQ9lQpkj2XeMwMf%2BhK0o8htjR3HXP8PIouGMg2v4mBCZ%2F516wXgLQGTA3OMoDimCeSJ7rpBw8x2YQKLDO1Ut9qYV7pOhkno2jE%2BTg8%2FbsLGmOe2NcGaNQm3yB6Ikd%2FLWoyPPAPLWnPUb9sGfOfZ56zDhtsvRY%2BgYQJBhuUH%2FxD6PiyLAbi%2FasK%2FKLZqIAJ1L8Ft1YAJu5ij7kD%2BMsURNzwg02Dh7JlW22zc37jE9uQ45O9MJpsmm1b1GGt5dSU1Cx9UXpGROLngd395y7ztb4SA3qVPRst4Fcvi03%2FspU63bosk0VxZxr9uSsryHUjaRb63ok7vdOIN1wObUYaUZyMKnE1okJJ3nnRoHZcwR7PzNV%2F2JJbL%2B9%2BZ5VUyDWGuUMxZS9kHA6YquA3rQNsRpieC8K1UAC7lchJwzTM0xYUbfDD0tPLTBjqkAQhQp57S9ErGxMqX0l%2Fn4Xd61yUpW8r%2BU2aFxzf%2FKs4hSzdnA08bjzzifMr0mUqG%2F5zCxNMwJIwYRf55t9nm91D56xBI9%2BXrIHe8tVLsYCLvDcgeuRMynsddKgy5%2B3hVEdQzNcpzOYSt0ntgR%2BCkgef4%2Ba5C1kokt%2FmOgrCwBT3Ch7Sh6sEG5shL3CBYch%2FfbjuzzYvNu34D34kg9QHZ%2FFNgcYlt&X-Amz-Signature=e2c68077ad89b97342e74b2721b7b135ebf524c9017ac5695fd320316c3a1029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

