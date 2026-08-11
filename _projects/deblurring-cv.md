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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKRMUKD%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDA%2BQisMEPNLvWoi1kwsg6T3zqL3xJEjULRCPGzVeiD9AiB6ZIK7afbGTMgtnzyBLkcBpk8J9Jc0J2XgKyli3Ou5KSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPHWJnK2UVpzD7aGuKtwDGfF1CZ%2FtX9hJV1T0OISFjILFVv2Mm%2BS4VsAYBEAk91mudPYF8MwusUnDGOtEixmJ1s1cFITt1tG6MxcLaJYEmYBjL5nJ22BEBGead%2FOa6nkcZ0czZN8Gm4gpiOSpgUR1kqdWK4myKn7uvS4lFSdBv0CB6sov76NZSRPLko6KEhWxTtsNATHFd%2FfcLQzbBGWpA263Lbjqd54pfkxdyKZWY3ASTSmgbHpNefpxADHWYRtqwUhtE9E5VksFMtvfnUd7LaWDVk6XvsPHhj65rWAiqzuQvj59Qpb3T0RmFt9PBSn3KH%2BK8kK3zsIV8cJHJI2hldlSus%2FS%2FYeXg6glsEcCg1FN1xiv0Y3Lc2jNKuwtVjWn%2BM2Vbi7sjUaZAvExcq8YZbRdiZCg9MwhI%2B8djqEzwszkN74QJhZhVruJisyeS7aZfu3zlKsP3qpBeGAcigwjyV4iB9dLPKFAOq72yp9Ljo56kn3Tngi7H8bh7KPmsCuSpQGrvtZvKEb5MdYepVyFiCERWxCb9Ie1Z0pornFqMysVXZeve5IqLB4o5SSW458zeoi7IJljxzlTMu9lRm6BMFtBs85Dqsexh3L3SHANpDDmHbywexMDf%2B6kqzr1LMnpw0IWkspMZG4ROz0wttHs0wY6pgHYoesibtnp9Qd1RIs1MdW%2FV03537ztyoCPKb4IIf7fo%2F8GyrcfI8PDe9HaJKDgQLxQoshJyR4iXfgqySE57HWklT7WEfOhzH%2FqU5ESQq7d5ASkIvimOFwlnzSLfwHF%2BAGb2uwBmvqjWCHc%2Bbc%2BH0Yw4Ubs3bAWvIyhJd%2F%2FobxljNMeTxH93GIjNiEZ02Y%2FMrJ2gKeJVbtt87nmLhZx65QTbygBhaRP&X-Amz-Signature=81e7af41c7a98ce03f7da58f68ef7fbe74b96929ade9e9b928fb0011a951f6e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

