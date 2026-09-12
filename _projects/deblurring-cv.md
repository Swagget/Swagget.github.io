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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4JJRMG%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T112005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmK8QxeIvWJuNZGYy4oqLlvrVfU9zIKpD8t1v8xSBl9gIhAPwHDzzpSRAcmb6DI5sutibJ6lZAa%2FwFD1mj4bWasDkFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOlzAyORGNZBIKdhMq3AOwgI9uSx102DS3U9g3BABM1%2FMiVIqDq0PjrDXB1%2F0SYHoTlEuSdR%2FWcW8jFxOsqghCpVlpSeslM10eNwn0Uy4F4hxAIcTk8jiEFbjDOcFhrOWbtKdUb0k5HM1FQ6UMlelOAE8aHjXGk%2F0fu73qcZsRGs5bJOduWAot05%2F62RQsk6q1nxp735RbVL36kVqc%2FRIYWbTjsUKJ%2BWoLfkddrIFCP%2F3SEk0I46hguq3S5evnrwD9V%2FGTnSr7cTaYikx6X0mJXR1G2SftXPQTm09df%2BNQZYONigxgeXLCDGf%2Bc9PBIDGxm5V746%2FAmOmjCI2TENad71KEC6mhjhm75h7OjHOamGuLI4g1A8sY9g2RNg2l%2Fu0pgC4w1MhcVao9mmWo%2Fd26K13ewwpWeWUvV7ym4TxnpZ4TKHyQt0QsPmng5C96jamFtNhFYMYgjJuI9IzYZl%2FDdfSGg4wWixAiIdzReL5%2BKYI9z5Pta%2FyI05iXahJ0wry2%2FNssS0wyoEzi1%2FePqlDxfVh7rBEX2ivPjBfVAMrEfwARi7XX%2BCQ5OQobul5Dd%2B4a%2FQIFXYxGA4jl0c5wy%2BTeqIruJFEBdHKvrkXpMLzyuM2kXZzKiBvuUcKTCz2hOSy7kUbTBnjicbn3ujDf0ZTVBjqkAf7YlO4X2suNau3yjd0J2U7Qkaa2D8QIE3RpZK7XUenX%2FplWX2naNOnIkgQ%2F9kH%2F1Lei%2BBhINtpX6pZJyXf0nGludMFxnq1Pz5yjqS9zcO%2BQzpavm20QFcxnWlFnCgNvANvCMF2Avfw6y0s%2F4xRi6L1E4GdZpBm%2F69pPD8V%2FvZZn1B1nKmySNflqEfnKRtK%2BXcIj28HS%2BgH5cx4A7ZfJuQzijLAr&X-Amz-Signature=4f15c2bef0e7ce4305b4726c376f83ffa8d8e0e10ee91e3dd3f7e886cc48c9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

