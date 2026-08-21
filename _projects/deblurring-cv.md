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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEZSZM3%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T181842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7IZ%2FGeZE7w%2FtxbLgUCbHiHbOsjXNMp%2FjqjR44epb63AiEAuWsYnnFpxuF1Rg8Hqqz35BUA59ApNe91KaEutFctzx0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BmotqdKaVMvtVsayrcAwnM19mGAK8gcddWpuzIpCy04JfqdYeCAR0Db86QoCabplRWf2inK249W3iIWAJWu7q6vFVit7UEIEJ67pkEWqrfzXM35f0v%2F43TCYjIKlIomU6X%2F79EkjyGrT7FzUHo1f%2F1Fi%2B6k4s%2B%2BYzdaXI0tDVUUZvTaqLbwUKfcOtyl1dFSNGsoLjlR9DZTxToXLS6nH0QQFxSWr7MwLk7zraTglITgF799iz7tAkGlhZkzbgKWdP9SZcko0Txst1mWTSTXzSg%2BOCGkB1x8MlapfBur79sO0KxwlFIPDKV0a0aT7XBloJp4cIagcdDzr7UQxbHmMb8ppLpaTt53hXRh%2FpkRb84%2B5XNBW5udNs8gjEQh6g9ZhnOKh3w49ZZ8h5zwM5edqxF4oVa%2FPW3WA3bBiIRVDttlKzCRNrgCxEKsudUdmzGhtgHZrOrRJRKpdyDIef5osCjKva919UxyDhP1ZNPUqprNlLHcn4lYTQ4z6KixfBKj1mtLYbxE9llNOli7YVNdBdlAYLqVSa6Hye0yWSwYFX51yINE93EFw6JAL7KS3L2MJNIbW6m4dW6aQCJW47IKLVCk5Y5RkfT2ut%2ByYk%2BbeUy%2FcwuXKMtxQEn%2BMd0NBvi4Tiy8ETLdLOmaeM7MOL9odQGOqUB70uAQrWOs1E5xQityVigldGzez%2B5xCaBO%2BxGl8JN0e6xA%2BQtm4RQXB5Tt53vlCWv%2BXtRqPJaGA9Ioc4A8Gk%2BXTscn%2BluAcKBFm6hBfT8g7jrCynLxlfXfcLwFTueqZJ8RlN4%2Bvf2h%2FqkdVaVKS50m87R26laVkTB%2Fk23WmROEf2O15vN26xi9UfugrYqBNHOA4KnZmxnZo4bHJfWFlwR8%2FZ%2FAlG%2B&X-Amz-Signature=42a659e119998b37afa61f46d15a02614657e293c6e89a7807579f8cc9bb913b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

