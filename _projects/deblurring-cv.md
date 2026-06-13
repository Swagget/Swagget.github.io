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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGIC2WG%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHH11ZAfalM9bAcy5PdUwHl9%2FREg%2BJQGy6Ex7E%2BLF3dDAiEApjqqg4B8a%2BA8Kwx2ZW9pFMnY1CQolAFApkkqaZJKaXIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDIPbW4FJdeZlBoW3dSrcA9SJc9j8x8vv1LacoD6ibCv67R7SQ5NsHhFyH0Tj22YGLC4PVAh41zJeieilBLWJyt7qqX63GS%2BTxufNIZMQBX2B8cC864y%2B1WU%2FEdk5S0YH9N9aK403%2BeSXs6W68358VYyv2eAakN%2FjwHkD20v%2BMcCLs%2BHRt97gOl7cGsVB6iqebNrTNesrCyQaDWMJkKNtkEPSHHibfP0Lblie5%2F%2BF%2F8udu2WAo1MS6cRSAGaP0LYs3ofdjl2xLz0SL5%2BDQNmu3%2BKapQewazvSF8%2FGsVmY8R%2BTbLvMPuGGksYiLWFULHHyEwD4xEvalXiUBkkxNaZwkReusvdiNsqYkmLhnW1NKO9gbbx2X5P6j2kVzlNrt2nVxZ%2Bh6Z7dn4hEXjNYoMZXVZ8iTtrj%2BS5cxr%2BkFw2uCnuRzSg49lpexDsN056CRKq2LjFQGZDwFO%2FhQMQ1EIB8D20rwKGKAFOaEMurBfJFb%2BM7s3e%2Bt7qnHc%2FA3hi7S3wflUKR1%2FC4JcTwvGKlFCJSbh%2FqzkE%2FHM8GTG7cOgKzAUPY%2BLppXOTftfua%2F%2Bpp8q8WKjqnTcZj3NmMI68zbJWZrvfJxD%2FG3VfDGCJ6wTjoPYUMOqRBm6s%2FMWmPCWOcfc5mk2JmQ5UHf4FeOz5uMKuwtNEGOqUB6VQaFyudQb6qPyrjORaTswF0HMRnsMqeRz7dV%2Fq2QSf7sYEVbNdi0FltSEvvyFn1FvJFckHIEVozR2xsX%2B3zPjNUkU%2BrKFTkp%2BjZ6NtOlN4Fr58%2FyFcRbTsdv51E%2F0m9Aq55%2BspvrqIZbvDfh1NIYA9zw6tRsO0BsXJmxUG35NjPdEraCausHUtezoM3wVBPLbfnwCyb3iCkU0tg5piUj89%2Bmaoz&X-Amz-Signature=fda9f96a62d440791ed45084a87d900a95177501a8af510358d1716baca9cdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

