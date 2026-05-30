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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWQMAZDW%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T200120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDeaGAoSJgT8%2FWKDt%2BdnxsTYSB1qTZH5SBG1KXTETvCpQIhAOdNPPTa9z03TN3qiUSXE5nQx8ytvdpk3P5opL7mbXCAKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhSGhpp03dwaCfhvwq3AMYnN4hck8i6%2FfqZP2iMBtkaaq2%2B6kunDtdgAHCtBflZAEFgkyNbHI6SHe7D8WoiklpJTgDaVv%2Fq6uD6CMbhdtyiQUac7mTTW1n721Iz57Ufn9hzAHuIaNgvf3vDaPzxJ95YNj2AuldOkvQKb4nLaPCAWXnnBxoBZlXzPLRJJfM1hXWoKKMRI7IDU6sP3OSmbGgzxgWInnn9xLhZHhyvR0NicbfVrX8E%2BG%2BAjwyR6gY%2BpfU2w21EQ4JwfX39mrz5%2FGf9h9Fn%2BYWi%2BcpQEi4nFk7SeenqBEyv2FYcSVG6p5yNR0tOq2Yg3ajssxc5N%2FD%2BsHQVI2HK4Wmhls3nf2wNGAFN49TnYFjavkIkeoluwpPpMUF8H63Cn6yvc45UhEnJMpyFeNTRB0ikA9xThCez7Y89LwzIuJWL12XSPQOp5PVEBT5kdJ26J9CwSKk0H%2Fy6sPzJe3dWfT%2F2y8AEsE6jxxFs%2FgRZmOCUxYz00CPe1Jcnnlp2QzLYVH3dwiJTYzF3ow%2BTIms10c%2FPHOWrjUo3udVtCBjky3SeN7pkp6umZQnAwnjNBEuuzi0ifK8a3ZwygIzee0G1umgf5opseyOoQ%2BBvqTK5e2yPvkR96Dy6ASOSKPwkqGMDQX44%2BIdyTCnwezQBjqkAbhtq5oCI3RAxCiqMh5oL1l%2FjvfXZ%2F%2F%2B%2BMP0VZasdLK%2BNtQKjJ7icOxY159joS94AljEBc9DZKLT63SC7NoiIkAAOuDAH3pAK%2FFX%2F2LfMKqyFQpRlqIdii8aCg4jln%2FwfQ%2FjtWi6%2BzPFyAQ91yBiIGxSUxJ1bNIXvJQ9v9AjOjMi%2F55zu%2B5%2FOSoU03LR16FuXx3GAUZ%2FlNd8EAgIda4qsKgAUPQa&X-Amz-Signature=9fa17cc670b6696f6260f14d6fe77032be9adb0a9ba414035be374d6e75ac478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

