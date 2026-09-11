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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQU7GSW%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T212345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc8oQe8D72oKrwhSWVTOBjtodxVwDyVJxLPCqBkei45AIgSGDr3flysyvRVbtlbCvgkN4D4ioGKn8pk%2FquS9AYfToqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6vBe2jp17SP0f9xCrcA1vf7bx7fOfPm8rf0cd52%2BVV7VJxum0KIExHArmWHvSzhxcxAeGi7IknH%2FTebqpfqyzvCmN0uHLSQDKig9iVg6Ky5f26HJIZhoTVrVblEteG0bYGQ4BzndkZB5ORAQn%2FRSOJ47NnilkdgeoZnZa5%2BY35MUAgb5qBSWtYXkcW6ASdM5eg6dTQGkCiCxY9YbgLuN1VT2OtJBFe2OSw8ysulnImYtwHb97ceOf1TDXGRWiXdzTpQJQ7byFjHBb%2FBmFZLT64BkfUdI9Vlpp%2Bg%2ByerUlsF85DjSXCnnpR8zAFVVAhE%2BFfi9DuA9%2FQyQjRC1PC2U%2Fgjxmi7cPgZ4z40%2F54uNnkzDvLPV0Jb2bEQK1WTvUOEDem2VlFAR5aDAyHlqRPo95aUjme39Zh3%2FJHb7kGTs1504ZpsmAcIPEhjqfBasp2Q1eYCivGMBI%2FM2998Nmpx1ojAI8E4bvNAj3i4pQZOkTIx8VsMZPx%2Fsbm1iL4FdyYlAxGLsv6KKg1l0vPGheIBI5JBI186feawyioib9i7t9NHLEHw36AuFPAmyjobQjaEFk%2BQCK6PI62AfMhbP3ZHby%2BBIlZ42CKAuzzUhov4E4nDpBZJZqX1gMlxhuv4XTsU61E5JftfOCKzeYwML3dkNUGOqUBqOvIcalk3vN8JPI%2FRyxXod3sjAudkA%2Fjbf%2Fp6UsrE24fC7hc0xuLn8Q9EfvyfPpu0ez4WZUA8zgCGxxRXxz%2FYPRj3shZxe1U6%2Fvh3UbSG42OkHuFvKIrIsli53osNrgAxnxaNr7Jid2scJDYf4s%2BDK0IsGCgU3JAWpOlBfUWsy80eaKOuXAl%2BrMLNM5EzzdG8RpULv8MZ33e05ohDeDuI%2BePzxZT&X-Amz-Signature=f4712b82052d37486f0224958074b1c26cf98e3a1a6e0785556039ff943d64ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

