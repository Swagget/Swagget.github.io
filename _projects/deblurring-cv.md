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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HA35HN7%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T125303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8iP32ANZt0nBN0aGgz3JX13Bq%2BdCQ4msaM3C%2BwywsCQIgJJXjKRTwKbcDMio289Sq%2Bs14KKZrl8KCQWp2gMOtyTsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDED9naZ3%2BzJzNCS3WircA2ixQOw7UYdwezZ0mAP2dFoAxv4MqlbL2l5sQn8%2B6tB9haj%2Fp0LG%2BJP5Dg0Qi%2FgoovAvmBFyQrC4zdZ%2FggEUQYCynRQWLjiihq3xyHZF13kHW4FP9nd1PCoDVRZJWfHkveMkqg9X2aV5J6ev9wv1R8JV0zKOPdQ6VpTDT8e3nTtfoMW3QULD5d9aSGf6dyX1LKOpFFU%2FD4vqyAi7Eq%2Bfs564nwiNQX51X%2FygmQnS2gXIyZolzwMHaoxERQ%2BUQD%2FP%2BpP4CApiipKaoXCa0%2FYj5j0oXhY1u6Dj%2FVCarN%2B2m2g84DsUK7XahnEViIjFrI83WS8fK3VRpxmj0efAz1U7gPujfe%2BVEd89%2FDPpKcuwg2Ku%2BTw0zv873w8Mpr0e6quViNH%2Fb4mkIrWICIW3w%2BFwI8jqKs3AykQsa%2FPEMZuvF9BmIx2i0WBbm%2BQtViG02kYfXePZnGlziyrtqDUmH5Oiqz0HZEwdUXZYIBzehZugdyK66M3cqGg37B%2BTQDVxApN2sHCT3SA%2Fo%2BfCKOQR48wsLgDiKKQE8wBgcEF1eVXQgLL%2BNNuG8DBEqTLPkBOfTviMj2hSygTi5K5v4%2B%2Bp%2BBI0bsDl5tVEqXccOnBbvoZmuJU902Zp7G4KQR7tBOMNMPvcp9MGOqUBqmWKAkx%2FZWNRs%2BhzMqT6VrGs4fF44%2BNZ0teTxUnfdXvaFxnoJTA0P4XFXu1sDK%2FjrVhCr8Hjcgzlis6XeFzclzQWEL2hDCue09m4wHHB09B%2BcrcRvHXlHWQ8bfMPi0EVm7I9fczJmNN5E%2Bkd48%2BQHPqqE6xhKyKL1Ky750DJXfFMntsGo%2BADtypKdIbVctHEdvohoPSw0YWjy%2FawcI6gQOeTkxqR&X-Amz-Signature=6d21d0f8651479b8e253f36737ebeecec955b88249dbbdc55057ec97d65d7f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

