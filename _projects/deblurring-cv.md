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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBOF55S%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCFsoywmuzA3xA1M7AxGxMD1CpiptGHlZDise54MjB39AIgZ8opHqeZxlmzkCoK44jZltUAvCuMfeoLUQWsQkxnlTEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIdmHGCYLIrrNda6yrcA%2BLVlWzNHeIqYB8z6J2xxt3GOAmcrfewlGGXNZekKqcfuLPDfXdpPLnugrQ%2Fk8Srd1FhsiAUD3hamzp8PmeYWORBLry%2Buud7%2BacZjH2rwOKdCndE29S%2BYQiIfbXZBu9hFCtvgk7GrPygbbHz2h8N3VmsNS53VRVX9rIMuCAF3A3kFGfV21KTIdHWxLu0gZu4xm9J2r3apoIJ4KQa%2BIIh3DTGE8a5p%2BrIWGX1iH%2B5mm%2BRgS5YBn%2F1EHEgi9IZKwhRDjFfDIUeUltz2yKuvAsgTMvK4yZNiN3%2FJfw3%2F2f9nxg%2FTnhCc6y%2BcZoVkSalXsIjuYjbXtCpKpI7S7B8Xi3EhCdzWSHIzFfHE%2BziVaC2EF887%2Flm4HQakb2ebxSw2LXmBSn0%2Fza6i%2FJCTFR6icRrxF9CCRDLJk2oabtF5B%2FmBlgntpm%2BptBO1TtIGrbv31go94etR00oHEM52uXqTLoRUE1Qd%2B4R0UiwXEJhyqIZLH%2FL%2B2HMjQHzsvfHqlHz7Y5CMsME2XzzSCi3HAXKw0HuQjvjVn7N0Y%2Bu%2B4dqIlMCjOrTUv40ECuh4Igl5YDE5kRohsXjm1LveVrGqZzGqmcpx9rxTfSw1z4ToXxbGX%2F5yjme8FjykLZv9vu9ibYtMOb%2Bq9QGOqUBM3e8jrCnd7xguPX5FuwvCUeG71r6cMEWzz5XCXBOB4MJrpUx%2Fhw55Pl%2BVmrwHA2xv0DxxdGACkbTUqPKtL4mQwTaqQGx1%2FpW0LqWT%2FClWeLXGqtT6IitUXbJAmLKS%2FMMBk6pTSXgiCWTZuZF4bpG0ua4g%2FH%2BCR8vC3hSrMdZ5naLqo4Ek5KfyLMEhNaSW6XmjlRsstdVSOc2fhEbbx6M1I5xVPoh&X-Amz-Signature=a209b6a9397e8693fa6f9dd80f2dec95070895629c49c6252166f86074050a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

