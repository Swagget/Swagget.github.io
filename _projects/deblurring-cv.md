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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCZC4F3%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T224927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuuy3xg6YTNa600PRD3yiAPg2lwJQdEZOdNIr2g8mVsAIhALQwPyy5J0O2IF62EcidAoPj2dM8yXcxFGYXX5ak7UQNKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7pJ4YmznZ1RK4saAq3AN2%2BMW45MdQ6rSkCKwe7tLRW6JAs6V13kdF3UuNLOxQgbR%2BDY8rzQlKLQuXxlnOX6HMAJzC4DHcX%2BBKyTa1JAMKx9GHA5P7eqZs7Ndkd1ldI1h%2FlCb1hHFMMtTVVtbyQ3i99rxMy%2BW6Fv%2BvD1F1zwByFBbt8ysPc%2B9rg7yUMWsNgLcjawlClabMWDi9W0VH6%2FTs%2BRR8yB8fVmPcfPsEAlGmjQxVmA7s5dNjWhzgdSEihXBFNd2AexijVl2tJ8MgyzOJb4LWlep1GBbyn1%2FPKdFsc1zAjpdYSfi%2BxBgI0NrcjYd5u%2B4zcV9EetTobVW3AxqSt06qKKwbBNu2sRqxQu9PFgokOlG3IgTbZ7KNqAguRpImicaaUZjix%2F%2BXYyGp9VkCubE8IA5daBGMlX%2Bb%2F3zRn2C9%2FUfZKyWt4jilRrVCa8eVGwjFpgHkItYrlrpTU9PwTgTGATSn3TNQlAK%2FU2MFgmIZuEYjsYIn8loS3qbzqZKaOiEhXm%2BywZqaheKN%2FhLSz8CGU81ugOdjpFhDXJKB2%2FXjXVaZXp7E2%2BGSW%2Bq8ypTaOZn4geaAmb4WC3q5moz11%2Bc%2F7NtCc2k9O8DPTJGRNQ7LK9u11A%2F609esF20OgGkvj6OBYk2hvDPpsTC0v9HRBjqkAUmhUTRj8S%2Buz%2BR99TNTDbCF8je07AmigfSnCr7dlHRyRKAAP%2FLw%2FUdV%2FdxhQ41wF8RmGN9nepw0esKdnNVcJ8C9pxzheOcFY2%2F0nCzLwNAP3lx4EQnrAzmFlPVg3qRDMYjcY4nQ9OZBfBpY2x0bDprOpbRfVw%2FldJBryfg3z7YoVw2fFiSvVjseQe5wqHOrkHIiWI5zILnVzGID%2Fw3uyfLBNJxv&X-Amz-Signature=51b3c42f3b7020f32fad213bcb067b66c48a12b0833c81d61242c0dfc5ee1e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

