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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRJB7BGV%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T012010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIBoue6pQ4dkhXq%2BBliyQgFC7XM7cTMgFF09XRO9HwGAiEA6lgkDPCXL5U13N4IM4KjR9TaGGc%2FJfghjLE41%2BvdhDIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAesW%2BQ4CmfNn0CDnircA6CnEdv4UgYUJOMvq%2FAArLvve3UF7K%2FQs%2FCBTXfRwLWxWR9u23xgkw2nRqhGgngTg3VL3j%2BtBKwuXZpd8mUn1JISNcGb5EMHffnIHnXYksDGZgZRUjeEuL5e8lWaxRrJh2j7P6dxY0X4%2FqR%2FJ6Hh%2Flp79wd4%2F0dAuYMXv%2BxTrn1GfWzijG0gYcG4RDZX5AOm9a6uGCvI7Z9ERTHohiOew7QINP8av7IT7dw38z813vV0OMWgZyxIa6obphlAhOzfnqqve8iOo5jsHl2EkrxpQ%2BBqbn7jgBsrBNLuMhyMDAfB2LyD5Bgtd1PwU%2BxyG6%2FwvSSS9ubBJsW7Uu1bl5%2B1roRbebZc7%2FtA5pfDQaK1K89KYVR1O9zTN1qLqSiiE2Wu46%2FsLMu7zcnmSB1%2F7NsQjgZCgGxYUg%2FW0StRMTbVHsH0OUoHik1H8F%2F%2F2MtXehUUeCOrvJKAIoBHY63kr6IFHQCZNFtbQrxkPatObHcKmsKzbWpXARq8VExEM%2B3WP1l3Iuf%2FoFoL5HQM2l7AXEUB2y4Vxk1O%2FQMDYHShWb1rnuhBw5hiA9fGQr%2Fu22Y%2BdUvXjDt1kWOjINZ6qUEaCWqz2VjjEKAsH0Yr78qnoOS0hx%2FbwONQci0lbzNrH4IdMMXOxdIGOqUB1eBUUy49bRcb27TrVdKjYY5k9kZ%2B9k2rm%2FYGyuVNVgd3FRwT0VeFVkzTNYAk9mtL%2F%2Fbqz54mvimu21%2Bqu4tipM87ZnEqA%2Bo8Hb80JCip6rjYAKdI0ZqyERCu7sPr40LZ%2BZs8Lcsjcfij4Bb6tlp%2FCQ4Knn3wVUGYPTUpSsJ%2BmbECmdz%2F9ACTrH3bFj1u%2FYwDfKBgATwWpZ%2B%2FfSvEe4oHGrCiCATm&X-Amz-Signature=6519e658ca41e65f9b47c279d0bcba5d9ad82edfcb48c85f29dead08d61291c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

