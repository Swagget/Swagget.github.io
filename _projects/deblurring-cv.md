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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JEMPAGN%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T135615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCs1rSub3vcAanlErTmBAMo0Z7e9QJv97ql1flnGS2bwgIgQg4T%2B4F3%2BC1vMBzh2euuCJ15jzRa%2FeMAUAi0mwVpY7Eq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIDWJ2jo9ARwMQSzwSrcAznLnS2HMJFp4sMQwYkLrN1yAtxRDsh040MHcFWzinWk52itZjuaF73a9%2BjSLckz3K9iqokMFZXXWq8gh6hMsx6YS7Zb%2FiFW3iyfNbFWrQGbAEJ3IOE6jzzyqJxGgHE6oLtSuqntOLlb9hTfP3q8J0WsGwjnZPUEmYYEilheIa%2FoB%2BpXCN0hWRWCDG5qx7HI8Ocf1PCf7ux6znoMdrC8ck0LHvskuCmc7WcGrdkp2Jn0dXFreV0mypeuppvk4Vmi0m2uJ0PEZKhp6j0y%2B%2FCzQge%2FjlFIMeT48guDqYwxXkn1jCUj5vcU4k12573UbQJ90RFyLbLeTmH44xVQBvaw1JOTiDkxPetxbAcQaaF23zSB2agZ6IhHGEWJy2gP5tKSY0rqVcy%2BKI5uw6GpuLpZ2RxLBWkTsfwHvcNQbDg4O6e%2FoM2s4l3vIptZQUdsUyeMfynoDtqrt%2FQQLrTY3yYTiEmRtiG30rMxGJAGy7IYBo%2By1SEXoMhr18KHmHkXMeh8sCwcacyF6JVtFdO8eUSHa%2FGDmenb27zaNq2HAHJ0OBVP3aa81pKFH%2BHQBAnPIOTwV8%2FXkq2PDpbMLCxNRhDlv%2FYJOrvcR3hMBAqrgsgrRj2XeVhCyuTxZUbyprJAMNW1%2B9AGOqUBK4YP5aKogL5SgRpTXDJ%2B%2BfM2lpYW6WJLb3ZbdEKMcASvWD8g%2BuVg55NdX2cs6c%2Br4px2jCrg20l9n%2F2pm1xQMzCW84%2FfMBgnKp2fQeugUMe4nRLy2N0jh0VGo364PDLhcIsm6jwup4DSr0EFVgSLIMKBtDw4h32%2BNgFY%2BlrUzHz2%2FAPeLvoNTyqJZWW5BEqz2aQ8Ycx40FVs05OplkR89%2BWzMBw7&X-Amz-Signature=5ce03840d89ce5e3865fa8f39e05432b3e8fe081514d6ca5a8284dfa4f8d0481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

