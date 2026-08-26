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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY7EZCNA%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T102154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCmVtwh1KpLPqrePxTKtNq7ICLrVWNjSWpQOHRwIibxegIgSTtd%2BaJMMqMvrW1Pg6LRRy9jN86M9ryMmVSEzxeeW9Mq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDLsbNaLIA0PbI02cKCrcA5FGonjOhvX6XGIEIZ0DZdtOMJwybK4h%2FjkLxzQ7A3QsHKttLV1N%2BdAP5dxPuNri1dP%2FtVORRlWnTHLIPLRH3A4Lk62ixwelX0cPlG6nrWuaAOQQ9y%2FI89mSCDOJ3KdfIwHf0vEoLizLXf1LGmh5xU7wmWiXGHZMmuerDT3ROovTU6Ddf%2BAEO1Piaf%2Bz8XUfL9yzZ%2BtiM8cHjpWk3TgVGlVg4OLgT6yD%2BLjveKS7k1%2FYej4Qnu7r5WI2CYeo%2BMAowdrxoj%2BXhcqKtdHrwKQu%2FJys4unvoHYzw5LQjrGdonQ1D37k1FRlKH60AnUNCw3krA%2F4nP0CyIukQGMfUhLV6JMJDYvXN0jlBsrPzABafkR1ZIksxvVopMpAIxbH%2BtjZFs1Z2DjcrjGBL%2FBxfgGn%2FBG8FvCKWGCLDP5zLOg3ZYBhy0I7mP4QUprWun7Kw2%2BoIla%2FMy07WTCP2W68RbjGunR%2BfuXqKUoSeRIETVOBs%2F6iWE7qGod4099ORLewG49vIrmIirCMqJUGDA4VVYrw65%2BUDa7%2FhI4kgr1G0Ikol6rtsIjHGfs6zAcP5Dm7Nr21EszVENkWZjVqnMMfsJa9KFVSxkEhEsNtDQKDZopvF%2BlPbEOZ1PVJa%2F%2FCquPOMLm4utQGOqUBsa9JL8IiiI8W8O3vk1MhyxGe6Z24BcJTNJDJEKGcuYwtFbaMJN1Dh5cqRjIrWC2ppqGJzOmtlrUVG%2Bqx6DqhN%2FPjucXCGdxiw33KSkYNZxUNP%2Bvh3neWe1YazgCW7VtVszcgqDJTVL072Y81hXplhrdF2c3C72%2BlReg5JYT0dB24%2BGbwBVx%2FTVLtGyfcaNo9NAqsCRE6bNuloA9bz68qSXirJWiz&X-Amz-Signature=148c1971dffbc05f02285534ff95f1937945c134691a661d8c7d7ecfa75488bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

