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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QB6UQXH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T190404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDoFIky4Dk1%2BjRT64iYkh%2FEqOSlL%2FTtxEW6um84IivvJgIgLaMT6CDl3zZrRR1q3rGajL%2FaxCy7S4f2OihKi66sUIkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDi%2Ba0Kd8CbTl8XrICrcAwMdGewFHpxTCu1sPehYymyySGRk2UVWUZEfdDHld2vzlzFh2i0hGN3Nb7f4itt2b0xRqT%2BHKffxYY5iiWsGaVUdmSOrb0B8unldQRANHmhY0Szif%2FzM9V8CQrTP4H4CmF2bc1nPA4YdmkC3VJiDLYz35EKIeXqzaiAnRtevOzLmKINMNcFao2yB66vL4h8DuJiGCfOO2PzBjEBd59q4WAqO%2BcqO7e4B5xkDgZl0xieQ9%2BShszEzPkNQnqDXUoVzzA0kiWhTFPMW%2F6%2BrTCVGlViIuyqQ60uDQLsYSSQjHUJ3lUtHeFWOmrEQW6WaRyLRZsbcaOiuKIitnS8HjPDO0dRXsXF1ErEVPaByd5Z05MY5gKxFS7ScFsUEo9nbqllH9jwP5ooMDAjYNdOHs9dJCGe%2BTqE%2F5lGclzQQZBb1gHfMi%2FdSMNhAQ1NDqt10%2BdX1cyaKHwCeMxNhnweHOeGBlSqFBasrAGFTMu%2Ft4M9CVJ1yvU8pJXDBHfIDWD031PoS9QVNG%2BsROoP%2B%2BAaQLQds%2F%2BPhUniwzp0mG2VZyTew4omEsFDHSkhsxM1mS4hrRNjy4Fyclh%2FZqKjDipqwck6WPTR5VjzRFcHjmJ1UAIMreTQV2VyZwwxGQroFi2i8MOilttEGOqUBwHrwCYYp1j%2Bjdt0yH2QUKaNUTNA3298XUlFt9L6%2FNQEsmKkTLoWOq%2FX4E5Jyr2jMoaA6WE5pDDDAkMPDdjodxHyQNno8hXixzWpGDhyBc6VKSMih%2FgPAeJ3CPe2lIIvXkbes2F1nmPiFvPDgd1Mu4Lp7rlSd8IKeoZjc%2BqeH1KZy1ahSQPImt1RyRJFNRrR4%2BJ2KuocCdtB6C1F7PYMpRAQNPgFu&X-Amz-Signature=bfa51e3205d4cfcd6a62f68f066c8fc336205fc9771517f34df9afa735af4bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

