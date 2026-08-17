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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYBEICAJ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T141509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCl2f5h1LEDL33C0Wz5IT8gqfKd1ax0CNOgCvUlblJF5QIgcA6r1r%2FPvs%2BWFyvOa8J302Dmft%2F7SKfwbyzxxm2QRO0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGULmAlhz2zpKuLlFyrcA7XyCNbZaXt9naPTQIR6wRQV1i2FVh23%2FqCCc5egmjRZzOE46WSe%2BU4M%2FbxTORaqDKymmFCRV7HDrmlPbWpLyaC734cX763etVqBNqCnceIOrp1JDq3dBl4hPOSoyW5yXF3xTT26VV1u3fMnHdEopzekvxmvwPbQWAaZRt985HVn1nNMyUvLyTOJkPUIlJ4NnPjCmX7oUIJRKaUZB7%2FRe2FEfYxoRjbWdk7h7TOVolNfkUICI71nzF6BuEgyqd9Gngdk%2Bh6STF7pvKp4BxFL%2FhwrR2V3xJyDQQtKiJqvPq%2F%2BWyrbAFfcuQjMQ%2BKk4WQ0u1LCt6Zbq7ed445vTZoMrEl1ggF8DmcDJU0xVP8qSzjcHcT3oxyv8ivf37tfBrhIeQa4smzn3rVRpobSYZpolSvJjr4Pn%2B6s5BwigvnGiShwmSq0CNT1xumQ09elZnlqFoNxctbil2xTpNAjuh3lGMnvOtXgJB%2FDpDtkMTkiUFNGCRX%2Bwgc4rHMhfOV3GuRSiojzU3C378xr%2BbYBDNzFNo78FKZBcQeIRFWBNT6mlacbK4QkamJghsrCXTL6Tff9ajuOaTqqfEfbvv9KySi%2FhKi0bBci0lYhNV3dRucv03anoU5lXhx1Z8WhC7QOMKL2i9QGOqUBcIS69c8KsDWBgHBMT%2BNSRauw7R5HIYmq0ipI12Y5XDs1x3RypBWpp9uJ7d9Clv2n5u276o8ECcju5rkd69CFT85b7As1aUHGrOAB9xqHdkidHFhTTMmD4X3fr9%2FH2Zh%2B0ewit6XEDuI%2ForZmKh%2BVRB3p3hUbSHkt%2B6NzaYg9dm7Ru0vwLXONI6%2F3KTDhQyyrrdKFaC3Xw6Ve88JY6IYlg0y5vYS1&X-Amz-Signature=124b15fa2fcda69f932333eb7c2d0c27e210aff2bce99eaabf5fba2f5f449392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

