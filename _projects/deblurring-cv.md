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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JL56OLH%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T084547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvfV8UAg4NKiaU7xdArdM%2FRyVc4YhVJE7Nf3isXIi%2BnAiEA8M%2BjQ9AWfQrg6mosBi73P6CQ5sUTB%2FubMOst%2Bc86SUQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDB5B6U%2FG0385LgVygircAy%2BxvjXMi6T2gmjsuGfYZdMgut5kNcex6NEJFZJTzC0QghpfjCLWGMxeUocpfGmgNdgfp921ieoPcTGIFupQFmdbfQyHH0BvYDTjvoiV2jAJHi95h%2FqF9ljtYoaKpjyAhmJLE68YZJ1LA6CMOv7BzWewqPgAAo%2FVujYyMzZnNYVEyY%2BOpYd4faGl2hBajiSz6i0E127WXgveF9ITPgnN6Bv8c%2F8lxjLbBCLNZAAEjMeqqfHd7VavhBofZLn1seeHsDDMPMZuAh7evaKqFbxOW8HFSAIW%2BUlfvYvPDqt7DmJSLK1eos3b341JddJ9QF1v7cEBdeE58RTovPIl3dgCQsCG0J48icYRpOMD3DfAHrwDLmozMHPv9XAWcqDm25Lep%2F0%2FKnogVYofxAyKMxOxRv2RkrcsR1ovhj9323uTDnLVQbhZXWYKcjqix%2Bqd7W7xotfHpcXc0BXc7eCNq4Sx%2BQDeLpZlB0OE3ec2pxBhTmG46Br0Q6h0BVWhahLP2MSR8GCNYo7Td4VTz3EQBaveGMiLOVV6EuHF8Ews2UqCRBiI8Jr%2FgIbpLyyUpxqmSC8z1vrAoxjDsv3xSyHG9OxZCKGck2ZNZvKAsAwvOANGvo4jy%2F4H08GCmUOlaBKsMNPc%2BNEGOqUBTLxkn%2BjINHzqmD4qVDV%2Bcfk9M9voT8o1kwK02wE37Q0xYtzEsV1ETfxeI%2Fe%2ByYF2Up4%2FfiEU3nwl5XJdPy%2BWPY5Qe%2Bw1Q8fXN%2B%2BH3b4xfWJS0NEgcmuusmmWowNiq8ZiCI6INtj4CTn3%2B6SmvC6t4bzQy%2FZhVq1MBob4ylf%2BVsY%2Bj%2FI6I82msNojt%2B7T6d%2Bebnfjf6XCKN6st3khJsTZzeVi8Q8f&X-Amz-Signature=91e19b4f779b6872f0b9e8e257b91f736575ef64f954fb24fd8fbd27f4427d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

