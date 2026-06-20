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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI5RNBUI%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T210059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAkGHdooU7ueL4XVNUafuXUYFrOwX5HpM4R%2BzzUbS4AcAiAlFoRgTUpwJelRlzQVgB59Vj0TnDWcTdx7OGKiMPawzCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP5XYzp%2BQxh%2FXFMTWKtwDW4CKqe5Yzx%2FkMpxvaN2EqpkH9mwIVtNh%2BNHCmduR4RHWjR5mbqKHNxILzXBlnYmH8XAzSXFrRkVxK%2BFaIuE17fasUbYU80WoobcGTEPgmbJwQF4J5EIsfByz8uxYbcZgrEypr0byMJMgAv4jp1UfAtwUcSm3jmfce5rh3AtKLMnkjGFJoNVvqJpZqI8BNh8JO85bYXFlKhqCjb6XafYdVZUt%2FRD%2FAn953aPuYmFy4XpQOgXW%2Beej7sjyTZX0nSL5dJYoPdvQDd0g5MpDV7XWdrg%2Fo9tFH9gzPcrPn7jSi02GZRthjpjzQHE4jE2F8zWdYAPLgcs5ielScyLVm3O9scBKlObyTIBblWlsxCoIKEhZu7TihtH285Ch3JCpe3wojX27bc7un48NpifMU8ZpX7XWcR0wzdCEC73I1so5ouRMND3RNHF3bIgLDtvrk4%2BvUQwyclyP4cx%2BZzdeKO6H4UU05UAxGrygfSY3qzHpieBAEVdIRjcNLm9h8%2B9niGGxPsNX9Mcq42rPErAJQsfq8Zb%2F36E4eO4RfgroqyoIa0Nyb280MVQamLT%2Boh5qnypScw1zS92rb4y1mVnFjwZd7eZ%2BaeGXFZH7yr3q%2BKvuRliQ8caJjwsEoI0u5nAw%2BeXb0QY6pgHATDwVBah64wvEWtZ86uPpaDf3cnFy6tdmoOj4BFhL04fVUSzjlTCvgamUydfPndruBBokPcEg8TkYEjmBx9vDOAgEgj1QHtiZy8uuzpNkM3QwXhT7ueKs5l6VhPXOzWK1mY2MBicaLJyKLXvUdoO9bevbI7oUkPOKX%2F7vrf%2FddEu%2FZnXK1j6OY1HAY%2BaIIN4HLvINywXFFEGmqjqfW9AVHv0WWxzd&X-Amz-Signature=cd0119869955f68eda211de8b6338601fc167ea6b5088f12bed3be43e7f4f676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

