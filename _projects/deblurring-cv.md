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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGVFSDE%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T163828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVeH1RP35wyEkKS4KRxQyND%2BtT1jJVTR326HTlfp4qkAiBd4YlnfZx7ygDZFElctzuRXemg4RYiDZ7Gpk9%2Fabl3ESr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMYKL%2FfloLybCfXHV1KtwD6%2B2jSvzaAjZTGL7xCj5SMmUDJXOpE2V58viWGP4UTKz7xq8oRGRODcaOadNf9RkDy4QVtAlG48zVAwrxfLNQiJRaW8V7PWmyYsFXT%2BvLwBlJB8RN1FzXYgJR76xmA7RVBnUuctZCbVAKabEAASh5btPkmrJr1uB2d2SK1F%2BSfYMtyAHVi6l%2FUCdvCxnsEMY5kXL4BJXo%2BdWWFKSvZAwBc2mlcT1sjkk5EKGE07OaQYX186YtztFBbebDt5ddQ4I2RpdI1CC5u9XLNJpLvipenABduCcZLSDQxTZl1hhJekkhUY1H8rQlclQDemmDpukSdGtwKFMqVgtyJiaJnloPdntOT5RX11iMT1y3tihq2k%2FL5lzPYaespjbOBY9lzz8f6xeBPmBzMrsB7FhZ04I0KjgDttIDDrAAdE4puol6%2BlgGpLsXfuylGoVC392hdWEAAEb6bBAugixVSAgK6z4ETnsROB96AP6NQJ2PH4np%2BITWQh0c97QqJ59LpAC8e%2B8gwjAfId3MXZw3lhsb0ll3eZrZDO6M4NVlntwQFnfzsyvzwS78RaAeZVzH51bsbU6K0GCjMCm%2BtMIo6b39otqdAK9FX%2Bix1O0lMtf6Ktc6IK6RmsMjjkjMWhYyjVAwjePX0wY6pgF7wOf46Z86Cq2pFEcsc11vCzIp9uIYeZelzbJhPpAOzuDCVZRUfiOceumGEW7nVbG7bkW9mXxabjgvNAiNLt7%2FzTJV1uCGcl3ZoC0ewrfUcmvY3NzqoDkbBIrmjbZuhFcg4DSyIldwxL36bfe9kb%2BPnvWiF1d4ogg%2FFGazq%2BhpoR%2BP8fTMsxk3lkzy0hace0%2BZLVRUAZLvGhPwN52toWq2d83TGCRj&X-Amz-Signature=a2362372b4dc378d1251e5592fb052d0f689bc5767bb319add1135206aa63bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

