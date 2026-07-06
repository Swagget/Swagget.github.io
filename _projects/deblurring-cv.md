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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FG6V2IA%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T015217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqVmM0Zb51YbCncRxkg%2BoY4%2FuREuY5uk2Z9r6lXrLN7AIhAMlp%2ByExCO3eDKF75159RPxtDT8mblzw%2B0CHPxylfjNMKv8DCEsQABoMNjM3NDIzMTgzODA1Igz2z993v%2B0edeuPLPEq3AP8wcG5b7JWQuatKkqBgP7l2winYnkSW%2BunsSDsw2qSwN2QBr%2BY9P1PJl4bM%2BRwCXnqIyLbq%2B4F%2FJxtcdgbMhkwwJpYcL7rSqxWyOmAfy9KWmSsfBmHh4qR%2Bh%2B61KHVN5aBzvmL19vzcObnmHobvaUCIqCZFh9D3NBnbsSZXQtNzUwkSr5arSYTVleUQzRPEgZq%2FZUdzksuXv5mlak13bOB66DhFh654f3QH4TlC78L4%2Fryh6df9skymjoubyd0%2FnQZs5MEvGN7LaOWfYYcSBp5JdCaZBdbcxazTwxOMcamJDOncw1387ld1OOdZe2n7j%2B5Wxl4Oeau52OBSoOx%2F7SuJ5FovDtE3UJpH8Oh%2FmQNXsgIjqrVK4uAl0grMapQgGl9vVtO7rSDSfmSa1tYn1ZZYXnqOYh7ZkQY5Myh9z%2BUD49jmGqFs9nDOu4b1768RYyB3L4IViXapK1WIM9%2FHOuXKOaoDR2tKmI6a9hRgjinZ2hDIpipqr9r9xb4hN3IgLoXIq2DVX%2Bl0IxogUPLcBuMvvVGXFeWGBaNG%2FZDwMz%2FWBq0WofFNx3UfCrsuNGP2BmbY0CUilqhbJ2GOWc34RyZbEW0zXmggWjfiaIru8BiGvZ6mH%2FIlLMkGpOk8zCmj6zSBjqkAfnj16F5AIVbfGnmT9gm3TzF2lU%2FaDgHjDRovDEaJy97CvkeMA2I9vuk47LBLVIlgo4lE7qfUdynvgeM7vRIm%2BkhiaTR2vZSiPGluJX9rMHT4j45hf1AFH%2FYysyUtisAGVguRdTEuYEE5lq8sup%2FNRVjpW%2FGOaHJCxq3SU2KcHffPqWl0KQQjg%2FnsS7SntBqBxyIkh4MmmE6Vzd92UbJlIe%2Fnik0&X-Amz-Signature=a426c08841ec3b94733276fc8d7b7a4b43de1c22add971aba7b342c21a8eb021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

