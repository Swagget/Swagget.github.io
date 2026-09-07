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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T443JUTV%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T201311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDrEK4S9bmFtOWGITvCxdtd2W5xFfaNwv3R4Eiy1SrkZAIhAKLdMnc88TWppR5eLKrUcvXjqcAYAhjQSEMlCvmaWAFAKv8DCEQQABoMNjM3NDIzMTgzODA1IgyhqStX42YrYCFPSq0q3AMN4ei%2F8F9J%2BZ7o33NWjYgUrwXbU8Xvkc0BPeSJtzeRNzNpl8fkDxNmTzYo%2Bcrjrnozzjvr6RQNAbKYJxdz53aAwzQGTCrR%2FxZF%2BqdRXGZ1ThRSjPZzPY60QAdnoZ2ozYo4Ry%2BjjDJhMHeGzGzuRCM2TdU1s7mmcE8Sot%2Ft5eTEMxLXE%2FB93MJzCYXovyJTNl2%2BjuPXpUJRNUdTKvZpR8j96Y5ssno%2ByMaYbxq%2FXwlpn7GFkFNdlVHXitut8KXXvqFY8lm2AX07JUiWhg3iCQnBI8grktVYO3HDC0vKLoy4we%2BeMucUvDghsMyoyDAEGqaINeDu%2B3WzRzm%2F0xAiURRmL5G003t7UrRC%2FbcvQbiqjBFkIl3HIa6RbXPtEGUfIhF17%2FYQ3J4h%2BB2j5B3FJTrs253h%2BN%2FqisoqpRGNcAF6VGZ6r9aQkAdqmB9b9zgv7q9qXyW%2BgiMpzGvbBjeYJAi3dQYUcUR%2BRhDBJF6okn1WIdePAZW8P3bLVq%2B8HpuMhBgFuvhnh%2FwJctlDZ%2B%2Blj%2FcG59kxZP19nolzVaKrBsW7rUKv3ImrVniIUmn7M45a32lEQMu5FssiyBJl%2FR787jyA6i3ANzoVBvt8bq%2FevSdG1%2Fv%2BfMLGtu7ynHt48zC5ivzUBjqkAZ%2BfnmIKfnVXfTizDvEls8Jxmf09mrx4VpdjEqB7%2BceZEJppIy9qMEylwwLhx9Of9kTeS%2FRqL%2F5Fg0RfwjZJfJM%2B6Y5c9L7JjC10Hh8kSc4w0Y4hbdw50whcn%2BaIwkgiXcfCCtprJW04HSKqSFVxskf%2FvTFo%2FZMCOKwvVi4iBQSk0ecF4AW%2FdkO1l46UVtKUmba70Z%2F7KcoKB6Vd%2BSJtAFOVfIOd&X-Amz-Signature=0b545795586179db01273dee14835a8b17cf990261489c12358e4330b2b9f33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

