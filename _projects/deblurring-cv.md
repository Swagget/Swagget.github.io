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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7MCDWK%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T201326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF51nv4Zf2SqJzCVaVOXkjslzkg%2BQG3XGED9v871cHG3AiAN7r25FXVXX9wzpmP02QgRJ8APWdkXjNENMNNugBq%2BsSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh%2FC5qUOMZSIzn%2FdrKtwDDfDqyKdJKkTES8NubNBrGei%2FNdNnEFfilpecejxnIotplSNXudRbrGsoJhxdtQu%2BX4uqSCR6eJvjYRrYR4XtzSvBS7iv5tOwwXPa5H8u2z675EUE7jMg%2Bn2%2B2rSXusOJFvLyNZ%2BS0MH6egezhndW9qLsEnoAJHLSarqyUVieIGuOLccKcwpjdwUbTjfAxYBDoUn5b9r5MNARKr9%2BNQMhJEBQOWfdiGWpGyUuOLSxqnm5dVGCiytml0rb%2F9wCHN5O2NFeELJhwwYz6fBKATlhzjE%2F%2FScvQ%2Bl7qRkDvgAkEAqA%2FY2Cdvn%2BE8e6yXqSVdCEnowSWV%2BYvaAeSsuONV5cU2WQxsO7v%2BUuSrv1AnqXbmGjChOOwP2KiNcspL9cWLM8GM1L5b896AKaAbL1UqWAwSnPFSerkLgq%2BenLHGJG32HanLyaGjG1GSHwfRJEntWuUxAiIKkFKTTEll8GcnwwU6ytVEayXjZm3zpgyW%2FH6LBVlZmy6NNm6m27nKdCzj4dCZ1UvgfLUdRmVQV%2F8mTAFMijR3U4Af0WkOG2FpkZE%2FnjLHMsqDVI%2FQW8r7R4%2FwFIrIUUHKQIHmC00AcsunY7ltVLgLXLrkMXeaa%2BLRmXCOV35KoCvC31xkWe%2B2ow%2F9zc1AY6pgEUgVA0ZPp11sF2FqcSLO6QGfVZgqACZyEQJ%2B5faNTN8L5G40%2F7CtWuAUtN6U%2FL%2FH4Inb1WhLMOoAy%2FQGYUX2iuFNjq%2F0zhSgzCWyLF%2BLQLaaKWi7igvDuEbPQQTZbGeElmDlCRZpJKlBy2O96GKHnmrvyoJPBc4lCNz76%2BGSIy4MVGwmfp7Q2OCBT38ln817aH5MZwPzVZmJuj85eZc2OLgBmkWHM4&X-Amz-Signature=cc4701fc9a12720fb3e84a944f62c7444b5c0e40321249aa044baf09e821fceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

