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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UPBNN5N%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCYC6rt0ZwBTBAENDik%2Bdc%2FHztKM8VpkmyFLIzsyNUkUQIhAIRqqML9gNHZIA0XVIas5X1%2F6StrMPJdLSa7qI7KpDMAKv8DCD8QABoMNjM3NDIzMTgzODA1Igw%2FMRm52nQZybZqDysq3AP6lsqIvntDhEphdXPylF5M6j9mO%2BnsGQ6%2Fq36X%2F%2BaDia36MYXf%2BdSeyjINDm0RQxHuMuVbJXJwbE7x48j5r9WxPCtRx%2BmfWmPeoiaBOFmOwkAlFVLRpiaJMbm2Wbzyz9rPyWpSSDXFVp22HlzpDgT8QOSNr2h%2F7u4zANn5GNHzAO8lnD60%2FyRM7bRmv88llKBLqFPCA48UVYknpU6iEiJQ9MFqqvUxv5e3Wlpf9IoK%2Bu4NECauNrQO1Z3aYS%2BA9nCIqi3MRkebFRizwQDXZBER%2BNqkR633h5fkIt68KAlDxzoETohWoNmobybb6Tw%2FAutHcv7o85ecoqAQnMg7hzgQOvb9PmiTbVVRbrWf8IwM6Xza5lXQU2bYTEKtFO%2BzbJ1GY%2FsArI2ncTNLXM%2BoV%2B69azW0WRqiivA%2B%2FFI66e0nrhgRUR1LhHcIoMRrupZytkbzOqEbH6fm3UptmdgTkl0eUCXIJPt9V%2FfJ4Ir7E5BwmaLCj1Agjd%2FDp25S7usgcniYes%2FYGwwSeom1tsi3B%2BcDlQQTvziDNsjiQ%2BeuzQDUskxlx4kjGR6rbYvRa2adIkdfxwcJ%2BRwUt9JgftmBh6CAI%2FxQWjvM2rhNEc7Z%2FT%2BO0oqL06AgML2cRkvEsTDk8OHSBjqkAVPTy5COFrryAG8ODDGpRc1FFsn45iqbg%2BcCaMb72IxuKedBoUcgF0uEAwtv07i7%2Bc5kd%2BFE7Boc0RMRtQxEgymREqW9xZWLVCLArCidiKANgFRh8NARQ4nF0COygF7ldFWeaIIDMlCaQb9xGoX4xH4Vu3uhp7Ev57PK5Dy%2BS1qwMLmiWLGaIvcRFk2iU7NMzN5pYnZrEyueJxxFbZbX5CHVtbh1&X-Amz-Signature=38eb14ef9218aea523596d928f1aa2ab912159f673ee5d44d248a3c445e9dc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

