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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q53G2KQ%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T121222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCpAK9GBx2nHUBJ2qxKM4oqGpJiQZoTXUxel4dOjFMTxwIgCvUfKozOJH7SytcFc6Zxv65Ke6uXponiTVSWrVpFFsUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGjWPoTfHDJqDk%2BsvircAxuOI%2Bw3GQy2juOA2%2Fl1x9LR%2FWoNJDAfb1Y%2FbABlO1eGos2HkDLtYowyTTd0I15wFeulNIdFWrgcyM0OQFBnv3K0BCxjCozDl1RCupV4mpP4TY1GqHhvIQMx1nIUFxyGmUHeR%2BIUyQCz2WU7kVnO3bcI7DraNk6wdMahX4TYLxXGuvroV3raPYlyV4El14ACrWmquiL0V4deDNnoz2H3xIGHOvgizHUcA7eZlM1Y64X8FZi84DxqS%2B6goe1zW8qxVa0y5A3JfYvDIiJtXyqH3bnLI70uVMZKZNigYJV5Xl4m0xTOscDR9jer0DDazf4vGFJg%2BYMOn%2FxECjTsCPNF00R8RzyiwtgJYjkXcq0vpujro9iCAUIBM89if7QQy1rVmpYU8%2BMt%2BI6E7TY3JdCegmNSF3h3YDFiKXunuaVj5fLSGR1zxwr3EO3cOrmu9fzLnENVmhP80bE18xPmBKb55gq4RXq9EDblcIXfA%2FKfkUx0JYpl9GRKNYBXDvbd%2Bnv1Iqstr8qu%2FApgRcMA0zLQEXc%2B1K8mwsG1fkcZRgcapZT4Mv8zsAx45Osh5RdpIy6G4fEiW45bcubxW8w07XmsFkVzNhVP1VogjtN71uFB5tX948fj3x0gu1NfHkARMM3m7tEGOqUB1xUQZFfnfgEeKjrcGaW6OL%2BbVr8hnYXNhO%2B%2BHt6soIRy%2BikZK5a2w%2BPVANP14WLgY2Z8IoGv2aaIb2s7t5RiVs8XCYCdlZZabI%2FdBVXQ5E4gVurmVe6QVQWxqPn2BwJiDZIb12je8rZp4k6C8XSh6n3k%2B4usu%2FoJ4MXqLYKcGYWLsLSRfLzxQOCQXIxuagfYlC3o9xxdzcUQD2QkwHHupdpATjOR&X-Amz-Signature=a44806be2a426ac76e614c0b20e68ff765fca6624242b03aa7754657bab83df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

