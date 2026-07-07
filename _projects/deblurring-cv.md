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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VJARKB%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T092315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoJIc1IzfmSLhI0BdNd9XlPCvLlLxdNDYIxnf6V2HpAAiEA3HByKShWnIf3DD24M1y8QwjmWWVkzx%2B1p4You%2BFgxKMq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIgrNuBYhk1J%2B3qOiyrcA9gu9JO7VPr%2B5pmosy1o69kf068F0Lk3IORhIk3ODILFQkaelRaH39CKe%2FDClPSuo9Cj5AFFbBBnMolszoUEEr%2F7nTjINu3SCKDmIRPUSf%2FhzlVz%2FGQoPb6vAHAGko9G1rcYe1FwIbeT%2BsZIh9tQUd1SIEGOFNXAio5P5nk%2BJppdGi5glopgGnMUzvtK1O9XNRs1ciBuYc%2BXY3kH35AzqckGjUpxhuRW3zftS%2F0YHJaqlA%2FHI2ZkK3eAf6dqXjtJJDNNtg9kqFUMgPqmDpoXnig%2BweZKKx8sFIm2%2BWVhix6Iz61nWV%2BNw67Z7Xl0QIXsJ2L5pcKlrFL4qFWshPoy73DP5Uyi05fVYbaW4KhcmdnU8FNhTm1%2BoAxJUT7NtDiTfFICHaDoueg%2Ba02PJcUV6znLJ7WrOoS7JpTLxrnhr4D8svg142ZS7YNmJGXBDys2Za1YGhWUSqxLP7tXWfXhOAlCukzE8oePsIrqXyI0G5wPRTicNrgMRuCsmeESUowEMLOmfHk1pKjR4%2BfMFxF2a3x0E6PFVeFERYNyhMkV7rYos%2FHyRkAeHZvdR0yc0A6slftwTp%2BPEQ7epwuQ4yTQTFeqTR3Ua2WPW5FIThZRhIWThyxzTb%2FCTwU6aYE6MKqEs9IGOqUBqbbmGbqN%2BQSell9KleO6Rl66VmIOIJZQfb21kF49y4yuU4HUXsY8IzHwkBXjnLuL7LYsIIT4uLpy73BN1T%2F3M%2BbtIj3P1VCXsAll%2FDZX0vd4mcvD1ID5H%2FICQgYfulCqYd2PNbFg9KF88br1Bc5GtRM9aPk5AEYIxcf0UMvd%2Be%2Bx%2FYD5ZzP26S4tOzTqaNeq21Pbja3UcIpaKZU6YGBHl3IOy2A0&X-Amz-Signature=d6bca410e01c710021cf312d53b7470aa1ed95756acdbe95dce53b6515a92409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

