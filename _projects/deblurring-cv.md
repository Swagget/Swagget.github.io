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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHZIK3V%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T094942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6JwSS9CiBxQ2RP627wPPUuff7gkFe9P30hDi9pEOR%2FgIhAI6L0yoZDRj78Wyw%2B8QLftjZ4P3zSheyULQ2z4B5hLfPKv8DCFoQABoMNjM3NDIzMTgzODA1Igxs1FpUHJ15CaDpVWMq3AOHDdG7v39ioMTL0Ldni%2FE2U%2FeQPJCXDCk3II3wKC5JgZW8bnE5v8WNBHVt1mtjhvENQQ9IRFGnSBz%2B1JkxEOBhv2VxxWqBZfCl%2FdwGD%2FsZgOGMw%2B1Oz8gqwGvu9Opd9BVY4B5OYRgiLwpmBMf1LRNmgd4rEuqGA0jK%2BEyk4A%2BbJobZSCWkgmFAyM9xDtptl%2FbI5l%2FG%2FgRCrYTOI5OiqFz3YLpX6psUsjRB50Tiq4Udz1T5hKWjEZTU446ryuBI0GEfq7NXpixDriLJbPEuOhV3f1kUfSr57fJ8c3%2Fj9uvt2sjW%2BEg6%2BFHwpaOkMEHNXw4CtRTgC0%2FqtmtLrFHQ%2F%2BOR%2BCbIekGKbNwfBVbcCPP0zHlrmOTWwrxuymDQEYI1h0a4xsRmvAyMKjAnv4plse1UmoRJq7Zj6a1juWww6%2BzpBm2wmB3LHLP4f83KnGRjl6cb%2BNyzmXhfyYsrKujDiL0fuU9i%2Fv7GQ5fl6If0egva6E95BKaIZ7uzkxtz8j5GsLdMrqsRF0eiPKAZJFowhDojdqufJ6d655jewZUbNpIInAh1eSx6RVQC0gIWZD8F0dg5xSvrbwyQ65dfNh7S2JLtzYSM0A9Wxx16p7oaGQoc8EtRvdWmDcGCnKxv5TDlgb%2FRBjqkAVo%2BVaVFjWb9dZPmM9%2F%2F9EwjeETS81VeqQWBjR24fOKOo0EBPS4J74BZz3%2FehsJp9erqGlVqCQzAKZgMy0M7xJF4qizA0Kg2hFKnX%2F3k93MZ5lIa9eSY5Yn3zIn6NI7vEVvwwaSO0KJtH9QLfr2yOgccUmPXET6bNonRMTyn4GR%2FhhFPDNxy8TUYjx8X74Kk5hKoed0%2BaykCH2dzqWjGgICrRpB1&X-Amz-Signature=42dbec53e3c73a24a01c209a2fed0ba700bf6c9d1273d4746aa932350bd4f5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

