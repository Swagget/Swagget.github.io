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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QQQUVL%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T205858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCmlSe62aM5duqVearh9lxjzAI1IUBCX5C2GF5T5Ws4ggIgMQkF4BQ1cG8u01NDBOwbQALCqRnpIwsfIjTBL%2BLnvpgq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDK%2FqfzZXPcjvUKxIwCrcA%2Faer6YlOw%2FKEZNS%2FTKB9mdoaUzoqZ5NQtFSvnTG%2Fs6xfuqwGqiEaMrHmiYfKUY%2B%2BByBGbhjG88rjkQMnYQ3ZL4nXU1R3Erf7XbqfK2xwqpcLMIgtPdtiQ%2BH1sM%2FPhbQzjk%2Bm34mUjSO2a4NQcgh9Qco5cjERS9hgniwKgF68T3452CELPdo7ol51ZpdGwNh3qx7PepcpS9SppSjMXFR0%2BR86GIAWrITIvnvJB23B%2Fd%2B8P7Eez34wyuSBTb8YyFaJNscMn5eRXM2rMgEhq25cFKeI71R%2F6%2FXT8xDnUOvyASJpsYY8eGDgUW5hNpd8mKumdSm9kCgV1FRx7P3vfG7I58B5eVQt2BJ%2B%2BLgl%2BM6kZEtz5M4GRuwzaDSkB8lEzhzjTCOiwm3F8OmF3VfdPV%2BhirbyQpdI2TgWfQRS3spOvkiqKXB0H0kthWgJygvLsb189LS%2BX6UkDSqDj4fgkzRTWw9L6P35s4FbQESVNZjZ5kJvYWXB2ZXlP9gaOZDp6zkxhQXXp4QJM5XR8bhbLuzKAd%2BhuXGombr4aEDndHD8KhbrrW53yublsykpG%2BJ%2FWJHYwt8Gaulqn33sz8R%2FAbyjC7cIUcKu2J7GtXNe8Fu8l60JtOYX%2B6XUXJQ3e1jMLCnsdEGOqUB0tQBiZWHXsNb1oZyrFHw6kbsg0hsKtT7WcMFS2yEuXVRlStq0xvo%2Fs%2BbsboYiv0WCe9yu0HBkzmDEwRGKCGca6qk5Qkv%2B2ZMFv6XIPV9okPiL8P4HRZuA2dFqlfPEsw2snlGnWbmmWEIQIdMmc2xTZr0Kr%2BJnivxE%2FMbTlnF6vL4aPZuTv5MEy7qKsLhIX%2BgXEKpEy3OUP82hwidXZ%2BmSprF021F&X-Amz-Signature=e9dc10218d50e1369c24aaaf3ea03d0aa6805ae46392f15eb84f924d5b7971b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

