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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBJZQG2%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T042546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCYOjsHNRRJIC5P3yMk2oU8us9gWyT08rQjFBFcg4BrAiEAnPP1CREZse%2BIGbmSxY6p2f8CpgigoUIQJWTor0kasFAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNNasrP7Za2Lk7A9lyrcA2Xvn88qqzOeb5gu2KXU%2BaFQemD0LdcpwIUMg4%2F3XbqAUiEKdasOv6Hfwt6tVRa%2BPmXUB7gsM18rex%2F4aY91DKRYV0KrN3RbuPnOG3zxB4JB3ZhWeWk0e%2Fy7jkEU3wSVxpQxcESgSge6LuXNunWicYsZMd2qmJAGF1ecTuYGEh%2BpNTkdloHg6wfHIW7sAzpw32QOnefB4ijl2bGY6lyoo93jjqmB9%2BcJfFI%2FduC5nCXUqBvZmokANFo09X78XM7yx09Q6mNyuDrTIDnJGaw6VdVfKgPvybwYQTo5j5DWLn%2F7mw4lp%2Fa6%2FHxXaKdB%2FXX9QiPAKMs3xCIjqHS%2BzzLqUCCRvNSN33coSgzmw5YMd0Zn%2FCt%2FvHsgOOMiibZ1VcqPYqbKOhuHQdAOzxQGT4vt%2FKbcCoX%2B0skDdNH9NaRfWNEN%2FRXbB7uiVum92B6bFSiV4TLIRO2kCWzWO9yr9cgzNZTymWIiFpAZObxIADIPov8SwDHXyUgT1x2gI%2Bsp4lvkD9vgggdjnWe8v66rg2MSpCf4xB%2FFwDPVzHSHfwz1YBM3zGUgpw4%2Bfdq9uzL7%2BWB70zk4BvEbjacozuoa7H1cxVGOgDqmbrWDkVGexkzyzKwKIdwyQ46DmvO6SVgIMJXtntQGOqUB9B4Q7JjW1y%2FY5Fi%2Bzm98frOJtdYy9tfoKx0IWLDkZzFwT3y8tLuKw7t0Zqrzw1rzewRnWDNDQeSp0OVP3gXYkZrApeTsFFsYmmJh%2BXRY9XKGKbxEb0Ea8aUoU788XEG30l52QHGdlysEEbibXByhEYT1BNVi%2F%2Bebe4nBuBOZUU4oLOokdINT54U9o0nbxgNDd8nP81W1%2FawA79NqUEI70yShAHkZ&X-Amz-Signature=56f8eff68be363838ada8f9e4d9b384485737804aa6ac3b00f73338549bed175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

