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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEDSS5F%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T010928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBeetbzwBBP0ctR%2BjjfF4x9iKhABWBjgx4IofUPlHkOfAiEA0D8BRcOHOmpa1t4wcg%2FPDNTI9KtvzQtWjm%2BX6pnpRwIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDqWKAXno0iv1aPsYCrcAw%2BaudVEVH%2Fk5aupb4c6wuKITSV8v%2BxyX8R%2BIjgVppqBkY2TEC7h5VTnsd7JlnEJpwY5EGPnF%2BvBBoIGW54Uw5E9XffmWlGJ6Esr1tKOJKgH5F9dtzJ7S2bmQDo2qkJwoZ7lr4EKq0H4kTiLhxe2O1XAgQ2hwyqnZSp%2BRDBlWkQUCedyFoS6fYU3cStKsy9tvy8Hwsk62%2F2WwgI3maQCKhxO5WQDz7h0zveGaHXO2CxR%2F2YMq57YfW9qPm2Rex%2FrQfBsTgsS8ZaGibg3qit%2FQf3Y%2F0TSFesBEhGd6CBIM8ceJvXoFGGUcrRmbzBKCT%2FBUH6ejhoYC1T%2BE10nIVUIMMFZQF1J6cTnIKVqG3Sdq61HxnXlTGZfhUpfxRi3gpWlxYmxVz2daaELgo6cIrqIVIW5pEQELO3Tx7A7%2Fr4bIH1xuxe4Z1JwiBkpFM%2FZlbpf9IW4WL%2BxN1gltTRRmen%2Fv19p%2FcD6UEWh891WeEfxPZpwEdzHJxLem0f7O9BzHw%2FvIwvKFFrsQ6uR%2FqJo%2FBhKDNS0DdZp8t0559ud2PetPOqXriMpL2QsGnwPAFAEGtglCIAwRmEzqVeJUhiVQj%2FiGJqJ%2BWW0AR9UozhY4H0k7k0LfFFtUh4vkDN%2BgBxjMJuD29IGOqUBYzBdR4x9HyDqphR1T4%2FK6CwQPvOkrY2NNTTkOPrVyEnsAiOGfkVr7cGTBPK3DWreMsL%2BDDQMW1OWVUfVFaJdS3%2FXYwFLans4Khp2nb3Du6EAwkVSt73JoNRUXq%2BLOmNHqB0Nis3%2FpLxw4NXcohtWn5GX8bbV%2F2c7yI3WvNeqhP1r1AGgmiErYjUUwjzNytRpHHa49MKeMw20YR0Fj8yIFFncWk%2BQ&X-Amz-Signature=bd78a01656976c96ee3262a6b1dc3a3dfa66952ae87675bb30e8eb82d35e3c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

