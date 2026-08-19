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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UII7KEIY%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T171527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoadNAa2d4vYiYN5JKAlIa84QKoD0l4VS7B1uxPZH%2BawIgK5Am3jJYJHUSITDSb8oPGIsdk82%2F49hqc%2BU%2Fi5ZlvMsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIpDEKu%2F1%2FPXP8dT8CrcA4msEBPG1fU4GwZI%2FChKfznSa0UVbj6FMbJBRBE%2FQQkK629Rm8KB58n0lzZSpqpjHBEtCR4j%2BWWcIws0uvleGrcHJ67R%2Fuvs51S2bLVS9L6kQqGlCmabKAZITO8rBSOgV7EcwKDPjoS3iaZFm%2FwKMRDFBBTNtaadFkXWym6CXpG1nRYcy4FYZL5jJ80T3xLCHJYubZWPtCkABv9z22UqfLXYMAiYwcBxznlvnv55qFqF07Hvtt4dXU732v1R1j5UZTGMb81Dy4GRIudqucoSbJn9KuR88ULRuQ%2FxNsqA6l9LNi%2FH6u0b6%2BjWFwlRuJVv1ooUHZ0aahkCwwZ%2BunfabgPQ%2FZ9XPXxGkD3O%2FU628oiJmmrOE%2Bs%2BE81PtWBTqfh0HsRNKIhWfKQiRfNgP6ch6jhY7BOm2gJwRIPzUnfLZCghpwJYFb6SNOEYAK8fIlRMTHYqbzIhkXCdR1kMZyFwJCm2ffQ7Xu7nk0PrK9kqaUK7mF%2BY1JhOLf1jTX1XVKfBZmVWA%2B%2FXrlxD1z8tv%2BjbD7yO6Yk%2FSuZwb%2BjF1zI%2BKTeHkv%2FZYqsKJ%2BC2g2kUvoJng6MCLyL2WAm74gQfr9i2Jyo0%2FWrrnvMF75PX3uO57VZtTDQLIAse73gGe42wMOuWl9QGOqUBWBz%2Fc7vbcBvz0v3URjeQacS%2BAs2X%2FJQ8BTQxSBL8l9KOTgOa4zTyKpQ7fOjWMiaKmCEsw0JDKQk3lj2w1K1S4d5w1Vju6rZgq%2FTGHvbg%2BT%2FYWhflDLwxDrJtYGYVkjzAOCPi3rZeaYLS48%2BPGRM%2BeJ62resKtpFGq2Y25y6mww11O1RjXmZVIzq%2Fi%2BL0wvcFtnKzVwX3iuDS%2FAyRKjPcOiSbJ0V4&X-Amz-Signature=ef1731b67ee6af7f17394af8ec9c9466388b8d0b376cbf79c064e39293e896a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

