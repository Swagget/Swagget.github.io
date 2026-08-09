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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNLEI5GF%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T221625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BARd%2BdrJ6hjnG8AxFAZFdJR71BL%2Fiy87Ecj3lkfvGHAiEAonbZhWVIwfS7RYVh4i03XJOmFmqLCbp4boQ2Q6kTwUUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqS8ggS4IZ9hpQMUyrcA7dbcwBtEUnbE9V05fJqY4sOQvCn1nLoZ%2FMYW6RjD0nCVp2c5bHJXNoKcRf0G6ZDbwGc8MyvIqpWJRr2QkChQamNgCE7ZhVz3MGqnPBDl2qfMRSsz1Eupzw8HITB2HQ6CSgoqg3hL6mAT5Ld6uARo5HX9Q2v07yJe7lD%2FIqeEK589KhQ3sGoJbcPLZZYU0BB%2B0pQjvDd0NuAWekoHFWijlpywvMl5T2gp72D9sIIG9AyCYaCyDPxpXSoaZhSNZLlcl8%2BJwlPqr%2FgGlruDbIXP0fAdvL6EIV3%2FSb0ya%2F%2BBzFX%2Bcf6aKLgKYBaSCAPdB1oDw%2Fuu%2Fz34Ws7UxSzyF9Ksw6o%2FTixDidDjq5M7bdC9h%2FVetsJOBbRG8VS1FvdIV8A4WBW9LgN9rduEkA5qgr035kXQSPnw751eB%2Be95pGdHnbTfUAeijgDsEwl%2F12Z6Y6Vt%2FvXfiIeaTtxzxkeBO7okBBAkD0ncusVdGraFIkNHwynHv8nDxzRTfZjWf7BKRTcHDUsbHksA8nLjNaq3fabzD7apzFbVH3%2B6dOh%2BNZ8Cj%2FYjrMULrCUDzQtPU13clYC5NV9u57kxRtPVByhu2lZ6Vm69%2FJuq%2Bm%2BSbpOPTO3dI8JBA9G1FBsKTeyhrfMNfK49MGOqUBetC%2FIGNLs0mmWI2RNGiW9osg7dyhB7w59ZJDpnJMSNd4dRpIEPfyaWnz6JqE6QwvS7JoxCcXDVZveU9wFCpdJK9laBwqxTUhFmJrePGKvc98gcX0lu9SoDvVkPTpETGspNZpv%2FMZ3udAG79624wpeisThro8H3m53uidCSlHXJNzBJAgy%2B1%2FTs%2FetNc%2Bm7cTotxazVUY2uSptLbSuUkT%2BNNxwMPv&X-Amz-Signature=174ed48565eb541f0eac2f5a306ab8eedeb93500c8183ebb7a13fe1563db875e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

