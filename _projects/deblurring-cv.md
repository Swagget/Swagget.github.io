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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4E5VROJ%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T222324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIH9jFf%2BXnX6oT1iTB0YALJWZqg%2BaEx6vzlhpW4J6RiqQAiBWdF6dKrWP0dydEmIkonKk8hRZmHTIRvEEKH1BNXH7JCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMFqeHTXYafw%2FfWVhDKtwDQWPa9e8b62PMdsNiRz%2FijxNIei%2ByRgh9KWL1C4EiC7%2FkRD2yr5ZxEz7%2B%2F4vC1RAVHHq9UXOv9ISf8PXBzqf6zeZbnxCDoqDIOae2HflU8wN79eyxXxQK3aGhMA4JcYFacib795%2FiS6vXqXd3UtB9QfLOLSBsS09cn2Jp5WyzgvDtckPmbFlQDfCU5Ap2DOnNwJm0HFtmaAPrwZnZp6plBHNjGjYWgkTFLNWs5tSJ4Ck8EwRjpBqBcpG3I%2FoRI8gHOH1L4ZrgK16i1FFgKxKLGEd4pfrpBe66mAATcB91SFMV0EGpgn17JVgfEVLwQX9cyel2QowzqQapiyhQzYKI1%2BZesnUq7FPJUdMU%2FwyvnpqG5thj2wQvRLN9i%2Bfdo0iNsIeSDlYCQ8%2F02ZtN3KEveaIK5lgZsymZ9hsDnhzGRzZLwjNhw7uYQP4noNp%2FCjREF%2BQxd1xdFXw1h5JoaJTHcv1cxzBjWFtLNdZPXR4nQBNqd2FBoiq3FKk0Y04yTdbTRyE7%2FfsTSGGUQlafa169hLFaS4GjUPKs1ikXi%2BBS%2F%2BKikZ3akxFll%2FAPmy6QBGNkyzZLxK0armMBCA8rBQxvtMByzQ5YYrgc1BuJT5%2Bn8Nlea5UptqvMhTlnmJowjPqx0QY6pgGyU0eSQTrWnJXB6beJdDw%2FzHuksQYqKXzl7UdJIM6wrw8h6%2F9a6kfVY37zlAo4B39W8QYBFukc4iH9w4XzwvRiJjpFbcB0bpmXdwRKT%2BcfzyC8R5hnsDOTjbe8EmcmblT2VVPX02SWtpJnv%2B5v6SLLxEhk2e3vyOiSKvhx6xyvqSeUH8%2Fwtl9NhlVpyvpRKJoeewJr48CA2ENnSNIQnLluPf%2FJN4Ge&X-Amz-Signature=5a8c828877295ad4c28595cf35d1810a02efdc6dd528f971269418bccfc71492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

