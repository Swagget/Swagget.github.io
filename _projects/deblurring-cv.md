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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WOJSFP%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T072550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrXV7beozO1eqUl%2FlFUo8BBCEI7FiWuMaACSs%2BcF1HVAiBqTLL2sKxvl4kpla4VBbMav0kCt3SsIbLq7lif5gz6CCqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4RpvfL9hyKhOVj7bKtwDkXfv4arZBVfd6JSrLDURA3qkWWMRkLKwUsv6612GdpArgGXsIq9rC5MyrDdG3%2FpvPlmTaARPaObUVmJ54L9tEbbSN4sjIWLcsF7hdNaVxcqG2mQ0fU3MkqyjNwK%2B62iEYlftJJtc%2BT35YrgtkAgt5MwRJfF03Ffjz%2FdE25xNS2m6%2BrfCe6flia0HN7T2fGgHjO7jfUCEWuSOEm8%2F%2FQ%2BymgAQL1HDFiy8J2HKsZ%2Fiixfk8C0WtH96btBPEDjl%2FGiPONA8sQ6B%2B9iNEMVsiN51%2BXfv6hf50FlZqyGCvPTJ7pHvGRFQxSWeZ%2FuOwPxBC3N529Vdkl8PqSduT6nza7vpza%2FuhYT65yrXq4iPFDkWPt%2BuIF3PnI4Qdy9Qc%2FpM4Lata%2Bshq2zYy9O3MIL7xRPQElwgGrw65u0mV51R92ssd95E823TdtvvhHUoKyv6fKko2hFKIc3IaXZRr5zEriaOjE7jZg06gtqNrC5oYFoLJXvlQN4eSLhIjARahkiMy9ew3ubDI7KUzXF8BMgr6kCPNBoqjgwGtpvv6oQ8a%2B4kCw%2FNgT%2BHkbc%2F7%2BXDxGIjvBYMu2ae%2BgN%2BQFxMT9mEQCDtVYYBlgYV6gD2CQsk6blU8uk855rUYkdacRFo%2BEcw%2Baf80gY6pgGHnSuRwGpzR7mcLBm8SoCx%2BoSBwVxrgitPkcbnKnVIJLbNFjz%2Fk4yDaPKjvs81eWS%2BeV5iG45t5fHJf2U%2BT64fChMgub6Jk%2F5YXjxCFAP7RQqS2asecvc8P9S0%2BeLBlpDJX8cCKS8Rrr%2FxSRKNv52cN4yBeKSlV5Chfr28OUELjwF0xdHiyB1fA3y97ubJThIk4FlWIVLE7LxnPiz0VKngOub9DQ6l&X-Amz-Signature=5f65ffa3340803890676f219e4dd2329b4720727e08c669f86b786c6d92298d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

