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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIANL2VZ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T221045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3LcKlfeTSAMVqioDVRLR4y4n9v5%2BRNr2oTBtPLbq75AiBOMedvGEImnNEti%2BCDpxm6Rd%2BxIBUY%2BVm4wrm84JIxXyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEC1KVxBGpXh5jCNKtwDWiBpjDUe98xLuFm6FGFPCCKafz5nVFxvwW7Cp8%2BVuxoJf5stvCcoZWpGJbI8O4dfwwptse2KRbyPkADmwKkRrZJQh90heFUuTKasBxTMmyEze1%2FiGFuX4dPVRynXmI3SPOVQVsDuQL1RRkcKdOd81jSBwGeMdsn4HKYZOcorNl%2FLIZUsEccHkV%2F9pajIrq%2FiqCUw6wiIeugrMYgrJjs6QcYgQZnrtWxPSnb%2Bv7lhgGQPFwCqDneRqelC7CuZRdxihf8YrGdfn7cBWFPUHmXxa43NX%2FDo0tGQH4iHHjNB96oy5SqvBBz2A7XDPQXPZruPLTN%2BlG5VJ7R%2BDM19oJVn3tVg3xgIimLtnMbRT4DPIDU2z79P9lot0MMJDNn%2FBmUBKqV%2BFM9lyWzmmJFWYjuWYbrPQB8Iz5dyQ2Letxu91n23nB3xeg55E9j226ZYHL3W%2BdsEbGo%2FazPt8gPZNQCyYBgG2QQ3yeoBpsaWiFHg20zv8RGdfuT4ErPUmJg3KcevWLLFcx2m%2FBrzdBpjhFPrFoV1PYTui%2F97QDeNblzVvOkCZqegNvrT91E9Nu8OyYN9ov3%2FK%2F2YiKN9Hk8qfkb1Rku0uyDCZWqysRSA8InZS0idB6yRr7ua9njhYmMwlYSj1AY6pgEPpdhq9raEhx6268Qu6KqOik0uRnCdSJY3WWhn2G4ByhDrlNRx6bodKv7Hc8NvDmwk2CHOwyXG6nG7wvNyK5lkSF%2BJB%2FYUx3nth6pwyiGJXNLGCgdnOT46NnCQ0m72e89FRfuuyLbg%2BfrEFJzbar%2BC%2Fi32zO7OwY1kJP3YpSfixsXLFC8PgizwIu7tHhF2feBzZAow42L0j6JU0448e46vsKT%2BEXZy&X-Amz-Signature=98443cf632a63d16279c50ec0d893bda66a5e4acea577ad653435312119e7c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

