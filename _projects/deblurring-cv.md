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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MEVBM7T%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T051259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmq0QbWfM0zAPIvE0xW4Musf2IHPRrbaTWTv0zQTrJ4AiEAtjffZo5UOyJ%2FCBTcIfWS%2Bbc9FGxE7gMLOyyPe4DJHscqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhE4WGwZ9FDznqsNSrcAxCXrEMD4r9t7QzfX2Bp7Yngg4fO5IFiiavmMJdRKAQTnT94i5YWbNLkd2DmOrhxTD4tgoSbENEqvAkysB25x2YOOEnnahaP%2F3horuPWu8%2Frm6VaxmhXWYGrP64ta5quRV3f9l6hFSeIKiK%2Bb%2FIyy9gK6IYlv3P9XLKDQpNqKYg6XuaDCAPP61wMrRg7xpVlatKRGKTj2Hx2PqyQHEZMCHMwSZXRs0vZ400G4dGBxJKbiMXQdI5081F17PPydj3K%2F5qRGGueQW0D4DMrdErC2P2qfmh3QCNnMkN0I3K8VJhTd8uA%2FpI%2FLznugT0YIQJWbtnIjomdPqzf%2B4A9ONdZnyBp%2BpfGVks4i9%2FXcKSlU6dSpsB9MpSnnYnx7Wh8xHuEQp5VDDoLtzhCxvVeFUk9Hj9RjQouLGjNp5lt4tx30mouHDPMRxbWTvV%2BtlccE1OzUriRFp%2Fkg0d%2BojasVPpkDuCpKJ0rTYZlJy3xoW2XogZl%2BcJwce%2FTD4PqXA18gioAht8eYYlZSLtPgF2nOkZG%2FOcjGQWUNw2hiwsxFerDDH9B5FniLffX12qdG%2FM69uQCO9wJzhkBwz8gfr0uLwRreZ0Mm5vwrXfooMPsFFlGWCf%2Fsbs2RHietfP5J5ZUMOCW5dMGOqUBy3WzuyD0dQJczM8TsdPPvtDJ0fF%2FgEgrHhLodn9IpEMzKuqsAwSMS1hDIK5dyl9fFeP6WSoB4PRQUmSnU8t41eVSONaX7FDGbBvD1132JbTV8unoNb%2F3ZU1llsjEihWDmMDcm1LlzeFyScR5inmgIYTaTYNdplEen6IttELMRsatDRU3uQcgIFvRpEEOy8Z62mHzjoe0I7XCnUUWfG4WqYfrz3HP&X-Amz-Signature=39c0958a438f252e72f65a3b0b855f03621e02c761fd06be30eea94ff495cb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

