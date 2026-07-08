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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKXBA4JR%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T171536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFhKKYdruv7iH7I5E6HyrcsPtnUYZJrtvntQ%2Ft%2BlAE3AIhAL%2BQDzo9GYpQwOQsj%2B3zwsHoANHqfnTiD1WTD4qcbi7iKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8Up8h0ATVDMyDsIMq3ANQbCTTu0gOy%2BacKuduIeD20o%2FHML4cwTtlt19AUp%2B1h54Tu6gNwTL4GCcjtnUCMQl5nk7jekMaC4CzlIQ1bcfbGmcyAUiWWYN8yo2%2Bx88MIiRBbK3rxf62ARel8sR3WTLIUbyp2INl%2BU9GL4d8JdGGw%2BXK6V30K506PcBH4NZ%2FWhb48ORXNqn63WVGxfCt%2Fs%2B2FlVZOEPeOOLGhPwuZE%2BOVcLY%2BNGIm4ba%2BnmatxDROnSSkWvwveD58NfjJLj668dE3FQ8YHWncf4Cd%2F36gUBrKoA%2BzWIQPlPqGhW8tuaTP6Dqddvwh9Hh6Y68oA%2FoZkCqBOdAs%2FKlLtLarrl4SqHXQR1wSveddRnje2t%2BLs5SfFtYOPmvJR%2Ftlc%2FN2Q7BUkebJPLeY%2FoRAyPftu4cVNESmI02iQFd4kBojULzPzKDsbZh3zQZHwzoy3AXpPs0VOYOloCUqgoDCykrVlvTRHlbFH1ziRnQfvr3dZm0f0p5HPTdSNtzdV6wA6koPksnIaUT6fHk3rsA8B1BOD31VN1UgiKfiDC2G9IZXzImRO6l6OkUBgXIb%2F1PG%2BBYcWoeKtSWaGgFQvwNKJSYBnDiKsEDUIASG1pG5G7pZaflLe%2BqJZApQwb6kHDC%2FT%2BgmDDg17nSBjqkAehvBv4AxAD3AtjpCwLHpBZuX6JP7ANaGcldj49R2xUAkGfdHiwCAyDBBwMAlNexVYyos1uz2S4BvtJiciIjG7Ej5keOabT4H2xnUV5yOxMsV4CsHsY2fmh%2BrRWPLJV4STl%2FOt3ED59wXTU%2B%2FYXVazBRn%2B9YIth7zeqJXkZnNH0ZQ9ogaULrVILC%2BTPrOQAy%2BUqCO9v2e7V8KQLOjyPP9EpxMfkl&X-Amz-Signature=47ee5f513fea2c3de46c19f817f64d4465e718a3df0810f20a769648ab698fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

