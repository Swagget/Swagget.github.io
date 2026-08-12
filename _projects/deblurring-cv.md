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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMTZRAP5%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T195405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAjQSGXxrGr%2FGOqcn%2BkWiy4Yw7XfML5aupEPfQobmJc%2BAiAVZdt%2FPetEjtUeTMgOLaeIc%2BSPna4zWgaAf7jAVP0jTCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn7tSVFd49YlXdXtmKtwDlSO3ZJpGlJlS%2F%2ByCDrg1N85rISdOovpJSsmZHQohoR1efKSrL8dN3RLsWVLngWGSLrZUEfUgnm478dQJ%2FwGdgh%2FUhp7VhkHo3F%2FC496qM4usNVeju56aeJ5BMTmmy%2BfYBy2D%2FUqHG1tGBIFBR8SeS4KTzuL%2BHYVhfA8bPsrNin%2F%2B26Qxrs2fVXdw29H0HTfXEDV5r0VgLI6mK0KD%2Fm036EICsL25IJbs8NWNm%2F7eLvpuWXuCSF6Cu9mx20eaqw3kGeHtLgNUmGenTM6NHYiverdJoKyNFWVsralHoReEE5ImSWKOnjWYnTjrhFr9pf6uKk5FOSIWgMIMINDLxGgC%2FMfMrwwDPWGk3rvjEuJe4HdEqSKRNISSNtBgyiEYu4pdkJVOzNPdrWsBBb0gkR5aEFzf1zCjm8efU%2BYcba5OqKSpxdeShQNamviwWJ0qZoMordO1sxAMT3rSU8nunBPGIlYlrQTpBZ0ONLRCU8Ny96CmxbOlioqofIcaFOBxkm2V%2FfzXaJWFF0oGo8xvy0Fc95ELXAzJwXVBYX%2F2es%2FENYBqxOlY4L3lJC29eDLrwGEiD0f39N6pGv2w3TZvsdll2DS9MsLzpkTA3bibMhC1kKA7GPDmD1jw0TWDegcwmIbz0wY6pgHWCQA1TqkwChu3yjw8wx8IC%2BGcHcQryBgGhGPJnL2J75cnE3DaUtps1zpIY%2BptMSyDoGEdDwIGvZpOxp%2BdLC8J8pyUQ%2BoNSAVnQkjHSZBbKRx0GLKK5PWB2%2B40sV2oXnlDR5wTX3JtXtO3jWn%2Fwl%2BqnKeov%2BF6uNN%2BCB%2F6mA%2Bs14FTnrKhogGUXhVgmfJag1XtAgF3ZJH43Zt%2Flv71CgsrxQyF57xC&X-Amz-Signature=c4bc9556a7d4527ba05b8e5ba0e3791db2fc805890eec129652333ad7d8f0df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

