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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXGFHWAU%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T174437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO6rQuoJepoRMUx6Ll%2BbFDVFHRlqdKlc4HUsmg9kWMGQIhAOXVv1ZZ3Z3rucZ1oK6AVfnPlTMARPObp7f%2BSM2kQRuBKv8DCHIQABoMNjM3NDIzMTgzODA1IgwtR7iJ8u8sApmIzUwq3APuyuRQTqfUjGIQ7XrvfeVL6HOGllJ7nFOSqgAjURRVs5pfsJboA9%2FRmEISe1rm1EdnF17LelMZD5mVPpAitk6JOXhS%2BF7hZRuKi9c%2F4mL%2BefkJPQLdbo9wZevYbOKGX3AjlStaGvjbFknT%2F4HBI2YbFhUhnHd%2BqCoH5Oxe4BTRW6rPX6tagKkN7pO572C5cesoTRkwSPbxXO%2BUHSUTwO3fVtFjqj5v6kCcnDMtIgtAClgAe%2FRVtUJdu8XzJQkVOU8Xuu8sywb6lBnYWH%2FlSahL4eOD25jocYI3BTxvz7s%2FqzsaGU%2FjVZEH%2FUfomaDBk7ywmmvKoq2c5d9H0Dj4VNxLNKwmVnKdtOQOWXQdKBOx1MNrWNTkxyMzAYnGvPgGisAuUthw7RiizYXUuMsAfYJtw1EGLcw5Vk86hVdlMBLE9BdKyuR9H1oUndJzO7eb2DWuVD0qtX%2FhyOXBGx9ZnwecgDErPeI045fd72Yf14C41KtTUNySCnlH5jyPA4V1B2IlMmYOtu4d7qKxIjYsRcLyALqOKLuyNlUU0Hhc645exy%2BXHl2DNO3aUGPDgv6I7FBHg17Aa4%2FoluKSoRIWTLQLBp5mQhcnr%2Bfrjg8FB%2BF54V9RvHY4n6UUEHkZzTD4%2BYvRBjqkAbb5GvgN6KvXJoPb7YXhfs%2BNnmXCv52WzHEfO7ro1Sfz5I9LUkX6UM1wsvGXvkVVQRb0BiKko%2F3cCS72rhu9iybtjpbZaOoK3abFQvPpINtxTmnWxd%2FRKWtBri2Ss1dAMAMUvP7rwcuyAZ8w2Ky5FT2lC1sBOabaSILMAcsyEyIXPlnO2m5Y8keCE63XSX1UFhjvckzjaopD9ztbmIDtjt0d7GTE&X-Amz-Signature=dadd04a886c227e0245a87dbb4dd8be29eb282c16d4d301d05fc82a1a5cf2092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

