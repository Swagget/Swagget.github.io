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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627RBFMUQ%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T235420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCxm6BBX9An%2F2rSFUrhlRhvAIzpFfogFa%2Brt63bS3IwPgIhAILVPOHoIz0YCwonTdf42mcT7wIObObbq50LF3G1IDB8Kv8DCAAQABoMNjM3NDIzMTgzODA1IgylCvF5%2BLN%2BFgb9Aeoq3AOq7L93uOUjqRqxFgJDlLruIhp8uHySuIGIvxnwtKWUIC3kGvOgeuLOoyzKx4wxSFOur4lqSCp8Lj4DFHpk59X3Nbqs9dqFUadF%2F8THeQdMOXTjp7Hf0nQqBeCqnpoqSxBRYkq0h9jGdlbRMq6Y9c0Kdgp%2B8q1Ez0uf2k0ma7S2YWDX76OGZxO2j%2B0rXoOJjxy%2FLj3cIFqx%2Bfe9VJuo%2BrPEuMn4a0peY3%2FZ6ibSz72P8FIaBI64kaqB2vJdhQkr6lSsc8zx51HAP1cXuH%2BAZ5diO0uQg39bHKMCAwxEoLeke9qt4lhBAwrNJfdGtnWrHd662KN74oeIRuHRja5dK9Ur4ZwhiLloMg9so%2BtbWPjdUmcpVO%2BP44yZ%2FnVthd6t45cr2MkBM50PyQFlXdtoTnYtCo4ba6WE0kiMKrPKpr6WJgLlp8lYP21pQi4YS1Z3T%2BeOOiGhcYy21GRhZXvWeTHVFod%2FXYZI%2FlFdugTM4GTvXDKg6gqJDpGjQfZnioV9oYDldNh2bH%2FrXgeuSooDprCQRMk4xTbczQ9eX%2F9qrzpkGomj02s34CSofKigICyXiZvYdcrGvCvn%2BhCoIes4v%2BBryzlfFTtW48CQq0kNsae%2BtnnT04bU31C1pXtjzTC9hvPQBjqkARFa1lP0aBIWnDNc3DFQvx2Jix66JsTiGRb1UkDC8n6oGS4GBcZ36R8XJHLk9U%2BvtjzhY3s7iDOk7rkAsJO327hOP6MxTlx3zX7nTBaBFEQi1rjFDvdy83Vh97UTdvDbwNSrOaCxVO99pPMjE1RIR4ByX6c%2BvyTJpqVPrBCcwbwVo3gkdDO1StpFyH5EPkuKwmnE%2FWPHG%2Fhsh1yUH3t5C3nj24ik&X-Amz-Signature=e4fd18c98859223471f8b3f86953be70cc0cbfdee21f6b9744d3506bc17cedb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

