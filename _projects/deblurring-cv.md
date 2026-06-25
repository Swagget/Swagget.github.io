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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YV3UPHQ%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T000501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDdmNeMrUmUWXi2oiY%2FymBdpyChGq1h5z%2Bii1EN4vw9hAiAl83FyilZiLj5m4PCYorQ0r0blsk2flLtEB29UaioRFCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMD0dd%2F3zAENC1MEL8KtwDCGuAATinb0YSGZ1xd2SQIuCtKYIpvoP5hJLEKR3pJXuedY9z2u8vQ8a%2BpTcCV0Bf%2Bl4PDRfagwae4FW%2BzJQM1s3Utc6RwalbkTO7AWKLDNl6YuNdQ1x8ZzkxnqYo4tBlAiaeJZ1sume7s065nT38u%2FZn7sYIkHpOJPiKGgx%2BVVmFh%2B%2FHPJEXnhgOrY3eAMGQ1qr0AnDjZlKqirNrX7lHixIRfQEEKDsV6U5rCvRWRyJS4hpkZT7K%2FP9hvqtWELcuXm0%2Fi7e%2BtcLgWpPBfcyq%2BtC7qiyCjbd%2FxgraJMM%2FlbMvivyt4Xb22qxbUx61cZxeR1Ig9AV%2BIbePj2ccATURknfYvvCaCmEIihuQrcbuKZFS1iKhMOh45B5oUhMr8E9MLtFYQjOC%2F%2BA0AqEtJBr0AfnJ1lGdL5F6Rr%2BI%2BWkEXXo9v6BV3nM1%2FqWftKcvUZuSHSZqp3X636ecVSb2qkcQf1A%2BskgljQ2ujzg9XlZKopEQZGP1kRvDKjGU0PnWqiZf0brEfL%2FEQix2033Jr76XPWjFCnVCbOilhrf%2FgCxhupZvxHoRnoCkiA%2Fqf%2BUW6ZTlO2vcfD3XSB6zKH5wq3hFbANaj%2BM6p7c6UwAEMhRhVScAnTBQD17OsKBCgx0wxp%2Fx0QY6pgEC6UWiot2TfbqdCyGnkTBROhDjKXHNaIrnvFe6XMMdmt4S38D1r5IrPIVOJQCbLvPl7lEOysEZeR7KUU5SgA8%2FOi9Jkj3badxpjNum0wYG95lYNLFchF7Kgirnw3d9PZrMXKvCv6cZ3ONT6BIKaLekbiW9b7GutJUBKI%2FYJSd2v1XNJrvvQBrLSJFcpQ%2BWdyZ1lPecFodY58FnlA4ikwQBpeQI%2Bfe4&X-Amz-Signature=57fe778d0227621cc2f8ac6b73665eb3b862e89ad1379e29a6f76e6ae163adae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

