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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWY3L7QZ%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T060452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSsu26oidtv0mdUIypWVF3ixpq1wrvA3SK%2BT2buaqmAiBqfxVp1uMdaW%2BgTbGm6f2usdzdXVSQYNr5nCqkF5EOkiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTRKWEQebgtNIKIoKtwDm8CdeaKPNOlzUexzLijag21EHg%2Bnv5%2FmTj5QBJieqolK8xAyxI0ahsCuEo%2BzRKm8eAgup2SlQdomOmd00b2MD76gk6ETTbk5O2Ky3l9di7%2FjmR01bQ5bJGcEELQ%2FNOeR7Anl0LjgadYeNf2mbGSM%2FHG5K7FgB7dTielUFdPdBAQRAKM0NZ8ac8%2FToZCk7e2yUgbypevI387FEGUjfUNJzBMeHozJ1fdI%2FOZQ9RG%2FDV3nC8ix%2FQFOGX4Ih4jdgi1CMS6UW8SCHsbaTmYOZwVwUMyjxPsZS5QFY1vJBcw4EX32GKZ65IBdzOZo6XLMvFhkwpOeaenWexgFpmcOeUH08ycSlwLMZqoODbQnXdqzC%2B34tJACHrh30WyBXYdnpTs6a5ndhSU1wS%2F4BX8ADM3qqYXZ%2FiNsswx%2ByDrKb9zoywzMjZugxLGtES6%2B0IWATgRLOP%2FoHzmrbKcECpnQHFxZwltSzJaq1RvHry%2F9lAphsPeOXdBsTyG%2F1xdJzQZrptqpwhnJ8juh3%2Bzu2w20JvTg1wA6mLHzB1Rt3mAo%2F%2FiAHHmDy794jXaqFOFyHtxC8822gteAKR2XcAc2Cj5pms6%2FfORdmFfWKgzwhADiCj7y8xzbdtOb68GXOL41incw0rPT0QY6pgFcd1mEwLn0RS%2B5lvgT7Y9PMMLwrjy%2Btk%2BsBKmt4TC49DGqhuxxLKL6gJZ%2Bzw%2F6%2BnaUN2G2KKXgbMQRNuSa64KVUiSu6DXYqi2i%2ByqFAySmv6DM20pMu1%2BPMp6o9HNBpOqH7lhrrDl4znygxiD76EURJcGUuXEcvCC3vssnoUjuxB6j29lVsotLnBq2qsUEfQH6O6kaIIp63J5P8wRrGbigzFhVRMQl&X-Amz-Signature=ef2d76fa2614c407d2bc38ae96b30ca77c7c1b48cf2595055548aecd85daf07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

