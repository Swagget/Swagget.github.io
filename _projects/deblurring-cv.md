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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDFGQWW%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T124452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8TyBABTocet2Ma2vRyWj2x7DPN%2FiIInAU5wNNeHtASwIgH0kOP5DT7VSFGKxCCjUAJOJ0uR8mgvccRM9wwKsLPl8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8MyWD2oqmktU4SlSrcA%2BFVtOP7HhGb6ZT3qgnqhV%2BAtf%2BBLPpZ1T6dJkNXi0mJ8oTcrd0qUW%2BpnG7FxUlY%2FmW4fynRPWNlwmNhTbrcXOrfGSCHlyzr3uNwG5A1lKrCcxSgoJfO2b8rQjFlD3peXVCp0Ls03YdZbQ5WhVQvhyWb0cMjQl87aRT4brGGRKHBUqyxzeiM%2BGp0hn%2FAYCBugezXeaRLoFlYN8Z8RAXlnAJAURJHyAJFRHNpOaFw9vI01taDgByIPxcTzk2bPGbNm2klqhYH9JM4SKDHAyrrtuWSBxrF1fa0%2BVD4Jeh7%2Bu3FyL6CISFbgDqMVBawpSUgATiZnYr3kCKpRyVAEZez0hHMYRx%2BMVG4UgqB4IR%2FJFAPh50p5jBX9mDu9jouz16WO8cIf9ojpIyOhyo5ukPM3Y2TCQYduAtJYiHr68dA1XCTvSR2OjapSMeawxc%2FAMiEYEBtkrgTu662kvcTjq4TTe6VhmIRUoFiqnd1Tc0JHpXhnBvYzmAmIFRvzl1UHC%2Fiq%2BRPA0wir0xNmjvRc1vF1O%2B0bsPSzBPZsFKPlBIqXNsdIrRMPJEpDFvUK7pcJODlQ5I2A%2FenRJzaneGohfxfL1KlbL5i4y9SQk%2BY4v3j2L8kDzXDrJ8wx0MyHLv2MLOn8tIGOqUBr7O9daUYGiA6ZwJlvXJo%2BMkJ8OHsuH2OdFatxgurMIAGOFt68rrZAFDgMhMEz0dVLVyytygMU0hyV4fTDQDP7%2BggNyg69N1uuJBm3VsWmTjWMjAstRNpGo2QSaFWO94hIOuFSL1lJJCOIJ8STzlCP7D%2BbvGGuAFwYpZSTA%2BxztkbUuYDOleeXfE%2F0%2Fie6S1m5VY6ms%2FhJtM%2FCXs5ZkS6ZlrwnSeH&X-Amz-Signature=ff5da840ae78b43364d4f60adeb7881a0bc797b6b8cadc3a760f2f27cebcb2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

