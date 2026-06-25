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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOBITI64%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T205553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9oM6jLNuEA9Qbd4DsXDIbL0GBhVXEXB%2BJo0k3kjvWaAiEAoqjr8AU4Tq6RHE%2B5csmdYbxFPncvMuR1mSmmusXh2V8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDAqXB35dCDu%2FRNktxCrcA440dnXtTLBL7lc8npkjh12woJIDPBuDmgYTYK7mzERg%2FDakguEbgWnW9pqTiYwgaVBQugmsgTsE6GKzBaLVLhsT%2BE%2F1D92Q3rwzL%2FdAjHfv%2F0CII2xHa9N7xH%2F4arOUxcw7dqjNsRPUQYP%2B%2FXzbFtt60XZjj20nN%2BnRHJQzJCwILv0cTNLd%2B1FOaPf5c%2B3zt%2BMlMkNAQu3np1RfmkxzG8Bf2pw1Wp2TgpM1Ui4heWqGtfGAWZNEErXnbS%2B2tdlEgT5Xy0LMXMvv31xhQ2wcyqlH3QYujvp1myyxxe%2B53dvqCqFHpcG8V1znYBJpeBclyImKo9yFfufW6WskGiH3KVel764EsroOd24f%2BKqWYcJpy%2FJfuAlWIZq0YMshfS1tyCZgXlJ0C8N%2Bxwy0kTbtfRFFAluMNQz%2FGRekY5ZZdROHTJPIV4zRjDNlTEsMYhplcDBs89nFFi5mhCgA7r%2FG1JDjJu1ajlBj6SiaCjju5cIjD2KTp0clrS4csSolju4cqXh8J2Fr%2Bg4YstybQ0g%2FnctNA0xdy1HWrsg23oAZED21VnTzgp6rY0MIAJMK5qktR7iBlap7q3K3llPeTrMLGeUOt5xbYN%2Bw4EFSCb5Dd7KYyRBZ%2BHVmjw10QX2QMJ7r9dEGOqUBALFucTxCGBfmpNjrondt0JRM3Cec%2BI1YfnHaV65BP7ABlLF7PJkpnxjBpnlIMDNYchKATzH4SZPZ%2BJeF%2BEwZRkc92q3p4Ak%2FhD8zWSAyaPGmG2gTyM8g2aQl00GhAAbgYZM9nahpfoeenud98T%2FEXFjqf1gE5wYwUM1Ja3C30u4p7ZxyjWo5NZLAns9XANP7NyVOrmMZg1IoDR2MbyWEK8uwnuIs&X-Amz-Signature=fc04ee27e314c40029c62a7d0fc96ea915185a26a055298d580aff0bf022bb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

