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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JHHXFUT%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T224333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDsznrQIK3YxUJIZPJN%2FnX4O33GV5u5ejRKpDAUavMtHwIgJUd7AQBSKCWWAzIcWpu5HKDrM6vybSF1peywzBms%2B%2B0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAKD3s7wuvTPA03ZcircA4rc%2BgwcGutam7oSoqlkOaPj4x%2BG7jCm%2FEAS6l2%2FcTni1sDq9RxB55m7%2BpPu1yBKDmKLodgSKL%2BPtFbZ0IHbRGmWCowLIbg1pH0B3FZbyzIzlO79oaHEDNWc3EuDiTBOJxBuys1%2FB7sKMjbeAIsrycMndwoKbx2KBaQztwxFbUPIe5losruVR7%2Fl77cUM17YTKrKGXIiV7VMC5eXxwjbasOH%2BfQZxYKDzLw7f7%2Fd7RRK%2FcY9uyh3DtaVSCLXPZfR8eAoJfhVT0grQbCwG2Es90YTIQuI5%2BTJRHDT%2BxcG1MnQp45fVF0sBxpRyKcyhHzLekPYtCjqDG3pE3A4SUefFuo4lZphGQLXvKoxEiWpUiZhuAtVkVUUkZiXgXuuWFgvEN%2BQHis8lye34NW56jZq0AG4f8ypg8nY9%2BlZ%2BNy33EhapD%2F68ad6A4eutyo0YrshydC2ta9axLtZKrE2qHjJ5%2BZf0SXTIuCz3OJmd4LElWVgiWTY5PYsumU1fLgAhIOivYcSwLFB5fu0nyeBy7lJewxpbV6iyjLngjpLiBnu%2B%2BQlbOAVQqorTPs%2BCk6auYO%2BzkLafgAJBK6SusksA0j1G7mUXzKpLbCROHW8x8C5lJSuP8vDRm2WHDaDUozdMJ3Q2tIGOqUBgEPM6fI7NI6IpdHx3O880mgvB74GmlE5SKoMPGKLMTIBaoEpk8SOTsV%2Bqq3ajrGpZFXE1iE2%2BTAHJbphEBtR1vV8otlZGzO%2FuKMvXBoZxvrrk8y%2FYT3HHatzTeVbB7cwYMIuV49%2FCnJrSVMeMadf4rNPpe3n0S5avjVQzd3tKwmjHN91SCgnBcrLHJCS1TZYE4cGcBYncQ%2BNZPX2rQIwHjS9MOHV&X-Amz-Signature=fab1c6f535e9d8666cacc3ed99d9b28b49c8a399812656990485345b6a2eb27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

