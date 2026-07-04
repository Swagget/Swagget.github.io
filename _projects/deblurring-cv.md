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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUQUXOD%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T200235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCLGRrh3x4oob80LyDZH%2FqNRZNUCR1HF3OgixP%2Fn1ri0QIgG5d4n2HAwsohatb6Bc4Y38iIVBz5ysYPdVFp3tUzGaIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDoKhrmB7stBkhlz8yrcA3UQrBUP739QajRKnEVPKVz0fZyRr4EG862RwezWF1UyvKU4EMWtfpvBVYFKCJA2Q2LraoZ1JSfvJAy4QHnnAtMAxmcF3HdadC5mH%2BIqCBYtD6hiGkjudNl90aw2%2BNNQj8l44%2F%2FKVg3NHs1cgYQQTfSs6gwpn5bd91GFSMoNU8MhY8%2FF5YcgYE8lPUhWQw7Hh0pNDhEDMexPNVKgddvfn30KIxJoQhxgOwislzxNJwbMf%2FXQZ6tfi5wIo5hxjbIzpbcq7aGbHAmZp1MhZ%2FMh4tWRp2f%2BYazW2HbERy4%2FazIwhGpI10uNAzS2ryj7SoYYnbpFtOpr1V2Ur2d7cdj6NDRVT5gyDcS4dvdvuTj%2FSLMo%2BMQAOsbHMy1QbLhF9%2F16qDbLsE6vfCTbYTHtGAd58b7Ca2qDM6hHbIZVHa%2BnEO%2FDanufNoVLa2vW%2BRGcTZsnCQRPtdhP6DLnvV%2B9l0ziZFJ7iv8%2F9hNQXfhiGC0UDc9i5XiPVIxrel1iUbD%2Ftjd%2BCETjiO9HwEMQKPNIjTNaxM1w%2FrbjiN9cgQGQ4f6TCApOqP51Z%2FVGB%2B8qFrzRpqqlDWY9nrTiIpeXl2JkRE%2BIK75FL8%2BbJe1lraOD0zU87sLGgX0xFGMXXgdZFtvbMM2updIGOqUBfmUFAUUW3D5eImegfxFFKn9kM%2Foa%2BHtnjbBS%2B4QDX%2FP1hcZ7hX2uUFjkKZF2inxVHAZuL5VJYozm5wxbYYvGfPU47d1TzgJkvGHyal1fCLT9yVIDyfEC4QB%2FMnmvkaqbHmYV8uRjimj6MeCwPIfWvNCxzefTeGEVxWcsVuDdrh22SwsRMywbrQB%2FDI8K4c44q%2B3%2FHh4QgwZYHpP86b5ZnBQ%2FjdZe&X-Amz-Signature=659d35435c5dd822cde4f680cc49a31ca42f4a970c248e3c371491047f49d8ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

