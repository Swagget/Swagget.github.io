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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEUVM6JM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6DMIWSkIOn%2BPToazOfV965aLFXNh6YNrUtC%2FS1dSaPQIgduhD6nszTKQ38%2B%2BoRDFlTSthuvmT9MvPNG6j%2BQq6%2FKAqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3qieXYq78UFuXAnSrcAxd%2F2Mu4gun99JJ9SEB%2BrFbTTDSfVYAAZHryBQUZL%2FHkhzsxtuwZiRIau3Vkh48NQLuLn6LyLSQwbgOLirXFBXGsCDjZOVX6lP9nIFgFhnzN%2BCLRkwXo%2FcOSFzVwmz965DlOoUHnMiXwdWoJoMRywsValEAUe2glbVSZ5tRG7cXODu5uRqa53tarT6Ivf9Ru1d%2BGM44nHo2NMpmbgL0S8crxf7d0XOMNOE%2Bq7bujqFqZ93%2BjdNbkPNS%2ByEX71uQ4Z7kfVvkLsz4MTh2lD5Z5DvyIC69hPFo%2BuYR26YMPy%2BISRcTALl8Q1gqewrkBoNijAefOo16nM0F5WWWnZQy%2FnF10IZXOsGHDIsP1R2ZEKeFoZebiwUtlve60AwOQISrefL5kXom7aFAlJvGZImXXWeyQeLsRpl8wkTwIEMKtMwnxQlb31xzqpvaP0a8InyOdKKOjfGqRREOtqUNzR5DcfVt%2B9Ewrt3utfTQzi%2F4Ozf0o6DhMAmtExgrVpx1lfXPF0pk9sl1fieOd9p5%2BAqYe4qVCxLITaKwTX%2FDb34zPzQV%2FW%2BhccbhdHRnKS8q9INFMW2V2deDFGuDiMwP2nsk2BwfB579wirKvodiIm2UqqoaHot8BdHseHBk%2BApraMKOhqNQGOqUBx54EfBPxqsAfDMtZhY5yRRZkGbXpL1g210%2B6poVbfZ%2BYdfKMv8taCmjdIayfeOPdsBMO8MwSFX8nXHoI51tNg9Qo%2FsCCWWb6eyvxpCJG4cAmwopYpmQQsW9KuYekVRnSCbqcR4SULVOEx3IHUxn7m4awoL%2F3gcTqih1dsXpNAYEIuq%2BRHl6V872rahHbTSsKBGUYxf6QqE%2BNfbH7IB5PpV6cXOgK&X-Amz-Signature=d2e9294c67d0a6cf8279e3db978f4b75a0dfe52e312d7fdd00d700a4a0a37bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

