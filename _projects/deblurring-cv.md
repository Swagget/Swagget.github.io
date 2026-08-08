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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XWOHD4J%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T122035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwSnSF1jkfXLnKsqcsWEvwbHOTySuGWSn0hj3kiFRMsAiEA%2FaCQOQe7ZOhP%2FUqDR2FsgBQ%2FqhLpXHuTloq9mTGmfpQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDARmGEpqv95TXWcKqSrcAza37mrYZoV6q09Mkuv1mwIGQGC%2BzTiC6KmPmOqjm%2FWQ%2F8rV%2BihEXjcmVx2SR8VApOd1yZuUTFuv9wHTXZbInlMWKR8TiVsOpgUA5AgcWQtcG9BPlEM9UV5yJs6t2%2FHtTSK8GF5zrl1%2Bvv7oGnaMbhO5UCaEtCXC%2BSa%2FGg1rKlQ687lweUiiAYH10UILiP0HwxQ2HiBp%2BwZY01XSFqUvQhlFndLIU9AbNv5i4UZA4B20NOEfOFROxEqPSNNeX0ZM42u900JtxykKQOwz3RDI5%2B0adddxot%2FwmgsFBE1lC2r50OutAGr9h8cR9r7rQlgZQMDivHuLbmvwvxc1pjo4QZetq5w9Wtv014hW6bxfXprDzGlEYRM%2B9%2Fsf6A6hcJDX82evKjHnsH%2FQy%2FLgwUeD%2FLRBsAs12OeLBfrA8tUxCJFBiUzZHg%2FO%2FxtF%2BfG%2FR1skkvQajwbwzxLN87JwZ1Ae6LWHM19HZODQ3BA3Gp%2BOLYvd%2FJ7stCh1E%2Bm65lCnY9sC0ZaDfMJP7wWM1mtTQQgmBAmEZUU9YkGMlrteHx7tQx05GF84bP%2FiI8Ghnbl773nTqELk%2BkQoPfuBLxkevLjUy%2BU434Dg9l5LZame8Yoogs5L6t3m3wGmA0oAJA3DMOHU29MGOqUBWeIlC0it8JEQ5zKaGXEfPLs2gMfSfRCiFxuoebfwKEzgpfjwHpbUNwGZfyxwZi1rdGbBCkdGNKTrCtJq0O2Fx8G%2FSpwu9HNt5mUOqxbuV3lC5r1xsk7J%2FThQpngRNA7EUOIAJx%2FgyEhOyzdwpnrK4v0T1LMpZJfMWnFaWwWHMGARUJtcIQ77tlnPIyd%2FKBbT8WHf9GBkcKy%2BytccZsGv8pnrBAtN&X-Amz-Signature=f11b0ca1c669558cab3efb686115c3e701c197789aabf73dcb6f5e7331f81e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

