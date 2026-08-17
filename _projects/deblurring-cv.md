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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW4WGRN%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T181856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD339r5UMEP8K4Fnv4L%2BuErmIRe0ztHnMOVnhKPkUOt4gIgOleepXAcXaP0GmBCmT6lhJdWUvkm%2BqhyWHlTw%2B44%2BwUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMwCKczu0tsc1NEEcyrcA7QXgRdxJDcqtNWufR8oWuBR6qlP%2FSq79%2FzMw2KUVeaLLdAGtg5lzu5G%2B1kyGrziYul82vBJB4TK5sXskskcJlMW2Zq8MurLUixPLaEgxS6TQO5pF3duhosOgf8jJId7XOiGE7DSFsWulOL0mGJ4aljU1IdAKU019r4rimdhOok4GxVaQzUwcZKkF1M5%2BpIqJebF2%2BzO3VHwfpgSXru0ffg4wafydgkyfup8pVE4rdPxosWCjuMYIt2tKyZzlP%2B41fmz8uqOCbLOjiksAGqyvaMSKNvho0t2sNhUJm0vKSa1RiWBigIG2U9QhqtMb%2FRVemvlfq975DzO%2B5SbT60EVwE92ld9FhXy705%2Fcp8Gct138J3zil0L4bFpZ7ARPDzB56HwGLBlt7XmaArjtDyXyWxx7KRGlc1ZddWIvPqwhiswapVcxhK5p0%2FOcZBiYiAo3EScJOt6g3R5hoaSoKUeeF3h3KU%2BW5OPOB7ke2Xm5vZnk5pAYO3K6gFRfCWBUWTyl3Uj3jQqCDMSXNtHAcuPZQhmC73MWejtHJ8rIoRb%2BRX1ds2BUknZ6xMfhJEjm8cvUFWvUbHAtI4RFJP5UjlodoIZycioGqocu%2BkRKoFdy1m%2FSMUhP2UddjOusyNyMKCYjdQGOqUB2xmrhVygjOI%2FpaCuExBHDvr%2BK79R515UrccKDREK9lavDJHxdTwpOsSQJgyCUoe%2F4nFV8BfF10w569%2BgnsKaJterxHJmzE3qWON%2FIVtWBTT4It0yMygGiFsNE3PHbWjK4vssc%2F%2FPaUK85LvzGHJmrERggsYDnm%2B%2FS7wMVY%2F2ikhCuzxu544fCmwlTzVqwtC5EZLnguu2ikkrJ26ZL3BhU31LDqcb&X-Amz-Signature=6785504c73512080391992b016019556a1cb7ac6745ae21fa1787a0506dc880b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

