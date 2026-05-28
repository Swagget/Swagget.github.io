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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7G4J6D%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T010654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B6nFI6RjYYzT13%2BINI%2BGv8cEMS47T6jhWEM9u4eUj%2FwIgSpOpBLBILFYh8JUZj4xVyT8nI2cIuM8%2Fqmh%2Fyhxo74sqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRO%2FAqK0D3FjLmlnSrcAxWo8h0%2F9c9LyT5ekk3BDQpvg4BwzIiHH6VcGfIzqsDvOYpmIVNaOD%2Bvka%2B3NAnhUxgY5I2z%2By4dJoheX2kRsU3hd3r8FUu2u2W84EWSll83q3EdaKhlxISIPwHoMXuYoZut2g6oRobnj1HQ6J2o2UL1ZbkhdVJZQbeYebO2mPdLqYanNTbIynV%2Bvg7SuS0qcY0WFP8X8UXp%2B3AuOHGpWRupRAa%2FRipPupU05wdoHhMghgfpFZm08LNmXH3Vt%2FPwps8NUDrROLw3biAppzFmT9J6BdudxltY48JLF9Bime4B0DtAhwElYjP8uvxs%2F8gS0AlsPdYFDBlocphrjIk5T5GUp%2Bupfr4%2B83MxcPWXHXUZYO0gckGGKoBgwoHaLF8MNtkGf6EFqqfUowap7O9K48%2B6379x7z5ZvSXjPemfbQdt661l2QUBav50mbIr2FViBgfof5kazdUu859utU%2BmLYu5u8oZb0BGbZksXSKffFE8cWBMnUJwAIE1i6adQNj%2BdPXrEr0NF5tRF8KGvHIAZqxhYNN6fml%2BRnki8CoOqU8WOMVjNWufTVbIwXVcJ16AAxxmjS%2B7Zgr78JODsKgZO%2BPRVeJhamAitry%2BE%2BDyO5Vl4Jb1HGWRThrXUGdhMOqf3tAGOqUBfmt6yyJNDk2h74ldQBkpjnvZKTGMgkjFzbmB1R%2BjcT00JKDEEmbngm0BRPdyqmFagpE%2Fjw0QFasPKPmhUH3IUsYqcY9muENjD%2BNThS5v6yq5XKbh3FjCr1nC8im4EMwicXHT80hRt5gl%2B6BQ0jVwJ2FRKpz%2BK6YtRIjRIsZTWjlkd4G46OAGITtSZE%2B6zAl0dmPdtyq%2FceFc4BzP%2BTuC%2Fu72PUMr&X-Amz-Signature=7334be8c07a2a31ec6ea688e99a0d282aca84979fba769861aa444dd295d196c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

