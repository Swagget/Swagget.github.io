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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKWKUZT%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaWG6uBEEmAcQ%2BUqAGenmOgsR%2FelSLwvalUX4CertpVAiBqLZgHearuiy%2BolKobfNckZU7oZdffXo6ZHyfSpDU6GCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD8mA3zyM3zW0gqE6KtwD48gennsQdmcPAiTv3WHK67Xc5e8%2BYrhXU%2BNiymkHNziPekfX0Q99zOaohbPaaOQ447ZHyEVW7Yl2upOX5SguRVUCL5xV7PZhHoIn0Dt2SCLW648e8KTwC5Yto7rs3E5hA0Yb9GmHKzZk5lkE0h8%2BC79gtv93eN12TTHAJAXgqwQq624zBlWeDVBRkHY4xbzfSIhoooeIRkfpFs7dPg7NVsu7vPgBuK3Jf0XemT5mo%2FIrzALU6UidlWHkrNVshW8kcGUSPU9y4AWME2dqGETmldfLG5gmyPEAcQoh3Xq9DYzBEusRduYkmjrdcoAT4ONrABlC7Sjg%2BF2v0hNvJUm7Mk7LtyIUTEsAYmzradMfc19cFsQqf1YmgTktS3PS%2BVqGO0GcUyMoqXproUYEihVjURWryeJpa3eevTXEPoZMolYyKYuP4EsAXghlg4a4%2FLv1TldkHFcBZLUzQefCLhgXYYiTMuRpqLDK8nanoqSQF26x7X6xZFTk%2FpMU9LatrF0i9BBEmG5nFA7TVvWDTP6X6OubSJHv4Hopxtr56bQIKZw2XQCtzCsz9RxLF2p8FwauZX2gW3%2BNyv2aVnZ8o%2FgZ4xb5rw6KgXtufMsfNJyCEZUcXB%2BZb5MbTti9kr4wnMH%2B0gY6pgEucNywPLeRiAMIRH5HuN6dHmeeyv%2BLZz6HUjEyCtV70MHNORBBxw2cHnjX0YoAwW59grIFiwlRnp0JAuScKhTYum7XEMnPo6Fc14qyig694n01YnnW8NFs8STSBDQMyWgzv5pp0rGF%2F34h9A3%2BKCMh4HeHxzalgylisA7trH4y0eGLz7Z5NvX311Q0icjJoMcnPbtkKFNIea1FnVpaPqUJYgTKUwDk&X-Amz-Signature=50d5fc2fc8b370ee4457399943160ad38752586e8ea35aab20c0501a0d20b900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

