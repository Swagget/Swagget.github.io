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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46AOBUT%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy7DgJYVq2fQHU1420b3LVdwM0KfzNuzql7l2GCglp%2BAiB83KGo8jjO67gyt%2FDUEGobiO6DKfI6tz76xwTitNDzXiqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxsjnSGXNchI1664LKtwDUeGzCSpVkFtGwCUprWf%2BIxPJz%2B8fKR1C3fZqLISBEejJ4TCvilxMNZI%2B%2B%2FvcZ4hgtPMac3VqAqB6koWXuRGM8P3a3x%2FfuZ2mKfunjDYYRaA5or4gbAj%2F0wsIFVv155HTDkds3Pycd%2B0eYJvRBKb6V8Yydsb1y63yp1qxeX1liHnbMUsBXC0krOMv%2BQa7e9lvkd%2FFv3wktcABEGFgWNjOruXyBpacr24NcfgGe%2Fg1Tx1wSTtSBiV251D5FVVo2HNtOzz1WuKI%2BAjmR9O2iDzNcjzAnbRaCASECzxm4dhoAH2Wnqt2AGUlWteJ7RK6DN9hnnIiElu1KvQ6IM6aSt6GWKyLODWRkPe7%2B7aa5AoquEG2vYWZvWCifjRNwNd9s9DenVMi8ixUXnJD8GNgIOeYkj1L2%2B35cKtB0G%2FM4LcW3eiBoBFMtvNYjytK1a7Ko70OAbbEUAc%2F3YhsTPuWlJuwPeECT%2F4PbV9crXuxE6eaftSL1qwgHuy5hvKYNSQTh8ASjdJyKFu5kYG%2BMIQr9rFLr1%2Bk%2BTXewHJUfrRRZOg8uiMoS4yk8Udim6eKIcoruP9UV1DhQrPy3r7ihDIjVXTIxY6FXSzvHYniwBJthIXu%2F8zLQB2lC5Bb2L6L2x4w1Iu60gY6pgGh2c%2F6l1OWHEX0TANCWxUXgT2n9yj%2BoL%2B6PXyBLurjjf%2BEqK0eKZS4gmAsEh0Z9jaufPF97oaVEivOJ6nWqfb7unA2L2tpnOy681p34Z1s0tJqU%2FTTmp7TnUxzvpNI0X%2BuKejftVvn3ME0OW1IOyLkTqALjepHrANP3eb7I5dLgbxQA3g6Fu3R9Zg9XWU%2F53v%2FdRZ63iZuDj3p%2BTJRE3FGI8QA5wYF&X-Amz-Signature=c8d1e74b56c4507e4473ffade53818e70f6e4f0604303c0665cd34331b968d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

