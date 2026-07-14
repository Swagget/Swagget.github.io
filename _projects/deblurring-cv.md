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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFW2Z75%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDmXOGe9RbKr8Boi%2B1uWficmakUz%2Fe2CUr3J9G47W158gIgCUdvZPRtYoH3QuAMklz89AKJ7ArXm7z2pbCSpMqbceMq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGsB41UiLf90AauAFSrcAzLbFAgIXmZcy4JakzuiTR%2F4Am%2Fin%2FYIJx3F5hk5AlOBrs0pnuIexBl4gYJUcABxF5NguC05OWUqsc7JufBpzz%2FlajOxwCQgHQKUosuSN1eLjiq7Rzg4hbx8Akvp2zcMnZd1fL8r4COdMM6Rh1sSm4YtdtuKYesN5c3bV%2FfG8JAI2LeocIRDSbz1iOe4k6snlz5UBgsTfnCAZPq0eg1KGfsXC7%2FJyjkPORg9ILM%2FGJ%2B7V%2FjP6QSzF5SI1FKTy%2B9YpEQiHtg%2F%2FCaj8kuQ%2B4cy8yGnotdHjWjK2zzLMjYnM7WPKdULcxgYpR74ndEsmpr%2FNhg46GbK%2F%2BQpWDQENZwS4ltgVvHMea1FkGircMD9%2BM3R8LxR5T7nzAzsaG7lPnCbm8a7uTlt6l8SljyOnenKmkzkW%2F4qZz2bwRNXkqw5AlJ5k8XMnlq2FKkHJjJ6vVnIr1s%2BlRhS7dFXWR9w8vPQAc%2FJmP9Jv%2Fiit8ETsI5l0Hs2Sq7iSXj2ETK5K5Xzm4IrnZ2n2cbUwwzy2%2FH%2Bt2t9kW%2Fg23FgpFfh%2FchPMTjU10eJyo5QImprWZxdoOQj3Vdn0WdG24g6HGOjIUFHw0yt1JbFbroGbdQKR7Gvzd%2FeCNPp4dF5OShWyf95LMFYMIyz2dIGOqUBHuNpdDog1Z%2FtWFV6h%2FoRGf8am5j08TKOt4ZUA7j2QQ7ZWdloMg9ihUJiqbF5wqTapyZH%2FvJ%2BjjR3sOXA%2BivFs5tBtdHt4xd0KisTzEQeaizKlGOnDn84SvHjQDe0ReZRHiNaoUFyANOWdTmZWLvIvAtW9ZRq4hRTfJnJIJOXw3s5XYDY6NbBqGZWDz1vSD2T%2FHSZniM1gnuLtfJT2su%2FLlt35Fo7&X-Amz-Signature=e21ff01cd2556ce993ea9dff56248699a21b05e4b174065d4934da46d5ddfc52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

