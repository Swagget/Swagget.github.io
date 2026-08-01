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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SC5V7E3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T095210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVDVVuWR%2BSQN%2Bpp6rhv8%2BziMB7Hd4oHl1vs6BIxZa6gIgYckhgvgP310m4wonTY7D8lSTULbUGLvPAX4NsK9dSZ4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRF0oyCJaqllVjPECrcA3RYh7DaO1mgZdN1EHxNnkLTB6ZsBqQxgwbtOEtsZyj3%2BxPrrf%2FUnX256uwPdgzFZFvFxs1nLoMKZFnRAQekS%2F2KJRXhDz17KZHNJaMMWvmPbVQxVCkhWioKELPzByyEeyr%2Fr36H88ZIkSyp9o2ZZVdK8EepgywjDUGqf1phvVEV81ix1hI%2BAPck8KnbnJwr1mwrdAWx4CAY%2BCrP75Jc2%2FV%2FddsUGgtwSLevVXj5M0t5%2BmPtOom6a3gibQvyNVD%2FsIv6wlJzDZV6vnrDZEBgnLp6SV0pInbh%2Ft9uWHxAW4KuHKG9BErhBwlPt52uBslXa%2Bf%2BipFOgJ0H7NhrvTIPu5SrwjxaK1rc8G9AigPSiuqN57svpQ5D7wfgFPRQdDGEk9T3HTNmgraLr8wLmk5V4GYASz67vwHrZvMZgKS%2BAZSHx7OnEszzBwKas2o5dl2k69LM9kcHVU1BOBNej1ywa6%2B%2F%2FXuPjrrj5UnNJe4WtWR2nwXuyZ2G2Z3jaRhHTvzIJ12p%2FYfcAQRjI4yCC3Vwd38NARfk7XSty%2BrFiqAp5Y5JW2manAhRdXqsjs9QE4PJPlfomJA8CKNb6nTsgSYHyYQrV5lWxtc5hLuLpUmHqdRdDCjuzqe693bULhMWMKH6ttMGOqUBVNZCOFWuCOtzyQS5QTsiUMA%2FKdIiotG7LaFumGfQRui9qVfyM8oVtt0%2FQfVXeZoxabWJYY21DctcspU%2B6nq2Chm6JfKNlU46KK4iFi1fydGWSk%2Bmi3xOpQLUfa9v7u0LPW0rob9EkBIc3li6WlVnqRh76eYwhMBde0VCijpAZren35KLJt2c3UzBPS21NDzLZ1gA%2Fj4utFgqQrBmpVZo8n1PsqsD&X-Amz-Signature=589d220e307f5bc210bc00757a7aa433192bc4a20db036af340773c6955a6db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

