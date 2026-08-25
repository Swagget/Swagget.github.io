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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIYLBS32%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T182027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIADjAj1ai099HN3Xh1iIM5kdSsIMdLaRIzJxpUrrGcn0AiBBixvWDOfwgB%2BC3fB47P7QhjoOknXdBhBDo9DK3hTADCr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMxNXYQa9eC4hqRitrKtwDdQaHoH98legxbEKBahYW6VNrMFwFhni8knG9%2BzIqBqcV4dueQ8EMWYaYH%2B5iGkyr51uX3BKEald%2BD607R0HhQmVsD5dds64pNaFdJ6XzaBzFKvu9BLQV4FupVb%2B5sX%2BDk%2F6rL8tRpuP8v9y8pQmcdn2Ca4h0mVTpM9DMtUsiDtFvYdoPIR2Hgon0O5d9oRiQjSf8u3HX5wAzBobwC43GbiT2Ocy5eDtcS119pZa7cAN72SISUhRv734VTkNPvkqWlTYV9c62N7xzGPERT62rcDYohqZgkKHiLpuzU8F7m3BY0ukGCTOH22h%2BLFm8Nmw7GPE1QIZNhS3bT0L%2FcrAT3m5g3JlxIRj%2FlbwZQo7oQbFjuhzj%2FebmvIDsDLPwPNImLFEakCosCHdN8lqpuvXqnPaq%2FvllEEOIO1M91TFuaUtsGQnLe0LG48c1YluTNyQ%2BLV4%2FsiRVWdreSa%2F0Ku2GeGxBwpa2wZQmKqRtwVqMcd3tMDP9aCq%2BFj3y6glLz35ht%2BfInRK1jhVxyPgML5mzjfgwmUDJeILrDGmqHhZHlnBJwQIN94ptVbj8OLh%2Froi6MWZRLdagpp%2BAg7u%2BQ97IkjNvgPsP93UIc9Ji1uVyJkMfNqz21Qk2Ee0IUkowqpK31AY6pgFFaq1H0iuOsFHKOFfYnfOV4H57vl5Ph5EcGFEgsf9yoG1DZxHZRdfcKoZYFPrdaUN%2Bj1P%2FUX9hCAGQo6FR8LAam4df45uYdxegHqlUyjBXiJRA6HVQ3NtG2qPEK%2B66GL%2FkxT1qfhMX1NsLlTHDIGJjoacE9%2BTasLeWKv2KICeneM9yiryMuhM2A59vZInV%2BZmHnfG%2F1oKNAzgfZZkwnszYZqKEFCWD&X-Amz-Signature=4d00113060e656a51a5100b1b53641347eb5a72a05efc5d8a8c0801ed5f8b018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

