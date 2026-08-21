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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRISKTMX%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T111449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBp8UdZWfR1MfcTOEl%2Fq1zt5owY6kwRddLfwbKLdjr%2BeAiA6cEO0%2FrK1F99tEAHqgLN6asQZfWI2pjqUvKx2NN29YCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh2Jjin9JN2cAL72WKtwDMaX5ywjW2rLSdBFULBDnn5Xll9pJbYCXCHxO8LHIV%2F0HyfQs%2FvRgfn8pVw0hMj9avylBPQ2NnB3oA1VIsku7C2xlO9GGT7uRf1RkQ0KAPDauXH%2Bl%2FMw%2F2x6yd%2FOCgbFHjHaklK8L1KesE8pykfe0Z41i28DifHck38%2FB1Z2k99xEx%2BDWZgd5N1Rqxm2ShoF39UZeS5ZEoiLlxf2Nwodsf1cWNyj%2BhMYIZDWJlq5CgdRtMmDNoDjfAmwtizAgN%2BkXLu%2BnYCF7dpZztf7ifFXcL71soHjrSuyyr%2FnQ1YxrMPppLozRO8WmdoXyLK9d3rrSrGpP8dvjPOf2RNbk%2F0A%2BVXqCCNG1b8rS5fZ79Yqv8o5xj11OWUMYqtfpEeJK1tuAmxCKzNuTPnId0KQKuBEZXHj9%2F6ZDvW%2BTYnUhY56at5SSqpZSIc%2Fw1Pf5vKC%2BbHXRYSt2Z3Rw0vPhkHrZN%2FiUyM4nrdafv9dqZmsE224TY9sKlHtgxRut4%2FRDgXFbJmiFAQnPHlVyWhAqFaXvInU5s%2Bh%2B0oYdFeQLLPR11shwIp6CM50pTYT0PylwKGcgjzoqGF7SHfjqRqqgtCBIMazD8zammlc7PBoqc6YuXwgEx0ApQhsFO%2BjX7WgXLKIwhtig1AY6pgGGE2mvDOFZx4NsvgqXsRYom22ILgV4TvvYzaNr0DyVb%2FqQpdJPol6tjNro8mCAyySOqNdqWYJOUTH4t4%2FkaNCkt57XIyisAAAmZJOz%2BeStwQL4sGHeb7IvNeUsKwQdR4P2DCK3%2FY5go%2BIMSzfThV5K6KwNzc4EOjMsY1WBfR0Zu9NkaKPJGe93ZgISGwpCkTz8Z4CVxMAL%2BrcpyEZ3a7v5F8i%2BPgpJ&X-Amz-Signature=7eb11f8ee0c9abdb850e148f0d03fe45d71a051630d56197f1f6ce66998fd846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

