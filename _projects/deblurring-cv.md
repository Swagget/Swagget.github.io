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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GJOC2AC%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T055157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC%2BA1hE5hjPQJFttw66%2BwYW3FdEIBrlhLtGwQqOwwEdgwIhANijdFh44gGsXSxsddyh7MT2vUK6A4ZoEP%2Fb0JtA82rTKv8DCDIQABoMNjM3NDIzMTgzODA1Igx3OCMf45Ovu5MfPkcq3APXdod0wAxmBFjn%2FeL5V58UPkr3P1bqj5dmqvojRchb2%2FC2FcC5tH5NUUcF38xaDCt299hSFPIqsVag9Fg8Lu1fyOLFTKPTpJ2JMC0hUnlIu%2BwPqmrMO4zukszO0E3JWgYXNb934VQcyqF0MmBmX%2BhvYmQVy7IfLqpm1nfmpHq%2B9u%2FGw4icJ0188nOBRtR8tTHxOUkoPlIq5xdG5w4oQHWlfIin%2BfS6dRwrpQj0sy3Jhjdduo7%2BjWhje0tNFzoiK0yQALwAlMRLmkhctSGAX%2BN96HKNRaN1t8aEdQE20VzoF4RjHfKD6PZ7wO8hPKD3b60v8as7xZRLHYIRtNjRa4cuRYt9wn2quuTxLxVVsELBqwJkCbwDLoVDyU4kVhFCX41nkek3fUOETJQ%2BgBdMdjlVCJZOD5BH0Liy8PahNbSNku984ZoRSRCOeudFcBHQaSXkbnJMDSVx2dWz3m1cTBflYsSMsMK4zi69LOyBXKoKshPwel7r%2FLXXCdjc5CF%2F4XtDkV4Wae7cFJgLzHAorUV%2BjU47lNqg8kdk0yi0ZiWUPWJC1EylZx0RMi4dISdbiOVmM5V7fLSnDTvf6wnvnQ5M8CpCFp%2BPevdGWvjkVs%2F3jwZefGI79565gf23njDP2qbSBjqkAUbqOWqGOxi798W12d1J5lRYzC%2Ba9y4vLAQUrtZS8%2BQs8p%2Ft1CSnGPGdg0NLd6QkSLhRiL%2FeUslP4tvYJGZFytdt6D9hjWDWv6bQ8pkgZHSI7lVocZyaDZjeMT%2BBX2%2F1%2F3AqSxXDMHSiuYac7SKPVJxYm6AjfFs8S3LEy8ShgigZCQ9lvIQP97QaLvyxsxSHsqSkLN6Bl1Rmzgyx7S5kiXDijDZq&X-Amz-Signature=5d903ea9ef3b3bbd542cecf93a96a5b108b34b438505143d756f197eea8d539a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

