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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGNILW7%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T234932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC492d4H2%2FdIwolGs1xKdJvUZVMxEhWysYZfDpUZN9rUAIgQ87vcBKvciSM5Z6q9uyKYR5%2F11Rg4WFFnlsadvmcbTUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0oh92riE88Y3C%2BTyrcA%2FPZoAFiB67BvPeGbgKDxskezigh31mHpw%2B6ZOxkJxMy8MOwOkC9y8BplxG%2FcZ%2FrpQzRDI%2FFoy49ufzSp2JeljuwIamZ%2FsB1wCx21iImw3s2X%2Bx5c51zVMVZzqqhNloDYH5J4K1%2FUt2AFJ2U5P5PxSseWm%2BmhYqGZXoY0iDr1Pp7%2FXw6h996d982W5R2FpKIbJZjPg8w6xhVgoB1n4ZQr826hLQiY7nxe2uEpxS9FDu4oAqL4X%2BBsvJKqf3kAYnfybloOct2JtGf0rjm5%2B%2BmESnKV6qGeC8vUAXxN8l1WpkSjQ9nd1aJ1eBBlYG%2FMiqWL67uT4cneN0MAtnFm48%2FSLPjEflJGNzZ82ZsA0e1ZXpNv3wElANR9LPO8ZTLW12plVrHeKQUml5y%2FroJa9dPTMnu1gxCMPUnQVf0X3%2FMyZHHj%2Btzfgbwtk6rXuf7JTU5ik5PDBagdq5lpZ%2B4YMQ%2F9hlfWOiOgAfgILsiLp%2BbZIt3qHc%2Frd11OvykGgD5x%2FpP6xGCWfmg2Of97Jz06QOE7JtLQ5G8ZXFECNkKdv1I8UNlIDmBOcFrdzjB%2BZAAoA%2B%2Fioh2NMSlKjlgsA3IQX5Fgnj7unJ%2FYPylXCE9kO7MF%2FNGvOX62z%2FrxKKnFKHfMOvo7dAGOqUBeYhVPni5RlbB23Ac0vB2dNvBsv0E5hQQ03kbciDyw3ty3ycaa2vZO4oa%2F0v2FtQHsF0G5r7z5jREVsHkOvdxeF%2FDueutgcPjJabPg2MtT%2F6YF8VQdYXFCwyigI2LoHBla4Qs85ubTuZW%2FmTsHj6h%2B0uH5fdPacwQTsZqHjAgoLTS%2BS3OHlxMQM3njGxRBRQ2jQLxPYPOBrnqM5CMumRwdE1E1vCs&X-Amz-Signature=bd727fb73a92a2d6be0a98c780ca450abb3e975ee6e0a4cfdff58f25f92da9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

