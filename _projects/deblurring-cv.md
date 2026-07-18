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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPOMUTP%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T114142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEt%2F2z6X1p%2F93Dbz9OZwX%2F%2BCi5Q0fO8u5b2IwExi7iI1AiAGl8ouQ3K2cvBCb94BBHYOxDoQom8eLADzwpMizt9xjyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMA256wDm4z8z00%2BQ8KtwDlL19ruihQzPIAOyQNpE%2F1gzfxumrE5MQ1GdDfJHRn1R618UD2ra6oiMthj71vTivJwWRn%2FuhnGhwYqpYNEIU0IcgYkf5TRWDQ5FT0WBq2pRJ6L7NK%2FeFEcoPKIc3RM4rbEN%2BFB8LsjXgps%2FcKY78w%2BWRcpZ9vy%2BjWprJGVnqJd89HIuK3ZZRbz%2BXQ0abocxJQi%2B%2FdswtDXP%2BlSyrmOPnVtFtqYSjsWKWBk7%2Fl7gPayUlZ1Y3LAyKFoujXP36WzLjAFg3lImpTscFKED%2BU6AJK0Bu0tfpjZPPpmGEAoRyTtX5Z%2FyydH6oUcoBV87BxvEqYSFQb%2F%2BEA1cabEU%2FGUw%2F8%2Bt1OH3UiAtnciSt%2BSxWvvLzNgKiGTJ1VubwyO0Ha%2BLjQFF%2FF%2FztEQEb%2Bf%2BOCVWHrAeH03jOsBoxdlYo5adGqmsY1xWK0ADxFLVKCiDDqSFbsUW35vJewjNfE1ig1bQnZhHRa56L7qwTCykFbiAS3RFFlBtCmwNH1zFqZ%2FTDGWP1aD8cA1wbNiF%2BVTJMZJmkmoaOeC5fGj%2B2UnhXSUVRZXU7TFugm5%2BiJLxPtef90r%2FPUeXdbZawHYjFkgpl5jMglOui0S3Z7%2Fz4WFaqvMP0MK3rxsLyzQyw3OLtoZ0wm6Dt0gY6pgEobtuZ5JqY%2BH0GQgjUGeioxGE5BqjfSJ9XahdzOm168PVmbVvDYF7kFC8SDlsbZ%2FJRZr0LN5aG97cpZU1viyhX%2BSBk02hZkDP1xFzRHy6vQVMUSIeIrbmRVgIIragj%2BjTM2q2pI3a8N4kOSvbuBJ1TTl3IhFH2CcXFZY8YJrFIYr%2BdODs%2FlQ%2FF3mUiWRkN9xuPOVZZ7KD8pgT2kHQpde40APtP0rhl&X-Amz-Signature=060edd291bfe5a4afedbbe5bf271c1a1b5719ee6ffc3e1f8bab665fe60c5802d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

