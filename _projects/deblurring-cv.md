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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ANRIAHM%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T161718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBWisoNAeOfUrNRc4zaqPOlnXA3JkP49GhMdzS1SFv3AiAP9WR8cvHh1lxd%2BxCvIa%2B0MDKcFFME%2BpbaKUx95XXI0CqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2BBK6WfpDZw%2BQsDRKtwDsJVgoS4%2BsHd51tn6FkycSI%2FFiuOumZiyTqcCEKl9cGb77ZODbTYPUN0%2Fw6IoiI4Q7Dw%2BOueSt%2BHvTpyYH9MqySxybeUQQ%2FNjwTpgHU24%2Brag1QApW9yuPr35e6qlbQicD1RgSGbElDssi9EMQ2weKbVyI9Pu2xIliWTcbUa6vLi%2B8edQMy8jVju0caiVjeL48ZcS3TtaSg1s8pFvEOd%2FcidzOjFMru4gAXD0rTg9DpUjzMB8kbwIMUrNXmd%2Bpoh8QOVzTBg0q26MLoj2u5qNt53tHl27jzH0ljO7WxYEautawEB7LFu2QMYamicC6yVQ5BXecocGOFTApuyDgCzzE2vUFrqlcF%2BpM9g2Xj7jk489bL2wQCjQLkc5hWTXGyMZFWV%2BBCOVOH21thIJfrXvBWXf2jQJrw2qQuOGz5Db1%2BkN8eo1eEzgij51HTR4JLZs36BQNVQdEN%2BBwgwVQeReFnlLlrJC6a6MEo%2FTB6ZhJPVHxi%2BRmN%2FvBWOJb5fi0Sk718WYSFSTibIbeN%2Bb%2BcsLOmZIjKcV1a6f5WC6L%2Foe5%2FLIUvIx9EiZ8gplkLonIFnlq1BvBXEyQCHwzAa9qHoMEytMHWUcGWl%2FDnB%2Byri20IlngLXDCzUjJCTNsBgw%2B8Ch1AY6pgF8D2eE4A2ZTH90VmYGQj8iNjdYic0%2BghCEAaNEWYNt7Mxd6WeKwFj8gwgdxd2Z8VJe9uj5zyVTEPfpUg0ZDUGk97nSURrv5WZIs7lQ%2BRYytPYDjwShvGw2sbC7r1iuhy0gVlvHjxEB8%2BwaeT8OX05vXqVqPSuMc66ovVDzOSEjH%2BfbA7r4VBto03rpz%2FKBL7vmQfjNEtd3ER641XHagB%2BblhYBT49W&X-Amz-Signature=aa13568a7a39bf4257742f507211f8ecd47fbde3a6e1f52bae578561c7b4f95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

