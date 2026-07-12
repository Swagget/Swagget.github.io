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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3XNHYL%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T094011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICt%2BGy4v5RLBScNkmfcpfETt3rPL4gMME6rb9tIaVzf7AiEA3QXagVwf0v2TKab0IX9UYRM4hnWPE9frswS5hTo%2B1GkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCj789SOiyewfxBAUSrcA1YIkM%2FJKwBLmqjWivkhm%2BkANhBRvxJ7tTKnyepk6D8%2BTQYvNAfeRpgIdCEC47GbqE0IdqaDRxDvsvTTj0tnHhyCZ6gj79nNy4Px0OthckiR36epuhiXWw7w0OaqbCEjKifgIHh9jRExVk7jKc0zbd%2FSzZDSlrjNG6m8zB4C00TyAcQ%2Bt%2BZJKDG73a%2BYfqx%2FbUI8rAgmnU9%2BCdpWEXCrb5IBivZG9nXHEOGxfhkUklsPHV16ek4GjUtutS5pG%2BLkIlAdI4EVq4uksNB95nbpktDzvf0pVNv4RG%2B8DpWJA4Ge%2BXZzHzQKS8EITMrt%2BhQp1cF%2Fbqy5obNah3W%2BiCF4B8nY1b8gML%2Fz7TSqBZsuxnN3XQ5%2FTpWCiewWULedvMYIbyXoVa7I0DEKkNP4DCAOXXSWQoJjMpKdCdFQ%2FDdtWszH9uqAogZ7lVGGZARneNtjaZqtTWyU4swtjNypA3Dv9xHQbbHuGKSgtEoNVh8jxvHBZ2xXsicRvgw0hzG3OFFwTMyepUIhhZ11BBGvACZcVaDc7S%2FYwnJ6RJAiIgK07eMawVPMKNigiaXalLYorng7P%2F9SQB0dZmm8V6mBdYTrvBpJGNiYJo%2FrDSvCwmOQztlWXPFc0QCN9blGVPrpMM2HzdIGOqUBJ53nuQq4lzOVvTMfmI1vBIIuGvXBgUQsW7o6XU1XFj%2F9gFjyDpkUqSJ%2FFZbm6w8lTfdDVB5Of1eyBHYgpd3I%2F9cd8gnLzHqfUOIY9PcMkiKPpa1uSUrJXKyfJohUdbGUcmUJA%2BvFu%2BfhQtrIRgVCceA2PsN%2B2lalc2IfN2SZy68Y99fb4oJaozXBIbv4bUVSzhSAPuZO4%2FneoF30CCeSnA9Kb9eN&X-Amz-Signature=479e23a8bca038a05c8601f7f61c5d6982bd5489755271a75fdd07f73097a5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

