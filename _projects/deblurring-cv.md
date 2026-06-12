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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWEXULV%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T185614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBUd8nf0E8uy4evmj77%2FkUyYRMRidng%2FleWQfgrfJU3UAiAUM6aTiuZQL75Z%2BVhPEzdoTBW9MvGugWyMnWJovP5fRyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMzrhQgoBSetL5f%2BlLKtwDGtFO8SGMog9V26x0ChQm6E2BcUzzNHdxYqByqrQvNSSW%2FGq0P5K2sXhnGLb1t992mP84aG7fjGmAYk0O2DHx0NQMqjQOIgynPESLRvSGNhI%2BEbMygzTrBaPN%2FdjkzR7TGBHSh%2BIg296Y%2BhP7crO8mmPCixSflBK8sodL1BBJJ%2F2ft170WBOtlkCamlV7d8pWfIVDe9jmJ%2FXusGLSomvXoyFCIYYdHIppBPWP%2Bp9BQI2xdYL9kwwbV4zPa%2BIMKJ2SNrd%2Fo63uPUy5dMJt7%2F20%2FDupBorNOi53dCIS5DBBAILJXNpuAftn%2F5UtW%2BcijyXvL3DPuz171%2F21LPcOjbWlz9yTyUOqb2T6wl2M5rAVLKZJroFBD1KrZ%2BF90GHDb%2F19DeY3%2Bah4aADny6CKzAs%2Bp%2F5I%2BZLd%2Bv%2FVZFsxFhHUX8qQwGWoKkr1WHZNjnYMGFwxu6bJ0V%2BFp4WAailw7CF4KJe5QDRksbb0j%2BCg78b51oMOyLrDSlduJ%2FlMTg4YZ7FRI8V7VJDafV%2FRpttHoyk2AGXIyp3ySX62gF1X26tlmhm6TeRLRmFII377TO5HjJP6yt%2Fsa80Uy5nUt3wVEgBTSNNODjFiNKQrvgJjcV0tXk8KAkBXjlxn2ZbfVKAw76ax0QY6pgF0tAG9lpPmihMH1Xo31ZB2gbrcJl3bnoEuR%2BmIMj%2BNU2bIYRWYcZUGdPivgMvGqB0G4iCFl2zD4dCZ9RqzIA8k1qDnLjzRCPw5YJa1Tk7CEr2st3vfnMl7V%2BpwGIeLd0h831gflHomGWLNbLJ5b36qKQxKs6%2B82rP0baXh2%2Bj79KYHe6xOT02t3JRcTR53Yv4n4ThHbSO1qrTzCk4hyPmbCkuRtpN5&X-Amz-Signature=ae146f1245a4f812be8798da26a038b15b565f0b853fe511dc979638ef145e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

