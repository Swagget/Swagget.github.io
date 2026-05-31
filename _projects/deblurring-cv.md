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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CX2BGF%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T214507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDOv9n3qe0%2FH9nSigbD14e8TlVbB7ZVX74My%2BqQgs0zQAIgU0pElRoxhdNYyKjT5Ez%2FvEslVT%2F5mzfnZj1Y7W2q8xQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGao3jR4z5owWVruuCrcA%2BzgYTzK7YwbBe2hly5aFcR2lq63n3aMZSZNUG0DFPaCUJxloUSu5E3tVwyEcYgNl0fazsIRMemxTsFS6bMz9UcVynUWBVxu5CG5D%2FRgYlO7C3oJbNGxvwFZ7NxR9%2FoS6Zc4eSdKoYuPSkX3qwGEmx4k0Nqmu7Wihohu5xQOGugYcKOa4ylWIKpvOOzUuP7ArVw%2B%2FNzhOlcsax9x%2BVulhoQfxfwyf6ug12weo3NKwgyNAX63DCCfjEzp855HGbP1knMqIhi18d7AcUHTuAp9NvCq%2F%2BoiUK2BWmUKGTY4EJ4yzFIuDYJdHNG1rh00sDKnkBuQKv30qC950hv2OQHflbZlixgraB2mQUbtBpWsEAI1aIQ1WcSaTeK23MV5WLNPj%2BDhdMm%2Bpw0mcGnE46lGH07L1Sr0HJwRb1imIuogM4dIVtgxOJd3XqExtlN4fxBHzNKqTx2q3zOXfokSpOFewX04v%2Bq%2B9OrHqaMfny4A4W4V%2FlSe0JRXi3LucDieOKdVZeDtRX7M17RFv%2FXk3IWMFkknBrv9rqlhQXDwX3zNf7AUhIS9jW53UM8Q8FDmxBO3ofSyQ1treVYIVZj22ttbjW5IQWCjooJdv2lmw8HjPiJdal%2B5yhbbEYccXrYpMOed8tAGOqUB0R623JS9ia77KDwlfZZWNS%2FKFcT9a2MoGVamkZBVdYB1tZUA5YDBXVGz8OHT2GWpd1uRZe1AG%2BLVdSmBMOKDA%2FWHCpnSYXYJ3D5gxTjoiouvqlKKsr5p5qJ6wIX7zwJy3tqPmbNAsaDUtFloktk3t9jhHROVzrpNOjNgPPb5DpdkcBvh8fJcN%2BKN7V9neW0nKv%2BICn881ecQtK0Hv%2BvSZZytDq3R&X-Amz-Signature=ee927047b068197e3b39f8b3357c52d4f077d1987fc6a477f3eb117f31732632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

