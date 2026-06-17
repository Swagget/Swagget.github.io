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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KHAHTN%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T215042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIGAl3%2FWvvanudoy3MQ2ktqwjN4izPiY05x7a9dBOZfS1Ah9CgyoYYhfJYFLfw2cN1d79srgaTpeyv%2FW1WBisHhGcKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1sz7QE%2FpYPoa2Zv0q3AOsM6bQHduizogZFoMWPsCsk34otWVtzymJu2kVvvSgY7xlmdS2MHer06b6J8dLdrrDrcL4%2Fig6lwwmP4GjFxY%2BeRcy7cp9TyrTmW6bQwRo%2FwITxLSMJYlysG7B7MI40pgOG%2BONSYTyQ5XW386E7D9xvDQa%2BGFA3%2Fut9MhpLjslwIlribVpODPMCaI7P37UG1X%2B%2Fe%2F1FEly4RmBWafllIPPdrnhHRs1IvlH%2By5yaUhU4CV%2FIppNMxTgjDAju%2FGG3Nne6Wn6EJzLjS%2BQ53g6jZvrDg4Qq6KVz0RbRofCLj%2Fts7xGiIoF5uYRJLx3OmO%2BkUCaXa8zj3KHrWOO1LmxctwoH14Dd6xxIJAt738Znjyp9T%2BCyN8%2FYz8TJzPetnSixHJkCjti1XxWLo4%2FLCSwQTE%2F4HBt5bAO2yMzEQ82Oyw8dPkcS6kBqSN9yl7iTk5coPCwLYoSnUQWyxFAEB08Qvx2bTBUuaye2g3vDRtPNniAqhF5Rp76%2FBjKf8218p1wTh5f59jDBJ9NsMg%2FlN7wcvNLx1%2FVAzKO6STrsRX%2FoRjw%2FMOeQObAxLc7MtlEmkX4OU%2B7LG%2Fwm0J4hnrbzUjLaSUyecKZHAa%2Bt67%2FgFpMliABAX%2Ffw1%2FNGSPj3IjayzCSn8zRBjqnARlarLTO81%2FJabMjrfi1I21%2BDXNIf6valK3nsDTgJBdndbQzqvc5lFk0NOQ%2FhDwk5AkQtiMK%2BM5wcmz7mdqwfFDOC9sdlgE1ySZA4yp6NXJsHF%2BMKf5JmlP5a%2FXYPnTWGm1xF3KOH1I8O51QN4QaZYho6AEkXlTALZOqRHY9IoYrIDi%2BlRckogew7UDZ6Mr96j5488Ui3EXp232Ujr3KjpJGXcMrBi3P&X-Amz-Signature=a6dff06856394f5ebd43fe267f83c768c7aa589328a7a4f04b700e03e7aecdc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

