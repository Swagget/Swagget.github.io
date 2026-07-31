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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFWKXQ6%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T012557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGlELamCCBsBMYJqC1RaoRSxfcUCaGsmtrRY0wf8Kf6AiBzmS4o9mySDzUJ5aF4JmHT%2F9uvSOn3XUoqqMnjiahUXSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkG9f0l5JvUh1NdpCKtwD0%2FRlx3C8hIFdifTkdwsKDJCiivBknja8op5COQrBhLdM3mHxShMF99Z9nNxYeAzpDd%2FWFoeCXUfffUgi26KEeQkuXL6u2F5tmuCZwE%2F%2Fa%2F54Lehq4rMKLly23W454KeFFw8oVoDROp169%2Buy8nc%2BCZ5imuo431Wk%2FN9kq1%2BlbdPTTreYIjte9VcyU8LEcrpAQErbZuxSw%2BUdm4Pc9TT%2F7GD6YKJqe01bYla9KPDsvO53ZnEI8CtvvqOYqa3nsLSGU1SY5JhmYQpXlm2%2BRpB6O6%2F%2FpiicEXcpABJ5bv9nNBXGhVF3PY4Sk0Sl33JpvOz8QRRN5clBgpmVkXzo6B%2BhgSpGjhAdeZwMswmVG0qNA2hRFyivbxP1CIsbZFBjvEoAJlhYjYFbxVkXZgV9YsAHAbDbM%2FwgUHMBdEtRFs7TXov3fMb7wmg2g%2FxJR%2Fff86wJfn%2FZp%2F2BckatRQEVBjzg%2FUm1tQPucMf6hRd%2F0rDhaUC1r8tMRenQ3Dr9wzMNLu9fKcP2qI79fBm6OSoouZe9pzMAMFU56eTehPiplFY%2FB1xdB3u5sxSFrM9gdWn4mbM7gPjDG73o23fqD0z%2FZwYndEyM5sXUembhJ%2BALZmRugI8Un1G9hics4omGxFcw9u%2Bv0wY6pgFzeWgY9Iev2OvjX%2Bngsnl%2FJsFco2i%2BMZiypCBpTtExdtLhk3NSqlMl%2FMPCWumLXVcyhjx18MElXlBpUOv4QBF6xdsZVLkxV3Kw2Ac2Jm9D0XrqS9IPULU3Br5iS8vn8rj%2FIRVZ9jL%2F3g2Ldte2f0%2FH1R2OILunuCdV%2F78q9XcY5ok9Q3WeQpPQVv9sBY%2F%2FCkRZnmpEjV3ZdUGKkWvb6DI1OgMvSDpC&X-Amz-Signature=82cefcfb6d062f53675440f84060f2b8c2e68ff813c4d1a53ab7cfb464e12171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

