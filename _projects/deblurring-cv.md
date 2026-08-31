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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKMAL7C%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeNGnAJvE4QAoo0bgjL9%2FAYP%2BKdFVNMTIVo3q1vcXSdAiA2aAFEwAxqSEoKT5TL3mJz3rRFUkaVHNUJ17xcUnIe6iqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuHAhzqvtfEzmIVlFKtwDUHr94PUYYrKDM6ngcyEAPO1r9XLdXbEyxZOF7joeQwxMLKsrei%2BxiX6szHF8YQi1Q6RGFKWbHJeR6mpkpsWzNqdQbo2%2F0%2BQQ9QJ5uVVlyyQjSOCwwEudknul6jpNa9o5%2Bb5duYFTEIL02hfnAq2ZXinVdLa7fGj4EBnZLde5R5YKwiTER46kRT75geCAay4R6v4JAZNE8roe1nXXtAs52yUCTW%2BStK6RxupslLPQANTblR6%2BkiyEOD2PvWsdXBIMmusLElURTpuxGm2dSwWRG44HnVbyRFVeZHwPWE2NhGHRh0QgfrQCq%2FOJLUxOYI63k9nabTVRXjPldKsauA1MfDY3CeiK2%2Bn3vIt0a86NrkPI4H0k7hFdwmtALiX%2FUgNOJPMCnOB3D3D5jm1BBfXCpx6mdA1642r2tIx57sq95mDMf%2FJwQcb5dUTf4OcpqY4B8vm3bQBJoCPO4FjxONQZvWIvg8TkEN53OQO2iovd8jI9SbRPmW7eZLAgJceke%2FLtW3LWlL8EYviN4ANFwu%2Bp%2BrKbb%2FCfE58sbZbYnpdKU%2BvYzWDA6A6v5ncUAU5tQCGTMA1eYvK8n8xlmpN8ZpCviu%2FuvRl7iV%2B%2BdeXarPNQp2o2plaUVSk6xTvaofUwhIbV1AY6pgF0ZgGVSNULxbPyUgaExSJXrNOQyDBPJ87jYXIRGQxrX56OzOBcq6RYNR60UJM7VAaoD%2BNEC9jy0BoRauXCyBbYvQKj6ViDMxJNB1DrX55Qev5PDKOcnLOQtgwHglJs9E00VYPQ3a%2FkAy99yObj5IFf71P2ymUQxtmLwJKTdgiydClowPuztUw3eiU0knOrJLBH%2BwEMSl1tRS7pmIx1bN72wiBmxrhW&X-Amz-Signature=0dc656b14552daac4d76eaebb71cf9dbff09d715e4ec8eac8b6f24b84bd1303d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

