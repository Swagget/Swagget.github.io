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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3QME3A%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T052704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvttpWywLx8yPTDocsLvWwe0lNOtZqyvJNtURav4aFSAiEA5HBqNXyoEieY2xWdo7UR75slr%2FPMFxeKYX6nl%2B3OyKUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDC61y3RlqAjBeroq3SrcA47UAGksZU8t57kuXx9U7OCCpTLL47wOynbKq55ZDMvchpUhh%2F42JU9k4rI%2Bhu0yKDzLxSKpyQlaBIlqYLrTYnPy83GEL6nVh%2B%2BHydRTLBP6zLABTN4GLCqbPLArFPLNrEUzRDJ7P9tCbDkH3CobXHA8bWlwUm0dRHzp3lYKGSaavlfdC1Kc7bdoQo9M4tmPaNMroCW%2FgA7kiWl5s8edkNmq72cakjg0Glr6prTLJiBYZOl1B3D9mU0HQsqwF0pGQOoOPtyDZH0ZXeahwS5DOXAKu6PUYXDiCg1h%2BDnj1yyLCNx77xO9ZhgoLdGH9mhQxYhE5ynGHJpeKJH2yi7SK4Iybc5hsL1uqal1hnIg68hG7rIg%2F1SI2jfL3WMnALUR4JFbeVQi%2FlxnJOR%2FjpqTTd6TB%2BwUG6VQjg9kquZxcHBQzaNBV5ScEZZq0qICQOzTrGe2Y6S7PB%2FwBU4Q6PYc%2FA4UONuhYITTrR3RQSdo%2B8sPzjFbzzXnVpmo8agVePoAWJHZio8gFSF58B%2F9emD9dOiJ6mZj98AleXmhuX9bJz678Zzp2WOMDybTOsO1lhZ5yqcxC9R4VqKvd570osJCOSXFqJ%2BzF9PsB0SVNvWZTD4evRTPiem7pZcc5jCmMICzg9UGOqUBMhlvZe16IBIiLWwvhyRjewcNmTEkAHr3LpLVuAR1KUA4avgnyjxnVkZ2idcaKgv%2FysDRlJZr1lXvp9xOTTYIVQwQ%2FGbG2G9XfIYR5mYJ%2FYkL4xsHUrDFbvQO%2BPmvcNLhf3zP0sp4KKLJ%2FLCpPnU%2Bn%2BmZAsoLH58dioyHcNzUgflPUn%2BikSab8Snwa3fFzsINny2sQVJEUQ2JNY3TK%2Fis9jB6s%2Fw1&X-Amz-Signature=3b6649cd20756c7116dad3a8f098173ced7c97f95ef5d5f41b2429cf49e317f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

