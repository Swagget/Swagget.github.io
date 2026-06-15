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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHFOVEN%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg49MYCQkxfqzJrbzd4kncCliFpE8et5mQTLLp8PdfTAiB%2BJjzrE%2B%2FkgBAGLByZYE%2BSFZc0tBzWjH2kQTfGK4t%2Fmyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMQoLbFUM2AKzngR5cKtwD2Pdnyd%2BnHHtCys%2FB%2FYySITVopVj%2Fdh1As7Xb6xxqkqPE0aUUt8fhxi7B87Vj6WISE5BnKsHhQNqB5R%2B%2BHz23Xjw2HOtgQpy4B732w1yOtTGB6gCORcb2XnMJAwOOpglJPPF%2FMZe%2Be70zCOqHpYiS5YSiyN42P5x0gTVliksHxgpRD5ZqZq6B41p4Sytb1ELY9d0ztdXmHcYdSb3fVn8%2FTOCgcD0EgqeBsugMmALc7nj2ShCIfn4rRexog%2FG%2FTDXxg0TpISE3SA0XYvmIVqZLyA6gQVcvXpeQ2LrN4NFXcbJ%2FPIsryC7qXG%2BEKH4hZCqOhb6kpDrWXq5Sw6ugY6mpdKl9%2FEcmv2%2FjTNpUEpJTz1yzyy7xmYB5lqwUpKOixNetYSh2IOjDP%2FOdK4JsLMgpuOPwQWPdaWe61ZvEAr1Pg9%2F4YI8pyKMa1okxWN7jMsUL9fGKNPxgT4KZk32XUgSGCk5itIr%2BBENO9aYwRK%2BD4feJcYnl8Mx1%2BNLvuXw5J5t1FS8VLHZx0loQMJpyuJ6r%2F9CFvfE2vVQC%2FLm3wNq4c6ayViNICWsd2g01UkGSmsQVR26fvH1TLG4%2BtbX75WsUzo84OS%2BRQe%2FaL8sAXMMNiQBevnPxbDemBw2V5CEw9OfB0QY6pgE2g0mROvpA8RamNcQwDOgWAnNtvweD834d4FYRHE7LL6p8zs7EKDPp%2BG7Gb0nfUtx6W7RbSdtjdO7KVC4LIRbaERj7hfHPqg%2FMfkTVxIr%2FBsrDH8venHSf%2Bn5H3anpTIvmq76bhIaPrrLpO8NdDuDNDf1VBxcUAeB7pFwFj%2BYWc%2B9Wb9ntjRwoZTSxW3WyhiT8xkPc1T07zw93EF8RpPmoOX0ZhV0G&X-Amz-Signature=f91f1197f37537859e2cd8c0b97ec7a481dd945ff139925f4cf0ded6372188c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

