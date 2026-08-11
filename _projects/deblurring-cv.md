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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWW5YGA%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T174522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVpWNaiFW2N1eI2TpknuCJ3DgAJf5XOBlQvSVbiSnGEAiEA3WptAJ1WtxN2iHrQfHam2LhHKyQNyFTeB9vhhXMylkQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSr9DZEBCGNhQqLcircA2ClXwbh8X837TrhijAh1KqNet3BKVxNTZNq%2F8YXjLgv%2F1lr1fo8ny%2Bsk5AKQqg3V4INiL2z7nHcCNGEvU0AVUhgj6H84OzryyKXSa0DiML0UnUopRcQ%2FKicBziYyEeNilb2qGk30LgzVN62D23%2BNCgV%2BDDp59bxDQbMnONJVPpj%2Fcyromvhzd%2Bl8oLkuqtVCPrEBzmlKH5LyInxbcbG1jUApXRcnU8LzgdOi1ghvSoSc%2F%2FhRhikH4sw6qCSww4HfnYtn3wgqRQmxctqXCNWVJm9tt%2BMEUYFhJfMcgY5t2BQfqWtD%2BJKGo8uWD2IMEqkO4YJUgDoLsYragFMUL2H4iEnUAy9vpf0wQSHJwTglBdHXwszHlmw8ztUfaL63kUNMxEwB7MEg2vXFawbLw9ygFcHCRNqvRI9k8hs6Q27nfd083R52ztwSotBtn7t3q5U%2FNDPfH1H5vQf1EDGevS%2Fy0ECVgkiaspHOkNDTyo4i6AhUEZC3nF9Q4cl9jbzKS7rq73hlr0mLPc3APaKHru2RcvGe8zEItNfx8MWEQpUxYPPu9ppaUr%2FoKbhX3wYumN5CFo7X3qnMpdDlNA%2BQ%2BbCV9H1zxPc9l8yG%2FcZLGXdhUbGO%2FPOC0ndkc7IEY7HMKqI7dMGOqUB%2FuaXClDSoSmp2IJ3My1YL%2BPFXHJyS6zc9NHm3lZd7b4aYgCUzWn5P%2Bixw8c6MfkNX%2Bd47xI00v9PZ4Jliw9GWbr9MbtpJUcjDU4%2FDllxpXIqnCsVD7rDRMxJ6U7T2cLaNC8HWuQZ%2F7DBwUFEP%2FjU%2FyBqVo%2F%2BN70WN0Tow9sqHOfml2DVnz52OjtLs%2Bs7CTpuK7ArUy4RjFhfwFGhovAULyCjJ8gD&X-Amz-Signature=b95d51e9be08477771d812d1da6ac4f4d78846539edf0ed94e53e662454d3a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

