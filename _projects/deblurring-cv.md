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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBNVXTKW%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T083322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHCNxWx0ocreM%2Fdv%2FIdy7nvKtCFOEA%2B2ZnWpugmcvDWQIhAJ0ZXvGyBvh0ld0HVPQhofM34C3pXZFpVNTY2SXI2YrCKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxBGAiRRfYY2WVB4Yq3AN%2B%2FpIYlMzC0ZXk7DNUoiHUV445ajw3nJMLT9PsqXxcTlPJpHQkgyExG3RPv3S7bSXqobCnF%2FEP0aqp0hztXloXaooLTSSIfCKOjhKOjTPhXE%2FYj349q4u14mYMzpRwbK5USH0jblAo%2BFx0cjecRlZFyg%2F3uAjB3u%2B%2BTfND4RYhHlhYjSmvtFkv%2BsR8OPqnwUasRXKZOCGyeBz6pjU09Rb%2FUqfL%2F8JubypbY4J35ANorMctQwR8aOGTdL0F%2Fsn9ozTCTV1CtsswHcwv%2Ft8KxBiWwE4yc5njGO2ylpsq60naOLO%2BBmU3qF6YdjdeZmfxDUfbL8UqrNLMyWtghWR1dHxKGlfplRwFlqjF2OtywiOfxOGYVdOaoSJ4nsTzrS2J8APXWg%2Bwz1DV759tQRs3Z4GXaaeqUUaK8jfCwKe51ECQ%2B0DgkVOR7AWfkN2ytoGQ%2BxpmbdrO9SZQ2DTsAwDFsNGKDuDZu%2Fr%2BlkkmOy88BH9rKlHX%2B3WurIaGfsRqFgx%2Br3JPWK1p6QEgft2nFnIovow9Nvfr2l41HlR9Zxd%2BH1974aUlM4wQbgD0ui3raTTKh71xJUoCc%2BRk0jaXClr3HXcrzUCnLjT0k8ruz3lv9Jrz%2FlzM%2F156sxLPN0cNSzCwl%2FfSBjqkASJJm%2FPAZj6u%2BcDSXOAjBPqNrB7thjW2L0aga06%2BPtvrPwMaY6vc%2F%2B66JAbN0eafn3tfiZXdibA7kxlMUGOMspMwEFsS5aLeHm44FHDuyAcI3BarCczJR6uYIt4rdGT3iGfl15svOKF8%2F9KFHdWxZGMKIRetwHjaVWuJ0JH7Uy%2FAK7YvOQq41LgGR%2FQRmsU%2FwNyGTiY%2FgPpv4BXJbxNbRjNoijP5&X-Amz-Signature=1cc320eb0c7e78f4a85bf572c9cede8d035f14c0badc90e5648c334d4f81cb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

