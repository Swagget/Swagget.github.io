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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CJPQXHD%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T014836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxA8DB%2FX7z%2FCHs6QSJsIAsY2hG65PJk5UVRp18yJ9v5AiBwIU4Wqoi95Tr4rEw3OPeqK3aunisjNqKH85zx5J%2FzlCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzONOFrB2rTUEU525KtwD0XTFmwjlqO8gJzD20yjBEeqIFGoAymnciWIcPh9MW9XDVP332hk%2Bo97lBnFEMTTwDVuvYQtT0%2BUNHAcCeLpMtnYM97sQRAQLKK7wSjPMWp54gTXV9rou4cqrHu06Vlxkr%2BZIpPx26zj6VvuaiBpdvc0KbWqnV97RrTDkDuIeulyoU9GmVn4%2B6ZbpdfDb6rfeb635p7lV%2BpClm4jlkoo4sucOVr%2FCvFvA8lklCgP13uc%2FDJH3qkZLpGfYmbCjkUnLIidC6k9Tf3leojTO4jgl3wGFXZVV4DOVLQ27IGhn%2BBW6iCzo5um23L5Nra%2Bo9qF44Bv%2FWNUTdvW4YfPOy1%2BmL79QZpz3TNlrwr2RtAuEB8MtrrDN0mT34oC1fSwJ6ra34lbvVG6RXHJJb%2F%2FlSXeqXqOFiorFBd8LoKixSO0RVGSNA%2BBIokQ1Bulr8pSNAHh%2FDgduckyF5OeVd0sLNAlX6LMvqgBTHZlPwOWBrJNMIMA3vVFE5Msqvtezcv4%2Bo%2BNB8pqwhtSNklaXZZ%2FtXBGDthsPi%2Ff5rAal3X9mCmMPoUqtMJRvTBgXlI0yF3YdmrJeolB3JlU7t%2Bhw8oMXAEnrXiUNVOiPWog0H9XWY%2F7d31xNPZMDREK4ooVB8Dkw5quS1QY6pgEhhM6shkYxQINH2%2BM7mMPUKyELJNG4lXCQ1GFNYP1MmShno48LnZJFnI4%2FuWXzMh2Pq6aHm9nD1OTD2zYeQ4fo5Xe1q1TvNCk9rqqGSyX2mm0zsXM7XKkxHon5ufYbzBn4bNEpIAEpmn8bHCdVaG81D9OEN5WGC%2FS4EcXY7A1u1q5fHS8mCKPU7vZ2Xd4uwVHFAwiuNriyz3iYebjaZVENWJjAHPLC&X-Amz-Signature=d2f71486c0d5a1e34730ddef7378d95f49427853a83d92104bcf3ac789a403de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

