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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2KKULO%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T121854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8eCAoIHlBWue%2FEMqBDpR6dtLUJYHoJD2PH7iwg1slMwIhAOy5LqtDrq0pmLUzYgsgC7rbaSXDScQFVxOeQ1eDg25EKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQv6RK7nug%2FwkeeCkq3ANxGqXYhmzJTrClZ1ZA9vdHePCk24UDokfTZHemxqglp1kC15JReG6DcRN411zFHzRzcewh4hXQhBsHCQVdEga4qUOj4yz685KXmluHkIYaeOIKKv2eRI9Y0z8bvuSECCViroFPcyHYfvv76Yd455rROCKvVy5zVttP4d2c2O3XK%2B%2BrIkxYSodZFEFxoPRipPfo9jZoCla%2FoSLgslAFATGsu8RyxsVrNKvpravw%2BUuaerDmNQm05KQXk4PBD5LnAvSa7b%2F2ossgt9%2BvumYHOOQG7BvIyLe%2F4htx9RQzG8Im0cU9rARIoTvbAyfTJbjBg2aUddHuw7JjsNIelkz7xj%2B6F4KkLSwH%2FRQRzmCqXuWNtAaS5DbWyABQe2lstEPlM%2Bts61LFs8%2FJgsUwTAZ0LJfGcX9318tfJkd9tEyHAf2HKSX0frvcyXF38%2BNkfcrj5DYixpwyX1%2B6Kl5dXklGrp%2Bnr%2FlxeqJUp%2Btxn9b6S%2BD%2FB5vnjRnLQMWB0dyl6m1JMQXt6IvXqLXpdE3%2BVjG1zZ9No%2F8jWAwk2gbpXxgYoK9U3xX6e0cvBlpc5L8gk8RXfdowBVrpGQaFchouPiG15okBOMbBU3eK91g2eNpKl4pxJQKXP%2BaJcZDu4aYW7zCH4ZrRBjqkAaCOb2GLeszZsGVOH6uBqDXnF1r%2FHp5441%2FIHRCBSBpgRdp85JNt%2FFI4MtiBsSznZz1OB0B%2B8zvQzFfz1doGSeGc9oJzN6YOhXwDW4kK%2F3i%2FQCELWOumNi4xeub8kyGcTVdFA%2Bm3vISxfuLABnN42r3dy%2Bfemr4y3sZ3rI5XC5A6PLK%2BHttcm0e77f8nuRRCv54xkDCxu8czsyB9HWyBbwdbjzMm&X-Amz-Signature=709119e0b144efc5ef105fd220c91a48c8ff394610a63076bbcd76139efa3120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

