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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVV5I5D%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T002913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvfmAzxyI2z%2Fyp8Q1j3ucA6%2Fd4EOHLFTQdmZ1fK%2BA7gAIhALAHuf2tw%2FRCG5814dNiyb9Qn2PB2mPSsgdUOTWi9kNdKv8DCFAQABoMNjM3NDIzMTgzODA1Igx1amLSowD6dDGNaZIq3AMuT0Fzmg7wVW354GKHO5PBB4hlHvMKEwXSEqGTmcCnhwPH3V7e%2FfSPtDUU4ol69777EXF8qVm2kxB%2FusakjjfKqRLGGLBUsd%2F6xm%2Be736%2BOYKo4Jr2eXT6NCBiytICooJ6XhOw4%2F7LwCC814uUuaYtXagcvoGmJCRwLF%2FMXxqt1QXbOb1kw3cHskdAjFeHNzQZ%2BQE3sM%2Ft5bz3sXl9RsfUXsuFx%2BiInfnA76XywZLtVnmq7nSCNo6NoraV5Cc4DOhJ7pfiPfD%2BepHR9ParRYedvv19ILwY5m4lb%2FXB9pcHJyAN5XIsnHjGrGE2Vvy19vY7lDRZh%2BG3LcwGR1IBDXohyn4fxsHAu3hp4POp%2FhCzT6hywH0kIIuIMxvqzsV0947vdGmk6OySDzp8k6V3O1GZq29Y1vVSUv0eAIzuRzJZAWq3FqErzrmKS44EYW1CxJHN0WkysfrzWX2UqEOTQloFNH173BtRnp5j4ovycFL4geYX56QU4fX6Wbz1uGSAK24k1vC5FmNZVvZ9wWgsgZ9OYVfDTCJmwCyqcouhp9HxtBvbFLcmc1xKSLhzSx3Y7x22wCzGIowanvR7dwO7prDrXtrOxqiccApC83Q1oOWyEK7DkJGlYwJwM%2FSo%2BTDXmo7UBjqkAUVSHLTzWVyq89PjWLDaTkoHcDvPwSbALNwLYbnEe3VIUt0WtucvHZmGNeX%2B3UFMfvILxfn5SMjXfxN%2FANj9Z4BF%2FkW%2BvAkuSaEHveMLARYG%2FmgdyGRE3%2BUwm2dlNpU%2Fru3PRBPQbDubrgm9geK0SN2N0uJg%2BaL4ssqIHgdwUadxsIO%2Btbo3CXJygb9EaRsh9W5G0HdI%2BTaCTCqTUQOLyTQYIk22&X-Amz-Signature=b91cd463667d46cf92727c39b159b2f43c040b54783d271d9e3d0ccd4498da18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

