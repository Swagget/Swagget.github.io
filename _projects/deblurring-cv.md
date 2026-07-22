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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHIIK6MW%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T175908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCb%2FJYpIYMasmVpzIGiZQHVIKdbGqaWeq5HYdhu7ngMVgIhAM8dHE5cVNGrCWFr8tZ01t8j2Q8YVwVZUcwtEn2MBRv8KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6PQsA2IUVm7e4HeQq3APye%2BC1M4JORhJV1iGoEhJ45TnkzHRIs1%2Fl5TpGBjv5yk8pYC%2FlJKglMnZ%2B9%2F491WI22zTN2G2NZHZkvCYW28uOY5szeG1VNGzmsD1dN9RIAA55okr0tFTEATjm0Db9PqsKx%2FZ%2BxeRykM6SH%2Bs9F%2Fla0tJTyH5UO%2FqmfIk20VuLP0LvAYvtUa8vy9Ld92t%2BZk7tB81ibgPw4G%2F7YwBXEs4%2B5lKNIIXBLk9xejiXiD8vQyVO%2F9f%2BJx7byYNKag0%2BjqVmDIWKB200fNC4GGeCQ1yZe0F%2BxBgnp6n1Q4F8W%2FCMyhw3MGW0BTCcfj2iIuJOvjSDZVCpHpbp1rEiIdMFh5X7ikSqK2tSETdISeKuGDTQjC0SX1sjf2iB0MUETWyx%2BMureXzcmeTGBklCse2rjFFb4oRE6fVwnsWn0vj0%2BewBHwvZ85qd4HyTp0IWBUV4RuocztbzTIC0bGqTJ4aWVRu72N%2F8s0tp5cdrlLgFLPNd2MR5f4IwljqjIiMJg%2FYLVRV3Y4Qbfb1iEAswzSvsDtWnXbiYgSoROXit0I9CY%2FHXcxuhpexXoCm3VdfycCWmczLXRO5fFGNIfBRLSiHPBS%2F9GYhIpX71%2FPZUUosKB0fLmnvoalFvrDAsQDCuITCv7YPTBjqkARCvTBvUg4g0R%2BX7OHVDBoplHv0CLD7NHeg%2FXS46ZqmJFlqskjL4wIWVleenj%2BUh3lcr3MH8S0QPpHIqY7MoudNqPs%2F4LMKCZ6nOf0lTsgo7brXz68fMaUhF4XYY%2F2AvOMn2mDGQwSXDXqbddbJmmvVvuUcwpUV7TfQJFpMFMDorxb55b3GuYbW9np9GBo7ySqWMPWCZCX702HylnXgOqP8lxnQa&X-Amz-Signature=daec73ad1e46e41aa2daa142f10c860e05332b6db47575e47a2635a1c2bf7c0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

