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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQHZDU3X%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T225116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr0ngKPs3IbHVBMPmLxCanfEm5Gn7a75bZGWE2ZyawLAiEAueGX8edgaYgUmtV2kx7lULEJcN1C70qzOnkzgQXAGV0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwRtBENayAJqUtHDCrcA6wTpmU3sSViP1CMT1%2FyvsqInckQwzo9HmR4jKdbzmoJBlBRR8qte93tvkeHRU2m4UzoWHmKDQGewjK1IuC7yA%2B1fxQEjLp5Zj3YtDB%2F5W98f7B%2BABnZxUN0sDB2d5sXXRpMgBoGnWEmn0dHu74H5%2FKp5zSQjwgGGVCwX5hJ1DGraFwxIarpq5hEixwrab5rgqCcth%2By%2BHxtvnfLauyP5zYpd1cY28xxdQvd%2B5QmR%2BI8RvXG8q3MkvYzW99Pj5LgmikPO2J922s8VSuvFPmdXSEtvh9tjAtCo8Gx8sWNlzjjwW7su2fxscbrX5Uvy9CalNqUaiDQ9PzWW58czxPstxPknCbWMKfqf6lS1y1M2DEIj%2FgArfDExfkcpjbQ%2BOMrs65xmg%2BUICJZ9DyAY1dHnyq1ijls968YoFSroER3pzkUdyWZIIY%2FHSeJzWnI9C00fpe8lLgcrEWTwf5bsU7N6hLiRyw%2F8GmyKQ4CosGVi3Edzke1tmHPfcfaZCQjpeBe5ir0DzpiV7daWwWqYYJNVuFRMUa7W0QEG1aInNgyWlaNIUwtutsXeqHiu92t3hnkqBkV0V6uHYAPO8sCQxZgiKRf5d21py33F%2BfmIkXxT29yeeBaNudfT%2Fhrvk54MNe8htIGOqUB1liITzYNESb7%2BX328XPeP5nPzOjK%2Bd5sTBqLfuIxxWFGF%2BNXrIOzK0fG5Xlhpl5fFRLvjPW5ekeywUNKdedwPnzFCPLMHSTcmop5qNVAysnrT8P9jl0o5oZt0R4TS9nj9hrDqi%2BPhoYSHmwGb2r5HkvIS5Tm7Hf7%2FyO18frAlWLWnWCsZeEF7WK0o%2FjHDsJREdwEhVLWcq4eJfrVFmQK9eRLfNfe&X-Amz-Signature=35b8971d358914de232400e0785f8e351bf3c14926a1541623beab3763cbee85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

