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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCR4PP4T%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T174339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCTwuW4rOBNS3CcxaB0zSqy15tz2OJx3poEC46NBq0kJwIgKyHie8j9zDIMSgoDZQEc%2BCfWJjfbN5GgyQgdxrRCXY0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmMgh2DpeoRC7oVjyrcA%2FoNSCMqj170p7L01qmjAHSM%2B1OZdbpMUBYZGA4PvsHmHnyZMWTPR4TMJr91yHhAHgcYJzoHYR4%2BzercNKoMx2lXtAkyT06Z7J0YiCffGNU08uAL2Nnzl16yDM5jCeMLqtmuAuNALUw5Zty9xdMgf2M13QL7MMC5uxpwQrUo3zJO7XC5LS32ClpZ2EgyCYZWZgC5RLMy4zDSeGUUQZElYC4o00fowha3TsKcx2d%2BDNe3sppAW5H88azDA9JDn%2FabWkyQETMtMNAvsU6LaUE7Bp%2B7wOpVmNUWsvzyxGRra3Q1XsdZCXiQ1tuTYaAWoiD%2FtDHRl1PKizHpL1lUbfVWHmhyS3WGI%2BmZaPAhUkIgFu7LaYDHmC3HuUT7APfXQLbmdkqwGQ48GlzRZQ%2BPN7GX9eJAvqkV6KpD8sxc6FmXZLRngGl%2Br1UZxwQR7VjqNMb0ji%2BW%2Bd1sf%2BfYyx5wjhA2vlj9u0u2qU%2F1d9gAutbC9WNeTUUNOjjga0gpyPOhfuha57d677X%2FRfBzQ9bE5hHZ4KdawqI9nx%2F5QwGmvSBJqNlq8SzNB9myjjelhvHNLl0goGX%2BA%2BEHBTl9c2ZJda69KoycWoLoDWZB4ZNPNhqOJyQkvfxnD5t24DC9YSSHML%2B%2BydIGOqUBkXJNBmkhs0YVaYB43mOYpZq6nONQuClDiohn16J3CVo%2BlU3fpndQx0o1NDl2pBKEFL90FNhrDUDa%2BjpCRElwiH9ufFLk9eVuAIxnLIKDih6a10ROQjPcgqygpZ493MDd7k26bjRCq59EiqIvsEYFk8dS5R2NBjaIxkP4oZgGAqe7NR%2FFeuDqywLPhuGdsSPyJs%2BJgxxrl0Vw%2FGBECDWpXeTT52qq&X-Amz-Signature=62cc7f6b37ae647406d81fb4bf41df6220ed4d03e674a77c2b61acd3e851c440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

