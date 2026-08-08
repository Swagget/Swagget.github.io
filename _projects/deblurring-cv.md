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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IR7QHO5%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T161652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz0dYXANkl1PkQSyA94yX53Bq%2FDC0MxuR7BEx3OF0E8QIgO4qi%2FAeSSnlV7JNGXbAFuRz7eECpOjKv4lgpET7H7Kwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEHW6VTH1F2uOn%2FMESrcA2RkYpRRhE5at%2F4ZYHvy24mnOUXeQ1OhbzRYgM5A%2BPFpe%2FtiudF55us2fnKZX9Mpqf64xVcN8C5hIqaU5tkVoQ5sOX%2FGhadW3Cr%2BdzEK9xy2iczGurtgLUDbialDBLeeksd2QIk7DXP8xScr4JxPaUEUF4PeaiVdC54K6Tp98ipZJnLnIEUCV7HYuKnH5UUaGsPzzpZsS09U3%2BLneBSRI9wvv6PCjaqC0NOeDdWLnA39GXP%2FFWezp6HTweUnnoyqtOUg9G3jxddYB%2FGphJpr8Aywrp%2BYMwUDOufpGmkeP0COLKihBaq4GRacwk%2B5IMjgewgb0roeonFY3JXe08Un9g1Nzlxk6ILt3l8Kcb2hBy8V2ciLrj%2Bc6nBP58tmSwOfmynDJZGZ6w%2Fm7E2xKhlCiaB6vHGgZdXZBTlLZn0x7c6FkTBkWdW%2F9iiM68I1%2BsL0HxKHTf%2FKrHH7xMFNJi9x7riUyiqppDm8ze6hDoo5W2MIx%2BOSe1vvT%2B%2Fw8fa8z5N5YLO0v%2FCWlfYT6dgnbCfSx54aQulZYdYOPs3F93AgZwmz2uNDZ3plK3Xz3T4lBie2hkie6270DMlD5ckdG4mhHhnHxPWH9lsKMX21yThppiirMJfGVZaEeNQ9E3AfMPSg3dMGOqUBTmjjYGIfdu335XB%2FsGSP%2BG0bBPJfokTil9MRtwnS9oJRKa6hSZCoKsWUUoIFlFWevDzx1tuPfJuvj4Yq30uhkEq1dOT467d1Gw80QMXKu9pCtsZBpVQqzIaJ29gKZIe0WbpiXbHqlCXru0%2BJOwh5T3S%2BwUaDgpA9KX1f1o%2BQ1CfFd0FtTui%2FQdK3YOWR7M0R1TYJIQv%2BR5X7Zhturq6lHifPbobY&X-Amz-Signature=0eb4dcac7e72fac01c93408da8720d547077d85f39d338501cb8aec90e6a5f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

