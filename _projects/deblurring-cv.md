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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIPZ6WE%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T205754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEhgdp8LmeJgq8WDqu7hOapA76OjJh6wjTyrJzcAjkTAiEAgJWgJpG%2Fe0qgruj2SwqMnNgUR7hCZlD0fqDJFl2xXK8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfhqHS1d6dd4CwwySrcA3uAuP75ALUnicm6tX1NbhZ1Q811wcDUkiyn9V1jOx9yCw%2BjkPQexGCmdZOSLHNUESTVA%2Bhhcphf3SQbLgajp4tJl0OcMEFJMKAimndhWs5QkzDgfJjHD0C%2FUP5XyJdTXWCY%2B37L0HUJbgVWZ2FthZF%2B5am%2FfpzUbnsJSrHpSyzzMFYegdtSlCBp6lBBrE2zZZ5DasX8VIgxZwkP0gaPZIIaiucJyMXYgPDDW968rlyBwxlLb3nVVb87nm04XnlcTW365eNtewEOMMRpU%2BSCPAZM1KnVbZN9dQxOxVTJLZWnpNDhvBDIa4rwNtLogBLng36ip9L%2FG2GxOFe5T6oBLPyyi2vkxt1Ez78h7Lr28MYwSKLfBf%2BWZHQTgzGQhr3Y63wYT%2BeNrenIZbTH%2B35i71P82JWzm4QiiY5YpIpSqNXiwkN7oz%2FcRJIw66YRLnkerMzTkHr5QorHOgk7axlM1IfCE2VmBKhycekhAAnlnZvm6wmaKreZGqCA48DtrI1t0%2FP2xhKkQRTPjgPDyy6Z8A9WqSTS4SBN7z5vZVMcGg5HtOkrWAFDO%2FocB70zR%2FLIDuDmYgGUqHGPbixW958VOp9F942EBWdfPaF8xqoVVfy%2By3DdxBH9lSt1xpprMMasl9EGOqUBvNSxogQnOVLHCrB7yxGxsrUnHg9r5PTJHsPhj4Y5DzFe2ueUxX9D%2FjsxaGWMEHVgbd5JzKujuKRw7uSznMlkSENk0Eru0r%2FikPffBd535kQAM87aGdl7PClYEDim2LBkhac%2F8R33n%2FLms2HvvxQfWZ4xWNaZWgshq2I12PZV2mRsuHGd7%2Be9dEZWsZAy9woHBdP%2FfeAmvT%2FsgP3vZgzGsxNsletO&X-Amz-Signature=7e80cfd7c4bf581bd7b6fdb48cb400252ca6493ed408546a7389c62d2e48dce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

