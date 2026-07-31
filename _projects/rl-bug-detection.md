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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BDQRPV4%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T171518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzfi6K5vsZpUu19zpdCOY3%2BDT5qbFs8zLbRe5UjeRLtwIhAPWemlASTX19%2B8UtOLeOFQQo3lJk2jjFRsm7YIejhXk7KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv9ygmJcqgVRp0iPEq3ANWTLsJvHzh2GBf%2BfkEgS7g%2F511ps5larhpZFB6rAViaAcwnF0JXMkLvVtmSodJMrVcAZbmQA8c%2F83y43%2BiE%2FWafmOJgMuDeS0WCjljhzWLaErsV6BekG7uyX5QCRcRc91i2fwe%2Fr0SAwr2bD%2BIZ2Z9cpUXtofk96PfAUPgPSbvCYEdtVslKe0rrtRec052XZhu4kNPCZ2JrtUPnOP9oZTWur9xIMf9KxbIvpLYTz0rKdUUUFNXo%2Fw9fcKJbAG60hpHL2XnLYXMnK9qYs%2Fb3h1YQQ5SyxedvUJB0p6Mu9RwNFEH9JeuoCbsOCu6GFsoBjEYjtu%2FqyyxaIgSczwD4nTd1s2bxuJMaP5kViypy63sWHA%2BUpD7GHEAJ3mu3J7qS3zYFCZIzv7%2BcBgduxUVP110HCexj8fb4T%2FIdVL67KAvCSOO2IiZc06j2DRDZ%2FXACDNPmLuyKI8AtZhIarid%2BJuEo3730k1A0w0CGL4iuvfSezNKq5HQGciPY%2FTbhzLHiEkrrgg%2F%2BYTHU%2BCXYNRwDIEKIoe9FxhMDmm0oZG47XiiWt7vJvzH9ABkB4BX1pof9fpkxMaSMMwaPtdjGYI2P3ne6CNvnyfrNzaop89vLAcsIz1BepcVGt%2FzDVyoXzDkm7PTBjqkAc15J3RxyyI5z4%2FWuskMYEJNw%2BYV3EBoEn%2BUxr1MzhO7sfzbbWgOT58ms3KD0JjYiX4l29HlKRinEBGz5lNLNgBan4a3HAZqO2eVI9A5sKJ6ho9Xpe1qtO9cVgG9DxUYLFa%2FGHDxTt1TsSY6T59guJqTzDlzx9%2FlCxf6ZROn8PGx6GE3nHelWTcBEKkzVifT7ee25x%2FlW7PITG35X3OZo%2FXscFtF&X-Amz-Signature=8cf832351e3eb44db9ad2cddd9709f1bd4aca0ac6d6b6db42f5436f890f5883e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

