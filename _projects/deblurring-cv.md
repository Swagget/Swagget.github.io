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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGKAU52%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T232826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD6TpztZw%2BwpczA1pRIqM2Qd2I0%2Bu5pgA75HKEj1%2BtFnQIhAL7Rptm%2BnEpMu3Icgij9ZLdU0pxd99%2BLsiBa4bps2lINKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxvproYPRpGok2C6Aq3ANZHxuANAbxPhGZyIsFbNMGH79vLJ1VEvf4shLuB%2F2NZ6BSpWnqlEYRB2cKXrg%2FJuWIw7DIFPHbXYwvw%2BueGhSiTYwpO6N2UXZVgfIh2VMlu4dS2jUsu%2BUyNdAGFPme85JZ1JX%2BpHlUHf0tSoXMcmQTyIt51H5WjkzICFPVdwYKK%2BW6LW0S4EFLG8TYAb8qfKL5jQE0r35wyULR0wN4Z2LpwzKPt3Pm5KUOPpN5kGaNSXPMxPNEib2GCg5tguo2MXXakIOrROep%2BjBYEqhKhIYFuNthGhMr2C%2BmirXOqjsz6FfbH1t4v2y7XWEqOweMzvwsznV6sci2IO2s2CNDCuLZ6uLlLjoqdWjpKIUldg2H%2BeJ8t4AdgcSfjDvdv6vmIuQOlSagQ5215dm2%2F9Hmx6coEtSmPbDmB7oPJEi0%2BQ%2FVmq0VgHXSO1J3cr%2BOChPCDhVDw9vZ4%2B4Rc4aIgpm5VeGm5anUWmc9LWtxVNK%2BQhreSY%2FMKJHxc18xWJSeCzjaQwszT3QhBzTUF0PdXOJOwEwdfp%2FXepZZ6FRaVT9AFbgF%2BNmS%2B2LjCoq3bh5c0HuTAXsXq9v2YV8YIfapWMgl%2B1QNPS8ewI%2Bc8ItJskn0ML%2Fwe7Ceijswruh55XLHpTDf3vjTBjqkAQoWKFaZSte8tRIOfUVvuesLtrBScvEpmJZm%2BSj0YDkgF0nJec1gX5w5aaDip3at78lTjpj%2BKm64Wf770K7Ih9%2B6ohRgx1cGlaaiumtUcHEBKX5LlgjvIyQvGpTIXH%2FmzddIA2nFBGQNf1hCAablANOPD%2BzUrMC6G2ztJUN24X9eAhLZpvTLSjdO4N83NqskVMny65CFAjOrnWGmkhuFUD31jOMw&X-Amz-Signature=9a2fbe06e7b286a16e3c4c3fa5913f8f8a78051a7b456f619dd566cc44babcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

