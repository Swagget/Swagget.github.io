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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGF5YMAB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T121014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDXLE7MfdUWxI4Kku2nDpiv%2BTBS0J60PB9NtE6Ra1PMewIhAIeL9IXvCsi9N7ivlKE1Ng0oO1pUzV0X6s6wuU2p8qpZKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSI%2BTAhvc9F1T4xY0q3ANTjVCrwGMDl29LhWHCCQxiwOSMUJbWOvWiKKNUUfAQ0P3vSHbQgsw3zjnavrsRrKUzwyeKih%2B7CjHEkdvFMIZYyKtzcR5IH1wEAfm1id2tuiX5ia0nOc0AMyTsgCIl8u2v%2BNDqHwlVdR5RpQvCZDW689yEOiJu7bPJOGukGOzDDc1YvVin3jSHbIIZWLqg%2F%2FLSmBCIX%2B%2BY2ozcP%2F9LrPJMXHHODYH5B21tuG5QZc1qUx%2FWadKeQ%2F9qINMWRztHIdascjHIXBvBTMZbfxUDw9mo1d3%2FDy%2FPctk0NiQtTD4jDDZPMoCjmaGOCp8fk7QhgKzpa3u%2FNXtG6oY%2BPxZ2H0VSn0DSxCkMJWw2DbVQX%2FigspESYDUkDhYb52Ig6yuKTqR4pycSlXtyESAvg3rtzph6CGuDG04qJ0txlEfmTC%2Bjp0Fy1B%2FdFOHWEZeVvK1w2lqzilx%2BWubl6P3pCKZ43Dj7LraB%2FWV6KckIejPsIvhhbXXUqCikmlSKYuStNI6Crou89LjClbOQX0IBhXfriUQaZH8ZhglQ6ZSaXdXplVa5XFYH0lGf0Y6s9yf2u5FFEEz9Xjs8T8QgQvaIawh7oyC45GJrtMynv%2BdfT%2FxqDf5om00MDwqj4BR7xbnzwDCq%2BsHTBjqkAQpo8qr%2BoVxC4sfZUFo7%2FmTj7p3r5%2FPyaypM08IY1Q3VyDnl8JJr6m%2Fyd6ctP9EgaoxDbteVFoTAA9dVJ24EBkpr8ZDMjPtfGSERPxjGVdHJ7Y4YDy97SPcoKJnPRWspOnsRsGiyZOCCJZvVeSBLQVvFvdLfQrIw1UR9VVi8LkQlfERCvRAHFw5%2B8Cl%2B3LW%2BwQTNQlzYThFlqyWEs6RmTnxzrL9R&X-Amz-Signature=f64a200b0ded77f3cb04c05002fcd8e1a100c8ab7424a169cd8666355d4b5bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

