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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUNK5SN%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T021310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCAaEryGnBGheiJqk%2Bg%2FA11txRskWsG2v2GuC04QfMgmQIgOXnjmODLH7FXJHWKyB3gBkqKEf2BSp9RE9KRb7VEdvgq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDEwpvQ4a%2BjsxWjQcnircA1fFC%2BirLqcmLGACExW%2BCZwzQYJxmx7T1d1PJC8ef7ijj7CQvUWDsaF529uWKs4zxvCcdDlEVMbYcalcvOSE6HCLrAEF3vIrkCV4RT5APQCQBLO7z79kPnZdVH5QFHyC1mosyQ8mMuEoSfhdjMc3GReuJGdBUvN5QgCbyeSQq4bckpiBR2Yk5XrIaG0txji%2FgCEa6Ki1vSVB7%2BFqKw6x9E3sk1bezNXO6b4L3zluHdFKMoiWUdvTjL1XF%2F%2FKqN5GkdGv1ecCvdAXR6aD%2F0F2bkrsiA6YhNP7qzFOLq1o646t7dXPoPEJy7c3z5cFEWLNy6iLC37FJqZzh3Rk0x5bJIHceTZLf20bfCJVIEg8UPtLcoXPKD0QnbASdeWF9Zd1Bpsc96kL7tWcoD5XwJyw2OOaC3LlxYtnAb6W3J1vmAx2v0f538jaeZg%2FtUp6pJYLrQSlHZjzTpNeD%2BPaOOQVS0AVyTqy05eRXJJU2r76JnWByAsqBdJFAG7dHOe6iOob7YfcA0MChDoT7AEzBXq3wdsoeMXhEU0HChayirdc9WAYZDDCqTWw4pkC0UsfiplktXKP2BmzvBslkai1mNXQXbqekbp8uHMdv5hNEiU259bgt0UAcrBhGFkY%2BLpRMIeJ89AGOqUBtCmlEJu4f3Fr1IoDjrQYpu7QkP7fH0r9A%2Be5dOD5It6wKZ06XjOWRdd%2BBtna8KSD8UJwI2Mg4n%2FJaMSkUPrRyoOjYF3kdDWZjhQ%2FIduAyJMdqmIijNoFveMU6jr2XOTvSuT%2FAhdn7EO36GtyS8QKCy2l2D5kC2gWogbI2ExUPtarugqUUX5vqyAka9SQWiJ3eblbVd7%2BFm%2F3rYowPjMn3vnKBUFr&X-Amz-Signature=1e3620b70359b07ca80a8faf2ae8992aa0b4228ae49035251826e476dea09c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

