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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JNMCF3V%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T011832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD6411XDS9l%2F%2B8bxKUx5rm8CXZTHVkQzKKh%2F6q18K2%2FMQIgKuEb9GHcJHtEFyWyXSHG76YY5w2TftfYGBKcR%2BAEssIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGXNRZ61W9zQjXUqtSrcA8T5jv4z3f4QsFizqmBoACkcKgSUvS8CLzF1xE9os%2FyWIJOqzXXQ6uLPxENOyCvz51yMZN8%2BNDlGGkBNB6BC1vDsWRJ%2BMlI5%2FMhgiPX3Hv0xV%2FgCVZXupNoEt4QZyNCZM4mW62Mwyxu%2FdbJDCpmC%2B9De0KtsnwQ2tmoEZ2Y2lcZKwPUsb7tDbizCiNA%2FqfdCWx2llARXVDm0WoMa38Ht0MfG63CzgYvI37j9YDzynoV%2BkBwHlWrHEOXSXUPTmlDwBM69qiYKy8bSGLjEiQK8nnkH1llbz41%2BLRKMYu8vOZUZ%2BQsoInaGQxxQzF7MUku9pKRI9t2sbp2B4J9ySX3pHNbv4%2BHqgFguqnPdAl9%2BP%2FRyKdq%2Bx9lQ5iTz0LpxSpVWxIqsR0vSoyuiALGO4sHg5GtDvu0f%2FqsnxpcGXboFVPfcNA%2FA%2BVKllpuiQbk9vSgnnnmdvBFIKm0R4RUFQgncy4I3CH9igiHsnsQm0IRcAP9x2FVLCS1HbAxS8EHMDLw6hhroUGXdBSKlkN1CrFjdWaEOk4dBo07S5sQy3qn9MvNjECMFbSEnaRIcVNLSdghtqGikOIwLENyawUnrNmqqJwfOb9P7529Qud18BHQwwKHMgzaEjaWcuX4AUhP1MLuWytMGOqUBowmEkruPqM5okUR9A9dPmD9y4%2BjS8dy%2F%2BDu8NxjPdhKYSljHNASdNLJvBoK13ALVeiLuF0X5q0lFJPhxiD9AwdXRK%2F00GJLgpwg8Ur4PaaAA09UVAI9K8mn2GI15lENAJGsXzIQPOMu8s39y3ytac%2F8r2ZSnzqD%2FMNw7kYB6wlWowY59fIHhORb%2F%2F8nvRh%2FDJUSrSo5VLFzWNcvnLMCOGauFjSrq&X-Amz-Signature=6d92bf7b5f6541507f1ea105b84cd3028ea8fccd8eba699545ed9e5b7225298a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

