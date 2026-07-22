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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHO6VXQA%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T161138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGE%2FmzicHKCiW2Si93LMOY1tl4vJQyLMvQzyPkd64AcJAiEA5tZ9G%2FhZUonGYUQT9i1jpRnLNFwO0q%2BvUQZFE2FMP1YqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb2ad4FvTE%2BulyR4CrcA4HmAl2CM%2FtgsMVjny90xM4%2FZhQOvw4Ail%2Fd2PyQzeOwzr%2FXOPO2sgJYdXhqC%2FucMC%2FJ2xORnowQEKhPnQNCt3g9PjBUC4tOTv%2FGig2tEt6RX7EpZGrlYHdXX%2FQS36OPFT2vWiAcZXk7edud4i934bi8hMWLtmBeXxVYeSSvI27UzIHPd5Ari8lvAWGAKgS8W9HT8XALrcda6Oj5UziVQqJ3NIu4R9DtC6PLh%2B%2F4a8UNUqV%2BLf%2F2vuHSu89UsWNTLCLTlOLBFxupq3nI7aFhmOz2CHX0cKas0h%2BUdIdoe8OGzVcM7aliEeyxolGw6ZYsK5iCnJjNOOsGvZRWI%2FHBKNN6Wi2KxUU8eNTPfho95wslSaUoGkN1Exgpava7ImUqx99xpwfFFMAy69LM5ictvG6nZ%2BqRuc8r1cKToxnr6Ub%2B90TVkR4olfIu%2FDs2NOcNL%2FHCgye%2BOaf84A%2BmQtFlIYwvuvLNYmW0P6B9fZ7IQtItswETTJUKOC181HuYK62hl58FgG5DLFTNN9XvzDx8oJ5Vq23lyKCzDibJdq1ccNAgq3h6%2F0Y9CrOCyDl6Ou9COPCSevs2tdXkd2R1yMPzH4VdTKCYLBom172gb%2B5uefFeNVVesaO7NmCjoQSZMIrDg9MGOqUBhTbgPW2ClnMhagXAlvDZTMiSdWsyg44FpD8LWJkROOm6D4unfc68FsrFGDvl2pXY3cMrAlATkbhZ%2F%2B48Ncv57tZsC3pRwTUzvz%2Fw2Wu63wL2BF8IXQt8UDT4JRG81outFly95a8GdBI94yGYJe27BCYu3LKGE7JImyVvkKhTa0UrugmsMKo5OwUTbU7RkAc6jr2vGPr%2BjOkBKwpV63AQG%2FqKpZEt&X-Amz-Signature=7792f0252266879fe22a40f390a644ee6c7f06ae7340c3db6440bd2fefe0738e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

