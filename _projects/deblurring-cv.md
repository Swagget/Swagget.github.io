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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTNURFU%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T110957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFebDq72icPFUx4QZoh%2FAGww6VkIEx6lfOZjPMxbzh1iAiEAnbqr7Ht%2F9R3rcYcFXK4M%2FUUhpUwRC8XIy8Q6QG3JA8cqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ6zEm4lQC8rXSvTSrcA4VF8RMde59SBxAgXeh0XMm1BOFt0p11rH%2FI0AavQ4cRE6Nn%2FampYwW5ECEDIc2H%2BjMcKXVaQ%2FhCPNtBnDT1fNxwxGmTSorKFkseMVpMrJVTrFAb51OuzNgeTKeaY5mfwYtfkiuUpHCmQEHVJar2wxvey%2BJk3F5%2FphlwMTQLkgsLZG%2FQYOhWcdIlAW8Vo73Tb8zhOBKjxL%2BkqEJPWiNSjSpCedIWfogC4LPqyQtnWeoISDYPvV8VSy3ERvz2w8YdyyRc%2BQBid4vbUrlSAXExSHznhWjk6qhg7bzTW9sPEiAusxsZSHnYaway1vZ1fR3T%2B0iNwpVa5LqN4PdITQ%2FUsEZYnaQlV2fLEDw0T2axkYo0S%2FsXvvnkZV0ccm0nooQvCJRk35IyZJwpCkpNMtx6XXXghlGqK9RK8m3ozJHQj99zaRFR8qUTra8dyOwaRwQwQ%2BVH53tGK1i2UCny0RUPUguGwhB2mTL32n96AmrHhENSh%2FHYAvzPvSg%2FsnCEIQa1RbOZuDBNi34TPqjs0bk6wYwSL81Y7hDhxTraZrk1iy1MD6b86%2FdQC2n6zqYbGlnEBFzaqTI6%2Bjj%2FT%2FCa%2FNTUpB2Tm%2BXiFXsWWqY5V%2FEzbDnag2GHCJ4GoaNvWWGAMOzUqtQGOqUB0bX7DZ%2FRDkL258eDnq12OlP36P3LMZFOuQFX7Ih%2Fcb46VQivsJz62GR2b%2FRrTQOew542uVg%2BZlsOZKjHDsIZgkMTbT5v9mVkANRoDEFs7%2FcMz8XqcHza6Ccafza29X1zCdqgUssiUgT10x2KSptL%2FRQci7M3eDnnzRWxvxuwcpLGZDYHUMtdEbx55BVRwPHb306wn5pMfwsQHTZikbVBOhUYL4BW&X-Amz-Signature=cf614de126d92cd6fc09c6c3165df1b93c7b9128496ac4c255f5a8b9c9a77df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

