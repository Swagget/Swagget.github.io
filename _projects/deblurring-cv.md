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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDZCO3G%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T091939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlAZ%2BozS0oBscf%2B6vBlQZbpMvr%2B4thtZ7m3fptN9XW2AiEAifyGHXd16Xe2E2DK1lVrVLop2ED2vTUnGDWDHHFooDwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOTd9N3egLm9g562WSrcA5w1cri4Mh4jt28UOPHolOeH8eBswDj%2FImrScLTHxVen9PbQwjXpNLOsNyCuHOat9smLXxbg2FUMZ3qG2vMp2YgfjFAQHlieWh0QySRA9MGrbPO3Gdz0fpNuL8jpae8jyi4vvdR%2FAx2EsMqa8%2BE0iAC7qLZ8v2PyDOh%2FJMOWYfJ1SThUo5Mm7ZdtGRv4pqlpePEjdcsa5XFXJ6Ds0Jo44h8ktdc3iPh2kQxZf5H2havPOdkEL0VonKHdpEgSKbB4z%2Bi3Eow7AUEzoirdELbzWyPMBTxa4zDZcXNZrbtelbT842m4D6%2Buv20qrf%2BmXf7UfRf%2BkS%2BQJjSKwsdn3kPCHKwHHsqc4O9XbmI0medTBwY%2FVsVEmxSmvBbieiSLRB71rGRWHZdafkQzqi0Vo%2FwiMetx3Qggba5qIoE7Ph2fVB1rHWOp%2FedkRUU4XEwQi0P3pS6FO4NDkzHBt2usU%2FBFs7AlonTrwzsiUCNCBd05BV%2FjKfoICw2InhHqi4GKCDfOnshviJNxWbILQmUXj5p4%2FDtE%2FN%2FmlFRNtXRv2Nis2w%2FtH3J0004R8rS%2Fq9LeLmMFAXe%2Bf7j8KHYAClcyXYVYM%2FWzVkM8fg%2BH5ncFNCtCV8%2F2WI3zu%2FsX%2FfjZYX8CMKO4kNQGOqUBX0S5os1kp2N%2BBUMrfD81jLb0HS9zj%2BV9ylSohQX%2BPMIqxve43Uj%2FXDioy%2BteqArIr4InTZS5NlNVK7T4hqzAPRmsM9z0r46%2B1znnWShWNtVHXVoGgGQZeDbd%2Fn%2F%2F7goIEdQ3hF64ciuCkehanguYQMlnbDr7BPDPcEHUkGmm85zrPNhYX6E03DjOWNI4u8VfD%2FH5jrHF6avk2jv4q6bqamN3JdaL&X-Amz-Signature=75bc8fe12e373882c460ded15b200766c512afbc5044eecb5244adef15d01ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

