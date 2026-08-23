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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636G5U4AI%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDNgdsJ1K2%2BMMJ902sjKrs2COaKMDgwuo0M18uxBl8U%2BwIhAJ55kTcupywbgHMJgwg9y%2FHovcRMaDn74Tsh0r7ULFoyKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4jFz8UfLOUzJUTogq3APr36L648N9UTOtTexZ7hXlKXDj20sc4%2FYu%2BjKVRsLi09sEdfOAPcXlk84EqFNmi5WO0n9cF1IZ1Cw1RT%2BCddXhCwoGg%2B4%2FWrc1Xn8zgy2SmhVrT0MS73BzG4Wf3JJqlB66fC1ytH6ELlzpdqpbpHaMOjtjlV67okTHaXy0NosjBkk9HBE7y3UpsDbeIxxDT6uUxLuua2tgAbTPsp%2FbfZ6up6fXfDIm1XVcoNrb0hsCI3qbOsBu6q1QmYJ6JUBqTdjOvvEOkkmtx%2Fz%2FaiHzlj89gesLbHBj3JKRPjExdvdlFkihnSxfPXa460h6j8qoe417h8i5Y8KrnhhYTl9ZpcKgtRltVJfnlmI5CJ%2F9fmgVLNDBEfx1bxUB965Z9n4xpePdJZZL1sNbku%2F9IrYTSK9pTic%2FWr9lKpYxLA5QcgxSEQEbIB04%2BGXmR%2BnZRqKVeglaNLdnWFuNMxzftFymecZWJWIzW16BodcpDCTt0TujsjUdSAD%2F2B4WoSQw6qVWd0XuAX5tZ5HBbRFrGT04986ZR4JzAeMcLk4%2Bc1%2BeMHI9ciuuWvAtK5miGuDOEc5z5WBVEeDK1ArpOJ5dpmLt0DRK%2BTBGhL8NRb8jc0hD1CzuqeKTeUD2U9quhfx8qTDj06rUBjqkASCPm5A5gtmWWgawP8rUuOz5DjUDTvukTyugvH%2ByIwzGhGZZRKTRKrSrzcp7IXF138berqFpc7NCeuGCdWDeSSnCw1DRBeLFWT3hwyQik%2FIcSs5dVhaVwGXVaS1Rg5HKOaqvJWplqK6QK4bDi2vYVBtvWexeJT%2FWx4WbA0zZXNbsXlmb%2F4lmTAOMhO3jwsvfaTKRuXBk1upPcljp8Fq5kq4x363Q&X-Amz-Signature=291166b253afbfa9abca07a216a88329afce3994c4c298b70689c6d1e4428526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

