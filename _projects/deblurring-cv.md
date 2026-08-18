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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRZJI3US%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUp4Y1fktCETJi3ePFnR9YQmMhoTMhicLIcKEeYmVPKwIhANL15TDjItc2zP0hhP%2FOmz2Cv82vbFtPBtiCpWExUYuxKv8DCGMQABoMNjM3NDIzMTgzODA1Igy7sjWKQly56c4vuawq3AMuvUhnBYBpNJlcx%2FhGRgbSSAbjm6Dwl7ZPCiI6akxA05kc7qlQt9eoLXCaHPgC7gZyYGz7WbYA4WA0s4eVj2PV79kD47scinqfva%2BN65wRWk6Io2KCdRD%2FjtiE4ezWh9GAabtnSIr9Jpdog24krYSTzSJpmECE35fovyWKRyAMgojjBOXYx2PaQTdvEFmdz8Sao0JezlbzZej4QDnXgApG0xoESdRpggLNf8BO%2FmhjLcEsIUzHbujOrkXrSRt5sSseg3XuwQsDPfxm4HyYqO3Ho6SZZbhHSFagGNIpTCdeapVwuue5wwIvqMhItlIJmkuthfajnGSm4HJqZUVYH3VGXlNMT3ouQM58%2FYqCjcNhinrNl7%2BE6BATfstNGEHZ%2FZifThtLcfUMQmFJFJzLuN5p4UCzaHI7cGIRbcqtrI%2BpCkBGPimHlMYq2GEHIFyHPjdzQkRIOIqBFx1EWEB3Iow9m9feUtKoWcXIkZ0pcEIPIOguD4lW2O85E6D9uSS1iOgFN6xfavfT6VXGERmb7qKvEs87jRbA4%2BMz7AzCDvuIjDZthgcXZ4lqpEMDy8VnatYgP66ToRzHgfQ6FEMpaw0TRHc%2Fa4CV3pXK%2BzVslWAR9WD9cg6vs0hqvnPr8TC7u5LUBjqkAc4RahVCFVYsXR90EA%2B%2BbouJEPm5zXztxhpFbZKsMpXBGRMWfB07CDSmwDePdfoRgYW5TNl%2F77g8KIi92NGKgScimSj8gncSVmzLzJFWC%2BtntT17kHqjxS6FIskVctQQY1enzxfWtAr%2FWEb2ulE%2BDCy%2BNUC1f2%2FOQctonhh63HFHMi1NOvQaBk4ClXNYJKPmNhUvOOeSfpgS2vIU1mj944%2FJ4Zj%2F&X-Amz-Signature=dca9032242378ca6f2e846d97f840dee976055daaa9d632af7ac018151995001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

