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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6RL7TB%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T154543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2r113CEkbJAUDj9meczEBBPz%2B%2FYzQ64sy%2FcMBlfB9rQIgRnNA0pMIjoiRJuTfO3nJBmMfL1AAA08mKaN25%2BnL07QqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQQOEbVWfF6Abt9ACrcA6awli2nn1ri3bAkr5aMFOQcSzF4%2Bd6R%2BcL2CZB5io1isb%2BvT%2F1sH6d%2BwiLoCqGzucG7%2BhFiWauTZ0106ma9B4MT6WyG9Iu1n69TtQfjf%2F%2BwQOf343pnkxnKLqsMQwiIyZik9a%2BAY6pVCuSjrPD53dmfXBgKstbJ%2BHNQnuQHgzS36VZnyKsB8NCJbuQvodSheon0%2FyN1n6bYIRNt5vhwifLXgARYmEPYBjpJH32EEOWXMcJyr%2BEk%2FmERVXHlMPecFWyVNWxeWH1DaNgpH3nbUdxKnSeOike5Vk70hB6LlM0HBYexkOTpNEu94JMpPpuOz2XZoHtF4ch8CbjKwJ49xWDieB5LtpsdLPnMMgUzz3c2jLJHfJlke518%2Fo5gYVyEt1OGPc90V4k1J6CqsPqaKsdYmbr8cXzp%2BOXvfPfRMxKpAX2YabbaaRTFvfcjh5zk3F15wTg0x6mVJx77hN09R1Gb734IY31g0f65sTteQov2wPsTskCfMp%2FgXZYnByWTcCTHP%2B%2Fn5u0Ky8mDIriLx5jbK%2BlnyS2ITLalhhFmkyQObk48neeRC67u9l37NqNAS2RmHIY%2BuhrFZFq7TuhkABrak1UxPoMKtGWGRmwL93Rj%2Fl6c1HFL2Qm95uucMNCE7dMGOqUBlOogvRChwOP%2BxB0Zc%2BTYz2fzhQavYKetGu6CsWVH6%2BmCL0JOw5bGbj8wFA%2BpoVKAI04NQ6i0VOKB5AW38Z2qm66ANLF8QqeigLrY%2F0Bfjltaa0SHBTsuN5wqFGVUVDqEKhEnadDf1fLj7h4y8CBTRz3dCJukbe9KuXUNUXPD%2BHDyDyqi%2FroNMpYeWXEnV694fDLSmTvNENIKBkvsdOaa%2F%2FWEdvoV&X-Amz-Signature=7e8592e4e6648572d8da97b19132a07186991de0cd353dcf9ba45492eb661b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

