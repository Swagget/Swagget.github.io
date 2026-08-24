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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOQYTUR%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T142948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIBrjWDuZe7Ia61%2Br7UYz0jTCq7e6IeNscQp53R3Ulg4wAiA7uUPsRFgMyfn3z1T81103OcUFe4JA758CKVwqISL5PiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3lbgUL5MoxN5tmAKtwDB4w5xvFg%2FqKcuq%2FsWqHsxMTc7sCGdikPVqS1XhTFp8tIMdKr%2BTUNRS2yet5Ep6Nv5YDA5Uug4h6S70R1hyP%2BjJOc86IvJjWtAY7G8OGRHIP59IE0xmQJZBnCkolsFWIS5bAPfw4%2FIz6zrA7oT6XaR6q6bmKIs624PO20ovTs5vu7wx10%2FKOPmHdgwpGYmaUukD3iFaKjTiEPaS9QfhiTvICzQlLlV%2FJ%2FOO5kCh9azkygTFlUfDFDuhFJGea%2B1CL8QiWOzlqi%2Bg0qKUDH44PN6iszZszwd7rHOERMnwJVagZZ370MZzgqIxNuoq%2BRFDFKWEnTe452Zs0gp5W2MYt8V%2FO2JHIVySbskbFGD8XxF71zx2T8Lo8Y6QgR%2Ba1dSfhDsUS7skokcnicTyj0KodTqKh90MIK7LHMpS3ji9Yk5VxCaQkwouzLWYPS7UJizthckxU0QFIPKJOcwVLottFyIchzm7SNaz6t9v4iQq9IEOIlG6iFxzw4Li07wf0eqDMbKD9l6KT45KDngU31id5vA%2FuZb5U15ksr1z97TXswD9HXPr7Ugn84W5G2DZ%2BcEci0sbTAuk6ETkIzJCM5jQmBOl%2ByJXnvJEm6BUNmU%2FQEW6CxSnzW5PlWbLLpCmkwgqSx1AY6pgHAo8P3EM7%2Bklg%2FkuThfDNHzCIXth3CWqjWFh4UUGiyb2i5z5f28Rq1dLDhVEwK2Axq4q3BMngGhCnNhZdoygu7xcjyUhacRdiUAuUH87XSuS1AEHamFcUhTPmnLKzjYNmIfFHdKoFt8bkFYPI8pUIf%2BOLt%2FfBKk%2BaRmWUXH7QVeT82wo6XjHZG1zpEqQCJrFNDZlKJKuM5aedoRAAARV%2B4Dz9IZf%2Fs&X-Amz-Signature=bffc47733383ef9641d577eaceb917b2ba1b2139f98bd20aba1d357c7ab130b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

