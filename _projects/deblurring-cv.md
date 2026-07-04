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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4EQ7MX%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBSahYrwzgp7j4WosXv9xIQ2wek5bAPjztXZPcc6VlSDAiEAiklleDNc4vI2g2LcQNtE8RR5iPWk8dbVqUXrzRcJk8sq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLPTqOPVlVSvTHV2iircA%2FjU9CjBnUrDSw%2FyPo%2BptWnr6O1wRQaFBKG%2FyeyUkg0BQSioN%2FtnWbgx3DCGrOp%2FzsP3AJ4O2GbOmfPKSpty2ZxKtDHs9C7pTQ3B2rEcTwmRkkqHMuirSuNlykFVdq%2FnEvv3IGMFMaGL0a6nvPQ6s0ir9XMDHLi%2FqHSefBRV8st7x2sC5Nh6C%2FsPGwr41%2FiBvYNJbJeWGcm%2BtVnWzXeokDMZr6xP5u8Bn%2Bn0GbpHO7HYxB0SE%2Ftz%2FuO78Kjg%2BAJNg3Q2xxl6vZLYBc2g9bnMKIBNsYdPThHgcV5atpodYvbtacSKPXc1nNO4qdIJ%2Bs2u%2FnRwevu%2F3tO18Ek5tEaPJ0junu%2FUGRyGdUxlhcCP971Xtzu7pOo3xBiOVmxhgBlLGLWOYW4gQ10156fcYuNEI672%2FiKk0aKTtV4N0oXc3%2Fva1kFyfA5eQxP7e5oyQo%2FNHc3rk0Z3bscay%2F6A%2BNNAFd0miV7Sftgp1QeoSUKkTVVh%2BqZ4U224abf8VqwkuPeTMyW2YPDBVf1G2yMJeV6hw6sw0j258QQ4MlDzmI0U1MQ46OxTo6i%2F7ogFNZ7PcPwKBzGzwqub5Te462pp92QioIdCJdwHlB2nmuCnLxjs0tLDlfYlkqaNeYI5IxkOMKKfo9IGOqUBvD3fsb6EsAeS2q%2BW2GH%2BtspG1ILLxxn1mpsJlM60%2F7jKfUsFUIErrg4n9hMEhfp2JHZPwn6ztrmJd7BjKShJrf8z%2BfDT7%2FLxwicoBsFvbiqxk5Ahw6olDBrBJGAhbFPk4iijBAGnf5mnWxfjYS5vu30rdJ1Yx7qmN7Jmr8hddHzKSp%2Brv8jd8JUHOmBoCvmICBtpRaXuzq31wZHIv8sWPYgR8d44&X-Amz-Signature=f7f4f037e2f0f11bcc6d067f2fa12ebe7b25ca931415ee67e2202675e817076e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

