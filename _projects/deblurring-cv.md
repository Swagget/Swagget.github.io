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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TQWYAFE%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T175435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIB3owRiA8dbJAE0p9xrGgImmfZmKf7Z51gU4ekwr%2FWnCAiBPs04vtHfjLE8OYCGhgMt5fOoizvmkckfmjdSOTpgEISr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMKNwX7H4OHnxBZ6jYKtwDZaJzuanwKowP9e6ucB7MRqEz4MWHHKYEWAegVuBK0%2FOi%2FzKTCZDVNL5XJyIHXl1CmDz2kGhyWDf%2FLYYVypEUsv2W321%2BB5qWgaklusK90EHkJB3M5MaMsnDbxJIyyJ2OafXZ74ZGj0S0e0l3C7s8zjkj9T1xyTZ9%2BFWNARXx1FV%2F%2BT5eCmbZps77QZNruXNI%2Fer2%2BKk5S1pgPuUEw2BOcRbpxHAkgkxYNVKi3EIrfAuNkwdTyyzItlFVEVoI0romZ9C8iPAroQ%2B9OoVeZkkR1vwAvFSLpZTRKpUvWynnDzEdBISpBY0PcklS%2Fu%2FY8ujD7PxLIeD2N%2FuUil2oq8nJNwjLteE2Egne3AXQEQsLynFI9ZHq8wDXr2d3YS2ur4kYZiS3ZKXxAlOM2kgHHkM9%2FH3pL%2BXT7vH1R25%2Bq3dxys3X2y%2FHaS1mq7%2FZrZRRNhtmqUoAu27Q6UiTOUov4cMDqVGkbJF1UyEcJd0cjZ1e%2F1VJKfpUrw9lIaa7gk9vr%2BPx5Wlg0Ve2iqQ7PVkoCuW7XCzzV2Nb3iUQDILG22hCHLU7xyeaY0bZNPfFQ4UVVZBdPBeSCAsLFq4rAZrw04MoYiyO9xfcjnbXWrSYLqVNQThELWJqr7a4ew78lPMw2ebZ0gY6pgFmL1cWPg9mVY%2Fj5LyK1Kmfr%2FZ54bVqqdXrX%2B1Hpro52TeiM405KL%2Fvee4uIYQi838i%2BmlgzXVpfQnT2b6ltlL3hGRuPsfiRcsYAvdgQ5gNUjpgUHEwlHc1olKQhyFtksgC3f1YVWiFzm2pF8%2B0P8e0fHf4v69jRY9E8x6bubjrM1jOsv3F41rrzeOWyaU0z6mtdcSRCyV2NOxetC4YPhUjXQQYQ5bU&X-Amz-Signature=f858108bf02253ffd4cfbc09bbc19a59547d654605f157dddc7cba47aa003b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

