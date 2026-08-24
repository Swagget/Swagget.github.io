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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR6JLPGS%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T221244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIEvdE%2BV7FzNstHuTlRQfEE9P6BDQNYbKOBrvPqC%2Fy4EIAiEArdQqTMTuFBkaGWp0OQwlEmxRCptamDc9IbZ%2Fz7SpxT4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8RQ9x7lwqDe2%2BKRCrcA43%2BG3Weq%2BPmGdjBqBoxxp%2B9ADcPK1qegAxmqSdFtSO9oFam4p7qOgvbjSCzT4jh3oCLrWZ%2F57Dngs1W3FyrsbhyKZvO3L2zMTY4I0GJoB6jltddYv2loEZO0CGVJXipQoXK%2B6Xh5Hoe229buc3iikhOrPCU9GRjZOIqk8bXRMFzRWPbMO2LaGjNykwyhJ9ZFB8bBPMnZhSsQ7rRT4af223aXHJqHtMefQU1%2BFW5JoVTuOvuah%2FzSBmBzjODHK4RF2Q%2Bj8g9u%2BsaRzbGM18QOnc613BNTdyBGweb4KbzFp4wYbls6741n44HUxAgiAqmRlqZ1ckxuBSAGPVSuPxCDf%2F%2B9OjczOByG6iO96R7R39LyXqsnPAIxyoEGqLRApnBjtSNY%2BRVO%2FcdvAZW5vXdrXGmXr6ZdSmerte%2F2SR8vxHSOdIEqKnX6yixYB2tz4THbQoG5mdZOzs8U3Fx7rw12t%2FYnFOcX414JRhEUiBn7LDqp8i43E9L2%2BjjxRCHT9WfIQvRxT9W4JkqOrdiueTCqcLUjti%2FERaNI862rUErQdAoF5RI9nazY3yNr%2BvopELGKoA1aS69Bui91tKOp8ByMPOlzdlRSQMqJsHUTDxzQzg6fuikoibG8UsjwTRZMOLDstQGOqUBwzOHqU66QkOIw0MNLspJHGf9gyuuVmujbK41eNGJIUij0mEyeXe6%2FuXoNtk2oXyYk8XvkWZmU2LQyaityi9zQ8w%2B1DIDibwKgk7%2FRQMMMDN%2BPQYcBv%2BBZ4NL2KweGPlogNrYjByzY5vKbCSuXiRnECD%2BGS%2ByHkdTT7uP%2BGPShP%2FSTNv2wDTfEDZs7zLmgGjDS8iKhQ22TJNz4MrK%2B5vakagJYDls&X-Amz-Signature=c3413a7092ee5a42a595ecea19f6a4788b69f0a9fe2d38830e063019006dd33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

