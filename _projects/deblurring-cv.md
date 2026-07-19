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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZMRWQQP%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T174622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0LX9bYqG9mQCyj1lJVpKqsfOLxs00Mf5Ncip2m4W2sAiEAqdMoaZFJ%2BsYMa%2Buo7yGfVhPEaAmVQksCm%2FS3ayTdMdwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXtiCM%2F5FQYCTvS4SrcA5c85W0MjCnfJrXk%2FUKEzcnSKpynaw0tCvgwH%2FvKgBdRSpKLidKVm1%2BmRxylz0alxr3%2FE6TTGp%2Fbv3FU9zHL8BvHaFYdgzztlNjID7lfdHmTFGwuTvdxKGUMkVTtNrIJrHO6%2BkAv2sg1TL3ryXU41Ef4fi6sOrROOU8HKWx3INfpABtcQhrGxmoRP3VF2L3m0uT6UoGw8ydTa9sYNzWgwno9z5YXzH5XYUHNEpKXV3IpmR4QDDSDmRSXKKVdf96KbOYVPDXVGB9%2FMWYig3Yb9SQqxuhGteCbS4SvzoFEWFH19XbjiSUgM9stssKwncODM7effr7k3keR%2Fs74W%2FnD7mry9dumTPVYjrLAAZi7KFkkwuuJlERaeIKtXDwfic94XnOXh8fe1BPTh5PXGycDmEV4ZBpLibmqH9nSA0IsmKAljTUU6DQASynPEZNe8QkDjibHm0QjOch76ZHbXeWqRZWtvm1FfF%2FzYZBNysO0Ym29d2CLAoI3BRBrMNqLQj1eROjV510qEMX9wNeM%2FB5vczXydgpUHZIqTr%2FD9NRPqqlvjIYHxfRIZy75emIBWWFEc%2FAjpVAPWAVMaUVmyd3r8ZVltV5MTDR9PQkrOllf58K%2B9sQBqhhaJYdVpCR8MPWG9NIGOqUBMJfak%2FRe4bftED%2Fh3Rf3Td4V8zWFwOMfCwvnPZHpzoFLd6FewtXVnn2jIcBI9Wv5n8lidFFqCX%2FenTjGw6g%2BLxxcOLNvuPr3LYjcZTvvVdji9b2J7mUrjTd6Y3zAMtIDHfvcVPO585cJpProEam6ZGfABnVHLePTEZ7adaUTVJEn9CIqDDwOdU14Y2aHBP%2B3F2SE9zoR6gSkcLe2qJcpUAw8PMCs&X-Amz-Signature=d8779b149252dee39e0d7e6ad315dbef75762db878e280c0579350fe1cc85eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

