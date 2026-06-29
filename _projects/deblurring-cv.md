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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7ISF2KF%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTIxnte0Rc2Jy2Kvcrij5G1a%2F2J%2FJT1yqWKAdIJvgpOAiEAsEoWbi98XNgmgnBOsuLOCpkbo7aBZAmRLRWL%2FJ6bXLUqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMLVVyUqs7lwsNhmSrcA0L7z0dxbVhU4NN3r3zYOThuDGSqppfhad6rGw%2F3RzUE%2FCk6t78JqdgXxLK85vdUwovfZvifvoa6zTYlYI6GcvftjLPzHwbhvAIj32mKkM7QE69o%2BSNTtiurI0Bqn9azQn7Kr3IXBZCt1UKIC71pS2gLBPdh0T7sht12ZoNN%2BGqdeUnMd6xx8IU%2Fu1u9cEyIEY72rE1tVkH2cMKCmqlB%2FEmQBHq%2BL%2BgwrN5QUJAMepvqqze8sa2ybg2bn7t910L6fPzTDZ%2BxPqSEG5RXH7FuYGcgBs%2BtoOudoFHUwL2z%2F25aOQ7RWQGXwJ7TB8oxqAr%2FpQgxsKGy3VSGhN%2BfwEjEl2vTkh%2FeVdD9tdnEeAKNaTUwyiLbN0rH5GgLO03LGzJ8BikDmJmpyfZIOw5znspxaukt0zzETKvX8PD0UW1R7l34EM50%2BlxlFubD%2BCn5qNZQIImmiiCT2NxewpJ2IMdkHmgjkD0Tkm1Da23IUqDYggrkB2X68Mb7s%2BOv8EDZd%2FYNqIeuFSyhcnSXAn%2BKw2bnYQj%2Bxddx5du4dvVNMrqrqOdNjzEv8mAeSUzj6k%2FXEkvSGj7AnQMuYYbgTP4g07zWEUjF1yKjrREHTpjXy6xVVA4UPdllxtLyWQOy8yrvMMa%2Fi9IGOqUBEjWyAzrphk8qJUBTuBZh1uInTj0f8AJsWSaQ%2FI2pr7ayRYxFnVC%2FFCGwk2iv4vNAPfkLdf0M%2F%2F1cVf2g%2Ft6BOGeCUNZylueZC6dL7Wx0VyEy4wcleHE3S1UfUNguMNIZdVmL6Bev8%2FQ2Jc4CNOT1rSjjTk%2BaIoT02okJkI8vxBCL21snK1ewAQwTdo%2BI3ER1DA%2BBnDZ4C6jVTbr19YIiiENscENa&X-Amz-Signature=d96b17d9eb4e40c99360dabcda64a46a3694f1013f301826f5119d516efedf19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

