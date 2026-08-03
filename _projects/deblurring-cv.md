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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLLYJ4SW%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T153422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWoPToCQGGwHMoQMsbNpPtqj7PFJdMi8x3p2rEGn9n5wIhAKWVDebnYfYGZN2A3eEA%2BqXaCXzkbTXn6r9gWkrI3reTKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5B0NCiWZNvJB9r8oq3ANNkjLWj4KkO3pycTq6j%2FwUF5yFCM3MUGSwH6r1WIyv3fgHfj7dbJQ19mpWiIsUK6%2FETYnVgYf9Nz0g0fWE7tJsliluYZVsZ%2FnV3UVtOuj1a775LbYR6hm%2FLDEM0L6KItlb53ZUbEWeCHXsePk4GYjqth7sxzKugtrJUL7Wf%2Fk94zw81yfeKfa5jPeV6Whi3iZLf%2BPMemadq%2BnQBR%2BtCyD3%2F9Y2D8nNs0CFDlyX%2BBk%2BAYQFzwWT82N5EMehULKKP3MH1USHqOeDLzkFgw278HRvkS01lRlrv%2F5IGcA1UhH4LcBKuZolxnjwL0NQnhTmQZjQcoxpJWQ6OW9EuzIn1yuArrV7Ly4D4fEI%2FvvWV51B8jVcCgzJu2lDO0HIimWtqq8jRZcJ5xPmecvOhBg7gQAztVZttEc4yhqgYTaiHRrO237MzBl0j5bYQFApkhNalMcNkFzEEHzumGxXFvx1dOKcOO2TJxToFPwPBdL1tA6auixlRbyD%2BggktnhwfcxD31vkVpDI9OaurYxOQGpu1L7sPqvS%2BOw5S2AyRQWK4375bEtZh9%2Fj%2Bo6%2B2%2BC85CZiy%2FHlv0hyTTWAmsti%2BF4wKsyqautZqA3NSLoBIbzIrtlxUvxt%2FA7jL%2BLPRt%2F8zDCT%2FcHTBjqkASgCeCFxWrfjo02%2B4ZtvRbTlgI5DxK3I%2BjDF5gY8F9pi9bYE4W94seiL3xxurYoO%2Bv5WUTMCrjkAWHzOVTa%2BpAMjDS%2F%2FeA05OxllOmwO4uUbiEk%2FQFxtq3wBrrXjsb%2BKzO5%2FfseAN%2FtpWT%2B6PX1BkJ2NAmVgAvXhZ95u3A9MvI2NxQ%2BFxQnRmKvq0cicRnr%2FcF06aFKY%2Bx9KFjsFlbkdvj2iiaQK&X-Amz-Signature=02e7a12689229f5c43c41ad87eb6f062a76b6654fda2efd769ed8a300a7d8b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

