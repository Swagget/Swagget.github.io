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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MR6GPUX%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T235038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMqeQeHNVvjjCF7WtVX8%2BKQDTObawc09EdxbCE1okvjgIhAIpKyNAFbX1hVil%2FN7xwd0s28DduDL%2BFhCagIIn6K1f4KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvEJDhGEs3wUJDr1Uq3AOelxG3p1SlzaKeKqB%2BLefQriPGWKsrCEGV9a%2F9BI07weYpFeXOweYr2VuHTBYfWBJ8iE%2F1hmSAwJUHbibuxnXg9sLZZMFtOU%2BI8BXxtXi7bh3JgVysBBLrd7PWYooyJRIbZAQZkZ9LEUu%2F28e9ltNRJ0v%2BA88r%2BFNlSIRwx%2BmwKzNTnWlb8jzniHEzF19wAsMwgQFVvu5Jl3eT8u4tb32LVnzg9Eqy16mjeSug95fnh4WSVOEfSavZHU9%2BkqBXmIkWc1ulH2mgLuMuAwMVy2q2UjcTTCD38wmv3dEF2W%2B15MPhCnohtRi28cDmP1N%2FtiPm2FaxdXs%2FM2FhZv6Gl%2BP5IfjTAyP9LRkSmeyGRBWYyxaRTQpQrLFZGUKO360p1RSVgh3oYRCBkB6KJfCHdo5wtv3vV%2Fy5IvTnfZzL%2F36CMfJCqhMLVzieTrmw40Xpm%2FCb2UPlJvWzW3AnxiiKcem5lMOmCpe%2FOxyLAp0Tuu%2BC6bT6N7bdnZvY%2F1jPE%2Bk0lwZTcaf0Pre2bpsMi1yIqb%2BS2rKf0dSJZjIm755GGgl4MR5iYvHRhRdS9aA1sJKFO5bh1AQP3tyAGEkGyP09sX0QSZoN561ViHbAlXPmqF1kUFVpmBb9T9yNNZoYOzDXsYHSBjqkAamQEqf1IEG9hiU52uvm%2FF9vMjlX%2Bp1h8N2W2rjEvRIQcrEoDdizdKX5sf2osoVV1u9W2VlCdZ2MlY1OkX%2FiALTDbwaHL%2FZs3ZrXeJ5xBgAOPmwFMxZwVbp0kOuyjol6lGSJWNTAKXYmC6Qu3AZKo9D7%2BAB6auIT%2BXSb9HWYD%2BJ7bXTnmZyRX5s0YczSl62Ar61ckG22h59nVqn9t0vaxwv8B1Aq&X-Amz-Signature=fa0f86be6ec6013bd885f90d0b371146175869f064bad6ac490fcc9a487cfdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

