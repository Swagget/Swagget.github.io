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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3YV3F3%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T160557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAf48attLnL8JBcPZvlbMjRZ8x61TBk%2BpjRZFnCmrJCIAiEAhpyFY4ArLYirABGnfarfmFIMLk5x4AQRAhiy5HwDsaEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPa58sw8BtUEVtq1OCrcA6BwgkDmRsbuI%2FJ6uB1RrL6lIiFGEfETYBLIW0gKP676fbJVEKWzRkEJgjKFUR0YGmBUGNX81idczAM%2BZB1%2BLd7zx%2Fm0NH7quEMggmVE4mQBafzoYgRFwlDOhFVLKa3VjO7MeJmWZreVfT5DOMHIibrDmJtzTo4tV%2FWDRwqvoU5V0cBFJa%2FqkdQZFsFzd%2FRSIZaenPaBmmYWL4Fl0Mv%2F3ghW%2BemXf5FJgsY6puumecaid0LTuW0h0Nj3%2B6OQDk9n1qjwPIC3wgR5iuT9p1sy93Jc0kjBisF%2BLeRw1rtuc75WcIdcKj6ayu2Esz2wlBT3QAxnG8TWd0Pq7sYAN2GpA3r78XggK%2FOMrlmSdxH1msj5QLzKhRpOu4iRIApxNY212Obhh0k5B7vxfLqiZJlN6ksRXutXvQVGzci7mdikrh%2BkSYGjc6sx6G8ndqFPL97nkWi78ba4lhPhxXfhKRf5v1PPe117JDl8wAvMMkwynNnKSjDfAJGiKS1mfLg2uxNOjEIuJKWokFgE3Sap8fKCizgESx5u1fxdwv3D35c5t4cgsj0NrnrITpH8OCNBUSRtOjfGO1XhZhho1SagKMX9iTzWGRXDlF1S1lxn5dCQBO3bk8IhCP%2BgxOEMFWlGMM%2BW6dIGOqUBP2wfOzUNjQKpdminwyulrAmvfKVdrqM707p06py6EXDkfp7XT86PB%2FO2k7Biz9vr5k8bPZBs2oxMZfVQKnDlQ2hfYXNor8ilPeU2TgBSU5QUClEkyGYZjrkY2FJntwqnHlq99rTu6wissHJTPlnRhuHvv48gQzY41NKcgInBsP1FumVu0cZlpQlwj%2BdDRlY5rGPDMgvO%2F2mdXafB5CBcF5NtgYqa&X-Amz-Signature=c0375ceb064565453bb40f197fb4f43861016839ab0670aeed96056b0fec498d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

