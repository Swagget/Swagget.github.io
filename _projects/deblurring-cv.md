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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UURRWLVO%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T123523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4Oeb55XVaioHKqRdOMW1XvA6nkv0uONcq2mIb%2Bgf7twIhAKg5rsPe78d7pRYLNWo3Yb5rlN8JGl%2FjHWXxzzE%2FFVuuKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9IhsXYHpRQEbdDdIq3AMt0KE5j3tw%2BdoaB0bEvAXZWEcYdIOxCg%2BHBAQ5NUjFidDWIqAILRJF1eiEJth9EBbA4JE1YglIFzBDtam2IpqHD4K53UpP%2BVev3UJL2V5API0m%2BnNorqoMEG%2Fl2osd0WLAlhszyv4CP3gN35nJjaalXvoa%2BLFKEWD31mNrzKa8HcBfckmrU04gW7Bp9vS2L3vprOTye4jV5pxjAnc5f%2BbSW3YdAPT2flVoxJGvNvGA4VAmqQLRa0Nv4bO1gCXd9m8eyBRKBdMBjPcb3m1LPXVCnxvm9C3EduhkTLENo8S%2BHh0dB5P6yY5YEtZJBDJ26qnluCEb8%2Bbw17bQe1cGmzwDSBBt%2FBKIjYETN1Njdkq2ceGY4fB1Z%2FrOLzhtQ9Ez0NAaH2fqac8rjqU3lO2vrARTbRQVyiRvF9RrNtjTaEKX6XICWR4hZfMK2rt9IfcNHaPQYyF64E7pF6z0CAPcDwl3zt5xNV1PNTj5abYuf36wnZ%2BdFQie972oDXfFcsrWcHo0fqqKEGq4VnYyHyac%2FPCYEzQRJZPGg1nucf0gMzxG4iz%2FgZSBDlhwFDCvYvVABIidSLEJoE3oDBvdqLTbPm8FhNW%2FzLk%2FijSRb%2BTC7vJ6Br096uEPNimGru8pcDCNl%2BzTBjqkAd2RXfnLYRQ5SRYB%2BZQybxGBD8xDVjZw5n0Dpz0YhEATIvtTL%2BVySig3fn%2FmfG7iwlafKJnxogy6Zjhfysf6%2Bi%2FfRb7uoxVMXJukcMUjvuZC5HO9W%2BZHD4x6NYtHd5IAs6zh0xGI%2Ft9VDji3j9SRmQdcHahNuADTM0TnUHvA%2Bdh655iY5FJrzDKoKsi952AsiC2W822xHqo5zOnTicCHt9vtPSWX&X-Amz-Signature=9b874b6a290e550cdfce9f7849809d0f537eb7989daee876b0b403937c357fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

