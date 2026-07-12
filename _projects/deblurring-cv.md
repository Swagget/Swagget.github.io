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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XBZTHUS%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T124748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDxh0ev06GwqmYtvrxPRMtxVDZfdnBizARLY9P7CHgwZQIhAMeLSyesyqK9GqJOlOipTt9VJNB7%2FOE8wQEmkvyJJOt6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyys17dB9GiKueoPcYq3ANbxVkGcJ78eSQMFevB1poe3m8TAVUtAr%2FwMnFLEW3vjC3G6SqmQlMdDDpWecI%2FHSTxjwwzCgDK0ckD7GDUW2MDkvmo7O1Bw6mO4%2F8cPnJ5etiugIZkY7d9R6Zsr66PzICPvVbN0HKqzuBJUNjDh3v58QoqmrtB8B1Nm3VmwUP0lhwAsx1peqgjpaUUNh23o4HATLSQgXHDjJVZGRLjD1afg%2FfjUmwknKumAyNLeB6QTvyvNbw6nc7oEEvIa9dJreAoqU5VTELBpjNfOXRRsE3e8itdELy59kkh%2BK6uwVKMpxigI8TimDRkvlgxzmVp%2BxDdeb2esuk21OFhnFmwUw1c1CGUlcSoKGjuccr50oMssHi2lm0ZnKqIaYF71DpRD%2FJVIxC4Ne%2BnkaRUSJkmRMRRJv3NnKtofTBZE2RoGB9zEqd55vQzDi4WhkG1ZIY8tySD1sJ8s%2BaPhD77T9343qPBBsK0c8AKOLPp%2Fm%2Bmn5EaBdGv8ou3C3OyiLyek%2Fuh7qsFzUWA2NfgljeF%2FJIOrSdNXCD8DaX56tyOIKI1wxD7EkvnPwDc1MCb6Um91Wq444%2BGD3xWCTgOHpu7cp0Je9Dx%2Fu5bppxgeEwBN5xR8PDVrf0XaO70obdA27FgwzCf%2F83SBjqkAQBFSnfz5FYTvB0kdIBwYKblMT9r8SjgT60PntmGwWAL6hFd8m%2FuMXj4WczAiyvkSq5WkmnAh6%2FkXug1QP2D%2Boa8iZ5xSkGm3jq4tPRutsqy2msR%2BLq0NCUpoCR1Kl05iAvnry1v3N9GDIvXPSPUqYwBnLmgLI6r3dT6iOZ%2FYAkUCltW%2B0HqdiPuRNNeN9gb158rSR2ez%2BBI1p1e%2B%2BqGbR0t9r%2BZ&X-Amz-Signature=90d23109224975babf8b1e4f166f02399be4e885d0ace43375178ac4fed43eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

