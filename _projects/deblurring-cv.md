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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXI6FCBG%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T141542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHNhCgzESXDoR8Sod0yChqlO2GxkZpOJwr5VYYk8yifEAiEA23WFSemuzI2LrKg0kdSZw9DTre7EvVEMCLximSi3QUUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKMVh02j8t6ZGliLCrcA3JH2UFz96ZA0AFNs2F0iMfdPmWuMSHPPSA%2B9SmGkyrAGyq6jj6Qco2timU4EQfvIyZGLV%2FddW2oy%2BN50AoX5cXJo049TTzsR18WwCYUdNiRivCvkua%2F4nWjeXu4z7b%2BxeX%2FHcpAs%2FFILIhfNZ86nqV8SL31xrui8qPi51YrZTZHl8Yp4NFnV2d5W6OBO614inHq5wXCAKn8hJCuOTtpG0ilW3nxVKjlXg29qwzdD1uFN%2FsnpmNidsEL%2F9qg%2FX0OIrQFaCY72F3%2BWkcPw52Gc%2BP%2FmzwzO%2B8f2RxXljciDets6CpY1dWOn6WC34e7RZ1wvlNtrpPUZ6DUf4dDx7yJVDK6PfP84Z9TlVvVFgsug0Ba2YVhPiWAZJ5lDgJnAarwVFPMRV7Fpwqpx7HDCBH4ItoLDxgoOY%2BXUetfgXairq4wkm0nJ1RzhgHQHokyp5j2RtUv5GaOWnSkuE%2BpDMYFEOtdR23BEVfkxGY%2FMJdCRBSvyjt4REPbNB21wejilsauevGHF5XrFkfhGEHXQu4DR2B%2FXD96Pc2X5%2FQzl4sTLJgIQ37rYSYpYinRHHEOtHpcMVCoZElvh%2FQg6oZkdhyLFeVFh3gJMra8lf1KPFrORRpu2m%2F2%2FousPyPSUUTRMJyhyNIGOqUBLHJTUoLT3FALkhn9jfhe8AiXWatjBP8Pxcz6JKx%2BKgKvEjtZ6vRKF9EXvbqNHE6hlPThfpDpoJsTbzWxT56LqKyXGC3b1lalA9YPW1ApqblvyGcr5z%2Fr9B81Fi4WxiOW81bu4%2Bjd%2BCNn3t0Wcsr6eGIGHn%2B9kRgnjgVfrQX%2F%2Bsy%2FyQw81Kp%2FnnDJLOAqBmqfHWsmLMF0bEQV1mWr75nbKJCArk9Y&X-Amz-Signature=5d5e337b8a45926a18650f219b62f005ba21abfeae4878cf97ce932fcbf60152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

