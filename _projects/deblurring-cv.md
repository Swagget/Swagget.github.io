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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUX6CKE%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T062226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAlUEIe1RmoH4nUFRCGDi0ohl5etqj5XKxJq1yan%2FnpAiBAvhUvoRpybhpByhJeIcKSUVy4LhULfrSrFR%2Fsu6PrUCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJO8csuxeOET94fcqKtwDnZO1szOf5shA2Atq%2Bw1hytTYreoFaNhgI7jXDKfJXZW4xvSpUnN4%2FoABSDEuJV6oWcJtF9Dmmjt9VEH1d7J3xVKhwlgL7149QycRjpevQYWuQlcDoHbBdpUvmLLgM7Jqw9shHfoSh09KLiNKLd299jJ%2BEAU1S%2BG1mZl%2Bzxr6xpAzenR6wXCGmAdfjBQAxnyJ%2Fwi2DugRZsCP19CKkaes5SATAX8lRKk6XC%2FFacm3ItKtWbb5HPKKPrryhN2sloBCzpf78tPXJzVBnKbv2ss8HhZEpJxiwvV4mIrs5p1ME%2Fk9VdBlNeVl1Kgu%2FPI1BNyV6cq210euKywQm1cy5IPWQ0PsueQv0VHXrwychn61tkrHWphWR4W2nZdBEIY2J8YFZj9xjHnURp%2FbAr5xZeXmrctl%2FjOytTS5Hy5%2BBZqo1Le1Qk1tR7XsqBoH3D9f%2FCx5t2n3PQKFKym7sSgFrGXixGbFsHZJVGjrYKyk7D2914ettPdzBxau3ySbIHxfcxJ3M96OxNwp91eCrLRO92dI68vBYl8TNxk0Qt%2B59LuQO3roSZCCCLQ7jWgY%2B5AI2bhyvn3fiBsjWu%2FoGfyjy1xWvhqW0Gcr4ACLPpm90vaxf5Gt%2FXcEqZ%2BcKlm5IpMw06ya1AY6pgEWW7jU5%2FA9h23XrdCILsQ8DBg0yrJZUCgkjPhvtJfkiMMO8a0xjbsoTYBSVQ9D0nykqCyFtPAQ%2FHkdb5XZZWBqOwHjbE8jF8xND95WZqTJiMe2nDgefcnF2Ivs5pE1WfY%2FSXGG2fBvIS6A3PkrcjJbosTzmSmGV0ydSjA%2BETgvQC6xQy7mUu2xeN5ZRqynJA0l7ce8%2B%2Bfpm1Bw3zVt9%2Bv%2BU%2Fv5jgWh&X-Amz-Signature=96d6d24375684240cfaa20b8af3e2e5d00d5e2f937c6cd05ff028009cf19e789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

