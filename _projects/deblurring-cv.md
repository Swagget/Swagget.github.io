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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLOCNAH%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T003700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCckQ3b09DJRXq8CYH%2F%2Fwxas%2FndqplfNZt3QzSN8uB34QIhAIz5VuaS%2FRtXVYVJVxLTysEQ8n1ujtL3yrCA6%2BJ393oOKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYAicElPWm%2BMoUgOoq3AO%2BYTsGNN%2FkMMIp4teVnFRsfjjmsuKtESscrfYnJ9zZfU%2FgWmJED%2FT%2BnwYHRAqjFpqlW95%2BGvbkXkKMpEK47iW8WOrqE7RL%2BEOs06lu%2FaZ7v7%2F%2FAnMVPnpFgbIWnjHUWEYLMa4epZeePFg92vN%2FwiqWImkPQY5SORj49vPCTboWonKGzk5PO0GzfF7tVKdGxGSLoFnmQENgleGCx8tSKDdOyuqd7dIbL5Hfh%2F%2Bf6cjTBYx%2B2CULc%2Fl9mOHn1hQaKD062ImINs3MOVx0w9cnIpVmqOJsSi4CU2uuU4e250ZBj14IwDG0FnSpR%2Firx053k67JMW%2B2ZBWXxJDZOw4gt1vfQAJW04kGhxpQb7CIU0RBYoveWj7eN%2BZ8gTWW0Rpuo7WYh9RrNXr7BnxTqs9VXlH6roK5D9lLjQQ5Lav%2BkJEMAA3S0AMhvbGjHqstjCOG04qPZqneRBY4LKb2Ek9Zr%2FCOdtTOcK1fCVeo9lPIDE4Pbt7fmG1Wy7zwQVvNZRWlFzDKsw5KELo7IDG6S8XoaD67%2BIe6%2Bq2CWccG%2FtJoF1m2%2BXdmUpt%2FxMbBJ4%2F70nk7zIzsNvKl5mN3%2F74yvzFBz%2BNDD9ZfpNjbj4xMKR%2FQQ5P1VBEPslsphcYeLsRihDCz2N3UBjqkAWI%2FFNtP9fuLBj3PU%2FkNQvWVZ6xKJkOrkr1r%2BjKUmsR752K6PkrsRy7MBKkx%2BiOsbY5%2FGrotiZPB2LcOjZxf%2FHwpCsl9TPVf0swXHugoXLBZMTM33jp4ku1VGwvD1o2d%2BSrRcs1zLm9hcOY94BF07bh2SePsv0CowF6pCbLWrYUfHFtT0XcCkUTHLrhOl2g%2BiRP09TMLb8LXFM68bRovj708Ce3%2B&X-Amz-Signature=d0299f44894d82c21655fb57e142cfc4d516a0084ad3073fe63f3d96330441db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

