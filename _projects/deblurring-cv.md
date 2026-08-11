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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCYZDB5P%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T103918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6HELIdyqt7O0YOgv3Whq6gHM86xWjTYMb8wSIvBnX3AiEArzj0oLhUtl5VpsEJ7E6XFm4ftes917HJGO3p2nZbLvQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9Bx5pJoxGlghGDSircA063APBaGsdMPp%2Ba3rmc8MeR8UF%2BJ6i7NeRawMKhkIhqmEtcV9D3RLBzYh9%2FE3qri3AAALKQPH%2F%2BFKlbPbTN1zux7hQ6JU3iNMcwsoXk5PLXMfU%2Bdd%2FpJ0I8%2BgRtO3D%2BIOakBgSGQhhIRaB%2F65enfF1%2Bsj4iIyVHFMh8NZK8NumOdk9d%2Bd5W38MuUbcSoOB5coPYVoKPw0fiG9MH16m21urYjtjyqOClwWRl2K2yxMvqN6e%2FsmUL7ZJdII8xUxfJfmOEOxSa%2FDSDVAjipWPs%2FNuGS0QzFPp0bmItU3PoxELhB5bToovfhI%2FxSSuyCLuAgouMBsrXohOKrjKYhcXYGhlR6A86pGzxKOkRiKa62PQdjpOXFmlbfvS6u%2BH4%2FBpy3yYzE0rvOP5tctaJk3lDh1zny0bbWxQHzq1wHdIQ30oBQtIfLj48yPxlFdo1NYgwXFOKtIaJVUAh4wB5%2FdHSEFQkg6HjdwKPWT6Gs0T2cVPDPMeqXrTj7tms9Ev3j0xq0hxXYWA7vMXlWji84Onw9YkoE7%2FrrcqOZDvMo0TAx40S8gQRbAhyC8UzeXlcbxpWhgX3tw9J%2FSYXtEopV%2FhDkmycliBFxLAfX%2BjJiF3qqG%2FWJxI6Dz%2F6w7Afc9LuMLDL69MGOqUBCY44Q%2FdW%2FDenl45g%2FZ6DD1rmhauq1Dx%2B5SHSxYjIAtUB8nAJHV8xfrct3b%2BDavkwjhoJl9ys182GIAB4YoCTtgWSFGSIAEynERRPRwrThv3OnFQAtgPlofUjiTuZdWSddh87DtLTPHJ4UI0CtfLzdYUlFix5l7pww6TaG0%2B%2FCrJjjhDdNmfOlnPt6fACyvAgeEBwwrrOLkaAUHhwDzSnez3RSSRp&X-Amz-Signature=12e9052f60cc2c3929383f1a362716a77b3a4d238243fb28dc64a17636212e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

