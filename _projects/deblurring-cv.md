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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQYAOY6E%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T213853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9vYCHdmSXjglNhpKHPXkmXg3nWd7ZOZJHPc5YPwhWkAIgW%2BBqCcJw%2BLyIE65t7fx7SUVeHqCcABD6SiK1a9pOQVYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw9rg96iGBJtrsyZyrcA7MTkUex8JkLp2BZ7Bo9jbLFn4P5KjrMxIo7vWMuuneZcGYCVoliCw4ff2mezTOVInq%2BT1hI8jowYCsd9bWSt2DylM5j%2F84Z4uiwjCG8M3HGsVHCsLsmzysKvAwegI4wJTn9ApOycmXm4EeNXg6zoLUAD5Sy90EsQHot9Q3pOO0JbZHfBDxyvfN%2BVauZCso3C7RwZsCiUIN79Jr2slqwVNF5Z5jNRfDkxyMo3BnPtG3%2Fz8pZzE4GIcxC0nJTVAo8z2RmbiD2Otg4SIV9JVvKrwft%2BMq%2BUpQQNkvhCsfJ9b2f1G7xgq3X0zIGh1eLReyK00IpRGStv7U6fLaXS0UhLtqp9Kw%2BCeTeLW3N3MByZb4WAPvHb2ybS2PbPSt7ulMFsJYPPF%2BsW0c3iURGA4Ko2VRa4d6Q6YLhbGT3UH3Ne%2FjDpJkPK7QpeNPEq2FKdohmQv7CiKzdxhtV%2Faz9rWdxLekagiKR99zK3VMT0b%2BFKD2VurDf3YsnfElXJ79FsIXIjLmFupdYbhNDwYtTpCdIOdCyPkJUif6PBTn2v9ZMAiOgISsF4OzkxTVwOu20N%2F8K7fasUZC8DcwKiTNWcStzYtzI9S7iM5sfN%2F3OP%2FyF%2FUsmqO65%2FYs2aL%2FvyQq7MLf%2B9NIGOqUBH6bQlJ%2F64AUf3klqgKdSGTaKDwh05Vb36bT%2BrSZZqUlrUTGIX4ZVcNpqG3Tg7Hr%2FWZTb63xKSMu2U5mBl8NimrBS7y%2FM%2FB9WMbXs25ACEnx87HTfQyCwju4lKDgJ%2BJHG0iSBVyixJrOze1Ng63pUIYhC2l7v6Ijwe09PXTKOyM%2BzP6EIF72BXFBuDLb9HU2GMPlf9AFh9yCoYN70yH2EiaunxNgb&X-Amz-Signature=3db964f529943e59cc08d07552d852b6e035397cd58fa6adb510a903582396b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

