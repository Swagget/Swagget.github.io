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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHSJZP7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T111754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG8WqyvDdJnoXT3%2F3%2FFbs4X4N%2FX%2BkuGkuxgFoZp34KEgIhANuFOC%2FSg8YI4NB%2BcuPsGLPNvnsSR0oxLmFZOwmpecvMKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJOJx1pdNhBKdBCpIq3AOjSQDOIZGMunBU6ntPZOrD3nhVhnEhKmI7Hf9kbVc%2F5r2ifk6wC5TI1Ooohs8E4XkjOb4aexYUX5s6Ct66Mh55dU6y2Dts7nAQJ8K%2FO33mTMKF1lwRO056Au6Qj3%2FFe0MV155djtVdyNwhxcOTUp8NQ84x%2FzwXsGf2jIYYmcYyDG4aEmNasXv85AMAUaw0hXDNLZjs%2F5pQ%2BCvojMB%2B%2BiSxtbmfnDR7H%2BSlddw7mIYlCQ5jNFM7CUcUZkVWdp%2Bd0F2A2AO0lra7ZLInr21vc0LKd6OCSYQ2L5g9jbCaqTBpxAMOuRhjdMDyALHdMF%2Fw7Pyo9E4nVVY8vFWJL8HOW0%2FpeUZodI3FPkr15QecOAEg8LnP5kgszekZ3BJpajYcUypr9Acn5mW6p4wDKiJiblJLMboLLfgrJR5n8tHWnv9kTVp%2BAQybvBGoA%2BvHVDZbHWMv%2FOf%2FsryncsxJrN0AB%2FEyhToLVKILYPSOQfxfX64K4ecjPuoa9NRU5yI4ZJXscqqU6o79kepVZQVbto5xjQTYsTMqAeBhJsiAuHo8wzT8fE8omkoxE6WAyxcSAt9wnF7HBzpnOv55KC5HezU5q8QKlzBkmgNjNyWjcodk%2FM5wKpEmFiQDRs2iN6qNvzC7ouHTBjqkAawjIL95rw%2BDDfZEeQkVzEV3ZTWI0cJYY5ttJOMsHtCHtAYqYuf00M6%2BWrtYzflLQTHwXBbAOZvSwMvxuAdYvHSsVrRDa7cPNvYPQf%2BcotA1Z0EioQcCX2vu29PwKp3SFlVDIDXwBWzmNI0WMaYf1IN%2Fz4s%2BgMoIj5KtELzeJwNUFKt5KGPcH2oRmmAEa1nTl%2FBTxd%2Fb3AR3McGKzUX8x6Outp%2F9&X-Amz-Signature=57c14a91bdcf6da7445bdf6224dc8ad316e513f1d464278203e26235c1e2a728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

