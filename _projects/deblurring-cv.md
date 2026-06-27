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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UNX4KW%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T200715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7mztQlt6G%2FauNGW60CvvXrymcotSlxs0f2rQjvD0kwAiBRBvlHLQsW5mp99ukggPZyfrjCJitHGCw2AdNxD%2FjvHyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzC7%2FKnSPKofASBUoKtwD0oZVIQvde9l028Qtqkdgl0c2VFmGd3mn4C3APA%2BCr7jv3XqQEfsPXpjhnVjzkv6dhna2tij%2Bqu%2Bx5FUNGcZeezoCs5ghLNbl%2B%2BmxbM2n62jWCQkiXvkVKH1fAm4X5rm6c4jdaukfXbqAib%2BuXU9lR3qBUi4CaR32jsn1n7Gyo74T6xuqT%2BO4%2BuSHHHg8NbOEkDS4ADqGaGPSzNBRC7YsPbFGZVHcafhkQvPwe9nJGF0smP%2F9K18IYNiUDEMQr9JYk9S0Nx7oMm1ONgX8dLk%2BhAX94g4UYPM3x%2B0StAE%2BrlYomieGOeQuICYij2VqGEysUsxNuHh8AtuenMmI8Rf%2BDZI5xcgvkD3OdXIQkdM5iIMTmtX73VPiaUzps3EE0LjE81v4YH2DOwI1LkJ407rJl%2BEFiLrSjuiMj69klaZKSa2RwWtAhSDTO%2BAv%2FvrbAUiSQxeK5dxO2eGkv2DJWrYaloG4KLx9MmETGzsu6kYPIDAKV2NGInT8%2BMbPgoJzen2ypNuVSl7Dy3qZ3Bm%2BUiit%2FzirzZB%2FC989TFRPfrncHsATIwDFF17vbDGF6wXJOdKSnKm%2Bursq2ttJuIZsDDxE%2FifHI6sKfcbnaE9OZCZXpaC6893mrsZA%2Bub%2FiLQwlISA0gY6pgHAteObyKcqQiVb0gjhS%2BjPVYnGYAChIxxhqUAxSNnO5kMHoix6joGG%2BW8qxgMqStg83XEz66q2johdJHx5c1woLboaapJ%2BMEr7sYosQl6JAf2mxWgX2CmhqKmRfGOIAE6BHALDkmRNpd5r8nwi716N9X2N8ipyVjMzrNB0WkAfNCto4tmGygMZ1rO7x8kjPbGlG9CDRp%2FY8h7LULN6Y%2FVBQedFNxSj&X-Amz-Signature=b7a48ed2de155a262aeaf269e997066cc1eff2781152f33c3d9561dbe988bbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

