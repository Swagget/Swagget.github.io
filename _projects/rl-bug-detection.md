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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JF7LUPO%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T101353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXgcABDrbsf8t80gnidzsPD67VzXUrXqTs6ncTdyfLzAiEAs5qlGrQd3bbXIggJu28tRV%2BoVsNQVgWUUU1%2B%2FaQnFOsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEFd5W0Lv064jTjb0yrcA4Gc1oR6cW6BN3DoqSMk%2B0d%2BlW3J1UYpKEbjCH0DBqkNGeLkST4xk3JwtCOeFyzdzQAFOPln1B04z6vdshpYXQWBbGTxhnefVgV5SrundM2bRzfuAa71mPprXHnDHNQ9FVm4onBztJDPjAv%2BmhV12VaBwqTGsMfwKJSZDoNtGblGcluO8aD2M8cAklk6fDoBkfQsaT7%2BwLGcrJIcjifLkNswKE1%2B1PPV3ZehfxCSOHgQ22xzVTgpiD7UqAmiPmVOCZ3FqiAIShElDmciYS%2Bs9aG9Bts5wcqnhizNIiaYPYUtXvf0b8ZEo3avllZcqFflG%2B9DKcPrUYWLBbAA1z5%2F7hLiWzl88z3Ab%2FBf9%2BNphW7kYLu7UIcmUjso6BdLFQoKo1XV4F%2BmD9qYuM3jbdUGBg0kbRnjB9K6dICCaltTCfZ22rxKUYBjD7zess%2BvHmZmRe1xbZcFtv6BrA7XuH5et%2BdigRxeI4qxos78kJ4plBsNcDo33HPKv6w6bBVbeepKqwIu2GHbgJ19IQI3MAcXcpbq4u3sDy%2BovsNdFwCOl7DNjLS4auLmoFSG0X4b%2FUicFmIEVb8Vi846Av1nG5hGtU8Ln1tuUZE6sk6%2BcaQ6Jhxyqo6bzJCRcduwwyemMPO9hNUGOqUBouEHJylwO62%2BqTFxUzWmB%2BCMnP4Dk1PZB3jVHgolGfAIPNGt%2Bbo8vNk0yJ08hKISNa4Aft8u0usQrBbXxup5Ml7QXJuFt%2BsY%2FMqXQxsd%2FLNJp7PGI4MIPvQH5mweaDztYir83ZGyjTpbozZJetOyjl6AIvs%2BA9HPVFcw4cGYGU3XJfr9Eon%2FIk2BL788bAYJrlU7kmrQv7RfA0CUOGtvN9a4qp0o&X-Amz-Signature=69a184dcfdbbbb331a0e4e6b69bb07122efc3c383e00d0f612fed1ada4acf6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

