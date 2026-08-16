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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTP44D4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T061817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGEqoqACBE%2BWPxsg8yhwpxXSpNQaU5JklkvX2exYzZVHAiEA4kE%2FxqgFqwK2MjI7ESle70bhpTxPpZeiTpT2%2BIhhDbsq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCoT2BALyukx0GGlIircA5eLrlthPGy6eSDsEG%2BKxzsqArFgZUvAnSEGE%2FGCzcI2jvO2Uav5OeBIYz0LJKBG8pAM3FQOEL6M1C231V1XLrhTwlBZkCVJrT7MD6ZYbqDdrFV7uOUbn%2FOESNz1IWEIRITX7xCCeWdSTDy%2F4QHxUHsl2w9GuobMllDqQsPdPmaOJfczjtWeRIh8r0fhBaRsNpgW19XxnryMhnXKncjiQqpELYDXVMT7GNhuq2zjLK9ecxHLM9j84X1ogm0S1f42qFH9KpbQXbv9Hm%2B4r%2Bs2Ybdu7%2BvyMPRo2A0LzdRBvXdc2%2BX1EYEo5PJbxmG7OGyK7SAoks9zMqcqSRqqkA4hROv8686bELgzs4jDfcFO1BRJ3MDCIUkelfBtO7TNfI3%2Bhn%2FMmZPRBv4rYD95dcCa9UWQWORSMbUOjihQeujvnbj0Ung6bjRwiglHuxT9iHFj1VOFcU40IvnOLc4paV2PRl0Ir9jpj4zPyQnNzoXDpGKsdn9qntYMWmmRJBSuQMQb1Mji54uV4edydSm8lR7tVRtkI87UNxtLc4GRKNTpc5Xk60PpDehDbqeK54TFhkJtwoiyWNEyB6HqtbMGw%2BcAa1P5%2BmJhejjJCwP3mSPySN3QOu1%2BMcgN0ldaeblQMIGChdQGOqUBnt2RFnKrott7zU8VIJ8%2BpAOUFuBh%2BrkIurDmWjjh7%2BD4yzFSTeOLqm5ADga37O%2BzsFZY1%2FIQiiOd4SD50ENC1zeAne45NrKj060GGp26kYkuROkCKVgK6dWEgO78zLNWtugSHEWDZXZYZjXeWr988nprzbDlwcNpd%2FNLCHvMPSvJaOze0m%2BKN6MmfRpVAHV03UJhN%2FUy%2FZZo39%2BdWTDGZCl5nqK%2F&X-Amz-Signature=6f938694e6fad2e52294fe4c9dc51a64278d3d93a3d807a2400f77156da6cd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

