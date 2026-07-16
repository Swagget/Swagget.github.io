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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FAGWOHI%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T215256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzTaKE3AZxoZx8tm%2FfAd%2FobJx4creJG5EeSq%2FfIL0XHgIhAJI7ah9HL1Xky467VbUN098kbL7Q5ONprlehglIt%2FACJKv8DCE4QABoMNjM3NDIzMTgzODA1IgwehP4z0bnM2cikyEsq3AP3qE4C9gH5QrT718ugFm1b2sMqAnFl%2FIt9qiT2SWfZDKmLbad04KY7kz%2BNjj0ABmnxyNONJxtTK3RFzTKR2sLKi5sgYf%2BdlB3v4ec3MJWxlpagqwpExFlo8xlEFyd4bpLab3kqteeJKNjScx18t4KmpUe17SOSnur1hO2aHT7JIP6kvISxJWTdqAU5Eicz0v6lrhjuVsB7UxmCCsOjfVG0zM5rsLR8zWbSkjbeRa%2FT9EV9rcKrZc1dZ2dghcNV16Ome%2FlSQs40dFESQ2Y%2FE%2B6PoIJQ6frxEOQzTjVl6CRFyCzPinXRdsUnxVA57csG49NC0SPBq7R1LDUdUr0eGSCk8jZ731TyUrEctksdqxIW91yjUfwkx81VMnaSvKCau1FLo1Vbv10dyJSLexwicjhBzryKOAvdvUG5DYC2%2FuJX2yu6DlYJWTs5plzb%2F4aEfqrMXirPaJn%2FVvidJgNoqAIPKXOq4YLkuCE2FFlJct3QB77awuEXT2wxzG0EPOkeJi4VTCz7195duKahuzct3wBkkWCreVNnbS7f9MjxBoCUrl%2B4GeLq6QCsyAxNje1l2smvKRrYdvcVGwVivFVnajsdPUsEk%2FoI8pOStpnn21Tlqe%2Fouh3WMgTNrBD5fzCLi%2BXSBjqkAYACkeahCIQrnlrV0zTf6%2FHI3KgwZIXgwLv3NLS2JMxz38%2B%2FDgWBIW%2FKIPIGdUs%2B8cuiV%2BI4fRkQxX4Qyu1iPYe9JIXvs2WLCyxidU1GIxvnDdcu5UrfVatX4q6r2paAUpEHp8GTN3PHA9WYz9IvbngLm8o2fTyYar0flvoqIj2LudmzDDY5iahsQj3Vqqy2HUl8J9shWzB6Jv03L72GihQZ4r%2Bt&X-Amz-Signature=3c42309a9542698af189ea212c18d79bb5c495c997db7fcd44a3ce198c1942c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

