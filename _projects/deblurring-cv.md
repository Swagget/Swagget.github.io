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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQSG4Q55%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK1seOUfMmrh4eyait3dcfpjgoMJ9U7X0S0amkMjOtxAiEA626HlCzFyvql4%2F9jsu5yveKdO7Tj80HgQyBmdHmmRiEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ9w2rdK601AezdWCrcA2DshhdXQAJHNwNhZPZjD4tFCMVUh077UqvoiVh0ocXmXevocaq46Al3VNqkxPqgUe%2F7r8VSOOSnL%2Bvo%2BtuHgIy33U6GxGaPS0DprbmywerCNTAT5YbGin6rkGMEINEo6WbRDUCN7JZK3nRZjjz0lhKQGfi6aBFfl%2BW8gIFw3bGPSp9j7eMqnLIeiw4su8WZVl%2FsnwQbtf26JmyewEjy0124GxnPFPi1ALswPZ0CS7yro07OkdhcKpiPQNI0ZrGs%2FcyCvElfC22qXj9jmKvVpDQKtCG3yc7buRYB0YADGG%2BVDBOgKHV4%2BMR28yei0UXM1mSh5mpK%2FxzAx0%2Bw6UjAAQGIS6%2F9Ykn3tfIg%2F0HmgjX7lxMgagsLMTpV40j7bdi9fcs8zAeOJHvb%2FiEurUqEp3t3ovcqtSt%2BBaiJzWvzlbElvg%2B7riOXG3vZvb90bl5M0hKvOPgtkB7xp3alqe4vfeByvYNF%2BS7niEEuOKiGSmEFbIg%2FBHFeA76O4XOONd1eNMvnmH6h6L4rfUhmbYjYQwXnYcF7UPOpV6ag1XSTTRuhyPNP%2B2fLekxhM3UNHD%2BDLXRlCpnL5FPPnywJtbE%2FLAYWKd9JFNxchKLw7Hl%2BgnMnDCtTjYtmVM%2BFlRABMKOqrNMGOqUB89RFPgdZvR2BZRpi%2FVt1qEW9UDNhE7z9PQo%2Bnllln1MaA7zNSLxFN9CFMMkl%2FudKxZtYTjgkXkIy2w34AwuWdhio2lsSvb0jIJW8F0C7uzNCs4v6hJI9n9q7A4y%2B6ng54m1HmfVMSj7CmZrt29BFSRTJcKu%2BknMjSPPY5ashIuLSa82zraPf%2B2V1YhFfwcSCkRp5H3gjeAvsaPgBF5KPVBFoh8bd&X-Amz-Signature=ec5709a0a445a545663e1fe511d6298533cddfeea248a39b64af8edafa219005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

