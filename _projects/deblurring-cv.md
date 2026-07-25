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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FSG2UI5%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T224102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDY%2FdG8aanzNz6OMs%2F%2BRueQaE4Hlw5AbpAd47wgoxP%2F2wIgdYOfzuUKzU%2FcixKuoRjdIL%2FraWuMGnXTU4q%2F2V9FaQIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGgMC670LB6wBeXqdCrcAzmwrAQdxkZ9yGoHfo5MqCWi15hl5sd51CuTwLciV1KCGcvzhci31pQJuvyANMfMe5OfDjvykuTz6wnJXbYx%2Ff0BurtATAG3AcUhjw1uC9wx0g5Fl3R20nWf19qett2nissjcal03JgkuOID46KcFw%2BmeWTXwl9fgbRGwGB%2B%2F8N92JgWUC3%2FNEI9Un7SQPleP1p51eRdSiDNl9Pha4r%2B3DxVqi6xzM9RSZfHBhPqjoIuvMCxYhHVyIgxmow3XiVQpRFG%2BjP81Ros1Teg4lF1Hmza5mfH93FBmU1LBAb7JiVU5cK35QbTZloTcirIRdVx6rXjq1IASCfREOLixoARTzM6Ju1gBEAoMaTE35I52i%2BBeFbWncRMlVAUkZVVAvDYxTsE8uPsUFF4cA1apWoOH55SHEZwS4W17itpSXJJrzfAsMy%2FBwp1LhK12p8fQeJEsViTZ%2FGVZLRB%2Fl6LYtJN2wbVaOamMqFzbjGX%2FImgJHBHc3PLO8vjOdvpoQb0p7NISIhs2u1ndInj5ctC7XRmzpanPQhDGYDBg%2FI6ORI56xJiaxl4lOwebm5SeY9kxlF%2FVnTm44CN13hzEJfc6Hxd8QJe%2BVXyvBYQD7%2FKZ9IK0sIvpHrD6NJ8hlXBP0wRMIWOlNMGOqUBebeXF4ZtuFp3IKRR%2BU%2FJaZapUaoS9eBn8km%2BBHTjuTt7SZmZBGM5i9nD4YaML2MPuiM7hQSAzJk0blt76Zwtr5f75q0seejaZQqYy8dUIEegTsaZgmfTgUenhkjgxnI23uYqpWeD8z1gHQOjw68Xk3I48fqYYNl4fMe0BgWshBHLVYsbXvZ3Y%2BFSSwpBtvcPyXYop688G6YfPiw%2FyOC44E7n11OR&X-Amz-Signature=40be76f41eae1ae422c49dbb622d5dd299e8600779b165e158c4c1ae188d491b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

