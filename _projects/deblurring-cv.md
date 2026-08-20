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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7A3EBP%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T122010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSaMs8Bnche3owqDepm7YP6y0Q2X2P6rQq1OOtHhtngIhAPF9Zhl%2FJHR3CGNqd9ZURL2Dv4hV97q8mhpc6KQJbc2dKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQAGLF%2BhiVjkpgDn4q3ANipdQjA%2F58e3sao9fElr0Q%2FEWYw1fIuNC%2Fw58GiusIKPvq4LyZcdCWdsrVq%2FY2PcVgPHrpPBffMjFryVYz3%2FnUwd%2BW4Nndu%2Bl0Uu1p2QgK12%2FTe9cerGGgxUFzwk9THKyHlym3DAdFpuGSdEJJRRfkGSU3n01AaS4SYqFEwtBVMBHgiLpyIm%2FOL4Uaid3LH%2BrXG7sBbglL7Kd7dIcZuCPbhnL1iV2Qx1%2F1qoqoC42AXs08CcKTs1ls2XuB5vQZrO1Rr0eDIQpRnoVJ50UwDAYmsOa%2B07WMat7MZi0sXdNA5%2BcePrrMu6SCwndXBOtVoPRIbuebifBfU5mlU6qY%2FYOicAbGN2keVA2X653eigzW0ynR%2FDnJDEyjZ3wWVexUBbzDGXjF0L63T7qOoiM3jNsMFDeJQv8zCjpu8i%2F8%2FwcuOn75REJa357vMVOAisEgR%2Bb2fMS8IBpZjv%2FROitFa8AFK7DrMhASZKjhiC9ez1%2FErsHXLPNzuU6IjV17aY74OThJiUTKKthatp%2BbBMEhb55LLWqhS362kAkLbI7wDw%2BXgRcMaCSIHUb1qSbHHxGTZYW1lYgp%2FKet%2FTTltFKdSaNH1FxN9%2BxZ4cP9CjX4iYOXgtPOjF0IrUwIouCCEjDBspvUBjqkAWvoF4MZ7ut1ogw%2FN2Nog2TBmzCllo5r0cWKPbsVtD1tqVGw1dR45b6VUTGTYotXbxJF9exEDC6xdYTl2jfnGjP0gtKaMZkeVWM61i1vCzW3I%2FtmyEp9t3DKQqp6UxiPgDaD7%2Bwd7ArFZSYgiiCjgUyTmlD%2FXbXycyEVjrYygzeFB8D4uHRjFtZq592VGF05mTfY7E5RD47XFTBaWVnoM6pD4M%2Bw&X-Amz-Signature=f7ae31c3eb9f4bd49548a15fce5eae3a7053f78fcff8e06765b24af2081c10d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

