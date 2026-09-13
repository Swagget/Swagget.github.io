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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LVCK3W3%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T215157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD631g9hha%2BCESpRaNxaxWYihFF8unb%2BO9nIM3%2FtH9nHQIgO5htR9QtfSix9JKlrvinSaNSw2FuXZWymZax6jASeeQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRa%2Fy6djeGyY2wM2yrcA7GbJYZAvPsInQ40%2BN76r3ZBCiQxUoLBKS3bJ5PfVMtD9Z1RN2%2BXPUAXUxhlN5f0%2BAZdlNEVpALWbHvSbRxhzYdUeepStNHP1O%2FZM55sL3FTcyNfM8tOfF7gpxQrV%2FCLTZtJZF4IfdpTUQj3I9jxxQlFhx9nGC0ra1yUGkavrjWGh6iqJ5FRXCHAjO%2B7Fp4%2B8ZU%2FVX4OSevm%2BKN6xuF4QzZCryTGgKo7rKPM4XtztU6YkxytgbRYyuxXxQ9I%2FATkhER1Q3qZJcSwk9VcZAvxDV0TKJvdd%2FUCe9%2Bsy0zBBVSxvEOtxxAQcThWcn4DThFlvX6Y5D5YkkfzBl%2BXJhR%2Fg6EG6Mb09pPOtqjFxBXM%2FaVM4O1MyE6WWimJR8NpmPtq4wwxqXxlRdkCi1r8Xys%2BGo17k13pNUTh3tNtKAecob%2B5suf6XfDk2kiRzvGPnZ07nBAtumlmFdc3xGBLDG02HJ7cndezkHQO9JNQ9nfhilwrH6qqjNXOaOuw76OD4b4l9jRoTzkMRhUNonnIXcAXZ2HQpbom67rnxXc08TCuhX8gf4n9cYQocwChaVonFzg01YkA6ONCRBFnhgc50RUnejjPjvfuKOAV%2Fmf9TRNE9vNiF%2FInxocu3uJVaaLkMPGAnNUGOqUBfWvWyc9OmvagVPwMrS2k9TPAXdbUZb7zwNmqj2HKBDpKVklYH9ROG0DM7ivAwr2vFtJg%2FDFNbaaz65alkPa3FRMgxEE7MPCQ3%2BkBr3BuhL%2Byr1GSwSHb9C%2Bmyrw8RWCTt0VAmNdzyvlQ4%2BWhvrKa8rv%2FyhaZN7t%2FfMzdtoYCh9TJ7u7yHiVP2cZSxnJA%2B9uotaZCnu8I3Wz7D0BSNI5f0nKboTpJ&X-Amz-Signature=cde39c66c8508b48dee29e4f7e779e9796a8d61fdb764433c8aa49cfc426bead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

