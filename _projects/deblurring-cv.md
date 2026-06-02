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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYDNS2DJ%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T175932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIAdTg1LyxOiJFjR5NXW3K1PI4G11SEgii%2BMq2Q73tcPWAiEAw5MEq3BYnjWedKBO2sRzsKYDBmGYNPbQHEmJgHaR3Xkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDE5bhga7Ocj4Nf5sECrcAxZcCXAkN9yIxqDUWnEgZonwM979ikQQ69lmhMBujyQgozkESe0pP0JSM4RprAYYN%2Br5xiilLRyDCziNcm7gFRrSzuzGpc2ONdINqbBPR5pvCFGzHjJLi%2BK5w5vtynQzTwp0Zh%2BDxdkPFsiV2sMK5P5J93dNgSob%2FxPc11%2Bmai3Mhfg9LwzvsXvOLIlLutqpgBY6PFaTR%2F%2BsoBDOR6HoKohn15lB6EGDqJvk%2BZz4s8W09U82GOfIq4QLmGvjlWN0gKpE9W0qPIMPwj1gp7ixoRxlFYypgseVA7KuH7xuOXBvm1%2FlvgJWFYPABzHnNrDlB%2F8Nm217LQ84vQYbRzkCU08DTcIzdxs6GRHXNKIImccvp4Uzv0Sn%2BNJ8NJJCgeq66dHXRVRzpbK4ZGkMzMYxQcMJPVQxhSCaXUo1bqTjW0EryrPe0xyP1DgklWpWSrG8%2BRxF9xMdG5v0Tp345%2Bx1zEq%2BCS9lgECYGqL26q%2Ftq1qvTE9%2BdObf0rkSPX0kbvoaGwqSPolQ4jUsNwLvMFBn5yCdD%2FHqhmmGmC7ojejR2veX9usqM7mVyd0zCYEBrj7KYqGe4q6be85poIAV59j0j2S8SMQwox0I%2FcR%2F4jCZukfFdXsX23q8tx7HZI1jMKqv%2FNAGOqUBwPYhKAnSFpPKTEws1u7BtFKayOGtOGpe7%2BCcQ7i%2BUaSL263%2FBzdNMgqm%2FMBFB09neHSNm5MHHLYM1Lk04XJwbeemOxBO1QXVovA3Sf0lyQE0dVaB4Xdum%2BqM78qyqkcZQS%2FetG%2BGEKND263jli6LLCcnd9sAIDyF69owqcQz2Do2SOWLWtANIIY1Sf0sHkYCRIrxPeqpYXjSBfjDOrFLoueUGWVw&X-Amz-Signature=4e664771c8946ec6120633cff84f9662664710584eebc9ca4a561de481544ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

