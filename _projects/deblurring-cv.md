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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCSERVO%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T171925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxRAILR2HNemttryZmWzJHHla%2FPRwNCNuoOvkXC1aOXAiBBS4EIku1HOtP9UMFB%2Baosy3fFqfMQU0D38USpvPgV2iqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2F68V1wZTAYh2OXsKtwDLRfYy99uV3NInw1O98Lu%2Fs8P02eCo9y5JT4jJbsphIbF7ZWCkAOZk%2BmFzqJmTPfk8Lse4L1ZW4sNYa0XkVte8bPE7c%2BQP1Gy9cGXdYE4KR0kM9dpaWPYPsK8KP45uGTqiPTBJsOv5J8iSMouXimr2fNfV3Et7mOFAnpuUC2fHHavJdMBSZ3MpX%2FgSghdil8M1%2BZUxJvuBun8TTYDjXExUUBoIMZ6SNd1ymQ01dVweDvHaOfyhGyoaDGfRY98Zb%2FJaSwBXpi%2FFsBKT61dLkZYhvpjF3hln0xdoWXSxaqOYFkCxtXF8k8C7fTNjwPXluCJhi%2FrxnrrJDOeUi2fwtZR%2BA3%2F%2FKm4nEMva3U1Cq9%2Flhriik8C3vRnbBkWLzVKgT3SXHdhUFP0GE6rW7u%2BHgav%2FdaHzxv1umdbz32ztqWOkypEHNqZ7NKkeCG9NBrR9ZFDI3UhdP2aozJE%2FVmAoGa29ZGc%2BNs%2BwP6%2BxWyCvqdN2ViFlzmSTtM0x5tmKaZ187JnX2L8wkIS4MvGcn2uz4%2BEMjnxJPDAO9ABKcNiO0rySKPduHxUf%2Ft01ieSSzSPfqYg%2BKbHdX6Z8I0T5nJrosYLGDvyhITaE2k%2FJuwRxz08r7bwZB46GrIXBHun9msw0dvi0wY6pgGdSeqUNzVMayZhJutnhICn8V%2F%2BCQKJWZKCGyIm%2F7aOsh7%2FPUUKqy7nYbBjqqEFuf%2BC1pyNKrxKnXWvaHcFBtQUw2hi4HV5ShYxHvfs%2FCvJNSWhHYhQO7Zp0VnlLUtC8LPaml95gm4jPZz2Z6UsEaU92JrJvgsR37NKQwBv1SEfxtSHCL87CJxlLzksAD5eAAUhVUqt73NLKOM4oNGHgqqKcV%2BO%2BzwO&X-Amz-Signature=c7b7f654a7f04ed06ed551be7499718f3d41b04eec0c577325ab55010ef278ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

