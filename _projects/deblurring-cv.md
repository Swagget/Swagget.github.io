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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN44XAYU%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T214452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHj5eu6LLXhEDbg306nfBJJG0xzgCD%2Ba5KQHkAeyNamWAiAfgC6wM1vN90WT2A6zub0QQq6Ke4E35ypc1bBqCzEFgyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ezQ0MPQo%2BXcDwn7KtwDACgbfq%2B%2Bv%2BB%2FHQXhpgIqUcwxaPHYfk7FaSS%2BplIFajacKZ5%2FwXbpHc9D5RIIZmDTsJaAgfSfupkwvURtDaMrkwZPp5d08MDBjtp%2FZuZNdT4k7waL1Qk2M3eZ6j1uqnwPxycE%2FfM4LKDk9%2FAuLql2Js%2BjXOQndHHvPidz3sFrHdAQJIFs3eUDv0%2By6aJ4eKKntqKAyp0GXmZRq9D2hXOIT%2BtDHmwBODl8fATmbP2JSbhS5OPSexYak8s2Jki1FsTGetVqhmA8hAfl7ETelh8A%2F3r1ixQWqocIyrckZhFkUbGvpH1KROMCW0rv8MRbQDYSCkAXUVBJga4oD3XUKcozbxHmjV%2BF5IxaJXMvUQ1pgNZKUuYcxgOUNYFsfLKD9K3%2Fq57KNRw0kMcq%2BaFiojLG8uEy2VQKTVZu5%2BPjRHvzfLRh5ttlOPeeF2iPKQNCdv7IUF8Mwx6nwJeyqHWWEP6g2%2Fxu0oR0WMAGR6LCtQWtQiJbn5%2BtQwZ%2BSjmsgQmyIfqrjAvsWlQOld6Bx8N9CTTrPjU6vYSCClPd8yI%2FJ2X%2FBk7WnHTRAZkZnHznAVxFmPoGzPWbnYuKkrdnm7ab8tkOQHSjtV%2BI5YayyPz7X344S4%2BLO7EuyYi%2FUMDZd98w2PmW1QY6pgHrmmjoTHVGNSd6ujoN%2FONistwqKyy4yjPVhoT0odppW00HN7U%2FlezwNHGDDW5vJvwqbK9lg1NRA1bUxP2a2hcpmnCwSr0azoZMWrH1tDVx7tVPoLmAO0vEoaTaaHdLWB217FK0Hb78Xu6Ox8RMJ5aNLVq7FI5ArlplHO%2FAhsrGF8Kpt3jvhLIgQ%2F%2FmCBikztGSfZ6OP%2BT%2FN4D%2F0DJDXnsBjj4Zt66o&X-Amz-Signature=840def0221ee15a14ba23776edfe2ac1b667be7b681b0f285c6ccf01e616330a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

