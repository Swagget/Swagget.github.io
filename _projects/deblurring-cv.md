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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWBVCBF%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDfSlbDxSzwjvzDWEA588gfrU%2BbA3uWNw3FQdIBMCSghAIgObtimgqr6PD8xUGEQxhDQa%2BhabbqmGxO0AUjPSXQklkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMBwW2zyBUJryf%2FFnCrcA88tkwRnlETVBL%2FXkgzNQj7j%2F5KE5vR%2BaDuUshmoNJY%2Bocd%2FApYXTBUGxRgdkFbBzGH3jHTFcHg5qcWeMtlOijB3RgsTI2dAgtT%2Fbmmfgos2ZDbq9ExP%2FAe8ZsmWXJAgkwbwSvPtg6VEmhMabSKU%2FpeDeWfySJuJMTRctoZCFMP%2FB%2FQo54DF43AlKfRIGYFRvtIhLaC4Qkv7lhFhcBfBLIIgSbuJQn6wwC1HV5Y2R1X98uCp3YZ2UZlhVylH%2Fy7n4eUX%2F0wRR1PYY6bhS5Rd8ZYR7gh8I9NmcPsnI8vy8W3719zdus8Kgpy7jrOJHbImnZLCkLJJwqnsggCzn1fpW%2F2F%2FNTYibq4J9Ba7y2RjhkbXTFzGVbQ0Lbn2qlVu9ZiXNxrSiPCaKm%2F8XKPMkKpH4wXaDA5f0tjgWii8jSVZ7ZrIl1%2F6h7kLgicXwSHX3tjFN8osFjPTSFfsnY3WzcINIab0rwAcXSjUDMfUl5GuZQSbfPsaYQCkxGt7M4Ao1Ysf%2Fbutk54t1oUNld9JVI3FMiU2jEBR41rSY3G0aHn7oNQAbu3ADsIKS%2Bm%2F9WOZeBqBuLbgmcQdMua%2BYjPGnCyZKjVxsYIZVAf4xyy8PO3w1Ik0ttrwP86jZFrqLvHMPSkhtQGOqUBqISXM1mIstzbllPYaQMOBkKe6Cvvezoo4tqTrt9lva5ackFOZIQvSJ54WBMfh4d2eknUwzYvZM7jQTgWiDOmJGCzAyeF8TNctvsKn9lnhwLPMsyTrnlZVRzvjXqLd9xX4uhfTvN62CuI%2BNpo4gqDmBP2wJASkZk3nmSR1hLRuSYP1a4NaF4C0ckzGS%2Ff3KdYPSI8MW6fMIKL2nM4DWWSGa3p4DLQ&X-Amz-Signature=a3ac54e7ec99908b12d17ade5e3bd44d8e86e18ead92259778d054a0418ad130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

