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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWUCFVO2%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T233849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFCITzNFiwuF81xkPYCkrrTy624UAzB1WlaysvQ4KP84AiEApah%2Bh24GmVWMgnLvIp21GBtO8Stj6IUFdFdYtqnSNrwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGopZGvRWNFbSnOkzyrcAzNZZteoTGU2S8AKJBFAZNtUjuBglbgYP1%2F%2BuyOanDVTyPgTICv7Y8TkuaQ7gt2xkI8wXKSDn36Xs2XRLaXj9Bio42uuMebilQbuI3iJZOchKMI7ozGhYZMBbn%2B0JC1I4BH9BOM4VtcNRHEkno2CYFeE%2Fe8rklTeg6yFf5tHdEj33FXye%2BtF0OWJKW%2BoOa4g5DlqlTbwN45riDVFJyRcx62pIP9xai5Zas0eL%2FEnNGg2uUIoFMBVXgny5Pm0nSaTPGASAWd4SCGFL3%2BYcVnBTb7q6Biim0qd2%2BFk9LHdKqyRtdmWmbnDIUHc7FuFQFabjPBIdGKRDsMXFqvfhg%2B44GQzPkVRSrx9hqciP7s%2BvMP%2Bx%2FVh%2BNLH3TlgjGyxH88lN%2FG2rcFNMmg1EfpEJFKGfe2Q1%2FqxZ%2BDdU3%2Fac6%2F4bnj1GHQ8N1EUV8NwxL2cPCzZIfa8jCSJOmY4MwPgoMQAth%2BFOef4n6igg5iPuy%2F0b9AcOy%2Bsj1EGyTkDDSWdDqtO39G6lLqpTN2dsqZOo0SLMrnaJynzhK85N6Mj9VlXTm5Cp5SpiCpFDSgimGUwYIYRP85lQB2Y9hVFyXMq%2BYJD9MV0xbi21jT1omHtcPggvQN4CG1Ls6KVWbnCIjrNMJ3L4tQGOqUBl76AoxVwoI3p6v61XonbYrTlOBMFK1xwUeh%2BKG%2BNbPnnxpzPCWtZEjL11bUyZipI3yEy24Xf8TAqt49V2uGcRZCo4IG5tZGspioiHy4S6pvqHhm%2FUn%2F73QVSiPQvZt0yI%2BZLJfuQWgeQTB5BLH85JjzEFR2N35mfKkjHjol0GqvnrM2BPbuI%2BgWAbyl2%2BJ%2FLsA7JlnnvuLLZqn2997fvJT%2Fctkw7&X-Amz-Signature=f3b4c657ae1df7ed09ef8aacd9b3b75f49ed45f6ea42c4f6766dae59e2318918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

