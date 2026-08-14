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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJZ2W2U%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T123456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIDGjF%2BjgRbxu%2BDLPy%2F8aXsKCA92nUaMGdyLJZkST6h%2BLAiEA3PO5LRm%2FgfqODeXaQBY%2BHs2kot8enGKd4iOTWKcicNgqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4WwSl80t%2Fg84awzCrcAySK2aIvxNZG8DEkyIvF3m6lLIH1t8Qv1FrEYtP%2FhHZ2yvxOUYMDOExOEFHWnekU88sKaejcuEZxZIM4kOTM1fuxxd9q0pi%2BJ6bohqQu%2FkkA8xXjiPT1lJ5xEt0cyuRHs0RHPFs4U8uy34VU%2BFCILrwlP8numMNvizkwNZMy0iMZVcg9gNXy%2BZm8DnoXGcse%2BdU5u%2B5vleMYjMqja39eBzNwLX%2B2yUNR%2FePmGyDZbiPapSjA3aRVEqKO%2F6I18Pa5KIvMStuJD8Q2aIAkGYStQ46XBwIGlMtSwKF0n%2BFdrCFaYp%2Fzty2asyOGXVltoRy6UdhlTHdhZ1RCobJD%2BMRxfh0KcYFR02SuyK%2BgPX4Y3RhOSF50qoJJtM9%2FnfR3Ss%2F6U9aJw0O3sExFVFj9g3CNyKgL7RmEEpaqO09h9EsKtXQihEqXF029kiwFOzecekP4m7VefWDyGWOQ9%2FN%2Bz4D%2BoRnIXnDsSBaTpAv0E07GRDwaLr2wTacrFZtmLv7SQkDAIKxFjf5Iw%2F0RhG2TkG61hffQO6RnZFMSD%2FCQN2bCNe8xBcIa7qKzmC88mR3iLIkgjnrKqicrw6Qu3OrQnKDc7soizNnUeKyMz5%2B1eBghocDQEjozKwXdea7X9ekBMJft%2B9MGOqUB3Umf7nbYUqmUoOufeUOnpn48N04sqh0qkmwevCz5raWRFWfEQB3WXTaDX7M7F4jaUal2tZeStkFjqsMIgPMN7P5bK%2BISIgpdDUBPI7Ty5GZbHH7KDpsB09ET3TH20kMzikZhItyf15nuz2D3CDf1d%2Fn%2BmbAJRilK5ZPETaYmXddpaBGdXnE%2BPM3ZjCNGiaR3wKm8wrVITn3OfaaON3Wh5uF%2FZDso&X-Amz-Signature=499b1871703ba93f78d9b11f0e2d9c52f45b695180dd528438058b0d0a64191a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

