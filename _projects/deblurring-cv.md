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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSA6BBS7%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T234734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnHJt57KEMSG7i0CQx%2BFIMxo9aSaj5AUZz8K%2BUijWAkAiAfZXBKjBoXyMp%2BIiczPesYS8jUoUsx77p8G438bq2I9Sr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMInkrbkJMzXIKS8TJKtwD0EVop2nHOjTL10qyla4AK05xXDlQRVidThGFDjjZTGXLmIsTFacvZ7SCOlO0OtEhiPUI7FSCAqTonsEuHF2FBPl8rhDQMKOxp3qdkEpF8ZRoPp1nM47e02SRJ%2F3a4G9sDdvKB0fFuGsu668F8c36HYmLAk7tMamDwy8eNdgGkK0Sk3DgGFqND%2BgMHlMa%2BzUN%2Bq6duCjvPDFmxWzxK44ygzIcjSwbDwuZdhRNSuiFQTlbuh5Ut81qiNr1sdLAAMiFddEOxk1g56DJauaVq47BdrjvGu7CYrIc7pMk0r5H3hNZuDOvGkqFTSMR326lb9QlrN%2FtUm71UsuS4JA9Ew06S6iDK8I2i4iSg%2FV3COCXBb0U47FeO%2BQu5Go97PEVyW6sNEoenBaLl6XpWCOq3oV2iowkMtW%2BRyAWMWLSwVAfzl8t0xauEn%2FpsYC2eLZn4s0K8mt9Q0eRhVUt3P3Z06NWI8SZhJdZJkF%2FNvhCzn76vM7LBNEVl6d25eC16OArYyn%2FqwTYvWzOd9ocXghCTSxAPUbn2GE0uyOg6ey4d98FZg%2Bt97NaUPfVy5VXOQIpE0JOKa6YWGDCrbYHsqeeAhXRxjG4%2BVHyZiFuPpptgmf2cXlyYRG4RNvZkU96abgw2eGk0wY6pgFOXoRPweBv56kM5MDZR2UKNCr02nFATI2GHJHUTDaT%2FYVJky68r8lUJ8yPHd%2FRsxskorOmIU0Iv37%2Fp1K%2BdoJOzvZCKX4eyJWv9%2FvLe%2B1wAF6HzySOqCcbGp6EtkBN0waBzrcO4DIPy%2BD1aTIT01Y1reKIf%2FFIIdn9u0xotXvRFM1%2F2enenP%2B1VgazQ%2Br1RJRUWzvy5ifwWgGbvZYRXykLsx21aFcP&X-Amz-Signature=c4812d61707556fc0dc02fd54001de96e2aac8707592564814280d247d3bce95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

