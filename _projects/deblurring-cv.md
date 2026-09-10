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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMDCPBQW%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T184459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeAuTLaumqVveQ9J4BCzBPGK4nnsfLbbh7puY3ZTylyAIgeO7mz619skeUw80p9WXVQBc4ZuVp7WCqAObKvN7CZdUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZu78gm8EyCGGCUmyrcAxcvcjUu18xz2jkS5pqf4e%2BQ32yGtWCTjTg99%2Fo1fpvDAxG21cV7VUKzHQUiYxyduAGs1fzBO82f2X4z8J52A5aYCnb6%2BeORv10ckZlXBUDvk2nIN6iL8hyJIOnMMe0AhG5tPiQ52jgPbZELq1phEBl2TugqPyGzBjLzNsIcBPQs3pqBb3TYlG33mlyGzyrUMV1SWGbd0PiZKj76KF8f4JmIR6qvnUu6MqBN6wv6%2BS9TkCo5RUYiaQAdW1%2FBczmiWESYUbc42%2BTxQhu8Pu2e%2FNneESjhPOa%2FELjJPYbnABSOC6B7JUngALNPRb%2F0CsGwQKHhtYOwTbYcxB4l39jvs7JGHOS13QWC0PayiMih2gVMIfdIwQGBo%2BcAj5l%2FjbJNT0UMlsjAEnASo%2Fd4XBO3bKeU9WlzlyPSMBWcWYrLqtAYVfqaaZaZK59b0Ig7b6hoV%2BKWFxDR8G8oddB2dj7xI8wGIFL49gQLcg3CY4Refy%2FVyr2eDpujnifp7MCX%2B%2FuxVPjnhKqCRori%2BQZxIN4OZqsLmSeOR2l7sUFjsKLDw%2BSjOOn5DG7lJR6oEKHUi26YXKZ48TnmmRsTa%2FJJsAmkarLZ3zeNSroFtYM5LPF1HMJOK9rJtb%2F1b9ND3praMNzaitUGOqUBTc08eB88QJFa%2BlNmy90vtYJXYYWbjjDPhGdpb3x65lg30X09JSFgzGiNUhvKr7yKffLVt%2B3VSrIVTAU7PR0GHQEaqSrvb1SxuOruSYxnTNh%2FY%2BOkfcrAWDRN9P0PTv24rnYf6nSQ4CRlcmHxGFK2fMZGT7XH3NNfGaN7Yy4JD6WR%2FlVlsAeOmqhmLufrYoaIYNpsjZemCgqLQ%2FrmNBK6lAqMB%2FhC&X-Amz-Signature=6afe9503c4901c6ea9685f2ee4f92f67ab86e6f4fccdf55e5c084a021b394105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

