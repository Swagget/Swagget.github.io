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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZYARA7%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T042726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGcW4Zi%2BA7vIoMro5XRHYQw4FMT12QjcsXOPfU%2BfeJamAiEAxzWEes6XLdj9qjUVTx3idjfF3%2F1H2rcwfhBR13CjlaEq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDODSYHKmYfZ2yhP6WSrcA0QKD%2Fx2mqKEukQvt9Y648rU%2BWaKyV2%2FjChkjw16MZVlMr9GJXEqg3j9Y5lYSaYd4TtzVsolenBn%2BqNRyMW4b1SMJICSzrYqBNqKjqmce%2Bt8%2BGA0ousA6nhesPgDTtcljJlZdxU8k7vnrKgbXrApOZa%2FUo7kKdzWgUO5wJqBct8YoDA6XTzZ6dX7VoWjL1tFGB2cgZoxIIIRHsdsYdPb3D6H1t3d%2FK%2BEzIDlgdYyoZ5vmcie37%2FBRZvogw6lqosMe32Fkx%2Fzbnooy36Dhkm6Dm8XTbF4iKzjxlY6ryO%2B5rANE9SxygyjMC12%2FmqNG2EwnjtlNP6cQ3ReVMDg39Vh1BQf%2Ff8sDjmHga4A8XPlBhqRLINTvVgBPnM008ohtNRsIR63473lFI0t0wM38KnX85x2HFc9y73hA2CrdjuGphqpFKmmI3Ewv3712D1zS5T6CL0j7qShRrmIin%2FJBNDYxHcBr%2BwyRrYe2dBQYPc%2FhzA1%2FET0r2UsIOOIvuCRuFkgx%2Fo4V5dxY%2BX5JvHj%2BsPV69ChOoU10UJuQo5xLiQsiNDpPKR9IM%2Fs45r31RbB96AqHtI51VKMkOsW6QoZx3oNdzghTXQipnvn33%2FfkT3VbgrlN3qWp86SrmaMBaAcMOTTudQGOqUBAHyLUTAB9TEBGgcv3%2FPqJIUP%2BIG7XuJofkLnks3UbD0n8a4cm4ugLo%2FKNyRLiKbbnxWQhsidhetA4zkePFAfki%2BJvAjrmq7muqUzgkdUESn8OJwkyirJ2smXGc%2FAIjSHNHdOX9UM1PqN8IjjapfAyUlIEKo4KLUV7dvtSn1bVMJB74zliJLrEMuKFpQROwoIVxRIru8dr8JYHlxCvfIWxtEM2Rg1&X-Amz-Signature=5f6566a96bfd970d333f93576c963cd61fb3b43cdc9d43906cb103c5eebad96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

