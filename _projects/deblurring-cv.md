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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTROCBOV%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T114737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC6W2hDCA4yADLzJG0ZxcBYSlZ2vfP1Bf8VymqKKDeB3QIgXL3M8sDRetQqaJxRxzmYvUnoS5cZZcAJmUAXW5jv%2FcMqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCK9dqTagITwhlsrVSrcAye6FUbxy%2BeBh60qxayUV9RwInP0xPn32xNcZqmx6m0mG99X%2BjoTQVl8PTEDVstqLc%2BMB4m0eA9mPlD5B56448cqhv3Kn3BgPBGfYl%2B%2Fib11WtJ59gSjLL6rlMRQX9U39930ezFC%2BhzLHhWI0RYl6vSuJSXt0jCmcAFvDtcLp1CkThAmjuS5ykpR%2FD%2BwCKUuveFpL%2Bz2GtaaIM9igElAENxw40ZbxNypfAbzw5u891zYnwCpFyaQZbK4loFdLGhYCh8wm9M6fKSG3dvKkWAfRTPTwx6pkSIvXT4TaSOK37zoC%2FuM94iX9WU0Rj6ao2AQrXd%2FuRrcxiDcoGFfe9zl8ZwfihofnUg%2BKL3ZAA4xlWn5EuOiKn2SxV9jBtQ%2Bnk9NcDd8z4xacZa%2BM%2FzCbmImvgUOMmRJip%2B%2B4K73tWX9YlZnkvpXG9O9nOHWPtbP%2FBEYl2VOssRb6PNgV4g9J4XmSk%2FEYUuuSM0eafXlVMPA8%2BBLL%2FGlm3UU9JtACDsZGvHHqFxDuAmuZFFDncjwzcW%2FYcxElKZ6xQa6vg8xOJyN3zS2pxHlBXtsSirwFAl7NFZ%2BeK3NrEiQ%2F4kJ8a8O%2FnlGCe%2B6S3hHixrfsOd0UIjZoStFS2gSf4GusVMdIxuMMMep5dQGOqUBMjPHnTVJvjAKVFWzkDp8EPSbs7l9aI0jJwgaGPltvZ6cErDFHjwA1pFRaqdyCVaB3Sf2JNljJ8hIifthbRns9Vx%2FmrhtzhGTX0j9PRMvPIX6OYKhshvgb0JzjNB5H%2FI%2FnSlLUwfn9kRW5OvA7JWMRm7hLVSr0dENMbstJ3CnKWze82GUFKviQoED%2BZBDw0y3egMtIs%2FQ1k7Wv5EL%2B8Ew9qXuSTkZ&X-Amz-Signature=a515c3648c581698b7bc3b85da80404f4223dae5557c86d21a6338588fa737f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

