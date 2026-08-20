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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K376UIF%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T211607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsZNmlzcwTN9VbEiye7h7RNtVPCTeDu1Y51y7zzsqcXAiEAwy71MNrqt%2BqW%2BP5jBiNpPESEoZvMWGRYKfOn53CV6z4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv82FOzTeloG3f20CrcA%2BWnPxWRgLqlc%2FY9Rs2nLvoIpJLtF3RmpiZEnUFImsL7yxDPQseIox8RN%2BR0Y0fgB1Wp87tIp6Uu6v%2B2wnBB1Ympw17wVZJLgvmXU4zVEzr%2F%2Fs1KmphprvOPnCvU8toF3dawYqhIoi3YHY9QHa6mGZmkC6qhz5bw2g2TkKClA95B3Fzg1IGJlRv79vvYzzUkkkuPtDYsm2y3%2FWb6A82iRLLztb%2B5ksemR2sqOrs073VAZjodm5Bg22fhl5gbJApEdfQy4lbOgap%2BHFqPkoSOX%2F7m1s%2F3%2B8n8nXjxokGRgTQDnZYt2dDFKmvs7lCJwHazFIcIfvF0ooOl67RNHp9drcFJR6SAOJ3kCy1yaOSiSMY6O6E9vwopBgnyNcuUeWzntgcr4eImg0X8yNIs501%2FRhr1C5POyobbkjVJKPnBhJr0dYH3hSYv4k%2FbhY2U30he9PoHx%2Bk3LDjbT8k9%2Fba%2BxmsdnCkcST6sJmBGWuBEaLAh8G56l1GI9jL%2FlBnbk4yKFu8HX1pbm53bStArL%2FGdYhlg42kuYdTTyT8wB97mId4YFwcbXd1sHslvQT1UV0Krrsx7ne1Y%2FgeKza1oFW6i3H4NeM3R8Zp8RObVbUHlyhC0%2BstAocDvMr3hysgbMPelndQGOqUBb7t0Om6o1xab2enmfqWrfV4iijP%2FlH%2Bm5D0ccFfQi8Eo%2BOVRUxzNFKM3VcZAiqLCwqg00g64R%2F1R6cQrmCvw%2FwQEyNrLU%2Bpg5DqLgNafsEnypdC2bKn%2B%2FZWywTKZFA7jB5feBrcCcQxnLeiIaZ5w3hW%2FGwjzKEQ%2FXh5UCHEKfiTHwtkzU%2BX94vdHi4bsJUhdSCGIpehk51ldjmjjlJJXhpb867q%2B&X-Amz-Signature=9ecd72cc6ca37ec81c356197b0b3bb8e41cc7ae08c3d0c1841f95aae419d5f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

