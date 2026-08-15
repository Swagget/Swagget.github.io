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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGHCRKP%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T171004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDOI1MQzvO7T2gq6HUNDbQcxUoMptWxR0uta2Umo86f1AIhAMd%2BeD1p5HgLHPTsV3JpxXOfzJw7V6kLrRXOQepBYJ1oKv8DCBUQABoMNjM3NDIzMTgzODA1IgzlHcrVm9FI10yy3csq3AMDs6euIY5GHByIn%2F5XrDmQHgBQp%2ByfL20Z7qFpyXJ6jXO%2FIrMB8kuoTQmFTjCieGE7niFF5q9C0eUE6GCDjAsA78bVnEEYdS9JCo10Wzc0K8sP1v2d2q9pScZoYccDomoM5XylLkBoVH%2BTShGTroSwaxGG43RClJUrQt%2FWiHavibE%2B%2BW9lXsW6GGM8tV%2FIL8SEOrS18NoSsPklFC6fw8CpvWxkzd4SGVpbjK92ieDYg%2FcFBKLDnv4DA8qjd5ObkqQWtb6fmPnU7Rt1mXGcf0EcbQYdL4RUP8bFf6ChKzTQSd2cewuKY9u6jOtPl7FFla%2FBeetQuG4lZiCjsQaym8rB%2BxnogygBpEf0fHdhzLDd6TXGkU1gh2JKUJ%2FT8KeknQ3zvtEXY92jgu19mcNGUCjTUGslRfLMl1oJoAZEOEGtawC5aOtWOkJialiGSUrjifdPVxUUd25Cyy7pCygPz%2Fvi1NgIbayMXU3X%2F95c6C0G5jEJKNLSzHGVLlTLCv5dKEC3nBo43luitNMtbao0ngN%2FBK8uek%2BxoErk0%2BJsUa%2BPR%2BadWQ2yYO54xH%2BqqEYn6HZCr1xw4gmMfoFf24d%2FgOWe1ZyhC5Go3duteyKWYnyP8W0SVhnIFo2y4okWvjC9moHUBjqkAZiuPRrJNpuSV8luGNeyfwo32SYUHboQdkKwBfPwiK9m8CWCzGjcUjvC%2BOg6UTg4IhNX1bJyn81WmexVV854aYrboMoJvnR%2FRCllb3MtLZhgQ%2BtTANiZkyPr4lCrrqJMahYvzAgk9tzuk4ogxKvGp%2BDet91ldeif0rYofDJyiSMdC%2FVSPXwFflFff19BocpvMRPJ16gXZ7fqwOgp00S8Ag4fzkvZ&X-Amz-Signature=6bf959162b7cfee7263c85553f4423a7b3e2f1a352e4cfdb13c9dc250719c1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

