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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV72ADD%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T001051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDSv2LydScAzVL9kjPksfWS92q4fZUwyiaiZL8GKr0vugIgPAdY%2FZkayblNCAGYtHtWB%2F0OLh4jjLA3x4SrQX3OmSEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDECh8eejW%2BR6aARTJircAz1eC4Vs7qDTvCC5o9MDbSMzCM3xczjQhZje66sTT4NfiNyAr01SCtVNjBDwTSNVdJkZCW%2BvKvwwf%2F0k990tHbQpXSs9kcierLSNh91VWIW%2B%2BXAp5gacPNxpjlWm0AQQOp1fKL%2FATlQ7JMixo2pAgIlbTo%2B7kPTdJUCr6Cup9FupNsqlues6CLubpJe%2BTP4UcQBHI63M71OuHszD1UrHrEITjJa%2FhCfw68n6UEgIFonxNLmSR6Rbq4awQis1d%2FrpO7VYoLgkL33%2BFr8ie8kctdUFaB3UH79ZepN57obKSwIoXFiZOx8bNI8DhJFqhJpQAmLEds0aLtr%2FKaYG6uvjkKDFcNwKCUg%2BNsPGGsv5p09%2F5OgHLVCZdLerH0Y6DbyOK4EjOJ5wnM%2Fb%2FAPlGqvhCi7BUWZiBfeRsA%2FyiqziqsnIfbisUPQBP1yVg4xOPq5G6%2FVCcHg7RpmXS6XSQV0VqeQAQd9092JefqqqCeeIiW%2F%2BXUn4vrM%2FNp%2FtmvEoqXptEgLWG5dd%2FRA0dnxpwi61Yj0uhDgaXK0ni%2F2GRdNmE5wLrDSkXbOQKu6r%2FpzQkvNpb4Ic8jHDEW8sSMSWRiri3zoUe1m0jPHjwbHLdu1QEunpFt0Eemt6EHVPApgkMLinstEGOqUBi%2B%2F56zu2KSAy2H4JdgyF5gNss9pC8xA56wQpUkklPLeguf%2FMPWox9W1e8j%2BnRjgyWdrTE4wH5DW%2FYWjsA%2FCsNdzv290xU%2BjkocVHyC4E3O7%2BFdFiS7WhjKkTSyOOXDU8xRoDQmmNiFdEfBVyswdl0ADecfPa4KHxQhrMuQt5De0%2F%2FhS4DICuj64yG8sWq0khQULsXWe2YXPDWxQ0pic3G30SsJof&X-Amz-Signature=1658328afceb2041a2f237116903fc66a16ad377adb40824dae345eb1b8a9dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

