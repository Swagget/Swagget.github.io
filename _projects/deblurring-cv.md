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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUFCGLG5%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T063618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC829CTO7HHfSfZQ%2Fp3RopzHKZc4KpUqW26yNPvxMCmCAiB6QoZO7IfLXFJX9okyhsZM8iQFAfW5FSq%2B5b82f3M%2BmSqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMChKNc4V9OvaFzY3KKtwDvHCb4GBlFNNMnOj6X77ZmuutXDKzHXyds3K0WEhkqmTyDjGFTL2bflfbyVyb4xKACs%2FxxlD0Xj92XFBqY6%2BhXiVwngtjXTTC%2FsqZAwzqbf%2BZa6WNTy1Y9fDYP%2FnzYBb7XKQc4Cy8IFQN4cV1bHTTaFr1poJsZCADnoRIDOxQ2OdDbQnYv1V6btTh9eacwojSRNgwpj2WkVp5Vb1OTBrkwpwPu4JJbqvImSi6HcknukDaE2fp1mm%2FaXu5ibgzrkytOxbIC%2Bur4EcKwQt%2FPBH9lJXPsMOKODcRk7BZ4p2rSkKjsZIDKSYRQgibtCwN5wM9Uqulf9ktrCG7R0qrzrWgX2ZmvJywRmsYCxzHUnmie1TI33u0DXFemCFsryfpiTN0tI8dUcD9ktotYvkhqA3PfExwrVCmLgQDYhMXk3sEq7ufK%2FfWel5dxFVrsPkzFD4f0UcumPj5KcdkjNq0gI8fhmarkHfHewVl4HvwIxrYgIiSPScQoNjG9wP6VxtAijuCd%2Fo8fQPMqbUtRhXW4zWthufPzQPIjcvVOHiT%2Fvil1TZLxC1twMFUC2K6o0wSi0MYBDVMPJbSZjELlfYtrdf0s043QDM%2FAvmk1Fx56lIwKlUs5Gk2TlbXEe%2Bn6Kowj7GT1QY6pgHXCXsEbKHAhpi78HkuIqNMxq177dMAKD4iNLTIPHtC55HNslsiCSVexj5VIjnRt7mdmuLaEnCLoLJZUcupXIqrEirncmjW7R7Ln4BtDoTZ1WLesSuQVwDNYslC6iJ97336KmCyOl4wKaV79N3iVU7EgSFseGGd29WN8srGIMfsySHuXSsvqHTaz7No9UV%2FGKWeo6lP90S%2FqB3IQ1FY%2FwUde3VXXjlR&X-Amz-Signature=8fb3ba3c95d05940c801dc465d8ea298a88ee2e5a052c5aeb03bc11cff4fe2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

