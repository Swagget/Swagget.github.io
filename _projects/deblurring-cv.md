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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQJ43VN%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T195544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdxjY0D1zjXGOVISDFew8od%2F8JDdtFx5vR1UQfPwyJIwIhAMLfgTCq8enX2D0DRBd5MrXoUDsa7SCpTCiYOYTA0nwXKv8DCGUQABoMNjM3NDIzMTgzODA1Igy%2FTZuHNRCmdGAq43Yq3AO3sMpK53kuB5HbT8eMUGNXRTOXIXf%2F1%2BlujulwVuEKnscV0T%2BasdtHFbNLKOmRawi%2FpN5LWzRPiz6y7dt5SJuk2n3bGUu%2B95VtZcQ295VllP7ROQOkCYbgSvk2YlnwmAVmTwmAF6hVAn8oGXg6eNk%2BMTW%2BcsrNPkEQHzWYCAl8yOBcOXbfaaYnZyYCA70WSt8T2tiKkUB2ke2WWrNXCygn1n7H2H%2F5Rx3%2FGFfzJfgKui7vH%2FzchEd8qh9eEUWvyd1yZTAB7v1UkXVtS9LDqvL8wIu76%2F499V55Mj%2BefdDnTD1pObftmID7SedGoFVVhH%2BaQRc7KSD79QEhB6SFulD9VDRVBdwOGBzk%2Febg%2FsDuR%2FSgmvf4qDCM3uCh82ePaWiJlXPvm2D8A7mOWhQ1Uk2kKjsxI1uBanzA5vYqxLTTcGtOrfPc6baJUvWO9KReDRB%2BjxapcKQTxspaZnr228%2FPPzuzOriDGAnDZEq2zE2qj2HWA85QBqonz49XW%2FCp7H4p8NqZOLePbSWBw1iNrvEciq2u8Kei9KnC4DW%2FDsrFjwnNngscKkfg9ccN79CmC9Z2gnvPd401Gj4jpcvlZyR5bHFWNzJKd5vX%2Boo0HXc86bZ4M2TxcrtN4WKskjDahOrSBjqkAY4ICAkr3kkIaTtQX%2B9OBCm06PR3dTev4BKm%2FK4PnTSPXPRClwkUSJ%2FCGZyqdaGvOzc5IldHNi10mQqmQ0AzMdt7w0myo%2BU03pTsER2foeFV3EUDiWThPOq5fTb9tVOL%2BYqI8%2F0FVOt3oRtnWu29DD44Q0WEQgSD%2BUvW0lqV6PM6pWQqD27MOFjO6V6wPlvgha%2F9h%2B%2BDQu0%2F%2B9%2FLifrS4hhVJ7gl&X-Amz-Signature=9504cc6ed92c9afc1da52bf4e973d9556185a41db2d8beefa2907a9ff0c25ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

