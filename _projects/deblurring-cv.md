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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DYPF7Y6%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T222254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCVDZEKjM7MPelF9WGvKVmp2RWSoUdK6s9T9uc6YkUEywIhAOwlz287aEFAKvgyRqPHa0APE11s6T9As8e9eoVWq9IlKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwwhp%2FSTg18kjSrcxsq3ANSX%2BpWrAIdCaLubYmfNW%2FkNuZYa5bC8ij2ZahdK7RUJO4rVnf8OJKeN8YoBAUv2Ygqs52SwKz41rRU844G0EJ50e%2BfJXU%2FDLJqxh8JJMpIe1LkgVDTjdQbOWV15j9MOit%2FcPCb9IoPcEcBbnatKjwb7pw3BzDDwAGZXflNHAtYECg3ru6fOO1Gqv17IVkzWR3ZU%2FVpro8uZJIqc2xw%2FeGzK0U4m2Ms9S7iUTgN6ZB9b37dYVA4YJe%2FBIy1wYQMRaM9KauON%2B2FIeT1OJIeSejtNztbu%2Fs7A%2FUPBts%2BJ0TgB82rDJXHzWqf%2BfJf5vM0yQ5bmRFPg38dHbhe8gegW8RiMd6v2%2BHEWfLWrPFrcAYWB0%2F2y7xzWf%2BFmP%2Bl29HtUfWayiNsIgg%2BffF3%2F1%2F8FU5Rw6ny7irh4sOzsBgv%2FvTHT8y%2BDOnL8tx244XT28P1MlAnzKgyicQghRPZf3jmILkiDAYseollUuwb3NCHIPCPoCFEHhs%2BodBnPMxJeAKV7rRdsz5CgsTVTL58nKTDUvUSBJaXRTWD1iwYFQ2MU7pCSvF9EWfqZBPkqsrNleU%2FnF4I7hlmsKpcM%2FLo40g3bTe494VMlCNuqFGUdnKxUFDeeTmjJDl1lbRqms56jDCG8OfQBjqkAZ09XGHbb5DHGV6OMCOKafFgzVokYV5uBhQVC3mZp%2BbTAHCU%2FDvO7Au341DQSwtALEm0a2PTjOHVT0WVkd3wBupAEDoy6yhVYLOOxZiq3xCdmXI5rhxX9XDfXjCCCfhUbOJpe8hLbmlhN47PYut2iUVODaUeOVuwJ0qRYuwsbz84UJUZX0ZT5knF0ceGAom2a2KklJLlbworXruCDBlQ3dJ8Vl93&X-Amz-Signature=64f9eb416b4d255c89e8204304bb529ca2ab8d9ede800a7213cf0a332f669772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

