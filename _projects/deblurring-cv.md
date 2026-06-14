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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXUZSGVA%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T220330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ%2BasGH%2BTqAU7Rx85inFT6ZnvuVx4adEXvxJvVTmSrHAiBttwWq6sk0NahfrZOybY0WPkz1izpbwpLpaG75csBI4Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIML4%2BqMK0Fm%2Bu434GVKtwDu0Jo38zFgUJ2edF5PJtw3r%2BX7jLwC%2F27TL%2BfiDjVr6xqXDuPWs2zkWAhEr5QIjWkLXBbVK%2FFc2wpf9Jxep%2BPo2iniCkFi8QJCS8G7zdteOFOlBfus0DsBqjtQtZEnkqmz9iezV7yrBJ8WDM%2FexY57DXsqXGVTKZth6E%2BMPA97jtsJyMa3nwcfetEzIwuL1r8myQu2ggmYfIdDf7CfoZauVjpokJ5Np3AEPnL6QAT1GyCzmi102urfIAZt7NdIourEUxg2e3oAfaE%2BFspcMozNcRZeYS9hla4iDbOOhcDqOxl%2BA9d6B9oWc%2BsiTynJ%2FcAVramlpM5U3Fnjx%2F%2F2XappmBlJDlVdicDV5pxKghusdtgtcDo17JzrX3iLqgf9hWHYUuj9ViNY5JXgxPDLzvrhl%2FbLPkOvSZ3JZuWGPt7qjo3lpBLvi5iO4cYL5C5vokcwQM4veoumZUVRTwJ2z9olU5Jc4X2C5fjClzLI7FjSq8K6rIsxArt48k%2BOaNW0RxmVCSzjg3PEgJnkvGt7y7uaJLL%2BOE29PfSGyc6t3copqCOhzVGaYeVClGasfwnvac1%2BQnYvGNJX%2FaXQv%2FwHnb02xRYk1rArtrBh6kTdklbwCcGoP9d6FASDJBwv74w0vy70QY6pgGSYaTeZqBHWIW2DGShsho6EECiNFYKpxzYltWhs8Im2o8bQt%2BT1dGT%2BHipxcZgSz8h%2FxMZhVdKmpntrnNaadhyQazkGVPtt6dp5QMxZotjJ0tj5RBHamPu4TJsgvjekXHOytXDBGW29YwqypSvV45oFoiEbSg%2Br9BGGUtqAd6g55TviOT75pwiDO4eq0J5FQeDnw4sw%2F6cte8vVRct5RZCWWFD0SoE&X-Amz-Signature=43eb6bf7ca3de61271e90dd67c587092439e087384c3fa0a038f30961b36d9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

