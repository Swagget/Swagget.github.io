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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXOMXOP%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T092432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvvgrtFA9HYSAFHqx43jVRCDEJASTcifiM%2FzUHUN4WUgIhAKvpcDIiqLLVoCmjDEvTgnd0m5Ig%2BPtYu7zEU8rgGNnsKv8DCGoQABoMNjM3NDIzMTgzODA1IgwVnPNMTZyynVdBZioq3AOnQOtGN3opeIVkA6ln9uiYviQgI6584jycZ1xdgwzol79rSpnVT2VVrpOiCelsdGObMHXS8wv%2BQhOGf08nuLnptXHJK7DCE7PP2NiiwQHtkzzoPKg2EhCliHHZ%2BkysXt4Kj3rEFBxCfbLXARHB5ei5k5kV51LSg7LamVdYEzo2Q2K1yvMbs9ZITl1IUPO7rI63jk6JRsYdzyt9WXmuvqpyOlLCKJ9jK8jqeUPLxKNJosj%2BAhzdYtqRaeDuJUcUzQszviD3M2nIloXU97pd54l8GzHH6%2FbZWNabYfYnQcPLiLTv20meI0SFtSCX9dCNaxUBzWIX7mYoHzeNMXSOxTbwGg%2BnnQmaiAFKsTRGKoSD15%2Fv1IZr5TGdwql44qOUEz6zCVhRrzxaLbJQGv%2B8XHHVXxBJWznRz2Rb4DdL%2F2BbD1kxf8GSUVD2Ieu%2FOE9CmE8QUmDlU7hZ%2BQuO9iRGAYKsTMunbJBBLC9YclHXSb7zGNTviDmz%2FGNXC4MFVl6v%2B%2BQbzWYEir6E70t3COTNYeOnc0gTbaBV7rEhseJ6f7mwp38YL56IKMtfdnPrJhiK0LPdJxm2mrzU2SV39pxhdFrRhqdRgpqjf51BNDZpplAiC1jrpzRHSNO1JxqLCzCl1NvTBjqkAU5sU5V%2Fuiw9D%2FeXDcxECjmqV0uuZEHMTaGxwxOlWcRde3LSs8i3%2FGCYcXRcw6dTnyDDwE2%2F7ycCZwfaF1Gfs4gUcMT1Q8kpM3uEeLknCIRKWZoHH0Q39ZWbjBltbz0VN10czkg%2FCcEw8NoCyM%2F%2BqgdiAuFLi0sue0kO1KiM6pnArI21lVKJz9tQG8D9cFrmTaAlLEQfmk6iqySslCsnWAJc5TdW&X-Amz-Signature=a238bde085841c48a8fca3608bdb532a18c446b28055ce25af317fba695b4526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

