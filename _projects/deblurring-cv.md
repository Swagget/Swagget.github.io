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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TAM3YQT%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T115424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ifzUkZtddRVbXef97kYDpifzxn%2BWVRcUfdFJoX%2F5ugIhALEwzm%2B2o%2FtUR1brOzleFGmU6sQLUmSDKNACeEQ2HWbGKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOtjaMcqOW%2F2eoNS8q3ANIpUO5M40KtMHnmUKMZf33%2BDvoHl0%2BPjfaKNlYCrNvVwWJNM7VPJUE3gU8ox8uNfm1KHw7a9KA2%2BuQqxHkWl6omGZDjP0puWgXxY4KAUQ4vCm%2BmIM5oSm%2FeszKKOSoxRub%2B9u%2F4ZZqKjuAoZ36l61Jp3jrbJAWAzrD%2FvMVUmPamkqQPzK0Lb6W3XXqcRMoTki9PjTgLs6GFjW%2FJzwT5cv%2B%2B%2FyKS%2BHSEUf088fawpZ86f4bDIJKTcatqMuT5LIFfEIB3fD%2Bb7Sds9jVsI0Lw7sPLz3K5udqzbqoeTpRCJ%2F%2BpEL3lZ6xZpnrQTZABWXkvaIwGmFdZTAb7LKFBxG9XbqG0EBBB3ntpvJQmiqrjBw61gFpRZJlQfHiLR60x07cYMiXM1w2Y1LTxd25zhtLLIRTuZL%2FQ%2Ff0bcDxIxF1Hm%2BrYC2dS987Ggx01u7%2FY4qG7HVqrjHRAW3Y6TdpzNA0FLfR9IuYEcnwct3ADF0OCYgwLvKAqvIcSNPrTKDT122ui2ELkBQ00o38JUDj7NREVOmnzc4F0jvAVBbmmWnDlR6rOq%2Btk%2FfcbZl80tKy2tlyNzLa18t%2BTJ0nqTs6iIBnToLL8sH3QYgWHniruvzb6yE6IZ7rfXhJS%2BLycxDyxDCwoYrVBjqkAae6t4Zx9rKme5sedSktGG76WL2ns%2BpTwYuwTa4fDmbMuHi%2BLsozEU3KtbHuU5qveB7wU%2FKnZa7l%2FQ0H4n9%2F0fGvxUjVdqByjL5oSLucRqMvTlYHPL6%2BJDHNtsPMILmGStMMbDb9JQipslZEavuMgxR7sTIpRlOxzShcI%2F6yym5eo03xkukMo%2FjuCY2VzMujPhDo1g5XAbC6BaHnohDzHb58KZgs&X-Amz-Signature=bc7fa9f801ab7acf2297a6c74b0ae6039269f5b486a74fb61d5f00b811f24ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

