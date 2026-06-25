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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEGN6YRC%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T081621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjV%2B4UXjqrNw%2FlbHuUdEym9%2FYochAInb0ugRek7KW56AIhAI%2FZlmHi3HwTbsRaU11zZbfC2ac6iN6fyICM2LP%2BvtOsKv8DCEgQABoMNjM3NDIzMTgzODA1IgzRWS4kXSnDwg%2BW88cq3AOA%2BLg%2Fr1%2BeqDRpZOZdsDW46UqAgoTV60q1Yt8bPoeg3aFsYVxmWVO4AmXcilNSS3s%2BinsriNSukTRGf%2FjxzJRTpCyTDx%2BOi91M10DOJh9j5p0zHAHae3eL42o9eVvyU4S29%2BjkynQXNr%2Bc6O8ZxlFunoPdbhQzgIAz1EuNQRjT5WpfW6UTXDdBZxv%2BX1Ar57t4EN2rHvCVtboYjMf%2BU4c2rGU87nxNy68usJWoHdTl0%2FwmcpipiKz7R24HyNyJ3eT1tMzMdMB07c88iKydJxCOQZxWUaVQOpsz4wtEn5PSaAvxkFSv2x17gvUqWy6810lzCrOWff4X%2BMtZaBqShlSmw7q3qUaoDSULgsW9T6%2F6HV%2BtzvRP5v%2FETgm9kNN%2FJCHTTfpYrDUWCiq5vGmNF4crllAYjL61UQK57NaOU65l8bR9%2Bwnu2PgHHXHT3iAcRkrqwXHyQ8APDEwDAIFC3D%2FFGbxvI33TbBAi7p%2B5etk1iTTtQOpIpzRfnsvjS%2Fm7lJgQyWKIBkezO9hJU%2BWC0VDFK%2FmcaHhyG45PdPShra78LYiLjclwbUoZgGLf5xWQjgQXWwiAj%2F8pYWWtdVhd7Y4bJwYmoekeX8KvjR5IMIndrcYNuFleVdk75uO%2BvjD4sPPRBjqkAVm12JvqZciM8MKpNH9RevN4uwnnuH23zgrP9hnnR8RyEvXzNMhbWS2y%2BGYG%2BUzmPoybMoYP7CydznB0oM1tlz3xpiul6UfYZBm7iDx3vveh%2FH69HVpJkicnJivyzwkST0%2FWDqw8FWwXXeBUFwPwpH1jgw4bY0tw2VeU3GTRgqC4lupW6Hcuywsqt0%2FlM%2FDR%2BzkyAX6YvfmHJabA2PHRqC0Lp17a&X-Amz-Signature=ddab04178668123780539f58f35d887afca597d0305961936602a721c0274b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

