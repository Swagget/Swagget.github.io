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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHYSVSFM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcRStKZwmy70cPE55kpLRP8RKrLZPV5gl2qx8vigcrJwIgDG1w67X6DAqxGkDeY3FgZu3x3HdJ3PI%2FqU1Ug%2FAOVDoqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2GQDTFLE3pcQ2KcCrcA5QfK5JRioAoOeq0d%2FpXhPGL0kDsKiI3jmhvNgKcfd3j72rqIkKVBIkDvAU1tWk2gtyEszmoYKuJKqeFy3U%2BgGKVtD5%2Be69LJG7TzlBzmdJmnhYn7W%2FWKaAzh8%2BmSF4W8LXiaDbE7bhwPFCVoTxMfBHrSrC%2FQfZAaC1zXhiHv33n9pzqITTVdmCu9ta09UAHFv%2Fu%2BirTQnlrhuXHJDo52x%2FV6QbL2%2Fa6nPVOPbfPs2IglSpfZ6X7sTVI9My6swNQaJJcXwWWhihdctBoMQdPwB4O57uRwe7aL1%2BG%2Bq0vvIfYfF390uNW5%2F2MzwqHiYYGnq6SvPdL8nKN1KWpWahWlk0%2FNN8soWQNU81Nk5y3NVPm8OW9YsamZqv6C0GpsswlMNvwhynr98tA%2BhV8k96QWj%2FKVd21m4bUXqD9KnQhn92ja1otxQmKh%2BO297vF7tQJjEt%2BRAOYB4pazWHJi%2BBKnUD3VcTOnjO90YlmlbXDUAQzkdIL%2Bo31YJx0%2B%2BQN2631P9sEVvUsns72ocKGm%2BuB9wi%2B%2B59Yq4ok8QEGkE6D4QOz1CYO7dr9rGm7AzNOZx5IHBtd%2FBGEGbhY1uIQjD4ixTWImLKhXCDpo6nrPqhfbRPuUIBHsGL%2BCUjt3578MP3epdQGOqUBGJoY5lP8%2F2yENrgvDoXet8TxkwxbiBjqDmpyejSXTiM6954zsOv9HP%2Fw1zent8tkhUQNEnjCDJHnC8Dhi06l%2BfnTOykPQTYCM8R6GlB7mqUWuYN7EkqcJLVKe%2FMrGgZtTGEIPr3dxBUq8fWnI%2BHrCJa6mlr9sww32DGMeWy5D8b7vkwHqFwXj2v78Z15rEqaMSlnRJXycmlv42r0CywsDDLQicvV&X-Amz-Signature=14b4879646e73986010604e8957aa733ee4bf22e1a2256d8bd5eaa24f38ad597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

