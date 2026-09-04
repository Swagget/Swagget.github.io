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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAGG7H26%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T232854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIBQ5PAAmaqRmHaBQxPoITI8B3d78msAJ3xleL4MVHOlpAiAJLPjN%2F5uYX57vJlA7cq1Smke%2B%2Fx0QZjH53wEkT2uLDiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7TE%2FiAc3xN1jfWwKtwDiDBlSw0T8lipZ9IlyV8sHOR1tQRu5zwe7zHzGeWOSe417QL3p%2FJxYc9SPYC2pXlCtYgXG2zrOFOgLo9vp0r%2Bcip1FTaDcN0qtZA%2BQNbxTaeMLpS4bMVw7FyDezx2%2BBtnSmIk7fxx398YiPg1CoO14fz6MP1cCb%2BMMLDjtVkDoO0Fywmw9sqqx2xQV6lN5Lr9mbbqgSiBxtDgnelwgCEmPdJ5VzuXOpNUaEZWaprAu3BHrxJd1Br7p8DSK5OzuZFVIpIuuhYthui548iJc9K1RmWnedwGgpmF8gYrztVq%2FnO%2FBctkkVe5sRUz7UDUV1KKVCloqAotqSCfo40sWtJaiEX4KqdkrvGzJkNB1v2mIhrZypUFM9xOPUb5HknlA8Kf7J%2BruNydu1Y6jzL4OtPqKkLss0df7RAmzn6hQpJeiBR5Ztu9o4%2BohjDzCZ05nlWU849uvwSADYnnis1WmZc5%2Bhi1WZhAzSbY%2FNE3i2mpfDTpBZ52NAFuXBW7UNU5p2yngM5M9%2FRMxDRGYRcQesztYQE6DcBAU49zEWU6z%2F3h6EgnZlG%2Fyg8tM%2F5sANt1TDAvBcMdCBCyjnNFgxLBIjk%2BrAPZ8L32XMvwckxYjH2IdP0Gp0MmltF0dAqxso0w4IXt1AY6pgH7KgBPsD35bohqOJgl1vQe0UtmdOrgsntuU%2BB5sXPXGtHDXMoGAnEBFE9HUv8Dti139yQsTmkA7lUmcKIDC9bQrRSXUqFVvnAselXhfoOoPDnjhBklMi6kbwu1eTLCXxTsZ2cu%2BFn4YhDEguJdbYaMD8exltSeaeoXexdVOMKeccLiaU6iOowoSP%2FaBcUxwk7Ly%2BmRLJQVE1hnO%2FCb0os8UGQZq6xO&X-Amz-Signature=bf0ad0f87e60fa7d3004ee60ab3efa01887b25823828286039d52d9d6b418c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

