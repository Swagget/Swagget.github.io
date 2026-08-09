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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKJYEWB%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T082706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtkvAX%2BKsAaGVUR2hI1A7aBDioQq4yqF4ZkZjfBogvvgIgPQJJjYksct4%2FpxQdGJJu%2B7%2FVKroyIGNFQM69TuqF3UMqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLiT7d6EKy7W4AZBSrcA5szxDYrlSUgLNw0oPCGZzRf2Sil4qUwnQSwSgANdwJSVBaDmG2k8JntW9ipU8RZQgOgBup0iy9M8JkybjfJ5%2Ft26PEL3u75WpKZk9tzo4zqXY45f36KF4DkdawjzcwqPmIehgSz5AMJ6bCJmmN3BTadPjB1Sdb%2FWF%2BEFlH5ohvQ7lG623%2Fo2YqBSnol%2FXXeyD6z%2Bs41bsTb0mkSHHEjRXPypDxc%2BY3xQhmujQzMxuXkWq2MKfZMtGJB8kHEAWxPMbeqc3ivbwudzoz09REcEYZ5nM%2BigxXt05twd1un02BIJPnU4r1I%2FkjhK3etJi3aQJkCWIzsEpIThA1a1%2FWjYDU0nkZyYXIw6dpe9dskqVT3caenuCVPGCH0he9%2FA%2FOYxqTyhgChCsNMLqJ%2B4PkITSl0cQucYY4iCSk41IN8bAeE3zWO0HImYpHNYSc4UwW2WkiIfkjngsQYJF4%2BczEfhq4ZCyJLmOktzmtksLzReGazcc6QqZXrgUW9kAZpRLedXW0FETY3kfccXuCZ5p%2Bgbq%2B50z80e7JpWBq8pd9CFPphFv03uNTMKbR3kJa%2Bt9lf16gc6%2BewANnXPXDdin%2FKt7dxO7%2BaftXC2M11kfiTq%2F3wGGYwW%2B9wkup8vTsUMPPx4NMGOqUB4RveaivSaCqZFZZ%2BaUKB6lhlX8Fvf1HG7gV1vop5LBm8IhN6LivCNVvymyCkQ4s6uYAmfG%2FiKil7bFJXQKmpZBPyYV3lbMJgjE7Ty%2BwCn%2F0nHCQTWhbrj3l0ZhHRxSiTIhxTtqUSlZuxAv%2F5JRQvndJWANdNRhWfJm%2BkpM47Pz3%2BeXv%2BcCKqCagXbKtJHz%2Fp78j7K4QjC%2BI0kuiC1sHmnaEc7hkS&X-Amz-Signature=1b92405b532f916cd4c21cbfb8d3d3de092830e58312a214c3e6ebb845d818c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

