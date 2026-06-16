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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVURHOHX%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T002055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA2PUwZ6ZaH94%2FOPbFyI8Ii8vYnJ%2FRIfPZudRw8zV8wAiANPQ3lP7ubMzizs91zaiHPPuEcF1z6yH123mIlMtFtlSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM0bOYxGTtsX%2Bt2XZbKtwDLrLAFN6CatqNsNmhMzydWth11ThUXliWt2VmuTdBgmonZcT8MWV0NMn%2BN4LqZtVKNmrBK0O5dFlmLM8f8Orcn2I4Lyj1CubqN%2B%2B4Hv0EpM0dJ1u%2FOFzfOBWQBELMlcKD168Nw6tiMbvih8V6TH3HDxz%2Fx%2FXm01GRIL3kyev9iJCMp8NdcN1L0VMVb2OseqQt5xGFiceIoyKHvBgEsztPYX8raMNen3ueCu4alR6d8Xj%2BfgDtpbaVWdtyjANupwzPSpkyfQZDy2rFZ%2BI6J0vLEJLbhjLF2AB7bwFSGNgjjsG2bVpcNPA%2BpWudtu3u46mLpEBJtsydBckCCPplHhIjKh%2F1ri4YZmxZJxPZPdFt3k%2F1Ch%2FF61llllQle0z15EVIOZwnfmM1B1qyTiseDgUcH4Em%2FlX1RPzRdSRGkQKznOpFxo9n7ql5NXMFfcpdqVqK04TLRIL3envkJF1JDKJxLYLcYI8pcxX4rRDsjuZrbOz%2B8q1h5E1oGaksHAxnF2k2%2FkPA%2BeNcbyEzxs4QNGQnWFAZjHdwKISGY1h%2BOcMXVK%2B82wUNHA4oHbTe3vYbRaQubIqo3kDdfbC1r5zK42juVPLi%2B0keYak58SyRZ1AVoPfalT8%2BYeUvP9VSr9Aw95TC0QY6pgGMyFoOuFXFkZEiGU7XKz4MuqZIq4Vw86LAaaAwGpBo31d0HfO4w0lM6v6fOS%2BaC6AqkMBaT96kqV0p4bUq4MAw8wftDcosGHcYkvJjEPQogfhIoqqcbnOhEhhol7tuPqk1YY%2FH1qYxFxZhS8vxVSMt1jqxWNyljnqi1%2BRb%2F1CH%2B8imkv6lHuPpmFLp%2FmOzN3KlLGBME92EhSKYILdOb%2BOx9qLwabay&X-Amz-Signature=dbf6d21fa24bc85e10e2931182d8519cc83bbd36a9b9a5841b81ea78ff568742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

