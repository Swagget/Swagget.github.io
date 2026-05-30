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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6GCIAD%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T224433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICNa37jT8iYtDTo3jgkeeZLbyzkmMo2JYJogMa4rYqrNAiEAjI6jgaKWuJrMGaEPEsd77FAH2f539Hl%2BJyqXCQoOG%2FkqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAskQXdoCOi%2FwhqGircA0%2FtLwqMc6nvkTGhVXX1%2BCP%2BZMo9cYzqxfvwBmiIyL0NCX7%2BQ9qADb4grrWRUPegaYiHjZX1XNMd90KyLelBFYyyIuw5iDQujSioPwxrukAI5e7e5c%2BooyHAUkv771yRGtIqWsQFAOa32Zl8W8%2Bjf44r%2BrJrhSIVx70B58maVxZur6hrw5Os%2FtJUnc4R1RaE9Z9b53OMHl81nLl07rrzkjact5TvSCujXHZ90QsVdmGC5DB5%2BduQa1kZZPtSLEQY0oCV7uZE9MdeWIi%2B0LfTZ0tNj0LQDI1CWATtGmvYSrp%2Fo%2B7S6gfLMXkF9L%2BGvoy7vWUVHUOpre5%2FlUC8i%2FrwOVz6gILFxuD0Cpqu5AFLDLSKE4Zzw%2BIA225MGJkV4TESuabB7zCfuIsQBTF7ZN%2BU3MpwSbcFUBK2E%2BmpaTIZNcJQPJpWGBBQHHps3AhEtS0AUY0MpGuFy476VQgg8HfVO%2F6o2kdDfrnTM0rrUmNyKaHrqpn21LY%2BSlFAMcBOYALsx9Ph9eK7jBK0PM36tkU%2B3n4NQYXjvCPZzc40V%2BTot2IVfIoXXPvhS%2Fsb9%2F5%2BfP6nf%2FkoEe4tTU9sS9IrJO6N%2BGuKCMnIOKvfpU5958O07BrqmAT4tQbLmoZpCalXMI6u7dAGOqUB%2FPMzARH7wFsz3viUXlwvpuHez4D7BaVIHjBA5b0JhOqg%2B7c9LfJYnxueVmCN51TFdKHTpEGFqjf%2FoK09UEHmDPx59Nz7xsd6uvpo%2Fbfw5I%2BOelhlRUxlUqOrnl9FebYjgYho0tzDDTisIq5nbUfaFj299stsUIQvEua5kBiHjz7v0s8uS3nM3YhfyKP%2FUJ8fz6kKiEgxM5ssyRbP6dyAYFUlLjc6&X-Amz-Signature=f1bc41187257edb024020c8d0bf8157f93d9d2e30cde97871e9d69d5a41c5f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

