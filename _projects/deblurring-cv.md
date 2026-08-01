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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCAWKSI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T051351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtoxt6Nwee6GaG8tMrMT%2B3hw%2FvkdwkijTzFEOgEiD2PAiEA%2BDlYkEUAftSj9xPBsTPzlq9WmCTsnibPM4JqZ%2BCkeUsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFLcumvgdEUtfvuJCrcA3Ia09WrIZWoDfkkZSZRIXtsLWU7Pm8krcSXI2bBqhHIYOdEVqyj1L1H8RPAaodEK93ZTvRxuwbUb0AHPVOnlk6BPgegURXaVZhx3NJSOnEl7fImMoZTiTXCSO3JwmjJOioSkGDitjHzxkuqH4YPbhUuP%2BMmURo55vWhAqwy61SuWG9EzXnjVDka%2BtXssumeE%2BXwLQTWkZJgL9QkPke2oSgHsTG8zcndH0rgN9rR75pHAtNO2CYDGJrXZOuWc3KdZqoFQFBbpuY3fS%2BfSa9k9XkR%2BG1zo899ACbkvudw3IYVvKUTUtMcL%2BGUWTc2OLD%2BRsZ2v7ZPTVKMleh4A9xwWbG4KZlmeflmfzRHK2e8049sh1B0DFI2cx0DvQIcyaHQbyIt85I77WFCwk3BxZHQx%2FcPpKWP1Uqxy4xRfdMTasVSzyhOpGd1Q0D3u%2FWJjvqw%2BgkZa%2BwtSg4x9uV3KkotxynqJXTpaAA6fT9gxl9PGNXM6V%2Fv3dW26Ey09wPHM4Grw%2BDEZPntjOm7zC5AnFZMh8XkSehaUfdYpEATGO2%2Be7kCnRTcHJUIxmASBH6BQRryUCbuLzhOhoC8q34DdweCU5W6xrF5%2BC0gGrALKgcqpC%2FPuHhQtAXlyorq8JyCMMXhtdMGOqUBRJWiZn87nt94B4JoaaslSnY1ovH%2BATlkwLiegOho5o6Td4f8DnclfySteyYlpAGv42xZu8EuDKCNPIIou3JIbnZQbrwzHP5NZnWako6b9Nk2PMWtjoS1yQNIAGEFvb2ZdFGhagbWZVTfB06S4y9F8Se%2B1K9tCJBQizJ7FhWAEp%2BjuH337h1MXRTrHqW%2FhYNZTPnUEZaqLgwwJmEfsNBDPjs%2BRHcr&X-Amz-Signature=4781634ff8d726adf02c7b8c97188e006ebbfcc1113413b76c4a57cf0ba3a4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

