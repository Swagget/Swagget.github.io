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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T5KQBYO%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHJMKVGuH29iM7o9YMADxmerl%2F7x0SUboeO2n8QFbTpEAiEAnYBVkYzoLC0zYNwRPZjJp1PhVxgqQldDBvcnDZ5I0HMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEpNijkcixJf6yeRKSrcAyFG0xMrL3rakFjIzKw9bHHdesTMaUs0PVkAtug70yJ%2BmYTRa%2BtTd70QojMDG7AyVIy1asbyEuucDEmckSToY4FVvEplIiVTW0RB15ySV3ixjYmSCMczeg9YEBthb4%2FElWu9%2FP9w%2B2MD7T0ZoizWin1DWoHvJlGtSsnwjiv4UHh%2FTimex5SBAHELLYoCsMncXxlwmilKOYF72ltQa0IpUx4n4qovg8EPLQfTZQ9jbYgmD%2B%2FidwuR2qnm2i%2B%2BGIt2hRsehQ7CM%2Fnd7FEyl8xty410GRjgNbFUlJUHRrCyzZBJQFmqthf%2F%2B0A4ApkoLYY8wi7JSYGFsgyCz2hUXkRWTXuJiGUIwPiZpm39bnzvB5nX%2Byfb1jzoPg6pnQ1Mg8UGQgqLXtIUVmRxXlZGmQi4PO2gx7iCjGYAhoE4x6pcZXaTv6Y47a84Eo082BwwlXhoquVhWo7xuFOf8geaNMcZH78vCeYju5taL6%2FTzc%2Fy8G83yBgkrXoLk1W0LOALe1yTQ7uYtV38JYz2UCLsCplYwby4JHANIyaqV2cNJDZVNacgkjUZzv68LzRLXpvQmodYG%2BBKUTqfNEGxVuJadI3ctfdyAih3uJiuvJAKoEVXa7AbbvaAXfms4uyXGr93MOPyiNQGOqUBj%2B4rpap5iUIpDBsHeZyCAJbzwAn3lsbsYvexP2u%2F4Z%2BJeAxPRTHelqX%2BRE8ZEqR58lcvcWbiFZaNMIeR6jsbR03mqPcB%2FrxdFOUxXeDkNeG2a3EK3DOApOXOpWrDUNPro6%2FTuLsVJvEpVZS4Uycm3TzPxY%2B1PfoSaI7dtXH6DkZ29aprBOVjT4U44PzrMjLIfcG65sIV%2B7oo8k9F5lE%2FdNehOssm&X-Amz-Signature=a7a5b89e9efa37c0252332d24ecff5135fafebab899fdf07a5e3e1234c17198c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

