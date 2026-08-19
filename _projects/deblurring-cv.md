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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF644LCV%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T042409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCObWoF%2FUl0%2Fxtt60bXs11oeFxCpeleqUtCNFtbA92rTAIhAI70AJqXu0knVeH1mrFtkAJbUDqlwJ%2Bs5hu7yRtuhraEKv8DCGsQABoMNjM3NDIzMTgzODA1Igw%2BTJYy9MsvPEOYY%2B4q3ANJA%2Fo%2FuaX3ZS0Zshi%2F5U0i5GINZXX1Sm68iNW8tXPQ2GTziJ8vpn795cv0LUJjL7LSC%2Fe6no%2B%2FDdRk0BaF05OUCt03ZWrmPFv0pqAZe%2B4c7oAWs6Kgi3tEjthnOhNABGFk1NJM5yRoDDWbsJ8v5ZSYwZ73cHUDhMPpCEZtDAVCaLTDeJY1k2dTuGytmTOZ0tpYKnXJiFwW555YfAoQyG%2FL2nI37FsPpD2dzPRxB7wdEstcvsQQI0GZGU1SE5HIPfBaPb14jLLonGZ2ayizX85ji3AXR3GVB7YQL3lNbvBU%2B5Gk%2FRJ3bIhoswUFOthOVhsWlwRzfGWXxCMjoAC6ucXIql7lkm%2FzQ6IPF8i3iQXtfSPDU%2FX8Y4w3yCB3xeaCuVScbSh7AFIOooNSPX8Rs9O0fBN6wHCwaszxzNb6%2BrS0UskvAt4H498RQHu1myNZGlcn%2FXRU1ixAmXqYVmfBtURqF9%2BpvWJzAi6PiyQ%2F%2F%2BuPp%2BS9m2R2wvwnRDLYfPGg9FH9SXoG6KAMVaMqmnn8gipiSLWmPPOafUrpmGwO5wJovOqc%2BYK9c21FAh4mFVizgw3gEmKPgUYzoY7q6iUsC0YSrJO4gtz8Ak98qImXzhcYbqyDzrdc7ClqVYqICDCInJTUBjqkAZOEfpCmpe7MhTlf6AcNUJMVOZ5xjRVeQe311qiZnD6tJGjQ%2BbQzozunmMZKgevw25Mxa7RchLhMTB9KWfNiqEhM%2BWeGhqOsEa6yYBuG0biAkzUWYl5LOR1xhv%2F7x3DCfD%2Bek9mrxM2bZaDIEpFejPW0v4j1Zffniv8n0UEyyWKQIOtc6CBPW5Pm1Ei76gsMCrQBXIo0ThSXvCmmuYQGKpS7a3vB&X-Amz-Signature=dbcf68b339dfe5d278ee004f915fc0e851cfbe3ba00efd66f5387cdf2391a729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

