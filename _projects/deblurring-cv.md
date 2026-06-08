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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEL6VY7P%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T164149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMMu%2BhXlS6ciyXTE2YoWVvRfxyZVYhcd8OhuN%2BmOQ33wIhAK36tMFPVNbqfs7dRGn5fwT2z%2BNGMYFGnB1Bq4fjBLFnKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwimDn4bUvbtatNeEMq3AM4PqHyw4bHDEZsERRrZtpzoQmbGANAvnwuUBVGH7EkUjCv03mDJMfWceHj0Lms5E8j96YZ3zyevZXqtyhzuhDejqyFzzJ4rrYCmExycoBv0FbjWuz%2BaD7k6BgpuPCVyb%2B3DExxqeCs%2FKRb4glW1TYsz9UstZF1%2Bew%2FpK6vvnT3%2FSOPk%2BfNHGNiDkWkAPuzFvG1FTlrDbIYdKPucL8O4dTlNCF0fyQN66S6Y0E0XHqeIomM7qyfu4HCjTtOx2%2FOZdyAF7NZz1PWJj%2FdKSGs40pTdhyLAhYV3HP4tyswpPrh4pvqcthUV4RN9fnpcyEPOSTf3wDVkM78DvfHWxbSc%2BYeeUixPT8E%2BtTA2RoWY86OolnAYBEpfxZr1jqL1ZQ4NJxzILZSB7hYqDkIIFWjS%2BMeA20MovA8MuAARuwIwFkfz36nWE7VY5Z3UcZw371SDHDyXPBhctb705WPuIQb6Erx2k6tYZ1KqDHEkCSZF8EIYom04e5iyrzdITKE7FkvDF6xEd4rjr0nbIWPzEZXr86aM4qg01c2YVp5k5SGhwPVWM4eOfkMX53s4Yx2J7RSc4jVTrZzbb0YRktKOu9wZz2P2106ngLTQ5MsU5EHCBFRcRglrPzE4nZXW%2B71YzCY2pvRBjqkAU6D0d%2FVNyqP5%2FyeYeGI6dWuNf7%2BJCeXHCzjyroQ0%2FVKxwhON6Q1UTrtz0mGVdxgnHGZt7xL7IASmmJ87lm3uUiiAYQqYnMlwS2axAGLFK9%2BuP0qdgBi5fsQgWqQYODfUE24NM3Iidja8ZSyLjWaPgiNFpQZV3%2BQOZukats0QeW78vvidwlYB%2FQ%2F8mWcx2bZzwAx6b4iyb2Cp830ziCc2FVQZSXQ&X-Amz-Signature=1e13e82551680fdd02c2fb974b1ef08f80af93a4cf0f14b29fe089bd83ea52ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

