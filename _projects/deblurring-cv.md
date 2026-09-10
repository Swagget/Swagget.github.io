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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLSGJHG2%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T151943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExcgRQ5wxyDQ8umAYNpEXzgaIJ%2BRcyImLd8zycFmXCHAiEAvLmfckd6Sh5Os%2BXlsmvgPxpJoHkjZd5xkqK50JXKR3QqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Xdo4c9pMsaFNJ6CrcAxkI7TqHG4oVc8XzK9stdi9YsUhgBQkcwcFIZmmCpdVAELIv8Sg0PVAKK5v%2FZL3bm9%2BhkVNS%2BnqGwUFgaC3fLNFuqCAKhzzkFD7p4PA%2BDQkYD2%2BJ0yASdnCbn1w6ccET8LnFEFBOpTGsSrI3%2FsfN9J1NwlUdQoVv%2B%2BvUeYKHDiaTkdU4PVCIAWa3%2BKlHP8FfTsPX1bESX5JG9TSptg2bOvR3nI15oNnxk19fmdq2PI6VT1Wfn7%2BjUOLa3Dd22rO7kgxQAW6JsCb5cuenQRlgYclW2eCrUDf3T3jjRR%2FiM12oyZRRuCf5HCQOuyh4tqPBt2HjppiDFaAFTENuDfT8tx3iRlbu%2BToc1s48xE%2BzAmE3jEfrxv80GDK7BpxdSYtezJsvrSTkrY0ByVfF79eQ7DOvi728gv9scjZtWX3TFdZkLJqT1X4U3PjkRU4YLpTQ4wBj%2BdKLYS83AxRuwoxWdKr0Iza0j7%2FeB85zH0ECYEZEcH8xIDFdA0MKGvfwIj5DS%2FlQ9yZrN39uc2s7n7FfS073OKVAxo6IEuJow4EdW2vUj2r8kCeS5wFasTafrscbvJaFgx1iot7D%2F2%2F36aKIe4JP7oCDR%2BcvTmjiLfHX1bNNcMmjsx6f9gUQChoeMPDbitUGOqUBFqyevStxUP7Q2N9vzQaq2gjywbFAdDP0aXUU%2BB7eF8MSlpD%2BeoO%2FsDRF6aSk1nzfS0oRFVpRnpSA%2Bg6O5OKEStPKlF1aqudGpJnjwsBbbtOMZp5Ih8tSWjpCgqWLiuXf4bLGQn0IfxBgrWWw9EIczjIlVGxBxM6HuLSOg5OSKvThfTt%2BnRfHkyRh5bAyxftduZNfhJcED5f1q8zPQYIn5jUkdoxl&X-Amz-Signature=3cce14f81c4eaaa3d1ee67c3bb8f1158aadfafeb169af3a58dec3912e2e578c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

