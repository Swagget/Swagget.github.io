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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O23PYQ6%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T153859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD1pzn3B4F5IfYzSOGMO4K6slqAEtEbAB%2BrKND8PzV%2FcgIgf3U%2Fn%2FIa8TkcKdER1hMiplk2%2BJAXLd2qvz%2FwIoZxCTQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEto3z8dMhyfsVmUAyrcA0PdWLg8fbvk4NoyNYgJrn1MxLPj46a4UGUF0a%2Fr9LrFsF0hCEXSJ3zICtpvfMTI%2F9vREpTDAQss39QK%2BYLjBKXSEw0lWZdfdNmhc20ytOVDuP9E1Y4ptBydTNPegojY1SEDQ1ZW9q0ZQ%2FJVk2xlqt6NpJgwDWnvxaRCpefuRZm45e8h44TU0BEv12JoOfRF6j5q6Dg8LNRUKfyPJNqswmyR%2BAL28uoR9tEM8SgEaD9THrHEIKxgfzLIxNHqyXY7yYA%2BjySBfjsXyS0R1k7p%2Fo6NGjoKSL2hbHkqbD1m6Q3PM9DIvOkG2XCTongKi19NEjAhWC1JgC3WpccIvhbZ55lW6kr2IYos0gvd3XXWmsdDKS9Xmw0lHm%2BRVrMEqeD9HOn7%2FRv0mKTLo0339b%2BUNTsUUsie0s8RSmUxYXIYJFoF8XezA0XAFCSQ3WsinKzFQdhELUEnwi%2Ft9%2Fls9zBZtQxgEyJx18LrkxleDJMnyehu%2FeEHc%2F8UYiiEQd9a2Qt0ageZE%2BsvLpE9NOuEgDFThNyKIPA1Lepc7RLCDuEnS%2F4ppUYZeB58A%2FS6R6TlZaz8GIhnCeMgPgppH5BPmmuXtdbn7R78cpl9KLjFFLoPdtS0EEJACXd5OEFFWUqmMLS%2F%2FNMGOqUBUv5zJPQhvHiwXkFUeap8AO649aPz7H4pf668Ts2hF5ct5AVhrZKCRrSxkJN4%2FrPbOjmW24nCNODxw%2Bj50lCROQAqXKx%2Fya05Mk6M2xobfQCZwrhq7z7aERSiIey85D%2FcFoMpmMMZfFxVthKgenPp9WxCs6EcgMiGrObGHiW4eLaFSPTkVOj5MdstYAPu3HECMuT7EbVFpkElXaO6q3AiyfwzDddo&X-Amz-Signature=ea31601fca0f1e77142f5a1754fe314b555365cf6c0dee980d77d54938225a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

