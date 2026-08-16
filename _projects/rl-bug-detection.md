---
title: "Reinforcement learning research paper"
collection: projects
category: research
permalink: /projects/rl-bug-detection
excerpt: "Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs."
date: 2022-01-01
techstack: "Reinforcement Learning, Deep Learning, Fun!"
source: notion
---

Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs.


The idea was that reinforcement learning could also be used to understand game environments and detect when they were behaving erratically.


For this I tracked the gradients of the last layer of the neural network and observed them when bugs were thrown into the system.


It was observed that when a bug was in the system the gradients shot up massively, and this could be used to help with video game testing by flagging situations where bugs are detectable.


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2LAQIA%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCrcUDcYDbfiu%2B%2B%2FRs%2FgrSsB1EJSJGmpACtK1YpLPG4QAIgJH%2B5cmD0kEdTBMsaa5hwU2XV%2BcbFu%2FA0LDoE1HhRQ28q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDJNda5zACBnVG1l4zCrcAwqPeMYc50avgNdp37DaUqqzNAfe6tx6S%2BT2dMmPPQAzxXPG7Q2di7BXZfvQ1%2BIkGAtv8WuPcKv8kZq8z2kDCRDDohQVllP4f3kCA1RYnFCaQYhQPkL7FdgHr86AoUU%2Bws85naLBXh3v9x3JmprEXWk59kKGopaimo32efEQm8oxNmmS5FxlGB1p6yYVq5TtNj5NyzWuu%2BdeVa1dvouHtjIYyAB5yJ5gjKGpXMFhdsBeqj1lg677jQYdcQe33IrRAogF2xjOQGrza0Kwu%2F2ohKOjdl6SFWVsNoQwhXcJMSrtwrIK74cLdJzKpnOyRJuzCLcmbAHyEh3%2FETMYG0VDs5Xuqgm7ZBeeqN0bkDzlZA1KllfKGQ7PZrovifj9kPATWl4%2FjOdHeDroeulipwT2Q7IxFC1l63qQ%2ButsrTKo3MzNHvwXTZu5tqGzQYI2WJx2jal0CKQKRI2%2FapuvBlc2SyGMZNzgoG6jALZw3Rzy4w2w74iLgjBZhQY7GG117222izZpf1vMFYPTmLQTpemjYvzAgMN9Az2KjY0TkQajKt1wJsY5beIg5tnCSehTmVK5W9d8Rnw1J6TU1gvjpLLuLYrID05sPostfNBhJGYCNUdOIWyCM67K%2BXj7h3fHMK3rg9QGOqUB9wDRb34r11V3VHlA%2BraWOp91Cy8ENwtjeDY2RZYs795hWJ3FkHXXY8UeSje2%2FSeaJe0Yt3WcDyglK6MnPtM8vzVNiBBNpu7JZ2H1mduCpdZYtycuY%2FVj9pEP33YXKF1uk%2FtfL9yZQ%2BHGEX8wdmmCJgaBx7k%2FhwzyWGsDD%2Bm7jTMhq16bT%2BZi9ViW6zxy0Z3X3%2FG2vQivUzJEtgTF3kCqI9ZH2r%2B0&X-Amz-Signature=002b33d495d3cff9606e98500eb06e0eae83bb474701630f04912a22a77edc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

