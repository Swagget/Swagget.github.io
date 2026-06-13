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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X5YTQEC%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQChbcuWkUjLp53e6lwBVwenNQ%2FeVV7f5oS3DmnjrJskYQIhAMNUaplz3V6BcoZ%2B79xLkxw2D50Vf%2F1Va3NNTtPuUyggKv8DCDYQABoMNjM3NDIzMTgzODA1Igw79rwFtl%2B9AYAMSFwq3AOnMETR%2FuXKHe23rLN2VU4zldJIkNKYo7mkLUIPDrj52WKBnKmZUcLQXSGRqUA%2F310%2FvVHoLYG6lKJFFcrlaL6Vx133uyQyRtwyU48yITLrxEpyJgZ6Qw89dc%2FN2wTgyWUPlYDjSeyNZ%2FsqFrWFOX62HJM0Ld%2F4rmrylHMOxjpToKkkGhaP%2Fb8HxrjhM3tNTbSwMFvuXuKIfoyyv872VKWUn%2F0l9DpCXNgOqHd3HAZjXmAVZU2ceMz%2FgdO1UqXbPITL0BkTvnUpt1PXbDpvbQwnx0QL93wLznKrXTDhXTzfxAh6hkuYa1p%2BfzrhMR%2F7LcsV68%2FKLXmcbJOWNzqHne9%2BTtT1qi8xJSST2c5CS7WsYhQdNQMxRkrjvW85r37jazrHSqr4a%2FLtJGH%2FhU1Q4rsLwWbBg%2FIhX69XzmjwrQ6upbwKxCvREUtvEKvrNXyMWwVSAQu6xm7iJNHbttEbtaYs5vuO%2BXzCPUbCq8Zk2xEcx8r1qEpsfWx%2BBR4MqeZVmPjms%2BVfsDec2nmvIuGfUU8OZW%2FCfDvz2kU3FS2tEt%2FHkvfn%2BbL%2B0a2tsjiD0aLB1UyeewcHXy9QzSFBxnB22AhIVdwPjEy4%2FI9Vt386NRU0km%2FpLEN5gurkmiWjozDCjrfRBjqkAYs%2FehCCUJ9ZEs8aql352MYtNYJLh44S4CBJ02F42tcVQ06E2%2FHoGhDF9peQv3VhS4pCSWUSe3TVMbL%2FN6X4cUTygVX%2F%2F86s5XLNuhOR0%2FvZ1X0OIffiSaR7jNpOC4glQQ8vfWIs7bGX2d7j8EzzUKlb5MNY5iuTfmMWwHrvE45EhblWOxJkEBXhMNhT7oNXTgQCrKh20M%2BikLXUF9Q%2FWj7xxeeu&X-Amz-Signature=3d1b31cf5a286c4f46a4d03cc564967418e9c079c872d62bfce0bff187c73900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

