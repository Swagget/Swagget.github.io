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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD76BJ7J%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T231550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5VlACSztb86axwvSa0gM2SCCNdpMngEqzeeiuPPvyoAiEA3i9jpD8dI3mRIdnxfC52dTPfKyqm4kmT2kMWg%2BhKK5sq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLU452B9T2%2FAjjwWbCrcAzPfufPyrMOS1eOP3G61Xz8raIFkoecA75%2Ffmb%2BRYvHasBIwhuRBMqJu3G1p7gzxAwnhkJy9eh2aRVrU76QryQQS2hMd3UaytB0ZrG3c8a%2BlU2BQgp5D%2FTQnWARjfKB5aFZLGWUQoDbhY9esqOxDzjjOROFd798u%2FHP1xBx80YdEkMezdiK%2BC0PvwC3wGn5SwayHc9anYKgR9XpP3sEOX4KTu0K7Q%2Bg6SpZkD0OxdKroAF38iw0BnngY3gXqMeA0UOk7fF9mwvN59eewNy9rPCfCCeloo7SUdcK2W3CpXJGpmYeRFDGph5YEy9X2tqm%2FsnzRuVDc5TrA%2FN%2FywBXt6lbrid41JZ9QhLSLXrdslNWgUv86dyC7E18OLYTe5H%2FhrOsp3L8rCF4G2MpiLyWnVOc0RPAjzjxuJqZFbRkXckzSFEAI6fWI%2F17e3r8eUfy8%2BMTnC0tBkVwxI1CgOS9B1YW1T5sCsDF9Ko0h5UVheECngyxacEe%2BqpuU6toYecGaNy5%2FcQ24xkR%2FMPEDTrNg4FHYLcVp8TDh8Tt1l61fZcdBnTLQZZ%2BgYh3PcfLdDgc%2Bcf2vxcAuDZPCTsTUMx5QMh7L5Ebp9mZ6Wfi9V0VljlY06CEqtZbzFmCc43qIMLvW3tMGOqUB6Avejg1rk7itHpDPEDgEIHu5wonA7V7vz7tXW9F3Msj75Vu9xBCq6SrvqFFcJLAcZbXUWb1fjlFRUGGZwQiyRUhfrrfnHNrDvnwQRGwPJeokjIFqrWmtYPGZpDFW%2FdH3qX10ipT0njFp7rAU%2F%2B%2BBlPU9QXP%2BfU%2B%2BY0Ol2JQ2tQSwbkKK9pz%2BTSW7VgOa8KUVBuZJsrsRWp7KMb16cUGOvwnv4iCh&X-Amz-Signature=4548f980ba56ee45d2f6c33070ce06b695b9b3e691b039b2932f8e3d72691591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

