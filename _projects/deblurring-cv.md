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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW5OSXXW%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T141956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa2qmqQmYFC7LOa4k0oPqxnpU4jTFrM%2FRmv9sdI5OdKQIga7oIWqh7Nx7yIbg6mV9PKaDcxpiTBi2pLHleHG1PmP8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDMoe%2BqRaZpBRWlj2mCrcA3IO%2FwXaN%2BXiDwBH8KyD7YFwwhVHLFrkJkTPUghi5sE0tIoGoX4gyqwoV6l7%2FbPvXGxQXgvglFucvxmfUUvYsFj97PDfWHs%2F%2Bt8yJZNkt2ysKPYmvdxubqapOZz1d5osts8bU58T005R3P9bO9h5cgww1HoCEQm%2FH7S7RSnAhfi%2B9j7VMkhsKrd2voeeJ8MiqulKUGkM07polq0AuwkhyG%2B7I8zX5H%2FqgVN3ZV0aTUa1611R3YbQJAQqyaKGLVA0d1EzXKsKNvarkQADggInAt%2BPfJsR5sZxndCWiGP8pAQVXxJUwOwP7Kxp%2FCbe8TECdT%2FmOrTUv8FFh5Cbxxn6gz8KdTigHVfay1I9TlUqR0TrX8zlfbM3P3Kt0AJxxgove6yJkf%2FbyskovIDccftHnyfpb6E9RqsGxrKaVTaJt42Wxnv4VHDHcaOrthuavFwhz9umWBvxr9I1u3fI%2FiegCS%2FL3zIrCpBYq0NYo5W6fHZfHmuvDdSMmox4wGGnDMOhua4vgf1xTl3RYKq3ACluBEyYP0dMha4YT4%2FziKjhRFrb57x2E6RMHSsPoO5cWt5ZwMCVif%2BSDMv12ktjKMweuK17HAn7xtaGmBPPScjfZtFbgiI%2FuX%2BGVf7h%2BZMDMJK4kdQGOqUBwZH0%2FswWJZzy9wbBbK%2Bu%2Fmqwq%2BXlyTvfVbwmetsXxBdfmoO1TWKrti7x22%2B3hodsJZu8GsM5qZBXEBSimW6Hd08W%2Bi5%2BmOoGD%2BJUMYRLqsh6LZ0vSTg3NYEp%2BS5mvcUxOxkV1XuGKduJrL73AKes998sOS3tBu6c2uAOeZ%2F1BuI9NoE%2BEuJGpH1DbfZ3feoNIOKdsaPjYI3Wiuv1WumcWSRspTr8&X-Amz-Signature=5ff45d180c47bfebfff7f61f2cf50e15ba2432e99079cf1e0c0683ac31b91d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

