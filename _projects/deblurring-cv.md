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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJYLL3X6%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T112412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBWeUGA0it0I0%2FUMleLARcD0dp8EI8AF17Ll%2FfXleILZAiAxScuTI5qWQToXHogdRKM1bts3IJt8rf2M7SNilKaoYyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMzm%2FJ6Zter8Xms6bcKtwDoHPqQx0AUYDzkrHlOEGgcEQqBhngnhE9hqLPj67vTxT7buWxblZSyP5b63MalOcPrMNyAFQ6G4cqPrbAWp9DCrIgdlwMmMU11EZtRWJuh4oIvTuYNjNjnRgTiIAhalWkT5GG9BO2lRvny56tNTeyxFthcSFyqsAXtXqkkeqEcXCX7pMKnd9E8sLr1DqZxpvCJ5frGj%2Bx7wsGfxpi2Eo7jG1Cmi25TXULAFMOV%2BTb0wz9NkNonfJBWANo%2B5Iftdrm8jku5EkQlS%2B5lMCxFj67cBFAbowGLPKA470H9L8TtS7F3it01eCpXCA6aaradfD42wAW5WH18lgW5RsjfHdPJO2SR9uXzfZ8awB0zKlTnmp5YyVT%2BD8OFGwyKeFQRyoaJHIofK2llWjtsUdj%2BgolDO0ccqt1ZHyIO1s05Dt%2FAstYOjKKq1xvnM5Mjv6GJXklZAdj1TpWWsLT8nbPNDpN6udY%2BNV2QQaz%2FxkLJ44vLddK%2B%2B%2FhRcpSeV6BMndCw9s2FxGayVz%2B6tK34uEjrTKh6fBrueb%2FQ37iwf%2FQFWEn8EPh95OW3qzMVO39VRCI1PoP89%2FmhyuwymwP8OfhsQoBSooOY71swOWL0W5ug9t9sBQI49EBKgt8VXkfaPowwtni0gY6pgH1So0hoCsIJmxi%2FCdUE%2BVBHuTDCRKOnlJWNHaGMSQimVapph7oQFDA3g4MYcoEJjAxRRHOiF1YIVM4vlIPch1u8JKXlMXkmFzRe29aS2EMGmY%2BToGIxBDXNfYi%2BK7922UOO4uGm4LQUf9UxLRehoGNosSpI5kHD4g1wkFmKLdRdsydo5UpqItbW%2BbzB45PQcNolBmcZknazNJ3sbyPvPhLf2kroZC7&X-Amz-Signature=9a77797dfc79f7c47e6c0b5cdc6ac0788ba5be0a2e1730079806430f0ef31d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

