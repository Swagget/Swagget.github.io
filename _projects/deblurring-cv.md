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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTD6G4YO%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T222851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC58tgIz84F97RCBRKvmX%2FrhTQbKaXJ%2FyP%2BcrMtaaZaPgIgOpYhQmepu3A6efUfMU1w6ZJDQ2FNSTWRl1MUP6Vgvx4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWJ2r0S%2F3Wpf%2BOgPCrcAx067cN9AUv8wNV3prDlrLf4uOll3R5HrJI3J2ZypgYVtfcpAy272Np91LKM8ttTvV%2FFe4UcesJ%2FmzKucDg1mIclXjz77aNiIfSWOl4YetZBXctbR9w4DARIi7zMb0dGcjJBCSpfGmgWnS1s%2B02jSBcJaun1LYO3gap8bbPDaaPsCK%2BT8Fb5YNdyyk88DVc5noOFPnUAhJbalyaLMiXpW9fwtMVycV8b813%2BNQJ%2FquReaZVZ29aj%2FeVGvkv%2FVOlkpINOlRiPrvr5PHayWYHPRdQQCbYrOCKFvlaPhCrSgdHIXLgSNrUH4LIpvWw08f0vHFbfo288SlC2HcUnH9rWT1AzQ6FJB7hbFwte%2FedxdUNyuiywiQz49zPbxLfyqnYGJj%2FFpLk3rh4hvU%2BVOY7c%2B8dlcCQCkwEhTIKKxnIRwfdoGGzR42VmOHNtUQaUeZDJ3uHDs39r34wTrTYCvj2KQs8XeRAPzkUQSvCf1Ih6ZfsHEsp9f2K4aAqUjgtiVI%2F7oTsECbQOHox6h4WVk0DEu%2FeKXy%2FWRM%2F6dJ3pG9lbqL%2Fw2YMeSEq8OdvU0RJ2FxL%2BUijd4Ks2ZbF6R9bXKvFPEg%2BRcPSA6aFOWuqQeAeACh3oysViBLDrO%2Fb8tuvBMLj47dMGOqUBcfd%2FgvRPUYuOq3hs8xS6cHvDDzmbx1mj%2FElbjzdHeXcZSyLlqQKslqCt4O8Xp1Qd0RgT%2F%2BzMn8Alyr%2F8RtbRQUwq67%2FuDnSMFpspUBYuFd5BCjDIb9HqHG1bwCQuKBO5l2vCB2NCFbxPTXqkKA8BZZVxiE2gCOApWIM%2FvfmzrE9EwqOvuiNz8RKJQGpEqaBp9JTBTWFqpjp%2BPgUFnMJWQ6D2EJ84&X-Amz-Signature=19c5c626f52307449d84de82704d053bbcd46608468879c115ae3a93c546afec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

