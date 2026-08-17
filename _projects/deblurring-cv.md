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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYXGS4R%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T191850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHi4JK%2F1LpGCG4Lb3uDBfVsB5xSvlWV%2FWp%2FXj9Ca2aoYAiBQ7FcbE2X%2BojVMjPHzDLAJTC1SZykqvvW707OGRlW1Myr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMqKdBSfqHRkXLImOIKtwDN95ZeYwZYk8BhL%2Bca0lfCX2oXkteiKClSzCJDju9lMRcTy3%2BT5suFDPql4q7El9gIrFzWThyMmdRGmcNWmfamjBasKeaT3j9mepXljuYW4T%2BSalW8mF3eo6Bo5n%2FtmGt%2FheLnB8q8XunQNIWxbTQg7agvhnMaHyPt4TPS2HlYA2jW2XXhLCQJ1jVVnYJ7AsX4MkABqDtsEJdZQmsjSvOv8j0D9t%2FIhWgeDG3XUdfgjt%2FJxwiAEJcfOOq0OWmQ7rPpoO%2Boehfb1jxCKG54zyxbsP8bTenRB%2FaFQ6ZXpfVDcv0gfWxwSUr%2BOFS5OXgC9qUSZpo7vpHLTVWJExtxkRA3yhasfseUUjbADMERLYAsx6eVkFAdbb5raHgzIEBKmRktwERLc6Hfticc81TrBBCvpR%2Fmh7hmGlxQQpmy21rSWC1XuVZxy010jDRS1K76mtC%2FyLByZFmhcoVsqK7G7DTMxEhj7YOFTTyxh71ArxQxssqeusLxwQEssbDEPkH7Cn%2F7HR6cyXF1Ml734vYVpTqKalCi68m748syRfnlUhkSoPkLTnZUgv2pSQ%2BO3wEx%2BgJDMK2nqhm%2BytEG488JiFnq7mZ1lVz1PzgqZM3UdQiB4g5SDXRggMEhi20BC8wn6iN1AY6pgGpGs5I3K%2Bzt3eJeMBvHeA0WF0O7rBsaZ%2B%2BQUfXF1v27hVy7bzgREbdbLjOc36FXvJ8QCniXITWFxKKxLihgQ%2FeYLblyrw87tCQ7J%2F5F1f%2BaNWwiry%2BFJUZjaydXzJh9doLpLOn7DLfwqqSKi3l5O5p53sXCeWWJUK5Nh28tww0dJxjNK39N2IwkNxPl521mRmB6Q2Mjf1D%2BUIDuBhprcg2qZXBVkNG&X-Amz-Signature=047c34338d69a58d6972654e1793765feb7d35e46103ba4d40d82ba1a1ca4220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

