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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBB2Y2K%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T061643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDSYFgolq3ksvZQbgdiw0M4SW1QebfbGtHijQBGlf3thAIgKtSMv4AUI8qMBiEwy%2B00DM3EMTRgejhtBk%2FPT6eZzZQqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZdHyWn9bb1VmiqdircA05J6RcJki4leeex4JddRbI4Tbf6Yyi9RyCZC6S840ExvMzu5R9CFzPHFp2eUeSBNLv0CWdhrzS8MaUe9dtnoVj3VNW1LPxU3Si%2B7Y4CaL6LyhPJCnDJDBs4c1s1d8QYVoMMLxT7qhSRIXCBHXgw9NSSz2XcvaCjGeP%2B56200ZwZWIB%2BVKPOX6hqHzLg8msBk5ZG7EiAKdS7B5x4xQL%2FNbGL3%2BKlvdTlT48mLDa1eJYZZL%2FrG%2BQBeYAmCbHnHlz0735Et2E6lCGMrCm%2BgYU%2F%2B0hjuKskpzO5Ba1Pkv0P0nw9bj8jKdc9eh5O0dINq1eb4OY8bGDpghQoekjlIGEV%2BVq5tHrq94Xi80Nl%2BSMaFWepYEmIFLWZ37dg6NBsWvWZta47ufUkZAjk2ItnS%2FsjdNgmhtVKmnVNZscegQmY1wgJii%2FJeKGFQ8FdNNJ2wgDP9lREqStTOVodFbeTjLMB3SHnmbP5H2P8j3dCAYgpISjDhtX53vtpjZhLHUvzds50gI7GrOQyeQQwtK1Pekc29%2FWRRaqTrffkE%2BfwyIcuknYmvXHuEsbJIvruSQ0ICBkyMAI9bM8HbFHljMinBdKWWufpfAGs%2Ft5IIU4EUgsFKpddRCm6fUfimqc9v0ZWMLqX49EGOqUBJrrqPXfV5lz6mniagHpKOIr74r0RMejQyoky9zK2P0YNs%2Fo4S%2BCHTB2PcQEwKPmutuuGbJge%2FsI7BmqO7z9SmBf0SOnGUYAxSYikBytSowA3ZwL9QebQXv9AqrS1hTCydVTf3ZX08MdCS%2F67AUYDWEl8N8yXmV4%2FJwyA592T0wvishNjc5PJfpMDPaGuLVuyF2uUw5CRGnyUG4gubtFJfjBPfHkY&X-Amz-Signature=b5782b8efcd4d1a1644d4af8022cff15abc0845b381f5e4936959beae2c450c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

