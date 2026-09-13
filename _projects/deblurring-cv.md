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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3NIDWMQ%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T065219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqhQlYw5xA5jx1AByYOHCdGzndRl7yFW9KSII3itGb9AiAdlFKHwWTb%2BcnhZc4bmN%2Bdk7Jys2h%2BoGM2vkWNW14aEiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPWH0xuNhdufHhNNpKtwDbrAVJxNmLoLUNCAT7gaFVkOR7%2Fusx76U1fbdPR6d18vlseqiGM1o9rp00RQAWyg1%2F5k6W2k%2Fl5xjS%2BpAfUCN766o7j5Qf9pttUQVI%2BqBP%2BkW%2FtdSfcahNtH0ULhwOMMRkikV6%2FbfbBjCoBmkKgwr8GYlan%2Bm9PCtNOI8H3hVKjfj%2BZr%2FdwJsfZS5PWO30HwiSbXVxlzfCxnS7O9obEvqGJcyVJpk1hNFz1geyAIAci54pWF8%2BZCT9mRSwXl6OemLDLIxaiOn3ubnVzfwcI0jMIz03S3COWS8wZ5otMXWuhqAhZOc8LqI1%2BiOgRoOHOxiy%2F0cofYUS23sALaIKr0zphIgRPeAFbsnG3SYGXSpInCEQIQksLFy3GTYcBFYaTNp3unC12e%2B2zfGJqfZyW2%2BvU5HGh5YHHQDcIzoRh7EIy6iV5IyHggokNLP8YdIAgMiRbQDHxtYS8cNourPmPO83GJTOviegNtMXEcAP3R5lIj3ZiPU%2BpDgL6Qkpyc78%2BY62fVRQpAU68dHgo7NaMV%2Brl5d%2Fx7CvgqKow1Kq5sybsoyEyNu5Wo9bpxpHdfW8fyx5zgrBp6drVM6D7WfbwiLfyEBDhnwKt3zh7Ula3BEt13oDHOltVQPXViW3X0wm9CY1QY6pgGOMqPjg1X8AcI6hVkhNXIJGnPXTXurlFtXoVRVw%2FAv5etBQmQMxuwPxdVRzbcKCpH98aEi%2FYgKdm6SA4WX4Qo%2B1VmVMG6tvbNwvXTAcGSkro8qKggkwo3%2BWs6s0jWLMNrLYHYtVJJ%2BYaZDqc4jEw7N5QtkT4wG4e%2BMPMiY%2Bp%2Fn0qklzK5RQW8xouH4hrC96%2F9da23OlASP%2Bs2ke4YyW9BwHYHae0ck&X-Amz-Signature=45c8ecd5eae910a6609850e1ff381a0ee6697faa2f2f66fc01ef645d64153739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

