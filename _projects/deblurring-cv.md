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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJUIXU2V%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T195650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCxTYADc9AcgA5oYRaui7DhukXXduMxfrXC%2Ffyc%2BaL3hQIgHSuQBDwbHP0txyQLuc9wJrKISxHlgSDvVM0PVfFyDw4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu1eqqP1%2FaI%2F4aecircA0eDqS0b393aIzMI3dhDn4ZtokzILR4g5L8DrEuh0gSipgsPZPCPWHB95N4ZAgZV04ZaOZ7i1D6LzutsEqh%2FV5ovuCPCvmHAlkBqQosR04zkLDtCrXjLOeP5exCpjWHCaLHdsOAOgpW9fJkCsqm%2F1qzUQ%2FVb7QaSLznSH%2FmJcYMX%2FityAn7d4HkwMPjr14It9jkdXLoSLdXyze5xY%2BX8NZ20%2BPz49E6u%2FD1FHi5VgAOzNmddaRL9Az32UEpaUz7SpLBmGEVHsK0Zr%2FxZUivwVvNVLEnh0zkNFTTlU5MgjxvHmbzFm0J98dJP2DWEYCqqrDL5zj16VTx098QYlrfXLDsX%2Femeyzvjcp0gc66e34KYTlUtj5PSIceLaMtIcTzq1HlEPBnu5RGklE2oeg8ngLCkklLycOrMaL53PKhgZFU89KETl%2BZpbvRfah9K3fH9goduoIws%2BWcP0tBW0fXAsDmkPLtanbNu6SUhuNkZb9ZtTe8GeSxr5lZSVBYZyGE76sb6PunO68dY3937wV0Zqe%2FIVwDJVubgHPFKQkTLMSJ%2FYm49gh5yqsSYumqXjAQTV6QD39magWrR4UfMeW71YbmbdKxcrvXyZsDN3ewlS9cf8ZdrKF%2B22piQzDq6MOjFydIGOqUBOKhQgWbZTO1vIAwMSUBxkHE2rWudOtz%2F4a9fyRNYVIT%2FrBJY79X2sQjiJe31ZttsWUBfUWZToqDCL8tRdK9pZulpN2QoFRfFT%2F7YOZF2Um8IycQinfVh8dKgs2BDVsOH5y3T2MuUwqpZwoDnxliayb1dz9z75hz0wEaefjI6pqtS5E9oBoI5uVtGBE2J%2B6QRYaIVdn4y3UQaoOS3%2FrCvxM6fthMQ&X-Amz-Signature=658d823be656e3a77ca920448e1497fcf7a30ff2c63b3b58decc89dce1b82366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

