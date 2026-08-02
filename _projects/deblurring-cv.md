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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OXBCOJW%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T174935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCHHf306RvcqUomGTsi2ir%2FPOWJ1%2BQQyLkDDmL6uin1dAIhAJESBEcHh8OX%2Fh0lm45gIiNT5I2bUSpEA0oWZJ%2Fev%2FWlKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0BNG6wh3nLViATmoq3APG0CWPmt4%2F2mAfB0BKUuSVgtVaLyDut9VjRXMh0VKezgPd7Vxqv%2FbFXRE9h0Abz%2F1l3BwYSwren8wCo1%2BHm1ncwTCFJjJc13zq34cFFaAtmDOiU9xKy%2FtsYO%2FMjCJNa6xQiuYfwuiXA8AcgSDdae%2FGI2d%2FX%2BqsLR4NetZQcqFMvs0vIzbmpNWVlsuATyhsblcDuL%2FqivTGOs2%2B9VXhLiB07VZ5kbcnyb1LJoDnsRkEgTlmvON7Bf9iFXzjKO%2BBg4oKCTxGi7pk6pelGvXZHQnYJkfiCLourNJo6052VQcSsT9jAAEj%2FRCzPjQnnv2t9%2FuBE9lDJiZxMQpICDwKrePk6%2F%2FjkHLLVZbmSLQy18tGmOGwW2ZORVTVCQLl87PPS5%2FSHckajqeSUgwid88qdB1MafLfQX5R5tQWonvkegOfMUpB5o1E4Q%2B4OEv27GUDpbNzcKwDNsIUXwkM9hUP%2F6qCwaJFqFNWnFIDCt89rgVjSZlBFzGCBaZQfQAO86aumuextKKEFTOi%2BLBbALIw%2BVxKzp0JUN%2B%2FsjADq1MQvho3pTc3hAwWIOy%2F0dFKofIUp8SY4XNwKNJ1%2BXEo5w9HOeTibBoAvVzdoD16o2aS07OwwTyeacpHHvoY%2BmI2mTD6jr3TBjqkARo4bbRnTORDmKwmcqV%2BiIcOyzff3XWRXSPl1qBPR3VjeFIOPaHZw5kcwu8ekLUtC8vc81OWsYvnHsXZ%2Fc5eP%2Fgm3MdOhX3D1SDsqKqCbk9Z%2BwDkwPtph4ULgOVDXHZVuVQRomh1z2pIXiXXWhehPy9G9vyRRNznxiJsp7PxJYAWVhVmzRjB2F7MBH6NSB8jzs9sGUyy2DktlgTuDvTgj4MTXwZW&X-Amz-Signature=c5b7dc8d36c272193b358c4bd531bf8316a15d65cce9bc139c837abe228439db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

