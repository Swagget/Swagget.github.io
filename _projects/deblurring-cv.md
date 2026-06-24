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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSJH26Q%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T055951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEhlUoXRHyYzWpLVaDaVE%2FvA127uhLl9OeG975NMTDSTAiA%2FgkLxPbtTggHbLsRO2lyhzOv0JbqRqu%2BuFvp3okqpfCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM37kMKEYK5Q39TgykKtwDdBDuA01yIg6pBO7qH8YHppKOljzdzYL1W35vqLlFVdgoVaBhANcJa%2BDxoeNhc5ZmrxkWmDBfKFkU%2FyE%2FV3ymQ993cDGIanQFkvLZCPt2Y9qlSobtgr0EpjJVxOgpL9zY%2FUWfV2LMq75l5xP3oEa9obAC4G%2FqO1YN1M5O19zpN4YE3XDEq2ZIOnlFCz%2BPvkReoExKnwDnow6OPQd%2BCkDmGoRqhimiGnfdipEAEIg%2FTA2F8OnbRwyXcziDKSomuWOc3Mni9lMS5zC9IPgWM5UgUiX5JXf00cLhGBPVV2q2QuJFl%2FYgPzntIEnYb84nK26DJNDmrwSkBQf9Fmk4zOBUDPtQauDtklYQ%2FRODkIveGP9k%2FajTQrHfxnF4FlO%2FMNyLyswL7wGoVv%2BF3t7KRwXFQJkOLoyQ8ZUNJsgMqj5FATwlT%2BXb6QOHqrzoWPvrMRPR8%2Bgf14dIbAmmGLsWME2xYnfmNQjBPr7czLA0orJF3TxbW8pkAowCG80tkCAyqc36pXDX0SsQCLyN1kAI2X12ICV7bfcoG2Yu%2BxHJiB2bFv%2Bv47XZmB%2FlmL92m6NzYjITObJmGOvmAXtteMzyolfEdQzCxzmlerN9fqMO%2FSonM1fbwC%2BHrSXFkA7CCaAwv77t0QY6pgFI8dlcPi1PeSB77BT%2Fqa%2BaG1CWmrMJMwCkqgGtYGaCWl7tvzb%2Fbmv%2BTCuMhdHjR6PdKjspQkXFcAEXhFHc%2F5xHSbvDmHlNjrdeHxlUU3H3ub%2F0E1JRQle%2Bseu3EFI3Ln2LWmK0%2Bx0eITW79MNqDl0ar5w%2B6QdVK%2FZr786wlIU12QbdAAoitt%2FxKYbF4hIWQB79hi85%2BCoL03egoklbuSZi%2FZ8Fn6Kx&X-Amz-Signature=b2e4f1950093ad1dbb9b5e181fa161810df7d037a6f404f5717a3ac00badca21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

