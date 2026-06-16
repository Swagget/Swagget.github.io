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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TORV7YE%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T165323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpGMD5zf6EWqu3zjjrbRT5Nsg41vxxW5S79F3QptUjXgIhAI8ST0H9kjdtBDIsT%2BnqAEFSGgnrEs1F7a%2BY575alNCNKv8DCHkQABoMNjM3NDIzMTgzODA1IgzSXB3zPYzlzs9Bmnwq3AMI73srkc5G1q1EvyaSVop%2FSE1huCrAKq8sMxBrceC2FdJOtalVbKhMfZE8tlDR5R8wBkqBXRF1FoSwcovsjBBvRQ69iNIK3Q0ikqBEaAq12yawSMzej%2BKPl1%2B4nJ2jDlHUwNbmv8dk9D3zi45T903pH2rwoJx79ar2oZw%2Fra8%2FCKMbDstTO6E2dK4QuOGNwSZajZtYlyLJlSxrr6ifRGCY3XeBtfyVIwWe72Fw7mYHi3%2B7w2fUa1visZS3Znzo7HHhB6pItjfs9Q%2FZztnh%2BsuAG73rXxdlVFo6%2FKZuQad%2B4bIF1muMPxGxOdbvr2GBBK96ZHisou3S8O2wD5mosT7eKioK60X1ddj6OTZ%2FQloc%2F8BI2TrXVjlSeqnG1Cuvevm2eMGUliEnrFlrLA8vT%2B2SjolAPp5XXfDD0ObVcB488nfohlYJn%2F71utE588ImXHOIIl4%2FoiRmjtJoJa4kLF4K6jS7nKVSEsLvr18jkg79o5DaeTBJoaxGaX5AqgB3VAkQKnjcn4BpbYp7K6T3xaxHFNwKu74ECe3GQq5in5YqRPCRkWr%2FgWAbx64oSi1N%2BW7Nrdg8f1I9tdw%2FTfJA2fa%2BRjl3NaxMQjYb7FHszLD8cfRNZIKqs7Rt9lQ7UTCO3MXRBjqkAYf7%2B%2FtbUDY8x4tefJifXp%2FVUQEIIYzva3TvqWFYo6BAQnZsS0vyD9ONkSaV11SPf3VQ3ciwcR%2BC71ha8vKLhGaN01q37PAgbbSrqNUSCsswAyjOU%2FavAZ2TvLzTkA6eZYOT23BT%2FUzIPRxY1trWb9L9OdrxcAAUVYM%2F2UZmMtdXQ%2BsAVz7sZ%2BGTNPB2e%2BkTdQUdsxNAX560323IpFEjehCEE%2B2H&X-Amz-Signature=ddeb2d9f0fc3fc080f4517b344fbad0584e143ad23b4584871b290795b242575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

