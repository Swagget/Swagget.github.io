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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MEPPWJ5%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T073813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX6rhZ1geEAH07ttdiT7w1hyq5O4H8aGJ86hgNGv2D%2FQIhAKw8jkQPPrg2HwtWNieBQbk0TSC2O%2BqexlraPFddoLRLKv8DCGgQABoMNjM3NDIzMTgzODA1Igw5HJOmTbq7njWG7okq3AP%2BjVG3ef%2F7elTgZHos7Q4OfSYF%2FHbIVlt9yDwbLRpTuJYuwXZqYZwVIkpOf7ooCMyvbf%2BvVv3GZz9QGgxjLsaC54fM6F5Dg6HbK7A3fhz5udnFfeXRhy5Ec%2FOZqjA7b%2B4QwLhM76qGbC89EOO0pia5wriOsSQ94iUXUpo%2B6qQjAbqe4m2OGM0b6zEgAqDB8l7wOX%2F3FotsnDUZw%2F%2FwH4HINF5Tx6ZblXTufIzW0yiQkZ7O2JgUnmrYDrpJupw1FIhRDGaxPO7ImMEElqEEQ%2FLt55UQXstgx5FdQfGAUubsqNkzYVQvg1D5msQtoqb56SmmKsDd7%2FwaJNYH65BwpvvbWdWRCktBUznaRWpdRe4shSALG8kpjHlHtzx3D44QkSTyXGHGFN7d2VTlFUhSozy64rfYXACDJrMhDKN%2FcZJ1quFQnSoXadgS55lAM8U0GtSlDsDCTiZDd1MBoaFg0lxfuPUo670okqKr0zs2XYqhTpOGgFxRXWteCpD%2BJqDwCQXjrdzlH8kgCbmRUBmtY5WqmpWX%2FMiZuwfc1pCHDAZfVEY18nQEQMUol7O0uGlwfWYdHwdmS3UzIInyX4xF8oNo5wFWSmBxPnuF3KdyfD6%2FpGcu5ejH%2FKxNcif1XzCio9vTBjqkAZy0WfuSRBaGSlAZPkNsMA%2FAkfg0hqRKuR23ufsF32ILgh81DFmlraIHvsvTOBxgzUgm0G7lhgqTHLpCxsBv9FvZLtXzMZk9AytVZxOZCX7e7KverkdlZm5Qh0bpzg35bHGWcF84bDx0hf%2F7qUZzFy9ue27nvkgbVxT%2BIZ4ok7KssQLMpAYeu%2FqLKs7rcnp51hUKujJXGpebyPSYMUfAXh%2FLYNW3&X-Amz-Signature=8934b5f86989f5d917844cbff8f6b413f762947251fd06eb4e80c0606a11ccfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

