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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQLWKZV%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T021309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDfO2tB00NdYE2BhPWFscCgCqbFrLU9gdCYKkZ%2FzPc19wIhALckeGSlqUzGuuIXH9iY%2BKTL60EQU0P4l0%2BXwkC9RZTFKv8DCAEQABoMNjM3NDIzMTgzODA1IgzPg%2F9L1eLxJq8KXWwq3AM49j%2FXSfxgIL3flAoHknigAuOboB8D7%2BYclLx8N1DuQG81DwU1YM%2FRBM8F1PDMx1g3jH4yW6O4ETmg0SIM%2BAgrbpjFtT3sU0sqGC4DQcoHdhvT7cDosY84l2nQ90R%2BZgpm3IMPn09Sj3OpztFVl%2FAVT0508zvs1vcvGc7ib56Lwx81DfAsNRNCSgBC3HwDeFpTHsSiQEj5RPNK3Ay%2FKSEr%2BLiLwV6jm0s7EOVlSAfrXDHUY2ZwhSQhNPf1FGXAWKrtxlUJ%2BfpdNGVAebbSF6h18w4NSWw9KvWQD8JYgvLdMsPEM2scYXUFhgQ3SmRl6ywIY8Do9c7iuix2tcVrJkn6zaQVPbjmE1akT55R3dj0SodqYunxf58rpr%2FQlCSWOWA0Td2phmaxdHwfEHlRGOUPc2zRdIhYCAWI%2B2aQAOxLY5lI%2Bb4EiZxh42Ag5RqR2tJEAQ9MvmfsnqZZUtTUB9weV9ips6%2F1Zj9GOgOr1Eqb77r%2B3dIK1jfL5Ik24vMCHGBiQz5jNZJ6ZKjCShbi%2FpyAUisLbC5naKjT0Nxhb9kho2Gq2YV0KqemlzZOrTiQzOjx6zS8OnvPfKVI%2FtGGuUDPTRpoeoSyRPdDIpCnUIHdctSR6eZckBPm13tunTCmiPPQBjqkAZ0EymUTFhiwQZvo%2FZqR03GvO5vkrUa7%2B8yDXrJZ4AhGf1xOHCKd%2BiF6FZAmJtyFj0QR5IUwIDOSGb14oqBDPlLoYBfrFrPwoKHLO%2B3dS%2B9yhkgnFo%2Bvx80N2y23w%2Fv3GPo1E17saadUSF977Ifqo9%2Fe6UXgo7aJ2r%2FOes2wYfg5hGgqvMemWQW%2FKsXpROT9G1jdC7InVYHp3c5rTGznLXfphu%2Bw&X-Amz-Signature=750279d118790e4303f5c15a9f7c4eb97a554db5a7c1a0135f26317dc62e2e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

