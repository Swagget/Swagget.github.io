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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7UTMTDG%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T082636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCbJIBm%2FDMDe%2F%2BCw85trxnU%2FrcVuxbJdaM59jrvYUXt5AIhAOjOmb9iQT%2F2H7hsA1L24QSabCMTZTva5zureiZbNGZ9Kv8DCAEQABoMNjM3NDIzMTgzODA1Igz8eiI79sbXcvvH9wEq3AOMHpSCRLvtVDw37bPoEcYk7MM%2F2KN9k6LY7%2BjzwqTkS94svVwufLTRFnRpe7TIDVnZNKjK%2FvUtJzrKkxYjsHFW52jXLLzbrqt3UbXcS2xZc%2B0a0EFm4%2BUMbrtVIy91N7CpftDLmo%2FVR6NQrukDYQidusU6cf6bmkRcdNJlrFdt2TGx226zabRYGut%2BukLmmLiYFQQptBx0r%2BsX2RDMuMRBdAf9W2hNV8%2Fh%2B9B5blNEOLUQlWpm3q5qNTW%2FhJJ2g2kmfnBhErHMBGaVNS473GsrtDGopy%2FnM%2BFOjUq%2Bbux29MDI4nXrnLXiREnB6j02%2FMYhsAlsvhCtIVW%2B0nhKXEmj0McrZC%2FVsAy7L%2B%2FSJbtV%2Bsmnzl5vMimCe5NP676hJIC6hYzAQc0MXpibj8zZHdq6s2iuzB6gcfZjBsMeedrF6MW7tv7PpKsNCWSSQglJZ8gR5uma3pk4eISVeygTnLgWk%2FRCwefmaqLtIlix8q3xOOgOtitDyCKTDV3pzHhm%2F2A7hkdmDO8REdiW%2Fj%2BAgDt5KgesqUQQqLM20vc1YTnlOhyhZEtbJvN%2B3yVI80NUmOGisO9FNRLWosPtIhjNRXp8IgOmq0teRvUKGH5OudBdKVTtN0PFJKlNAPM7KjC1lbXUBjqkAWmqFYMi%2Fp%2B8pXP0hysPE15RnHLa2kxB335mtqzvuG34%2BaX98jFojtiK%2FaPGyEaTu6dex7EtBHmUr6qxOqOs%2BdV9i8wzyW1U1ubLNEnEUMrKZemSphw967%2By8pY0qMvq%2FoFZ2hBOg%2Br7p%2BleUUwdajCAEmLgbm6fUzz3WMdFV%2FoAeBhBr4M32qQPmyHIIjayBA9egBAvSp1%2FCZ%2BopRi1UU5IYfP%2B&X-Amz-Signature=70e01ade7aa73146719d8dff784394140df1645b5fab1612a3c2ca8672ee3449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

