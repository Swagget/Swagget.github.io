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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U3YEEYZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDTcRIqkeAPzxeXuNSYuAJNdROvTEHJLVlxOwQHLLyMFAiEAszh4mTcnM10aK5ATpHcfJspZ%2BGsB1dnXWZryj3AQxeYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDObsSZMK5oHdND8WWCrcA0Hx2DJG3GT6VBkLGthvT2Xzg3Mwf9GR%2B8t9YusVwB67rBZwFddc0QWsO%2B%2BsatvgDDgj%2Bm2wAQpVaA40ShadNuNQt4wjg4XzdDDIlQKaWYq5yviG8KasqnNAco9yN96kNJ4RWMlXQ%2BfPhTjyrhU1kpYBgDMrERtEhB1oxyaHbLA4ROpvq%2FpbXHK%2F%2BZ4ClDvdYUka72GPjN4jd21J8m%2FjukhvbD%2FclB6fG4B8BAe2B7DATCs2Lntpw55lkSou1KFl2qommUv1QQ91yj36xuxvzDW%2Fi7BLNyR7Lix21HABn%2BI%2BgT4km%2BR4xGii4Fmmqj2PT69WNKnZWY0MJeZljnfXLRhx0hUgn1qCe3FJFiKl8wwopAEJLKNyAxyiOfWyKmA0yFJ%2FTcPelKzpXbYUuR3MG186SYnauqXpJqQP0Mm4dYP8aud3IXpD2T1NVJgnMi7Kol0c6CF3KiZqPDY5l1fIdovQT3UO109WWQZSwV%2FdZtUTHrajXbc%2B3o9Xxr4Ozqt1KeMRjggH4EQ6besHESO3rtq2ne1BoNVeVXB1IMWYj9qBvqjQzP9I6KYuYkHe4ux6JfGuNAFMT8pWqio%2BEnbI46Z0EUqCncPMCTNRXtjK5Cn4Swby2LoGmIxGzHrCMJOdh9QGOqUBmi36OGPUnODuRbxk%2FQTzEUaGbQRfQwBRh2cM%2BnOGVoNpgaDN8Zj2BR9lYyWauQS%2BCPkklvquEHCCpSYj%2FrPInxdy8fnhuuzYNFguTUiAGyORnGYpt07c%2FMdDYymUnbqmOUmKMtKbUQmVVnVBbyvofj19ckceMP95qMdU%2FB1PVDGn9mogescsRpwX1T8osF5EJXO3OTBYlM7kOI0gpXxRTzMgp6IM&X-Amz-Signature=0c83f9868ce068099587e57e2e700e6913b703d5da0e7bb23c17164732b71e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

