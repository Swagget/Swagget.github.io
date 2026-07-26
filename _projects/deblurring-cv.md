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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATKZOGF%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T164232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC6QRZLImCvWm3J%2Btbvg1qv6sQYtNcUwuJpKDiGv%2BruIwIhAJLZNr11I6DYJ%2BkqPs%2BkBHqciAeCKeuNgRjrn2FfVuPsKv8DCDkQABoMNjM3NDIzMTgzODA1IgxgW2CbuvN2UCXX2qYq3AO8LJQ554mTDl9UO5HIOHPPGu4l5j2XYl3bO5KAxzSrEyT4dowNnmZXYg4ovDv889Mu%2FO2jD7bT5S6uJHK1k0N4IDbE7xvs6vKNgCQxYNiuhQL9%2B2H7UsBKJXGa1k8%2BPQv7V3TYPLfZ96AXe%2BiI7aajg5dGJgi2C1qcQTOplLAduG0jBanLG%2F9h7ozmHIVncaHqbFdtKh1euDf0bkadIAHPBaJATOOtK4YokxXRZnSEJ0krWV8uIAhLrvfZWTceubEDbpNs8a%2By0D3Y%2FLUot%2BeoVyu3SyVfSPjvSd0vVfkgbEbpQYSSHgZ%2BL7I6hPgMGg4%2FmsUvkRr%2FnxjKb5eD8oXqIr9S0r50bRWkA5I9f9%2Bk%2FI98kEooHKg3h5uoRjD1I5v%2BIxqUc5gVikOIFTW2QW8byV0JSRR2ZtKG%2FvdnTCq4xkLRlGKgsfK1xds3BlrVaff%2FBChLJf9axxjI%2F3oTFjtth6BWqzHyiuKmSfGf9NFMpB1RmA24osnWoj5PpaIBpzJrGbz6QIyyCMRPyDmNcSAL4jzzAp5TTcMqxV4r27vdlQGdecS%2FFRVRqsivRqOuNpFMUXYs%2BaqMBHMxlqMtIgnAwV7LigLCNzjzd0iKNeLu1SxNJFv%2BBNH9ZwLz1DDL6JjTBjqkAdc%2FG%2BSqwBnIBrC4NgBkxBZq5lASqiFmF%2FtV1fuvTjznNgSzGQrzhXKL3ElD%2FAJgnJZr2GwOByxwD6eFiFH%2Bxeh7YE6O4l0Eu0mtouxVIuSxpuqRXMu6RTpmu0tp5qjgGGid9lOOZStEupk%2BMWAqTKNs5cO6ijGs7d3m9RkLm8%2FQSevLIr3MXqJTTf7faExCBRlT08ztWAXuN2QRxebDcVwyIyWW&X-Amz-Signature=72dde642fa7a96760f0ecc901bcecff3c91a9ed2b2d77ca3210108c2b0696d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

