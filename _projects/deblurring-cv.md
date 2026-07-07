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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHXO4O5T%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T234254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDACYCmByf8XDX20CpZpKRR73aXGXy7vXviShBUOZxVJwIhANw9zr7sHW2%2FHndzv9Ym%2BQaEXvnDGTINs%2FATnvgdp7EgKv8DCHYQABoMNjM3NDIzMTgzODA1IgylU94%2F41%2BYHZhg6bQq3AMao9Kd0Bz0pVEzcLjIreq8%2F1FXRVK%2BATgys2uN36sZ56RBhqE%2F%2FYY1ADn23Pg4QWu6nsl65cWTwtS%2BoASAIBHz6oCq7g8oci7pwcHcTPwF7%2FpjX9SPGl36B9%2FNCcrrHQ3Te7vzq2jJsB8fLXQiMrL9M%2BmkLaHZ%2FZY4%2F81lSwVnLMxd9kZxG05FdM6aZAyjg6T63jWssWa0VA35xheqUG6PN91aOh%2FovqbGmpAWg77NIUxmSWp6brFn%2FC6xGEfEzsMSvbjs6eUuQdEq9tOCPo2rd3LkfYrqzXb6gLs0o0HlVKZT2zJiAEnmE9mQmSTrq33aPmpnHxFOH%2BSAEUiEkTdPDoTve7dF5q%2FAtoLlmRfNR%2FIxSnIvAwHmhMxQ8IJMoTjltV1UZsarsM8K0clg10VWHPT4%2FFPh37S6Or%2FjpEgzwRLS3u10eSrqjVplI5GdffFw61OQi11W9uh8eKSZmAn42VHBwOr5cnLzL8X%2B4SjXqZ732hQ28a5X1ukHIocZbNPdigsqoh82gWH%2BZMdjO0OH3bFZ4xSC39Aiy%2BqOrCz%2BHb0qMJkRBhrGxTez%2FeXOmStTSmv%2Bi6Z2bMxecX7O2TTpa2Y1LzxQjVxDOMdYSSNKC%2FVJGlvOZa%2F4JWfX4jCX0bXSBjqkAdeYAK0IDiS92FG4217%2FYnTprmKXLHWvmnijbgwUacTle%2FG%2BExK0VoHerVkcmInWi8yk3BTx37JZhAn8LZ1kzF7ho%2BkLb4qdjvhlHMh%2Fs3JhjBpTEO4OGw%2F1QYQXV3Q44bEbMMoSZfx5P8F0nDyvhy4c9fcVguoAkUVl1c1ycItF0VbFiHNYUsyOWUuYDAwOyrQ0BgeieuPcvmKzK8yNhbSFNtaC&X-Amz-Signature=802b2858554a9eaecb11b73b687d9aec6cc2ef8c1664dc9e41e7390070f4a59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

