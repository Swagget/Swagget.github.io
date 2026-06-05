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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4BKGTSJ%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T192723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj%2Fe1kYowwYWo5FgRN3X3E3LD2bpQtK7DoV50cg%2FQFggIhAJWifCLYfhp%2B%2Fwv%2BBIM9tTz6DDIR14I15ZZ%2FX0uT6ZocKv8DCHQQABoMNjM3NDIzMTgzODA1IgxNsBxYjmYOSxCIkg0q3AMRUkU279hDSlParvkIIz0xUEWzdafmbi11kCoTOFbZpsi4u1gUjsyZo%2Fz6gKmBGkEXETxz2BjgtpDQnUZj2FQKEVG0tmZJcjGgP%2Bg92Pm0HffhoL2Y7D6PgoHTbscXi%2BREqbar83WzPR2sEP%2BAeDaea5I5lZv7msrzI4rDeYc%2FJvInnXqjpudM6nyNCHoOydypwDO1VBJtsD0%2FqUw5Xf0RHgi43PaQE8xyZuInDoDXgkomWKJuey2S%2BqYq9zzqDkkrvjkOetEa55B5Y%2FDzUSdiMQWJVYHE%2FiPuHbOR33YexK0KHkx4Fxolg4e5HtcVfOnwIfsFBStKGA6MN0zui55r%2FEpSttsIJpo8slkSGL8xttjW4hxlRF82MIOo0vg46oo7xNtj2SzQHAaaHfNTmsElx1%2BwkwJrbfnlUTb9BFs9mHIqwJqQsZJZtz1TjbZ7HlwGkHK9Nzpd6Kt6rO9CKcUNrMeCcH%2FT%2FKRg8A%2BjvHwUyBDvIi7I9F4Az%2FsC50eyVxEVMjv2gKS5QvOO5yP9GIXI0fopP1d2hlZEu8%2FHRAaoxEJ0ETr2Tk5UxwOFZr59USfpm2eMSR1wA3hTBY3T1kXQIJIIQyuTG65ek0KHf7eqLtXtyaPfAeziQOXPJjCnsozRBjqkAYDtxDXcDapT4L7pxyJYnSdWJmJv6W%2FOpFRl6eJJY2eU4ZJUExnrkwdw2xii3wHy%2BbwqXldXiFRNV%2F9FdIT3zRlLAkqdGNpzekH18bThyOK61oFWcvw7VeubByzeaOkPuVCJFEqW12T7GcRWs%2FMmDCKQ%2Fu4vBvgS82GXwf45oUdXbnmPap38BlxymwZvN8kr8r8k1IEJcynlmPr1xXOR6wi0S45t&X-Amz-Signature=9bd586d2ce7bce7aa60c31df2a462d4ae45ac921be2d5e09821d161ff7e8f8c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

