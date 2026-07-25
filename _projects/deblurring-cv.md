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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAV26XO%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T164148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD386%2BG1BVhW9t%2FplzH%2FWUhckitl3kET2UV9fo5QWSH%2BAIhAO8PyWv4le4%2FxJo%2BYeeob9nlH5lGroA9owoHFihXy0JEKv8DCCAQABoMNjM3NDIzMTgzODA1IgxAw1NVqfDudcxWhlgq3AMIxuSBhjyyhb73fHSq3kXzvZoRY6huPNYvPa80xrT2YMQh71abGJSy%2BJBH0yZ%2F1xvgHdJ3Uw17Vv3TG2x7iapSx07dIpcmPqI%2FcZdWrTfrPTLaFBGxkRfjYBlD34IEto0yRp1qEWtHFAEBK6rEE1edG9BFE4xNCqW%2B%2BuqRshv5PUll9FPUT7pG%2BmJtcLszgfZ6IXolli5U7t5EDHJiGfzAMHiA1AUKooD8S9RRXO4Pb0f6T8cmE%2FK4vTONQiJCtSL8rzKR29O3CdF6n584%2BwfBjjSpH%2F15XKyGqZpTppVsaFd18rsrqAU8NLJLyXe0fzQuWw8KMPJ3YSmZ%2BVN34ZL8%2B0xJP37i%2F0WwQ4vnSVT%2Fpj3mewGOaWgrOsI92PfAmrA4MykRM5ehmFbVh0ZVsLBPBhjgj%2F25f0lrqRPuueZbmLSm1Zw5cCvkqffKq%2FabYHYiWMVhEfc1MgVAXHeQbejAzV59gZ82mLASP1rdy63HU6GY4qA%2BoZHAxEZ25%2Fj8ztcjbev406lZXIMv2PY0eqmkePM7ykgjIslKjMxgMifbO2z%2F2ukiFEZF%2FQOdjOTRtI8rW6zvyRGDmJAzXTZFjjqNFkDSf4QY08f4VS8piyhw6v34PSP67Ciw1lIZHDC4pJPTBjqkAb8f7rSpUY2f6oq1sN7Pel5G4yyQJ3X094OgSoD70fDvdue%2B1U%2FHE21y9QMWPdofS179iA5AA0Gtfw%2FBTdx%2BpqG6HV7%2BlRNKotHP1IPVK810ZL9qK36X68bTcVUMu5xQQCjO5g%2FyNXGRTc30me1ZU9uuzymCuGjW%2FrcO4VlyIk2C6bcgUKPdvaHN9KVlQBkdSnC9tOf0U3OLc%2FFpkKyVH%2B5lBMWc&X-Amz-Signature=56d9c46ff0a3a1ebf0bd0ca51861de86fbf1983964e4d9997f902de1d21b8645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

