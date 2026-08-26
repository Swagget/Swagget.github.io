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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646SVOKAX%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T184543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEmTs5FHpPTMcTBsjsDWca4fNh8cmigYyL0TdH2Kdap4AiEAo7ijG2ib09cBop0i2gK7EFTVWfSI4oGqX4tkObfcttMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI4V%2FnxNL8Lv3hnznSrcAyIuPeYBrqJzOOywwF80cYsB2HzpD2XI83TOnBz37u7MnPzLyTL5veSHINvALA%2F3tDZ%2FIQ2ARCevCc9zr2ZU%2FNFLoLDUyHVMC5MG9vbgbs2pC%2FySFDVskOOK%2BK1Rxb%2BwjRw07Z3VQNeb9xziMOM%2FkHJ0a1YIi0WmGXsLTNb4ebJHieS0Lvla4hBFEKBFA3JEhU2rU9nAV21K2s0i2M2%2F7mHyOz5L%2B%2FBEZa2oa7RQpufMoejKsyfzYWDPj8ttxQnY%2B7yS%2FR5M9dsuhPw%2F2sxbFEafSUV8%2B1OhtC3JqfzUQOIwkBecKZS6ml%2Bh3ctZhdEOY4JyYC7NQDe7ACuYIwtXvevNWC0HHwLe89yJhcsGnfAe3tskrItQ3RPuXWaLmpOOrdGtYQxhYdQcToMSUDSUzm2%2F1s1lIFc4HyP5yBhVYYR8lCmYK0bvb0a03s3dFkfIzMtCHmezozkGA82%2B8upWXA%2FAm%2Bjc%2Blofc9Lj7GTGqONBKyLMhgMHr3zAwuB947%2F63AfGx2XivTwMwxOMEsCodTTm%2BXifSQ961%2FWsdWaurwcIcEnXQOFPXxIlxF7mh7H292L%2FD9yroFh%2BCPlzydA7mGQGp%2FqaRBbQXne0lNDNKbpYshNxsisSjo7HTYARMPO3vNQGOqUB1U5XVH%2Fx8oug6CTTpdlTqla2R5SOlT7IKTsVTDGFXCDH9bsS08VWsfbaj97KQdVh8jHfCpd60Qxj3RB0vY%2Fn%2B5zgWS4okEfm7baFDs3YBEMxZR0jw4751f%2FYT4TvO4e%2FixIHLkg6r4SN8gvunkVCxHdXEI8rCf2I1FbhhyVGnQz0EraUTvotoWZ%2BlxA2KsrmHOgi%2B05SoHPimk6wU%2BYMExyNnh79&X-Amz-Signature=5e04c5d7edf6b9c17836fa119625b9044c7c8f9e4da4363804911702e66a069b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

