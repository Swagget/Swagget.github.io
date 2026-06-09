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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSIINA2Z%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T055810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEa9tg1Q1NuRYkn%2FVvgXu4LxyGtfv0r%2BLpIxXgpt8MzuAiAU1%2B05CSisipPAaVkkuAG56DAYTODU10CiwOldzLUd0CqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkNsQYDa8oxp15%2B%2BxKtwDAf3R8Hq911gfKjfOUiw6fL4yrIQotVmCSdmCkiSL%2FtEFTwiAxW4C%2FUxK0b%2FiF3RS9VPpuOcmuEr0EHaoGXNx8tesMrtexYIO0lgGq%2BOxFhrqqhXyPTHXqzvD4JOF0xcyMMXLUYjAyja146DEphkkGsxs20P6YXQgPRvZQc%2BK5AqpDj4k4qroJfGZkviE6EQDvK1s2ZgjDWMGOJE6oeYeS%2FZiejQUaUZtRRpNwoRoWp%2FN5F1o77kchcj67kNITWVW4YmVEChG%2BmlD8B6a%2FEPIe1s2EL6ZVrxvzbqtzZw3%2B1v8ZtZNoZ6MGOL%2BLd8%2FcL5m2aFoskd8D%2BDYWwxFmd5UWsMJUI8qyCChWgSsJrLFgpbgTUXGAE%2BKJNMiMD8qAFxn0uSvcaBF3oNNOnaibV7DYCN8GW9bVZCOgkrCxeHpyVP3aMKmESUAXS8bHPRQ9OFm6%2Be%2F%2FG0tmvPvYJQliSzZ5iOdN2zgQA%2BYNT%2FL7%2B1DYUebznuzxeBoC%2FX9uPxzz9vlTyLZXzvzO9HOUwGoWbrDgnBogbccW%2FRuXS7ZLzqnLK40H7%2FNHV8GrQiNnSxWmRuUSFfS85hcZ40zuzn%2BOPyOjanBM%2BpsjCHCwsMItk%2BFrVYZs8WcPuUbhPe%2FIpQwt8Oe0QY6pgFvuMQq5ag9zeZ15Rs%2FT%2BnQxzBFHkucP0S6rCKU9Fx4P6UqTwVLNGXACOVFF0jHQFtVvAQ87aGUjcEBYu2hDexUvXJzwnNLZjp17gCj9vlMsRI8h0%2BE8KN169%2FxaSXdn%2BPW0LZU%2Bx3rnBdcD7y4%2FnMxT8bASnplyomGooOBjQG%2FbRfy2i1sZiKs3Wi2GbY6SSUnN1aUpyt4f7mL%2Fi%2Fdim6NgWqatmw6&X-Amz-Signature=f447f9f506c01cd35a1d8650a7a9d9cc4812906583c078e16fbf5a51a8fefb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

