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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VMLWHE%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T081926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD0vXyQSv%2BrioF2L9cm8AmFrmmSyHlvGaUsXS1J4GXTiAIgD5OVWVuL3ck1olmwJmpPQ8gFskJ2wJpQ5tg2PHwHVuIq%2FwMIBhAAGgw2Mzc0MjMxODM4MDUiDOrvY308QMOn4FYlMCrcA6GTfTXLMFo%2BnsuihF%2FcGtZKDUIXnemz1pQvqN9zM%2F22QBoP%2FfB45QaOT7Q1s69WPU6PX14%2FpokB5Eq1ybavZ84AZXNVolczlsXMdnPHXp8MnxC7ZIpI0fzHG%2FK9s90o3YPA%2BNIa4ziWUk%2B3g99aIEiy%2Bhg3jGknMoeFoUjIyroSljnHn2CJ4260nK9J3TIZdcPjzJlOHFwmErxlyqv27jLi1oVEOt7lSsP8RSmpvjMykLgKitypKqHLz7ddQjyVakViGJSPxyNDXrRBwtCX0P9dELyhoc7bzyMXQwvM6UEm%2F67JKlM9EPj4RjA7uzvRxIrkhu%2BnSOY9mj3J9NbS3%2BV5xUzLEWnxj6B%2BMwEx1nMhLsqxucBsEcbeEeSWhzZkrHs1L3vX52U3OkBGUH62rjLmoUtssQVYLMQZ8CacLIn12TWNZBcOtAEKSQ4tWoRpGeRHM0nnn7xQ%2B7%2BJ9OQ95j5TZQmLlEXG4%2FnBybdTdbNDFo4bhvEH9SKSPIiMNRpCXgbePkoN0%2B%2BaSt%2B8Ijsdgx0GTZ%2BzdnEQohjvrNFLVpkt7LD5b%2BGlj7C7ODKL69VFc5flcsfKDEJaAFwQp0kyz%2FlUpfx%2BddnippbxRODZAhCjPxUd9DKSI%2BVnzk52MOun9NAGOqUBDdXHQV3W1IDhkyYuzf59ExXeFeMnkeIoGzFYpJQhXCPCgGaLCsTMPxYV4luWw2GDromJb5ElZ9shbZSEKQmuNnM2fkbUbj%2FJof0qJ3qvdYuP8Y8WR86xcPmqHQluMh6FLZrUutfCbq0WoEf6wXWB%2Fxp17c1AJwD4JK2BPhdRRjhAx2Kh0TTHvQ3XS5juO%2BVSI4lJ%2B%2Bj9aTlOHM7Fp2%2BCv8zZatcC&X-Amz-Signature=7df8caba86d096a7aecc4e948be53b9e823a151ae4152fe287fb4e126e732355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

