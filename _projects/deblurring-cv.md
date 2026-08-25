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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNSGDGG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T221238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDnWe0Cpx7nlmA5NT1u473JdaH7IcjjaBBfx%2FYIIm0NAQIhAP1vx9WdtoIfe27yJVCWleRlVz8uecOnGrORMCzX6hJqKv8DCA8QABoMNjM3NDIzMTgzODA1IgzignuolYpg7d8Fp0cq3ANj4hqisv8sbt7UNuuGEK2214B4Hsd5jdcRGm0BbAxBVb1RU%2FMvujJ5znDpLKXUf0auwLSlIOBM0clyxAlXflBmsxazHP5%2FWzSXUsMcSKfqcdNZFTN3GCh8Ilsz1tmVnSZqby43bNigrOC4WuYSG14lbFh5ei%2BJDvu2Rki2uFimso1saihhs5suqSVLAF9Ae7ivQeBP%2BD6Btvv3sCMCbLht4DZniSeo3WN90whbkozAg21PaqBbwabDNRzKcIyaeBRZfc%2FTfNHlQifQEd70bkvazdgu6amU6rmnn9tAAqCCNnlo21EdI5gKzseLI8loWUX%2FLLIEsZdfu238ammXK7M2AdkALCl5MUh0hT9kQgsUVsmErmy4ZGamIIpxCJZsTnQDKpTVgWQVHgqOn7%2FcZHjc5WrMlASuTdq%2F9I4cLE4WRsAfEvCIRNSf0pJJNj6Py9tBRkp%2BrAZzw7HDqnGaArfAzr2YqUrDysBJbf4gziRYdhnMIIQZetguHaj9M1N5wXQbBIUiXj91wM2Rbdt17G1XK8mu4ftULniDjtyvcIKm%2B9j2OXvGpWjmkWafGZTVvZ1MJmnkEE49Iy3Vdl2dE%2FeRcVNd%2FgbXpVTGtWmMTgULQ3Nx2TT%2FpAWLYrWPVjDclbjUBjqkAaP%2BZ%2BNdkl6pyeQyHTSKy3q8jL9DEiHoIngjBdwFQrOkZBKZYr1laVT%2FarNs6AC%2FmFVTrol0uy9DqOE7%2FZGnhINWT9hUkH6G27YSrTleWjqXzGMjttLNNOearFyWYQ78SVel%2FI8lFbo92nOB2QJpyRaYMpOgxefM282t%2BQYFxdp1s4JKki6pDhg2xV7Zwp8TJ%2BCX4BsXJYDwuYURxWTdbgc75pvU&X-Amz-Signature=c0de32d0a38aa41a2d67f064d0e4705c18fc3e81bacf971eb18741039f4cf7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

