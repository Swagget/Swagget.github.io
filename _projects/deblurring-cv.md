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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKAKGQ6G%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T054426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJBWXx6gR9J%2BM3Bia%2FR%2FsMoz1PlxvI%2BqUFAEsb73t%2FNAiEA2SWhLXtVhgMaAk5Sg%2FIi03%2Bg2b1uuLn0kXAK6Dtxr9gqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJb9jvBleWCNjbjzKircAw1%2FBIvbJVv7lmYhS2BPsQifRB1XtEXX6oGTfdmHtciJi%2BchRpXaXwkhr%2BTl3iJabab%2F5Tx5MtQ2Qr5IhjAhbx4XZEqjicKWv7G2JtBdpUc4Lc7fxOF1fo%2FZJ3%2BM7v7iQlRuH0RtoUvf81Qgt%2B1hFf2mC9Wg7UbTsa8yqKxFk%2BVf17TBriW0bZfsHy6SV6z6HLCQRv6NUngV0qlfW4TQUIepmnbtouowyV0ho9fcJ8qcScnjJTZdwS%2BoEY41WW3UTSBVt5mqFEf6KyOyVIpb16eN%2B7ZFeU0lihUqXs%2FoEq0UrFHmRpbNXLe4vJwky807jEOPWHd1r6wA4SS0fGu3rrBmMDW8ud5bk9t8SsoclbrqzlyN0vP53LqaKz28ECbyuLlYH8JN%2BPtd5HwSis49pWew2qmhGmCXyFXrBjQaW5cFz6SJKtc0LQZwnN4Ir651nJZFMbOdlPgQAE%2BWn9lycHeqeT0W3rB91bAm%2F53YyKhBGb7hsLfm1rbarDDa2JRdcBptMWoFcerEUaiGyvp5oV1a9SwMyC8RWEbWzuyN7UVDxql%2FK3owVvK4g%2B9GedKfE9J3Loy%2B70nijembfuHxuApjSgF0Sy7qoFh3yEHvdOdJ%2BLqgJwLX306YW8HlMPrQ6tMGOqUBOhajd7fjXwTRSFY9stdF16Zt4xSSQgP93Lwy%2FbbnXTis4l%2Bmix1MNK26EjqoRaD4IFDnZsF6NsVkASWp2zp7T2hwrxU28Gnxh7tIL%2FtQRSoKjK3KBF7OZMn0L9jbojD7tF%2BBaZuVqcZ446F6ejOVlaIG3cL9%2FBy2pwCQmN%2BCebmaYvcgvHg2crXhSmTsiioGle5Z3F5p4dL49%2B8OByL6iCw9eC06&X-Amz-Signature=f539b71f23ec3232580040b3b8d2ed0200605f072f9b6cb65f852eb1888603b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

