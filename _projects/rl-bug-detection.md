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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVVH6KWT%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T215645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzelI67Le9ekVDGsCAaY2BDRFcdicbar6W9VJogf1PcwIgCUYAdkp%2FXAhPwQILlayQ5I1A5WXLlhAQz2XEAJPUxkIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6SvJ7FpTPhCfChPCrcA1tYSk38lN8OXpxQD8oUYQx6t3Kqqh4q4dYhSEpgKTyFsuMbKTyU%2FmdoL9iwxhBIr9mZsJ%2BpoqIqRSpeOt0hU97hZHotE8ApnoZdrwRWZr%2BxzHff25ddyM5OWCqx1QVz7JryI%2BYAEaPlbN9CnoZcyOL0J3lUx2PrUFuGerJs75w4Krb2Bbs9Bs3S%2FnlUhd3MefD107E8ID%2BVCGVSnw8RFI8YQEsdqT3UTKnEM36r3PzQaqocklcDlDu6Clb8o2CR6Ccva5lORM7p%2F%2BRCzgp7v%2Bb9gQdhiNwA%2FnGXhUrXYdch%2BjwLuvK6G8eEe5MkijJ%2Bp%2FBkpbcZZvySCwuAif0Qzoe4aCg8dXtV%2F9lgxSuKGlm2gIbzqhxA8YpaqLWawCD5Ba4kiPgFmaMeJlmldT%2FZxFxNkZal6JDU%2FFfEBP8eF35CSjNrTL7YrEYN2RZHUmX5l0EsjcP14jsqd%2Bn9z60DmGT2hiuwWb2K95UAD%2BVhBq641cjiBU5qS%2FjNPRBrI%2BYdKKuIEPfMN%2FHfA4JYiQzdmZwukfCQLpWC7N7sdHTwdQhv3frQFvb%2Bkja8YrUc9%2B2nKY3PQhFH9Hxiw29v2dm6H53j4X0w7nM5wLHOTbXMlsRFSXR5a5XEyng%2BDjhxMIuJ%2BtIGOqUBJGkOu5IXEyKxbJ%2B7cYlBvnWWCvWe6hvnZjoZ3bp8ji%2BHXlXqFAbQjYgjC42EcpxjO7UZ5%2By3oQ0mHlLv26aMUaEQI43XW4GdbA2611eF18RkXY5TaKQW2xPd4lSs7eHPTSOlJFeT%2FsMDny5gtHUZp2jTijkeRuptNVBHQ1BTBeSIC%2BFUi2zXWx41kRzaaJ4zhwY31Jm6e5SMCsXvodZ9Ipgs4geQ&X-Amz-Signature=94def4eb7785c01c875869ad5a5bcd08b6a3e1c3d809c127fc68668f3e33f85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

