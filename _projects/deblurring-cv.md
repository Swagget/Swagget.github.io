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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZK63D3%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T205552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw20N1eyApp%2FwxPvy8GYCrOXZluJ0hOuybKXMKeh2gYAiB0KrMqKKni%2FvmeOJKw5t%2B8iF1uDvnxjEwTIG8Va6Hl3Cr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMvddXwF2FI4wYdJn3KtwDEz3FcElQOdcgkuIgWjwvKwF9LluLJfuNJwpvBMzTw%2FXBz8MbbuOcO7Uyh9lNUldUgPX%2FW56iOQudlE7KB3HNvPmxXDSI0BGJWA5GfW9dVdpbtOAKRgfbtKLmRkS4tA5gsZ7aeGNyEsZwh9fYb%2FxyElm49mHQrI6WffhVYPe6H617QwAm74RIHqKawrWZBuXxPpTwMttdESwZPCCwmGkJEWCDcnumdlDMEGfTlMelb1B1k1uVmJ4o6lkD0027EWFwmjHSeX50DGHTYWnIroY8L%2F80ks%2FEiy2qYZImMUCBQSNXET3ouf74dzc0593NklHB2fVSedzgzkBr3D20g6nRxhSemPbv0ptSj8EPkF%2FzqBjhHENCBrioP1wtrN4CsSZIUHi7fKe19jjydquHc4TW88I0uP0ZkixTPShCoeQcP7lldSPwMaAbbNCSM6DahmCmlSqEtf44dbBul9rLhsCPfz7WZA39YYTbPozQvYZWhcf8w5k0pOiIApW1WbBhim%2B0eBioplAaqGILSkhYFBntBDy%2FNw3VU0YKprBa1DRVmpBoz%2BKUVVKkoEGNfI1gwPX71jSSQljvMpEiheV%2FZvOvTWD%2F%2FEKPtwu3no6cM2cf8S2vdYZXTRC37d03D9cwke710QY6pgHv9xA0EWFyUI%2FHtV5S6ZrbnuhZAXc2ycsQK0Y4zi6WUBAZDLY71Ck6XlOvlML9pMkOwS1sf60tDmp9HnJe9zHmjFy4WhEj7lb3DMyid3ROWMJDVJHPO8Urn3cr6uItqxl6gu6IJTy72E1er5z9Go%2Fzw9NziXmAUjXxkqlWVHdWgxn5G8sL9ypZsJNV2O6tqzjRJg%2FSRYwqopeBG0LyoY%2FEF6Au3gt0&X-Amz-Signature=715c6e169f196b10f468f09847b019f31b65497e8f9edf88dd70e83df024a834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

