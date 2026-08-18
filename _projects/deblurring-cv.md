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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6K4OAXK%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T051749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWnEKrP%2FHRRRgvy%2BF%2FGWMhGF6IQ3f80z8ERB%2FQjD6qjAiA%2FQ79RKC8NRmbHVcWOS8p1sUHK9yMQ7JNBwrq6562S8yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMQuudcfzYhKj13il0KtwDb0%2F2JBgg1rwiiKYpbg1bUXPjh1Rau4aA0efxVo9hCIw7qtQ6e5QEWz1%2FAd8GI1WXXwvRRL339ARb2Ew8vUxgNRLRxt%2Bv7tLL2nc7v3Wwt5B7rfcFyb22i4mdnsK3HFZp5jelSR9x6ozCtybrjEumn%2B9kobMmFTNpIlSxOUXD1LNbs%2FgAtSYrCqokSy9J6dusjyFntik2%2Bt%2BAfTyYxGOJHr1n9PY6FGYxmA0ZOO8VQktE66PZ4JhT7tkzggqvlNU9qWhatUbbQigY0qQUdOe4NPXnvr%2BILCrmYMd15I%2BS3fyWEJGZGRzBADIWM0612eUFa9iGn9%2FFkj%2Fq1Kwmaf5Z4T0Iq4aeeeEBmWOJw0uWMqeyXT3nmNR3%2BuK8%2FP4fCJCDTQ1SD60OgkOoDUsGV5yJ0jRQOV5K6UPeQtIkAz5G6hHQkGKGTOE6PfArZPxIJA4zOheXhcaFi7rnNEi3TF3T4XkYwRRuKnOWckeqULplIT3LPU%2FVUGPAyJYzjIER4pM4uZXWRzHy1mk%2Bp5zc716LcopX3LGHiq8JnIhvspFNsFs%2FjKmQVGEvTkexe34ssqkfkvShjBUefriOaRvtuOo49SzjLF5mFrVDZd1z%2BbmemokK0AAthCqToPwR0GEwk7OP1AY6pgFTQ4xYTAprFm7lqG6pTFvGcFtOoRwoeVc6tyV9R12ZCThlb7B2CyCPNlE2hqyhsr7eLHEXPSnQBLiUzCK7eJn%2F75cO1plQKYzWo%2FQ94kLJHaaKkmGhh9ET%2B8qDWFLAuQraiQJO5e3VmZafFltoblh7cDaEj1bTIC3EKm1xE5UTXFNxADb1swbXgrwP%2BuCZMMHMA%2Bd3VIFaHn5h4iYyPkduLl9JOR61&X-Amz-Signature=8754d5f3bbc23a6d1848b2de2a18334bf36acb214e2776642286f51685e426cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

