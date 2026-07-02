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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7IPNF3F%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDZHAiEkNJlDj0Izv9IgWsAW1Bi4zwAQ%2Fq9WdaSWtCPqgIgZPAgZtKTD52F%2BVDaJEwgnyY87pjw1kvnSXCj0qMSmQkqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAd1H8owuBsHl6PFCrcA515uMGcOf2feaw1qVRu7JWzF5%2BH%2BnEuAHOkKO%2F3lna7cMqvBnbWPLv4X6Ij6r54vrRTjJN%2BRaMK7s2M6oc5I8zOGhDb%2BwiZMyEo9X7rns1eDoTu5o72y1lshRezAmlzme4hvKD5K%2BT6ARdrATN2OX7wC9d6%2BW5duobs5Hw7itH6pol3unimtaQ4xmqJ3C5JONK6aQhTouB7A8c2ry2KHJJyaNCsgnFcSaLwYrid4oqjZ%2FhUyLVZj8o5JAQhXCOrTvc8j9cT2BJYKjHVQW7Ks%2BnGxwDTjGst4AznZYxvN5ONQB%2FS974b%2B0zBZfE5OqKIIM3k3d9JdmFZ2pI30V3e5m%2BsDJSpCsudiVJo0vYJtHtBkQA6tnQ1xPPYm6fb6qx1nrfqUvk5UByKIQEGHpmWUgvOgd4q8fdg1Lx%2Bemf2BKyRGhfyhZQ1GG%2Fm7OAnHbH6CAmXZXGIbfsJ7Bh%2F19UeaaWvEk2SNW1%2FfblRPh7vgMwAq1EuRcu78lfw6C%2BMgqJu%2FPiy%2BClTsZ79lpVvHN%2BWofC%2BsOPmIbJhIeG845K0hDv2U1iWTcrf9xqK63KEHVD%2BaiGBSbGnnCBEornZIXi6p1QCQ6qqYpVSnxIIkNDkuktDuNENKxC6RcZc5qdTML%2Bdl9IGOqUBSzPy9tZGambW23zdpn%2FmIzwWK2Y3hspiZ7VKuX5oFl0wvP2loWWJZdfoQm%2FJUxkxeq22Yed2nDpmW0cMPhuwYFpPFZuDN0bOMT9W9smIyiUZOK2CddzHMHutGUAExYcr7497%2Bu9aZFodllD7Un9oRyPuE25P%2BNPGO0nYy111CfacUs%2Fr4dioihwcIqMGE4VwONW9uIbzt8nb2ZyCE%2BGV7rH4RzYo&X-Amz-Signature=42108da5a83080ca0a33f578a3c2ba5a8859eae461631fded661b62dbbdf1e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

