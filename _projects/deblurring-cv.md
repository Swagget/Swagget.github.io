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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVVWN6G%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T174112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlbOYuL409OGYgkZOpKtiB8pzhGDOjJiush0oBN47EkAiEArek%2FxtwY83%2F%2FLJAZCyICjJZDj78apxML1%2F3Utw%2F7eX0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFDI3PkLQUlX7KgrxCrcA5GC6F%2B6MCCmTjsuhX6n2F45eb3icFLUiC6vBMEaJESXo5yrpvxGBNdCEZJfE2MzMEEWiWHyn5iifQwk%2FkNI0PvnC1L8vAeEy3DjPhub9F3NcbUowuyf4GoX7tV3%2FIhOM28sAXu5P8JEontnLSIiFoZGBUP%2BtJzDYx%2F%2FA8Fx5zt5yxu1yZ8%2B885IyavB2yBv2Jjbxvl10y0mqAB7%2FLGotTIvDBJyyL2ZC4bAPHhTIYT6K1ADSAdJwdekDIkezwO8be8%2BjTRjkN3QrJFL3EVNmdwi3RfVW7wR8VNLRFOBFGAGx%2B3UkC16UZ%2FMwPZQVFpG1mL5uT7i5PTpXUP6s%2BuImlV%2FipJdgO4dyFozQl2AJs8X6367N0cjLqRpiy9fa79A4xR1BG4%2FxJhlnX10MJxn2Nc4kntx53jQT2wdexbwH%2FnPc71uT%2BQaiRU9OocMw7GbNLvEH45Jl10cGd%2FH9OdrPOlbfvRGL%2B0aJp1xCYR60Ei%2F22at3FpYlSw7HvhejxDBYpeEE0kmGD%2BLZ4S%2BXN4ULGmZ8GvsKcO%2B8427sIoqD51TbgSJbBtzp5zWPFK3%2Bk7IjBOHOHAKXT1DuFAqPswbv%2BL4%2FsdY7T8%2FuMZm%2B4luJSj5I9Eulk0rCWGgkgJoMMT059MGOqUBuyEOEfP5%2BcOdkZieDXP%2FPWeVJQW9NKvo8MDdGElCL9PXfeLbcmug17JhZ7CzxMbY%2FGXNE5wMzDOlAkOQcl4GxWyIFlc50E4gtju2edGSEQgHfto4nLpwvi4%2Ba%2BximZzHjnsNn%2FTBKyz%2Bt0zwzUxP3wBJIoV6zkTWTnWNDhC4fsb5LniEGZ4GyiEntsK8yvbS679grEOku9%2FphRQ%2F6S9QVM9UjPH1&X-Amz-Signature=31be39692d4b0500691ae46d6bf8453385783a00644e61a344d339036799a131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

