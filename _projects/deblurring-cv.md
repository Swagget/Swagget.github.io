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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJSYSNK%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T071905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEoGXaajOuyf7DtnsBfJOlAcrFLUPzbTMWjVNuhkFv6AiBUR5nCV8leVlp5cbpVDe8%2Bvv5WPO%2BF%2BRKdjQFUwDA9JCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc5IYxO9oEdtS6gQAKtwDBODnwgiXeEVHZRb%2F4KRPDC3xwl%2Fi0PZmdcV%2BBW%2Fzlm3RFFZ1RRAHuBTl5Qhw9mgHIPkQx1%2FSqazBGKUQVFtuSgCp6ucSfgpqB8nf7MT134AUf%2BJp3z00fvkho5pIaCYdz%2BCZiLL5xsH97RRjzRzISlPUx%2B%2BAaDISnBVNQECXUrf2I2R5VjxxfVhe0UyimSGiFtRnFUezrW4V9tOCr%2FAoq%2F4cFgREuLZCL0kSdRzGr9QVV08OfgywVQSv%2F3SMriuRGVsM6FXfM3%2B%2B4mn%2FUtEGHhQIEJAioilBpKYBSkO0rX7NByIwDSoph1sAEHcgynfHypZdtCBhXq8h5sddiemgR88jVX2KQtnATIJxQV6v8q07xMvuLYkJKXomEczdpwBxvc5uJjRIBd54QxVkVv9TLZPv8o7kJVeRTcESQKBbVyKi8n2AM%2FwvQMHWhXcnjwlwSGqh3b48w91971aon8mptbAQbCC1x4p4qJOQUBD1IxoxGKwUH5aX9BHZXs60fDXdoHDReskRBG9Yp5Hbah%2Bh62JROZrQAKt2AYbaFe7l%2B5F%2FIrstoE2ARgnj6Yk1Egv1l3GppWQko1Cy9EKmdayjcxGDjed153Zzx0dxw%2FUKLoTmmJj3Om%2BR5TblIAswgaCI0gY6pgGTEjYbD1xzsrQPTiXixwmAnhtfhwAgSwWIqB%2FQcUrnrwj1%2BmIkbobAz%2BiKHEwRGGR3ymcWdeLxx7nHFemMgoVo2IlObMt3Pn03ejJf9%2FcvJ1WTj9Yhe%2BsJ9fuNQNuy0AKtv6Pood3R7IevDMuZFD6UqX8Yd%2BDp6PP87AHf4oKF7CfRI%2FyM5v32MznvYOZUup7E0YZDtUdLxTggcDqJZISQBuS1lOVu&X-Amz-Signature=33252a63a707b668670469d6b6643062e2864145fcfc167879836f5050e6bc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

