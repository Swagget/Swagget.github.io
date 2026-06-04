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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEOSMXV%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T053047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4hioqqToIly1rMIrDCZ%2B%2BHj0xKlNWKq39IFxpU7fuPQIhAKFquqKxWhny6894Si7f%2FtX7FKHt%2FhuIgpgAm0%2F2KaKNKv8DCE4QABoMNjM3NDIzMTgzODA1Igw1rwbECQdy9ZoOxRsq3ANANhs3AyHjKRluy%2BmnkycLJYTI9Ncrd4GRcyM4PAIGXs%2B2rVNbhqeBv4nMRi0Lp9HalsnfB8WyaK%2BMYPAJZo8AElME%2B%2FlOaf0EsgE8DSq0sYVsjk2AqVBw%2BpFh1pyb%2BITocE9OqWvs%2F50P8s193zTMp3t8yDLipoenJRYXtlzkddK%2BRDEM4Fni37kCKUF3N5726TlYb1ZGVkqjFy3sMoOYfiKYRVseTQbevE9fs9ncHjLcRCuCJNZr4LLtIX2x6d5L1yLwXJ1Qmi%2BI2%2FnZ3KOMDl4o2IW11qZYyKi82XdxukNXCNH%2BmTT%2BsTyi67A%2FBn6gnzUiIULQ3kmZacsajaqrU2eqBzX8DHL%2FHljVJMymOynP3dQ5w5xzrDMO%2FQRxH3R5blWe8YK65hqYlGw%2FxlhiegOOq1UMzm2QWFF9NFt8rK%2Fo%2BCb7hQyFQm87yg8BeVZrv2hBIre9ZRMrc6qDoX5v%2FDjpZJVfuFfF%2ByE7tujcEaP06fiqOd9Z%2F6LSWS0Rim0McY%2FP5Fjoo2NDiHffXWAInKESaUgNKlTcCzfu3n9ByZ0XeXk4pUWorb0BhzfxdXeMzPDSUhwXT%2FraT6qWzPAPaXiR8W5tBfNmq0GliE0CAGyIS78TYsNTf9UgIjD0kYTRBjqkAWyqWzEKjXH2o94xRcFEXXCP%2Bn7cpPVOIo56Fs90Rw2lRGmhPcc7FzGlbG5KOF%2BJTyZCsz%2F2ychKHjso0dQ%2FCwIPN9%2Bhun10m2HtsvFe9pLByNnLW4AvHWwe2OpNw9jz%2Bud5o2i%2FBmjBG%2FjElv6Y24EHI96IifqPJfDzL7HiETPPQeGKC%2BOZtoo63ZkyyXNwD6pxyIOHSWUIefbkY%2FtxiWMyzpU3&X-Amz-Signature=f4d4dcf1717fad5dd7ca1a298808d0491647600a95c05677eca597ea403c90b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

