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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJBLJVZ%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T195830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEsbOcwTlNhad2CqgEgqJIswaen7XKagfDVmPhEDnA5wAiBT6pwpjoGK7U%2BahETBLzv8MVYNNSVo3EHAFzgbDY6c5CqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyvlla5S3uIbZcZ4nKtwDbTwIGw7SrXOif51xVNtNCGzGwRIPkETBMeK8pWAXTQWar8sDLt8euM1%2FT%2FjaQOq2uXSJ2fsUjE0aPw41fvAc58OhXGVeutO0d%2BSwWr9YXuJxcRuiVfBjD6EJcVKFcwsW6bIkKBfe7G9hOCZbQO0A%2FVev7xo8GkWmCfn5AxifT%2FxJUzArXC9KeMmo6NJE60Y4v8kCdhtF0FnCvM%2FiqDy3dsClHAdznJ0AKXPph5fIZKO%2FZE4uPvB1U%2FWr4y4yo9YQRSArKDF3aLDxsVP8bLJ4UX91qnw4i6sWXRcASgLRy%2F8jUbByZTS4gfGiiM%2F3kcXkeeWDo5KbbIKPyAngrbL5x%2BZ4nKCPfGyKGU1H3HhF5LGTgsk2DZo3au4CkO5oJj6gB9BJDcuaYtDW8ixGmRWQFJbvlOm4zogt56cDIVgwjbrEzEMgEucnsDDJhmQ0acKdnw42GXlDI%2FwOkQ3lGlG1z6B983cc0lTJ4vdqul3Wf2ocDZ9TTbyAw6bfpaSyFRvT%2Bad8rWHQIPciu0jYzxhE4VqBW286ajciBAirtw848WsLXAKIk9qiCgHh6zweAJDOJ%2FzCKevldyKtZh15wVn1yl5XtEKL75CJjweaDLg9v%2FaDX8JPMSkno5I0%2Bi4w84vP0gY6pgHvz0Gir20JFXUnNoNIimTYhPA8eyCamOnjeLu0DTlMlWzIz%2B5FSRn2JpnAwHhu4i0Dw1gCr4vqaQ9k7Umj2CqhYN8m%2FfS%2BOisu5GxYrOLxKQv309msjLW%2F9e%2FHdBrXmnxFTtuwHEaoOhCNZLz17Um6hFYczjDyYgdS0m77PFzgeVxFOf6AAAqFLlySeeRsvDnP%2Fioec6nXGUgQrco1%2B9t13sCpiLIz&X-Amz-Signature=662c567644d323411c7d382d29648202878816af23814c16e80c8bc01360bce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

