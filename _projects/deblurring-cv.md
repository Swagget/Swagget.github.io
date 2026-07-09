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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLVNJT7%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T101605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAf4aFifRaui%2BBi0WiH8%2FKS3BdTI9%2F%2FDTIySZa3clPGUAiBGCZ0uwoe1x87JRN%2BXTjEwzI3GLlAn99Ui890cj78yxCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsuXEKAEX7XV64FuJKtwDB%2B%2BPJpotYdwMnbWFFw8P4s5qulavMZUAcKhs6XX5JB6VTsd5ES%2B8MidSheD6L7R6qWiku0a%2FATna38S1F%2FCLxhpoOv%2FxORD0O0PKuh0PQ4zNmOUoI5CHLCoxey1C%2BvMm1tIVYmjp10Ctu7J9ZqLt703sBLjTftSOyGSSRaby%2B5MlBsnIJElRTKwobabH2ZSOIvFQSZJWsd0A4x5XrTsEh80OdVW66ZsacWHuaWx7CxgPMenKGjKNDSTvgsLBGTMt7Kh8rpnuTRSkNH0Mam6U9W%2BPiUJsDrMxFjp%2BUzcJvi2fjNiNBFHLQA4jbjdBP%2F97qxJ1948m868hx6%2FyXPijYdqSFt%2F8H6F9wnv329H0STJ19rTlIkdQVnVlIK4wxctCOW%2BdAINAvn2Fxnem40V410eI8CtcGY8M5kgkRs3TNCMTk7pC9ReV1PlYYwt1ikZfitTMPgorJOVDUR2aXqr9TH3%2Fh3dwNaqlNQOrn44FMFLFE4KXF3HxPMHzSkBI%2BPoFa62zY%2FkeF0r0FdOYcuN99srpIXDEBW1hdRQzZUFgj0AznBoA11IqCgbSykVTsTuMuo8clDOj4LRaQ0ZCObENayxOtyR1CNRXstBewTvq4IXpbMdWuDm3qB%2BJJfQw1dC90gY6pgEtAa6mz9BePJasQvRK%2BHaOyj4ggFEAFFUPtGdUbd7BpL5PGUO5sXOsoNvlE95bRvIktGavo0Xk4hPvbq3jv0Vp1I230sXE3h57QjysQEnLma6xJqy6vo3lYU9a7fz4NrUVrPz0PECAkf27M4QUhNMKQNSHO00PKDMDffQpdAyqEbPxJ02RnnlF1I099YKXbuEkR5ZV8ZAt%2B5WWNwYzs%2FBr2oDT0Tgt&X-Amz-Signature=63d45eba53623e23873005d25bcb7f1fb49a1ac0116335f1da24344c2c0725ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

