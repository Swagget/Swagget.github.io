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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBPUKRY%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T182443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFsPj%2BCjJHzOeebyACKhaOxYRy3DJFssE84VjVzIN6ZzAiEAoZYoRZQjbPRE2heZylSRkXT2%2BcOGQPKMfK2iXX7O2V4q%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDBePcSG08s0CS1KyzSrcAx6klKl1vO2xIakwuHwvCq2SAKgCrbp4GMGHOXPpkyfa8qTgESb4FO7MY7Ku5348LI4jFn9QBSop1PMqa6H8MHjjttp5ciWA2od38O8g%2F7pfHPkpZo2X9pqu0VuhQOClNVpgfzsXaCBmFieLabP2OaykFtHfOOG5faKHjKxemI%2FoTNKNhhrq7Nx12m0vK5q6lgJyEq7orcfJYa9AObsU%2BbvVSeChCis0o4pHbGnDJceqd4Ia6FpUFQHu867SiMTP4Onncs1pN6yxn6nE7EXUFwDXzJMH1rK8Iw0GS4h6a%2BXx5dxk84EIvpkR8vJwUbHXLZEWuR%2BcKFLsEKRMuxTh%2F055vbO5iAhNOXeEuF8QZ%2Bm%2BZPJZGUyMh1G528HibOZ9JpZrXs3ZJWoH6JMowxJUwtXzhr5zwRBhXaAO3430Y%2BgrKuXv6V0H7FwJibDtU%2FyCIz5cfyXep2R1pWslIB8k5lKbH5QNfZi2vniYXC%2FM7ErEkvsmubY%2FJd8EwzFkGZ0lBNh2HizhIPbIDKRwf4x2X1mrSX5EDw0n968BdrEiQo9jMiDT6YgyJNUXZJYserPvPSltwsK9HHgQiZZ9zbxWL44NwF%2F%2Fux8WejaIO0%2BkQt39gx1fV9jAdCYnouZzMKfQ1NIGOqUBNZX%2BzoU1jiTjFemvHU9DR5PGyS7gmWeZ%2FMf9czaqnA5U4ZsEs8UIkQuhEFUo2HWAghiNttRPw6Lmg2UB1VSXX3IeIT5g7lEgr6OYYzYcbkTFVGOkl3g%2BFiKWHyxOMCcox%2Fsqg7adGJiMnziIaK3nIIVLgO6cfNv7loqvrbGiIc8ewofg4edvjRXDjfD6NRNLGHHeL9xUllmRXMvh2%2BtT%2F4x2G28Z&X-Amz-Signature=00b4f7d56b4855102807fb0552abe2734159c42b3ba12c218ae46c0bd0e8fbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

