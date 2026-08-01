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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773M4R7W%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T234511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGf9MJcKJdt%2F0JcngOpQ%2BOKhMCek0nTLu%2FboD2kQ4xjhAiB9Zlsr2XoSeg8x3cEreZQSO4hwbI4Buf2anseoN%2BenOyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiFnSC%2F7TZ8Iewd7KtwD9AAduCe%2FyWfF8%2FYuqrysm41py0ksJTOxCHiXeWSR0l5THxsA9w3dTti0kr7aF%2BL683e0allyLiHx72kV8rsWPp1RUWPFBAqsTiI8HTO71ZhHvwcyzkU%2F92hhRL6OYyDfHG%2FkLb4iIfL2eRy1AMLSwhUl8QwSwMROnHy2YK44zz0P8VP22EtDx%2F9v2qYConFL552HFPXcGmTod0siOXLepYkq76ZdxEv8uUp9qLIjKMhYw32VZXLX1wQjNF8hFtMnk6JFTuwXtlrpl3wlHYCBm096n2Ueuv90SiM1i3XNpYFneMxgZwHkVZDFMSPZEiHLa4X6wYz73Ir81TKb5rHhABrgBWsfwUO27y0KxhNg4vaGMK1NC9y9EUNJEx9uVQOb3V7IwoC1gxZJbHOR9Oc7vTuVdQIPYCsTsC0z2%2FCWO9Z1ds4XxfJVJB0MQIwtiqR1rpxxnI%2FbKWf27mD31%2BP8UeKxW5gQd99psj0GN0a7FO5tD%2B2oXMhruQDXznpCuDY6lTqO9prnb5L2nxAt3cpN946Jbc3%2FJ7dZ2%2BqlOdoxJV%2B17BktPqj41f2vrf%2FXq7jJ%2BXZY3w3Tsbnch1%2B64ETaEozkKzV1lTM4FXMPazDXeRYYSJ%2Blckz17q36Kl0wzdK50wY6pgG0%2FEdDzj4NOIV3S0MjV7MNeLMIWILeMjpX4%2FTvOzJ4WLYVNVoi1lrz9MadsjqGsu%2Fi1w4Jv%2Fwse%2FHfT5Hx5prq5pXM9aACebztH7a%2B3%2F8YzkEgpYX4ClGvjACcw880BDiAGAZgslGZ0LY1AhkL6n8lU3Sm0PLayKZKBopTtZcCKGL8hTpvmcmZFwGpT%2FHDvkKCvnW4wHUK85m8gTxGW%2BhXlGHW6VTC&X-Amz-Signature=d2edb0e69493efe1cd951ffb9dfc7dbf9a62fc8cb5cd98a985b958c7441485df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

