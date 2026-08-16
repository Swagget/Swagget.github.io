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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZVWGY2%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAEmzWk8qHnnAdP7W%2BYZTlRrOOuwu7Ni1lxONSt6KTGmAiEAyyfuUbM6p6WdHhEfxJGZgXxvnqulclUlHbWl7%2FFkFZMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG%2BKCuKeugqXSTi9jSrcA4cKvgaLfyKsv8cNxymGpSivKis9SYVPdj51KLUIgv3AxAZeB%2B%2BXPhq6ToTcfycP0dWD4tRwYUMxveKao1v0qMFuecyyyBWAIay%2FK1abyHJO%2FM7AP9UvgvzA7c%2BjmZZWqzIepEx2XiL5lCaUpz14pUeIbXuVMU01vlTEVA375IrcKoU4r76HcbbdUTbTm%2BapT%2BePFrakrdyYLaqtxLNOB0kAEnX33yTEAS4SCTZJNhTSMM6O0%2B73rRoOvszEOY%2F%2FQo%2FtImdi6FF9Ve9JfqLXGSsReIlkVxKHhKmbXWVS8eEI9%2FVBhJZ3MSzS9uEbFwiyhrHXGERZxTwLIaFvuPnzkq0ibuAALrPZe%2BezsKdPAAFzPj%2FvUpWzAned%2Be29VKR3OohHQRHFljRO0j4bm%2BhFj%2F54AthWuvFk3dFdaStF8%2F91n%2F%2BFHnXp%2BNUBas1jEfGh28P4n2rQcJ8Vw5DFIGLVMr4l%2FacEzUhrDv8T%2FsCvkj%2B7%2FZwXWnxK%2FznpaPB%2F85o0y1K3ho2yBR8NA%2FIniAtxt0V1UJbNQGdEQ4dVQUWS661tXcY%2Bt6yv8w86zRBWHYJNITEdP2l8wSgAmSd3nvPAhWjHlxOf6Gz%2FYEyz7Ai%2FiIpUEedDaRSW0a8ogawvMM%2BEiNQGOqUBGyeebL%2FDX%2Fy90KNY%2F4PB63IdlxV5nPdyhtLD6rnyAyZUSm5kL049zYIZlJN1%2FhKQcVvAqQByJ1LRooEGuVSTCcop%2BEcqAf%2Fztuf31UTdn3XWxJ094trQJG27QMphuiEIvJBFvh1U0iUrjK%2BwJ3ala%2Fg7ujFnykv%2FabH1g6vgPRMpl8ng%2F3rW6kmSMiuxHKL9NpI9nTrmacO9TWmST%2BAAReFKcCTT&X-Amz-Signature=f64a9edd26442bfac1b161bfa82e47ce2cf980d9c8613524883d7583fff4882d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

