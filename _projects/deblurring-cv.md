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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDFZUKVD%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T082920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtesOFoZDrvkq6Yo1Bm2nhhSPV1CJHnBskIg2Uo04jOgIgIgECH5MZRoHVGNg0qmHfMcCXy%2FpHHMJo80c2803BFbMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBxQxLFjknXSaxn4iCrcA%2F09ohCryoh9anwDtKKKUGso9ioxvph3L%2BPxM9qdMNMBoBJS5WSGfJS0akwRXeYZ0Di2fEmXGX%2BVdGkAx%2B8qQOs1p6pIdNEH%2FvUR78TVlItLbCExhBNN%2BfdoMFteCm6f8eNumjV4uoQIMXXRdptoRO9dFdr1ceJ3hB05CcawfcO9Vfv%2BSLutp%2BHwmdpSjnVg32lE9fQLEnwDTml0ER1QztQSCqJk7GK7GzfXckJ19YPE0u4Nszvft%2BN3ugQfIG%2BAIZ3C9ZS26WjP%2Fk5xf3F%2BzR%2FXD6X6AnRy5xX3%2FaqIkvhxvyRCS8D5DOF5fVc4G%2BUOxrsoLSxFITinObUtiKX6BEq%2Bava5d6z5Np1%2BA83FauQthXj041kojZUh%2FQ1PuV5bW0ApeukvznvzwLIqGA%2F6J6DV7i0wAS9XVWulGZ77Gy1clN08%2BwWbxC7Xkihrzeb%2F0SAU%2B95L3Q5s9SaDaGeTO2UBQHNEo9bG7j2pp68u2PPfeEd3rV4znVDYGADFLcqU5wfkQkngqHU6%2Fh179uFsC3eIbSPCqg9t%2F9fR0ZD8VtCxufURTMsuSyitavLGLPZoWFZJ%2ByYISIbH3%2Br8dNnUG%2FjbP4PmULQ%2BsK0Kr88f4fOkthTWDItPlPEqBZr8MMjC7NIGOqUBQSN5zrdo5efLUWbwO7B58FItXtu0aiFCo8W7erjz7FjldS4Ccu2oS%2FAyvazR4amXg1xwfyaVGssGbZWdv3XQPZqGPhfBX5ULsWJYAeajPduWwCwksUSc7k9E5ZFc%2BqPyuelRM0e2Tvzw%2F3erW%2FP7VlDawgqvHJyUSHLTfQiuPU6ni6o2VAa%2FCXrXeaoizqGpZMSk%2BIZiIprWQtd2fNr%2B%2Fi2siFGo&X-Amz-Signature=a3af4acbb7dc71f61739b52dc3b2f84af3e43ead810ba0d50c862f27d1245fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

