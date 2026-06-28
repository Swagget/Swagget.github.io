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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIK52JL%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T065056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChgcFNI20B%2BDixBtajBLwKSlM07dgc7Q08bcPvZzdGegIgPqLUum6phnh0i8lfl5f%2FtcpEqAUYxh%2BQoekTEyzKYs0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNca8GnDcAphbDhRSyrcA%2F9Vk4pXBJStGQvlE0N917Ny6aWq4hO%2BuhU7u3Kso3ojqYiulvj0sWRjAJrku%2B%2FjHjVoEAQN54tJo%2BgpEzPZMdP78jdQKRvAPPRUDKYrTJ%2FXeTU7kPMabcyXmU0Lm8%2F7MulDiXVnr2GRHxMtYlv1kKYkw%2FYOa%2FEhbv6wdSPIcHEuyKoolenyZw2s8T12SYUrZN65rGl5muyts%2F0h%2FLPk2mxSGivduy969uDKIh%2FydlPYRqnmZ1ZrASxp1btuS9zRE%2FNbV6iCcCxL1Fi893G%2BXTjRqYLLNpsqPK79x8UD5XtIf8Naylj4Ig58NaJrcLTpZ9%2BMIi4tlhHkZ1m%2BIqUAmJH9MmXMHvvAutrLvgwllyOF%2FuFK1%2BRaOe%2FkTdKWwcdrnUw3IAV9I88AXfIz4PT6yMcW8nsEUMc9ZwJ4rShuCTnPLGC54tr4j%2FouFy7%2BnR7K%2FhWAeas08q%2F5jSeyFJzlbVeQy3EmzkyzR9IyylKAyoMRwsK88qrM4Q6HDgHPDLEh1Ln3b6Amk4%2BTd5b0R76J11Rsx9lQw4olTw0X%2BBmR2c7mAeWt8%2FQQZY0akkF1Vo3aT3lkMIt1r7SBrJbDTJWGqm%2BVKRL8ojkH43dRHDTuAbBOjmKvpOOydV1%2BARo0MLDYgtIGOqUBTuiN0cCiZD72ssrVjtCQYpMkznrdJoCJTDHsro8sS6q30%2FSYD6uMG53KivlVd7wkzFyPTpebhHImGLuHTvAhTJbKT6cxywMEGX8XC61iyaALKX1sUEt%2FjicQaRJvhMd8E3UwUryDVXZyPqSK9bdnVUQQAaP6VqSKHeBc2hix1W75dqSfO%2B03YaIjEVJmRU1fkSYdBaT3YX6wQmne1lZWfAaiCFDQ&X-Amz-Signature=d9c1ed24819bdd7b227fca53d7645a9918347278aa2e45781dfa77817c65cc27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

