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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57MNSPA%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T234851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCAZ20Y6M4nd6nqIubvohJeLsUaYYpqYCB3MUOF5QLw9wIgAcOguZJMk8a03VgpCTc8jYDeLbvqOJ3tr1a%2FyWxWkv8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOCW3s2BIV1uLlgcvSrcAxLHIHo6vgqjzLVGN5VxN5%2Ff7emDrhyZ56c%2F33AlGGtRFoxLlF3XmtHt%2FhhZ%2FKy%2Boh74KxG9gK4RLvTmceQvUlLcjYAnHzYsHrKeW8xeo9R61%2FJQTSrOwtL0TBdPdlQyW5A%2BoQJPGRqr%2F6uMBV5luniCzzMKcF8eS6PBTx2UFNyceqaxBG3Q%2BC3VvDIF%2FSf4RRVAVock1oxH052YOqNunxYCd3n9ceHknk95k8qliCbeNqoIvGojCQkRra%2Fs4XmLta2edFwew2ICd6U7D%2BqIZRdtyNZgzvWluEi8D2kUKBC71f4CmdkXcKyT3zpMBPOF2bwU%2BsXHsWhK7ELv2j%2FyknUJgp8gqcBKT2UmKVfAVQt8BbIDdPYt1AmixRTbxCow2umIAt517EBcVprEEAJjd5S%2BDVC1xf%2BoTS69U8vFYiVQYCanC8E1vai5lcRHOPNRYiH2u8UtJo%2BooE5Pnrk2K8gXi4lCUxzI1ccGvVGeuI3TPPHPCy4WYWsGrZMulZ%2BjBbcJWh76BYA7hAEs21ZiHxrjLtUy%2FOqqFNuOyzNEocEZ%2FrNR6D1J8qZE9u6AQt8BWjQHh7cM92WEu5bwYlGsO%2B8OVfFUAWHbLdxsIn42xjIvFL83hR%2FFRfvWssQLMKSomtMGOqUB%2FZMhk%2BtJ7%2B3ufWD32tT5CMUIH3Xp7Y1igtSxfmiaLI1hPLl36MB%2BuUeqAVtRdrunCVOQhmTJ32j9bS7Dv0lCDbjwNY2n3%2BIGNByg1D38nTMcbY5wDLvoX009331the%2BS4pesBDReaQYgTxCeqzpIAhXOtsrVT40LrbnbYlZuvruSswXcaZqWC3qWNzvUXxgug9fE%2Fpji%2F7eqV7Qe8X3vh8Hcjk09&X-Amz-Signature=7cf5cf28c5264c3eda94063752c28cee08851e64753ec45a9a33da065c446230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

