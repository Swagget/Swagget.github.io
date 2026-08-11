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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XB3PINK%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T195158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmfYtJ59J0SOkYaXGFFnqz8t5pQSlvqSlMeBdfSDnlgIgVk2AECoPkE1z7Xg%2B%2FiunA7eWh3w569aE0mRT0ymsNSkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuNWc0SUDhk7Au7hircAxDEe3uNYbJsO5ADZgzzM5sn1%2Bk43yl4bMWOnhpBj%2FB9jAzgEbYqKPFDxa%2Fjb3o%2FpGbA1%2BFN2L3%2BwY8c2DwI173wsTe%2BG51irGR22kWUgHOM8wTYfvcswtF3fsH2%2FC3VT%2Fxn%2FniSLEo8OyP3mqcPso9ZeGNP%2Fua9W0US4gDIxB2C60zoTK4J2QoTTRyfs5eX3hXL7lFKwvZ0dX8DD9NC%2FaWuDbwb%2FIsaAGlsy5k4CzZNhxGw%2B3fJYLRaGVzmdrczZcn3393mn%2BqqlnUBAXlPgf9KNfne1ryDOxyl3W8X%2BSncv%2F%2B22Woo1R9Hl%2BhgitVXKJHneBIRspjLn8s6scXLidoj1hofO1hfCgB0eitxsaJZpg%2FsY%2BLbeqjaKGTSNK3YXTF7yhMYhlCzHY7ot6p6bDdpMuWtCWy72rBpi71B7K0KHQmzzWVEzIYmWq1nPBkTfkCrV3ffj9yJClC57zGsBTg8fFxhxZ8Zi5bUxYsdqWtjKBWZ5DzwFIxaKS5E%2BHIsD3UVslXzYZaoPs9UcHzb3kcS51n4sitoHNR1ziDTD7fYHT2IGa7vei9VpbEXx7EKFPkX4v3jXx3gqNw5WXIm6djYRgpBlUNAsZ9gr0xTIiSM%2BqwqbYeBtPLdvvitMJ717dMGOqUBVzngmroNxUvf2Lu3kUL3ETCFyeVkkpsV7wPsMMZSLD57g0fmYiY4KBa83MabNna4PY5IrBptLaERjsUeqyjeBxiveOIMnSTkSnbafxSftJfiL7aNrlZKvfZg4OveXiqFi5xjl2wdsAKGzgxkWfb6cOk9l94kJRV%2FpSVAcFQMOiF2GIO38A%2BmpeEyCPau13C8tgNqC4XM0WzE7eyVurQ7BciqNTyb&X-Amz-Signature=6eb0d3dd398bb77dc516982a371bfd1803369bbf7d7730f638eb5f1f79599d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

