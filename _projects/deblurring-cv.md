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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3DQRJJQ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T175718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyNmybEyHAmrgiz%2FE9NTG1SXt49f9iw0VRGuAKWuzSngIhAPe%2Bu%2BVYEILvteFzrkBHDH50c%2Bck%2BlpgSyQZJf0wDyOcKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu7hJ0tTEu31yoFyYq3AOgsm3TA%2FpZCqKoICz0lkCAV706HMimtWLPjHSEc7SeiCzGNIHMviRomUvKA1%2B3xvscsvWTh7xOBqbdb%2BP6hFctaW2anHUqzIxIlebvNWbKz1sJ9wvTJxAQcN9vEXWKYU36X1VSHAUdgyDxW%2FGX7WTaXd5qBHxoNAzi2lsiC4VNA1hUuBqqcfwHa%2B5CL3bLSZFmAsUcml6%2BaQ4f%2Bhnv4mqNl0ShMQmr0BoxXV2a8XahM5YIYcDD708iIXiUc9tUha9j908ZXjn%2FIXVZP51N8CSCgoOnu7x2HF01lEblrVviImRQIb1umMqVn5fX%2BSbYpCa6hYVIemwSrA50ML7xn8x8SX981Vfg%2B%2B2qRIEqIDaCPohFX4lUMndoCuDEHJBxhLqKULlCXaLFIaSZqdUa9%2FiDdWnx0XJnxJtvfl9bNt%2By6oIgIw67CEaSY8lUx%2B%2Bm3lmzyHGM2g63gmny4bl%2BCKt75vIoSjFpjZkoX%2BKDhaDPiJ8ttUmfKn15rEvvpcVdaU%2FWwj%2BiR9XwGeOuVzTeF3Fe6wX16lV4nvYWLcT34J3H7cvsdER%2Beh4lxqa2oA9qpO6GA7GzRYrpqz9PtihAQ7iqguOYiwWs2dFnn4oq7M9xU6yoeG1nI6o3%2B0kGwDDhmoXSBjqkAYVCICPNlcghn26gD5Ou8myzM8gwBtwwL%2BQFyf5obNls2P%2B8cjcwAZjSzcDRYF6sfZitUPkh298A1I8eXBl5WAJIVgeos50KiQOrPR%2BkQ9b0HwjXVUM2I1K2gvPtyZ33OvLYPgJA3kTQbHChbejCvpWPsa5kSUoN8cgkSi7JctPOmvNemTPBu96eExZhiJ3il4JZ%2FqVfajYJeGudY9gzsCXFTJ18&X-Amz-Signature=7d10add4f05cd7d0392639fa51807339094fd4a782f74c63f9ae65d607451822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

