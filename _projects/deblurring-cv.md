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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4R2ZG5M%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T082713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCLNXUVGJ6Z%2BH0Bxm729l95db%2FIVRhVE0oizdYNRmaqwQIhAIPnnwwchQr3auiy9Gld7a%2F2p%2B1EXr9n6TzXu%2FliT1UaKv8DCBkQABoMNjM3NDIzMTgzODA1Igy0MVy73CMlhQ4HxlEq3ANUb7uxwRurMWiq6pKwk8NZhvHZ5j2vOM9V1TdZWVuEEubk2bBUen%2F2sVKRuaWt1HWZcdK2uwTNMGwS0FiRAxpGnnulooDoKJnyHOiVahHtuEkh5GB8%2F9E%2FxrD%2BKEcx0LO1QvsVqhYTZ17xIbuva7jOBLj0WMMkBiYZ5bkonzMwrony4zD6danvCIpah79DCzfX5P1XGyqw7TzzSNunfIadMrkEej2MfprcNRm%2BGK3VvWVPqzf6kpzfxqKpdjETcVA6epI8QXWK0WmtPHGOc9egFsld6hyQngLgUr1OXmVGkzvCMudJTvyaL7uBSUVSFj1PldzQ3d6O6THqIxuTMLa8n8sz4y894oy2q%2Ff%2FXV3VkW8eTd%2B7aeMu3ci%2BB4ttUMC7r8gfXkZN%2FXs%2FyMK2aR6i64FCWy7SpXRnGjxFiokQjqbgZi8YX0kO1gXSFkP4CiNPTeZjuCBaRUdTmgxLn8MtzRk0uA%2Fuv3tSdBR1E3xGH7ItDmm7Xw3NiViuh2LrKyZ1UTgtsVIqhKTgkQImmODdjeBMWZ2ZxeN0C6K70Tt6ucUkjsMKnFpmTT%2BbwbMdrF1Egtr2dJu1n9TnFOMxbS3IicdBmH8MDotgtl%2BzQ5G2N5pKqibCxqhxlq6svDCUurrUBjqkAb7sjA%2FbTGtHWXxtxlVMKURLc5v6kdnPShfdzmUMySPFD8f9xyCtbnziUCzEQyi6c1veTDJq0%2BE8EBjVeAbZU6skaxHcO68He1MvV5k%2BtVtW9%2BZQQXBcMgTmOeNjjPFK8pR3fPytjnwbjjfVugra0GjOR7Aan%2FI9R%2BShtBo7GR%2FduFRXKjf%2BbdpRHWCJkxwDXNeBWvXlH4frvyH%2BhDzUYjpcXtF4&X-Amz-Signature=663dcd21c74898123c157894a180e71300e936d211696bf2f9bd206c6dd80bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

