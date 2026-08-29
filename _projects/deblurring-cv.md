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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZX7CQYS%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T144428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaiK6xANaYZDrBJ1PDtoC8Ard6dZiR8rkOeDULop3GvAIhAKcX7i1a1TGNVo8Zs5I9Vt5FwMeUtX9m%2BFA3Lhd5X4rTKv8DCGYQABoMNjM3NDIzMTgzODA1IgzqS%2BB7fFmgwQ7flX8q3APneQhQwvYTm2D6%2BexMQ%2FfD1xE%2FQfNP68QHza3giGJfGprrXSz9IasnicfnYv5Yy5C4zU6onQW24gKUmwoXC3GkTSdEm3Z8KmjhG%2FEntBw5R951Z4XsELMC4G6zLMcx8RjTbdyFvmqP4pMpn98XUvate%2FoZhyeg4BsXFtEAy69NcOqOdPtw5otBy4s%2BxVezLuVKMsov5yWVU3ToePIWJLKmewUl9C0b0XQ6kr5ouBnRNoDRrtq373gtp%2BWqxtY7S22Oy1ANPik44g6%2FBdp72kbOQ5h5cdA0bPg71wtRfuNEplSepqzr6sdK54oq2GwoOrTxPBF832h4M4esFyCFaU%2FXYVLZuZQ%2FMizk4a8ImSdBdX4amMgx%2Bd3gBZcHAPZIuQKpVtl2UkDZo9o77vdaSksZCTDo0nY%2BwoTq799wVmy15TbacCFVKEKqZPINyv7DbEarDosn7%2F1wCkDKIhh%2FkzCxcp5dfuvj6ujK%2Bv%2FNYtVgBJkJuxMGUyWPtXsZVRoSB15JCFiMGS%2BEZfIsYAqu%2FUbW17QrCm6tiVPP5kjjmARbfeehg4dqK%2FFJb9ep2BnQlO5pA%2BgWS2aQwCls7N42QdgtN07a4i8%2FOMVzC%2B8ydfQL%2FwRXgE0wlKBDkOdBcTCEuMvUBjqkAf1cc3vUKiAJR7nYFBjLfLY%2Fgu%2FFS6D4FBGwxvF2AbMvs76TOVR9DTxfCeQ%2Fb5k3dO8EeNvOIJhA3xRdGB3KJS7Z%2BSEjacRAKmI0ZTgXGtC8Cl6P5ju7GfBOO9kCIMjB6U6S8ZfiWJ2OqNVADK5ILDhFCmczcV27sRPHSTMZcjw9%2FNlP1FY2aVDWMz7%2FuRvuM5%2FSsbuyciudjdBFIOMWkpN0hW7E&X-Amz-Signature=bb3dfd8641b65ca28feee68c13428cd44428f1f912af6bc491d41bff4635833f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

