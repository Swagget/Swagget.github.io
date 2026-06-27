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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CFEBAY%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFIRsMVN1kBMushBgZFaBh6uDporlteaQL%2BsXwn%2FGeAQIgGUAW9kJz66%2F6Em3RXD%2F65Yp1T4ElEPwxre09VFe0IsQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILyVnxP12BxCrfFhyrcA2rG1kGmBKssigTPeX8bx6ETQC1uWqLlBAyiZGZiFpDU2pnaAuYdduI9NNheKzKwFWAwqeq0bgxkjcZEalFxXiY%2Bov3AQpwzOk%2FZWe59Qkltl%2BaLbGUsU4AYdf29DF%2FxDO1k5Nh1yhW4nqVVwvc%2B1QPwrZiVXmTsp4Y1mwZVQVdZIXgjcBeAc8hRfOuT2L1RpKpdfSl3prS9VHq6zEv3y54JKKSWeIOCD58twgV5CLd9h2BZ3W1pM9CBiTrs4Dnv01HtAZP9WgU5uOH0dcypTFCzQwvAUa4j3gmX9yjhx15bJbS2%2FBUFhzz5JCywzSp86Jv%2F9LsGVgwmi4RaWl0j3mapc%2BlMgShFe%2BdbJM1i95ek71LK5Lb9drQmoYb1zdA1iShgLro8JH%2FupNPwJXjmq%2B33fLuq9oXzNyLh6bTvNieIAfy714wW0xUtyGFdxZBPmqOw3ZlJ9VbzLgbH4G92J1itN1gyCtZEDRJUD6AY5enC9mAzhihe9NTsSGHnVDOJOM4XLQJSxAYvHJuI2m%2BH%2BnJ%2BVRaFElO3vtKV2nG7vhdi5%2FewDEy9WcUHS%2FELy3Hio2neJQeJMjJO4qiu%2BkFwJ1UO8MWRnjNjLWP1HLDC3EXdL9tADfgFK5BT3%2FnMMPLU%2F9EGOqUBNXOOfwzHtXck5bFFhDM0k2XEa%2BgC0IoKTZOZEpHimm1pU4lHGEZsECtZZ8QeIwxVc7UVWJyqhfMIZ4vhrAqg6FTilqRjZSj%2BYGYXdMlWVQDOt7XcKaOMkyFCI0vuKfa%2BwiWgVv9%2FEDAUoxICxAueILi5TdBD9RVXaT%2FRA%2Fes%2BtxW3fovck7eiWeqi9KM59Lii1zRHpB%2BTRp0q3xBdec1MVo5lTGX&X-Amz-Signature=01a7bb59551729a1a4c6a858c81b984c832b7c65c06d89f1667ec9f7f7dc17f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

