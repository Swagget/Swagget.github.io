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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKA5C7RG%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T223440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAa2%2Fkts29AJO1zbPO6O8z5tVZG9pC04QDbWt%2F7DRTLSAiEA0DiK9LdX5OhecAsRQ8nyEB0BZFfdXomUba4W%2BkOmeTMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIptQJfHSQEIoY2TyCrcA9%2Fj2FIgRQL2pqvuj8VNiF9K72N7P0ufpD2%2BOjcJ6ErLjgEMkbK%2FGN7d5%2BbkkhwzHpkORTvWN2ghHyjyGEi%2BGFAM39glS3RwjDehKQI9GQXY0zbwCrOBsZF7aMfOEmXWmj9h5Fvp7i56K5H0quDULZIBXyS04YJDjbuwN4dFNdPvs2pIPDMlqm48XcKFeETNRdC5T2QHxj3DZOJdLkYGcXI2drMaPAezR9JnY8Tp275R0tBIOGejOX8QiJN1MDbRC9TJiCdSJUhB88bPnljWWK0a6OOX7Qcq3ejQrdOdRyZ6IlcaBxf4zPowKWR25NU1PYY7FehvYyHECglcbWGbvJt84ahlLo9ezEOoo%2FqFEBMV8yjpoGMDBmk8YnDHZt01aWBD%2F0dCtoGAHucXJhifDY1x4ID1jlAarX0u1ZajUyT81hMstlcE%2Bk4V%2BYYjkWhSUy1MD%2FwvEMNJg9Ljw%2BLUYEawxD59k84rzd2YUoV7OF7fnFYlVzBW%2FAq%2FZ70xHYeUSAct24P1LQH071yBuOQkXqnWOGyYsPXpP9QOrAibwQyBxwB84fV8mOypOkTINYqw1G0pUEI0wKfdmzmxdQIAqCLxFcafePfCBfouON2Gga7Zx7F9SULNx0m%2Bi0NFMJndytIGOqUBbg7LJOImGW9lKJ0SuRO9XdbdgO953qZhfqYRai6ZCprsRrCFrV43VUurh0Xa78XSHW0YlIsrxmy88LTQa0sfu6%2FOxsdi691Gi0VLe%2Bgoa6EfoiFTdCHAudkmwxGAD7QS6%2F2bto0P02VUYZdrD1iFsQviHEgcTUJQoiHtdj1wd5GTN8DHTUt7bCOQwlCg1%2FUGDRADRBmhpeJGa5GSYbmUD%2FGu8Dal&X-Amz-Signature=ee4b6815a322723fe2e6cb307ab1e7abb2491332d66586ff68fe59c41bb9a322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

