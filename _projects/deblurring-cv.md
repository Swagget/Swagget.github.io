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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQQGC4N%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T161624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVFNivazDViTDyA9bylfRti9%2BGzrK46Tjy%2F0dKRMzcUQIhAMVZknPK25q%2FjUvS1LkTLB4UdTYiEXFM9QNZKOHnjN1uKv8DCGEQABoMNjM3NDIzMTgzODA1IgxVI1EPKOiDXiR2BVgq3APnWDjPQ6ZcugMRoiN5jdB9yYZMpAJXY4gS%2FKkTFN0syHeifADUISeHXE1pFKickyGC6SlW5m%2FiRff%2FZlawxHRiFw8RRxXvCwrGRZd%2FAY8WMIcTqvFLYbOAuY8uxuWleZqqXqqmRMc0L%2BRhfdqJOda3yXngFpgFen5H53LBBdtsriG7aUENqKJm70s86J%2BoFtThzmxwLcJrfFUG9o6tedUkEdQC6Ee7sBduABhmN8TtDi4RqFS3z69RJ4n%2FafMYDs2TqiyyLwlnA0KIBykS1o0wA5X%2FGvDb9Asrj5qPSXelwcBos2bVMjjWDD1ZFBlrjFlhhmAcsy4%2BBJbOaYHrsT08DWsML6RIKIia5d381z0C1PcV%2FtsqL%2Bs64QYLd%2BCxy7t7wFY0qgsEyl1c7%2BA7xP1Dbl48jQE%2FWk89zTfAC5Lo1HfpgLR33a7bYnLHrzO9QW%2BZxNTouTlHTHh2hfgXGKu9jCwdk%2FbLtw7SsyEf5Dg%2Brve5UemXhDHfK1%2Bk1x4YNG5XDSP8tcdMFuiH2oDwOP5yqtV8fNiOyzdDt1C37BzpOgY7n3CbQDWy70WZBTbTtLIBv77pG5k4xQyDoo7TVEn0Pda%2Bwd4GPImBUlEFNnzis%2BcHJcXpw9w9IA%2B1aTDx%2FZHUBjqkAWudMSqBALmeCFJ6nM9GJ8N%2BAye6xntie3EhEnJYvzYhySax9G9KUPlaVbeG%2BULZaOuKOCKz8QxDp%2Bhq5ghT%2F6s7gaUSgXvDBshP61vqXc%2FFqd%2FUparNpmI%2BCNLMF%2BOUFr%2BeQFbbA5mP2mAGlIs%2FEqrV%2FsA8IvC71aM%2FPX8NxJ5pM2EumF2fy52bxK10d3ks7bc27Ns2qr9%2FRCGRAXaaAmgtIqAE&X-Amz-Signature=3b19c472fe3ba9d65a4cd4fa8967fcee6ac67c0dfbca4ecff811256ffb7935b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

