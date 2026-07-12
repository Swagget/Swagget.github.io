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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466623VJZE4%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T174659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIG2LL58kW1zr7rMNdV%2B6F1SOuFNBvoxHfjX0W7NqFcAMAiAo0f7%2F1BA3w0DAZx6e0dgZy7znBrOy%2FlsRavE8oVomtCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAIBCqm5u2tiQIo%2BPKtwDQdYSJjsWaOMJr4SOvYrW25CVdgSApBVU0CTr8fB5o9NgS1boQSrFtz%2F%2FckkCE4S21Lv271GszUiY%2FJYG7tp%2FAt4mXj1l3%2FQH%2BJ1IB8WTERiqtbTMH9CvV7SddbI%2BZmZ0Zv1cpy%2B021qLArKn3RFB2iFOWo6xMmONHuJ9mWR6R7HNmmkH9A3owuU9gL%2F6AUNW4SUybF6%2BWsZmkftToNY%2BUpkcmvqUwfyANnWT9Pb2MxwvhXGahYOt%2FvfC16MtSJI9CoTyVqIq5iH7IeU4QmH6LnPP80sy8AZt2iRP%2FUCNAQxl3CKGOlPKYGfLJ7Wg1pJzotZk0u4maxoXlEljzppmpczOhPNJrom43qG5jz6oc4M5TqjqFjlinh7GsDPt0Eln3jZRSyYfZFcCkj%2FekWMsijtrCAw6cX3eOdy3L9qaI8sJvE3RVTEZe0XMw%2F5OqCn6%2Fr5z0yCPdM77tiNVzXe2aIR2jcFma6dMpr%2BWP83qRTHaikt7cpJgFh%2FPbahFCgCqDEVHcDZnILRs1SfjrVikT4551Izfry8tHuGKSfZeUCvASUAJMAtAwNqliHLlwEo8CXTg8foZ7Sj30Knuy7nqWhuJcUetp%2FUThwCSlrDTNYUN1RHE3OWJgjzOM7gwrovP0gY6pgF3%2Bfr2HJoDv%2FFcR0pnMjvEQ87AhJmcxjSuMEeM3Vx%2FpzQKm61Akj3akEjLFV5ULuc2GCnTw3ch1wMcm3dWKOe2Qwt%2FQbFMpsf2IxB2U1aQ6hIy%2BGUeVb8GZ7uN84HU1M3Wz7X%2BdPHOKrL0xsGVE49xmrPhCzXyL68%2BkMaCkXs4XbRPdtyf0EqJ6%2BGU53K8dFTmLhU%2F%2FoIW%2BrTT0C0T8zTcuYPgvCtO&X-Amz-Signature=0c87a6398ed1e39edfb364f770f11a8595ad7635c2a40898401ae2af0b02e269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

