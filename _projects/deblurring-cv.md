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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YFSARD%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T154612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmiRndKhb23q4%2BpNYO2fFKxPUQ3lzcQ%2BuJdwTMM1fpxQIhAJ6r5FnDT4T9yMWnu0%2F1208RZpxUeap76THrtik007VrKv8DCHAQABoMNjM3NDIzMTgzODA1IgxZyhduHN3mR7lNbGcq3ANRZOpDshpH7gUFdBEQOhLmzrnoE9KqKKg1Mb0SoXK%2FQ3BmlO%2Fntbtyb7oljUXcC8BCUYVkl2hkdn6WyghskCgDd%2BgE9GYob2arlI%2B2yiJdGL2ayZDyRWOePpRCvhFvyhV4px3mq37frgraNZSDy7QQvF8q%2B8x4QHf5T%2BVCO5MUqjzoBA7QQUwV1rRymm64T19Up35VwbPH2EVOXrp5jfPbpmjukVLi0vZx1zFrjqqT3oX2nEkHuidafFKZgr%2FomX4G8p%2FZLG7M%2B47qYMkc0XpYMH7KdV62bHjcz93oBfyl5Smuu0O%2F06oMtYltZFYRij8gMHScScVaw%2Bthnhxufq6fEBnop3CL3YSDUsfVFsPDCsz78xfQ9TepURee8WyNh9TvvOKqwrNMI%2BSI941MXZGxZFnu8b1fo1Oj%2FoUvGgVnAiyyAAO%2FggoXKxdFiBuC9fTj8xpMucLWST%2BcWkXpw5iR4xvUNTEP98CYdnVQsFi9qYiwBXQtz0rNeRz1Csi6FWJkFQRQykpMRfmCS42KI8XhiKQ0Bn2yttqkkE6LRx2GyG7z307BdJN9FiC1L1WRKN52%2BphvUz7ulXMX39EmVweusXelHxkFG1sOcHfHLHVQaeR7CjRET6DlyHt7SjCuzIvRBjqkAcjgyRxRaTh43BKXS433ZHI8qnyNBm9n%2FlMeauUALjZuPoecHqNn8V4v%2FoMDxx9xni%2BcriC3I60naxBcVuhgcQcQ5vR3XLQqYIL0pmgYVlzFuBtVXK06sF05lnF%2BI1YQMUTVlwl35RaTAQOq2iZwK1%2F6mLKNBauqd8GlOY%2FxEdSialI2wfM2tYAQzNK6R%2Fc8jNDOiYoSJsdmVPbgrTp4QA2zMDIM&X-Amz-Signature=7a5771fd1204fd90c0a31a80926fc172d79f15762fd156d4a46619bd0cbc72b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

