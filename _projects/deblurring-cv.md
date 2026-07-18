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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EZ5GBLG%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T124325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFf6HeQ9m626bZxMPObWYKqQqsLLpTwDOqQCIXV3xSr9AiAWs11QkFmcUxrDXv7wP6cIk3jLXSxEUUwgQ9fqENK5vir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMLK6O%2Big60mwZaXbCKtwDW8mrPqVH4ZyVIJlwbWkKicekeeJE3WO7WDpbRT1sUCbdVI4A6uETYSARiox1XMcFHMqH7qAXGt3oBEakItwYQyqHQSeiWIcPhf75NvIxKmmU9fOuT9%2FfHjqLqeco9mkCUitv3zHgr9X2jn5EEgvI0dDpm0iYabhsuF%2BGRFXO7YEW4JcTq5yuHPomDfqTqjTyH7mgEKabUvTZhMIshRScdIlf0wsr47VyMtD0T42vS%2FxGYEwVB1Lqi8sj8AY0am3GToFKCl5O4fndyo1ZyJ1zmC8Y4NY9CY0DICx64ajRQlZdL9pbu%2BtXMe6jH3KEsUR1PUukQJBJun6SP4ReHqYcTxKZLe6JcBPqlOTQkCuJB7Q6MuXIoIa5QOg11RgnR5EO48vwvtXPaGB4Ex16ToAEOy5o0xEmdf3cH9GBrbi9Y2ZuSgFRs8iBEgeUKUSLMqijurnQYukBvrDZMcvpbYcLbwt3pIo%2F0fNdM4%2BN73L9jZPZWAmwnCPSijjkJJxmsCnmhqvSY8%2F%2FAsjzLSQmyd4V5EdeBkDlOZMgINxWYOn1fqe4LSdFDNGI8HemBkBz9FEaIQJjzF3dVMBi3hEkkoKsB8O34kWDFWYuyvH%2FvbaqsyqzGhwk5kd5uQZvEOgwhqPt0gY6pgHAsQF%2BfHa7SG5DxkhB4FJAId9BOUPKzUpJS0K6DWEf3GjhHSNlAu36SrXNeMC8KAeAow1qHeEj33zkOMpoP6taLIp%2FusY8rwKWbC6AVjZzR0vA6Hz30%2BV1mh9f63FmRi6U9qDM5ik4fuAaAGk2sl65KEtn1MP8oZ%2Fr1sVHxbVGe9f73bBTd8nLsuUx0MX2nH8yh26heV3fl3j7mqr%2FVWiyG6PcPtPW&X-Amz-Signature=2b8e82646d8d032cd691bdcb49c805be0a4c9d2d8c59b4a03192ba99eddc2654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

