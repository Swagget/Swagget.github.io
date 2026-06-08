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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAOSSFW%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T213059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv5B%2FGOpGCcB6LrHzhdvgUvfdL4ZpUqtSwv2Ew9wC3PAiEAol33T2pbftUp790ml2sJwAQsU4yQ3DYX5vjtQUIEoREqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERy0CbXHYZD5YUICyrcA8t9%2BbmpYgfLquuZB8IAGs5fQoh7eaeR6kG3AQiqdsvxIDDIgJ23XTgKWAZ3TVKmFyoeG1899o8CGcLzapUfU4EzzUPTN7uM6tQRmKU6DwoOG45TsBGtbVmerr3z%2BVn5WuXAFOBZnQGg4gN8hahYEYghwuey0ci3F2vXU1ebUSis6hLmixo1u%2Fwq5jQ0cnSHqg7GGfiMCPdmExPdNbnu6KAamYCW0s5NFKDzt2ZYwA6910M6Rd%2FITLMYQ0b7kq9Fh8XB1nY1NyHZlX6kyVFKkOirlBqwgr9%2Bm4hf5E7JgZiU9T8vyaHn9bsABdur3PKWdEnu7J9xa2aCYcuMEFhvM3kBKzasxRSNDHABL1fC%2FA9w9VodJQ4qpV8y6c1xfFvJPd6Aelxd6otup13HvQrk19%2F2CRyoBtUKkIrcK%2BTqSsRJtlm2jxrkJOCfsQjE4N6uCvDB%2Fjiy7uVLHueI2LlA6EqqLoiPlBnniCa3W777ZOrDLxBpMmN1jiBRDJAD1LYHw8hjxEPBI%2F9dg3baoMcSPVMMFY6WhkdU5hEjXHZJx4sy9x7QD%2FAvo6gASNLjYuXoCrIWZ94oq70O44%2FKvkDiwER%2FyPMgtvTAq%2B3Wq3GdS6w%2BxJoxOJQseOXoDee5MISDnNEGOqUB1L803JceSE42AtXRyTilR5GBGlnBAUP9GLi9P8CSUPXzOp49LgHzVixcBrnX07n1kjMvRXXP5CplzidkeHDPqzvwUOa9ztHXam9gCTQfuicv4qVQyKJhveePb3B2UJyYSIugeCKJAws8bYSaRKIlgkyXm9X%2BuDUR7vpnVS7M40%2FG%2Bt1UfzZMd8mufE5LNQORCCQS5g7cu7WJjlZJdJXABuZM5zuE&X-Amz-Signature=5ca2849b1297f6ef1a3d333ce35c18dcb091c851afbf325d94a605cd9768d5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

