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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLK3H6VO%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T150255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFpEZ%2Fv%2FwK0vyo6yECUbkXA08vEngJMU2Dml93BjE6sXAiEAmM1q9VP7MLIK51KPp%2BHWjr1fuZM%2BGPiYsdHIHW38nbcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJ0%2BodYFgJlX0FFN1CrcA2xc23i64FSXZnIYQOe2qS%2FRqemW0zjSj2P%2FYkBvZ9RJSJVqkImS64JbCHH2aZK0lGoIpuzs2qWwsA7uK1LJaDhCjtgxEnQfNWpkZawMSg5F%2BQTGVnDwCPFLskGelLEIWe6dLXmZ410yR1M8WFVRIHu1Tu1CJ%2BcT4XvX%2F0z9xb9KEYXzm4pLg0%2BwKlirGZzic5bQXeT68kRHYKDyPdNSeCFNqr8PDx%2BIA%2FzuZljc2VUuu3yY%2BLpIMrfiIB2yt6vcQ9j8dBcV9PLXiLmoXm6IVWbVjQhu3sIufDodE8lKvJMZtz0oJ4AdFT6%2Fh8Yk%2Bo9FkvkDWpSNro2emdxn7hJQuBqYtj55P%2B0PsfZRaPRHrrbz951t6jj7S87%2FWSae%2FQUnA4NvoXCRNPxENFEJ9JVwmJZFNNgXuYO7CWLLXlE9XOPkRXsq6eaa4UtHX6vHRp7JtwBH32Q%2FRTpeF4EWLMP%2Fdf%2BTvJI3F6RLmInS%2BKAHhvqvjh%2Fnl2LgYWc%2FGd277Y%2FvZma4UQvmMYUGtdGURlRBHnmo0HYn%2B%2BFJ6aqj8j5dxgpiksuqZjw81vLy2a2aiZ4uhdz7gO%2FBFmner%2Be6Bcway2JO675pQTUVrXomSb1v7mQW37b9oQx7x3opJPEzMKjxutEGOqUBul7ukx7sqMYQuVV8Sjwo49%2Bm4sTiBGwI1ZI8xRnWokcUg0WcVeQg7Ykyh47BzUkGzLn2FyHnP1SDoJOV%2BNqiH42ImEn5zDolVYR9nxDi7nkxs%2Bjp%2Bx5kcpH4y6Dz%2BdYR7FOvEPlRCir7xV7oilKvZu2UerL2QwQ2ixmYWU28yfchHNZmje9f57xzYrr658e41gh9BhO2RyHOyDTaGBmoGPfUqjry&X-Amz-Signature=ff2f33eb212df41ef90083e5b0bb051916dc987f1e7a5f61e9092162c83a6863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

