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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6NCXTOJ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T072033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCSep6TB7iEn16fGpPFrJp%2Bk6Uurv8Wt4EFhIIENoVWwQIhAN6Z1%2FI9NprMXghCqqeHEYkfsJrrc3hO37mVVY0NYZpqKv8DCCYQABoMNjM3NDIzMTgzODA1IgzDSNcW%2FUsL2k1MtV0q3AML5ri8oiiByzycrMILyQCaf0cte3e3McB5Y2lv8t9qmJymSCTPFCdcWQn2991V%2FGuf9BElWISOAgsNpyP9Ebeyb1zrORQZGHo7tTZpnb7rI%2FY2pJfQuHEhE7OH0OyUQdjTtYcK0hv2TFEEZKwQnhGQtpCv79cJ96dow1AV3wiX1XXYQpAlCrBcFppoA%2BNsEy5GWc5NTixYhG3B%2B8LBKMCNNTPahVU6QnhCfU4jx%2BMXY83xRjNWVvJc23dO6UESH26CLRZhvDLeJ5A9cYdGG%2BNq4EgZbVFerM6EoZ%2BB3Hd4bUKe7NHVwJWRv%2B8SyIFJZwTdh2QJinfW%2BqqvDSxdGf062fW4WqzHEIbaL6cx2rHeaWW%2BmbHdf7E909rvJVm5hp757Ztm98mePKEdr6wVgy363beMtRr6peo9O4dWg91ThIdpfkPkXEcbt5Jue9Lf%2BX0vZ%2BELPaPg8zFxiVJHgqAbAlmknhUsbDHCgMA7%2FuQgCJDlcnf7dZ3ZfSRpMXpHwYeIdXYGU1LZdXEw%2BNg5ikE%2FMgV3wLOy1R0ly2CgtWBDqKKHh8f5Av68oZ1W9Q%2BoG7vjGcAtQGwCPJc93Vs2cMbhc%2BctfXwGcsFjyLWmSuWdoyHk%2BuGC%2B9bOVrvVuTCEgYXUBjqkASasOdovtKeceMnvCc2WSbIM5fF5gmJlZ1Vn70ejpoNRDTF%2B1cUKSTv7hLlIPgDcSVbNJLfRhy2AtJNu9swCPLllJLJzRKVQLftII02vOAZadXb8HWCb7E6Dsz5nAJQXueoyLjaaHBETCJZ%2BdwgjoIEGgaSpngxKorLdcR%2B2EkQw1OHppr4%2FWtKXBq%2FCuk7ibFPNYGnhoGqNLUcvu79nLVAk0TgP&X-Amz-Signature=6f48be9ac542ec5c7f0a588d3b45a251fa21348d7cb1ddea85307c7adad1bb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

