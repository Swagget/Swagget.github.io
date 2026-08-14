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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHHSJYX%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T094903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCE0HOAjY6G3ldG3qgCCBrzMbaICFPTGPRzgomFY57vUAIhAKqu4tv%2FWhhRk7Q0UM%2BcR5WKdmns1kMYFjMSMUSAh1iTKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwbn4088MF3bb1c%2FcEq3AOxpfKtcaYTw3KCvb%2B6%2B9SVJDjX9faK2DCcv0EiXhLWMX4FjMux0LT5e%2BJlvH9BkGmGGCR4irWtNZCoXmp4MUUbmlgSqA2WgwlzmaS1WbOz7KubO8PX6A7dfcHRt7WPFU7HQJd0GFJmBV9E1QryQfKIj6dAcF%2BZ4wGkywRRSc6bAgp%2FO40MfML9PTklBHKAeD0iq39j5hiMOUqrofob8qrAMCUT2J6hGcq%2BMEheh%2FMpCElkOOPdd8%2Bg7L16gc5%2BR97jSRTt6hVw%2FfLuWzk9E5VUl7ODJLyS1DV7DcNvcHakx%2Fh73jXT8ibfpTW90MumOAisx9fAA8b2K9jgM5nQ2ViOScYAJAqfKmVSGIRmKk4wZ4nDle7W%2Fq2gMxDj%2F2v5N28ePRXe0ny9YA6REuer7Z6MZdpymRNqNS0RnxOixuoPgwka4euK6xZS8Mmji7AOkXg5L275c3SGKUMZSVSPB9KJdKe7xyC2Yv4lFtOFkmANlb02ZW1e1Gx735RtwLJWbQC09%2BoMJfgBMX3u5NprPvNtjfGZKkd5%2FHNKsYq6TVACm73KbXCBVoUO%2BhiDbUaHwZYuZ%2BPUuf01EERkCNnd4TzCc%2BnzNZbz6MEWcBYchCNuL3CqbNTxueQuncviEzD7mvvTBjqkAWcwuC7LljR84hDB0mgQ0YFakt66vets5Q4EuHxjmRTR3QYSjiFxEnTO2I6IVLMaJYTaaatndfKa9IBwZcqbyPxlPHv17kyIFChLhxalj6O1qv1UCodqhbCNK%2BPm6i1k3ZFDw3c4%2FKgpyF7O37tmiK5C3G37jTvxr0UQ4ILZnq8ORh%2FsDzzOpySlM3i4IYUrF%2FGnAa07A8KLHH5TJkE343q7ikhE&X-Amz-Signature=6ad723efb952f68dd2d6d2ee8cf744d4f9b1fc563a8e134b4fab35a1043b8faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

