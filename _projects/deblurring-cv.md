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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAAASPUN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T042616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIQDgFTDaveS7TM%2FNClDAN6irkP5nBDGdHOMv2%2B0xDAhRCQIfLHfCLSvpGAoGloXAGBiTZEXI5PKvuxAxWrK2y0lUOiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoYz625Q%2FqpUsaZXjKtwD%2FzmKqBwfrDMuKLG1ShT5BHmzAqQPGZAbRnYVnXif1Waz3f1WGuCsVTkEVg1dA497FTz8dMIRSi2iZSYU6cqdzPHdtmSnwt%2BOZIMSxLw%2FqYXaRMI0gJsrWNBt8IdkwqPEdyhxQsYk0LSrTAOk4aVbsg1g3ErwiPbGKxqlnKjbgbmR4tDBW%2BMrmOHOTrznmpKABDN2K5%2BW8q%2F2iIXaEhOc%2BbdzkUOiHlG5MHbfgMkJxBJCrXr9iEXzhOvzKF8363A%2F0CpK0d2yQRILmyGfZa%2Fzoiv9kLk0sWXbI0gpRu0M5vCqYc6K3PfxRj9LbOKPaNtTwueM7lDdcWPLj2SqcMeQ4Owtz03FoFtjyqjAAmfk8cFMokc8P6nMvh7tNMEqGgS%2BiqAPwmVZM3dV3uGxEYuVi2zhMsrEtosnSP0ncTlsXGMWBgYJR1XxmpISBvgg08jr16JMIkkMcbfqcO82W%2FJabeBeCQxntZiKbWUT5RtzZZL4J69UaD61Md9g9jVQGqzY1E9Qje6Kx4bgXzdsWJGi1%2FsBsTue6aJg4z%2BHj7RJ4RVxGexI84SLWTHfgwZfnKI3PcNez9LlZawQ4JATnDWs13kQexsLTtTgWewfZOwRpni5XdDQsH%2BljsrK9GAwiNGz1AY6pgF42NEKY7VJjMM2xKCCQh43x88rEEmD4aoDlKFsSsC9z7d73gGu0VbuO%2BFEe%2BId8zlnb1KTMbIa8l%2BVstEiQ5azrB3xbRS9WRHiVSqnUjYeh79zYiyrEGlyN6MKoxPb5hLz4PCu8gMjzc2YB9AiTqlItnXVQ5RzbMdZ7aaU1Gm57IOqJuDe6pp9nY77ylL034BJn12xMP8EBxDbg%2BDA0RoMFVVSRXL1&X-Amz-Signature=c2a6d65ba2b941fb47dc679354136eef4bf140bc90d171f40d9500e5b166ee7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

