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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIW2UTH%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T214121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIFb8Qhi%2FCXN8jNuUJWMl6bVOmoNYPpNJEo1bvGiHlFgBAiEA%2B9tTvyuBmbUc3jKP4I%2FJ9rV681Tra80s92KPQS2abjoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNbMvf77jgBj7pe3dSrcAwkRjF3bth8BwCtjWqbG8UKuSzesC36t2TEKgQ7nQQ4jjd7lwVw7%2BY6ZorbVflkj%2FRsltVdjpLTTBrBAPFxV191FV0SLga40XAZhJ0fvMjzhgx0ohwlXxgYX%2Bi53QeZ%2BtqClOMSO67XG%2F7cMK8gLFYYYx5j1PymFVjQJoLnrAEZAibMAXtr0NFt8nHMA31CJHHehqeEqyqKHQKVBWeLHLhGrZRgORNCQNkr8ABk8%2BU%2Bs6039VXEXzjtxLB7J%2B%2FtU6OMzvKmcwRNcwhZRTtN8Nv94UHj5xS%2FB5sUneO6HmdnJ%2Fox1O77c5k676hukohP6f1%2BIz5RNdB%2BF%2BuZTULhDJmvGOPHoKi4zbWgZkKIe11ZLDSPYl7LemS3HwnS8kx9J2WopllmJw2fTT1LxX%2BNebqA6wz6mD7wBb4nMl41kfexGJjzfjagapyIKG3CMGJ10hnM30U1F8vr8H6plYPjnSm%2FbtaxI4J9%2FOwzbAjsGA8%2FCqUNW0Ija7P15zDdZsd7%2Fgmk5tS1cufbza5ZRsgSxe99wXdmGBdNssRVfxRnQF%2FlI7iTQpJfYJry9FlRWa1spIDfiBfeXZqZPfTq9EdSj5VVtheXjcREgbDFNnNAnWrEZIV5cg69xOduYxLSxMIaOlNMGOqUBaFMA692OAbYCPcj1ot68oU1q9cxm3LA8P%2B2vphAJSBtFwRrRDGv%2FNlJDVvDTXGAcX1oFOJ0zUOYbjK8qukv7LivPjXv%2F77VHwkpHp6m%2FpjeNUaIyo856t95QlnP8kc6YADZ6C5PuSd7Pyyo7D1HaPvRqnfeuzFVX%2FBErT6DwaeDCHkl%2BH4Fvoc4oUntqewlHOpfMt5B9hwnP5za12nXZwA54Tvns&X-Amz-Signature=b463d5437761a8687726146ee7f30fd4a48221ed196b189371a351a96410f6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

