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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4NGTWG2%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T114855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1tFqgypfv72zXhQzJerUdggCF5%2BCOrfGw%2BqULsp3cBAiEAqWBLXgJhjb78SjpJtdbW9FrGz58l9N1aoMS299KSMCgq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKJXTPNXP0H5CWySACrcA2JB1We9Aajpb3e4pnzqryzIhm1%2FJUOw%2FfJj%2BsKuIZoMuXIgmIuT8CFXcGzcyTT6WQAKzRvQWe73%2BsdjTOLGXN6qMSxCIs9W191Cn1rHIyC4D1EQw4%2BLwzLqSM33O%2FM069UAH4eqF%2F8aUZuhOzZ6vbhogumItR%2FhIWcIpWqlUKLIdaDcjANtywzHljJn0I8vvODP%2Bs4yTunwsaLd4gidRBDKd2W9hFJtJ8Av6a%2B9d6DXBjW6%2F1RtC%2BfaC2nCQzWiXYgAR3iOayBXwJhucB%2Bwr3dmPxkquaw4V3cB1gYQDCmR%2B7L%2FSSjL0Nj3HaIOu9XVFS3SRE%2Fo02h4tE29ADfPOf%2BSYNLKW3mCxOKoiM3W0iJhNRxP54H9FwlqgnOuH1ZRFxMHcICfOi%2FNhsFLhw38%2BUCtFZ%2FXI5vbM3Ejwz2l8qD6MhI4M6Jb0EV9rnUrP8pInMvTrd2RML04veuq7rC8AchZ1FhGVXJ5JYXT%2BdiHjIJre0YUHad6NjYiPU%2FMA38nPdoJQeKIXjBlOFnYS%2FD7ovd712Nhen%2FVLMS7FsSAfiySb9zwGdGt786yqFcdIiAe%2FULR34NpujBWNvGJZ8J63WdrVZYBFXC1otF97QVmqANO3c7KjcgiFQZAm77cMNmL%2F9QGOqUBlPALF7uv23vpbEZHFTB4KUXnmIOz0nusdaKeRZz7crbV92Zt8cf4lEK3m3QBM0tQWmL56WW4S4%2BRu9PPYnTK8XGok3WmMRhUZoinQuXf0KOXLdF3AUl31HkZ7ldYjCyfRuhqpVnZN7wRvh8XW1gfzabtqqvWnTDC8sSlzkf8lT7aYcrIopa6At1EYxbXBBEHvky%2BKMYSamHRFBZxg8K82wewisML&X-Amz-Signature=cf44e6259672f76d7bf34e40521b905b04ca85bd15bc3c609da183cd88c113cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

