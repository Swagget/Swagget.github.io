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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DTLJLYO%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T161951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIGaueDJpO0%2FFafROwwUkLujfD%2FeoPg12XGaWXhilU9qDAiEAzrGCZlqdWogVZ3KnlLPQIl4l4nbm%2BEEjYnAads49rfoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDF9hU6cBdDniolBLsircA6Jsi7QoM7SzZjUOHL8W5AiE3N2xGHhJ%2BS7Eeq4nepC0KsKn2BrE6FxdyCWhJqcle0EI5S%2F4U5bEOgzGQfyBqljrAAXhgdW67ZaHORZs13v4DxyahrwMGagE6Ykhl8SJcBJ6fgUuWXapSEs5GKYCOa2lq1eChKGWMGtkeHhxTnGxzD0tV1ZZldKBsf%2FchZfyhczQ7YIkfE5FGa6mN6SK7zrlfJBkH4uoMJSwXfLM4cqEd%2BTKgJfI%2Bx%2FrJfwbriqwt4VlvPz4XJfqGNws3YI4TdXZRNcUvJEkBsK7aI3U9w4CQAGqiUmCeO3fgaQeppjD1L1t49Bf6xp5oZQTAN12LOEVKqECsl7pz3EDCOC7xKlna2%2F4WDG6OgsnWiqV4Y049hr2msqavXox2gkyZO6oUGDh%2BC2aZwRpsQHwow7n8ETzFeNnxV1%2FOuESxDke08MDHsBoUfZZ3gY46wH33zqS41vgxOBwv5Z4QPLLANihH6S01zf1MU9eQ9lOsQVsM5Yd2COrSSZbxJ2o2Bi253V8hP1KI71p%2BfHWri0gKo1nib3VmzVIwYBwm68YcyeeK3WXeywgPZ1Yso01g0aBNkTECJ8j8omo7KhpPAV%2FP%2BGWWTYswsTSIelF9IyZuZRoMNfg8NQGOqUBZ64rOqrFYUM75aq%2FjlxtUOgd9pPX42BvITTm7DU4YodOJxsXX89nW3rlA5KWhjE%2BGSlYcGCpZXKOvKA9kEC4CG44iVJDdh2Iqc4ITCIY20xisUDa%2BxechsA1Mxzk43DId2s8UwR5qeb4x4T2CqMoF2t0%2FTYOZHbeTByTc265lcI59kqORp7Kl%2FdJtP4g02uPrqcMsIiz4YJpldFj2z9xXP%2BXcstx&X-Amz-Signature=0d2e64470f6d64c3249c31b9e603ad472ff53b44fcb8c5f716123f73e3b534bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

