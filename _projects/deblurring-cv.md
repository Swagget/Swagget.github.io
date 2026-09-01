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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z27N7G7J%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T065255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6juEdPZ8C4YtA54jfnMEj%2FojSe50pW3paOKFQ67F5rAiEAiVgdCDnzpCoQUWXJ8Pyf8IAGyEZMUO7FZkqOaBC6EV8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1CfqFxK7rqv6126ircA6BpJoC7BYVvcYeI35ddOq%2B3EdiD73uPgsmlnht7XMNTOJvN451ShsBND9EB4qHemlBOMCjtT1lv%2Bd3K%2Fd6WxG9P%2BVUTHleNan%2FNbrJBS7ubM6tbicXGhivFCI78BJlGcBHYTdaDAm9SbvMFCPJZ310T4zmhXg%2BwdCnaThhNDJfxPc2DSRTXhLAWeCRS8b6ywbkru1Iw6So%2F55JkhKh4qz2%2FSaPSLTwtH216xt6RozD9U0dMEBy5dO8hDbYTo%2Bg8KFFlt6qqh0CTv3ngYRsHmUfI3lKWtn93pNPV1qBl%2FiPZRvzfkZHQW%2BS%2BGdFRDiOUrh%2BZ9O9xTAOOIev0YvH%2FbVoK37Zphn1gqtwm5UKIhDF7bLe0rEfsm%2BY%2FW0mIbdZat%2FN3b2pKDOJC%2F9Kz5cxu1V5gPMRZSpqbms5k%2By6kLwvL4SbCTQ03O6D7CQBlJS2AUML1R4Ep60YF43GnhRGnJVWmmyNiDWX7kaf3oRpdnne3rXMkFqmdioXaH4Fem%2FAKWGU3cvQwPm%2Ftqi4wYd4fbmDu6uGos%2F%2BdpwGWxzSE0n8mUMbZP6pE2jq4M8GeQu05YwHh%2BmU%2B8Ue%2FVED5JFRhrSaqGnEDR7NzjDqkLzzE5AV79dPRW5x8z4XVBc8%2FMIOq2dQGOqUBrpZ8EN1nYElEjQb%2BnzhAYKPWjAzjYtqkAzkXsJzVGbbQV%2Bf3Tx%2B%2Fhgc0oM7%2FNhtCHynJydtPHH9AHVHoD%2ByfWuUGZw2d9AljX0IUaukQIMbpZQu2EdDnFsygGrVh%2FWBDVoPmNfyk5qDbUK54wNkgWwiH0qYC%2BPG3CbLjpgRSRTqw2GBNIroKIpjJ4CPJwaD08MitrjXG82yqIhyn9zEFMxMd4IS7&X-Amz-Signature=b3399962872dda98e3b45a06b02cefd784a6236b1071689d0484912cc915f2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

