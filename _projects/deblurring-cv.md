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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWGN6BFT%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T215530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGn8jdcXa0Fwp3BOzT85T2J0FBjxiuaKAmLxgw4psEBBAiEAg%2BluuRmF3%2Bt5xClT9IPz9uRetMUGrhGf7X8pdpL%2BcPUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BNr%2FGsu9apiXolwyrcAx8GoexvK7Us3ouC4VQQd%2Bc2YcrKsFs08QCJAMMqUw5TGoIP286%2BGGefkjRlwwC21hLD85lM%2FQIewVwAfsSCn7fEFRqOYy33GHy0U89sJ7xavssYow7qrjncqwEiQOdk0O0lGO4eu70cVzWxWWLBUiAyHT8EAHbcs0nlWOAjuRSQ4FksOS%2BxN3GYkDkyA3rylO8NW%2FAQx1xvvuTbK11QPTuGR9sWxMti90uzAbFFsw1e5K7E1%2FaB%2BP%2FpG6yCxkApbGm20QbFRD5NhgflYeppNInBvi4qS3Q74O6jB14GNw%2BPw9quJNgbCUlCxljBRG5vgCEVwwAewZq05jpRU1%2FJZZklcgfeqYQnRvqpwMIlGRxsfbn8pT68Ds%2FPsovXLHPV%2FYKam5gTe7wjl9zRoYVzGd8%2FXlVFvKDtb7mimRG38pqZ%2FTdk7p4jh5Qi8DsaDryNZsYzM3v9%2BdZc%2B%2Ba6J7p6olshO7ytS3uYbnHnswddA%2F%2BiMOV3XKNcJzroPgCgfX8pu2PrTXxbRQNOgC26ElXqdenqtbmVQ5%2BBD%2FkTtSsxZJqs5fFxYD3OFaQukrJrymwWMDTtmeTrvzCJfpzkEO7IJSfYlTrYvxVHkBUZnDch7nAs2WyKzEZVXmC0z%2Fn4MIOMxNMGOqUB9UrJgEuMzYd876HL9vsITF3PiFapKcOw6HgH%2F7ey2B6nj7jiCW%2BB%2FObA87NppZ1GAFTxnRt726ghsImVkwsr5iF4ZDhZJ064%2FbYp6NZzc1luJcfMTO1tPxB7VKLrAoDBBioWmaZcFxO7xfGLPoq7TT%2BucnonLACoA3nrswjiEyufkbVUaM2YC%2BcIiNrhAIM8UYmtu8l4NmvD228AzwSjae5a0MAs&X-Amz-Signature=ac2e06560314b9927b5125a5becbbd6212109c93b9ccabcfffdf94627ee6ef14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

