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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DT67OWY%2F20260827%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260827T231714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBUeA%2B7ofDBrOJgcayNMD5mr8jhqJedo%2FhmTpp80yfO7AiBeQrXafnEzeMy1G5yHKoLtjNshHiJfNCmLuOVi1vVM7ir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMeCiGzDiws4%2BZKpg%2BKtwDzPQQV%2FdNQ%2Bt7sT7QMwnAHFxWxdFriy6EcjPj%2FnjxcrPlBDcvga07hBBeIpaxNY7fcKYdjCSrBXD9JjW0cKZ1rJwu%2B5LxA19xQZm5qcHFrGAiqyT8stOA8%2BeX0Y%2F8hHTvQEJ8KKyF5Qgxa3RKqbGPDTjlUJbPiIn%2FcIp0lXolOQ7Vawr%2B00xkBq08jsh4ujs%2FRSAmKjDA6Q3Fw%2FcNkmKWqv1DOPAzZK3VaJ%2FFo8WE4wiIHHIaDhMVX8Gm5EjOqPhaVFUVHPibhy4lZFU4HB4rhJxFlaRQujQKKPaFxy%2BmOB4gmSWdWPCBvbRXOIXQ2Tb4U%2F6y0RT04BhsilkXDLXnq6ysxHHVhrQEbfmC4mCds7AhlaDQ7qnBs0JqVyltv5SjMnW%2FwR1QakxF0W7P9krQlhz4zsIfrEh1ZDpXgulbPQNX003wqrjSYB75wLJ0KG2ReG2xs8C1RKKPdk9kx%2BPRNYAG1FsDXWkhlC%2BXWS1ubvP6eqJ%2FocPDlUCuSFTO6D1vYTEabvfFKQ1o418wH%2F1zSf9VdjbYiIICyWk9wHYNRN6G6yJ0w9OCdqlj%2B88Dbk8RHeRGIZu0sfJfnDmzDNq3%2BDR3lDIZybNl%2FuP7tEDyiOdZSM6fPFj2KrlKUbkwjdvC1AY6pgHCDaV7P%2BWOlpAeAin3NFZ60OPwb6VLWQLE%2BCb%2B2EL%2Bj2jxO2CFv2zF2qvzKmNkxs%2FZpA9lcw0y1UAGkKRKxIcvBnUUbm3135MP5IkOBv4IyEaRVPoOCdSVKqlJj5FmWBMq6Ac3rRPwLpjPoIAQwTSxc3CDZWTxXlTrfs5OU7GPfV7aXJCkA0q1brPzpuQ%2FD1kp4T2h7MO8x9lkPG1b%2B0Hhildp5vWT&X-Amz-Signature=b734251a692d614625b6e2b5d288fb67bf0fd6f32d75b8e8a2a4d75168fe16e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

