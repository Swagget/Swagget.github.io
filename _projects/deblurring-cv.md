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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HV7C7QP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T172249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIEDO5H0TwBZwW4uF%2BXEJWF5XeMiTmFjwKXMos%2FuiGynOAiBLG5KuAWpbJdbs%2BySi5aEEi1QhHUhx5RRb8j7HFpMfGSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIM32Fj8pKQicJrwiBdKtwDdkzpR2LYgWeR578Qxyg3%2BPkLDi9bQ45Si9qZ%2B5G9xVGDpmm1sT9SdMRnOvHuDD1mcYoMP6C4e2CJFdQRDc45U54y9s4hV9mEGkeuIQO8Qu3RYR%2BAmQ8VMg0c0sDx7vGHM%2BJCuSZJfbnPmtGRLpYwBEYGM8ESzL96E%2BT4MjNDZhAdul%2F%2FQfXw9y%2F7kgK%2BrHHNXhhcCnqY%2F8az5jMjkzJKCKOWwMDDNJCNTcWnMNMnVg%2FR1814%2FWT027bDlDqTztJ0EkydstFfZ5TyQ1DePLEf%2F8OmJMM7yXWp3o2FjmvSVdoYEV5V9zcWxSUZ8NkOW4gtQmCLgiZjWGmdpYRIC7N1UON1yhMR%2FW7RO1McRz4lbZFL5DaOQd2aV6jAl8%2BgbZvkSiWycQEjVTmnawGPRjRM8gQmQKyOtKVRGNOCUc5GBNgLq9o91%2Bx4qThifbA%2BmhAjfihqF7IIVQZoq6PMvmYJINg7eSRs4bSz6%2BcirddPgL%2BFIR88zf4x%2FlG1F3Ld7lOYMYdOwtT18Vmtt6ce5%2F2CPeU7SBzE8Gbdt2I93ZPgACWNQXKpxbmzetDuPxhBaoiGDd5Z3LBdJHJWM0574tRJs9Zxo5pvMgd7%2BpqU47gg4O%2F%2BSmszm4hbcKXl%2FwYw6Mbl0QY6pgELyhUhFERNc3H%2BAS2oOzUGNqzMev2QWRvC4eitIR31vdUCTae061JwDYm%2F8RHEYrFXZFq8QKqgouP7osOyGCMCkpSgg5bgUp9omi4ATRJeMhYsAo1sxUOJ9yZiYaF8NBus34fAWrK0%2FGFsCAiDgspr0jZgNuIQPekRjqKM7Ndc7B4UrkE2Q8ZA9gNSgM7qWpO6q4lLIj8yJY%2FqSiRwQYGh52bafrL%2F&X-Amz-Signature=55739999da2736eecb8b8020d13742d4bd5dec7ae0a61937011ba8140486bbb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

