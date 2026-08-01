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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWA3YRF2%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T075732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAN6S3fYO9D34PSo6G9dKCDrnbJqkM4ybq7aDrHYxDqxAiB1FAShmw6F%2FUboQRaMPrPEn%2B7tm0f0wIZdvlsWXLl%2BUiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYDmaTvExBYlWfc7oKtwDCLLK8b0qH6yZKpRnWvkLMcIeVTvusACLXw9eQeUVHCEWhSPD%2ByiKQLpiMEiw2dh9YFo1fEYpaGQmMruIDxYuECUTZ7ykIywfg9ZD7x5CU9alTYAVFz%2Fd5o63%2FtVxoe%2Fom0TZnQWDSFykKIfHqKgWD4q2Kzm1Q5yswN7nmrOngA%2FNfeLThKx7Tkw6fD5Ru9fKr1DDbFD9ABiZYsymQCDsaj3YpMztuI0HyCiXAWuZxJSXsbpBBCIWdTPn1AhNqixQYpBIU1n%2FHlpIvtNwuKsnh%2F1XPBsElDezqcc8rXwkN29RWDzPah%2BPor3vOqA4NLmDFsm0VHrRUgq26bzijT%2FcuVGT0ZwQD4HIqLCiqjCyZsxhxcgKaTxiOEH4sMxVFNKILj3xszTfIO0CZ8PoSqwOl8Wqu5cgme0RM5rXzG7Ywahfn66%2FjYj9XyMLac2Z1Vxa6%2BeT8gBH5ASajH2rL4QPvUYC%2BhUHjtWgog7SrpHFF181k%2ByvET5wafDS1%2FCOoXCwBoCp%2Bkj4r96vw7bSGkAKntM9JpXXXytqsRQoIs%2F22mSDjT7vrZ0Dv1dJ50y4XhEXI7TmOptKxmlV5LoJH7aQyuAPMg2KC%2Bzxf3G22Ke1Kwr4Sn60ke3bWyOK2www6LG20wY6pgGz2G0proj3pjHGHSwLl44q%2FQ8KTDhP7Zd7H6J3KAiqWmGC05CF9v1Jjf9X8vtlI1mNzcRwN1e1EQn%2FXQV2fa2LhClzEN%2BY%2Bb%2FEFGAdL2vCMmmKS72gXdco5OJW3yHlmaJF%2BO3LZBzVWlahfD0RtiVLrBv9wpvijiz2RzKS%2FGBeGRxndrcowJrgSQGzhtBhEiUYd%2ByCfIfEK%2FVyKdHCHmqPq5m2Fcdj&X-Amz-Signature=cf4d99d2d821747bcfcee2aa800fa96d6601fa8078f5917dfac3dd0096c5b87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

