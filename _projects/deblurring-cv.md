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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEEIMMI%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T000531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQC2FJl%2F1tLMp1%2BoFhnkjLcFR3t7v%2B0SDn8UJ%2BNnBNGtwAIhAKI6%2Bt7hX5%2F9g592w8NcwpaVfElf0F4%2FsdIDlzQgmqBhKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOzkXiUPbF3nxc260q3AMTDTyGi%2FZQcnZjyVZp8NFZO5KgXhTGTK7e54hPDlTnSOd8qEvQIYUJSH5L0ji9T7NjHkFZ8wybhqzdtMdMx6qkbPYRG9PGgwoa%2FfJJfpwK7CqK1oYQxp1%2FqKN34ofUyGc93Y8UhuqfvjsebyUrU5DD15qk5ZXNWHeV%2Bs7LIXGHfK%2FsZoI%2FarjZDcUYEWXgg7iY7e2pX5wA401e0UIAa9qO2Z4PsjoeoKqCctuqRU22NYm1U5VNk1jXkxESuOpAMfXhduDxGmXiRhL5%2F1JZwfDzaNqtTWAEPQnal0273E0%2BQqSbirFHoJb4r5D6AYeTDOeMMrgDB9jnuo0S8TlDmCYcs8i2ZkhgADaE0%2FVBQaGWDERtE7WiIQSZEYM1AiLXpgfZG%2FI%2BQF%2BgF5QB3tHstak%2F9IwiKNpFvrq1z47UzIfvg4jcKivBlhallX4e%2BBj1y67my3xuzIh%2B8j%2BEHZap3YkVmgyT%2F5OR4Oboe1THRUWGaR%2FLHaX6HGPKzMEtVQU%2BmPRB4X0ZOiWM3%2BlIpCBHkJ%2F16E8WhaAc1AmihiHqZAK5%2Fde4efz09fMRKrAX3yiXqe5%2BczkGsz4K0PW7SJi9VO79IuqicAUn37a4fY4x%2B7Zu0xz8VhEPyoeRvqdGnTCA0%2BHRBjqkAS%2FvNVDosJ7rpluRFgp9BVPNzwunoShFMFrqF5t2iIEzIwMMH%2BkHnH4kQeqVPRiBfwWsp9RiwT%2B%2BSLI3YpV4t3PsVQoFQ2L1xQxcXqZYCFc9cnDnJ2c7FXrwkcMe6VDBdv9E1a3Xz2L1sZG43LITfIzZJTJL6aLza%2FOZZQiT2Iv7YGvqq752Cv24KsCS2xpVx4J438fRVO%2BE88g2iO6Ex9FOxOZe&X-Amz-Signature=0879cbc2c8a712c0af65558468d1f4a5e10cc0234703057b830dfbe3ff8b207c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

