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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPOW62C%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T185933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDogVWk8oMy0fr7vcOtqRNylwuFfc%2BnT0Li3TMhS%2FiexwIgAuQ75l%2BeEROfqen7%2BYtD7SnoreZ0pgrrjdtpj0h54JYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDH%2BLLjsef2rzKFgEuyrcA5Uo381qDFcEdIRxOx7C4lM5paDXeIURdUOtgSNYpu3Yy48l%2Baa0FTbie%2ByG2VXMzT%2B%2BmN%2FktRRgTUzcOVZInD9P0xkz56YE5FCHxn79hn4WNHUjdAIj4S%2FSHoa9ARWesmxaXx1NG9en2G6St%2B%2BkYBzGofT%2BXTNmUXPyVmSY4mAKrMeD2A5Csr6CUw6EfXzGJ641SPocZRCVdp5s6vmkLb3%2BUtNLaxOP%2FPbtt7Rfte4Re1QAv562p4%2Be%2Bb1qsdVGjqK7e63e10co5agaxoONwNeIj%2BrSRt52YuSLNaRE2EsSjYA%2BEbl%2BU7esbtaVD2HtC0OuK4JMZPImllMvB%2FRu4Z0wtq4BgG%2BxJ1wbSdJHFeD06ma3hij1401ioU7TV4wIjjL%2BasQs2jUbCXtMBFfIlO2%2F4K8H5lRPeN2xIhY9tPcH8YdB7Pk0VlFhgKri0xqIxqTGiiO3Qxlmd8iaQoo8BTrJ3v5GBVmIrpADnCimUPHyDeh2t%2Bd64%2BEMUsNlwGecxSpxZrXzHipopP97MudjW5bSQFMogT8IGq9xSqvK%2FRuLQkuSk1i7SEGcSzabZQSVhW7kFXhleiiAXOrlQgwf6NpbGZ%2BpcM5YEi2X47tXeqhVa1VVAfhe48i6RT%2B3MLHt9dEGOqUBPJPlufL8WVEFF9fvp2ax7eCtg037YWOmwucC3NgzbqLDRIjGsH%2B7hzNbGwIrL5SYhGeCuHGUVhD6Jnfr99dh8DR2Tn1%2B5ZKi39OJNzAAv%2FF6du09r80JodrMRworjEUqZ9WYe0aXynZRxvOkBwXYtNohtR4oEsHiIGIF7lE%2FXfFBrYliJZocqlBGz%2FDKkTtuf0vO9uWkQsyhju6w9tUqTW0coTxg&X-Amz-Signature=8c07e49ff119e2aec54a1880ddc2dd14942118fc00a81d03e33d4e8d1897854e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

