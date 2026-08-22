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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQWBCIYM%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaB%2Fn4PlYaP1%2B3wQnaz%2BWsIVyO7IETvG2fWVHZZx18FQIgWC9uq3FMIRxAcRS7C%2BZ%2F61ZRf4dFPn6gaPmnMRbu1NMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKKe6OTDF56RoViWrircAwNZncUIUHjxuicY7FrglRQPzxWA%2Bfdfr8NlogR4UP3wMd5Vg68R4%2B9dwrCuAVIOKKFs1pq5AhHfbYFcHD8fGcmRsVpGUXnjqbRLkUZNJXKp2Na0cs5jhc9sMi3egLYA%2Ba2v%2BOi1J6wqb5b89ztXSi9DSCRTYrVSXFN5tPqFlGDZ3PKgf%2BivK9MZgGE%2BM%2B4W2b%2BooW%2FfAN%2Bq%2BpHQ2IMjEZ3ODDWdlI%2BV3wtCgY4NFVsMiLIrdx8NmFFZgk4eP8tj8XYeR%2FNlwmfQjC1ydDm0k2qlLHZ5rtgNW6kZcX7R%2BJKVqsPhnj%2BLkVI5Wm9j209SyyeD9vTRikQxjVUAPGxFjuWSbLl0R%2B6D6uCDjvw3aJJCoPt16Ibb4nvZx2DkUKZWJ2rNGdzkxE8MCj2vOofKjx551qA7PJ1TSopCiwoGliskhiYMcGPzoKjBEi%2BJwsuVRSM7L2pSJIBjssHaKJ89fqCc2uksr0psyVkYmbsMcmrHBJVupF6HpWFivqFPTfvgpNnFhkXOh2%2BbSycmtVOxqejbYzI6cDdUmlZaZ1YEse82zrKXS6MvevAM9EGfqWXeAoifkUOxOKC4GcT5x3mJvoWJPPh4c77SRLmIhyhUzmRdLczln61%2FIdAwM%2FS1MLnDptQGOqUBzDxeoHf0pwhBOs8iPiLN%2B%2BFgfPXs2KdNKqKRjTSx%2B43hWtvsmspAFFyxEaN5ie6ndN9SGsQaPcAlZmo5wnejYsxPohBPtPYAn1CPz3BmWoNixPpZTrpNo1EX4qVfWX93BAi3OF5nDKOF0IUyOaN299V09itc4T0RQ5K1OK67XpEGsRGixTDObDGMXwRYwcec340miH%2FjhWrmhES3o3SOt%2BYBNN9c&X-Amz-Signature=9dee7a7782f77e54e957893172f81d278bff79747477b79a63b8292642a5ab63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

