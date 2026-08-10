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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3TPTNRV%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T105425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuV3ggDGwfnseQ00wFyOul8cQ9lmBY0kCPbkY4aLB%2BIwIhAMAPUVvGe70GqOiSWa%2Bo42%2BhKdAUDVGyMYW7pV7nVL%2FjKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9YIPVoDQIGWqZlaQq3ANhCmZe1XgLNWGH37KXhs8jOOd3IglPGjQhShBcX5Sc%2B7kzgismoUVnyR5oY4FtFmvxnDjp8QUnyQ40Id1g3Ia8CWkSc2%2BHeOr%2F%2FoVHPWdSNV5bqPvxr6aCkzYWYZZjf09GdTK5GCOU5i3C4l%2Bo53nq%2F0%2FQDoRvnQ%2Fi0QpIWIngXFrB2uuasfmbMemD4L9X4XoFVCFrKL2QfqtVH0BmDCTpLEnNF%2Fz%2FqiH4p%2BIvH2zDnu%2Fqi2MqIWsTDHy5OaGwUF%2BakFqfXPdWQHMTjSOPxMpvmrM%2Bm0dm2OHJVVwJ0suoig%2FkpW0%2F66ojHn9sMDRrnTk%2F%2BXuakZhTmFpw5VTVki0ARZPRQEuUAd1F4mNbCEadHbm5xgzIKu%2FsyIyzDiLNhukklcN96wPSDGwAn%2Bimp4LZM43haqhFr8W8pZKIOWZXyWCsnpNHIRZoNMXHjo4bR%2FiALKO91Dod4bZ%2FCQir2P%2FlYMExlvv3L9EkaIPLtFIQ3lKnCelvzCng5FI9e56ki2a%2BEw9jAyzMbt9N73MpX6CiRVxnlbJvGRk7OTtwOf7mf1kfJ78BR5jHiQBApf9Q%2FTiBCCrLNwM8S%2Bn9ojWmCAGfZipq2TcOHcGHr%2B6FjGkf7DxcI9YCWjfwhD8BcTDotebTBjqkAZZtKWTAUG4Aitdyw%2Fsb%2B1DvLta1o4EwUWnPfOWxankVjBcr80hGHJoyTqRZfaS1PcqPOcI72R77O27dgxUg%2BPH6ZWtN6NCysmur2mrQvphJFSJK6XnP1MhD9hV3kKOzMstiSp2vsHSapKRuxol%2BxrHrT9BCCdC%2BPQo%2FadphZWVIVE0KsSGnNFvYi0AzYdVfgTHuohJKt5KjuZ0q5ZMuHuknjbgf&X-Amz-Signature=a983abbfcad2f0a25d2e597b9e04f86aa0e4b72fffc30c33f057d6e6f009b627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

