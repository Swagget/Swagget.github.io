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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPD7FNTJ%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T033334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGMCePy4WRezbmUWmVZ5cxYeXB%2BeYPIQQUmTha88lEpaAiA7qtBZUzVGQoC4kXJE9z75snzLkbuaoQGXxK92I%2FxMQyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMu%2BlDXIIZ7CSedikDKtwD7x8%2F%2BCe8ZbLnOp6gAwnaL9%2F3NUbjt3Kh8snU5m7xmkiviJeqZ7xgSLP%2BdGS%2Fa1fZg4HpP8DDS3iZz2x5R0DZALNBUMWp2bbjBw55sKzvfIjaHCXaPPh3e9gQUAs6RV7ouRDTj8a7lGUFX%2FmvInWV%2Bav9524pD9R2do%2BFJr11KFovtFfXBiczWrtsugvpm99A211BTfrJSuFwk6V6LKKwDJ8DxmYmrbjteu%2BrJGtRlYpC5sixtiqxAFcJaBtT2Yo8cKNTmFs9zcr6gyDE0T%2FVL%2ByLCkJ4tocBNtwFYTOPyO9xFn9LClaIPmcnUQ1FJ5Bg2y7Jbs8hI9IBbU5dJRK5CVxp4hA2BynwDo26OBDk0hNWZC3nunCC%2BSgy1l9pJkkTKOK9Ei5ee5HZeXM5tlEYsZfcwZXfIUeIXXyGDcVqkYROBGM3ue5joGT00gaN0gdfpsJRPSvf%2FP%2FB%2FDJYgEiY480ba8WZrke4kccQZpoigo9c0QPq8tSvO7LSddo3IuqUuEV2zvdxM3%2BEXrHBw1%2BvkQZrXUV01O2KiPR41IDxv%2BSfxTRQ%2FMflVqfosjKHUhsgk3cIwkL7qQI5%2FbIXbGAW7efxW8jN%2F4B98xZWsYfNc28X9cXXnQJQkRzBPpowvvSO1AY6pgHyB8vvvVFt3Oo4LWKJDr0Af0%2BxCgdDRDVU%2FCQQyajfBnzY5MXUwHhjLP3d2bag3%2BQNAm8D6s%2FzjpQ9sAgJpm43%2Fno9yaOCqq0xakGKSZwQAqm%2F5N59X5UNyEKZ1%2B8sfJ%2BraEl6MxF5l4hI3SFi4V8I7BxG9YN8Pf2HIBuDL3B8y8JvKPoqCj%2BgwG8zZ8EOAhX0tQAC92KSIGNyskbT6MHqpeXB5%2BCC&X-Amz-Signature=d397a2ea33ab969a7076c7255a57db2fb3adf94df52af3aabb1f9d8e2d07f84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

