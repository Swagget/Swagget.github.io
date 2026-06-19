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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF2HRZGH%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T205850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FSz1J5a4ND0fj43roN%2BjMMqvDMY1iduIbEXA%2BnShmMgIgEnKmL%2B1rmc61H2L7u3qVTAVgo3QZ5eJ2YujqoGaztlIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FicwvabL0BZnB3YyrcA%2FkegDsYdBWXEqlc0Ioba61zzQABBOZwTQ8iHAZuJzXGOzy581rU3nxx%2BUXj1oqI314GcvkB9kIXpsOtOcdxUdT1LZnxWsOXhaZjcr3sVHRglUstinkTpQMeMfV9sEweGFR6Z52FqjLZN50sx%2FtmEdgclJXEzoGgEU8iw75bIauYU0kt6mG3bnQJ0Td9CQGSg0TgOpd06ILAXoF3al%2BfqLnTpvyrSpVEdP9LqVvT8UQpdhymbwEMjhSxIw0zESVYg8ehcgwrz5NMuFlVT3f8PXzXxJJMMQgFLyTVROAF8VncO0ku9ZDXDDZ37MX8UArJfqOkKyFZJoEyA6hJk2AIQ7MlDSYwSsFztNbkq%2BKSefIDanUQTizIW2FGqiQ2%2BMdrdaPNmefrpurF6C0pEJUTYcpsn2Zu%2BR0PJzf3mUTtKB7e5KEQrt%2BWKzvBGSeE9pbN3e3TmdFr7JkVmuVRLMivuTJzBwKQhIe6CpVFlw1TSYdcWcUHWpHbT3%2BljIwHiRL4z8R8lSil44fnBdPqlpItpk1eOSl9AuP6uYWuB6QpDjaFStTl%2B%2FNPz6zAyN6kCgpILn%2FDJfzGyAl0EtVLwHul9K4K32bv%2FMqzf2hPhwaJEX9xS2YNHvlZTVbRO2iLMNXJ1tEGOqUBLpI9W6vq1E5rVrolsPKMNTjIeb1yBG3IJX7GNPdOVMUcIW64Udz1dRxEeb%2F%2ByP%2Fq%2BfOYTt3wyELspVpE8W4l4dKY0xKpK8iPb5tvZm2DfzUtdCZhtk6LXW4zoO8TWJZp2lRJpMDqho%2FV7kKWFMJ0GTx2H2mn%2F5GP6k64gknlAMCYK3Gk%2FeE3EEw6YruwlkrRf%2B8DulRLz%2FkrG3H4CJsv2ErDwEjS&X-Amz-Signature=171f1412232044dd8ccaea29870bf5fa79e2dae76e33093518e1a198611f7f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

