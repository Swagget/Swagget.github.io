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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6LX73B%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T215322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFr%2Bl8M5PODKam2f%2FhbbqpOR00ffrvMEBSlGPDgL39PAiEAi6AFusOyVsPlqM%2F5PbjjvthdJkiPb5QnVQGjao%2B7uCgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExUJ8WhbCJkUoiI%2BSrcA%2FotS0Lsbb2Wpwyb18tRWmDOTrMMV5%2B%2BcIOy%2FB4tFxKw9Kfui3lFpa%2Bdajgb4%2BX8JCTDc2M%2FIrktots%2BwjhO14t%2Boow3XmGPaMHVCYfRcwuCp30rlMAN3VV04JcPS3LXM4jYgtp8%2F4MBwxZ3fYqheKGZ4NxWkx80lLaNnuurqUWZCDos5UfWYLuTkzyCB6YQvUcrvl%2BJQIjk%2B%2F%2BCzwOSMpWGkeUae8JD2KGrO5RAa%2FOLS%2FPGXYADkGb60XcpHKjE6cB6SVlzi5Xr601euFHkax%2B3AaogHCQtdLDLMvHnSOJLADxSo%2FSxSUp6tMfP9j9ltLS5Hqb%2FJ4tMQfYIp7i1LboswV61FQJHvFtRo6PlePg1E%2FKWhRTseVQ8eybYsiTX4U2BMNUGTwYxmU5WQmaruszSWGT0uSeVdEnq30Z2vMwaXrO4nD3iMLaj8H2QL%2BCZ7TsPRdhWeUEmuqX3NM5YSKPKiNZNAVoFcvX8iSCorjuhUqUupCNV14KiHzi9qHARc5944gk2q7I9%2FjVnsnNC9Ba1OfoW5LD6BPh4cTdbnmdqT2cDQtjEyGku15coUI2%2F%2Bv%2FlL9IbnLO%2FtpJDZSWJFdN8YPSSIGgS19212C6XjdXi0ykSWTHHZBA68Th9MJqJktEGOqUBGGKhnJvSvmbyczc%2B3iBYluvAUvt%2BwYKR1WSEKpz33VCEhKZoeQAAUX36tw907vAc4kzozD0MhiGRP6E7py68qfusb3BrLHkHQUQ%2FpRUIJRmGZ3%2By%2FWwbxVBWIZofUH4FHiSLJ7nos%2BXlRBc5PpXGFH4nf5jPirZSyt8Jknh3lQebediBs5Mfyq8BY7h7q0wsG45PZFhzeaHtMIjHOF7OiBG%2BN%2BVw&X-Amz-Signature=8adb8002aa97ead532d7506852bb61ea901fbbad8e3f929663b389d4f9a6f07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

