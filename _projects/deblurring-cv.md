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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752DEZ4K%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T074355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJMSJ5NEfRu0W0iP07p7iUuyBbnFlt32CtytPAq6DJLQIgWtDdodIFS9dJ%2FiWQfY7rOaB0KMd8AArmj%2FSopZzVZ%2BEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8ESpsvf7QMz1GXKCrcAzcgRGpNoTNM2VOTybEZcsO%2FO%2Fd02%2Bb80iRvSBcvcx7%2BHTo4rIxDgcNRESL%2F8htbDkUtm2cud7HKOxbgNW3xUgLAKSW%2F%2Bfk6BmnfbwgtBURzVjjy8sgBHS6yXtq%2FgOFf4555pNUwTub0AjHeg831KPVBJsQjC6Q9Yr3eexpM5Q0199GQlmSxcVLUCh46jljlGY%2FDI7A%2FjLladjo9h58YUIq8Cb72FN7%2BJ2mEGXMNf%2B3Oip%2BnkANcTfz2kwGOqXVQHVu9HgpYKy8nordwW%2BQYsvuIEsLWjmeznT0vXdIapFI5DfKcPEAYf%2FsRZRs72imZJn0eXcDVpNHv65AvywsEBTsI%2BM31JVad%2BoI17yGT7h6i5i04R%2BJeLYjqGjCzZ9scT4dNBmJb2dQMxhtCKqnEwjPX8y%2FG2Js0Z3rIVnAB%2B9rQunUi59s3lDIMUhbTh6EDH3Yw11LTOTfpc2Pxt7Vhki5oJZum3ncuGQ8WHzarzUDhXTkfK0XvDa36emsGcNmeUmISB7x%2F2Bc3E6HUQNjneT5bEwn13rKgHqEnx1Yif%2FLF9nMqxTAVrHhAdByDLx7jZtUDZ65HL%2F2kvq0YSTrylI3FvHqdUuOn2QwQICvTASbgfdZ%2BpjbSag4l0gnHMITk5NAGOqUBtGRrOPLoQ%2FtGWjOlTRRPUF7RJJv739QQPMntoe%2FCDOdLUTUpgCvnFn56Fj3yLVZylh0w7DbhfGSqqxQ7xNwykXTLHb5fqoWwcVA%2B5HAYP7xdZoYJVeAF7Ra0PL59gKpXzwFTXJA5PK9915ZqRX2etsroZtzNm1pt8OZ915Gn4lcsqCI31p%2BxsBTEzH5wizlpMEq%2BdPNlY7k4yZTRnQ88Z4PE7tgj&X-Amz-Signature=96d7ec4197404a75ba50e5533e0c8bde904797f9c5bf190408e1f7c6c2eb8ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

