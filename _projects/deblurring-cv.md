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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPLULWZ%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T085711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHwWrX2tXEA7y0siBwEURkRlmAGZNPQcdcezqFpmsr7RAiAGxQ6vbkycssQV1r0uyLnf%2FdvyiS87UM0rel6r%2Fn%2BUcCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1OnHO4UWP590ECD5KtwDODN7xnozFF%2B8%2BadOrOQQ8K%2FKCKOPHwH6Lhgosf6icrs03jNu87Spvzz9yo6R1%2FN8Zb6hGTYV%2Fya4LqVDLiYC7QplsOhy3rl74E2KUy8AAum3eVOdLZXN1j8zfRoUGtZbGk2eaq8wtaN8XMBFl%2B9cUMj9pxdkMyaiYKIcKDKYXYLV60Oz0HY6fc3kVB%2Fat41ALdS%2FL0SevQLX9toYrUCeiuQ%2FW8lKL75yNxQe65bcedU3m2IhDh6Bvp0gTwEZ4pO5H13yvbS6IIwrVsZp8pMK6D2sYbBrC3HX9FHHkQxJ%2BRVMZHs3DKqZDvvwkBKTZCN28SZd1pYiR6%2FnWs1sboo31%2Bbt3LYZcPlEdYaE%2B5PUzwsmMTMlbnL5mNASFW4gsXeoXTIrbz8Rse%2B9Yy0lAN05W9IDba60c05YBXZmMD5p7tts%2BR%2FDqYLRrX6bVIkkpeMb773r8w0YeSgylAk9j8bAVRfML3t9u6uNLEwexDN9FDOahsHLH7wQK5nAojV9ldIxM8M7YdeWKf7dtO7EPCXjMIPW6pKTkj4EBlbGTlaOWBvem3sJpxvNhtDBfLuKIAsGsqk1kJtewp9b4nNVnIJ%2BWw%2B53LI76TUAxgKBqST%2FtZvNIIQ4I0v9BkgpDNkwq9jw0wY6pgH09am%2BL1tovtUmLrcCN13sf%2FpIL%2Fl8jhueV%2Bcmfr%2FNP6iHOD%2BbWFVc7YP1ED6CJTxs4GiQfhcKJWw8qMTgaroIZWZmcWRwvBKvj6%2BRjUZ5ORLVEUVn%2BUtJum3svnSsWlA7Jea7dYTkJztoLP8DQa0kRugcg5BjqVgBgIANGQHtEiXdxfsnf2CJdRTZen03AIH0%2FccjS94%2B2g06S7WDVSQzmE6hF0f%2B&X-Amz-Signature=fbbe2e52045a4abdb03b55441bf02d8111c6fe651fdcc2c85d4e6e44b1c8b09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

