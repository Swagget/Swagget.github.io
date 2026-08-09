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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSI7WN7W%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T211909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPJTJbr4l4DKoh7kAm93hFJ1C0kD5W4MnVxkIYX6PxSAIgbz92njlvs0tQNCYJGDu3Te5l1QWmz6cZ1i1S1dfsZAAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN47pbpmDOjzjEw57yrcA3kACP26O5nlj8tWPHeMYmVrFUUr%2BAjhHy4%2FR%2B1sAoWo0OgfsD7rIvkjI9MKCzcdteSiJQZuPCVTk1IVh8qIBqom4Tnb9y4iZOMo8G6HHVavwi4x0QR7OtRMk2d%2Bo0AAs3YcU%2BehFgL0rbJSGhnc%2BTVrXcwIJawiu24CxOlFDMXksg7SS1iHKGb6s7eFex9oRsrjgLbKE2wJ%2BCgFGk4BOKPBQWjgmvTsgXXrB%2FHulTur1eN347%2Ba%2BY57dlC%2BP36TQsQd1pjwi2j2q%2B4131KwAi1wTOh1zIgavKTFaeXpmpM1ClBqlbhvJq8S2YeQZfXDLyLH7gQnaaoAUF2mPgn8rabDsEF95gnunco5J7%2BJTboKykPv5Gf8JUdDs1LXShM6W3Ey9bk9Dm92ZZcrJ%2FVVcWhjq4xIPXQ4K4RLNziDpgCVBsO1jiK8tRZV4kx8bUh6OHbPtpFNwsIr%2BbPs8QcpRaYDCqQAMCPGda32ontLBsmeQeKvR8h7LdC7NyyS%2BoAPvEP%2BZMfl%2F%2BwECw%2FgA%2BDzW5dYYiXm4cTTX%2BHDKjzVo%2FbPMweXdjl9OmYQC7A8Bx7GAXzrp29GhJHLqEr4YUndiFJuBdwpIk20ddXjfuc2UbLjGOWoPCoWsx9jjMaCMIHJ49MGOqUBecbZswVBnBkIPUlKZUUu6ilFuxPSb9WCihPBAHn6TyRUiHOGIuggT%2B2uRAQ1AzdVaVCzPvo%2FA%2FYpWtGQF0JR26bWDsjQyeyogBncd%2BmG6ffHxG1m15F9uOLdgYbW8x2yOzBeF8cuR86pGU48wMgf8BVhw9qOoEfzRMZflQMCzQSf8Gk3nv0IAGwoPuH1wyCGn59A3AYgZnmPlmxkMXB4uy4T4dtN&X-Amz-Signature=8ccb79919cc7c7f1189a20cabe9e1a4293ebe95b9a8d31b47dd4a352e6c4ad12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

