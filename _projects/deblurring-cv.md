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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVO3BDJ5%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T133611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9MBfYh0fmn8qoTYjv7ug7LekPEiHZHAIxDx%2BEmbcl2AiEArD7PXOzEbioJ9b2aa8tP8pBy0ApuSj4cMVXekjuVMO8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDB%2B9TdfI59bT0p8zfSrcAxcpuD3frmlLDXHlDu%2BXCItTf038QhaxTq%2BQEFqMN8NT4uzixvrT7dE4hscWchi84Dvu2YQU6yzZwpvDos3bo5zMP6As9QI0CqNgo0Gl%2BrSnYR6ztWCP40fZoPeIy5bRKBXkGImLWW9e0pP%2FHTXZ6TW1VBy6hWU7dOKQog8qcbG0Zd2HAkPuy7J5IMoggm0LQZbyFDLLFzV02daRyHB0ULwIVZOdVCjRi61EHDQAqLQavp317%2FmcGTjgLfMYzgtOYvi0h%2FKrRRzOsY39%2Fwfqp8J0r6KfyXpkbvGIpv8KgUPEWmUIk5HwD3x3gdF1ghn7nbzWTnhQYjj%2FwZsrnkquH4gg%2F%2FxDCwCOVjvjlNjcUSjXjVTYpY0NAz2ufHlMUXfo9UxpOEiV5fhsJQaInyefQXVZ7alrMu%2F%2F2FBZs6%2B7w%2BgKacZktMMRN%2BL9FGgZZtJF8R3PcTP8U6AABJRJ368%2ByCHoFUxTrDT8JsmraaryT1dLMH5SKxqp3Wvj0G8Mtiuhp2CJDlY%2BL5psIgVanq5Hw80Ti16Re7DAwojXwEinqR1ho%2F9pkHilSifgfbTqzyyaX3rbICrMAOGGMnx67zwEOY1cISTXxUv1J2ZarK2%2BYZPQurGNwQT3XWuJ6E6zMLXW29MGOqUB0wfDa0ccUFu0CbxBuaAVFL9dKsbW8m%2BhLaBTk1Tgxsvi8L2E%2F0Oa06VOax0wRnIq%2BxlRIm7hu0tg3VRHPOk4e%2FC8rB1HMRDty%2FRk8ew2c%2FCAXCD4T4ObmjahqdeI7vG5AHokrr0A9y5CmjeQqQJeBtG57HMNAikLlnToJeWU2SNxISTs0KsPUUAsTnRkybMEezLLQczyiywp6l1yOQXiX0xwgsNd&X-Amz-Signature=049d61e3a64d137e945f91a6a3de5c6850dd9191de8e5bcc62fb726e8295d922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

