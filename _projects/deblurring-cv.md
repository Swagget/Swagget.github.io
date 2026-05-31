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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ULTCUY3%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T020433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIAWueeFtXxEuwidIvwed9x1usNtemY8RYidtu3UehuS5AiAzI3Kug4jmGi67IX2%2B2cc%2FvYrDXUrfcmyGN232K%2BE17iqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK679BxUOpdtAU7BaKtwD%2FKNdyEPBsDs9LUvM9lDdRgQLJHVIU15854msC6t7I7fSP8JAkjsKROmScMHWanfQv%2BqToG3hSf%2Fjt6R2ES%2BNFASybQvYfeF8flc1%2Fxw7sRBcpNskHoJh2OVdgRz8hD72RgKY83%2Fqn955T%2BoQAQEk%2FzEhfiCKgE3RS5tjzqoI5ncFhyTD6XYY0k6AKvgwNHU5dVIDqqZxuXekdw9ZWYdtZvQtdhPcDQs1V9n9hfsEECC%2Fgrgpj%2B2Udc3zgm1uI8FeoPMyDfMYVv5qKAgfLxNb4TQ1ptUWQImZwkfMZE7XQCW1uJIcCxvIHc7aqHXFXXTe1tQd6HvVVwYI33voLPE0Q%2FuqY8hK2xB3kAPuUq%2FOMzEJ6jRAEiPpUN404mjeWubaqGhioSC5H950QmjJat5BW%2FcepzqYUaK3DrlFLuVyCvpFQUtEX%2BTOzIF8zUafNzItiZLuDLR0BRULwBPRli%2BBNW3qoWxFdX7AmdDYdxqyKUuVqOwSn2Y8%2Bmj2MPVsHdbqz7vQtU19s90%2FWRZdK26ZplkHRjoCzkPkPh44b0WFjRovhqluQyrzP%2BWB7u%2B%2B26yhABoTdNW4hMJKSRhsunVWs%2BziEOqCj0dyqypO3R2%2BnOGBBWpMqHVMDeJKFHQwxI%2Fu0AY6pgH5eMeErotBdZFfoFftfOyoSH%2BB9fyLUrXf3qpVQIxxiyqP3%2FSc0WYQasqTrcyYP8uc9VoSkm9hT3n0nnkyHHNcM0%2B%2B0mTc5UoJw%2FSPV7nyMehZUFTSjfk%2BMqyqgYLIBicjnze0bF3jSTep2J40e6TMQyIjX%2Bbjo1W%2FOu%2BO7v44LXE%2BWuwnkF%2F%2B695nHqA5zbrusEHZyKswqXtxhaSCPiGAWA09btCv&X-Amz-Signature=6e43ece8e1ad52f0c19fcf1112118938c995c0b4de41899834b13d444d575bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

