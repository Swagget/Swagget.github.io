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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THGQJH7%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T201112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Fy289Ez%2Be%2FkE10qcQqrnH0y%2FQDFfYMcJa5m8Q2oXETAIhAJKmpslznUqxT9EBbvWylgtmDfxhk2zJ%2BzsUbn2TPn5eKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDBT1oQxu3DdmCt%2F8q3AOTBDGpnHnLHT0sY9V%2BR3kybOALZaS5AB12Ygj1PA%2FwzON%2Bv9TWLu8N1c4u15DcK76KBLeTTaV%2FjxGPTT2BI%2FydEhCNxZzQP5kLvCFjWfAzD1m%2B9gXEuYhWt60wSoRKJ54ZCjsFXZhf0hy02e6j1yc8gn8GXl5VSSWB2wKb%2Bw5g%2FsUU91%2FL7vD3rO3djzjMHGJ5Hlzgk7HCU5HV6JrWfdDYNN9lIBPcQ%2BtNroOoI%2BCt0ul3%2FZ4yry4n%2BJNtffQeDd3MCRT3IlzcAbc8FjBBYn4pjKyXnSOE0XANvmctXC4I6nhw3lnWtrP7amXNN8qWgIEUPBQ39zKHY5CXy3HlPUFP9xq%2F5pTvShfGEYSyFwb2ca6j1ZSrG58PYwPhNRupJ%2BzLBIh4lNZ0F2boUfRlmqcWiUFf2TgRH1SOwUkkjC8hgjZmHc3xs0CkwhZcCKDCQ%2FQKLSFTdGZGvpwy2K49PomqkQ4LaT5R8wqRsgTfFOxRbSwbcCKM7Y%2F1QUpImuOVwQyW6mlyffeG8bpYO2JtazlS3JYw7bfJPq8BKvd0Ipd4m6kbCDswLSadwA1uJG1Pvxj4%2Fyfjm1H1R9Jfzos%2Bo0SC4gCGBm26aaZEzxFz%2FWqCKIU5lFdg%2BcyIZKGxhzCtyaLUBjqkAdF6aXaSu%2Beo%2Bv3F%2BLf0A8wqfC8f3ClcARfKvMLASS%2BedFN9jwFmel6hPiAPDsy%2Fbcr9uaFSOwcYqSIPXtcNJG8WwE9yLAZEln75rSndPOKihh0uHVhoUqS6fhKeeiDdeYZq%2Fu%2FvPDe4W2XZywPFYeD9oKHqMag%2B3G1Sg2xOtYDViI9HciMRhhflWKqD5Majm789CdpLwZQCSM9tefCevewxwcH%2B&X-Amz-Signature=db9bad0d47760f0e175bc4bcc1e592a525ac64f3d9bd89f60d589e5f5dcebafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

