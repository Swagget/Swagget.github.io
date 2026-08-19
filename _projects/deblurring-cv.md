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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634Q332EC%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T101533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmGV34bMr8kHkwL%2Bq%2Bc4owPOsPFaItbZN%2F0yKmUAlPQQIgCfBTZFxQKO5D2Ha2d2WSQ5GtLB8y2YXCXDUc%2FODIVsMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGrbRqbgMX3Xv562cCrcA2lJUEiQpmkiBI26PmoS5yTmFPWpZkkigRunHD7JNgb0tLe%2BxngT9QsAq9nrQ3ME7VWyVLXwkcKxeII2y6biNenCxxWlZlL5sxHjlRo00pR4Ir768KoH%2BuYDy5Iw1v4nS0DNdhOl7u7%2BiTpGMOXVuGcya34vy%2FSTChRkv6QrW%2BQT%2FFXl2FaX43gNxk2SateGlipLDUdSlmEdHUT6wvrCFcfCoKKn5K070ASTkXtjlAU9wEKZqMbPfP0pL84E7wHBmIBpf%2FyFYS7vANBTTyCNitfXnd9pfYFSpTP5mx0fex8EaIjmKtN21S1PEO%2FLLxb1IT%2BXApAcBB7gQFGqymRzMFM133czNJEuXPoNAhh0ppHDXElNBAA75asr8XQ%2BAKEgpIMcQvJmyXKClUUP4IndZQAykHZLt%2FuqCRBZycQKBYzrkNW9tQbf7bEGGG972W9kV%2FxBnUbgipJyVTLlDAafejJACQu8vme%2Fwmg1PVblc5VKIzjo6Ox02EJUaQXmWOHTDgX9v35f5jy3l9oPiUHzTnZI4Zq0WRGv95%2BXYXrKIzVXcecxnfQcea4wIYcWEai8L8%2B03fakK7b6xFJhD5OTyJiP4dlx9vqSS%2F5d4zhOlhft5IoUVaksUULRkAeDMIvgldQGOqUBiUN8bZxn%2FOkD3WMoOx%2BOrxlDQ6iYce%2B2s4niyJELd2X4XwPbbq%2FagjT1Ix6rWjnMThN4GO3mjc0GozXknImbssMd5AoqMSFlW3ssf%2FSWFhGtZGM57DGOvUEkdG8sNbH2xjD86DxF%2FzG4afYNkrgrr85G41x5CdGlFacKyBBlgK7lG%2F66tFl92KZc94LnRq8aV5OaKTHGOX3jRrIe6fYyhm8m2ql7&X-Amz-Signature=dbcc5ee988b503f702c7bdc0863c5dc8af7d99b27e76599b1827a55e63f38eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

