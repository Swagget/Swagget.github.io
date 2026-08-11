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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQTHCRQ%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T025710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ3M2rfMk2YFNO2XA2bUeKRKpXds5vdEnI4Hggfc0U3AIhANay3DYhxR6OF0A2Y%2FToLbDGGLENGspXHxXP%2BAhsGKCSKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4uUuzXQr4ddWGIFkq3APVhPmZYK9iFvWlgZPAOJNixJCJyQLYaCInwnuahknz97wPAJqkb4SI368saG5%2BQSTvVo7geUs2k55wnklMEBtuEqA6GfDS6EwTYnfUM3RJ6Ra5Cr1KuYT54el%2Fxo%2BcSzDDvxJPtX5eTqXbctuyoOsyuk9rCbOoJ5zowAtGI9OlwJGrkJWF7HNQXQFMze6%2BdH6Thg90W%2BbCOrhL%2FQV7PHARC45a5XejcTOq4P9kD3v48JjZzRS4QILX%2BMMgOB5MC94Q7pFnOyzVYfLjG3S24a4f1%2BfZKXwhKDcRDR6UJkB4oVwn5eKt5m68d694jjf8H0tAdM75JQ%2BufRL9FmI0jUC0wPcf0iYF09S7XTlQ0s7wlvcjfMpZ5a7%2FBbX6zGYjC9r2VUueOsO05BsVGztbAOptaa9L3dDHw9qU%2FfoZleabp%2Bq%2FuEKw0dInKZJMo7xiiJSDZE9g9ZJG3lASXWM9U7FY9SxswzK4NC8AcOtg5IEgWfA2uDc%2BBEkylV89f10LVXLFneRzqxvfl4Kw80VZJTGSAUYJhLs9u5IFlBMbrwoNMnlKF9%2FB8%2Fz435mQ6s%2FtihkAKVI8AAUUVqubuHNri%2F75t0XjrsQlXD0ZeJrmP8NryQuSsw39FP%2Bm9IjuozDL3enTBjqkAQmqTVvYmK0Uh6ApnKWWDexbLkFhrGsrgn0JLkACozinLZ67k9IYugWtVAuBsQecExVV3WxdpRLSIqPuhuMjV8uulIeZ9%2Foe9hcH1xzLWK7C3n0tlcLhPrX0BGCGU0jfZGLR0ahtrQCoblOPAzRAZyZfokcezD4wyW2Sz9EhczNSrjyqywLrvXOZp3hFj1R7oiPTitBo7mMmxsPXwGooaOPTBnsN&X-Amz-Signature=464a53515d72cd1be49a3d2af0c7340fde058e7c711aac43a2980f246d7f1e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

