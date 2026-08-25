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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIPSUIHG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T082634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIElprXZLJR4Cp8pNx59NIwvVY7IoDJZkHngmrJ8uXRVzAiEA3geIfYpJKSd8pc8Ia38m6YgRtiwFV69VavSDMUuP%2BxEq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDEmOGlLN8ckKfNdeuCrcA2eS5DKi96DSK8E2M3upHInSc0Mm57dUDBnNczIe92dD4rBek4Syktf8DkQFqAGiRweR8SCWz7nsmMjma8tJMfVy%2BT9opQiusCO8McVJ%2BGUToMO5uSKvYTlZiRV%2FDWEq5u0OdFIC2bpszd2s55neN8Q6ltqD3bPdPyuZHJKg4vcMEhepL0jheAWqxB39VVfzcdoQnP741iDoXPAEw2%2Bn6V4gjssvL25mhFC7l6gfbF0S1JsHJPCXxJ1bPCXP9Soepxj5XBPbMkGjZu5QqHGfhL936ztKgA%2FJV6wOMe8lUHgqXUQ2ahKq2KkbRhndSh1FsLVcRpAMy%2BUPd%2FlkABRJV1ebkFZx82gG%2FGaR7cX3UvvpExEhk4PQ7cjoA1GL8AR%2FZiOHb0LAHL1F44%2BTSnFcLR8w38BCpLy3tRPwiktaze3dd4w1t1M8pUvVDyGX3tDWx4j%2FNqmp6PeLWrVDImWZiRRR1oMnVe%2FvPoZkAD7amxxdekmceNvTCvCnbpmrc6yaaKZuL3cmcFe%2Ba64%2B8JCbuOEEjv7wL2RAfZPBFH7%2FAaLJTL3sfqvmqj9IgcH3Sp0fIUWSnxX%2BgmRjyDsIcNLC9gRWYkTGrzDNT0grlcQC%2B203FkiLJVcKo%2FZrkDecMPCVtdQGOqUBORDtKJ%2FOERxwVOVJfVYwnGjPrUveJpQmZEKwm4Y5llsLBmdmJe6BFWDyopEnTRgvMSOaVwj169g1UUm3x359hIl83iMslwH2VGI89qKnTc1WqhGe%2FMsW1qNyhRqiuqGb3KCAld6EYk4NmthyiCo712s5OLibv2skdObzxrs6jq6NlzSbjKF99mNrAE9fH9r%2BYsyTbDp32RFl%2Bv4dKmJ%2B%2B9exRMML&X-Amz-Signature=e829740417731faa7ae2a547fa2614c4044991c80a37f72dea1b04937171da96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

