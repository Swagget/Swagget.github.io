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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGHR6QQ%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T234013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCSj6N6wvpVO44fdLtXcTzUXKSYaqxxO8RWeg3B99hXngIgfzHjBypgGSPJlaZUAOWyAQ3YVyG6jJabn1P1tAnP1I8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLLxH%2Bt%2Bw1ZeQpHpCrcA2I1Vixqw8TmtA3gDEVDM2PI%2F3pgj63jDZvIOuBPR9MOCoccULTiwMKb9FOWiOcA%2BdMvoVc1cwzMeatPBxH8y2Mp%2BT7qTN4A5QtoZOkmjgFb44cqRjMNM7N7Pp7x9nHdZGP9Nt4NSoH8LR65%2FnV7Sg01u0yD03X32JEAqXbeWtKhdU47sGtifqGW4z87Cwr7Ml0%2B0CphIOY5pFi3OgeLCSPsq2u2PRQvHWj21whdfQeuoBk1QibGVUBVznplKJOltuig71cuwlNhLUqhQj1TfyoV%2BDJAODmgkmraHjoXTnmro5jfoKNS8wyrviqxI3eFWAsCfwvK8gcsBy6F2omMYRoB%2BXW2nnXR3hznJlGzKztMzn6vXck8JfxKGWfvpPuibQmlCezh6jFu6CYrcw4uB1n%2F5daCU5KyQKUceJMkha4u0bieQ15cxQ4T0tDlwC6KTKhmvi7acV4Rgj7iZnBOt3FJqFMyCPvooSLbm1WJLl9hEJqylkQ0OEIxlbvpIC8RViajQCgeVJGF%2FvXcAFGqEXl1YDz0z8JnZ3%2BhRUbE46WRFrG2A5RzA1j4y0Zo%2F3B9NbZwplW7dyJ%2FU9doCL4TD0hK8FNC6SJGphKV4D8sUN5hVbRlnBOokNZmV2IJMOPaytIGOqUBvdBy%2FTdshf72xa4%2FFmAaPj%2FKZQuRPXm0R2dccGHcNfRLiPO%2FUbeSAuGRjMVC6X1qxolwmMsNbuMyHuKQYz9Dd5Vs1%2B%2BSFiqsXIL6RJsPdi1EV%2FFMP5GonmCFeZ1vs7W1ZFVgaR%2BssQQpYGU5zGTqc%2BFLJZEyEBBX%2Fuc154vNXD6oqMG9m5pZC7ajBARfo3uThkLoNWS2AOA20VHp1%2B90L4zU5XEY&X-Amz-Signature=88bfc4cc8317a526d6e36f8b71117edf8c4aeb69a2f0337e4ecadafe643faf09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

