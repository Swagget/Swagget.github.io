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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQJW2X4%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T121117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc01udf2%2FaV8FOcq4A3bAiDW7%2BZN5yem%2FHO5R9OXy7lAiBgdu3BI%2FrX%2FyT1CuLoK89dIgRX%2FYreE9QkNd1DH0ipUCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwXSEtwceBPcVUxktKtwDotzVG3Um6QfBSHEYi22ViEMeBciBHHm3fdDCKG%2FrbF%2BB%2B0IGCK9Vb8o3ZbFzax45neKHa2s72KoBmjkymM7b7vDFchN7c%2BXKM7VAiD01kgip0v4nTKliymi11y8Cdf5UvGX0n6KeabyjU3JpNtE3lQDh5Q4qeGR4sZQ8f0PJmnTHXvcWbGeChOylb%2BYNptutKou6R64PJUMhj4eC4bkEBU7tUIGHdChYreOaY05dehhuR3kaC4SOTCjLeTz%2Fl3IkOhUGO%2BQHuB8SlXm8ObSsLlEKuAPiW7lNVhF0DfLGho9WM0UnKYX%2F4IpbkXKa9%2FLO6amwM4ftcRhi63BjB9Kl49RYe3p%2BJKX%2FG8UKCBf3og0gOh3UMZXEJN%2BROlpYuHzcdkuUdDJF6ncoKn8QzZqDuKbwTfQPJZ5w2OLaQ7ZiXULOlrinDBVFvbmY7GHRNJAOw1hJPqcrjjSexLdmvh%2BulYvdIG7ybXfQCNUtXuj%2BpaZpHeU3RKLp6k2QciQatUIIBOfTZZNQKuIuE9%2FZARnkk9KOkTKGWMPxNtTeyYA1bVcYtanwee5fC5JjSO0epuRLenF0k%2F0TAolGVzrwFNzDwX35o4ewiHG9WC7Yjjd2V6jmcDZFX7NwbWcrS1Uw4cC40gY6pgGo7RksyaN2ngUY0X9A75HmQScnWLGKXzk487QRIsn0zG3cR1Aprs8mtA3wwNxcbohkYjTDqajnx7URpgNelXxMqDbbHP3SEZXcSqVeEpoUcXoUIx%2BmicYprUGF4NKyXLq8kKGxwVFEj9IT0LDJ4Gx7MAdaWYiu%2F2dtSLz3D%2BoNpFflhNX08xWhvf%2FhqVA%2FZPdR995kYp9A2kcb477EAh3O9Z8XZQca&X-Amz-Signature=d6745e4d8bdd92fcf89d0bbf26eebbcba19956aad0e99c15553a0d6040cf7eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

