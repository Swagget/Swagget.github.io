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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TK6FPAK%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T125742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDrwCABIvAh8Yhqi0TpZ22EicSPIfSyOwvg3IjECi2tTAIhAM4TRFK8xNi%2FWdNTzeexUIbb7dRdlW2WuD1ehzBfEcW9KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG7Eu4yd0kSCvhEMcq3AOraffLK9aAVSNEUAT5XQJhEir%2FV4%2F%2F4jxsdqEbABE542OxB6EawbjrnyV8%2FHp1tYxQRtoc7HiFoYwwehJmiUbLcFN3VP9gDcMmiQVt3cmc9GD%2BZsSFffAB87j0XdeIYXYiEOIuVqbUx7HCaxbo9IJpoEbwvtoSltvsS2bxGMtsxGVBd7Al%2BOCVJjhI2mFkvR7S0BDtOrW%2FUl1rLGC3uoruDuDxv8a6tnPmhdAJpo5mK6uKffGMTSGXTQm0M%2BTK%2FFOak9SJ3qP1HgiexaYa%2F9WHOsvOzFzPBcqSLf9r7fa8DA8v5wKiP01SUmvK67JroxIpyx1aGiei2ksZs3KkTZEXwa4hWk1GAFb2XIenR9bVVVnpiAo1wY%2FESztChJZ5jWorNlyKk1Z3NjJO8Ux2%2Bc00E3WvAwYUhA4wM0Ew7dOgsbEy2qHG5llZTDKFF%2FPEjXACZbYBSSNVpAprLQEDKUnz5pehfu5L15N2duj4A9BUQr%2ByPKrfuLvigMZ0LcZ%2Fgq0oC%2B9wRSvQ%2BgbEYlKvYK8c6BruPiOqmVkEizaVwBs%2B5%2BzsxlVEg45JlToWz30BOCXpCPS1KYlAGfQ2V14HcssMPbTRtJvdtLJ29Iis3Tin49Rd0Bxb06Odkktg9zDvtuvQBjqkAfGk49KAhuaTmn0ILZo5kdVbsohJfQ%2FTc9MRS60k9aqWyNCiCn7RjH5yje04tOLHxV%2Btw6CHrBkyRz456b3foViuJg4kOlzWB2rAtlHuTVacY%2FzQU8bH6WMBnaFPFbZT48dUWT8ne%2FDvtgoFwTwNLeHtrYArE2kl170mEuGtO1d%2BYzOCvPnXIK%2BERvrFNxGBCcTR6NjYSnW6I0%2B7kjO8ZtrITZcM&X-Amz-Signature=ea424ff3dd3a89a4333128a55952d99fc7f8b9b173d21ecb52d0368bfbc1a510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

