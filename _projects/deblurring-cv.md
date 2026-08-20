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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PVLT7BY%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T192126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChrIVJ4K9Znn0CCMbnp6HOogFY9peOywvBcCNfhOVKdwIhAKIuj4yxVpf0erdK3Ac3e%2FgYJbiPcHxUBLzhItp%2BQWL9KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkS4mNN2bp6eKSoO8q3ANBxiz8fcGtmHSU27h5pKb7N6a%2B9mhR2EshzUmNaSCe0DiiHxSjv7W8molkxJ1whvhapDOMGAOqikWOQ9flpViQjLe2F9YdKKTOos7Liunf0kkxCMDL%2FCVGSmnHVNhU0A%2Fkufnb%2FRdGJi3s6u9lTm1nX9qKeIrvJ4tfzl%2FPLcTVTa31%2FhObs3C1CeDYrLqrhR25r9Vdkb%2B1IOyoV3njSEwWlGTEdbM0MGnfmdgCmdFYyAp8WV48Mr7yLNqouKk4gnA%2B1QafiCRq2irsjnRmkoc758L3xY8AbDPqNYSjrymWOBPni2u3SySA1vxZCH7MEwRFHMp3tB2zW5U04WH8cVQVq%2BbhMQmp9ZBz2%2F%2FfG9uFTFo0o%2BiARhHu71BYB0eeAw%2FR%2Bv5zhcZH1pNRI7lPnZqkiiaNe1S%2FeFFc%2FiFi8mwjkTGsg%2BFQmBqAIq5pDSL6c%2FYB4TMTobvo8swe9H%2FP20j09aHRYyHVkFq38CoTh2QhKeNb3djpQO5nP10edJdQPdAhD3R8v%2BNL%2BrzEX3BQqakdYE6vQTjyAGNgvZr84wcOK09m0V%2BlgOngP3RcPKypy8eQNY7ezTf9VZ%2FGCIdfEk4VJGtaCHvBPus%2F6CzsfYsjZHV%2BmalWxGLzQOgXmjDcpp3UBjqkAbeKyQkPR6umthwAeSELf62JJlec36FKErkiCN2Me9ES%2FGVcDu8VFHc0YRitD%2FIQwXhXI67tqTfNwbnVIh3Wg1ir1XPcYMmB2lBlTZGzqFUuqNys712YtXN0BTTMPyVy0AAOU6AMrVY07Evdnjmf6O%2B9peHMx6jqRZvavAqSp%2Fm1DBiwl34nOQamuLVfXTyYg6DymgBUsY2%2BMT6PDGDkbb81GcOJ&X-Amz-Signature=2d08f53f4954cb705698b9b8e1e1a84d7ab7828164e5980b90918cf2c596a7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

