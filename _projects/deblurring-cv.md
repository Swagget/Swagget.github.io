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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646WJVRMJ%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T212723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCGVdthnKlbx2kjKSwWMqdFjYAN5x4%2FmmOefVb%2Bz4jdNwIgBrFBVST4jsfolMx2AfK%2F4DO1ly8s44TVfQ6sunjLWFoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFr0zLLzH0MNAZtQayrcAy1rlnhI8azuYxfY3zihE3qoLwjSsbmyEYaWjobgiWYQK7F%2FyUz8G7oZ6LTsW3F01r6gT3alNnPUj6nNPquppkmz4B4BKkFwyXp%2BJFTDUuPUd9iWUVe0nPyBOSutw2Bz7mlZVvxLVyRlL2PvCzXJacyOqptKteQLvsgNcUFIWqwiuXMUnE3ZlRc0uLmx5wYy%2FpD6vTWFU3HJfKJHNhCRglyPbGvnJmC87xtzyewH72104NVW%2Bm6bt0VhJdL2sZ%2FwSm5C5SxAV1Uu%2BXms4hNA85Aa7jnZpEHZZWRvEMeL6K2xBXiqfZRzBami9ILhn1NAWZxBwJmojPRWZUsoLxd2pgvnCXSuF5xPXgvS16P3BNEDduEMJYoZsMwP5YQZXEYwLWtwJpKeyYriEirb7u%2Bl2Hy9bj1MEDRb4UKmvA95bnh9rAC8VJKGy%2FPsRET2nsaNe4Pa%2BXiL87XWPtxs7qxiQ5hXMyp4mhFtbIcGcFIhdkUeeDq8HrovZ2ha%2F%2FTZmz0BWCrkRyf3o5EBId5egR1TjZ%2BYLdpvKlMYWjXQMCfBvJAdEuQp2gDNYG3SQ9y0gBPGqWk45cxfIjxDKFo7CVxUkvtxWBw6yRbtHyhc44nclGzLfwzfPvKVS276qf7hMNqHotEGOqUBNE0KF4vsk9mzAfA21ba0iYyyPhvw1zLJFjnGRPNDh5EwMWMfJT44KRTjzhN2SINvuEIh%2F2FpMLIabv%2FdFWifTwMzOrBlF%2Fk0L%2FKcUT%2Bkx7T0T5KbHczhP3pYCIJul7dt9xgbv6cOqAnjIWjxEy70thIis7M7cpHwntj%2FimIGc0TjQ9ak8WN2qHH%2FClPoK3Ty6ZsZ0FOwPJp9ZOIGAKcwSjRN%2Ba1x&X-Amz-Signature=35bf5ea4b0e6e6fa6ae6632e007efdebac015f0adf77943fb8403fc36397ef60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

