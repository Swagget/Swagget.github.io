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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANQAZXU%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T213059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcO7OowKdf2ouBZsYz%2Fmz3y1CCSiX8kcKbsYbLWGHkNwIhAMefI1dc2Q4y8QlSDUJwmyE53yd%2BpmgUbKVrdWkHNmSmKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRvuuzMMm02hDCZy4q3AOyxKNsxnUv9VRbz77RvLKWjT4oSzUQR151Zx1Zj%2FQQhjgN1O77A3fr9NQd4%2BSuIlzkYfgAQiTlD04p89R2JAiI0u499QYB18C4LuzAzO8Hg5RwdTI8ab%2BhWuODHSdCdRxcxSkC8gEM6Sl5LvKBSz9O3Ygsappi48DmXQAJzYlXZN4HXLbNbCAL99GWXDw3%2BvuJMC3NTe4B2lsB4K0aZ07QzLjHwozvDET1IDiD2YyJVZY5m8AsDhhkYZXAKaPoJMR7wyNjm7RVLmbZF3aputHRyxNjAhQ9omJlVPUrz9zbPRJsDalbXiT4KME4O5Cc5ZyXbFEDydy7RAg%2Fo2Dto%2BecW%2FZX%2FyN2E6P1plgxgYN6pW9sriMZmGScqnfL2O%2BfuaqQvHQ2Yg3IU8q4XSOp7rLg4SM%2BqVFP6DcHVlfN8VrSGIIW5MZfCkJ50KebzcXadZd%2F%2F1KER1bSv0CclBlLbbYW9cDo2sF4VsT9DY0G9Rbq0H3IZSXTDJCEkDCla8%2FaAThWccImMMJCMf%2Fv7YkpyujO5ogLrfKwVOOQnm4cVbN0Hw4NuWgH3hPCtLMBww5B2ajfNkKACDI3Oqy0MxLijzEcm%2Fj%2F%2FQwV2E3B2hI3VbBAQlU8pCn9jQ%2FzdWA2WDCrhZzRBjqkAckm1ngyF9rhJinX9K7rRDO329VFVwVoTCpetosWux5yskfG7MMxCCHcbzbeWyxJ%2BMWBKca2uMy1jV%2Fy%2FQz%2Fpyd6mLwmlR3u2YK%2BjGqv0ck41NPT6W29qLnQii8zuZAAiAEh3nSkRg00E6AqVUh24G2%2F0rTokSzcCEOg69QGsQUded75VxYATIDnD1pXlJZeYL2Z7d5ZgW2nsvaq27JcEZJy5YDI&X-Amz-Signature=7e308ab80a759c8bce75e3941ce04fde7b5eeca3c99c76b2d9bc630501bc2e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

