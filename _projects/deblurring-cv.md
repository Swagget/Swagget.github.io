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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCGXOATI%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T201541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIH1XzruNi1B5H1%2BEwgwe0EF%2F7oc%2FDCYsbQu%2FJyURwPwrAiA%2FWJ3wJYJW%2F3VArPuR6uU%2FCyL48tOV6NUSbRcz7mO%2F7CqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM425wQoz4UOC0aiQGKtwD9HccmyuO0%2FotvHsQyM62YZJvQhGJdNtI8gbK47dBuy46UdLIJIAbFdyiITS6MntO%2Fo3HGRet429bt17QAg%2BjzezQJI9KLvvyliwhudfEYOY6VNiOpOG8KYJ1g9TdCGgUnK1Jb%2FaOA6iuG5cp20HG8Asv%2ByKgDu4QUeVL8706i1CVNB8FqMivBwBHV5uGvg3lSZH17HeA%2FtRZMfks9K4YmRF2Jzw7O13daxnyW0bUjS4QaNHz07EzbrGW%2FRUilL5hCLZhY%2FUGvW1jDXTqDhN9%2FURBBPXOdI1%2BcQ4%2F4p7PWPOOnvl6mdtM7i%2F2ltGd4o6RloBPoldRskTHpDRC3UQPPuZVmtM6OWRbOKbKJP8oPQIiaoN2TQMcUyOuliomcKUCbN1bKXkENMJQiRRfuynbIMqpF1V2sGf4o1tbd12ddTZY2WfehrBJUHPvtrm26hpBzjrH1BtYFL27l3gVRhpvboMX2KaA7p1pDZ6xTtbqRQJQuW3WDV%2FMHr1Nr8XtKcJ7kuZeqoWQOJ%2B3LVDljHSjzMqXmDH%2Bgage0tgyP%2BtYAUKRQv46OCdpGGQ4ygjyXV6WQcQXuTtcYoKRhQLPyZq32TklV28q1P1iKGGhCagayRFClkXX4O6Bq5uNLtYwyMSy1AY6pgFW7Pv2vcqc4hLCx8mW%2BeMoQu8V9CDQ87lE5T9TyVdJXxFeOOPchpxdZoFZFsy5yVvpoUwICuB34VP25sgCmH5H7ITObIlqLVc9lZJpjDQhZxEEf1JNbEeubsLgN1bn2SPsmYxFPaoZDEP5JFiZ%2BdXI2NN9F1SzkGRASX1FdDeDTscwnzaTX6BYrYU%2FyPhjmE4RUfOPPg0dhc%2Fi9MwA1gmI7Rh9LcEn&X-Amz-Signature=3a116bb43b0c6dd28c4274463c51a65f5196bb99c3e4e3ae8cd6ea6d9255725f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

