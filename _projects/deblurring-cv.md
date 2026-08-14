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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP6NIPDI%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T104449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIGsD0juqJnP4p0%2BlBW2ddE%2BcpNyk79sXhiASD7TUYF4pAiAyGtt%2FOYb3xeVnBIaJj%2FByOlE9XvwQUGSAo%2BN09VYTeyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMVV2RzVhzfz%2BH%2BXXKtwD3NHk8wQ3DdPxgsh5MC2Ape83HaeE%2FeUOSKO2THb2TdUuzLL4CUo0CCfvqhZ0xGpl6T8uHdo8TU6PkY68MSjX%2BqpYg11o3Gla585iul%2BGbAfwmV%2BoxCVb9f9kAcdNW45tpp4hp00c8nWJLXwNHgCwZtGzefx4sV%2FoVOcUJkl1Uxre%2BjTrOttmbimDw9G1fhCkMjOQEPxtzUfkhmvQShtB3qtfkaHAUgSdC%2BxxY7fRFKlKUaTBzaie3vH%2BBTBlWoQNXnm7gCwxmql%2Fl%2BdHGZrVhdFe2JCXODk6BfaSw64egt0iq0YhdZsUV95ZzmwsGUwvX%2BdJ4Vc%2FmtAIMhxwpuZBhvuOQ7e33RkxFvZiPHYTXpf%2FkN4peFxJ9MtanQEkKaSiyZdhK07wpIsK9yWGxBOPREIqLJmTNqU3NY1QhH5vPV7jk4YnkWmLpDQGSA%2Fu1IJf2pHz%2BLkok601qdhNCSk%2F%2FTYCg4y4gH8YbLEIGl7RK5IgpAXZI29g7vi9x51yGGto1lnjoVWHoJ%2BLGjMXFs%2BiFBBrqdT5fTmjBA35tVzuPLFClnCrWPg27tDo4hWRDPQNm8BIo9x92CzHYufiYnnEu%2B6p4T2LMXwndFbSxz6ZcxfuVJgj6lTcFMNaZjkw85z70wY6pgEeos5l8NNVf5TnMtfL1Ki5YdokQnzzTzlhhz41S%2BjVuWkbuS0Z33ZxV4RXDFMwfS56ImHU%2F6wZiX%2FQPuTaLOnW0XAT6%2BlfVRcni4pi5Eju8dy7XNmZgH8YaWmBVeyH713CNOVnFAzNJper9%2BWN6ijSvDi97S4TNFzYB9N2igqlaWv7XFgqDiQjRg%2BGIZVPVuW%2BOQHX3VaB4qYA1GhY5pz13y%2BZz2GP&X-Amz-Signature=979a87b1f859969993188aa5b5ac7ecef839040da8620f47bce3e58e759d0660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

