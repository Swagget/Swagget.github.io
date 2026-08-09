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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AFGQBEX%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdfdyHzxTLma0POw28gymONS1KA%2FgnHb3x8Z5CRxMpAwIgd7wUTcpwued2PA5fz6%2FExUvEblaRqWZseiPXdRgcW1Eq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOaREmJZ4YJ5u1Y6BircA0MqB9M%2F9hHJ1nUB3bfO%2F5RKrJV9cRonZH4TXRM9RNQcNRzIt2v8rlCF1mKFGaP1ckq06Kj1TkOrvudx3p686m%2F4BfyEybnol%2BB%2Fu3P2VRYyeWQ8BF%2FRQGx6Uoos8PrrvL%2BbSPQ52FH4Vp7zuLxvPNB5gKmtI8TNu242x7eeWV9Youz2TK7g%2FKR0%2Bcw3SvOOYhL1vek%2F0yMqTckkdp0%2F%2FBOC7bi7%2FnH2a8uVNGlhTgUeBKLx7LWMqdt3kZ6lam6l50N9tG%2Fr7VisQood732tPygZMBgQC9xnXLm1lQJhtbYZM4tkANrgPOzBB0IndG%2Ffbea%2FoPObwdZ66J1%2BSaOkZ2ycnnBexd%2FNUiBKgj3qZRPQh8%2ByoS3lSzwCbVD6MU5HnY%2FWH77zKYIRu8vR1COEV1THJ5MfPgsNiX1gRuZmW%2FxDyZzmiO5%2BDy9Eem3mQd3Sc%2FHtIfz%2B17WKzCz7nvvpyYIlnkELrYkMHQwsgaImrOlAIQ3DNtgFx2Gpewdi9ELkKz3a2Zro7do76M7Xrjw%2FUmySt1xsXgTa68qb1ys5lgWMvCG45dP3EeCc381m5d%2Bek1wB4NFAph%2Fnvf3uAI%2FOfH1UXbhExvh%2BG3yYU24as36MbqAQrPsCxkkoFwiEMIr439MGOqUB%2BE4cF%2FQvrsuSL42xDQonizeyygJ4mL98oDitmy2vA8meKcK6oFNb748LORdFlqLpMua8sRK%2BALhJAFpJGEPcCzUru9wHpwwt%2BiuPtcf%2BqgvLi%2Fh1GUgjBSrVAFsZj1rkWzlkUiMfLLQizNpPPh87W404bcUxn0Xo9hSDmz9UXzKSoCcPrZW41FMuSFfFc%2Fl048aIJruiaiRQyZ247YFO%2FNIHCsaB&X-Amz-Signature=ba6d93a329419988c590afe8db44bb01e55cb908a97c8ed46676725965adbd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

