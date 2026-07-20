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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5R6BIC4%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T052543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BJhbCctX40AkftQFRGwTD%2B2OkZ8Q7yr%2FCQwEmb%2FH0gIhAIk8SHYTtyxTTWURRHLxdE9wtPlkclAUMapQAHDnDvolKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztvRKzp0Is8M%2FX64sq3AOXX%2Fr%2BkhqcabKv3AxbeZq29jXRE67E7WA0i07wZHgC6E9hovCQDT%2Fbnz7niVSlFmYOrL9itDcX10M646TFyfgXjHY4xRTY5FmFVu5OEVkbpmEXp97QHUOzsBHRZljEZ1o3KkrfMEW8SMoxO%2FeDDUM3oLHXfjkpE%2Bnicv9Z%2BCMyHYyghm2yJFqDBvEKHYuERK046OgmNr0z9uGKw7slQBB%2F3ei2vf90lnH9s1kNteCCJ%2BBjCzeDJ4ei%2BT6a6RI0cSUW6kW%2FLhQqeGIhi9K3Tm4wuw%2FRbFsMLbQTkf%2B0SZx6avhTapRVtD0aa1vfB0afu6JUfOLN1JZZcLdI%2Biqiu8s3EdJPSdswv9ZvKFKu6l5NEYf%2FrTZ3H6dQ1DDEJf4KdqRt%2BouuR6ab5zKEdHDYAJq1XqN%2BrVw1pQzO9y95I9Cvp1xL8sVH%2BEpdDwHXRk8n9PM2W%2BWXGPnpyr7vH88ajaJmoQ0WWrZZJYEyjTSxbrAUpZQ00ueZ9pWBztJbBpsh7iQwoe%2FyNd1Gs1t6JWx%2BeTyM11YCzJRcPNvvcuwhzRZFv1LjEhn2htB7yz%2Fk63CFmvwJof%2FuHHllAvM%2FxR32DsmeL6MSwZQqGSNiZUJqnu%2F%2FquKIcCG0zqmeRSoE8jCjsvbSBjqkAdaMK2Y9WYN%2FeVRdDda4LtB5szuNSqybJWFH5noaZZtBI4FdCsQhbti4UB2O73hSZiHWG6mRx7zMdFS2FfSGf3g8xvAv1Y30or5Um%2F3n8CYFkO62b3kz2rugWYOQjA%2F%2F8h5OLgz%2Fe8Ll8Dq2vdSxamK3xYBVnfxR2TvDviPROvL07Dci5Pd%2BnaS5YcaaCL4iSX0eXxbPA8RxI5BIH4TLHeuMObfU&X-Amz-Signature=b7a1f313ad8d755286350120a35131628e3bf00a6a669c2a0d241666c806748c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

