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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWEPIIU%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T150151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANDMUfWierHjuwVqqCSXEmdJPcW9inGpPobUXT%2BPTkFAiEAiuxLa6DN6zxA2DukUL9G3kxIxBd05CsTC8w8m7pjs%2FoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEH8513DGmfgIylaySrcA0Tv7yc5X%2ByGEd%2BCYU7ll78OHk6WbjrcAhGVrM5boEBoHpKg9SGY2c7PgKzo6uzBJOeen0%2FLkTPKBrAUJq2LetlEyHBSlJHuo0nH%2FBescwZC8uh3yCXqXWQmZKiCoBnQfokkrNEyOdgd%2F%2FBX95wDvxl6JB2KCYdiaX96coJIvo5SQ0kdrdJnLQ0G9bNe%2B9Fh0ltw%2B8GT3rSn0OACaLUjjs3Nj5bIve8icteF9z0AIedK40rN%2BcMKz0OHzxlDJTBfdEqpQ2gsQBNUEvh9VkJ6tJWUuTzjEF9dD0y%2BMk3eLvGmKa0flxsjAjCgNpzinObdQ0to%2Bg8PzNnvgjv%2B9EMODGuKaPyETlmH%2FlbmNRJ8VjgBOum19PBhQVMrcHQ5kyh4dMZnyKuVLT0rGeG2ypdfWOCCOOJ7Kw9BdtAE8evKTwqx5XLFup0CbhbAnldwWBIjm1cKRU7RNCCmgQgH6MWGlu3HXNZ3yEBsG8qlzEprMQnSWKhu27hKO4B1gF4ZGmTHFq2hZqCjkjA1FE6zr9qRPw1VZXnsxd4zqCxHQUJCFLx7ZT6l%2FdT1Qoctht7yGPhuQCzx3BpwR8iDmhbNSqKt3rHZCnO8kkbRxL07zx%2FavbjpPsjhcl7hV0K8uA8gMOyiqNMGOqUBG5RGCjG5zL1CLXruNOuMgi0DxSFud1XuyC2PZcQCDpv1a111UGwbyvAm4R90Gqc%2FaVKBdmd%2BmLLjfcL7Y%2FPMREzQo8NRTevzPQ99oa6It2o3wDAfXvZEB7yEJ3JrvW%2FKyvT5IIY35BcQ2y4tYI4DkyqnIFPvGIlMXvXcMpZuNzvK08zSVTxBhpPQ8Mq1sv9P1sDd81vfwCktCDiIr8Gsni3pyDt%2F&X-Amz-Signature=a388ce1ebb65ef83e16e7fc1ce0e0441abb379d0f5fb25dbb60ec3199af3c56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

