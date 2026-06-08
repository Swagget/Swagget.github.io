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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VNO4R5W%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T191246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAXMGzofuf9kMl7n00VtqWHQLysailgZw44mfj57EEbAIgRcQrI0qgFCssAFSyR1%2BClb5ITk6YV1vDhjuGY0EBe7kqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNbMRYvOVPSpY%2FRkCrcA4ozctLriU0REGghXCl8m%2F0%2Fvf%2BF6fL%2F9RsoI3qTeIUzPlxnJtJPreRv2vDQ9U12tRYkHdp2yPeitT8ulCb8UKFCGexut8k1lvJPtofnNrm6SeN83t26aQ%2BiVdFyNvfNZSxVrgcTclaJmhfptdcrgSsAcc1m8d6dxx42G2q7OBwMm54YJiVZJ87YMfrNDCGr8JRDPX4V6y1ORlfl6svscE6O5qG6fyppZnwx7upcWtugl5V5%2BgJuqkh86tBr0LMoKtnOWGFUs6SMbGFv7%2BK6woaLb3jWeCtrPz7%2FJhNg5HdqcvGqsmRHOvK%2BacI5QHVhE8lSpU3r%2BPMpmAnj0I7gDwNpyI8166v0yrHfZX6lj1gkAdp01WvMW0mCIsms8sRWF8WVVKGnXy0UyohL7kB%2FaEoWsMv8jglNgS4%2F4U1j9bONthApaeOXYisFMTmdxQePNs%2FtcLKu9nvT6ZAoZ9H9DcXwPhd8Ri3cE%2BfnvtYsb6Jf6ZOd3Q%2BmShfZgo9iG5IyQ%2BOFezwHFfbjUFYJDOLpJnaSh8yDlvjOiz75%2BeGa7p5%2Bd54dSHZvcxCt7RNv5k%2FulmZclctSUDxRCpozNJdXLiUVhUQfjNgFuq7rTTNX6ccCMpvRWmCddJ8Jbd%2BZMNGDnNEGOqUB06rssHDpWHDRJottMJsrGCtdHhaZDI1WbTTOQHNcG64vVcrt5eNEOAJn2MNTrw53nk1N%2BMi4a1XciJ7NCPgxnxl%2FnQWNjvu%2Btv781uMIevwCMedlg%2F5h5FwzmdKb5ni7%2FOk8zQpytqmiqWrexpBHeg1vQvfqq2vYtYjAi8tA7WdhkG96XVUHt22HwPpVLOaUi5aKh%2F4a1Hkz6paUy0sGoJA2anST&X-Amz-Signature=ae36a9aef947ec7d4224666145551cc9cecbaf27039c5cbbbcea24c619e00207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

