---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: 'Implemented and improved a video deblurring research paper by using optical flow thresholding to eliminate artifacts in near-static regions.'
date: 2023-10-10
techstack: 'Python, Optical Flow, Deep Learning, Computer Vision'
---

Implemented a research paper's code that deblurred video content. However, the code had an issue where output videos occasionally had artifacts in areas that were relatively still and not moving.

The fix used optical flow with a threshold: when the optical flow exceeded the threshold, the prior deblurring method was applied; when it didn't, the frames from the input image itself were used directly.

The methods and results were written up in the form of a research paper.
