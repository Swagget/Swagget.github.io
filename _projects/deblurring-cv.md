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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCIFCEM%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T205153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGFMfYjZR3g7kU2hvXYeV6EwtbTWZ6bCVS0NlO3WhFsgAiEAhuCVxRe5pSeLlq7US%2BQLLth4Djw5uKnwvpxq0GSO%2FzEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNurMw0EIDj%2FVmvQyircA4oRL8%2FeMD6dBa7zjvY%2F54DAvnzL2nPc%2F3SxTpFQVByFq17aQ7T95U%2FS17uugm61AZBjyzm0b08i6TzSr5Ah%2BIOAaAOEzGZLoJvSdz0MvKYNHoCQKv4tFhc2RpvC%2Fp5Db2cfHiDOBOegAY%2Fk37713EPCEX3nxXj0gjKfTcKQXGTlxBiBqFd9TL4AH2lcCG3l%2BbCCN2Xf29iPB6Bq05HrCAIIt%2FmYtI%2Fky9sJTV%2FeFbqYIFSlYsFfqS8aXXhYSmBwJUo8BbMABVTbKjCMjSUYdag6ggg8v8cwmxBCY6oBlKLn6X3G6GIp251MLohPPY7%2BXYCbIQfKoKWcLeZneAot%2F5cHtAH5a6Y%2FlYTRGI4m2scvOMpaOqXf1AiGjUvqCC1NSj5BGqP%2BdqpC6es4Up%2BUcl2iZ0R8O5QgNpnhvUBpJm1T%2BiMoRPFe9TsilpChJdi%2BhObgvVIMs07gF8w0NUo9T%2B2SzUx8gkny83FzBk7%2FcVnXGvSUmFXYAIb1jZ1p5OMqTHsPGyVrAPHRBT0in19Rdxcbpl1FZWMHIzkGZNydV7ybnzNj1cT1HO%2FgWr4TsxTJPKDQ2MNYx3lcso6TjZPYiTSDRCk7pvSy2Fa5p8obnsQVHg9SyvPWbEeL1pHxMPfChNMGOqUBt5DP3ooGGAc%2Bd14nFQYHvfalpEDhjBg2Whf74oy92xuXLENjFt8EE7SMd8TyhXI2hXU%2BxljBdz2wg9ngdZtkCg1PkWa3loDe4W8mH37%2FPxwShaH6Nn6ASk2CdRh0uv64YsFsUsWnU%2BPT36uqRkhou9xI9TnKFhWenLzySMd0WnPG7bfyoJWHMtL1KM4u5UYTPXshaIQ%2BpWxOh%2FDUBuAf%2FlnzCmvX&X-Amz-Signature=0dfe405b24570cfd03b879a3dd9deec730d8b5136ab8fb89c4880d586d752331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

