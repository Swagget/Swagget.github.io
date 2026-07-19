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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTOZ2PBG%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T204951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYvXcLM6LYYbhP3xgLpD73TyBOckoj7wSDU3WLl%2B6AsAIhAN%2BGd4ke7WlJq9%2BtWrysl0OjM9ZARlvGYd1guYS7GIUmKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZVP16jfDI%2FNZae0Uq3ANq0sM0CF7QkYgcNBMJZ0OqIev%2FuODN5gRDWtnhW0JlhbzmLLN8o60fhvaIYuFvBPE2ht4DC5Kg8MCBVNlVbaJ2iodDZ4IKDt4PpduIcCG0rKqs7pwgLSAAHj5BYrZLj5u5WJgaJGOCQaf1TemmymhK1PjP7i7ZdR%2Bh2QxilQ87e6IuoYXtTJ5uwqrncyUR2fZGg%2BRjAHHaJ%2BcuYH%2BzGzZRmpSIC%2FuKyDlQ8NVgGD4AuLNM04rwTQTz2aRI09nU3l06I0sjgdgHZjceudanZ%2Fn7xJYEpdlOw53nJiXf8xMBn6pvrkiczbR8KL4ygQbA1uV2YMWtdis2yPyPUuV6DDoN4efYbWROO0i1KCZG%2F%2FUorIfvGKmXqVzN50QZPYUfO9ahj3SfKizs0f66bwlH0%2B25UEIAymN1c1hu7Vtt4zvKawRQKRA4N1KTmRI1%2BinAFgoYkYsTyQCH0F7SIqUwHSffK8KnNUDm7ow%2F1Nd%2FtUoer8l6H7WMojA3Oxdi%2BfesgTemLMs4Olfy0Q1h3Y6yOPn4C%2BK4rNIsX%2B6KmOcnvLYpjp6bT8sAcBMi9LfIt6LvJLF3h2q33GtDA%2Bn5QkLC%2FP14%2FhbJBAprvjMoo12sjMW7DeJY4N0lfxdGUiTN%2BTCyxPTSBjqkAcrn1eRFUqhFWK8fNfYaaWJrs8Jv0ESK8KgeVYkTmX1Bof10ya2yEQisW2XvUcls2J5f6iAntOXEwjzsqBieKjz4WqHZKxfFQfq048QpvE3aPTzL2dkt9twraKfgTYDUzB3VLWwAMHaOI1dEMR92jMr6ndRbe9DqeMTeMz2udAbtkiOypgNP76Fsmqouv6xA3WjosZrpGNE4q7ce59rDfEoxPYis&X-Amz-Signature=33906ad34fb1bc7f690657d8a704d3088e5179347762e24ac6df0fe5bc8d5e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

