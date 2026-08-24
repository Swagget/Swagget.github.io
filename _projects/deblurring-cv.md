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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWWWF5Y%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T122037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD3nbBo2Gu1mVlEKvdOWtu3C0SviAf75nTRHcv1Bw8F4AIgNJnowg3Lq5QQqq%2BuMXW609eYUuz5UQmBpYpQEgUvOKwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvBwc%2BVORtHSz7pLyrcAzUJMZzMRnUV0o2F5T6CyqigaMwSfYuF4HzxZYGxpxUlUuOkp27YTcMQgTKzg3JrbxoxEBPujaEBPUCTbJ19AmJ0vcNtuBxkY2mclOA9yVXqz%2BaC5Me%2BRJXkrtEh6R0Ov%2B7eu0J5ds7YJd07p5rru%2F%2BTONe8IP1CFVa3t1aAyuOtZiYKc7%2F7iFbfmH2%2BsVTGbDKoL6P%2FW%2FSqbIlIGORPHwygGY5YSYJCVBqCEGe2ca9aHgFZcWidg5jJg1X5dAIYzFTxhtJCJ7WWP5AcrxbFEdxJrNLwbA2yjweWBSEYFB6R%2BhUhZ1mx1ExpIBsNKmn3AUYRizE71Tue%2FccY8JcAZRtVBPJ0e8oTMKlu9L7Hw5tTyjrzfRdEa1IXRKUh16u6zvGP%2FT2TPhCjraXat0K40Xo0VYZRNZGfPYyE0%2FSh9XNW9drH16JBPXu1A%2BZV7aBd9TRqYcsDfYzMWOEPQOT%2Bud2ZzUjdayZ00cDIev962guBy%2FPr43RPMc4eup6gFf0KXRL%2BPkr%2FTFdI6CRmm1YBlzzzHv5sSSjpQHcszaVOJ6GAbzuqxjagWHtQizyu7P%2FFjRIdFpnXKd%2FRL6HuVE6ASZ25zx5nOZTYGIqGHAYCL14LLuWDogkdd7pDfEzYMMrpsNQGOqUBayCXfAVTVtKzCBuyLxtKH7fBd6czcwcBnfRouEUiOZVmAYB90hQXCdMk1P8kNx%2BiTSut%2FvN7PA9AbWG%2FmkCdOXgWecMmLU%2FwMJNxWko0I84dBagPcrVh4enIiWnof1dffKxPr%2FcCDyQlcj9fP2rKI3Mc%2BTgTbkbULI8I3T0l01skCyEEUKC9iYdBWvC4V9jS9CQtHX%2FqiLdIzHVyseUCST0gUDHK&X-Amz-Signature=82a00fdb4fef57ff463e149ee9437ae08977df64b12333bd8412dfe53fa37365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

