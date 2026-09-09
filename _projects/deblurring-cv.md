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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EC5KKES%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T145109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq3eKu%2Bx4zpXlklV7wKmn3hfPye%2B%2F2Fw9fh60xONBa9AIgQkliPF3S7BzhMtO5eSbEse7ChqaD5k8wAte0RGsrCVEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIZ7CYsuPLXa6uVzvyrcA0L%2BpGwW7OFAwAzEnsk%2BZYkcVURhrPGcy4jncxw1pS2PJieDqegBmfeBuK2LR8SM8lSCsM5RVAMpCldhG7J9j7nC3Okal6Em%2BYCKv1gBJphkAKaS%2BF0VAJlz5RP2gujgYIL17FElOil0PyRQ5EX%2FiHslbz0Wg2VOP8UVj0X4wAOi3tThD3b4yGN3uqYquwJ%2FFY3VnEpf%2FyvaN2U71bu%2BvQUF%2Bx6d9B3LfXvO7Xyzajwol7Ez1tCiBJhekHw57ubGmkwV03vQLfuaWDZP1Swy%2BfsXqreBHjAENo3IfUWuSdwO5StpnqUNOcyCcTrySr50SUI7ekpU4%2BChMHRLtqEZdsHqDEuy53gafxe8c%2BQiW5K2R54bmbPnijCSyIomoPE6mBmPYL8FwOTxiUBVBYNfqjlS6njJCVGdc68BJeIDCr%2FmrVSlVwU%2Fxupi0pLjYjWe3w1om53wS74d6Dxp4MZ40RaW2IpTLWt7wSCpqU4BCartztTtvSD5LDmfaPn8XLDG6Zz5zz92zkONx8xtDECQVO3mrzksnQkhdWpQjJaX9%2FvyOqFRVlVNIwylOMk%2FCn9UQwlYu2A0JtVwBwC9RXyjuKTRdCt1S1zSXvH8oKc0BEghYjeX0bPb%2B2h6vzp3MOqthdUGOqUB1JNcNiX4ozMWiZrSunly0xrqclNvE%2BYpGRRcfrbSQLHJMoH2Fr86kTuF6mslnBlbeL1YpN6wjxMJupC%2FnEA%2FqfRnmrZjsJ6D8N%2FuK5goW%2FdGUo25b3tspujJXnaYpvMdsUrqL62gcAsfrLyTV37p1vQK%2Fr5eC7KSfBdd1GsUR7bMwZswGqZyYeNq2y7%2FUsfVa5GUcYN4FrzynMjgJUNY38U3keu7&X-Amz-Signature=2fea078270661ed6065fc8d50463509fca475f9cf0d0b12ea5ca7fc6f84066be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

