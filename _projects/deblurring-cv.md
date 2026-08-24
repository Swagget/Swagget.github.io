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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVYRBCA%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T102525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDFmLeuWUqZbCTZs1OgkSI34iIuTZuGXinGxeLqWXqLewIgGKO0I0Ewz1gDjjDv0EsCJOKQ2pEiQ7zFdMPgZG%2F5zhEqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEj8c3iw0B%2BLbYcZ8CrcA9%2B2fm3%2FU8K5G%2B8a67u998b8ijXTRFUbE8JEFqY%2F2o5W2mh9chFvELHBERmD3s1PNw5lT0PO%2Fg7oOVahaJGenve4e%2FwjeczcT8F0m%2BPMpfRk4MCXCRN%2BAMHJKq1c8%2F4SiFcy%2FmZh2WAjEr5ZifcEAKUEcu0YQ99e2grbwJ8CpTaLVdH%2F2npq4%2B7319Lf3TERBbT8e%2BRlDsD8HFv%2Fh1h%2F37yhFKRz18YTUAGRm6BfuDA9lUOSdqFI3ZORGFlcPz69J00A1bKV8%2BiqHa6tqDsuybTSRsfbfGeCPlv3jwGycxibHvTMImiGH8nE51YgcF8hlJ2YnYbo9e92YWN8%2B7IMnIYYj%2FntHrhP4Bvmgg9ZaffeUHjOWQ6HEsWVCis%2FzWT6Fj7OZatReVx8hc3kLby7cAh%2BIHbokd1Z9YH%2BWEzZUw7ZoKCmuaFt8ehZOUeJLj3OT9HBSJnAoiPl%2BXwujsjYMqmC6QSQiipPOJYJdL4QYtW9%2BOyjMcL7ZUjKnPw6ygp1G6uwHL0kPsdVUbvKgWUtUGCs0K%2BFocMVBH7PFmPKMWPLQllRfaCbcoUVj2UY%2Bs%2F6lj1qwiNAnlVs%2BHn8tcQ0JYz%2FMPnnQ7wtwH3idxstGwZPYrdyhQCurPtSSy3cMIacsNQGOqUBAWIKH0Z3GgxGfiuQDyz91udr3KwScdiWlNc2QoJ0y0dvlW5%2FpERL0vmycsrfbnoCTkNQfvKVrsj2hte8Jux1vQCvBXoop397nk215bfIIRahMvjo5hhG760sNUB3RqQGx57kS3nXoUjvilAwIkX9XyPwbdHYptBmH44DJwaLFb%2FJoZQmIlbxUmG8Nc2xBgJX2obE3jBT0mn5Zg3wOUHnibxcYO%2FE&X-Amz-Signature=8812088d0b82e359ce27a2e8cdb21eac45b7caefee6fda6ba1ac968104c7795f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

