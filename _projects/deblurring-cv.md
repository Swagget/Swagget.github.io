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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG67UYSV%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T152354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCaLOu%2B8NtXavAaVFdk8NwDLNx9dPFgB6KrziHbQ1iGmwIgI7GzKeCoc338Y0Rgk%2F2%2FOveM%2B6E3BuXjCiWX%2FDHBVFgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDPuZy4zVMq%2FXq4EwnircA2TSKNcPoDACiCNDd64Ew7jhxdLNx9L0urleYnzxJt1FLklLY7UcWHj2Egost1nqRZ%2FyU8LK0GDC%2FtA3RqJZc2AZj50McAFoiRN6F1giCxV%2BUv0xz4zeSthgbeuKSDGIx8Cy1tyWTlAtij92Dyq6Oq1%2BMjXW8puaiiEth6Qh4S3GIhi%2Befmvjg%2FeOJCEPw9mo3nfWRIe6ky2yrZ3Pa4hFpoBntklEboqF11zTyxvwhwTWAx5g6AxQ4d7Gpct4qCpf%2BUweAkx48XUZse3h3eFALeG%2FXq%2FcXnOpoA7RbdgOl3BhnP7rwCyCXvUYsNasREjS74EhGs9B4iiBLq6v59dsYheAaBb%2FKt52FMm2YuVXCgGQRqzOuyKLAPy%2FDX9IfJ0PCZuFJm0doBSe%2BNVHkG9JPfJjetynLiBHLJ2cmcIVjGlt0%2F5w18%2BEXoLKRbmPSgJqfkCzpfoCJdsfX3ASZWURjiD44%2F3DM2NU7Gull%2FFnohXzNHKpGlWvsl%2FHp3aeJr69hbEwJSRcHYWDbnlpxdUVUqmQkjimWos5%2BobTggcDTBbGx29kfQVkyXzeQJeKPFuEb6C4O8JBTZ7ueRsPU%2F2mY7NHU1ELoL1v%2Fy1oqQ9vQiLCDOenAOl7ZJyHgpxMLGEgdEGOqUBRFJNpTby1GlY%2BROvmxly0F%2Bb4ZwDePNpVV4CpesVIvvQeUeCHqj%2BBiVGyi%2BgSwWq2LKFXspamQGD%2FWmbkj4XDWLsd1XGld5mooYg0psd4gARSmvMsWtWYxaPf%2FfIoo3N1avZ0mul7kOCDpL27PZ9%2BDPjg2Rrb1RFzPr%2FP1F4WuULJX0PIFyL5%2B%2FuOCgj6hvqzyaoIqW8WcsXKXAkayKCjdIB7h8p&X-Amz-Signature=a843b9005b725e80ee29ddd29e5bc395f4d659b761b9358d39a10da47043d7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

