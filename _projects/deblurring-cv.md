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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2A2NL4%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T151335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAdspbdpcRi%2Bfh2VOpNiOZzJqFOEL4klLr5qUnDvSR%2BxAiEA7z5xRngfJF5uZNX3QMGbBPerxiyBlf8ydeYMYV5rxnEq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIggw4jnV28KC5LYyircA3T1ymK7DdJlpput3CAN%2BG9VIdqp%2BHyquHg%2FHr1Mqcl2BOioZmbvGx6UJPwQ2maJpbPlyv2mhg3JdP8ocCawx2sAzADhaQlzcoPhRh29dTdejIfbrnVIHeKKtOOzxQ%2FnNwufsTBwph58pMcXzsgqqRXRf3c0WNRshaPur%2BBrWdzvRp8K5CmYuBxpKHsf7yvZHVdHq8H95ehbY%2BlzGrwZV2yHiYqPwHmbJ6WW3nDy2FAuExPMWy%2FIchAzWt7X5JVwmba%2F9ctDw%2BkXagk%2BBQri%2Bu%2Blde6K2RbK9dsesFImHEOlP0WEU1M4lPb0XaqVrNXMbxAkdy2R%2FzJcNGh2FlpmBmRJqag%2FsGt8YZm8sq5Tr5Ve8U9iHMTDPCHBuBfVuS%2BJr6rp%2B3BxbIsv2oYhsNKNOrbX37rv7K%2F3OxFM2C9A7MHHQJaWwqTRULNdjXTOgsHMkCB1lUjTeuq0P6XVq%2Fe1t0JIVadvadHj5ZL0YP6e9zXTQdxGXZiDtAYK%2FtMCwLsRPWFfYCDA8UrWKXiRjto%2FdMSa6EIbh%2BSjDudXy1V%2FXxbmL6VKy03O1tf68W042qOXZbwV0FtDr%2Bybr9vNUjXv%2F1WJgQUK2HvxOnHX9CUguDErnoBmGLXf27RlQddRML%2F0i9QGOqUBku8JvvY21kLrEQv%2FaXxJsKxYh2jYy2nT2eTUWC9uPnB2doSmrq9GfCZwVMuU30Xo8pqX2flHb0BKMjhPdEYPtwYTGJfqqzuCvLN%2B7OUp%2FP0gL13qk4A1mFF5spOv2QfDRNYknZcdvDEwIOVmoRqS0ibHmf2%2F%2F6PqteCsSlD6Li2oZrwY1iShVtJjP9tKDAelTOLxSg31rbB2gD5UoSwh4%2B%2F79UhW&X-Amz-Signature=ce186baaca0c11736cf1c9d21751cc54b47076e0b20571e9ec45c56910c7c4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

