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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS6FLWF2%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T232723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIEplV%2FRkNg6vioNBSjShKrdLf%2FEM7yWGWr%2F4i5OXZcuSAiEAhaLq3w2fcE3%2BWZib4lzbsoQ05qXtjuaD86M9CwAgEooqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEz8%2BqhflsN8RUZE5ircAwzN6nI4W53u8aGe%2Bs7cifbUZ1VHIU06mq00fOP0uUKtg6jkkDnxlBDguu3jHB7tqllG3zHyOjUYi1UHfferW2n8iMmDdevg4wivCGVKHhmU4mD1gy32Bm%2FGufEO3076pTcXE5SJ73mXgFTPx3HWmQy8w0Nw0xaNJZBqXIO7wYMudfCooq2IWY9P3qbP1RfarBFLVEanZiS2tfrrlZWc2LTxSawV%2F7F75eQLvu2K9bfFLHyOyVXVh9nX047%2FKlXdUjboykfBCJZHZu6l6mDfty2QJ5VR7ZsV7HF7MhQNCd74F8gRqvm8E8xcous7mGc8FHl2cxNYXaY%2FNL6fb7sMB%2FfSU63Wwdb3r%2FCTxl8ne64MDIa8vpMCsmWUqE64RBigMmMqBzgBRj%2F%2Bcq0klxvctN5T%2B8o%2BnMETLuzXExwvwdYb5x8kPlraZT7JOW7UyN03ZwHOYlxI5j0LpaHModGP9Ke5OQpYv3BQ43VaX7aHzCOgFJ2G%2BhypZNBhZyXlKcaolGfyBud%2F7p9ORJGPiEiSYty%2BYvC4sewVyUyyU26QGKvDX1moqYrGm4QCr8yNII30ZDc0mDuR420VV2IGtUvtUGeKPZMmoWREoO1gjsdRU%2Bp4ChtTbJUhxr6NTmnOMPnN89MGOqUBj1dT2Oo6Nva%2BELaaHPIQhqj7CVowYDdn9Eh%2F0NvQoVScj6ulYX%2FIXm7ANXFYp98fogFkTW81b7xxqZ6Dto8DuA8JGrzIGc4FTfIgk8j%2F02RmiFilFH6z%2F1ViXddDk68GK3nLrPwfeV4fhwBDHXIKE3qU5aq78%2BW3Y%2Bzk382rxPN57VWsxzAIpF7DoViNhNlPd%2Fz3ChH8Hjj3TASq4BRgh1hsQdp9&X-Amz-Signature=9b863d11ea18782e237d58d21e93d34db73fb35797033d3b25db90f98b2aa674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

