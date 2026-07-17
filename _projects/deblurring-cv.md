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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ2NMYRX%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T223600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEARqanjbU%2BA7UCh3fhXnuL82t1eObVQDZztAVenIH9hAiArdJDcjrmqu0P9MaAE187ypVd1eq2Nl5MZ%2Bc51rnfuGyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMhAlAMS5biVS9qinfKtwDnqkQIbR%2FDtz9xZVBvMtVEVBaytj%2F29aOjJqL7HtgerSsGepTDPf85Q2lf0ggr8PwULsfmhFMmiIUiMJqFGLCSRe%2B%2BtndmUlcvP0tSgjxv2sSVOABr5sXHcavzq5iFyXK%2FLgFkTcqRSR%2BKWaoPymQz62LR3T6EXiIKlqgrW0aYXaQ6isBUUrjncT30ZsIrIe8frQ%2B06UhIqtqs7VtK0iEoYL3CeylV2gs%2Fz8W7VJP2pdmCpOYc7p%2FV6ml3X0nychFQpN%2Fc56WepBEfidQYzqUHv72VNnNRN2KdDConNtMMcIPmPptSWzLsQl4xN%2BRlmhMw3BwSP4w0IKi%2Bm%2F7zj7KZvzD3N0txXc2PEFj2qkWPDGJ7gBUGimWcONgOHJSuSJ2r5epXj3C4DF64p6V7OlTheH4w%2FNAOE%2FgJa40JBo7a2dbVqJkbD7EMcLZKHGg4MbvP3C7YIE27W0ihQx4bxsTJkhuHqnV5%2BK2nbwrUGyeXRhNJ%2F0uZoZQ066C0nhzJRdQYZsja%2FXQAjUYHbDqDUoa6z2fBgU3XFQ09Oq9%2BasCnH3IqWcCgs5xwh%2F2pI7ui8XrrBhIDmjNRdWHnfe6Ne5G%2FTdQIptJiva1CVelFZUeQAt0FHY%2F%2BFMgRxz1NJEwrM7q0gY6pgEcXxqFUmGMLwqk3FDqLXKVG5XQ56M3THJptvBf7PHLgj%2FfooSYkCoNz52tG4EdhM6B2VZnIZXS1BW1NJ58rQFCQFw3W%2FLv7tTzUVCSo%2BUlYM3Ew5c6A1xrCPdQgWKlV87VyQAQE8dQeswWnyA4AGBKSOyanN7YXZ7jvmbCL3QUZQXeZyqNyPOouJ%2F2BWc5VkXDtx4zYyaHfykoA0gs2VuOJDjO4oIw&X-Amz-Signature=1ec808b31039331d8951ed3cc0cb567ad91279e444fd866ba7cae28352776cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

