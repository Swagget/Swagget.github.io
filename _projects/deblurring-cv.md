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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3TKD2BS%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T232640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoxMoCt1isPp%2FubYcpwpbj25Q51FLPBPCiKtxThwsdJwIhANlnziuX6efvbnvkMaSzbgNFefslBbVzqksEz7AMN4A3KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcZz1codB7%2FcGdArYq3AOerKvj8c68AGrrMX2hBWeZIooBVSrkTqnWCto5Ru4HbMJ7MWx60RuSM%2FmU7nmn7cDZFxz5IH%2FbsoiqjI8IbTiP55hF9TL5gfgQlaBI4ZSyF9c9BIam7Z%2BSSq4O92gMSLUDYR4EvcfFLwmE4Mffm2YCRm1b7Je2Mk23yI1QhA5TRvldQfR6RqzALwiQNE%2FFc6fBnmLVX%2BJO2pICoyaZacZZ1HUwEcqXH3HPVbAiWFdQ2hWu7matY65elXBXlSq1CH0xLfcUJQ1T%2FSwjE20wTMZSYE2SRIfkWZpedK3ORqseBtmetWYQr%2FalZ6Vqn3yFzqkLJKLACVGqe7mJq80c6I%2FYBtdRemMfcTB5qb9TELB5FeAHVkCYOVQgJ%2BMGQ%2FPVP4%2F4PPhzp%2B9jXNugB7cKJ%2B%2BIuajUJYkJQxbDHpc1CdrVJdXuVeqNVxZlDC9QzYMSrEwiV8jhnb6DMabzbb6ElvMIkUkSc1hnJM7LWiXz1K8MYwh9IiV%2FVDJ%2Fy9lEcl8pNM5R5kfOnNpcLRXuNBBdftmXlSa%2BTyWszuPOvCJHO6Yri4B2nm0iguQ9rDeUJBLt7aXynWVus1YIMoz8ui5Z9ZaUvHEWz5Uny3mXyZ5XdlwR8RU5VRyNv28cA0T4ZTDw4u3TBjqkAYeGqMKB82XXBnrcWVcsgIXdgC4ox7%2B50shg9KxcmB063hehR5Qyy%2B8UysfmFanoIpwbaRGazVYCkP0Zch1LCkHc6F0X9I%2BZfb%2FmgOggqcrr%2FogfVg8J9molHEzA5hVptdwRDEzLNwsaUYpgZlYy9fpFDRK4AmP7rMZp00YuLgiYBc0KxWkC7Z9iT7pD6gN3ZZjD7wvqqqKAOeW9jRS2pHXRNjke&X-Amz-Signature=30c0c15867cb785870f4fb6d359e5133210c4a8a16bc3851f4568deb7b5ce1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

