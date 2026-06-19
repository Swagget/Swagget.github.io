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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PH3MDUO%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T220220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnT%2FP8x6LmOnJgzgyJEALQHHccM%2FeabichU9gm3bWokAIhAMn79FmX7t1Pw%2FKPpwtBx41cDo6RF%2BjldcQhRY%2Fg8AP2KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQw2h5%2Brrj0L2aLqIq3AOwBWjcwrxmKo4JoIkwGczPQg4vaTEwm1JH49cc52KZfk6OmF1k76FEWFhF1GTRHkSQMB4lRo1tzQ2lFdpsazFYz4GZMrugV56ASM9OAxmiSWbxX9XcdPAvFHd7I53JDNCAlwT7Be3u1X8letF%2F5eTbbuxFYS06bshs2POxywyIRRaCroMFzIpvEbIbNQjS4rd3i1HyLW7ST62wO40jzVrkTXyt988w7%2BErnC3lGygkNGZFE%2BA3FIzHlTDcmqnxuKOw7ZyzcOuSqR5HMRdl6W7SVajRG6eNr7m0BG%2FgLoTnXFk4DXkdCNbL4oa2DoUtvNYHglemjMUag2%2F%2Ft3dyhgLvUf%2Fll6TNzcxUGv9Rwhqq9i5fbg%2BmMVgYKnjE6D%2F1YzimB4RfpnUvQy9qX0g9VbGABP1h%2BpxYhIzECXCflYY1qUTgary0ZcOLuoN3lQJbXCBqkVokxAuKVvtdZHfc%2Bj1ErnsXLheSH%2FBOZ1eGTnH4aJwvPgZTOGgp8nr%2BxdI%2BWPPrYAEZWi2j3KsDT6QF6jB%2Bnc0etFFTKQsNkXV9ipjh%2B5jRvmvIB1cy0yxRfPAbGbmTCP3gIwgITOLeYMsKxXZvnu38v4Ph0BLEU8zN4bm1FOx9KFeCmjVj0E%2Bh9jCJ8tbRBjqkAcAGeBP37Kg%2B3S6KzB1njafTDSc7MlT0wDPltGd1RRKwJ3zpGWzoqCrZzSMDk97XQJuW0sFUxKmt56Qf3OYZ531Zs5D3t0HROhjrylhGfoBwT8az3k2Z5PuAAxazcCbbJ0xUpidhDt%2FOHeNGsO2oBZsSyYKRfGUheK7svl4WKcbJtTiMFy4PaU3JvO83oXzzuJh4WZYa7pbQFlxgb9AeNwdlPHr1&X-Amz-Signature=7f09441d242a4d8774730cc504808e13372e0d357d0f5016fca0996e2a11cd7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

