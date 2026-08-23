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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICPOBKC%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCOsULHBzouM548RSHPthd0bR3M6hnOqSeHrnfFfEKqrwIgfT6cgWkJRv9O2r8LV7E35VbxWZbNCMZFv%2F8CBM3TFJwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FKEv2A44u8EQfhsSrcA4f8w3EAYF3Oki%2BoxfxLIh6702HYcviktBrhls6UPuP0WCJ98mgZanT7VnEaATUz3%2BLLl0w4zORUMxOCVUk0TEcDx2uULkmypVvIylHPCjKcis6uhCEkz1146jUwuwGBhgTRDC0Yzx5brqlBts%2F8O2NDLqI5pBIshYnmvdWu5K4cgcbnQbv65ibXmxM4vhk7ZV6EsG9h8Jw0aO9%2BS0EMOxM6ZlUT4iHiB4udgtXxwZrNw330NoU5DqNjbqQEj7zQtELyvlqUY1XO2iSoqA7uVkuRJv9IggbaBg2A22aR5QijzQ5bil%2Bk80mxO4ANlVWXFKl0u%2FbgtJ7m%2B5lYfzCWmVqtpw56Ll95W3cjAQixm2Wd3ctP8qxpvEBUVe%2F0vbqEI9fPEE1Z0rq9ysXW0d0iXMLns6Ka2XvGa2iL0AOdUSHirVaOVGv143RAJqgJSrHOKXWyHkJtSSSUWeK8u1TkvMrTHPhNDHucS6Y%2BEqBQJyEvSKm9Lq0KRFjZvA6W84ZFmsZeI1k8yxaykHP26xRBV%2BCKI80CEcF6mDtUsgMu%2B0TOuApuo%2Bno3EGcogMml8LwOMcNt2%2FEKjp%2FhtdpB2GMvc2MN%2BMVzvKolD6EB72L5oZUQZyeAaGilQ7RbckYMOm3qdQGOqUBSsR4rxcESWJZ91JL9IdU7t5i0IDsGuTHcZ7BUfn0e6ftq6YpuEuuzeBP85LuKVmCENHkUQopG75sHxfuChZyrHhh77fB7W%2FpSU8l4FecELcxo0sQsSFD7LWGAk6QfqY%2F%2FaIp3jiez7DgQsTYJxt%2F3RSo6TQ6zDupRLXajhffWuCbkxyANa1WQK3bcZvB6007Z5foL5M02JTed83nLtPEggZsYG25&X-Amz-Signature=d8b95593d8cbbaeaead198c0db10e4cf39fe3a824b573f9ff1c3ef6543293c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

