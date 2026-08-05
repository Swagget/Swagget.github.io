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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OSI35G%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T072937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCICu04%2F8q94SK3dMwBvFV5LONNkKqqUfE%2BLde60xvctbcAiBJh9%2FULQCv4bI0wn28Xb8zoTb810AbiwWa4b625JjIjCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM%2B1fm6nlRKszMmh%2FXKtwDCi97cMSwD%2BrJIJD6KgShpWtToiEjOkzljxVxkMj7qQyswVSH30YHJc2VaNy%2FfAmotI1Tii6FYrL0l2CISf0f%2F5szWY4CgyL2A0Rck%2B40YNCbgw78CLxE1jBtyBX%2BBKmy3zSqAMBMOFpWnM4zz8rLn%2FX4%2FRcLDm7UD7nELUGn7mcdmE0XRQKnxE93e02dCOFl%2FJOVcv5ruabLOs2oNlXu5Spr9TGYc6XhA8gKWfWplVSN5r3CaFphG97ZXQxGyKLdYYmoXjbXWUN98wWiHAyHMbS9JDF1J5T1bmUrjq84WrhvgpCySe%2Bm4zQJmnbLcvBfRf8weE%2B91JVo9JSZN%2BMD5E%2Fmfpft4p9POec4DWpOcLD0LWCM1DBpIQ3peMWoLA5M%2FGxQNtvJShWi1%2BsHSVvtCYgZNaPecYP4Ln4LHX%2BdBixQCyOAfTqQqH0t2tpTDJJ1ZcSvLRJ4GDUJZCYiEdRqMaGaj%2FlRhakXEXXtopArNksYaHTLAQAriQMDdDsH3TiHvbva2e%2BqmpW3pHluZujtAEeoCpODUlqXa1%2FmttEfy%2F9sn60EFk%2F%2Bd1xMI0QkaG%2FdLqBTAnJHuTTuhfmBMNIdYsTaVVpFXD3BmDVwguu1B7RhWvNEFbnNf1G3MgIw6KnL0wY6pgGhXzpapKoWAuImE3Twq3OYEJmCm0mEE6yjIBE3GGqUYDsbMa0R%2BJghSsgIbwG3h%2B1VaymD7C8aHk%2FI5f6f%2FG7sa8UKvnQXqaN8SLXD4%2BjKI9gTRJWdMrMQlSD198wO5ON3YrR60gHEjuUHgT1sBaPxg6uCiXuzoPcLYmm0NnRWQXMb1hbOd9ee8aVkU8fmuZkldbZ%2BosLU7iIkHa2XbbzoIE1lKeTd&X-Amz-Signature=020831d6a64f82955830632a3ddb1beb6669a69d6cb1b54d689d9bb9956b398a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

