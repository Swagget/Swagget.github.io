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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ROIJTQ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T042545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUoHHBHQQK9%2Bf%2FbBdENP5%2FgVeO27GqOPF0GRXEMkLnFAiBaPJrqryuY0AgnaAOfYDX%2F9Cqf5FJdL30cZL7pqTsVqCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bg4riW8wVPpiGTmwKtwDxcnrrSkLRq%2FoaQ752wTU1zMRWv8iliBeXFalxJc%2FsURD8u%2Br161SeOw33STuPufLwiYS8PWBj9CSt2lQYbDublJQ6XPEz%2FkSlnPYu3xbAvIpDskq1zc3OxozJ73LOWEch4wc6srYkG3tj1AJaKC%2B%2BBZeW6V2HG8hY804L%2FPMajtvr0%2BAa1k3Yu%2FfTsI2dkrYMq1%2B%2FuR1hPu4cG64K8hB4vCgJsTkD8cLlfU4IMdK1GcyZ6QwaJKiUp8THUEZTDP5KiJmJfdq8DejHAc4tJTsHogNn%2FVQjD80GIhvU82gzXQfgd5sS1aL6%2F%2BdXt55k0OEnKcxbBzY6fNuQCn%2FNjZn1Z4BS8cnRKMJIi8l7oVvJPzm4jYKA5pqexs%2B6rJryjLn1JIschwW9dRyZs1koL6fYczw%2FN%2B2dqUhMaVGSVxaIAkE6wrzLQUqQHHe1L5YsUwppGHTJhulypYdajVgvzkKsBZ%2BOA7cGe99%2FsyQoBsyeBTTZ2KgIOQQIv8ADHewjmvMD6CTYUObqw7A3FpSqSPasNG%2FTRjdZ6gdhN8LaYYu6PcQmATDyPCbtp%2B%2FRYzQn5YsAlz9wg2N3XQR3KTz7cl6xGhKSvg5fZ9rhYGz6ZSWhkMtH9eP%2B2L23hqGoqowxu6e1AY6pgHzxS5jnGNkF%2FkCurtV%2BGwbVVfp0tBHYz5B8zUkb%2BNQYgBiNhGpT2Ish4oY%2F3jaiXjVHCJ80iAEdXoJQ9KL%2BrmO2mfkxF7LIiVyhldwhYBKEV3HAS7Aa7TIHAfTrGeMWukLGq4eYbnp7%2B6NzmNmBPt%2Fq2Po1d6UMHDh2vrTYu6GCatzgGG%2FlHFAsZeTM6cWVcrpV2Ulbkiw%2Fhtl2st4ekXv3%2BevqQU1&X-Amz-Signature=2978f3801c5c16fd9792349c2e6364096916081fa5c3ede0daca7f10576ad5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

