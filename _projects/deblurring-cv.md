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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4BIY2B%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T072325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnlWV%2FunzWgQZQRtYyj5Is51GbQ5LzRgx9Ymj4d2AJiAiEA8KuKUI28ZqNKQ2Oen%2ByOXm52PuIryWYt%2FEUNcHfXKvIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy9Vq2jox0CjG4u1ircA%2FP4B9KIz6eueIdR3aa%2Fv6l4VWr7mDEDqQt87u3kAZlVOzZj42q6QwJkYKLBkqebnZiBdlmzq50BSJ6Hn5l83%2F%2BLkGdGvnA6Vul%2B9JmTXdM%2FP4Ykfou29C%2Btp%2B6lB%2Bodez2d%2FV3lZfJmox15s0OD%2FSL3pLfc7zEHAMFkJk7b0BIqrVi1296pE83GJs4vt0dz0%2FaUy50UmOmEPx2cSY5VeGtS%2BW1fOvn9WVpn4VptwBlY1pRNcSOe6OHu27XMPI2scBKopraDJVCYkOZLkyVVUiF3fw6BxjP3amYdgBHiaa54wjxC1aJQmlJ5KC20S4Nd1FvD7wwlDVepDWEnXkBo47y3wFp97bK1I6yw9bUBFJY15bBwYRBlCUADjDymJqjXY2oxPDjyjGMqPxmtwpFpG4YN1cer7M9i%2FlJfaPUxPxvwlra2ORYjb8YRiyzOWAvjgzXEW8F%2F8dBknkEIZQVFovBujnAlftdNeOkZbTpKwClmj7NJcY4TJ17EstEHW0iTMaAW8V1V9b1E0d6pdStYlRdroGEKIH902T1O7MSITatKs8wE07i%2BEUCptBefWbVJAi6yUb6zmhhiqdbclHO1n%2FWr0ID1RUmpfD%2BF2YeGyZ3NSTeYFtSWIPGpuN6wMPukztEGOqUBM6EYfr0SQcExUODfY9tLuc0ovVidrkqGIzRqnXNzmZP7404VloOUe7LgBlbkai8zEa7ZmDMn%2FP4uNYjpvWk6XCMpvUTm9g%2FZOi0NFsraAFNKAMWnBNaFHJmThOaZ0LcP7mFPGL%2FtgV1QnP7kRFSRhQf4eWln3On46bfZlLCG99Sj1coSjamtr3CSSaII0AbRpEz32%2BLBgkYmwkj2ARHZUtwkmoRe&X-Amz-Signature=1606b951fd33987f4e9f91ce22428d60e9cb8ac5e71243e001ee98c53df2b73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

