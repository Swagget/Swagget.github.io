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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665FAQZUC%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T211459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDo1Ubp8SR9vPOtqAq6ImGGNg2ZegvEWaxMXRhSiyNKnwIhAJ2bfOzucS%2FiCrIEn1PP7WuGYgo16gagBb3EqBypkqXBKv8DCA0QABoMNjM3NDIzMTgzODA1IgwPaV4IxIwGgmsHLsEq3APqL39O%2Bev9%2BDIuQ0zT3TpKBZeAMN6Pu3wUVyTn1AYkehat8T0zXlkWmVUqCono91HoiTdRLZYojrGhXJ%2B3BkGFQNNVp0vfLR36%2FJzNt90eo7K2Xbd%2F8aqrrtpiybkTkkjmyj18hYwINRxB0Iv6sQu4%2BpwOaT1n2pnAQkIEE793X2GvzIhuLBgkkXgGWqWlQ0D4H54ilgYziLJFY4bEfHwEsaPq7OuuKMl5bQCzROEDe8C4lvqKJxg0Mpufr%2FD90un0dFiNKMpmnCiJ%2FQfdkwgdHBGFNN44bi05pKrzLtihywpRC4YYg3E%2BRr%2F64sQl1Nuloc%2FVBjGLjno7dEPOAIsh8q4l9Kx%2BUPak%2BIZKcT%2FuwfMQoDIjpTaKQwS86MKpNDWqwvH3NMh0KEib5FditqH7MnDLaEiTYNf9yhIwIsyM0giGnOj3X4QaF1QxAkRz8Mp8Xh3gBTF1NMpXmBuZZpB3B2swTNNysvoOikS2UhGalCLdOqbz7dUfcMAt0WLKmCKGCOxZUPF8HeGEt8%2Fp9C3QnmnkUMnsKqGXjnM3qHXTsPfOPfRROtqtm%2B9xnZ61OB9iKC1HzFYTCFl8O86%2Bf%2B0yIPEPfLh3O1HDN7tXbcTNBPyJKQROZiSt49HaGTD55rfUBjqkAQUFUuv7baZFsffkxqzz1POCN%2Fh5vAib0nRHe8%2FILx4Ui%2FtkVvsOmCtc%2FwK99oldJQS3%2B4TzXhO6yQ872IQFJpJD6ALUHJV9xH3LEQgEhiPm93VCMKfb29KhtVV3YD%2FW3F7hNlh%2F54%2FuVYpCSOctifUh%2FhoxpEhPcdVmoPM90izQ%2BuTYDNx4IsNGqM91Y3Nu5pp6SSYgWdGKmxQcpmjAig13oVRX&X-Amz-Signature=3c637219bd81245f28f431aa9e4176ad086e3ee790d570243df9e0fdb7a1370f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

