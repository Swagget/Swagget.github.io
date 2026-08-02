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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ3OAUET%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T224227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBLwnuF3%2BSKJxSiJU1KKWpNxQPZrS0ugngKMaLg1cdJLAiEAgoMSRnNRsLCzhxqqukjul8IBhfVrOM2DH%2FQDPKVZ%2FT4qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC3BKyUjimWuq%2F%2BMircAyJ0AbfCI7UP1ngmoOaabUEha2Jhz1ACNUDKgAQ9JG0W%2FLyjzkqO%2Bd6mX4zAYGYNlmVJ31VVEZWVLfMfvCVjTBEYpkzE3qe7qQpYY4WnCvxbWYKaCJEsvDJ8lffIuMH9AcCar7StjmgEZ95U6dsqYlV4%2BFu0hx%2BY%2F8e1m%2FJ%2BgiI2pU4oDCM7YIYQHRcqgoTJC25e9ocT9lAzCE3g4HmmrvJrM%2BuLCJxv1q3xvQYHNKSfJJPMDlwY%2BOG%2FNIoRWNnHlz65YHeqi58OlHrV%2Fx3%2BAxIT6QmhMiDjeU5iwca%2B25QIyJrcEm68%2BqB7xQWJtTtNPduFIQqObYYYTyvkOryP2SmWPOzaJv%2FjZXwDs58mXkSgfe9TqLas3VtWmmxwUhoR5NkoPfKiyG3%2FkNPGWAxQ3L3Rg4eH0jIpIIeedpuIgSF2EG%2BFigYXl824AZBdvOWGe9ktw38Wh5wz1RDtOrjJIQanrUglWWLxjF%2FtxgvLznQY9YMRD204wuDA1AFbkO7%2Bc%2FtJRBxnD6X5O%2FVTDH2gdnJoTQajGtx3z3v%2BzY16jgNFCcVX%2F1fXai1xnyVIylXxRqLEnLmoJ9gMYSZDox4D52oI7iSso4f3xFYapgLuscKgzpyOCIDkTJLImiMSMPGBv9MGOqUBS8R2nGcKWr6As5cFnEl8y8wEV0MgJAPpnHHoLUYMANqToY%2FpSs6vO0G9CtahGlh3UG%2FmxzlO%2F4HcokpPZOA%2F2ZGw2acNqbW9p3jtACrHNl8YMoHkYuXK%2B2uNGWlrgT85tP9doyKun8OgTfQXF3Au6y%2Bj3uAJOufTCZuL1BCCySThVer7W0L5jkKy5deefuHziv14YB2KdgX6eVpL1qKvk6LpCw7o&X-Amz-Signature=cd3cc0cc28fd84e8b3853e24bdd3e4fbd81ea24ec69092d3d184b39dff896dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

