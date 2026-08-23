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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGDVJH3%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T132320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQD1FX%2FYb8oRThY%2FXp6f3nDnliNL%2Bl4q7S35BSp1ad2LIgIhAL1tFpgKDplt5ILbPVZXy06qgRU9oPJVDixQ%2FtEzXXnaKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxngMF3vGX2g24r9Asq3AMxtYPc3CdnfFHeYBEvaHQ6uOAynBTgMkgKTxONFaJjChVW3FIVZGk69XJvj0Sc4BWWZGrucQVlCHIXgsY9jiopH0LhSHkEs3vPB1380RHXODzoNEu74UfsRwyElm6eBQncv5VESQ0CSW%2BPifRuoWDPNWRqshuPo7tN2SPM1gmQ4%2FOguIm5S5KYKOZxqOxX7s1NX%2Fzr%2FXvCHBniJHUNvg%2FnDNWVvnQ65pnCFZMRYYLIx00mNYWwFhLanH6eo61qJZA6mnyawJmwRWQL5X8BycjUq0H086a45PmPGJo8hwO1PHsV6WH829tjiKPLaGMDCR4O2erppzh0B9H2lTldZ%2BKCguiLMcx7Hs3sDMusNPff3vnDOc1bKX9JlySTDj%2BIjV4HqMhyEfZqYFF0XSQNUsuoxOKNi%2BK2CXw19DXKkWKrW%2BkaxOusLLxyH8vU7vZzJG%2BiyWBDhURdk7mSgR9mIRJXq88KtLTw0V%2BTrRvMZRZ2pJ0bUMDXdvF7iyPcmyIJzi%2BbEi3qqJpXwKT98k4PxJ9ioKJTVzgbQle3EJm7LxGmDqvPOEeSTDP%2FQUkTxzj4%2FC0baefIYVYoLONyHYvaf2oXqqeA4GiwZOzfzYw37aznpVjtfevKNZIYYqeDFDCw1qrUBjqkAX%2FV3kfocPZxAsKwoxdFVjuo1zUnlfqcKGUjkAhvdTMv7qlhXTVqkdIYivVYxZ6mZjWFhA4kshxinNISjCCeH92ENLoOISuJv1biriHkoW00YgHoZVCTjh7aqLc1A4pP5Zlp9ntbEgjL0TqkLOSDFXZe74b2FQXKA4K%2BclnnxycoO%2FpS8ziy2WVvd%2FB2hV%2Bef1cyYa6f7XFIpfj8LDxwMOTVvUU6&X-Amz-Signature=67cc28fad0fa00bceb7beeb9ec4fad7525bd9ce1c5c97ec879f5f7470b6d51e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

