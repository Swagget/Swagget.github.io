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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTE3XLG%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvnJMeNL68zAvItl0Xty1Lpa8ige%2BjGnHavp1Z3PNg0AiALM5ZNn0HuAIS2I1C7MWKAh%2FMUfXEDEkH8A2Nld1LKxiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BYaljwJxUVAnCEZtKtwDiJMU3FuDwKDOIYe%2F2kBhqEU8UNxRPqtEhoaFghQiPOajfhz8PPIRw6tlVS1O%2FqxWeA3hioA%2FU5xZDREMMKxkAvG1Y%2FRcmPOBGlgiEy%2FGJRNvxqIPPL9ksSCSqromn%2BG6PdttfIqR5W39w1nqpetN1z9AGjBVY5Lkx5ycAYKoNZnwN9QjaaKS89z%2F8ea%2Ff0hIhde%2FbUBF7q78fi%2B6aPqI4Grb4YelGowdrLL51EfqkrahKu95C5x%2F2dEyQZV32rIYLQrBNHc81XcdChB%2BDEp58dLEl8X4AbLmfWvH71iffzktX4NyEMIimcgyA%2BAO1bJLA7DxVkAXTak1t3eJNncj8V0ylKqXwTepCRaOQnT4Sxb21pc6gaHUBqyrBTuPvJBp0lsjBGzfWhIFqZCd4FQX9y2Kjfr804BYxhiJcQkDiUPzu9ProZ7sMyK%2FrBvjYojHix54o4Dcar3Xh5reRU4WKYWvqBO2eww084Pwg%2BMENViwVS%2F5usqAsrvLUZfvZu7jo06HXx%2FxNzWdMov8Z5ifqxKTtmGrwuvFvOj0JQJ80jxLnDlXl7%2BkZQgyezShNcpfI%2F1yuX799TigNYL0uoYPjpb4ubuGjBOKGcbrmQ7hOuYc8iVVi5yLLTi0jPcwkLbn0wY6pgEoE%2FD77d1%2Frpj3H%2F4fBDQiKuiq%2BFbIAviJcYV5EMB7%2FEu8ovKK7zvPykhEA0%2BVh%2Bk%2BWfUxWFDNASD9fI5RE4%2F5bYFybIo7estyl2C92WHPy3T9BMeO6PDxuwdm5lFdgYGLWX3sDZ4FpaEHUKYwf%2F410%2BESizXK3pnNtzV4Qu9EWcgEQGZadoM5%2BtwHAQNS3wSkye6KellqzyGuRBP5AwDNJJfO4GBU&X-Amz-Signature=3b6d658c72f3ede7f164c29e5dc32b974686176b85ea0b444156c10ba3512857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

