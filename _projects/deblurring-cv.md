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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWZPXTO%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI7hK9noQtG3VEj%2FhybpaR%2BFzdj5DI8VLTDXo8svdqIQIhALwxkSWvhmTGC0xJHuyQvsEd8QH5hzcpRQvGrKqFb0aqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywfE91QFiMhKZjAzMq3AOSp4gmyiui1LsmSj%2FTe9jdpmvDDawFjjqGDG9Fm9eSb9Kak%2FuwpBKgtbR3ThbQLHJhyunu4jDZVs4J2RHEcx9Y1r4Ji9wCfUrLgGQgv2oBhLGV3BMhJGnmzFZamjj8kxSU3OmUhzpeVBmZiuMJAvP7lH3XC2m1w9hEtdpwtKvylQ%2BjD8I9w9J6tUSoYY1ijY%2FSXq57Kwk4aqrKioDPVVED6R%2BsOgmNirPeFSL2OCqs3x6CLDlI%2Fb1RkAF2myrqZGqOVVpIvWxUPRJoA3lMP3zkcTKLnZn22E6OUm2ufyj7NhbBA48CiZfxMqI8nk71BEMzLKzxtJIEyXgAzUk2ZMi7%2FRcH9ZGDWUoYJoTDdgPwaXuoWu4JE0h1tGkP0uBtW607p%2BTs7hmpNT36Ju8t1eDuz%2BC6PLi0RIgmlAumQyBusc%2FQl%2FQXPbNU20UpRrRULg%2FZQ4PhR0PF2I9Wy5ad5JaIVSwZUu8VQllD68tldrZUs70TKerTyX1wRSPLz7MgoSalZh5PXrKm4QnBQ1L8Mqnl%2Fpltu2Wu%2ByI93ddqJ0JC%2Fr0x2th23VeRIh2toKSuMWNeLgx2G7sGRSNWMZp1zQeJxMNgc4hEGZZdXJTLRILDfKZt8f9M7AWeZj9ALTCqwqjTBjqkAR%2FZrNIS2KNwvRbUnX6tFOW%2FVRBsmBjzVOyFxINtTlUB1GvtE7raSftq6K6VBGvP%2BvyJoj%2F4TyRgxNPT9pqk82qHRETOBX0PirqsKAr0bzhrTJFIG2MrUHI6bIDzRk8FWKebTlnR9dOzdFmgo%2BO8jYxpu8lu%2BaCWGHmhAjepoGJ7VseYHCWZt%2FsXTfr%2BB5lm3tbPNdgS9YszNEz8wypquvCT1XMn&X-Amz-Signature=e004c70abedbc3120636c23a7b2ea705ce1594d9c619d23272d5258eed2bebc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

