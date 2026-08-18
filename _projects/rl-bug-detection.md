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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NLPTZCR%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T211131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4FqcvN7BX8eSwGgjod4NcyzVaBInqx4NHCsteWpR9nAiEAj8Stsply%2Bi5nY3pYaeL0geahTPiDFpLK4M2Hx1KzYbcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIntK8WTDQxsHqalnCrcA4oxcGdPQXPPIFg4%2BbbLlmngOdb5QUtt91o7IWm6Wkwe%2FwOtuQZHvjf1GknXV2CBhRduPIWCpB2op7gWNSnVOaIoys%2FlM5njlI%2BO6pFfy7LDhzrgj32PTXy5JjtpZVvgrB3ncZD%2F4VrhIbMUf6bz4TfV56Y%2FJTN8OpIxVK0vP2RYNRFGpAA9iyiiZqFFTivh%2FXGpcYsy44e8Loi2puvfEFGSMgYS8k%2BoYwpRZgvS6VguTRqA8WC5q2OWKUUYKRDgBCSmJ%2FcoN0O2e4l9Niu64bTEuK05lxSyxmsVYCfMo%2BzxkqCswbTODCqEv%2FhWBdMrXllkyGlRsxcmyRpPO%2FJjVTuQ%2FYkKl%2BW0AEA0nE4YtYZWTaADGbzHlyGYKs2eGSQxv6oXY81TjJvrC5H%2BlJ7rX31D9sQ2g1LZFsPDfiNTQrkv4WO1JKkxlgvv9tzb9TFo2H16wh2lmmDVcn6MPoI1APgWwm88RoxM33hP%2BJrMdD7%2BgUxwQueNu1BUbKVlgwWj8GhQdKDtPsjRCqLuN%2B%2F%2F1tF%2F%2FJJHFHR9dY%2BjwEHGgdJzlquXp%2FcOzg7L39arlI1ZNzUBkYu%2Bj%2F7%2BiFzbM7vLs0bonUv7D70DgLISeR5p882SQ5hRuThQaAceF1tRMP%2B9ktQGOqUBxDR2FXRR6G4LcY21OpLVFiDJorVPjdI4W4AFXeHGKvKr7M91i4h%2F4JDB%2FP83TVQL5InSXJxSbDCNylM%2FpQBtEjt3UsLSS7n1K9kj%2FBrUMj8Moml%2FtOWjqArKICcdxpz%2FyMcWqo94LjZq%2BLncuPSv1O6KYRrpeATxcMPWSDO1MWaBDjIH761oJQf5wV8pOCaHVP0V3UfjZ9GJR%2BcpJiZTLZ%2BRLrgB&X-Amz-Signature=72447ef1c1f659eef0db2bfa560759374b7c391b671e807b5b909529a5206bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

