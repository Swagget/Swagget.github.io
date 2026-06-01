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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2HVKHOE%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T194929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFcT89qwT2MeP3BD6AgfJEeI194IvnpTisAlEOVRnPRQAiA0FxrJtbeU1wzkWf4HedEJ6BSLz5WUg9DfnQ%2FHNjRTuSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMET5vDndVIA6UY4GIKtwDT6mjPebN7kgUsRtxxQfSzEuH%2BjYa4Y17WlevitaY4hJRbyg9gRqJ92TUUFkQNZaoFABW4HY6U7OV7yLlNEWj43SiH8I0n8Iim8e6zq%2BSFRycloQRh8Cqq1ZpZwv4PGiI0piN0%2FjTMrw9%2BDshAlbHPhYdzCPwGqcmoMoRVaYHrFCAMLVpfgJhSwfT4dnrpnpcGx%2FJRgcKq3kJ%2BR5preSBHqnSEroAMqPXDm70OxqbKcrkGkVOh%2FtmKfHyVi0%2FTX%2BWwyMUwuGCn1eVbHPIc4tmhtUG%2BuxflGecbow%2F%2BbOS%2FnZPrGKqw3J8yJ7eMQCeKk5wlVuinC6%2BcpYXrOJ9Vg%2BNDHv0DzSEdxBUfGqbtWJZkLGnld83orKXcqgMRC%2Ban4lhX6IvWiMp9NGL4Zczm8390bpMXqk0cIh8pZT88zsfvzgwDdoWdmL5sdsaOJuKzn%2BduTMns8q6daH1Xejl8vdsNOYtK2VYuAlqSv4Ao2TcpL00O4qJzfi03tUdFPfaqvxOzIlTS4RtJpRJCuFbgQWmJtk4pWJ3PUB8gwmleG0Bs96jvuDq2%2FmCtZ%2Fw3NZ%2FeZmEzfKGwT6ydb45iNIkF%2BnPsjUZKcjx2NkyDE9HgVFxD3aX2xV%2B7DlDXBBern4wwML30AY6pgFXsZnVW2NZDifmKnCi1wctwatYTOZAHrjAENUl27EdQn9qjHuO6k57fNTHJdd%2BBKdsdDlQ2Wz2rtLk3zwL5hDkc%2BeM3eFRa1lr0V1bAlAXyaBHMaAjeHROrAdCVGpLLvRV6sQPAzKDwGYGNdNVWZ1sy%2FDAtwnDiiNHuwS24rO2DbTxe5LoURXrbsFkVI4iQDFCuka2AoolfbmuhRQIpM%2FuMjjtU5Zl&X-Amz-Signature=4b8d804b23faa0e75c609f8382d3925badd1fa37debba26001bb647abd790b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

