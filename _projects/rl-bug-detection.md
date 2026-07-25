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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STN2U2V%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T224103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHRAJEWn06ARc6ujBmWI79eafN2VVSizH909emCb%2Bq92AiEAlcfIx%2Fzacyb0dPvoWe4ge1WTxWrpcunV24Nq7VAWLvUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFtuAN%2F5yvpP698qZyrcA7k%2FYICf%2FfxTjyK3HUHMPIG8TpEsAyOrZj9INnvF5IPU7j%2BCkrHaaCSLJaXJRMwwkRC0PuFb4xo%2FNR8pdvaiRPnEC4%2FZJ7zO%2F%2BPo9nuV9uBhEgBbB8be0KGJtArqrn1g4ZP2bm0Sdh9YB2WkDuFLPud4oVftSWetenjejQY3Wpn8IHKKVjCllIBrwcKsv%2BInUaP8hJyGOIRgdWWNUTIKWAfVp7jjF4Z%2Bu%2FhaRcbQXr20Ocqg8mDIc6%2B3MToUbC0714GZgEoeU2PfXoj4J8dHfau0I1s2t733QRlvkvwhhWce1%2FPjrYDlXRUPrsCsf91STbcLZ3rrUGlxuRQQ8sJcKZtmnSqR0NyM3imXrZb1Rgr3Qt9olyF5IAAtJuNK5p3XYsPO0Lh1b7g%2BcSxUmsGUxyLO7x1ONdO6Pa%2B3Pi14SsVbkn2KRP%2BtrqKQFue%2Bnu265yXhnpHx9xtMdKqfRSUjruyNv1aS69mGpGQMugkbHjwvU%2Bqk978wB%2FfEgzSTGXFwGS%2BtPzo%2F7inSmJR7ZJCzsORhruIyosZBgDy%2FQNXRuRH7sT29v82iH7Cn%2FNjkNNUFeDj6eqQP6O8PlmpxfBXQyVdQkZKqwu9drngr4nuqmkKrTqocfvycQrfddM5EMIyQlNMGOqUB6cgCgNxwwXHlurKUeIxdsAWpwHpNpnJDQcSWJ0h8dMWLrrmL0Lt5Kk5hWu0ptghT1qAq%2F3bn9lGDYtI7lcqhcAhMtup%2BLeuSYwUknBaSKgyas6viiD9t3Iw7K17A2eEcSV7H8VYi00DlKnj%2BnH2cHVxR4ukQDYQS4tHsPBn%2FytLdTOSc8zRlN2SH2cN%2FaY0e43BMjhpNIVxlmzG3xit15PxOxWdy&X-Amz-Signature=b32b65478b3e6b3ded6dbc64f670a9c16f7cedf503a3bd17bf1d065ccc38da06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

