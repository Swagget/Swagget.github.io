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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MM6RFUI%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T201357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCDP5fj91bOHAtgda3bzNjgxGJoLMOILt9tmMWKQYhBcQIgAu70eMoRv1oU5pYpHtyCBzlfoRQnYz3OQ2oK8ZvzHzIq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDGclBIQ1iGtrYdoIiCrcAxj8KUUUob%2FVjVT1wFDHq1S4A1XB1TEmxEE15HF7kFxxAN46yRnsj5aKkrwquHswakL%2BMecZVbtIdsmQT3L%2F6ORzCG1%2BHfyaKWyeJpz%2B%2B5bx2EljILuQNQUjkpBjCK8PrOBp4D6ld7uBkop%2F4bVJrUdO0Kx1iN6N1RjWf38w04Hp%2FxaASImW%2F8eQ7ueA%2Fxb5%2FHnjprqFQ%2F%2FM0mqVatcZP%2Fzns2MVymqth%2FdYV8VKQZmoE%2FOOtYUj6o6ysO37MnEy0L1759p9%2F4Pygfl06KhL3FT5E4uMtRK4ufFq64BPblz1AaYiDXb76bMIBgqGsa5IFThUHbLlL%2FBygb4KowQAJTSKrf6Z%2FGmcX%2BwcyUyDvxIijh%2BnyJv%2FVp7FmcIfwSWfwzu%2BV5a4X3pjS7HWi3au0IsLQcLHy1en6ma9VfLwhnlLEIwsggeGaPt1Uz6jPEnge22dEd1AuAyGpMVAWdp9BqbPHSjMJkdkYYirRHjv6UKX5uRKWrO6VPBjIa1zbBtGW1hBSNTUWhG7Jzcm8E0W3eXbkFvTUIzTi7PMQ2u0IQcnyfqc3XCk9spBVp%2Fn%2FSUFQx4A%2F3kX6M%2F%2FO3ZaXKBDeEaMpOmvrvOD13BQqevkowKMe1LJ8iDlywboM3vLMPDYt9QGOqUBOffpMIyHhI3fbkZqZac7XPE7tbP4oilLkd9byhuCAhVcdqzuBT%2F%2FHpvzNd2%2BNwX7%2FnyPvNhpJXcEkytupluPMiTGHE1S3Zza%2FhmDaeCH9V1z8JR3mS5wswUVvHcbxN%2Fs%2Bw%2BSwtwl7JS9HG11h%2BfanI%2FV%2Fwxz1rcw46Fuy06pUhutPl70nVlxHP8kfeqIHfLsMTiKAuoSlz4Jqq3h6UibhTaKDxmw&X-Amz-Signature=e8c5fc7592fb413db9e15b4ce0c1247ccae72a88e992d136dd76198ebd75d6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

