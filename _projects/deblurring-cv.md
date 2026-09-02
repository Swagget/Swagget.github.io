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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMXHUVQ%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDYnUbAIH7dKklT4dGCsTMcR9pj34gH4hItn9FLtm3i7AiEA8QLKLaTomzA3MypBTDQ%2F%2FyH8z051doTMtsaKSfqqHs8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FIhAyjmzsfCV2uTSrcA6oRBTL4M2DNedjr3ocuiswLsO51GG3yXqBNA5pcVgTpKTH9dc4xI5PEG50TV1LQ5xHZ1zDZ91s5aIS6lW91dbT%2FDPiRs2X0kNSGPS3UviRkaP2%2FVh3YvYupVb0XCpNpUuBSwngUOkY1lOjYeqpIa%2BhYc2oR3y5goQTcfDATpBnpZ3GgfSuv2koqu%2FfGearD0UHenLHJmqVFfGar2nDDo2e7Sr1m9iUx2FH298f04fbrfK4D5pJdx0EntUiwJ%2FiB%2Fw5yfd4l0IPaaN9us77C1LlH%2BwLCc2RTzIf%2BrFnj40mufFsyVWh0o5MxYYYrrpPm1WDV0%2FadtWLhDNpMq%2BtV3nmjfBOyF%2Bm0DU9vh7UQKJCpMZASJgaV3VDY9SVYG0TR63Qe3xbZ2uYSI4tE0Xob0%2Fb%2BXtKuWAAV7YcEsFII1E4IuQ%2BO%2BlfqbksLhg2WX%2FsNkoe46GmNa6wETdf0pql6xrsYkOSwDmoU9iXhx5a%2B7C8nMGMNOd4VLuGO81VoWTueXil8y0Qc%2FD3qGrsaXDVK5mTdo6Jdv0ARqeRVy65orGvVG3TjCBFGJ7i8gkc6CFNrUISYTb4eeIt2HNOL6UN9sPQ3M1OTOQjdj%2FyuvCK59J1OSvEzkxq0riUArUwPMKa34dQGOqUBcqKbWnfOomgS%2BIGxfd94cHTYR7cDwTx14t%2BpZork%2BcZ0Pu8OzAKwPLuJgiaoCH9hPqn8dYzcOMfjFtODep6SbRkmcAypIx6XyOkliZetgd3%2FoyIPbCVuSHJKg3oReYgLHXhCLPYKrZUuDvLynFgtJds6xm72ZIdj6%2Bf0FhKlgQQVl7TmVD5SlPiFneg2pGXfWJ%2F%2BrMV4bEbhouQuI1JK0VpljSWc&X-Amz-Signature=eb5ad993082922b1233d9e8e1ad56c6d158c8392f8a9cb57e965303a0096026f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

