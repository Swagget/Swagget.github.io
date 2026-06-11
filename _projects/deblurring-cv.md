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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QST6GIJ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T135946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDTjleQmYMk2%2BsrdxzSrsL%2F6yssAD8%2F5iFoJ5v7L0y%2FygIhAIUeXr5N%2BfT%2BfoHdl9A0J8o6RQJIiRHJmpmxf47fEMyNKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2F0SoM0qr%2BOdoUlZUq3AMNjHDl1GP69JTE9idSB458jxNyDuvCVA1e%2Bo7%2FVHct0exZeqQjHX6drFFtZxoFzIhkutXKms85ij0FxiiVerqug0oQKh1FRRH51A28Lss%2BYOYN%2Be51Ng%2FigzrI2wKy1ZVQ9yappIrS4037GLro4w8rNV8bk0B%2FsuJzzN20wO5EJT%2B7daHzoiOI77ONBymSb3cz5E13hVTCRtVBYnAnPQyul4sKNcoIld5A%2FPJomQ%2BfrOMaMMhHo16eFWPcWuyP0EGD%2B8TspZ70sadoC0RUg4EiBRWy1XFMrGN8S1ESywFlrQSx5rQloxqWOVys%2FAzSAVy9hRplg2JzId6%2FWnym%2FzHsfHAhRaUfwWwHf%2BzAPAjVQ%2F72liXQtzBTIHo6TL%2BwHUmuw6sRJmhy8v0tPiiijeoEGMwfYrT9U7ZlR8h38CWFjAHLH4BqFMcT76P%2BepvBN9fwxYxgOR3kR46P9HiJvkYCb5OO913IIn2Prv56MtalKyDlmsN%2FLa6RdGZZLt3DNKGegIwWT%2FdUSRkvFBI3JGwYDfLDYjIAy4uZ0KlqxmYtCGBKH4RN2J87%2BoDKD6T3XW5Pn06jH6YFMtY2YIVzAPGehQxkxWxX9tQ21dfqR0DUzOneONjmW3PbT1o3vTD5varRBjqkAXt0zNa2UUXt%2BuItOBTvm7hIGhJLzPmMn8Gb1Kt4v2nPjzBkpbcAqHMqevweXkUEWjJySgMf62Ce0T5hkH14poF4lQSaLswhi4Tf1JjZQ0FrqSkSkYC9HDvVp6wRb2AgdJrw%2Fy6tyhVVC8h%2B9%2FUMVundCPDLX5ou4ZHy0hAFZnFWAqgc4PJUWxZFI2OmRhj86TdVf5IaWhH%2BrpCNZ5dhGh35tdt3&X-Amz-Signature=9e3c28b7b601b1abcb179f4ff009630d7449ae3fb77bfd9608586b0dad2f7bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

