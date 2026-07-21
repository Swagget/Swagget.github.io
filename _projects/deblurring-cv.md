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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN66XJYX%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T045514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHJf%2BhH6VDt2zFYOiLeiJtsz9gAJrApmDfbNbk6f8JNAiEA5lil0ZfeeZpQIFlync7SpalKNUsXbjh9zLD2wLTHu3oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOT94dtaXi9kBqMwmCrcA3Cneu5iAVxCo7zqMwNkDtzSCHEuBg3joKzypP%2FoTUU4HyNqu%2FZT42mUBRqwdFjOTgg9ItSb5m8P8O%2B47qSDQpxPuM9V1cVqi5SNrj2I4qnvqnXFCd%2BhFgxkExgNaH5uOB2PM5vVm1LONX7spVn0EB2tSOtvgCUeNRS9tQ%2FIGA8MrOh%2F5ZEc0MX%2FMChzzkhkFjypdxj3OH84n8%2Bn9%2BbZLpcbBmOC5vmTezIrj5RNvgMlZTHnnpMX03QCqRvghYDBzrKlmBAujloh7toaCJIQd2Iak86qYSefD32zZYgAf%2FDr1un1yIU63%2BuOLId%2FKkoxE0%2FKneA6NPOQejqB%2BKD63E4YhuY6%2Bjjrv2LczX5yhyvxUe2i0U0%2B2BZlDf2nqVLX6K3yFKYZ14jFy0fEe8%2FqO6BuEAcqo0LpsN4OPvTjwBIXCm%2BtpE6AVlwnKHvRjoe6diiRYW76te8T%2F244F%2BS7xJ4jBviu1jUc%2BGNa95xTKmygeIK1Elt9tEYlaP%2BbnZVpcjWFlwWGS5ZDXDefucypFItxm0zUQvhPh%2FcjLPc6K3VgNPKtqERSLF7rZ1CtM3Qqyf9CWaML%2BvjWPidUqTTFavTFGUVsnT0WwHdveKsS5I8CLZPhdehcenKUr0EyMM%2Fw%2B9IGOqUBw72sz04CVM58oSOEq8SbT4HyojtHvOvq5Apf%2FXabLjx9DiqqTVFaFs2rCb63Hl10pOUXzLjaYcPT3xZDnESnE%2Byl6vNEUTHf9LvPZann7bMPdpJvCrpzXKuKYnagA5xHwZDjVP%2F%2B7XvkWIrJMZgHNUXYRtBXaLjF01sWRGQPmxo%2F8RWO2qCzVBar5UEqgiwA7cuLRypcn20cvM7iLcuB4eMmYTKn&X-Amz-Signature=bd3a97dace5a8c579e5347d156f006d51cee4ba47966e48a104c44ce3f18587e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

