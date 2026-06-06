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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTTLFMI%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T235421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECmFTvp%2FDf0GbHmOCaWA3UH0O4Kl%2FneXt%2BgGFt7sQiyAiAkCegQjquh9lBb7pcN%2B3Heg0qq4e%2FfBYBJmQv75e0d9yqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhPdSPZcX4uoT6jfxKtwDgpBJ2PXQtDwKhZ2FZg99g4%2Fa2ykKLDfmXfJ3RePgLk35cQV765B4iNDMcZZ2YZcuSA4rnNLxYrx96WAZKYDgh14IM1r6Ng4qllf%2FtWt%2FRpMUoqfD%2FMUxaBEWvfOBGIkRwrudIWHSVbdLTOlRvBoTEmrTDKeiKmNQ%2BJSf8RRhl0YrxSbD95MkBaB5A1PPTNvqG2PDJnK8ONJYzKvmCGp1Bjy5hXBBT9wvlg3YfY82qVM3JGQW4gzoMErApDaPVUAVvi76lbYzv0HTjDr1HbHw3ejDoPkwXMF3bZIZuT05KKVlgvwIofv9I91r592lNrHQ43NFeLGC0WhHQq5lgnHvFWz5nhSZCOHBacDJYeih6rwbz0Og0ruFtbMqYRqx%2FYl6aOWB0mRS1uZGns2M1i2ch2JemSL7c48tEAJNKqovve6jLBKms4b0nbYrMaELn40pKhlY6z5VPq0iB2DA9UeL5RCDUAtZdEuatAWZYXtsvWc0VnoB19Qq9H9FLWZT2Ou0qdDteMcdfZJtX00fNMxdvq3jJjg6qzp%2BOMepqaQJVu%2BtSkNIXxnHgrvSOBM04R7bQu5Wms9phIhA3m8W033deSjl%2B6arQoeUv4P3sIprNw6oS5TAcvyEi5Lmumww4LiS0QY6pgFroxWQzbFqP%2BvOj0QhA06kHeK4tzfz1GGfilM9Quaneg9e%2BCmYHP6zawnxmrCJLv0dqh8awLixwFGQROVc77H2P3ZStkLA6DuwVKsnt5446oRy4PaLz4002FnYMaCF0%2F0JBE4HrQFNMlv5Otn%2FXJIEtxDTMUBm401EewGyW9O3WXUVvo1PnG9DKmTf%2FDHzdb75ixKkwAVcHPKArDdUmUQvjAkYATPM&X-Amz-Signature=431879229170d4e0ba300dbaee336642609a33a58b6e3b98098f1e1354b8c947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

