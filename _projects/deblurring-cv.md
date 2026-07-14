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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGP5RG2%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T043723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCiE146y190jjMbyJZnAl65Geteq6iDp8mdts%2Bn%2FYJh9gIhAInVUKp768PTD0KfzDylit6dPdMKsQMzRok0XqVLDqDOKv8DCA0QABoMNjM3NDIzMTgzODA1Igz7ppPE14oCMi97Z4Uq3APy9X%2BJHvUIS3Lq10rA69vyuf6STBO4vAVT2BwDtBuhbvpXHpPYJKYOTdhNawPLoKfKXIG6ZzGtt%2BEP7tz%2Fz1WxKOQCVVfyU4p1FpI37a6StW7X%2BKE%2FgDPVY%2F7sds652thd%2BnT1OkgDQY2v800lymBB17YEsO8cfjmXNIUOWmXtcWJOZp0wFlElhRgF0stALycDSxIV0rgqzRupzupuxR05B0ezbhn8jkMmPk1zbCoeuTqf38mNt6edVln9X5A7mSQJeSgO3IcoQdUgtOU%2F8llAT6TALwx7Ua6uVjLLTk8gnZGSGTEL1cDbTEJ4ViTESYu5Dggq631MH66xXp3%2F2qACBGJbdKfOSiPVrtLXUAWTiQnXITLTNRqoCP2yPtDSq%2BrEx0Q1Ju4JY0La2SCwBT7Z%2FI7m%2FWBVhz8P%2FBRuVGPJJElbKCnV8TYpNVojhtYS0nHaTnh%2FefzOi2fQRA9K%2BAL2mLDbt6YYHUfIvOxfLHMRnrgEQntOj3n%2BpzxACHxPuwtwaxiXYy9Z%2FUhzO7PjDP53k5zJdGwHPi39dC9tjx9MbpmWnYnXeb%2BLbDKiWu%2F4wzKv41IB54yraimX4MENCCqbIglO2NrpJIdHsZfI0nL9gTQkAVxb9Aaop9dg0jCO3tbSBjqkAfvTh6B%2BzHvYuK8llcyGKbAN0etcgrEvkxNvTjoaTB4f6HCPoY%2BJKfJ0Oz1SnZsekpmRtgXHfejZ4hgWA%2Fw78PbLGS7lI1J4l0BoSe8pGPFpR7Jl%2F0LSO6dnW14lriaG%2BrTzXL%2FWNqCpJApkc6lgonzrDDO54yDpr92456qVFQvY%2FuJk0kPpq%2BX1joFouYuoCtjC3wVsfgGyKe1B7eyMPFH6IrnV&X-Amz-Signature=9f2b736d3c374c1364219ff5abb2448d8e1fcb2562f4f714df58bfa42dbd89cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

