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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JQGJX5D%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T073251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9DNJujrV96uqWVe9Qb1X%2Fz2xFde7lVd%2FU%2BCNwYsR6bAiEAvbSo1jwNyQpFmjcDF6oO%2FHY6UrQH4n4i7t92dwQuLGwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFB%2FwvVjLVNdGfG3fCrcAwN%2Fq%2FYBEdbNm0934jb9ku0HFyFaGzEf0MsTkkZ%2BoYcMMa9sHdR6J3WeyA6QdtPti0t05QVkn7CQ5oab1z5EQT28RRGK%2F%2F9OhWIvSgUhHZzYs3PErPJlE6CV778U1Qp6%2FTQikWTLGkbOJ9wWb%2FqWLwrhtcukYjTEHg33YbKhlVWxQWzfaM68KFI3aWuKx%2Bi%2Bz60jbG%2BmugiOvTbZScL7%2FMVlxPQAd04nJqR8SWYtnXqpx9T2BqWQC%2BaUJZur4glY%2FWriz8PZCX7TXlocS8%2BKq0bBeMW1oGZGt7kEPCiyQGek0HsLC6WbKcSPmQe8TTVTkNmSUlAtZpa5y%2BVk2i7GAMEP5Js000mpUpX2KuxCZe9s7pxPYlNc8PD5ptFT%2F6gzNm60rzunOJ%2BNEBzkhtRNjkDAxMHyBIrkb%2FG1gNkj6d8AwT5AiZGxmpYCfChO9f4XHClIm0GMusAHmgOyKjMe8TIlDtOQfmThc6cDR4MV%2F%2BAUpqhXpPVFOsZsiP9dtPMz3%2Fgo9%2FEW3Wa4nsSoqXoeQeBk56i8bUYcEUh3%2Bs56CGCgrfO3W8etHnAp3tvSktru99jtMFdjyK68uHvc4tgDOmjDJ86BGuVth0aQxJD6VfvWsO9w9XANBdd93X9NMNvpn9QGOqUBOeCI9LTQpe4qQIgdXpepe7phIltwhYaKCiPz%2Btp12UEH5LF2I%2BhO8i38TdhrbtTEFBsNS8nkze%2B5%2FNGAUHJ2iHAOeFH20EZX2jcoWqrCT41Jz7zBfD%2FiLq0TSlMnKVxWCbv5diGzFRANocHPBywGrgelJRzyRzwZ7zymgT1Km8JHKEK4heuo%2Bgy4njrImt67QOSmtHs8wW3tPp%2Faf3QA3rPGqgkg&X-Amz-Signature=5e8e1114b56484df8592c3b7fef2b4b907a1cf5b4d911dea0c7a3ec3ab273164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

