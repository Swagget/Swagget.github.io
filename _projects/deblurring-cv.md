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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RD6WWTK%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T213902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeLMdDmFDIw7wpTe2PVW4xrf5YiwNvJMZQh1JfiMG7oQIgGmxAmUC3sM0evoUE5Z2E63dusMxDyqmOTlOugerS5akq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDC0z4eIj5FiWajxMNircA4gDba0ClZUqh7HocmCaFniT0jT4j0as5a8xKucxpYhXgemza%2FuExjWewciPhkUIFh2%2FSWVrx4UkQshsjb7SJiA9YopX3lO9lWTJ%2F0LHF0z2dybpYg67kSOSiyibn7G0mnkW56yBuwQwwsrpZ%2Bd%2BizjE7o268prFmrlZL%2BaZJ6X5lmrjjPRgVlxTbp5SmsTqRH4NOhq5lW%2FAkeGBd7OYNNtWAfH9O4LmJskSD2RzE74t98mf6RF5LSq2icV7ad100NW066e%2BZ1RxtpDN2GE5PCFVv2Xg7ttq8BAg6uFcLzfpP3L0YXZ%2B3AHe1jjP7wJGwwBvh2BIXv7Li5hu0Nc5f18kRWKXI8HewE8VREH4CXpkcFU6Rb5gB25jS3krwD39vStaMYZtc0se5SGZ0D7htCDR6i5Asu2iaxz9ONBpJpC7qq46fLHvCnvDlVLwjwmV39dBHy0y1uSAw1okGwLIK39MWQfZuAOSIjYRhvXmkorIZ4GTPaAzMBKCYrj0uTGJ0OEcMUujPWsWOLh1NChaVccyFRPsQCmjaCS2DhhmB9ygbMhebIyFg8PkpDa8xM3aVZw%2BgyCFBAOPr9sDW1tt5k%2FWrHPOoH%2BK3wSZjNHdubgBmVHvdZukG7xe50ILMLqD6tIGOqUBGDVK4n0x3LjN71aWyOv9SHpxnwCvglevdxtjzIJc6v0HwEDXRDPaJreTvs9GBt3qy25eXYwACJ23wy7CtQ8gwteZ3w8PdEFkOOcFgJJeh9u7YYliJgHkm6LaNY%2BEP8Gh1ORJv%2BZu7RErWUzS8E4q3Ee1ZIwg2u1JqlS7zZGEcqXOgWTpJrRK63JJGq3kc5WsaskzmigCJq4weJxxTC380ZO8Nw4w&X-Amz-Signature=0fac8ae393740e29ebdfac4c7c585926d2bd0e8309db4c3244fb2fb479c46a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

