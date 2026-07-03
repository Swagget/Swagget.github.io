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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7APMHK%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T112323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGzTJt2GkGvaLpLH1KdupM%2BA84hU91o1tNApgHlAO7frAiEAipm3Mr%2FJ%2Ff9knyOAxO7CGTZPDUt4wwIH5kPpfE92w0cq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDE3bFoKbcsscGot%2BsyrcA%2BiBMXTMTJfb7cqKE4Yk5BhUq3cwLplF8cqlGth9OaVSf9oXvPR1SuauUUACPhPVxMLFx659ec5E03oI5lBJcKAlG5xl4Da1cLXnRGfwoTQe0VAt2g2Z3M9jBlUoHKONm2D%2BWZXKgYCfafynJ86mrReNcjgvmmLVyeQHgURg99y86ksftdVfRZvWQuAwUSFGgutv%2BsBcRYOqwlPwuA9jKU3iabno0T87lbBPZ25ur1g6SSXsMdgs3Ga8hTwlKhuQmTopPak%2BCPHKKe15wZIIulrpQwpvH1TBYMgM4z1jq3svm8zS4OoCIGjod%2B9YRZYHsUAWMf7ngyZJ9dBk%2FA0QyYesWj5wsKUwPhCLsG6v1BdVn%2F8Ma7QlR34IzIzGRK5M%2FN8KLLSb5MAn0pGwcarLXQ%2Fp%2BPyVNpygdkNyljiqTFd%2Bj%2BB4WsZEtUtqcVDebeiuVzD5bamh7kLb7FPBnbVSs3TufPwv%2Bg4EiBC7WL7esA%2BTvDL4gXofW95rhJLNnp8K6qijhZgorjpC9Q5%2F0eULEOD2uBK1gAnmbtFXz7mw767nV3x0iaxefxodqFnfAwqde8hqJBdlrBP8jkayDw5MJ8qHu1au53WeXS8HKI%2BU8RUShJ2aCvdNJSaeQqdIMLContIGOqUBB2pR4nodBC3APKSh9zHQkV5EFZNa%2BV8MvWWUBc%2F%2FFPH0PA3IG7AOY9Q147Zt2TLxOwG%2F7MSC%2BEwFOsJA8mLFrcEKfPxTgMMygm2JXMbXTnk5%2F6zc0QLIYJ%2FrNrwc7KZmxQhvvC9GTIG8lj9Qwl1FrqH6oBzKrjF%2B27dASpDXXKydwZmmxxq1%2FPrSbQ5vD6g8Had2hls0KG5iN1pntdpIcU30ca4D&X-Amz-Signature=9443cb0c314a5e459b6f985568f8928088c9c97b10ec3721581e9750008f9904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

