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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNIX3CL%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T172909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxZbX9wz9vfgYt%2F%2BUtVpFlX%2FehlVG7J3wpCzAJizncQIhAKqmqKI6UsDcIQTNDCoxFoV6zzRUm3g9Rg32L0lrPyyDKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUBpiKfv4D%2FO%2FcSSkq3APvXO5z4RgQJGtVJ8zdVnoo48r3aRgfvy2skHSqz0u8b0wc7pNeG6B%2BW6iW2B2JIK9WWUfwyLR6lMXudIGGXExSr%2BK1hcdcglpVeMfmtCwM0t1cvel4YOaMa4P%2Bz6eamW7KKfdK5sy56gipZ3zsRiftmCVttPaSEaJ8wS2H3J%2FIAqldcBMOvCNLoZjwsa8WqsB5dm%2BoB%2F0KRfhhSkpO8%2FXBdmiu3M8s69Daa6HpRL8TC1ZE9n0IPZ2lUaDW%2FZAleREMvHW6kXV5Sv93TmpvaQHKL3oFHR6I3QImLqNaYE2%2BY3D0jCMtT7ntR%2Fd4xbrKneWOu3sW5dKgkv8r3ShF8Bk3eitUporw1Z2C26g22PP8G7ZQzeEZzQBbrpnNtpP7%2BNj3ekeJwJN693EC2kjkd7rjctRbmfsmE0sBWstRuqeOvRrvaJaKN5t35q3CO%2B%2BRcfhND%2BIOzcUuMgoI5G4Jm6VTGsG31%2FPVj8GvcURO8ktW5XLxAvbufnMgaVkQcsDKL%2FbooQfxGq04THM5nIZLGCnAOak%2BrVzvBjrtjqbJwQ9H5NoQp1uH%2BMYykOoquMSlj9eLVl6Ra14KaBcPd9dfdlJkL9IFJB8Tsr0tgSu%2BZIAnUdIsagybK9b1c86itzCvlJbVBjqkAX8dWtpIgOVDttZ%2BI%2BYDkk2bbo6U21Pzy383nk1BchnzYIDqg4vqaNYmRiDjBF%2FG9n2ALibdia1ZBf%2FMa2EWZwIJ6WFDDRZV0Cbx77L4A9ucdmwS17MxSN1LUW6eVf6J4rXUIG0L8njB6Ihqnm8TW2xsNaT728GzkaEA6QDBK3vW7AoOMkBCHv8jKz3GUIWSONMGxqlBLjo%2BPksoWCfqYfdxSX6V&X-Amz-Signature=9e9d1bdd4a40a4828fe2af4c147774c368a47c5931e256b0807857dce9406c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

