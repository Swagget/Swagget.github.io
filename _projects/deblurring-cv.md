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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CW5XZR5%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T014334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCiqFyIO1lffL%2BcO%2FdOFZpoyYyyGYOagc1Hb8ON0WyBpAIgBMWxy5bs%2BxMHpS5Mtk8oeRNS23BCoLPmk1XXh6i5c8gqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8ArDb2U42FDexCIyrcA3I5FR1vKRr3jlgdo7Fi1Cp%2FRt3TVMXr2wDRmZ0I8ROtzXMqXOLsWDmJcf%2BtH0%2FKMS2kmG%2FXtCTO%2ByTuf00i2qvzguSGuOPZbPxugR7t0IS1ckI2rCemArIUnwZtibAoHgIOm5annh014%2Fa4xs5kYfjZr9ltvBlTZk0UxHUkjztIFa27q0ZHl0tBLTmhJtf7jQKDTPFH7cYLHDcgZ8L159gNjtiabPGPDhGpjIgTht06z2hn3Dbc6H1rydOLdZzDptdJ%2Baxon9777lGMEqCsBKhg2ib9duzVI7wWTmXhWhhe4u%2BADnweyzXA0%2BfXckzjh5XgkndNML%2FMR6jP4pPcoHK3UMKE2yqSeYEXy2vJqXV%2BwIXk2GhnSxE3gAXU2dmrig3sWAXVjp8HYVNjecQTqNn01Z1wFOXBfKtoA4H4ywUijqmiEE1eTicq6gun2W44OJRMd8fGhfimp%2FWlNzA66L9PSv3o36qjoX1n%2FuCS6rhcOe%2FtPcMqU1btlsRFQJxWWrUgwziARhQWkgpKDxB4mDqcOc2A3hVIud%2FKScHAA27NDznroIipBRyPqfRm2rBEnN3OEaSnOtJ%2F3womE67ql39%2B81EFXxVQ%2BrhooTFpDyJeFDnfawZ7ef60bfNLMObK4tQGOqUBzqjVThDN9Ym3ySf1RlQUn6L1wKUaC9eDMCwSQGYw%2FfqJ3mzuilg%2Fii3fU%2F8EbdAbbQb10mY1EwZPO%2F96Jk4SuNfy4nKeF%2BAVckKGlIDU%2FcDzbX%2FHr88gad3sPWSZvAjWKTQWapz%2FZtS2LOaKj2O7VRmhfAbkXIR91phw45yWe%2Bkdzdmq2yloDvWiLJSxfgm2nTlaDZKki8SM%2B9hgj%2FGHxo4KI8gc&X-Amz-Signature=1324be89c24ee4754e15b8f15fec4bb324e55010672dc6a17d184a6764ac896b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

