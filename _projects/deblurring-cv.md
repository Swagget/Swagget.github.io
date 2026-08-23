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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZ67BD2%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDzkT7mTTLoJfdebKLrn8GucKt4EvfOFw6azLWOlFxuWgIhALVat6Em0tKSwIVkaYqj33ofcoVORZtKtJbtMjP9f442KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FedqH3iGQQAjVLsUq3ANgvcVtifkNtVhOjk6Z9vKfStdsM0DDCwL6%2FjBom5C70609EpLTh6PcuYIK9Jx8rLFPxZkXjKd2sHT%2Be%2FqiqeeYn8pUKFsfGm%2FczObOGgB%2FVTyEeafS5Vfm238u2gOfzPBmIB27Ycr3an9HyJpcAHWxz19Wj0u74Sud%2BhULm5Dh21RJJ5kCqmcyNHQDANWlbp5UcbI2zf%2FTncrO3blqbC2oFo0Wzz95bKR4KdXLqC0uycq%2FPuZJ9iCFzgJ3ADeMTX64jLENRPIIQ5tvwPQClBk9nJw0iUHQ2P88xF2h5A1kb9x8p9p7AAo%2BfJ3I6z9sx4BwMOxtNCjkyIjNSyCEHDUE15z88SLOJSQflbiti8lrXZO6%2BEtzndxE9bmaj%2FGSI3QW20zR3%2BTKP%2FzGALW4jUnARSXSVvepAD24rEfYx7uILtK5qbCb6oABoydcXJMuQbdgB%2F%2BTFg%2FCt48ttawvFvVpYyJiyBhZIckGRzBvCt03r7ZulxbtALcJv%2FM1MeZNWvlpjsBOV%2B50eVDKwRZCwn8WAH9qIEOOOUDOtexliyw1NocVGY34aDWnbfkw242oFAYpKNtv9Xg5vnWQ7xwH0FBo9kqa2jVJ%2ByCgTqmUnAdoUn6IwsC48TLA0Z%2FXTjCN1KrUBjqkAXKkLVQJQ69oLNbwIqIoNjn364mIPM0BxJuLgnSuK1bu3kxiWh9rYhdeIJHhJUD6mLhW7Y%2FmCQrm6vp8xVUete%2FXSDqlTfdzQM2K3P%2FBj8dgTSY2t%2FXW8W1ZueLyqxc8Wkj053xqZSTpWb8QyuDXuiKm6%2FQgQPerJVutuRf6tMm6XU23P6niS8ZuQWuL8gN1uJ73Gi2rd4FsijEQiVl4gfsq0rdV&X-Amz-Signature=86288739acb1c2bb5fca67e53bfb1e93364ab4426d2c2e6ef1b0eda014d9e45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

