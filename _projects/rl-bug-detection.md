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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGZFMC5N%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T214717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC1pJ0y%2BSZudhZ41TZf2vQRlbeibzzCdB9OPFsr4otOkwIhAJjArpcFzgG6EHoQ038IgUgw66Yv1vEiYJpEN78TM5BXKv8DCEYQABoMNjM3NDIzMTgzODA1IgxJRPVk1pOv5zj3d%2F4q3ANKSp2osulHMTIU1yYN3K3%2BryZXq17%2Fp3AmQqZx48foWmTIK2V%2BIghfU8t1ibf0kv8XZR2B%2F7sVjLer%2BfI8Fp5mdNDpAtMsnNPrMykT0gzri%2Brf5jVFjGvK%2BSwgWEWyvrjyXtMoMgLrocm828gBL1LfmMmcysDnYLyDFb9qIqrFFX0JcVyqSYmw%2BuWXDrRTiO0Eb2t1POx2T3rNs2WJXoh5pLpFs70wh%2F0csSulhAYakngII272wmwVZ2q8hAMWYu6E60GK7%2FqqBOiL3kgjIedrVtI5BVLr%2B1HvVb%2B2pZMkLSjV34wRTBn8x405HwcPNpEmw9KedhLfX%2B5exqwBC1Dt4J%2FOWP7g8FFjC16EL624WqWLkYBarSWkiksq03OWi5NO8XcoNSjJh7OxndK9tEM53zUvw3UAHOMEALKYVIZTyPvIudul0wF8dy2V5VZUgcCX4Y3nZ7y4XJGWYlBl%2FxGQKYsUI5RF%2BOag6xyqyuPYRZIVH6E6xvAuSVDmcs9XNDHJMYX%2BUBIqtOP1AX2zpxEPDeYp%2BhH10DMXgDzGY0ZY6E7uWeoTkaw7X%2BX6eMKTCuMdGzGJ2lbeRXXvjZtBONIbQ8ZFaT5HT4QrYuI5sUSmHiLrx05jjvHyjdGxnTC%2B%2F6rSBjqkAeCH2FmG9K6%2FL%2Bl4XHqBM9YWrfcCYW2CG3ra2MKvs6x%2FgZwyXuymM%2BBN%2FiTOirg%2BRUJ3fdOMEmFdM8I7R7hlT4kIBLtanioYVJ2ixFEy8bopN%2B7qG6udfyHPZvFJZq29rDSEmk8ErqCDdpgkdiLMXeekjiTHjX5YBJhA6JprK%2FocfLieUgahE3eP%2Bm82fURIL5f15ENKf2vlwcsaBAD2Y%2FEjaGo1&X-Amz-Signature=ad5b60933f5de60d06f8deb28e0e4b1091be972d2436c2980909e1c5eccdc3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

