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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CTGEHGM%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T171036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCiZxPI3dOIWaDY%2BaRb7FhF8mDbkrUkHZSRuyQt90HPbQIgXAFh2%2F4m%2F%2FqrAg5wO5tQzKhzJFvYPirEIGYjnFlr7DEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmVXWAZHboRyL9H2yrcA5rnKs4Dy%2F5JwZFyACcrpu%2BDWHI43HleoiTK%2B4hVt9TQPyJxDvmj8hGVjAyIHBb9PRvi8BBqG9UMPHCtWqzQhnH0v772kVe%2BOQ2T2MJF5La4%2F3dOnNo9tR1oTiPvFxBJQJ31j2fLw9f%2BL7Je8ACn7MJajRdaN8OvjjO8AkhZFg5c0fNey7IiAjUWbHFXMYuriSIxKK%2ByRniK05Jx3vdmooTpvkYuT8y3eA7N5%2BGp2RgH9Ci2xU97lSZbirH1dyRScIC%2BE3zuYf2yzu%2B9FxQH%2B1BsGIhSlOWPdmKn46%2BK36Rc1IOqCip%2B4rHDBUYC9zb4U6%2BSXcJmo%2B8P9%2BhJQAGdcncujMVKrhD%2BCO4gxfMTGybqoNryUdfaHsJjPAYY1c1mNtfp9m1TOUrRT%2FJyXTSFIIHwlZATtnrAYVFx%2FMNJiu7mZX32wRNhops6tAx%2F3JoeChV%2FcqjWakX%2BZMFqeGQA4TO2dHz5PAPX8BKX94gT8uk7kNT8uDERe1Mu%2FfJeuYJ1%2FYL9nB3chouPgEn5Ggzvuf8iQ9DHTCPTPmBYDVy7FPtYM5Vboq2mfVsbbl6tUR0C9%2FwYmZQu4v%2BU4lMhbO1KmnrjOj6p5WAUHTb6txGoa35Xq0SFkwvNOKXEeaifMM76q9QGOqUBlnV8FpVMz%2F38evT5lr1URnDfcG21VggAJXbdo02zB6iEAwLhuN3j%2Bch1hfInuXDw9QZW8HK58hDkfiZ9tbvGHbJY15UsH1mkfaJhU8wB76niYp%2FlQYQq3PsRgDZJstMsli66PXnMhldKq8HF4CtoCsIl55pdiJ9kRH3HH5RN1njqW1gg6ENHR9%2F7K2I%2BYYKjOpLhlfDWuCF3rPIK5cfaCsrcMsE7&X-Amz-Signature=90e00a02028d2e9fc1a360e57bcaec06577f6f0a9c92b7ea4b88c8f0879b8224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

