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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFRL2W7K%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T121953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpIAZDdX8T3zbT66C1iMKEJSo8F59LZ9JwaSyNAYtivgIhAL08sZtQj8D3dFMXAKEL9CFxwwOIcm9WifGTenpLRqOlKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2BAjBb1hOhaW0iogq3APUX4Lw%2FcNLI262ybo1ImjHhz8%2BspfbxZiycsQh6ZGlelhHuIPSVZizk9uzEsTkdFx3NdfNxOvy3un5nneBxub4ldqEcZnuHBX1PmBmo1dNXVj78u8%2BgAmR595lWHaR%2FfmNRYL6BPRX2Q0lGkm%2B2hTtVOOeX6EEHCKcuCORuG%2BP61Qp5rzTrw264Fxeuht%2B2c55rERIiOcTONdjgtdwaLE6%2BKMpCj5jJ2T4MXQE7LJYZGA9F54dCWrmvSEI5nGcOlg24caUu7Nggk0hwwnBm17pKjo6noQwQ8dnOspgCQ9xfTYIkV7OOQP%2FKGozn0eUu59n4bP1lq0w%2FE4%2FpIkf8zgPz2QJVzXvCDiIewuKhiJ5kFCmm%2FZiyt%2BVsrsqxc7piTV57G83%2BCDplVccISmTHrLoS3wGEu1Zkh5sWhaKd1miNY%2FOva9PquzMNmfvDYo4pU8ErrEKpxnFItgNoRrs3mtpOqOdEAKYBqSc9ZPalmpj26tVBXbpkCI6KxhEkhJbKewoV99RCW0391m1Prp0qnD%2BhyaU4KGPT45RULVtzdYV98QnR97MWxbMH%2FFdmrxI7WjYOVvJSbyp%2FLSdLauY4z8UMvEWXyv%2B8u4eqcFZ4J7DL51UtM%2FLBBkVLlMlUzDv1qDUBjqkAXGZDYXdIzuWfpsncVFWpGDrHa1QWrUCiqnsjrmoMtYKYZwYj63hn9QdLzwrAMgQxtQJX9Ljzrz%2FJ%2BlB6sOBVHOAvKKHxZlCn6n%2BoHK8BijwTo7TCLzBngBJ%2FuNqKmLmJd7aT60bXTPTvDJ6mlaieV312%2B5YYMr%2BcBJFLkMkFU3PJqDPPrbU4yewgCf2FDRUlMsYzAEld1k3erwEo39kTBQz4Hit&X-Amz-Signature=7d1c61f5d0768b1fd8c0b67ffeacc2df09eb8c7b9b8af133d02ec572d37a0194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

