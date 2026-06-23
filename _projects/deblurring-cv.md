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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH3MDXEF%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T133325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDahcorERjG8D%2B5%2B7trPgl%2BDWxyNbEWIpYoHEeN%2Bt8lpwIhAKYnqQ09mCxoiicCx6uLDmG1VRRXo8bFmmAzC%2FI8hYAfKv8DCB8QABoMNjM3NDIzMTgzODA1Igxq8QpNAPCY0og78mQq3AN%2BHW4i4UxY73HwliEWIovsGJBvsoHWiAovB8r2XTV%2FPKOMAlLIjnrTIFH75rElS0Q6Iv7uC9zI2h7INbwnljtQGrKt3Ou%2BZFV%2Bv1s48MD2%2FnU08nkQBjOk%2Bp3KvtDZhDy%2FSeImkuPtOStZBqb7v9BxlxoZTIkfcgp%2Bs6VBsQZTk3CkYFW%2F3SHKe%2FDbN7twPzYl6XPCH5n0%2Bkqr0jvdcAO3eeeo8GIJiRhpQUfswlz72ftRX2UEWlfYew%2FL%2F19%2FWfVDaK19MugwoGc9LH3rOPFH7cwvS5G%2B3qjpLC6O1spj8p%2FDidhmO5tf6xRA1Hv5CBYexkU02eiuVikie7eqK4aGWx3MJ0n0ZdbO2TRAJmtUhKqghKyOdwHJ7q%2BZ3gmjrn8II3xssPUcHXwUnUe%2FKO7FztTyC9rjgJder%2BwmBKbxYT3frxtXrGyS%2Bv0MFoXoVW6ON7DJ7YbNVSyajyZ%2BUARks7m%2Bf4286OKLRDFuSwDini7PMNc1aeELQ27zstrfzpJtgJ6%2FMIiONjo0mRqXaB%2BtTPeebgWuiraosizCE%2BUuGEF%2FzheClnmgUruc3gvFmvEVSVvFafAuVA24CuyvlNR716190DP77oTq%2FPduxlPUcnAPV3pVZXlwshOjXTCrlOrRBjqkATQMpM%2BKnABPQuW8o4Z1ML%2BJa8lhiuUgR%2FgUCPC4Tm5TkQVLPMe6gMdXGOXRKaiBd4d2HUpslhrh2X2He9s5R5f8Iuh20RHfjX6gbv3FCkoEhhnayf7UIp8x932%2BvLHCIKth22KSdCWSgUaU0LNR7CYrwX7EKucJk8P%2B5jg64lhCewAT6sHh8K23JTahQOKQVaZJT2U43FzONpyo6OaL4jF23cug&X-Amz-Signature=420da3f17c3f0cffa4579adfbb03c648138332b02b5ed96f16bd9ee822f86215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

