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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4G74PY%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T123824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcqZQ0KuRI6ywv7VCCUW%2FdO5k9GDdHjAJTZApExSl%2BwQIhAPqZUZOt606Q4s1eTKehP1pucKXdAkaVBkBsW18pCJeoKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmA9LKSyWWKpwLp44q3AMoxkZr8IjhM7Lo0MuPYppZt%2F0BgyzB9ZOhTopHkiNZl4kUnUCnCtqFLyVfK0WrjCp4qe7UgBc7WYVE28J1CBiIDGaHCoTzOVsdoUUoQ%2FnM%2B0oTUmiRvwfV70nDWXiKKEPFSgDcZrmjYHOlQGku3nht5KIdnbiBynUmOlcx48ByEFGPNvX%2F2jVRomRcwkwSu4saA9Q78f2WwzU3UZeElJLUVC%2BdlBmfK1QO2l8txh5twzyYXDFVK6ZJ2cCFGTUcoeBCiq%2FyWYq%2BHKfNme38Teuiw5buL%2BMixYlwxWgLj5zLXVGbQFByJT25Oofn3Mw7XUbE5Wmq2wGcpQJzeM4QypA6AxTPBTlrUO9M2Dh%2F1E7Imq3mxHZMPJyisacXBMJMxtXYi93hBHYgqUD8LYjjP3tMyL0OhasutQ9UE%2FEJ142i%2BqjE1H3a2lnbhsUnXXVOB%2F7wt%2FNim0UvNi6P2SAzHUPEduFdTdp%2Fk4GHp%2FLIk9FpSZqhygh8F74RJaJPSoBDTKo8X6K8v9djL6Xoyvgsns4ln7deqx3H6BqzMgHURHscVqVecmqnIta6TSckFUcAKXGhpLlsIgZe1t5AZf%2FTUs8A0D8Hjy%2F%2FJpr2DLr6wTj1e16bhVGD8F2%2FbRefsDDr7%2BbTBjqkAcdabtsa9RXY%2B%2FclcQp1usZ%2F0JCHR75YLW93gIMRMvdRGC8mrLwA0SoNyqKxo%2BvoeCa5EOCN1CmLLT7rb9XVUQYtJtt6jPKgxyUDDKl3pqfYLvLPOFuxUB3ETFeK8kGtb1zCMRxRwWgfyAcHEGP%2BqZnXK3lyGouevzkcbTyZ6q8hFz9fY1Y%2BxDTLKmcbqsUGUxm20bhoBCmdsyh5F%2FyO6UE%2FnTuS&X-Amz-Signature=241ed3d93e772afdd1cb34fc6ab18b8dc5959853a94097141c0a2496274bc84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

