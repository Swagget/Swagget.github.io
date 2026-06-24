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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFMU77I%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T093033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCaeFmiEBdHJ3bHuaLIjp3RLyIX0aaNU84IU9sfJPLHKAIgC80qEymxXQn0JUYQq8OtffxJRGw9QrKdVXKmRsdnu6oq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHFpihn%2By%2BBZxdR%2BxCrcA4WsafnhkDu%2Fwq6QsfBKtGeCh71PjbqmUjsAdJln8w7Pqj%2BogkuqkgssMsIVd8GZwgUD3yW3y1rmtK%2Fn6eVkDuVm4KSauospmsidqGORhlgWsRezON3hIEWGV%2FiqfP8ijDG2oUQKNh%2BHoD%2B9dp96rL4GSoJb%2FN9zxN2rzEppdmLcnbD4jXQXGaZ6WP%2FHHPXgVS0tvjq4ZZ0VZy0vvou3XlBT6YXPcdV%2BbE9YPEWnOOn9nGyrHRBGGldHTsKa6Y4MlijePwyJqoSwgNP%2F0u96NEZ0yLGj0%2Fr%2Be4NS9TQNCohWIWF5PSrcO6HW6klrl9k1zsS2Sp97NzJ4l3ILV24xO%2Bnu%2B3pl%2FtRpqSwirizXX4nhrcFtNk4Jo1V5iqxSg0OaQqf3HwV9SMhDSocd%2FTiaukKaeY1w6hCzXo4I6GmirL7hpkgFkc8jTNW5ERMsbducmcwJKFRh4TUg0ShqcdRUYYQRjZC%2BnJUFIRPyRrmhaNqXbi%2BwPjwHy7IxeirXnnVCZiTJyUO1dI1j%2B7xpepOabGj0ITkW3nUQGlAcNtGaw3wZRxkkyU7uOuT2uX5hfKTemXGuUAJPidTUopiM%2FI2D8JJdtqSusIyhGTjAizXGhX1%2Bs4dwBN13WRPcb6Q6MMSl7tEGOqUBRaoNrjknRfHwyuQdkEmFoGO%2BeF7b5YGiH0l0Q4y6Gv%2B658uiJlVeeR9M5YdUlhY8GopLeBQBBZx8eGDnGK8pzKZaowK9btXYYsDt9%2BzvLQY2LDTft7foqG0AfXqhDiDgDRHoLO7b3vj7ou0JVvic2orhJwHSpCHLPyhEnusW6anzQQqlnV47Vol8UR51qYMoRF6MAZrfRj%2FUkQmXusormrw7vmXH&X-Amz-Signature=e6db2283e567c01c2f50795c0eea8c1becd88cd9fe25e6a549167dd4dbd2a022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

