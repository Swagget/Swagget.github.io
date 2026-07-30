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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVFFOFP%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T225514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsauwK7G1oo6zmjFFG%2BY5e1E6D%2B1NpRTIu0BweWBtigIgWI3umaKqbL5Riw7w8n2fTfDogZH0TuHpeg1u4jWm5xsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqLKhltlSc5MZflMircAz%2FFte4PHY40xHgT8Zn0sokL%2Fjws7mVIfgNB22HbcgDbnlCl%2BsUjR%2F%2FMpRIfabss%2F3OQu%2FRJH1XlS1YE9sOwxrV8xIdbz1hvMoluxYJoBurYIdXW%2B2v1nE2WkvSYIieaR7VpoNAGWcm8bFQB%2FiNqosKcZYbLDwMx7E5MmKGuJYVMVKDzqrW1h6%2BhDHcb9MFy64VTdvlcpqG83DW6bkMGc724regCVDwVQ9RqiPlsehHJk1Bb6iolzCF3ndrkgmOVOYGrU6k18Ms%2BFPEZ3FlLgQdnyIT%2BiZ19q3RuUPRAjKqWh5Z557RgdR72PFDONxvn6U0cuPEwXwyckBQ0t9C5Cy03N4X%2Ffi1mCc4dK81T%2BdNvCk8yphARoBE6sbjYq3rthTac5KZyBdl92gn4pxU3HY3%2FBxavwNt8hbg6%2BwYibMh71wHMWUOAmNww2kKw5j4cBzlzGQq0eEvDnUctqfjaDfxXfXKIHtYMC156uv0F0coixDC%2B2Xod3x1HJjYclzDxx0nmOXaxpVToSz7%2B1hydITUAyRE%2BP%2B3dSsApbm4UwxtBuzSVG%2ByRwQI%2Fq000hs8dQlRxZlGBC4eytPSTYIna5HVP6MLuvk2a0ewmkj6lDEOldRqbgZJQW1sTm3b5MPWir9MGOqUB6qfVU%2Bio8yluy1xGrvKUapvgg5Em4jOljAGO8Ta7LqLEnrW6FV4lfoPocYgUYgB71S%2BI8Vb36yz46ExQ48QddWFDivUYCwvI3k1CF0HjtACsxzvxSQvEnzk0f4VdUAgCMG6LpYBlyr5HmZndf3uYqcR91XDFXWRd%2BRUQ4vGHYDVe8i8Hv0ZflN%2BZoV11zPZzMYtqvVW9GsL7yNzCLlT5OflDDtvK&X-Amz-Signature=3cdf3d9191c9acc30822849872fac1272d80a9c1daa9cb2e3cf8bbf19da497cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

