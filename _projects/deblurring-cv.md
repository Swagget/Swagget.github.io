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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O2ABEW5%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T092757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDqFFfcd%2BXw53W%2BlyMp8zaSr4wpKYsqIid1O%2BmjLjeXGQIgdRow45CF%2FiDDKqgaghixtgtKXmbWmF7fB500x9oVYG4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCrTpevWpBGYQDsTEircA8Nt9R7Tp4G%2BcEyEhSHX%2FN4oCsoUyDbf2GdfhgOAAwy%2Fv03w5lJI%2BNCdHMf2Eof6kzdkIOtpuM%2BQaiKaksER%2FuYPLXuGKM%2B0ORjIAo8rbJngRGqspKp5%2FAZ5o8A9%2Bc%2B1%2BHm9OfLhHnjkLPb87QOg99NCyHTXZkWaWahI67qfLAxs%2F5j3itUvBNq8JE3%2FfClxF1XEr1MZjtpsohW6EiVVf71z8Z7zkaPHU11Qvw9v05ooIAa1lUy25ChgKVNN6A5diuBCLUvhhLiEtdTl7yWwsgrhJGLR0hyAJ6bwiFm7n6PWks3oUgUz1cJqj6KUnkBv40lmaiYAY1oy13YzngPT1%2BYAKxBiLWix35o5ITQzQkwpOO%2FRW1KhjUJQ%2FSct3SO5f%2FoJX%2BOEt7%2FhpgGOR4P0SWzv7YIX%2BVRG38lQD7PKkWmnHv%2FgAjB76RazRu6bFFRhzuE4wo58cKOQRfPkqeWZ6xjl%2FeKmeNJMJ51D1XlLWySA3SDmEuehqqjZ0ZyGmA5Tx1ht85kXRK2X%2Bz5LVSQGgkruC%2FyubYtDhQ1kAYlkaO4i7bX6pmI%2BkqeeqGU%2F12Mwhz4tMiHFj6V8IE01%2B%2FObpVithwwNgDhQGGtyEsUc8%2FeeeCUN4vEpuZS8pvftMMC1utQGOqUBVO5h2Y6FMecZ0yIkQtUXfefVTbDwW5D41BN946GI%2BTeJjA3qGcZDEpHjRKzq9RFU9%2F%2FjYV0uPZr6Vp4J53tk%2BOKtiJ88ag7%2FYSO48VSRNUq1lHfQkrKxaFWpY%2FuDhREp3NVsdqS1LkRoRf42fhXI1ev61h3M8Hy%2B3%2BRx93DWzuU58FHDVvX2sOBFygvPYVtTi1CUpQ5He9tTEm8q2VNz7yp3GNhi&X-Amz-Signature=63e519cf5febbd2f755c349d54452074c0371a935b06106a9aa702d63ab8cb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

