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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324UMFWY%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T113422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDTWzgo0IzVi0aowBwlDXBdLdmX7IgquArXh3jKMhw7DgIhAMCHVlrhVnxm%2FKmQTC51MDARGnc3YrI0orCcMwPSSkdZKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlkP4wQzKi1X2AmJMq3AOVd0bp1OB2t8WOY61h7ryaajD%2BY73UJPIzA%2F7CR4DvIrVLB6v%2B%2B0xnRE72WBDKgK5o0RcPiKN%2Bn9q9EOcNTKyoKZo0KlpH6hHDOk5gxqmbz1oXR%2B4L1hnKID2FTaULkqJmtu1n28f0av%2FX2IqlS%2FyUxA4iqNBxt8wtAqtwMmnGBt6LqQq01fb89lXtnd4Ub%2F620iRa9RR8pMXQmTqVoEu%2F3MyOXwp0TMsXJgdgKZeyTdi55AnqTInqLHzGJakmJwJeFfCIw2etjNmZNbqmv5ZurhcWVrxss0FNlO%2B6WgIQH0lknWuSId9jSFQgGCQP%2BiOKjh%2Ff9smHbn2l791eX7GnG1umKs7gtgL%2F%2F6G3LEUK7KZt8s9RbRKDk3PrhrAuWHrfR4BVt8FmxdgfTy2XW2qJ9m6%2BVUqotJ%2FOlQHsJdkb%2BqkP%2Fr%2BhdJwOj1O97JxxaeZx0TEDvgWHF3Xc0EvKawEf%2B9yYQLqaRalm6EiM6w8YNWbHt5Sp%2FAqUROazk%2FS7mkjJgtyoSuY9vauCu3g5lggoNRmZS%2BDv1TDlOmvDfnOHBqeoTEtUYSER2a5oMNa%2B2vdIh45yPewHyIVQOkUdrx%2FjkvlcALPaA0NJVos1q0twCsm8sKZylx5Y9ybcAzDC8PvTBjqkAd4LsIdzfKtiDeNxWjgdnk3FrSnsn1Me0XAdzmKUsmD12R7FGru0m%2BCCoofjjgIrsZwi1zYoC6TTpWi0GHMCXVVuFpQwcFVYIA%2FNeGgYwgmagu5TWT%2FkrDslKhW%2FIOGrGL64fbAbTgP4VDLyo5z%2BjpplDnqenzaGbfTYD567%2Bm1hNvriXYUOD1IVDbh1UN3KM67fCQcQnk%2FhuWlz4bCOCjHbgn45&X-Amz-Signature=b4d76ac96e0d056a7e73c1ec757acba561251c93b0a52a1527667197f2188081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

