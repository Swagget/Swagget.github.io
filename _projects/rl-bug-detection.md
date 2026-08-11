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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHEACJG%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T213257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZUmNbU%2BNiKUA7mqD9udFuXxnFRMERjrBdb0y3z3zMXAIhAMrQiutyS5P%2F0TucoDgmMlMEym4ZHJzp9xrnvsO6OmHvKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCubgI9OSNyGZzUZMq3APWY9czqoDkyhNsEXYh5mHQRs%2BeVsU6rGXjGP7WZr3I%2FT9mFCZorAuP8zPhVcOS6TqB9fs2ZQwajwqfB3P4xTk50iy%2F%2FyauNWDeL4FBhZM6TfGDReZXtxxFd%2F8cgRqHwgcjnWRyC%2FjzgeuE1ByPOIaxRQlZcmWVqXfcBR062kXuAyD5OGCC3mUF5dADlVS4F%2FKuGwz4mGra6IsEYwsh5bihp04GsPdkn8udPxot6gYvHA1nZ1at%2FTKf995G30JgB7iLG3DEMY5zkGgDWYvzuaL2wsS3qMWv0BFiOmuAmOy3N3%2BCIAd82mXo3EL23vCKTYg%2FPJhTuhja9nKZVLVUhic8Dz2JzU0iMNFaUxb8K7k66TsGhipTApnhi%2BSbr%2FoKCUWqtX%2Brr%2FeQNNBwaauWMNx6dgAbcWDtRMORELrWrYw2ukULS68zrfutPgU6ppMkRur2aFGe%2BzsodZKxHGrNf3RZOGlj6uyp7BuxY7xp2O%2FnuPmlELdv2syW%2BdF0lfYYynbN0uC%2BLps1EpRbRM54kCKBdIAqoUN4lvFB2lXpZgBnWAqhLMwAoF1F63sfWTd2z2iWqTOVnVlRd4yoGVLS8B0DkjEiavFFJg9LclvPxIdZWt%2BYJDfYs%2B3uOqxnpzCS8e3TBjqkAXaAzZjgiv3PEAkP%2BHS4XTkHOImSbDHcDChDmJ3gvaRdUM%2FXzVE9MRIO8coxeb%2FaT8SybEkwr%2Fb3yRBoFZAJyOiiS38dqRZw9xBH6JPvZLNLdMwUAXPa2JvC2WKqUlWXowcDGbbfcs%2B4o34Tilu7PoF6g8nCWxJ3LktUZ%2BCyZlPtvRC4ErnvFyvftPkCopePYf47fG4FPwzcqHkubx7lGu7SPfmr&X-Amz-Signature=7d6198ea5a54b63394b09656bdb72ff2d3ac177e885326ef5384b9431da3c9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

