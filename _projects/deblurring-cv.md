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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHNNNLV%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T200307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDE%2FB2zE3cOzw83BGTf846AAbF0H31WyR7lQ81uD2pAOgIhAP9C2jm17z274cTcQlPMGUzj939x5HUhEwF90BVrGxwrKv8DCCQQABoMNjM3NDIzMTgzODA1IgxLHJUdtrTf9AhZFTsq3AO1nBdFICUhbsX5E9IklpLYCt3yE10kiOt3%2BICfjiby4jqW%2FNrO337KQGrNmWBLH13RgA93NKipGkxtv0I4FLB0EWGR4Z5wCjngQxR8Vtc86%2BxU%2FMaDuEwFlH65AI1IAfKHLZZ89ahq8q1pQuJcCo6pko3FJGR1nDeAw3OaRPEB3AFfdwBsyciScq7RllbAvriTQMzMzeMFVaD1NMueLdUlOxEISLFpNb%2BPfU8TnnsxNMxKiq%2BFPkjjUa2vc8cCQoVi7dkikQ%2FSPBPF00LFmO3wWhd%2F0Inc5TbkX61mjYsx6z3lKC8I2p6XBbBVJen%2B1DYaIsinN9n96HFfThh%2BJNOVejIlGLgqUr5k6A8GZMFtzvz0FJLSMOYbDfwVj1R3fGpWSK1y%2FTrtCn3ovtgMJUq7m0Rn1axC%2BWQ4Gtg6pSmdB6zLNDSbyQj28Bj3IcRM5BfJ3SljzwpUUPice0hxQcAiAeUKGSshRmsac5x5fiRrHNkdBSxb6z0u7%2Fc866%2BiuSIRx%2F4PMDud5%2ByMzSeRaQchXwG%2BwJ6LANbGcyPdEvSmzmyPyLVWPbzX7w4BR%2BtQ0DlykEiSTPSenUswvbIWk99e8joIt7ckOA4WLuv7ITLH6hEqdTnqkIV4dgTG3DDWjpTTBjqkATzUef6vy3LBKw2BOUp9PT%2Bzalvz%2Bd8eBWVnM4aq9M5boDiMyfQhcxhwgeTxLoaxB%2BXvvSzTxW9vRlkaLaY3wAQpjie1%2FbpmuJDrU6156KGDOLDE2xWJ5pmgg5%2B8aYBY0HsP%2BfrhN9fOhdncBlSmMnL4fZGx2Z5kSWwqFDR60utH2M36U5xKP46WRZdlwvkIIhWN5IxYzvYDPP9pOos%2B83W97YvP&X-Amz-Signature=a374bb9e67a81607a218fcf03541c3b3c95e7761999030528567d009b2f1c2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

