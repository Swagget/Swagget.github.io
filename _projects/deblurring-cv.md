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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI64LRXM%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T082808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1ZDd9eSFeMPNUOk1lm9qDyngUHi2r8l1XeLa5Gd166AiEA4LjJAKx5qMG8bPU1nM3gCUOIhArgj8UzM0SOdfR7kYAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHX6lpDEbEQI%2BJ07YyrcA%2BnuZHKuoEDWGoSGT%2FeQzg0FUcHhfUVPcTmgQaxzhMfjYzM43nOXgR52zYjiZDAHUmclP41xgv%2BVTs0y5GATNnu1301DDPYX2Hx9gJNJuyBnmMDnUzCRid4rw1T%2Bae4ylWcb06VOBCmvjeWHTTIxbRDYnhFf6H84VhC1aB88I%2Fh7u8zLrhIqNGYpuhr7z39Buq0RI3jyTQEAue7SGQHrh2chvA2vLphzHgANVlfl8WUcK08XuoTlmX02gDEE8ATezaRJVcr1pOQiN4KgM1wGABKq%2BofalBWsP29sPYNJ2%2BTjQwNdYp3CX1Ik4oytRbjcwd3i9cwL4%2FZUQUdmFE30p7H%2B2nzL0CaRykqnwGF16VflhPm%2FyGpzXPCRXlljRXEg7g%2F4ZVyqXdg%2BNBlMaG68zwIU3FqqkQs3OXZFUnYS0utKZ43pEpLo2OrwIWgszm%2FmrtqH8JO9w0Ce1bSJFo%2FQm6x%2BH65JcCAObL81XCnROKvUN55Z%2BIFfQXcKO00dQvSvw87BTs%2Be%2FK5EqZ%2BPIUyJ4BVit67w6fASSaMDy5dC9DaRTei7e5r7Q2l3uo%2F3xrXlDpuvnHl0M%2F98HfWlTstf7QCyghVbNqwpiHkI%2BUvAoTPoULj6CtkdRsf5T0z3MPC3sdMGOqUBWd%2BQDhkKYEuVPf9TSfouK7T0vT08raQd7B5uYETHYK7edq7CctuExOndeTanHJUlYbmX7zzu5lO1AWBor6GbMiOlkclaK2ieHUK%2Bb3ekaAt3eCJ6yxAau%2BBagwIO5eCXJv4HCUd5DPcck%2B2oyiKiq7Lx%2B96yOrYvljaBzBKvAdDqNL0HbyOibgvGx9JCUyEnh8ARzRn9upJTKZjZLjxzUNX5fbv%2B&X-Amz-Signature=9301c281e8e8c7432bb7fb6c5e406ae2d4bdb7948d3809cf58d947a862c25287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

