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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOATGQGO%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T231747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoolAj7uRWja653OKn4rgSxQ7rPEbHpO6CaN7pUZb3MAiBwV2f3ba7T9M0Hi8RQV9LG8brhiu0GwJ3b8EGgGagg%2ByqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq4BN8EVASE27hsPlKtwDOnipvXux7gixTzv2qu1GmQlfo6r9yl6a4x9MuTVs%2FhfIvZbP4FysKN6prbozumrAnlVVr1OFUhGKF0zuY6aqXOx1stnPZ2wD3ZzoMUYO5canVNBUaZMnR98%2BglgtmP9fApyAcsXlhpnwigs21konBIY3qkvYZym1oX6mIKGkXCYDZn7vnsmHBu97TL7wkmn0dq4%2FbJE%2FEMUrEWOH7F%2BixkU2qsWkabaKTmMnRIWR0ePGEcdZ%2FpXlg5rba1Zh3TKyq%2FDBFEJrNEEl3v1GbNraIhiqnDofZO68hWT1dx%2F6EcaIpzA0RJsOGo%2BJSFle%2FxEJVA19y1qpa3Kl9Bjs3gRK9RSsS85GxZqquIzSEFt183nGKPSRSbKSTfMApHGX0zx9cbVhJPUPwBLpNDM8yqwKszO%2Fjy0BmJEN2AHq1NkyscxHP9lVEyTijnWjP1BjkgOawAtw7Ke9HYRZRWbLsOkZuDsALpQnke7PVxZNMFwltaI%2B%2F0rnTUyC7%2FFupqux%2BCz%2F%2BV5qUvU8egYDKMOyWfWiPOBQG4W%2FEReNbYLJ2%2BWxAlEsDWhOcQTWYCEd8PvFZdcL7ONX0%2BeESQekE%2BN0XtP26Pf%2FIkwtTakIK1HLPSObME2pe8k%2BJWH2PZhWGJQwiP7j0wY6pgH1L2nXRAqk3EJA3RKBfVqVbEg6iotjMxF0bqgukUzsDueFQ0Leqp%2Bu17GP250F8cstrQ4N6TC2UTbTc1aOydSKVR%2B3vAM79uFeL%2F7ZZXrk0umYD0p%2B62lnyrkvDsUV4k2ZJMqFlhCXqZcpp8c8aZ7I6AIChNSlrOCaoFDqO6udN%2BRIpsqW5%2FGE83zB2vMik%2FAFIhN2l%2Bm47tgC4Uj%2Bg8Jbc0GorPre&X-Amz-Signature=cbfe5cda90186da00c34c93aa84ea16c177d840390d02a1960da9a37187e0731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

