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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4NUGD5%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T171553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIm7BjUqOydRs7IINZnjFUfyU3FkLQU%2FhVzR0j2lEHqwIhAK%2BGkkmUVxP0I8Mb6B8MUvQuqiVdQGSj5TuyEFSFSlhRKv8DCGEQABoMNjM3NDIzMTgzODA1IgwSE8tyDjsTTlsXDxUq3ANQdwvzfuPDWJH9w%2BBW0%2BimbhnsAh3f2N1zeeB5elsNJykz50XkfiAwaqOH0JHTl%2FAEta6CMt9c2ZYy%2BQiBElrVKGAM0Hyz6lfXgKjS5ssLQCI%2BPBRBR9RQneCFBTICoCBPTyVn4rw7iNB74sfGGoyZ%2BG6cQ709WVkaDZeSZkG6UQz%2BCDIoKudx0gL6H8n47hw%2BwsXCBypOx25y7nic1SzOmh86H%2FRQUv3oMo5XWhix9kiFYLET78oq%2BEjqJOnnEqfNNGHslALpms2cP3Ta5tNIL5qjITzedMAOdH2RgUPIgjulgQzzroX9PINx%2FIi6X1vqJj5lUY20Fb1humE4SxoXV%2FrUNqZD86107bHhx9kPOAx2qzMM57Q9PzFaChd5wq3Rxs3h%2FaaBZragZAIJLM4NRb1jWv%2B2TLc8f4lA90jetixPvLT%2FXBI6bsHKGa3ZGhDywg8o2fMiC4h92f5%2BCzId8BOR0hPXeF%2F4FE0FSxQ2Jao31qNgrWu5FBbIQ%2Bo8%2Bc%2BRJSPRnOg3BxshG1omiajFl56FKI%2BGW5TwF6yAmGm8wJGROtTZziHg9ZDM1v45W9NMl%2FkgdT4A8oS6QFNVmCN09aZAALbEYIXgD8jSMJLEGRWn2AygvicgG0cHPjCv%2FZHUBjqkAZB9epD3iWQ21XQKSBLphbQUNmNOxY4ZwVKMH4TOAzI%2Fbxce6KQVaiwGY9QKNaQq94IVhhdQHUmJHblPCPyu9kd%2BFI6an0QKOELbODuGhZpcPBKFnMPNos0iAvHAnA%2Fj0yuDqUSmTqVxupgxytJ19IMM5UT7it6H8SeafuQdPZsljZ%2FAH%2Bq5wL8IDV9ypPNJwEOP8rtWDTXNPUnTagBuSy58X35V&X-Amz-Signature=be27afb61e9701ea0cb627b3e6852b4257a32de6eb7e9d0d6419c1b51108caed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

