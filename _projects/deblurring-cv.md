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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWRUELTP%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T224939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIE%2BykoPdACR1lqnKQRBVvOqbL6vTd6069gMYl6dTXUekAiAQUnVnguv2mG52p%2BbExKyYZ4JORnhHtvppY0%2FYRjCQ%2FyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFayQu4YRdm5xZxAAKtwDjqYduJSTbQf361bhQpMAPQ89MiUMgHSRAem%2F5o0i2LKdSYT%2Bzt5RTmz8Dcso2hE2irQv1Gc%2B0ycNmH%2FVEml8NVdKWM9BtgbJOnBaZJwqZVNc%2BYKkIQHHonTb39A6BghYzv73QA96uRFbmo99KO3up0rfSdupHPvHYK4nj3BwSN9WLO2CskG0n9sR75zedXlhgf1dQa%2BgD0lzONaCmzqJ126YzFQkXF9IehaYOBZ65s2vSzB5c%2FRwE%2Bp0p4IAaqW1eSmApYY6qAsOTsAxqTkHHO1ObOL7QX9d9l9TROlaT5XeavC84virmBUUjKucXeLmyfJ22yTsykmJlY%2BmWfLqb4%2FJpURYmmHsWxaQDL9jx%2BXjccz%2Fac9mx2XUhf7lsqgDEV6g3VucvOlcHHSK6WdIHtSLp1HZ1rvw%2BlDMjqOTzDhnP8YeiA9XbE9Owx7Qd3zJrsfvhWqKJLoDkWG1dhxGw3o5zLRVDZZyME20aD3H541BxxjDLXh9qXZqfHGfxoxDe1TtFiTbcO%2BVmrNKjhIOro%2F3YOEHD2U1tOC5yMZAz68lMHG%2BzmCMZvrRcU1VtCW5V%2B17NmYMCeel5UmLRIkWyv89hwWp4TU9D%2F64TzGKeBMKCZl3EEXIlbMRxAkw8IvE0wY6pgEd5Gis5hw6URqd10odRcssdov0FxJeExNw7QXcGNHQmnRO3JByj3zo4%2Br5rdOA5vRAwPaNJA4B666FPuaudG6FsGc6srNLTwC2JE4cMVr2RCGrw5OHIBHoKet3vfXQLFFfB070mhe%2BLCoVdswqmqAH5bpVFHLRHh%2B91DVSfPWqKryL6LFMJJ610GBjfrSJMspR%2FE%2B4JJ99g8LzrHRznD2EfH3SnOIj&X-Amz-Signature=adefe4438b277dd78feaf7dde9e6653156119dccb91d92032b4a45aa0416c904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

