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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNWRBVXC%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T121952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOKrl%2FhiFxi0Z4LcsVlza3MucSXh4ipVlD4CTkblWAEAiAu1bI9ngK6s0YRoJOgyDj46g1ITUL8700sRTE%2F6tQFvSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaxO4OQbBpD3OJkjoKtwDPwVDcm59xul98x9Vv%2BHpGR9rXxM6jsCsRDgjM14%2BXUrA4CNM5eAXrf6Zzi%2BwtzGNuYqyUgjoJJBUaDCQWgs9Piyv%2FkMg2gprTHiqEXazBWURjlaFtgK%2B7FHjdV5KIsC%2Bl40flTGX3UQJBH12e4Msha46kQSz2iNmNx0tEZSZlQZLLOV0jQUEd3xbTjYivHPK8iInODNREohI4wGVvhAoiYVQ386joKQKI9tmGfOynwHvTcwwMEb5DZoDxk3w0FNq2qJrCEg1s4vl9Lv%2F2LFLmxl5flxbOu2s72JpUQLnnDGmG3xM0QXyVEEmhsvQBCeNPU79NroMIdTIJv%2FC7CR17RBLdL6%2FTajT1HZG%2FTlsEH7%2FUxvmyKb5goKyB4uSk3Tpgkp3i%2FL3YYsCeSHzjzuXL0JyKb0JVUvngzrYJXEKLa5mVsqkE4%2FYjRoiMNi3gMyNHveEcexUIzUiQ0z81RP9Vj66I365YNlYDBB%2B%2Bn8GOLnt%2BPRrDRcSzawlys9zqD5LzL4%2BazhHSEJsgZrxcxnB45M85%2BsoHCNwGm9JQH5xxw5GtsWfchg6Q695Zv%2BKSRHeSLxS8tZ15ZSEoetOkq7l9Kb6Tq8T5IjOM9PoTf%2ByjMS4NUvfHUupYt9rHJgwltag1AY6pgEbp2FY6jUiN%2FqQ5%2FL35hTp7f6WJoPsjMaI805pw3ufyYNG%2FPpujNbzMdaM5inN4i4h4enfi%2FRSclQPlu8Z7mwKeclrPcEmg99LHzsb9JLDOxr7%2BYuKW2kjSaxpGZq%2FY6MF3MtyI0O7IsWe%2FtTR5tu8Oxl%2FGeI4gGnTVL%2F03IfTLc3WbxOCnkfdp4VB7kDuMAXaJ6Z4sUvKSnEP%2FPzsxaWJiJUVedX8&X-Amz-Signature=841b532f20cc3c629746b6c86bd83a51310862409b5470c7450bd28d2615de41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

