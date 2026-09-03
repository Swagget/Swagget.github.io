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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCRNHYL3%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T185624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAyPZlUIpz%2F2wGZbT4ORp%2FuQm97Pc%2Fny3%2F3wLLrRbOeOAiAPQF%2FYyke%2FbPqjLiq%2FoAj1i3PHlid47CwNax7kP9gSByqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdVYDLt6yQVT2CtN5KtwDS0RR8WEcZJUkfgHC2mJeanjgC9e%2FT5CrBGUCtmViNnCG8Vr0wdW6YN3Wk1i5VVfueHLfmwH38TmP8a3hDKqSfXjWEssBAkqdVZOL2yOkcB2pVG7C6pdKNv5LreA5NPeDhOpYg45g4cqqMefsi8IdyIwmKAyzN9LCnt6wGilsq3E9lJC9%2F%2FMbrcS%2FGLAaEhRvB4hMA6inPLZdAUhcNNclnkxbfcGn9aoBF3yZ4z8oUaL252a5wDiPEDL%2Fr9NYzLf1intSyhERsJVOoc2bej2tMmNv8BN%2FIVZbBXYWYnQTgSdYVR7Q0Yjj7tpFHqn%2BA1550ywt5RL%2F934R8C5A4pF2zePodFUCEgEZ%2FJZFi4RK5IhVDJEWCrdJ8HU6HWJMVTGSJan3oQHnO3Ixqd0OcVQAwSGpGPc%2FvNotn09g%2BjwIhAFsAHStNYgqBd04Hwdvxk84ulXi7tHhw5lJj0%2FuEgj40C855EYV7MEmLQ7uhLM9z3C9SbRGywEvNy%2BIxZKEnxum8e1nY289JjSEEhKKWfdUWRzpdQrFmCJuKqU8moVFOupNPhJv%2BGJVgkW90j4bBIMp5UNw5941SFobzwE4y80qZi8cFigXeNpOp8i8QSEsxgBtw6VW0%2BGgYzYkbJYwu%2Bbm1AY6pgFaSzfL%2BeVsLMV8i5rCLhs4ccuhqvtmptVqUd5EMHXaABy9e73BwncNaf8iH5%2FkDZWHdn8XS3Idd0l6nbEWXuyHZ15F5JOm7iAttFlxrJgVyP7qtmJK1N8%2FTL5i79QMNpBC75lr%2FyPw8ux6im%2B2obHBPvEiGStQ%2Fnfw0CeYhDxGdXJDRzlMZxM4rdWCR%2F86JW8q9MO6SsAnFiRoc%2BND80SjzU0o7CNH&X-Amz-Signature=8c7de30436df68883b4b3a0d99b76b43948f66592ce866939c4b14a4a936bb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

