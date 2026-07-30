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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBJSGNJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T162405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUYX0mzNkPlmOLl%2B1N7pDtofuHafpxRV1X4bcxbRDNZAiEAzp4RbxwY6OLeo1W9nYKvNnQWaqFHAl0Di7AAXdUT6cwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4z%2B%2F9WAZsfg6AbJyrcA9DWa5e%2BS6mRyCxusLj6lEvMRGaRB%2FxFgEMrLn%2FGUIYzlkXR05xM7V7LRC%2BFqwciQZZVyFnqytNlJ66MFYB2VXYmXsfDMkCDZTtrJKxYbR2ehnYOakEYxNxUnUlYjGXSd7nlc3EyIpzKUGsEEJEJipRfQjNq4ddUbMUW3V3LCPDO5sNmZrG2KJ9nYElNdNF5T3wW25wLqIDshOGi1TwvKFwM%2Bm%2Fijs%2BSvsedIiHldCN7OlxZo6tje3QVISwz3hIhYnJ05UTOucgZPEROIaGug%2BsYdiSCDjF8%2Fy%2BeVnHUfauADwQiW30%2FZMS6so%2FeD28YeA6krRsVO0eqw3rvg79LMP0KHiL2w7kjFrSZEcXW4iF9rMuW1D1%2B5QSjW3ypAlJ1DHk%2BnrEfG12PPGnYBfq1p9LhhElg9SV3f7lEBWs%2FaCsg7rXroyzFtVQ4YXnKuTtRHCEwyx6vhTO5uMxJ%2F6XO3izGUrP6oij0Qh0RWyIqsMIBKmOo5Mr7OqypvKnQbmcnP5MaZAbmYOCHZ58wO1tJKfd2Fb%2FJI4lYVsnEMSXYLW99t1zwQExVO87Vxs%2Fr1turP%2BeVdVbiSXyPevL77hmdCWG1x1iHqMlylA4Gs8cGZouvXDWnQVNJ2Gr9xUNSMOrnrdMGOqUBankr%2F9cWMsVDtPkGduPWdw7Iaxbtf92APSK8iGRqpQEJPtquB%2FyNzs%2BlfXTT8C9unWJ09SkrFr25YDRpDkaNiAvD8K47IHH9GkfJrIobed%2B4yzAHu9oZVVGGw7JUKbmgSYhK7r1Se3OOpbAvdgCaUKRZfga4HWk8Qw2h2folN3bfUoqoGk2QGebESuCAC0PBcOllpETMnxL2cWzr5FsDGepPe8MW&X-Amz-Signature=dc5a1c1dc0d983b2ac6ff4ae221c9005f9925472c437c0d1698e16519d27e11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

