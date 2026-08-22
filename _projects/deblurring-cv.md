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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644S7BUB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T061728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5i3uOqKkEvP5LucshxHL3sfbHyUkPIcGbVRw0GOJahQIhANojuGZ7v6354jWUzOmO7w9jNaGtoseanPT7n0zNtMPWKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7EW7G2DhmLWLRocYq3AORL3vrdhHe%2BQb%2BvoEUrbaAbbS2%2B%2BjPAbl4kzTvHxYdYlwvlyqvJh5LLoD0EjX%2B0ugFDZAELbNMDhvptjVrBV8ERR9JhvYEnPRj6YVzcrmmUodnLGEHAKVYl%2BUu8yrY5Rq9RH8G%2F5HQnBay8MdraHtI1oo%2F4gISeai1GAoE%2FORbRlm%2Bfz130PjUOTSdNmBAcyE4lz9cD%2Bhl7EEBbdDmZxzFVD4VeB0c9whqp4fCc%2F5obBiP3aCMuWIahXsbMSTSV1MfYHoOWqRGpo9J0QYR68g4uucGYkhmhW%2BGPlPXeCYyO9L99e%2BcGBySNXumK0%2FH3OsKyvqwOrECY5WmeDctoo2UkmdrV8WtWkFs0m3nj9Guc7WmD9yYvoovCdqD0AngJ9frHLlm7prq%2FjlrKJDCtUNiMv1WIHyxLSgCXvbZbBtpWvYa367LXzcQtoQsopHK6XYv%2FoIjDoJw3iNqYcrHv6EB8EUliazuWxr1mjMJCosgKki%2B8CpdkyxWW6fg64t0DrBliDl%2BEumb7WK%2BsLTbBgCsZfEbsduNy2GNPNUsSYKMSH5sBuo6ErQzViG78asbdYIE4X%2FCay%2FOOLmMboR9eOs7yDWEeb2rqYrKod%2BW0IF45oJ6JFglInkbBnD%2FmjDd9qTUBjqkAWCUlb%2FOKZNC0yBgJBSEKzYZz8YON3%2FkKGobOBYfZYDiHFHHzzxtTb7cdbwP3YWnywfEKNevMdLoE4WNnKwJLMcastury8p5JinR%2Fxl0PAOdnGZk25ZS9QezzT6WAWYR%2BThgEKlVRO1NoP%2BQpKvCQsMeIgT8LGSJ9CyHbTrQawFXmq7FH6mCY75d%2BnMpJhOpT8z8QYUj0z4FkImb1n%2Bp954xhWHf&X-Amz-Signature=5852e4b31a3228a441d0fe6a023471f14d79c7d26f5683a04ec2da89d1d264c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

