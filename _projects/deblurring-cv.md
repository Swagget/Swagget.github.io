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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWOT6NNQ%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T092413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCrt8za5lmkN6yDVAMaWyElwhfF%2BC38IMRU4slbN%2FvtxgIgPiUVUcP0znpsr%2BrY1h8tlujqJ1wmYfWfwn0QfuJFHakq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDN%2Fs1XfmA1EYSK4b0SrcAx6y047rEnMKt8TJg2KInX1PXA%2FszRP1iobekslJmM1mafx4eqMbLPzc%2FRrsnZMC%2Fm9kEUh8cfQRQIdrlUyw4%2BbTKqrOvWEGYZLg0jZjhxxJGmHDOBCb8xbodUZ0AEQn%2Ba693LhEIC0ogEzCx0yfKikMzA%2BIxep437swYKGixuuFbe32vJV8%2F6%2BSNnT2FFLhgpWJQ%2FQ4es%2F%2F%2Bd8%2F94GlSKJRED8YYnCav2MEdsXsGnb1m9EY%2F25Gz1UtHvWVisEi%2F4YstQ70OPVCaRfkZU6o07lX%2FnTagUYMmLbdjZt0e3nmYdAnfAQVGmuGcE4hCObrfLcRjz3Aju8ealUXAAs62HAoQkg3RJumbM%2BarlsTTNDj3KB3vj6yRLc2CdC2RXKlDqnSgQPNo%2ByFYOYjW3twgBdveYGJe%2BPwgGhUnWUXDgC99qDMzz6ljtMeyBEH9XUW8OU34RcM4hhbgS2c2M5vcKtmNrIwh3NIDGswhjoB4HooFu3jgzQnZDS6sF3imcdrYlu%2Fhjmfl8SgrtAf27zGY003m1H7cFC3VvnaCDUc0MoAHG4RnHKXFsfmCczWEv7hhcyOT%2FvCZTSKfTZ4aqdCpCmzY4k4jQZDl8WbnOnKN8bzrmBMGGciNI%2Fy4W2GMO3ikdMGOqUBk7ng3fPRJwParggccNeSWs6cbFG1ROTlge2znE8Uh7DTndgwgC%2FnMdZHW3zvYOUZmzWJh5JP45x3MF8%2FQ645mFRxzkhy5Kp3FG3ZNCGgQ5i5sH332iFOOTY5VyJPHJERCpUOE8O3u6gXsOxnmHgb7uEeuUkGV6gvW212Bf%2B%2Fa1LJiiHylMCugr%2FU3wbA7%2FC52HXRRpUAfN4wMrI8qG55iMqu45xG&X-Amz-Signature=a96510a2dded25be43f3d17106d7ff3332e160b9829b006934115f47d6bd6646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

