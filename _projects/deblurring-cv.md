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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMEJZQRV%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T184143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD74YR5oRuglc2tuhDyEFnIlKKTggvq%2BfBvhe7YbapB9gIhAP%2BdyQ4e%2F%2F5P62FrYg8hvxsr4hA6nrhYs%2FbsSQUKYNTnKv8DCHwQABoMNjM3NDIzMTgzODA1Igz2FGdanVFS8fAmKkwq3AOGNNnSt9Y9TiUEuBmwe9o3jDfJLKN2%2B%2FNW7EFvzbIPllmQEZ0h00PWlaPWPmqVfp5dgYleGUC2ZBB%2Bf%2BqRpvCW66PAW6OQvn8%2Fj%2FojGqg7qxpy99CjETZCxwJzf2FzWOIc7Jgje%2FHSulOnHFAOYaDNobiFoJb1RI2PJwhJrd%2F34JSjYmrrOpbLK%2F5hsU%2FSrDI0UlM3YgmRg7tOi8jN%2BmF2EYiUWx1QKorNJGL4OhNru6Bw5ghoTHm8mnuQEVamz%2BqXp4NuV1t55Zk541Z105FFU62Cfhui9KVNtWZlZpA1dhsRS5ayuYPujbNHDDxqgpVzf%2BpCgwlTf0XFOw3YmxvZpeV2K03g7SEWaniCR2OvjsV%2B2ceNB1PKcMi3tr7t4m09bMsO1u3UjYpxU9snsLb6XO6DlSvvPLSCAWuqEWZBndlhZ0tVW7ohVkOzgtc4kx0n4XjPChD81Cj5PfZEgr6d6EVbRSG47FLIjaTugTMmAjSmXOr9Hd9Ub1DWaJZrvWyX7sd29WY%2FiAgKsijA7zxI4JTk2PyclaB7von1LrPzqn9pVhFk1B4LsB2lPqR3QT0FcvO29%2F%2F7fCWXPYTsR5GHEI27gUVAXlUVWWZojxrkJTdMiqaxbiAtNzNJIzCxj%2B%2FSBjqkATyqydfRw7JtbN%2BW1VCX8qF9WjL%2B9L0989rHP5gaNk6nFWkrhY%2BUyr9m9c7L0ikEDZg9DeJWH21ENpfduXc%2F4NrW1%2BN31Txup1kUYntt0Ec7qAO%2BbeqiYL3clBQEt35QdU14c%2BktxnWHIsjlrC1xgtbzC3dK8Em7viQmoV0wCWftvm7p2VtygpwxI1%2FiwCcngL%2BCMMdskxmI7Xe2NXEemEkhQpzr&X-Amz-Signature=e39d11d02195d2479ce04a7cdd2c392fde72e8e734ca6675319b5435a783833a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

