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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZ4E3HI%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T053844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrgJZC3nFKCZrltRrhUhLjlaOre4S3e%2FWCYZiQV5DY%2FAiEA4j65ML5byP8hAkYKYUzGAvwawL4Gg%2FVAPP0T5m3QGWIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC2wmCt7R2RXvKQ5CSrcA3ohX5Klb1hK1XxUoxFfpYY7%2BOmlsOcV5HKfjvp%2BvOQoGuHUjX5r4FBKsX9%2FKw3NSmz1qDwLZZ0QTCtU%2FLTdyPSI4m5Ts3bYN9iASzHGQpOOkL12l7vwpUD6TahpdKtyZx1c4V1i%2BXFx08TnvdE3vkCcTQPB1HmPIagl%2FdK%2FLUOf0yy9T59%2BmP%2FWr4nEKfVoJ5C4g1YKQlpp6jOXcT9npBAbUnP2pvx%2BwH%2B4kSlvv5GHAwGsj3EFfVjzrhvmsa%2F1dVd2%2FwvDD11hJvD1%2B2XN6orRthe1KkhzzxhK4AoH76n2%2Ff5w31cfGRKMgVk88aCzdjsvLOCyfvmvAnJy7EyC9kDRu%2F703%2F4WYgqp5OiEVS724mnLrTF70NaA6pbjUmLslzLHUHYf%2BSi63FKnud8E5tod23sPSKozE1jSMI7M2RLWp%2Bh1sGtiCTFZCb1VblICxCILBDSarFP%2BcO3z1XqFvOYghrE2UWZU08BM8HgAd7Y1dEvF2OdfhncOp1lCNgkgd0r9qk3rZSvXiCeNG9Mp6ykClLbiHPtxUm8BZriLPsjiUuswiLjoYWdIappVQOm74LF%2FBs8kJUViuZR7c%2F1hcLr8vMsQap4%2FffAVPG9Rp8%2BoZgANaSyYb4Z%2BtC4hMLju39MGOqUBLVY%2FrBe4gZBXDT2%2F5hBIEu4GLpJtxfqfPMvKEmJqVGGUALGMH6jIfIGnEKYkUEiIi3YT5YP4ueaMtwqMK3IgIpRpdAdKGL0cHw705E7KJyFv%2FyW770TUGjEECSg7Yx3aK7o5%2F9r%2FKLgIIo3F4RYIagKlymSJ8MCMK2Br3ubZysmn20IfvUYfJVJr0Q%2Fw0zUSAtbjvX9bFFCNvqrFUsPEWLn31oxB&X-Amz-Signature=f347579cd0fe30ea8e90b988ec4bc45801b2e11115f64d735203d6a6b0158ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

