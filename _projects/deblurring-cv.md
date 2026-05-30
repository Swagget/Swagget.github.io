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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAPL2P7%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T044228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBrLcvhk0V10XHzIRn8GaZYraZuzIleCciyo%2BWN3zNSRAiBrG8xmZ4dGD05fK2G35LNYOxYGcgTm9WGgo7yWgPtgVCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9y7%2BWJ6tClkhRrU3KtwDbf5OYH%2Fihq8L07BiHKwx%2BX%2FvlIzJLsM1bJFis9pIYRiGPZoSFHk27waBIAAO52zOCpxG89tRetaVf8lGMa2wx9%2Byh%2Bg%2BQesfY1%2BNgs5FlmVj7uF2%2FGLugTTN8rsChKeg2N%2FlevRF50%2FmBIQwemgVLObF%2BOzWZaxlr%2BF5bZMOcXewnZMqI01CwMqL18rZ9KlhuSn3%2FzBGTd3%2B2VumwkSzHsXCamPaADK6t6lRzYobghLMBMdETrsixYMQxoNhAINOEAWPR%2BOqDOga5GxOVTOPioniDt%2F2hmdHZQzrirjzQg9ZexEgxK8TnEnrsue6HlfuOCfLY7AEirzR0uRe6mO8bq4CwDQebtN2XLu%2BiQhecxa2wbC3sVr6zyvxyHer7dX2t7bF9KJ7gVXWLh2eMARhJM7dzeBxwIXqzVCN2IjNeSgsKq9d3%2F914gHk8mh9XIHjxZNYoJcRbHHfe1l9xubSRvkN4WTdUl1nhV4riQ%2BLHyus2xIcnC0XufDaZOldz4HwZxBe3y%2BJWXpNQ%2FkAaZmd44%2FqTF0MTf01zIPL4xO%2FI6XUAdMGpQuczpS28cdA0L6HP4gmnGovsg3Ze%2BE9MJa7BOFA6OMGlfn4ztStZ1br3ONaTOOJCprywJyvSlwwqrjp0AY6pgF0zOgUTvGgFZhq6Lvj7g0T5P7I1T5dEJ9qaSHgyi2iu58kWvcBkSym5ONF5bUGmgPoZFRnmBTB9E483nd2ftvbh4uGW%2BIIOc164pjpNA7yYaYnEbUkxELHEdM215nYjK%2FePIoCPRTKgFsHjldmavMkeWwt%2FR2VDLr4xheLur7TL%2Fqm1kIXbK08dtAu%2BSrtubjPRdMFUnnd92akZ28rjEq5pVaMRM7u&X-Amz-Signature=e59acf7e45a55f302589192dd2436995ae1c1c91fde42cdd6f589189334de3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

