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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNU63O4%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T045517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBXK%2FH%2BsgWjgRWBq6QURCSVx482n4uuF%2B7q43w5CmkpAIhALYQUUn8NvHAJhFHBYc%2BxE2wwAXPsuWuRZmgTODjVh7eKv8DCH0QABoMNjM3NDIzMTgzODA1IgwfxJqiWbfoLt0Oamwq3ANc6uVB2BBZTYtKBMqu21lPUP66u8eURsRhnQRJmdItrX%2B0AFuJWUFDXDs2BXQy7UnOkHHU4FjDK4iqIQlQ7OjC9Npk%2Boq7LMY%2F6JfECuHuhUPx%2BBTgFdG0pJ%2BhVk9sT%2FxSZJBsd%2B%2BCshr6GN8WUlhvteCL3vH63xiJsWqJujNaSUVmXDebiGbuCCOvHEeNQBL81L6ooFkukBrOqeI%2FQ7Yqsm4RVUGEPGJaMScxKeHHrUcetpOC494nbnhW327BocEYeOAIMBdu41WR043LCCXpOgH%2B7DI%2BExrn8vQFR63fgWzsmk%2BY7%2Blzc46a8NsnzVj42C%2Ff8GjoabEz8%2Bb%2Ftx0I8LcS440i2NwfEJcFHSntPrLpzyicEWMYqHXnKU682CS%2F%2FdtDebs6VyAG281VrSCcLD2kAtf056%2BLROLNoNobpjGj7UjP8nSNwK3MRTId%2FLQJfd3nd2mJ4xt%2BlkVdbVslUHfoS0YWfNPLt0m%2FnkvUkER%2F4nQHHxCvKX78MlVjQapUVH9kikkeI2vzhvzFuogmGhD3fAIn4VJJpefD3VwqI2S8FrHqm%2Bzxeaw2GtD3ewgAdeWDEkbalb2p1tx5uQ9oD5AvjWUbeWEdAnOpE3y%2F57j7tS%2Bcg59RfrRj7DCwn7fSBjqkAfQ95iQnOAhxWZh77Zti%2BK%2BzMI8S%2ByVwPegALsL0pwJmZ%2FfT2iX3b7N67egRfWMnwxU9KE7kEoQ4f6VX1%2BEsAlrWlH%2F%2Fnmyi9cWUli41t71Eqbc6qIiXGYefut%2FXjqkr3uKbIFZNIfxMTRMsYsxGWhqw8CdpP%2BRfU3lfRbyup4XUMVyuG5LYNv2%2FV1V%2Brm%2FlJlY0yfTHvHd6t8gdJAfVjBVDFXfL&X-Amz-Signature=223e14dc6ca95668729609c4f0d0dc622a363ce77896320d26881975fde9c8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

