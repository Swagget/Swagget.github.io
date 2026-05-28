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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXWNPJP%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC49QA0wSSZn1MCpdzasUmxPuDNz7O0aZWXEVnrX6hc4AiEAzoXdXlteLYqFXgEjDU7LOL7puLHWqU9LrjdWgMOUQLAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLoylHp2WxAkl2RyircAzZXunEYHmlRmGvGlOtyQXQgnNj7ATkxNzzqrgul0Tzj85Z0zeV10DHzoWNkfQXfXrYNinbZXdTaS807HcLl1Lidgr4bGdjX1129B97B7JU8eNVCsxE36SsuEBzQhNuBSZgOmr5CL6DaHgENNuzMnjcnVVptyWd39xyWpE%2FcnMmCYaDj4K%2FCbB8E%2BTt7Oc546i%2FB0sboGyUnCx1D5zOPQDyeyvGD9zd1KXhPZk7wzicca32FfuaoXLhZEOPmvkTd6kW%2FfMt9m4t6hkW2rk3OAmciJ1NmrN9sh8Ao3P3c3M047MWEXmHPwUkDF3OtsI7iJFsP%2FmnGuQvTW3duxFvhKRKPd3z%2ByQghMKAg1JQNi%2BmewpfYpSamjunFSIAascRlCRZ2vb6zPj3gbM%2FvNU%2Fti9ph9rvnz1vRqjuNl9qNId8Y2j176tyLre26rzle5RbuD%2FC%2FiOk0%2BH%2BIXtZvf7QNMyj%2FPLk7fhuB9C7OJ69YPuQ8YKG1h%2FQxUn3iwLtU9mXyI9dsO3M8mrcWcXBkpU%2FPLlBsXeCqiX7mtqvj1qkYqSqLrxJ63zbMb1j6rY0S1LgHIbwZtOxhwo7holFDv4v05E%2FZs99Pos%2BMDHxaX8BcrzNO6pUGCtyecn1hak4qMIaf3tAGOqUBOsKEnzwlHnBuWGeSs2ocR%2BJOGaIqOzQfbYASI8yP8LV0%2F2w5K%2BbAbZbsgQfIsRVYyt3ztxAzmBIL%2FKRs99vzLLz9hZ8rOHSUAQKKbSCZTWhLrdYrHbZGdMfVpcnRHPRDtfabzkCFRDbAKp6ZIFHVl8luVm8%2BwItUH3VHlk%2FY7Ob440dZcZZWXfXi1IhPG9rbEHK7Y3x1MptXHEaWE%2FlWEqi%2FKXs0&X-Amz-Signature=4c806d9fa778d78ca9cc9232e13eba8e3bf7f7f10d032fcb60e85548a0283612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

