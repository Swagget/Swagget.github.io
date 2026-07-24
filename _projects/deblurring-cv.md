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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V7ZONFT%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T235200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCqITN2ZJ2oNMM6Sfu4YU7uCDsAteqqYZwtYxuJgaBzAgIhAPLR2uyBEqCRdq7hgDIqRs8LuXLW6qk%2FgxO9ngpJQ%2BjqKv8DCBEQABoMNjM3NDIzMTgzODA1IgzpzEjt8Fcwj81uNKcq3AMOGD%2BCdNLtAuYkbBBdvvb9hb3D5A%2BQ9zARYN4zU4bnyKScs8GStnk7TW8czlp66sXDIf%2FtJiCUlTMvOjQ2vu1NneKnDQfhZmGVHo%2FqdsXMsHDjSuSo9u%2FKEuX%2B%2FEWxyU9O5m6mO5WLOJ6JAWARprVB54PWCVc3q2AAgPzIQ8CoSM1N3fYhtcgtjE%2FIvo0t8yngA8%2Fe8%2BOG%2F%2FwDScA65GTg8nZ%2F3hv%2FwaXhMLJ5mWB7GI9bxm%2F7CjHUNNah4oxOMHclflMAcmSqd6THY5whfWOE%2BNGbkxoyzsWbzYbcg6x1hDfH1diepJPzY2uVDxUfgc35ZMgvs6Zay91C7DQQBlCMvNlsB98zMXOa7wDrULfPo3KPcQXWaSkmWyLRv2ArFv1haVVDOD%2BLcz%2F24uBeNEnoN8BNPZdx3R9NNu5kpq7xBAIarCcqqBSMnvql%2FYUq1FJ4mg%2BJetyrz0ozHUpKVs%2BkBLvtZ%2BTfLlTm1tBcc%2BDqLp%2BlJL2terr7Ol9XqlKv7T31XbEtgefOm1zfLE1O5Fm6DgOPtufzs6m0GWgBtapjCC0hA6PG56aAgwSMJUsWTZkfMN9qfFVQDyitAQUwF%2BlLG%2BvgpCThg%2BSrKny61NPWWC1pK5U4wTznOtAFUjDD6I%2FTBjqkAQ%2F%2Fg%2FMo7CV9dQjWXdMqYszhRohsQK3Pd5g%2FGKsIERUsZ2atD%2Bebr2S7PwzkVe5pUu1rU0X7V22lErmsrzqorBmoOQtwwdnks3m3CNY3gD%2BmlZ%2BO5gTaNgsTJIyfzt%2BuE00tnkZ3mgbdTawU88uVQjh5d5AXVHiuKyTRjVeTYkYfaSgqOkjqXDeguLu2aFBYEcDa7KhT9GENUs2OOlRsvrq5PRYC&X-Amz-Signature=14fce5d03c373f176f5760fe9840e930ac7bac06e5f7a0d003ff1dcd9db7efb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

