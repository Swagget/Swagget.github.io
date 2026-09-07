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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLBIMUG%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T052128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFxqiCamIoaRxSojMmoQGNLOyJcsHOOkZKO%2FD17J6YdGAiAfICidjjVSzoUxvUq5yrFapUA8MgIkBwN2klnHOUoezSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMnssrXE0RBF6kcHyQKtwDXa7BDeEI8waN02TtQkK%2Fg7tqpvOLVOqwfFcrIPe0NgRDdsoqlpxqyXut%2F6j6Iv3s7OZEzhwOjAgn3vaPrvSbj5vdnblaE83%2BJHpgbzOkit5lVWkZe0yxaCQsoWfR3E%2FW5vd0ni4kPajjqZhlbWK%2FPoTTeQbtfIwarNmDnCnEEmlDBsmhjr8325WfOovQ7Wy4MqJj0gXBxV%2B1qNUfmTMGWiLcxnWxX%2BbNGtZm3djow1qWfMje0V8hITDyPx9hvCxBo8dOIzNrr63h%2FQqDPx%2BsmTJsurLiiolNGJnQRovMoiYpPZBJVJQ9NQlLEBEd79fstp7jKQ%2FGOsWqlihGhakrxjQlkEcZ7Vsm4UgJc7M0tDspT6ZipxsgAA5R04C5sNo4vO1n%2Bpyo2VAueE%2FQiT5%2FXQ%2FLLRM7QQVvKWw0pdKANsczFqv%2FGDE%2Bae02lh4roO3TUY05RrHDcfe6V7m%2Fk9v7kef6qR%2FvjjpBA1xkDXVJfnzPU98gV3n33XI%2Bod8wPy3AShltSfYOH7GBdruI%2BY%2FNI0zRZUUC6Zr3zKvNtvR%2B7yoZ8d%2BnLbI5JjEe%2FwnasLqVw%2ByKY7FTy5z9MMuAE2AW5siitAR42H%2BlZ1hVWCgXlQh1Frpsbv7BM%2FySm%2B8w5Pv41AY6pgFnH43tSMqLjnWNrakVbtkYCxKjQkg34QPJuG89CBobokfXZB6ooMo6Md8pMToNI24rQpoCq692xj4PHZ52gcRVEWfqiZh%2Fqt3xCzdbNt8WLaof3cRokMvm1j%2FSDhyaUxfR7hoAslt%2BQPkU93ryvCHuME%2FFlvSwoeJo9aEqyvRFsiRXpEdCUpLrwXSXogLvYg2lPaNBXwbe8LsmjsSQK%2Ffnrvb2MaxJ&X-Amz-Signature=e2acf06b99c02b60b8b79d0d81cd5fc3cf835177d5a724c9690aad620477e462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

