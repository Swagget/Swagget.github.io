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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJYRCIC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T101704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfnkN4YcxjU%2FFUmLeOu%2BUrMu0GDojkkDSOwOU4WvEV1AiAcJyqwZxNkdY3kU6Av2b3dTEFTMb6tZxmlQlEkN0NH1CqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQyh4Q7PiJIKnQCl8KtwD6yuDSBdk8S7f9gtWx0BqfS4O5l%2Fb6n2WaxHqYRLw%2Fv96BwBZF7L4wKAM5Jz6tbjJvtdOmdnQxA9r61WIOZT05PmKdkhZjjT2Xu7abJ35DxohokG63h3KzmjGVC7AwM6QN8f8y4wDViUVkih5PJ0PoTqD4IhRBmrmAGnwmJdzx%2F63L%2Fs1aLxU2TjCzW1jhRulRKQy5%2Fb%2FdOlKhk0guSk2o7Uu7VPExPMekOaghmeRL0bWFPTYDh9eB0SCWPZojURmXxOMOfeNJhBkZXqxWo9gN9BIcu%2BsMNAZ%2B7g7S63jVaoOz4SqtnQFY2shi3sN9Up2VjGv%2BmIr9qJzxAfW20A0XkMSumw1%2FqyKukNvfWtLMxFH1AKMXFd7wI2%2FJ5PJ1jKDqaHz3adB60O%2Boav64QA%2FqF1dqkNqY1rwDPQh3oxozpuMdvAMDoZZwg5O124aAKsAfPhnf6uq7dMETj6CDWDXmmtqOIwMDkOebcRv6MbJxCcVCQT5F1Jq36IIAF1OzP1ul%2FejjIYu4XigcGNMPGTafGEge0VGVuJGBK7RKmdBL2oJx56UnnMCi%2FpeAOfZ3rzL3D%2FU4Z5pakdCrmMfJY7sc0gcwGfPxeliATyZK2zHqZuB3k1Kj8%2B3Gi7zzuMwsqCg1AY6pgHgwN%2FFwQXMh4yPJTqAYuBIBxkxS1ZrOqa%2FLs%2FXEkxpMtGNZ2Yg6JS0ZvKwrY4DBnczIWHPQh1F9eqcE2bozRU%2ByW01nwbEhXGhFEbm8w6Uh8I2yAS9jM6KwWcu%2FoLwQZ98qUHa771ZL%2FPxjssKv7jWtEheR%2BgBXxqVofwJD2QvBC1K2fZ8NpWZc5sbpPG5vAKA%2ByYbCTzo5WZvslyMSxucPhAd%2FQ5h&X-Amz-Signature=f1ee8e4e6910025d6defb090d0c0112ac6c08954c89df86f6da66b3cd98cffd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

