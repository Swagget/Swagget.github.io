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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2QFFFLG%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7SNbb3b8UvDKd1sp6q0YsPqcv00uIgqXrukYf%2BPMvFgIgRzKkq87kTvhlLxxs1egPRlBHeKcnRiZYLmp5AxbNih4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLh9ep6mbCvhu1cCUircA6jyM0EedoAQuRim4A2%2Fc1leVNnBfIN9QbxTdJ5hRxH9zsNckjr%2FTeX1MJqTdBw2KTGzf4K1As1PsKm5TF9u7BqRsBc%2BVe9AlMzi%2B2Asf%2BozkQAjHSvpnLyajzJ%2FNDvwjTpRrj7kmeiBCKu1tXliW3s1KiElB%2FNPc0QDB9OfChm23kKtLNCFB3c7DoLRdwdjgpE6y1kf0ckJHxlyclyWj6zSwPsZLTOKMz%2F8oOX%2FMX5YJhJgoVJdOxJ04%2FNmZgZbGjpvr7ryUP0sFPelkIlvD2CQP7PFJbR1S26Sazni%2Bvf%2FCTq0Cj%2FDqEu2w1IuzJr8ikXcYd0dk5csYDCQJT21XSEBODtVRKmbNcvCuTwFq5FvBdJzsFNvi69huAlsZirV9m89%2FwT9VbgXZsFVatrpFI6ivwjSRQQ1Ml4aGC3V4fcNIeaKcoxTgn9FDLZ5D%2BNf3Nb6wDr9uVvODsfS0ybaohZcVUe5VjdPmqW6b2LM1kvdi4KJ0CYnGZRTrRpxHLMj9nTBTr0ZATheID0zrkakCr%2Fb2bnyjgU9HUfK7DS1565WuhccLpEUwCb4uhcXAS7pLVaa%2F3GmI5wlalkHbTaKqUS5dNSvvJs3qibtCvczDE3LGMdpT1d6z6HsJHXSMMDv2dMGOqUBBjlKaCZ5HD1NhdWU%2Bo5nbttm8uJNnrvheO0ez85cq7Ksb%2FO64ZA7DjOFnbKyVWUV5GQvUZdN6uG26wj7MaKoBzcWPoxJ%2F%2BB2qIacyjkMZqsLLR%2BnMsdJr2PokHFTt%2BwDfcceamzmNcrd9cIsLAUvLrQwgyY%2FNCdxj0CfKwAmmgzwykhVgNDtPKSHjYagP3Ae%2BqnpYUhmJJCuyTSQnEEyctv32iZq&X-Amz-Signature=da91a7df73551cbe69bcd6b65a7fc335a47391b6d896d915a02c94b9fce126bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

