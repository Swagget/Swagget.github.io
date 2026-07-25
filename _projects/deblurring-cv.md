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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YWZWS4Z%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDEC1uHhhCcgrkvRK6s9YCQ2jQgYYS8dnNS74F1OMVDKwIhAME1Rd3gL6srAO5KbocUPqNvQhYwNdm3ug%2F3XEsphm8CKv8DCBcQABoMNjM3NDIzMTgzODA1IgzV1NsuIhyeCviCc1Aq3AOLVzR2yOU7CGHFLwcKaUReWiMkrVinUppKixc19smR%2BKn2%2FOguGT%2FUCG14u7GYlH4xZNvB%2FbvKZYmt4j52aZE2%2BjIBG7DONfMhRp8W4WajLZahc3vY%2BBROv9iOj1%2Foc9sUiMT%2Bpizv2PvTNQD2PzEgqY37AdCGfJt2aSeYIcNnGs1xiYIjZvnvwWxyaJKPnNwjk9HTGqaorkQa58cPsQxq3jJkSUewYB7Vz%2F4BvZ4%2Bb7tZwG8EPtQHi1R%2FahZTS8E4F4MrejKjjM1vy97yPYTESEC11%2F6TVezkgnI%2BENJU1i19g5stiqLGRsibb7zTPJ%2Be5grGQrSWZITj3xStaNKzDZhVHcE9HtUSzMuyAKovGrrEpf4EW0wZ4UWbaNFwpZb1TFLDv0YyREiZ4GBqtg%2BGdl8qm3Cek8ur8MwKjw6esY0qauelVad%2BF4XYIL1XEL4wfSt%2BpJ3WDlbizihSo0%2BN3LsZt95CtL3BmnnGPdYcList74C7axxclnEG2oo3h%2BVC7J6thfICVlwLrW2ZdCX2H4NYdU2Et6KSaEK3ij1LM8c3UqqRJhr6QWFhCMUtGI1UA%2B39Iwx%2Bow%2BiDT8wOIbCCWW76Amz7w5Wux88x48ITZm%2FK1VD1nKTpzxSzTCxpJHTBjqkASOFdxeU%2B7jF5bfbJHBeIRrUvrbnDfILTNQAGEKe6DDMBRGnhA1d9syeERCrlb18QKt74rGrTMDhalxWEKDkoxrixhhUy6c6VVZSxne6%2B5Si683894uI1zDuFk16qmc8hW88zXHKUgNH1%2BZeVbLxc6Sdh7bjBSa19m1tGPMN600ht6DJuThYHJ0Bhwrm2OlRA%2FRfWYNZEZP7b%2F28z5CZFaAeodYf&X-Amz-Signature=51273c5fc92b5c48c3acca5c381928c3e7f8be05532b13bd7c0995922ce58c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

