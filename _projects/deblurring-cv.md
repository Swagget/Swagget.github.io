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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM2B4OWZ%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T081733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGT0ikQH7tOBL%2Fja3r%2BRUtx4SI2MBnThgkaJQXmILZDrAiAoqA881qXIVCf1MdI3%2BqVFi9j%2BGqf9%2FaZnk9LMBvKs1ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMqNUB7qjh4hdot0ksKtwDz0CuYKk4uKXZRnflCvp%2FigEg%2BNftV2pbIiJe8121YPgukHw9n5E4TfVGxyaGw%2F1SG3011eBTVxOVMiSGd3t0z68yMo5WsM0RCkcnDG4UDvqGVRc%2BZzIHqlHux7iWmm18G20XhBQPiDP4081AyEl4eEOO%2FzbNKM1HyO1FIiOw7a2yrhkjSC7f1K3lf23AGiZGzRaHJa8Z8HtMb4Vz3qzwz%2BL054xpF7kvKRSfdNnmi5%2B7RrvvamnC%2B9LIQ3Arja1GLA1wt3ibtQewXW60yFQUSSKenjPu1Myh6wvdpu%2F8it72X4gupkkmWLIaKklEQV%2BFoGiKrkcsckVLptWen4nwt84qbquUyEOFO3%2FMr8igjoPImHq98%2BlYX%2FQzSPftAMNmQPyWrGQ9rVStbf%2BnQzv6ukIj%2FgRPTp0%2BXQpFkZXTPxrm6EVE9Lwsi74PdjYJp6CU7yXlzqpyAsoKNNvpc9cGJ%2FNWeRXZWJvZnEbUWM3WzXuqN9sNHROmgBjPp%2B54U1RAWgJNeh%2Bar3m1q00GB0QQhZALh0nmBdyOc8UdBBs52MWZWmuJgoMRt%2BGAwUJIUs5jbIIIH4MkZqeBAMeEzcNq1JDqO%2F%2BRYlJwa15asmALjXcckRCtXhR9VdUzwC8wgvai0gY6pgFx%2BgF%2BIBrDs%2BlCytPWU49%2BHgCopZ5xSEOC8H1htPxH328M%2FqmI1jHwbShv2sMZQWjxwEU%2FxJ1NJ4J9txvykSz2f%2FGlMYgEhAcFe1mkgvW1BhbAAguaNAMWa9vmVES6mP4MGdiXmWnIsYM0LRJR5y3H0%2FzA2rNI%2BWd%2Bj8S8j%2FcBZGmu24m3QRMiAcVPdfCMaz5dEMkK2xeXBEyFvZgMK35yJsxJkbwP&X-Amz-Signature=38b55b7bce591cc739bb3417d8539249ccd2d9ce83549d28a7906bde11f62274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

