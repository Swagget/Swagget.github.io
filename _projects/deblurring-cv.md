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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY5YLBAY%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T100625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgFeEbjXoBxPuhZw0piLbmqjsvLos4KurEMl1IfGr0%2FwIhAI7O%2FYTYBHrX%2BqVyL4E1oe%2FdL4Ol%2FYqca19zF8pUP%2FASKv8DCHEQABoMNjM3NDIzMTgzODA1IgyFFojkmHPRd8ygMIcq3AM6DshXAaUOrgBExlkBfjF5UOfqLZGSACIoC4jCUAMtWpuFCEEzRC%2BI3eqfVktmJyVbPDQTSaB9L7Z4NLf2xnpMGVONKdSQ%2F%2ByPfnZqSSjjWsV8NwReU8IGJFH3aaIQzqomKyMO9STnEMwXfdCvDCier5%2FWMQuEhLvN%2BXsNOF1UGpJVAg8tIni%2Fgkvv8UU1XzHOTuRRfi64COCp1zhtqKnbNUr%2FY3VZtBfdlPd7fnrqPXfucaq%2F%2BcY6%2BMXdr%2FMubrNaX%2Brqmo%2F7b1tjBnbPAs%2Fi3HX0pZ3fVELAQr9fFOnm1Itxa0pnZ44nzV3sO%2BoGLHHsxPLt3t%2BaAeDHXhuPzn68hPVKkyLA1DvScbOcp2wUFlv8E%2FlCwVqPmjioQfnRzosq0FUWM8ChvvYkSkQIrsEgbWSnfoQOvM5kGZoTL8meFOsiN%2FlvsqNtKstvFGZEMUYmzHg6EizEn8KfIPHDxkaq0oh%2F5%2B13VrauqQhkMh93yjrynAmDAm82nxLbeN7hEmtjzOfm7o%2F680PAe%2BxUwNJtvcbOtCYtFL3MLX1v06UUDR6QU%2BPJgshjj3kTTx2qH6ZDWY3hEtd6N6y6tBt3zom0kwiyvSy%2FFzHt2pGvDpC5%2F3OG%2BpSHb7jjIpxh8DDN7%2BzSBjqkAQYTfpI12MKeAyJqLwPm7QiWtZOhIITkIVS%2Bb34fHiXYiVd2XT25eGv2U2ujyCJw80CaqgNqR4clB2zW8AMmPxN7Yg3tj6aDh10i85xzcR0KSLiahuAogjdog3dvb%2FKQN0LeXeNrM6esMUEm3Zm7ROeH2xp52%2BM%2BxVo3mAyJopzT7Uad0Ris1D8wTQU0qf3kzkHjNwX3o%2FMMYZB8u9M%2FhP7XkkB8&X-Amz-Signature=01d3023097b5b3ffb7fe4782d95a4d72c9aa8368261805154224f48e63807061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

