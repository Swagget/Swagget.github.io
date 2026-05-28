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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC773VGB%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T095814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B46KFyXehG2l1kfOXAnpeOiAt%2BgZtUSsLxbKSEA3FdAIgVV6gZSWvpmChUrX6VBk%2FsnC2txsq3p68IuxRU%2BtMjwUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5Dk82z0Ni%2FT2umIyrcAzCwlZvJQgAqpb9k7U%2FNgzZc0s0fkdiJXxIjzcyvifiPFd1ZSRAgGADEru%2BdDmSqDiIImdZPhPmX64HatYXB9aaO%2FvyWo0MBOG9mOgEZmuq4%2FzQjUkatlqt%2BwZtx1Xyh4ZajpsYQngmuZB1gwkXvXU8JU1ja4uWB400zepECXn0T5DErrrEOEtWvlPnLSjbENl%2Fm2BhsWgvZhNWDUzg8W6NjlmniemjXqFM8blQbai7owaC%2BLGdciBXV6ZI4ZLR7heUwwmcFiJ6GK8UTmG4FA0MJ5pfH0BEQ8hxenCkAd9IMvGjDHLgOxmS%2F3MHrscl%2BKe2L4OUXl4PMQ8OomJd%2BimZ3Yd3ockaZ5JdJieCVZgYSGAKh8zA3Q3Ju7nSmvtNMu7T3ImnjSMLcOmiaYEZFhbFbekD8R7qamSvaQFtXnzlYGzD9Sve00jGwOAD4HfcqpWyIv0B2p%2BF8vjoZyQvcd3xhBECEhBwg1PLL78Nh8w0NZ6t8OOYLpRqaCtXyKVahruCfDf51NZmOD9L1oj%2FGjLvjqXqlaOIPbTOsNCBXXSkAe2zcmha2yxjBvmoogsllTnGOUo7mFy7TYKUSRQU01Dc89n%2BsoG8TsrMygvFctOa%2FCsWgQ8JX3oG8upSAMNSc4NAGOqUBOlacLgQYMv3WT6msvyfz1fJjeLMjMoYYz46gMHDGNrSr1gjS44%2FDhvjEmnwrslCbOzLTs6ve%2BNXGjMljyjqNojkmyU%2FBZjeM8OtBpx6W0MnnExxHV6rjgb%2BcjkjY3gRJ%2BFqQq4T3zBtGGquDNmuFp%2FaMHFEpGxir9qqrXInk0JkLM7Rfek4xli6uRFIACr7Vb2GRX8HkipRga50jkYXeDDYl1FyN&X-Amz-Signature=5406e4615b0a2d366585af551cc3dcea7b63a6b65b3f83d3ebf65eb9ccf2f62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

