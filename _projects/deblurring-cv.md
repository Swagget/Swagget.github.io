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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKTSTLG%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T114226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFz%2B6MiffayvqMeqVwUyKMO4bInQDNqU3wSBcG2CdwGAiEA4g4UYfMGsalk2ES9FirwgN1g4%2FcbkcoJ5cWq6nVfKjEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYOs8mfA3bmL0c8qircAxceMGFiTdapnQHyi8bJpcQ0Ek%2BkEzSZw2B18LAz%2FuAYNPLJs70Sxt8F%2BNyvKAo7xoZZMexwChBIyMNzCnrrcp26LRrjpsVxTU%2F7d%2BGTAWZdwB1yeluE%2Fg5xu6INX0GNKQ8H046qpk5OLBGQDBu22pumlZwaIaVm1dM74ILF8218V7174gZVoaASKsCbeRrnQ8ZHiN80heeEj80k4WlxuymGplzXYgnxc23PRh94gpDtOArKfz2AreojLVe98qF6P5WtnQQNuiiVLxPoItK8GkiqZh%2BS1SkXzs4eK%2FfBAEDQE4po%2FzYMDcnlCC2Wv7atHxds94XFpWa7%2BYM%2FT3stt%2Bw67hwOfnPOMYZOGR6BYVZ0t%2BOhrXc%2BO2OR3uaCNTyMpLxDhYRgX%2F3GKUcNBbfEseSnWbSTmn8fN%2BDhVkeRAhS4QSbs0AaiY1%2B%2FJMwypJbKPJKMA810iSaHAnhAfhYpdNx%2B5KZJwQ5gEPfV91ESFCMoFhcdImf2IAh24Y9P%2Bd2xNHnjxA%2F3sI%2Fc1kNKG33Ip6Vew62tfKKTZFphOwyPyx4CMUp1iTLR0GL%2ByISEGtfj0IPc6BNG7ezv6rw91jgyIOatxkylxVdVQ%2BELwoFtAVpKx%2Ffeur6OlO9l3HlMMICsz9EGOqUBPPTvcOuJAcp3fsn3bFdxkwqw9R3htNMEqjhgbYai5tnKaKHa01WyHv2MWRvQaT2JijmNGFCdxjwqROiWseGkijXZBsb02g63SYJl7xQGAZywRtSHd5L2fniU32Q5W34i2dLbhlOCwG05Zc9QSwS5QYDjukr2vIEjdS%2BT61EhD23eIyWU8s818UEZCQPOezx7IoNU3UvhHnwC9j9y4ocFBh60J0vT&X-Amz-Signature=2cf1b80aa0b0c5d99f0640e057f4b68e9227f43c2996f85ee3e5e384e493c582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

