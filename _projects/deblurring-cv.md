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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKN5YSW%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T021455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH0H8cVSHuSq4whKgPSzm%2F9wf6IT3Wk2yF5q61XmcCRgIhALuwUQnS6FdLFfulg3nPwTHjKjfvc49hOT1L9deZjsCWKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw53V5jgRuBGC1PKX4q3APQXaatSTGgZhZ9xZY6R4BgrztE76UUdlp15ccLWShNBXoH0SpssNIm2%2FmQeeakRU9Mzx4%2Fy6oWAF9P65aXmRXxSOaoMj34QfQLvRG5v%2F6%2BI7KpFqbpKr61aOUIUtfsUV56lNBj3E1fIUQXo8gUFzAWgwNPn7lfWU3mlgj0bCwvc%2FzgR23Pv4G4KNgjn%2BquRG%2Btmc86bamLJPRiKWhTGbmkvqwerTrBCUNfOYy3byGgy4mIm7cMo%2B77%2BeBBshX7vuzpS0aW8Sw2W9rTDp6H7uslBdPUaI7gClYy%2BT%2BP2ltGgF7jNWvlse1McQECIFTCZI9BiDWVWtwVFMQAhciPw3hfG%2B%2FEpf4OMyAOC%2BjUXmGdsSZQAt0tZKHeyAf%2BWQDCsT1cV%2BjKKQeUdStuZQHEzTbId2bBTybq6JNqLWt4WJcknauLbPSkWPnLlz1Rzxop3K5ZboIrarOgqM6s04uONHoyrq1eG50Iu9yCjsEwnOatSsEUFva7fZNKsSYBPwtNoW6VnMMF8g5r%2BoswR2Dgfg2o3HONqIM9r0qToAm7B3XCN1yMbdf7WREJFyT%2FvCF4tfnzApc2TnA9e%2FqFoaJT5XVMc0C9p%2BiJblrfrrT4jjsfsZz0x%2FmCE8A4PC1QcjCOsZ7UBjqkAbfsm7pnW4nibmGLV%2BfwLchj41mWOYmbLFO3E2kMPkHfrdeFiRMB%2FDS3pkd7Q6tmBqmK5vcUo2trcD3xGTTTkqB3WVFjPtkwp3WfKbrCps15WUSiTBlEt1QMqJxGMbqF3%2BzUpVmWnXxez5yJobDowgicx65PNvlOfAv6AlymXlNvVMmk4R6dhLI%2BynYeWpyV0X2tjjxDw1Qapqj4aA8EZJSjavSY&X-Amz-Signature=a294c02ca1e38d6ea3686278c97c670194347472955f706fa67a7cf17ffbe7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

