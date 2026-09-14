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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YYJBZT%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T015732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDDHh1jSIV0Z1swIfmJgZG8qf7TIf3XToVHUL9jBmvEAgIhAOBsIwl1sA3KyDlDmwpnWSSPwrH1umtMYSuUo673cmnJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwwi%2FX0Tz3EK3dkbBYq3ANJstjm47Ugx6K5Dbp0%2Fqa9tU1%2FxWEX4R9HzUGfvlgO7kYFZeuDCmzkI3d5shOPlAkoCZ7jpzuApaKHgunvkLXMjaJRUT6zA5or8E3Cq6svVtxdtAPPvAg7YtwUUshESj8DdUn%2FWGuHbWNn0LaYKwjUPlu8KfoSWZMzN%2F8v3wiTgnGWwByllCPRCHoo6c4g32EBGDXNO3qbfDz3DosE%2F1Rr4PIKxWVPDZvPrAVEQz2I1iePManUfV9Horj1kk7Or62PWPAeHHl0Av1Aq18fl8XxXTWrT7lV1EF0MGixb%2Bnc%2BoRTECSYIZcwC6bb5OxJzcmbGrsLU3gXFaUipZozcgGS6MAnHnWsYvrMSFHos7Eky3jpk9RxlD8z9D%2B4JWknZHySwqV%2BS9R4asf9sTxo%2BYKoSj3ui66Buncx7AY1maNfK6Tebw28Ue%2FxplYIeqP0bPITnLH24WIngxveGnheIhPn7RA5xa%2FdnQ16B5Xh6Mu3CtTwyNvLISGkdTdtHuNsUmwoDzz8ZpT5CSbMdDqRh9iBeqU1IN3LqEODowsp5WAAbkzQuYR%2BpLWS8x7rBW%2BFyoduoN%2BcfDZHGCAlI8h8F3sk%2FSznzhWA2J%2FYJCwEL37QG8PLal2OPitwcpjWVjDKmZ3VBjqkAf9x5AOJxluwnkJyfyBbDzU6jFY6yV8WbFR%2BcPFSfal4LyBz4qVSVa4gZCA%2F0u%2FPpTtDrJxy56ZEyMPXAKbsFpjkbDgwNVaWuXFcKLf7Qxh6LJ0%2BaqieyirqgDBuz8LFFxfmMqWxUBXHADxL19tC0SOwRFiikHpnf8T%2F73%2BJS32lU294jqFzFYH0V%2FVHoCvpEDDrmwe1B2E7c6CtBE4XQBgnbCp%2B&X-Amz-Signature=54e8abf9104943c6584b73dffaeb182f92502bd782f39958f5222af466481c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

