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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7TQQDX%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T023421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZ8X%2FW92DV57TLdStCPixTqYTRueS4LGmYfJvvHSRvBgIgJCejjuVxj4ek9xcdhwZUC6pc%2BOt9VMx4mFRjaj8XEDsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfBTgXQ8sqOpf1SqircAyX17pYr4dgt0NtNlZD0T8zQIGze6C%2BxGJAgYx6UphynZcOYjDwPqE%2FjTNyGGgfG0NdXWKbafm6QdBu%2BjxNLJgNXkXdj2AzdZQjjZVNeu%2FfBbEm8gOOrHZeq6QKtdvJL%2BPUBOyf3K6Eznp1%2BLpLaQQi9lKzq9jnc0lL%2Fnc%2Fwg2M0YkzAZDmSsn9PNAdODrkEjJ0ffaioKZak8a2wGK30Wk%2BJAmFRB91eyLleZaLFgUUcjkJewcSWStQF8VQLZW9L3bLNvRAkq6QGf7xFq4ALzMePnnvy%2FFB2%2FrGwB5nFk8fKOlpgub58Bg0CL0A08aJY2RdeokoCi%2FIzwNMIy7kakmKBj%2BscKisGPhtkijf2fD7iHIILVCdoG7nHViRuertmQUCeAOdoVa0EOaRelaYRiiEi3dERiD554vdREfU3H0vF7hOIE0rPjrA393HTKFzLGKEsIUVeJW%2BIeCBsqYwvz10JitDBQRvN3lD%2BZIZIti6eZsxC8cmfKNtRMXhgCfkKlB%2FOZRxgyz9h8RoAF2XjX5e78e0YU26RoHAxYGphQMrEgmMuZJ%2BYEmeDAC%2BrfaMZRF%2F0HIA0U7HY%2B8x6C8qiz4vykMPoKalNDo7fEdzTGKGPAW4VHKdcfGk31aI7MKfd19EGOqUBfbGh4%2FqBwcocpm8DdDyHFXZAhGiXpYGU5JLOW88OfDwl82%2FmVdKU9vxBAXaYHwECxczf96J5bn0PjVoB3Wxs0Bl7zjLXoUtZUhMWvHGNxwrbu22C5r2l6l61GsfFQ2rvNvI2Jjly5GonJUdDTzYnW55p9PaZkZxaZQl8nkHPt6cj90poYcXWLKs3JUS8zsn3E5UpsKO57m0U2nllCFcpxVU6%2FTZ9&X-Amz-Signature=1b52b82d06140b0f87f27b38a36102838f8aa993a3f4356c0127f011dc9e6d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

