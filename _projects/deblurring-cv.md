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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TGXRKBU%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T192314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6P9v5L6WdM%2FS8rv1hFSNs22clIzHPwFO3ofxR7fkkegIhAMsrYLZKoEoVZyOsrP6a3b6%2Bw9HwblcJLvW2vBzumXgpKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM0OtPhzLMnV4M%2FqEq3AO1ANpIkSn9xMYCj0ii1wosZMuWRin5naqud7QNW0tA2ufTgFAWohhXk9zmpaztnM97nMXd3x2PdeEJ7ltxppHotdbUgmfK6TMDpqypDY6kJPYFGgLemcEgBpMJcxldud0H1aUN5TDsQcm8tXHKXXNF4Huc05j2v%2B8BIdDTc31yQgqE17zSusvg5rdDh2GB3Ozps7UPSWxSSWMR24JEDXCU8V6nFzZy3%2FbeqcuhZIBukJGtKkws95r4XE2TBGp%2Fx5pzEbi24FiAamwoPCo%2FEP3me2j2wRchl3VDS9Ubj8%2Bw3lmvssilJMdNaY70ksT%2FfnrA%2BvQJpYTElMr9W%2FnOlpxcyX1xA7q8xyIm%2F1MbzLFTb8ESuZVhOvK%2B9KVi994%2BltTxDP%2FrvTP1kYH1t5vePlZFKKzEYiXqcvp%2F9QSixXTntb5J86qrQONA5g2Ek04D%2B4uYcAdLXIGQl2Nz%2BehC5quV4gUSa4KIN2biVTeauX%2FFk5XKy614haq68wXDVdvYGyrkjy%2BAvp%2FYA%2B3%2Bul7I4mbfPXfphWtLOwl91iW5Kt%2BvhLVbFvvyno%2F%2BiH8eyXvt9YFC06MAE28uBLzwl2tYT3rSc4jmPc5uzAdbkqOjy6e4m2Pr0%2F5GFRkgdFeeazCY1JHRBjqkASfrTY5C8zflXfH%2F7qEV2cscTQLcYO2LbIimE58QN%2BOlwHdYp4246iGOPk0%2BuWQGFA6TEJFsk6D8oVNPY0cbOwFBUgiY%2Fbw8VJdHhRecpAz0rVg7mAC9d7tOSnHE4V2LFnUoeBZmX2XSNwCmzpD2MKR6oePqc3oyJWbHHeRjzKYCjsl7aJ4kNOJzKQO68LoakjTKh5id4WzPYUNeoOdiHyr1pnB1&X-Amz-Signature=861418160773bf9783e5c60d5ffcbc4f8eff2c663c3ab4a7e5a31b1caca80e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

