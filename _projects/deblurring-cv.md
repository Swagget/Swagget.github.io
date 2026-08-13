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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFBIXOA%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T052514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC2OQoDh1%2BYXeJBdvghokxEfHSHePtCQUrO0AlDgkvXPAiEA10FHIy01HDm6BSPYOd2hg%2BRQlpdsOiI%2BhFXVjVCw9OwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPZnShjysjtx2lrECrcAyDTr2u67Z3ysOozqG0k6bSUOEPKJ6dngusUUOs9qh49A8Q%2Fcdiw1o2whAFe25yEO7vaSOEa%2F%2F57Yer97G0Ac3DjIRB%2FGSFSlmtunEeVwEzIAk5Tjedreg4S3EMctZi1Crz7HTa5r7Xtwyo5ZkPARqWZFqPWOkUepamCVwuI1%2BXcFqB7N3%2FOHE6%2BCKMDZv9cr3SmvCNnk5qn6HAwRP32mQEce4VEDXQqLaO6d%2F0yT7VsW5B72Yr98JSqAKDYmxl3LvZFsHuf3nfTLs3q1ffrJFYQTkuxITnmEXTFlqmJ3rx0v%2FnBjlAKT4zZkvkSC7n62PfD1NyMglvzec4GBiZ%2F3gB4Qo59XnG%2BsqSiFmDESRnMsrUp0HNV9231BtIQBaPmUXbt0QUXZsw8hVdEQwtod6o0NzT8qpi%2BIHHnlxxC73j6LjRGKMma4xRmrCSP36seFVk6mXo6nnNJauhosgQayGsB%2FYrAMNTMO08v4cgmtM%2FOoIJXWACHpDOeksCIcJsWQAw%2FiXVAXvA3CPU4r8mI0mpi2w3ST45ntJHICzukglKqe22Myeo3T3U8G4Y2axuHji5%2FqwQ5keien%2BxhoERYYDOWN6grrbVfEjs88e9aR8q92zi7LaNdyX2MX1gmMIrD9NMGOqUBpbD5CguDw8OuJBwq7QU%2B72DjGo0lrwipQCnlf9Zv3Gj7DjkqC2vSTCsOywRtl2tUy4N5zM8pnD4yQMJwctyeI9lxAz37aqauIbqB4IREPMhRYFCMU9K62xGng07LVVuLQKkLSEZ9i3AaEj9F4lBV4fEFTbDlzIHrV0hJ%2FHT7EDxksj1BS0C9MXmsVoy%2BBBpLkz6KHLggXcY8JAcSnc7f%2FmZncJeh&X-Amz-Signature=8e2fea7291b065a135bafe60652ed413ae89ea144bcc803f923e14d36d53ef3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

