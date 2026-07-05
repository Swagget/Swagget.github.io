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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PLLD4X%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T224604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDV0HUfkuk8ARsBS%2FdqabjVER4KrNIzOTGMoyZRijAbtwIgX6o0KHh2L2fUNbasFC3sin1k%2BAL5L0dJcFgVcUiWEnIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCZePaTQDb1IU2jrgSrcA9LSCpsfKh%2BbXnS1%2FMjFjp4epv03RgX3cGeQEUCvc9wK4jPMFkCjGA2kReVS4%2FMTjbExT5HEUjCI4h3tGM%2BT8sLy%2Bo9LIQhOTU8gByA%2BSyJuXv6OBlAOZUib2L7sHJMNN3lN%2Bhqnoo4GFZjPjg9wdY9HvIMDHWt7ErO5sdgimUytZN5FidYf1pxgPhCGiXiyHWhuH5MNd%2FjS%2BEUbiE7Iw45AShmlpjNujMpB9tCSvxZCrWKwjQGKnX0g%2BuUKXKY0IJZLGoIT%2BqSnBWYZCIA1P%2FKvJNm2%2BBEUFs7Vp%2F2hcYNUTeTJh5mvjnB7UZP0ekWzY%2FuTQLtkGCGutsD%2FOmoYS6njLLCkBzKpi7WjOwNgICbUOV1dSWyoblOSx7sICKWTo%2Fa%2Boqfp8a843BneC%2BB4lxcKKPo8nFO4O7T8LAs5q1b7bD7kc4EEO%2Bg%2BHgynRZ%2FAMYIiCNhoPmMxaj4JxkQWC15pe%2B9YxFl11BLSderTcd5x25EZRRpo5QEPo4Hx%2FC9LQ%2FMxg%2FhnjiJTWAw7ltkvy9kLMp%2BjraCH7zH5DM9Ula3DM%2BLeXuohs%2FzJOZvTjlUSNLJegzP310CrqqBq7XiGH1MB1ReQKtCcar5BDNji7ICPjGMPenZ4RXkNJTakMOaxq9IGOqUBZSK41320zF4Rqf8LbqV6a4Sdb0Y9sxG7%2BcAghVTfGqmduvZGg9H1tylpZcXAGjG9gJsRITva8RTwHP7IMNMC538TQCf8x%2FLXPOxV6EGvEN8ssWmQWndgSWm7SsGDs2W6nmP7yjZe8V6Jyru9X650zo8iTkqHJEwNrQLFxFvQxMGx%2F1XZ9DwXi8XeQtJXoV8C2HpXI8HY2tCd54byT6C7xAvz9D8m&X-Amz-Signature=adca70970e202bd9c3960ffe6303e0a72ec9a5e9a25585388cc8dca38c31138a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

