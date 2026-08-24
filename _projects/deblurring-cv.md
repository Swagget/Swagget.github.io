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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7CIBKC%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T182043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCbMzUd%2FZb5246eVb9SCoz0PPlHJxa1n9JUmoonOXKwLQIhAP9yB3PTr%2Bi3qofwojJoLyLWZxBrEiT5Mg5u1Es%2B5BmOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ%2B5rvx1y7%2B8v2ikUq3AMWb5NF7phRx0ZZ0SkbLO3lbaL1olx5XK%2FQLgk3wNGEqhndmsHgfMbfRAdJ52QxbQ41ZRIqpudmXB2Mt0K5NCrWIVjBLi6kEYhUyc%2BDQxEoKyypVLJQLj73YM9TYkewSFkw3M%2FYjiHLzlCNpFvb9E%2B6uyuvPJ4Uk4%2B6Fxsez81kovFCy1UTzLzOP7gK0lejyixrFfMSExgR0AbhRrJYWxnyO4GV3IBKjVP3S%2FOOipqJPs3YQWappDiO5x%2FuBV7uERLBr10OoBDrHXt1AsL0DBqCGU3YuIXW7UJZRCONRnhC6HAR0B7Re3%2BOBLc7izM8zi24%2F5dQONdcB%2F6sFPKNjwtrpASJsAa40o9%2BJw8XGn%2FoCSnF942YA5fdE3lQ%2FYQ3ZXPBd2VL58PoSRh%2B5M0OBs3c1toxj27XiogF09Er%2BGR12K9UfhO4UPNgTF5mNNvXEML4QIfFobf4b193xb7lw%2FR%2FG%2Fe5jwcLoV7AF7aOS2BPNbQxkk0zKYtxv64ghAvi%2FIZV%2BQMDjOxqB8G2QX%2FEEqR4QXluOCXGDsJf4FVXbNkXDwV4VDtrZq7VJuONOEgvW3w0j3xmwwzrAuT06qqatGv9p4R%2BOAOAKZ1kps4QPteuHafzl%2BXkUlZ%2FybygwDDH%2FbHUBjqkAXJpwj5rmJOk3cvZpdwZZMk9WjOia1VDtasoKviH1DhaQoCujyDOUVcZ3PrWE4B9GZjIVZaxjqBD7i8b4dicUSirl3evhjhXlskEvrjyrh0RsFFIlP0%2Fe3mfC3BHDRAX%2FjCeOmzFRpuTu0heJEb2nH40PuckUGLx8hc5EY4Hnd2hnJMZsrk%2BzjjTUALn5sqPpg9beiZGZ7xdlR9Xrv3wUkjQzcIh&X-Amz-Signature=e856131246d928ec6a8b63ddf2f109a632e2853adfe8538788d23f420e7c3d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

