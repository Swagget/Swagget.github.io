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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQYE2M5%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T231419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIC0%2BQCORHNBEZFMJSu0mQOAOjG5o9fKL40D0LEInR8Z5AiAQtJ6Nlao9EyhKLY36oyOTxbpRmqLHir9CvhbvApwYbSr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMSkRl84hWUGLEYBa0KtwDSVjyRHtyqSjB06tyvAJ6PQqnaFv7Qs83gvguue0VsyIHDpVOwPIvjt3KK3w8OtCUobL7PDKOelcfWCNrGwW4TFbeDoV0xPHPkd43GBqY9ZtfcgxJ8X3sQb6CykQTrXcA46cjgw43hHVBkCZTlVlo%2Bm00Iuwuq%2B%2BpDCxarpS0%2FAnVtf0Ufn4nsQLlFQtcPjcXTLisQatloUmUrJ7bAmynYG8%2BZ5jzobOJBxlSY%2FyvtOMxNc0ugY19Zb%2FYSWsx7t9X9K3zolXzh4lhLiiyHNbZuotjIpE11Y4xQdZVEzAQe4zrLEEqTUwcOfMGA1BgLdlc0gDqx9aHhzgVz3cu97Ubbf%2BfXDKv5Zo%2BBS%2BAfKyLHtKFEr9O4P5uz3CsrRfKe0BtVtuL%2BBeLFbvGpe2M2jiHY1uL2f6JMu7K%2F0FMzXDIIkrH%2FbssmBqo0JgaOnV2%2B5a6E2rVm%2F4Tl2KpIAqMTz1Dy%2BI8UJShwUmgHOVwHRikLp5hfjC1kCwFoBwMD2xiTdAAqiR79n1CdB0PLncgp8na1h3UUcQxp%2BzjifGUFisN0%2B0KizgBJlyeBBBVm6PK5Wl6iW%2FUPJVBJBMiCdoZWdjuyrIUvHJfLDOGvY4Jo9rJyPZ0NeMWQPCW%2BYMBUTgw1Za41AY6pgGZvp4J5RJL7%2BMhrFZdxNOAHAU8GPZ%2F8l6OC7w9nRuU94sHDaXj7ekr6PwCW70kDpZEyQAiHTjJYq2wAG%2BcZv%2FtmPem%2FKBTYdSmOiNov%2FCszRn5lIRxHWfnATBCzgsHNy6WDDYPWC3iiEMh4hUASQ99bpCw%2FAvOvJZYNOpK%2FphQhuPtmm23wFBqBEjigzf2HktEWPd%2F%2Bl8%2B1ougpWMQPtqA1h8V2H6L&X-Amz-Signature=c8ab1aaae3ef9a36ffb6d9a7acb4d8f312a9e49e7a435a94acf62c2e194209db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

