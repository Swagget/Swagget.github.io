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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TX7FVU%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T070252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOvAR5UBDheZfn1%2B3dPB6QsTs5Je7LazqBpWl8nkddQIhAPKKScClAN9kqt7Et0JTnnxtALzYjQWzLuYdVh5vBjtAKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BnEVdkuZv0netNDgq3AN9BeHS3iOMTIenxeOiDiJkqWuzm5ft4AendIv67uq%2FV470dsXY1t3Fk9oSpoaZUyFnaJv7wW%2B%2FdepWFpLp66Q9fRs%2BFy35qXF9lf4xpTHWt20UerkuMw3bB%2BiofJnBr%2BY4kXIlgp2IdmCdjBaJlxVgBudRgy6JEMo5%2B6oK79YTWRK88RB8XUdosA1APBSAXqSVTM8h%2Bugmf1ZlBqPIoKjXjQ0a7shXZq%2BP9dh8a0bLeJwAExs%2F1tZt0AZ58%2F9bYOROSyiIC5%2FIS6%2F9S1O1%2F7w1kNENdYvq2OXHfOs%2Feb3ipGogvD3uf86jgTpr5ekUdp%2BjSOvKEG76oIya0bBqcpA%2FKx97aW%2BuSoY5WKWEvyzqkrULmW2%2Batmq%2BBlOobjl9xjv2oiztcEXLqkY2uCxUzgt4IUGH%2F0gX8FJawY5sT49rO7P46O2kuG7oCn0Mz8pzLJo2QmqLNbouNni6Y2OTHVKfk2PAj%2F4AawNxrjat7T5jUz9LZmqwT7ZoS9xLOzyVEC%2F2%2FkEmWwnW5o2ggt6%2Fo6WyBcMy42Aim3QyDRbFC0RQrnLxieFZ6HPvL7m%2FtY0BaB3yMtYvPEqFJZYsccA6Rrab%2B3BIPaujcnUSzeLNut03FFBgugPw44xK3nn9DD%2FkPDTBjqkAQ0yDeij3gn9XxpgNRmYV4NTGpGTjxykFTsbQHxQhBEGWY86XfBThmX2aT72ZorgH8fAWaVcxPIu57UkA8lmmdy%2FTgLGseZDOlMvuher6lzDKz7PkJwnVOvnBGu%2Fs9zhsq0%2FOw%2BoK59IwGsKgqETg27ISBBjmK6pLgCvRrEaU7gqkkKszeqPNRe02tCJdi3x7%2BNJYOf4vwZry%2BEWtZcmd7NvQ3cB&X-Amz-Signature=0c73011cba2379ea061f2a4ef09bbadf090ea1b0d47eb2e6a0efac308d5e6c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

