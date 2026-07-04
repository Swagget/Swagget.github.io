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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OBTHVER%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T224413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCfY0hj%2BH7snFIIvkRVHSq3VCz8BYloyR46OZ4vCvoaMQIhAJPZID69gAScGQblXwlXE1gfPJFenj5e1HCIB4xFYFVPKv8DCC4QABoMNjM3NDIzMTgzODA1Igzi%2FfukJx8qwsY75q0q3AO1F7PCFK6Uo%2BScvwklVk83IZLTJnD%2BKDrsPL9HO%2BveTyWYYcddmQbCxwLwK9NXgErhtpfGOWjaQc2%2BOhjfe%2BfePvPHbX2Cfps9NHATTCSg7jtEQQiE4kR9zn2qyWuFrc2LTzUeKZYpZqoh%2FOl7sb8S1rCTPNcY%2FN18CRHjhMgm2EB%2Ff6VFMsWk2Jeua%2FvkvW87QnJ2vaM%2BKbRLpPqFcFfZrRss5eON8oteBQTQp9XZfMtBJkY2JWRjC1Eu9wMA2C9m6D8WWB%2Fi4gVKpVGvGwNyt8U%2Bw3BuhY0%2BmzmN4D99PrBG%2FigYKEQEamdSMxIqpdi%2B9Mh6HacpL%2F94fS7gBPHpjomD0l3DxEl%2BUOxLa6OfWv1fdalczDh%2BxltC5enMyUNqbJJL2S2CnzeJ9IGf8tycn6ZwLgzckxbW5yc09J7Ysogoe1%2BmHOKqBZbeZW1P640tYOIjsFkPYLAmMJPvRrck40MtlpCLXtauIkkhIwI6VBk%2FLwiQ5Ppxosaq%2BfHLWgP6tV22gujmP8V5cx34uBvJnywq%2B9mnlVmXYsam7FK9kWkHQ3fQTYRpLPaGzqhF1yp%2Bd1%2FG2K4mIfKn0UoMaYZOBnS8shZBeSxHrIy4PsW3%2BGgeCO8jB71Yq3pe6zD48qXSBjqkAXO8qF0o0hB51u6Vd4ApNkskvrBMu1PH9KBXwDAOS1twKL7cfNZL2%2FePftdxk2JTVL8AjqElAeTCCWDOPXvleDNiZ0YYQswOCJEzShkUGLUrhXyYu0cfkMZgyc2WQKq6aQ4%2FAENuyOSf2muo%2BX%2FZkMtAafU%2BbJHlwD1IddaR9bTQ6SdeuXLuSAiMnbcezqOgjs6iNY8U5yqc3UJblzC4ykvMeIl0&X-Amz-Signature=9d8083a6f379b7e7018e680814957967ffdc73c78d7248655e8c74598489b149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

