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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DINMGHK%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T215126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqu1znvzhyMP8utunXLRWBllIW1gL0CX%2FBJ4owVBLUQIhAM5qgbMWl2OGyjI78uFJEIgsL6%2FMBocHBVBEevFHkZZrKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BManAo2flRA637HUq3AO2ImCll86TSZhiEkt0BkwrK00APZirXxLGDZaYY4%2Fkr4m%2FQ8SGGzdIMIng5%2BlAQluMN0kX6E5xl%2B0oH7XSlYA2vANdYeJtDWr%2F0n3D%2FPuj%2BlOz5ZSuwJ6RfNaOIc7J07YZJj8bVsMm8bjedoH5y2tn8Ndp93d5kNxY3Wkstvam91g45Azt7qSxawbeWvoY%2BBPyMz%2FPv7jDGv%2BsnXEBwvT4%2FBRgD5hac5lU91aobSu0a8CeCIspBp%2FK%2BnG7vMyejSycaN4eB0CXjZmmVR4iQfJxjE3vFt5CVO8rpKkdO4Uz%2FMugmBzyEc6lnjrQFD1VMr0vPthI2XLD8NFcuDxW20Agxu4ye8Es%2BIQVftw1FhUkJX62AzCtGPTjAJJP5ls0GWyfyE3ANLO%2B4chnMKojkLU1EBBuyd9wwC%2BR4Vcy1sooQSWZsPULYANvrUOHAIxS0TIJhevwlZTfW923Ux6lsFl8lMQXPRGuLnFoowdQR1CK4SU3jeIgVQybP31H5ojIq37bYVhxQqXcjZ2X6Ghz0vVYX7YYDXNMO%2FLpe262t81ie020sQkT6iQgfmsEU2FOMmlILP6Rnx%2Bal9GpsX5OULhlWXyvNocHT0wDx1AG%2BCLdvF2WddqXyBWkxjbDZjCFuf%2FSBjqkAfgRjYHPbZP1%2Fv56r2JESUfWsSvjp0LSt0B317Y4ki7oh9rX%2FHeSHmt6P9S81KljHjdhVNSpecblWhyxlQC4xZP06kYbyWxOv%2Ftowgr7y5cg%2Fnzd1cm0RqlsXZRCszMB0EHqkG%2BEbw0ZOcRwdmf5gPNZuQNk%2FEoVt4FqPbbg3MF1Kxju4GH8P5%2FRM40VcpyJXIVoo9w3SL%2BNVYziX2zXLLztIzMS&X-Amz-Signature=3c6de66a1dff4d19ab3bd15c4ed716c59c8f31cf276b2ad6f200d248f33266ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

