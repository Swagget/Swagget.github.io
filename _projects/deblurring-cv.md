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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KCKYBK%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T183728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFaHKskbaQBtNE40RlXNZVLSBmH4%2BkqG4%2BKrKe5u5btPAiEA%2FH7VGy3dTzOCPjWXHPPoRsgNsBwyeSMyXFPMmaAIGFgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8672T2zrNrzHZP1CrcA0pjONrB0rrZLvVE1TgOLAs3%2Ftnd7opDVSu4vvWeHR1JRwwdz%2FSWURZxMPNqO7YQZvcjsUEAZNL9anwSXvNdiWJlX72ZhNhKp2Lh7P368AeqKUXb6sO91ankpSQdYxO7YuucnprvdUST35BAomOMtpf%2FkFQ6n%2F%2FXOUwS5gZW3VQ4rU8A1g0i9kruZHSMZTkviojFgIEsvf%2Bi4HGX0Ktg%2BllJr7gug0OCDIBKbajuYW67Ye2DSMogSaijKIQtwJ5EDKd0Nb2g7S4jOiDlyHW%2FE7JB7KjbaaRDXruQJ7tsgp152Qfljpl7UMdn0pTSokurFxyB2ewz%2FZTlQaOLgIewBmYoaFFpCnnpOJs9Vcra48CNeEcUHpH8Mpnf6sLJYdiCfveBxoHArsWkZZ53aZzxFuMZSB%2BAROs3snNDp2QDI0LtfCHhPLarM97I4dFomi3UGu1ylt2ZzsfL7hC%2BtQ6ozMQmTp2iPu9XoG5MpEupS%2FfGgNTtMnR7NEBcmBD9WvdsqW9Xg9CCvUB0mEblVHLN9LDo6HsioTyXzTPDnWq9e%2BL8jINmv5CDRVKzbwUlHOWqU%2BAXhxDNgWcC14ZFxZS0kfp6pbSP5CYxs%2FrSQhujOeAFcP0%2BQPFIKMR51Z9uMKX169QGOqUBC2EYrJ5HQ3HnDVnUeowDOaIZ60oVsZelM9zrV0bv7YRGSzGHJCQIhnHyMGVFp3G55CO5Nf6xIsUU4Iq1e8UXJOfxIKrVdAjsMRikSd1h7o0kd7q5DGrOghJqQSxKNNP3O3xrVwFKsWwSZ5plBnTcGWdwcnz3a3Pjs8HHaHMlnSM%2BJTK2G75zmTAC7hXKvaqUn6AN3zlOHdl6kT24DNw7N9RxPPN%2B&X-Amz-Signature=a1a2b2beb4d0503878a3b08b74a7d48efd75853b4d9599c237268a2421a62600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

