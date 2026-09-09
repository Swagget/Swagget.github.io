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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RHBBKSE%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T004658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLJHaxwLAK2FDcoVNEbNF%2BVGlLoiX2NODhShdYr5QMtAiEAwROGH7qXdkITz5fBiNXwwg1CpyDpsOxWRvAIf%2FhQChAq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGGr%2F%2BKpdZuexgSu0SrcA42GhHUgJgPCT2R9H1n8GJwTEsNF46XlboTbaqf8dS2Q3AFf10RMnIk1sy0TRlrJBds0nkCCICYtFato5FjSIEbHB5eS4OhM9fTiA10kjA23x7mwRkYnnOYMHgyjMFIZWag36Y8eA13lR%2Ful7F61oHQGlgB%2BhyWkYXd0KWw61eLwKB9EssN6ud4pL5ZrZgC%2FowSOR4YSI0ag1wvkwbgDgaGtNAXIAPph8oqlsNP%2FfKIjVf3zir3y1oKxpcMF0g1VPTZeiFZDi8%2Fvrm5YrD28LvnpzrYUVto3uPpSqnT2OH0KC7ocNyQseUjv9NCL0KvA%2B215LDn0ldlS2ntuvJrmLkXvGZeGjM0p2geQYWkLL78tgk7%2Blu3bKjdBW73SzLhkbbtu%2BX7yciZaACUgFBr%2Fj2bvwUQ0TKrbk1z8wkVAapnM0fBBw%2FxlBr%2FL7LRVZuQhBReLs9kolRp2IAAvzCP%2FVddlcj45MWo6k7QxJZXnpo%2FnmUMLCy9IuzsObF%2FvEonPQZMMhxT1CFiywHGeDgcuoAzHyD4fF%2BvMUwMxyVC%2FXGdHldnTOxxi6AWkH44o46ZGF1qiLka5xiDmlkQTDImbvtB6XicZhKCxZew0f6Un4VRHSCu5YN3ez8v5a%2BUQMJbSgtUGOqUBgxg6Nq%2FSpEuZs5xiJyDNbgA7LMyxN7oS0XrPvHtEZd2JbMLhJi3MN%2FoU7Yh%2FPLrVr3uDvbM9fSpN4Hd%2B8T6IhbALswkr4eUP1%2Bjkn2DPREorzCgm4t9GG8jD9Yml1nMT3WlL5%2BRLBHkltrJP27%2BjPefiL9z3hX%2FKJGn4Dqx7Jd1JLgwzUnOpQd1rj5R24b0sDbIsIHfr8KqHD09US03XqiswtRMh&X-Amz-Signature=9f41d5bef9362a02b01f1b22d9fb6ae63b49ac1d54b9e8fd36ae303a6dc2c755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

