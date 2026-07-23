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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JDAG6JZ%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T012558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDxuB6LO%2FnvrKMj5neiLkamUU6oruQAwAQdMB82xnG%2BuQIgdrlmnZJ5wyqNm9cVR2ptHtbwY0VMmRjlgKV8TjUSSJEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BxQYEp%2B%2BvRf3XWKyrcA6Hqw0CjDXA3LR3mz3ZYSQekAYS127RvCHhdjjWY4vR3coIWspoQC3JewyXSLxXvUUaaza1%2BUt6QhQLRgYkA2HM1o64VOK19geuloIuBNQhxUAK8Oa%2BKu8JmlZGnxxyfRD0slDhuIvwhLISmpVkUY56PZyCf0If54qI%2FCHG4%2B%2BLnClVfUf14V6YZ1lsqZhPfd4wagOupw2YyLT%2Bx5dRLESfzqFtMaNX1R246RLqhmirFDISkMBWZTxQV09dDKJsixlpHlIVyDFb8v3Kci%2BBfmPkyvNn%2FYmRgBO1J9%2FSw5qBbKFUUjNK6Q5DGD%2B7sQR6f8Zw%2BbE852L6zbXoEHhYiVgeiKyGw0iTYKmKeU6ZWS5UtjSx747ZwsXsgy%2BuU72%2FaoU7eE3D2XxJ1sEZ3%2BMJUjN%2B68gJy%2Fvdj%2BXAisP3XIBxZqhC2zSgi7AVlwo1lCrLC3H%2Byx%2FNEE7Q0dFaoTZpv4PyDZEFCEWCXFhf14G%2BPcgmW3fEsrLFuzJNnN%2Bc3bJ99GJaI2sE5ZiMlsAQiLkdtICPRWS357UMowZ0T08XLUaIKi12DEccSHXbBrCfMIzeI680WibJizr%2FI5VVHSaYZwTXRYPMJLOowKhgF8PjgoRgO0nX4%2BDa%2Fhm2XprGqMPq%2FhNMGOqUBgCsJwuIxHIQI%2BRl9qBhTF1GxS0Vae%2B9TlcJpk2FuhZHNLQ45hWyp9z0X2YRiEh6L47u8A8yD2o%2BYUUzCVV0TCUTmz5Pl%2F4lx342XYTvfmmEe4Pah3TxdP1hMfy%2F2Ce0UEkw%2FoyjtGXJNejKl1CDyOuW5MzvKwRIuzjSJd%2B6cs7GfL74A8Kjb2wFTBEgOSaPxXNMV4Drhz9PCEH1A2s4ANYAsz765&X-Amz-Signature=e121b96346c32209e4e0a986ef08d33bdda2423c254cbf7358b1dbb6da41f4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

