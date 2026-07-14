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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HT5R64F%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T070059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDe7xQ3jzMVQNUeso4Gb3bcRyWjakdTZgKIl37Vkwd35QIhALUKvsHJND5emIdpS4uQHTSEuhs3%2BvFPgEkLtWvt9th6Kv8DCA8QABoMNjM3NDIzMTgzODA1IgwteMJKnnP%2FDuQfLEEq3AM0ns3Fbmrzh19Pf3VyCnLNBtGgD6OhHkQlIrHsUPi5ftdU5oPdlmBCwU9hhzDI42QEddeelNq6%2BbxNNAK75ch3HLwz805hwC2niJGTepzewaaHeHwxUfFM81YIMMNP84MeGTFJUiwxmc1QfcWWC%2Br061VhSLSfnKNbLO143OurESBb50RyX%2FpvuJHseJZ1uQBTGmAbR3PacYtWRclA%2Bjr8DWFD39tKr6DpryafkAmbjiUvAMWNpcf2%2Fd17i0j8zYdwgkvPaLxuZjDNhocYrcyYYGni03I0tI5uCECnH9mDGNkqRyA2ibVHClwIKQeSOjfNzumaOMxyL5sn3T7cA2kgOUnwrQBhId0uAU2Z08HuBSBK3e4w2rQRPvCNhc%2Fzeu9AO4VzWjMNkBfGRDZPdysITD6TsCyMDhGVr1BRg76%2B2M%2B7pyFgnbuVzAmG%2FgRWzdAxK%2FBvRtiqIrA9dPKei9B8PnzuFQhgdR0VDBKEC3NXWoQLPPdkUnhXOJOuqAcQPhgklaKBjDpekJcEG94OVSGo866IBdA4mt8h3Tn7FWtODXZIpFYhzsO%2ByteyBaMmI5Otc2bdZlz1sKUjtRxoPSQqFjOQAIO1fFNyPiHQKuMQeMX4dLRvgRhsEvFLmTCwkdfSBjqkAYtvTykVHPYKVQi%2BWBd6Syi91p0jaHcGXj96GdOYZlhmSQZDejD9IeB23CRA54yzGa%2Bk3WNmzYERyoLW%2FiOWwOLqy2Uj9SP6U3xZYS4ZSepZ3Vr%2BLu0JS8doHZ4IdouvjyNwIzptTEWolFUcD5SAgrte03jsEPOEj8iAsw%2B5tzNr1ClyoGEWkm2xhzTEsOzYWmju%2FXgrlBoW6jFVI%2FgSdSS1NVcb&X-Amz-Signature=00c5908bf6f7704b2c5d34505310f342f70821978fab517370603e6c2652ccff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

