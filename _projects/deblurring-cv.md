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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQEIEXFW%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T180604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDXJiVgIcDXrBMlmscdM%2BmQew4%2Ft4fvslECuczpBzxbcgIgOyxXRlfYtTp8O5lYP9vDm66bDye3U14AEz8HYSTNiqMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFNtEaOxbG98kHB7HSrcA1bav4SDKW22BCNYzH2hq81bbU0BwwxGt3aTOvci4zE%2BXTj16iwA46mo42WsKPqVfomICc9RDqEiE9hu9LuZ%2FqY528v04bex5nY4OuzC5BjdxzIoNqyn7fcPQTcB53BH1L1QgX8HpaABAusaKlqWL7VuViUY5B3M3DUR1E9mQWVDtW8IUM2uwzi4bsyAZESD27Wnb3YFY4OQb5s1zvKbQDEgsQ416dLfCdkgrKEJsewCRhkpJfdqprw3W23qc6eJ1fcan3uiCL93g9Nfa36eCzqkfc74%2BCl7dnZp12z4Cko2ag1g%2F0%2FBjgbmw%2BdA4v8wHjfHxS1TwpObkIYYOJgCnFrThYZYNc3jhvc0Ppp8m8kSR%2BmUdAZoxelI7aiw8M528v58dHET5BtDILitkrV%2Fw6ORhm4eRl2zMdXSGqtSz3erLbLRbMFjKSAce%2Ffxpex%2BaH%2FhB26vsBxvOGSkI%2FVTTbXfktZpPnvqV4DS6gOY%2FlSFfbB7sFnbxc5l9ofrMpFn8qhQqjHoJhMku1s3%2BbNRoVYzY5vNWb3v4zd4SRewa15rAwBIGD4ZWDnmoA%2FGrBUGs7moC4RO%2BrauSobY8z2MA%2B3vc4xs6fF8dqcNporiLhRBSYddtCIVI%2BfraJIMMJTF49IGOqUByhX1afKQrARbK1TKt577Bd%2Bm0%2FIQ6wXDORksiOYFJPwzFDh1AHQUrUxu9AgqI1laBHsg%2BBISgqJsGOWCuYlJuWyyNgwGdTOB80pDdNcXnj%2BV5kRhxXJOmt%2BVUcyT34lJnBXFceYR3EUGLvS5mtlEsNqCPeMKsZGipDLksiEL4mbj0SSI826iITdr%2FyCVTUEobsItL%2BzlYStkS4EJWz3QpHRE5UAf&X-Amz-Signature=c901c71acdd13f0693eab957d86ed3fff680b81f8443d16713308fc3c917496b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

