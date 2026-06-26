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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCARJC5M%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T135526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQd6JhMXoWlUpjIctIMu9pWd8z4XdEBPMyxMFukBtcsAiB9nk2%2BXtfW9yeJDeVRFrCBgYE0%2B1YzxUaAvSu7%2BeSwuCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM%2BcYr7svoVdeTqrpeKtwD0j3bUzBp3dWFZXheUm4dAVK0NsmRasfSEtbuGUmOd4VdL7KsB4Bcas9AbmWfCbA0IuWrkqDc3JPM36zSeOyNfYgKVaFrJSLNMYS%2BDg%2Bhxpmkb%2BYr6JA4XlMrAzxJtNm2JLVfSBDFYxklO8VDFBvIskKPJ6nHa1RevANNVTuVA7QyOZt6pEH%2Bx2rZ5VNk71ttzjv3uXlBD0IYJ2Oo1ebkMSYLeKA%2BIhP5dwSVbifzRIhrMdWkEqM3vmeZUNkbjpWaJCG234N%2FOKQzzcVMxQCrYU1F5UKQXNPWp5qc7Mq2L2r2B8cwiC6muoce98d101TMX4JhlAVHTTi5otMTChCPVWigJHLL%2BHhJ1nIdMDTRvVO7ui4v7qmgcy7q7IAkc8odytPXAgZbRKpKQ4fb%2FN0R4WrwlzDc0WSK%2BkLNZk2lL2ZgH39TCGIJz5metrHhf46Y6uG8QYbvH4bzBsltxmMM2oIST6nc6ZiAHrZPuGF%2F9WuPcb5mTmDqt8UV8%2BAJpBZX1QvkQ%2B%2Be0XKaymEmSg8QRuyf%2BBAKyQoFM3p3yCyfoNaz74sMvateQS03k3OcJh4P7dnvnxLhqyr3CXVDtlEyOQyV3JOu0WZScL%2FPvwXKWo17HMKk7xomIVqPPQYwifj50QY6pgFS37SUfEP12bWv2%2FmiWvH1wjAVGbighx1w%2FjivsxszpSEnZcV%2FjMoevmPoc8weOXIKBYCQXTwBUBJncI7OQsWi62vk2rZzlRYUevW0Q8DtZF6TBankbBXBRLsLs2lkLaoy%2Bvw557o%2B2CQMi5eAgJsC79YENjdL%2FSmgoSQLhhC5dxwbd8mxRWDln9kFabZWTovEAVHsgj1dm5Qqa7o6QhnmQGWPAcg%2F&X-Amz-Signature=d74d24ed5c8b85e36ac8f77f2b35e3d6065356d2e947531ab5c32962df6741fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

