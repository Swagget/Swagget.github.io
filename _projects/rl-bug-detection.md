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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XU72F64%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T175205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH32zRpSGDhcnCp%2FAcXA7xa8kiUPR5znEMppKs4U3EOhAiBwf8x%2B3WM%2FDdIhShGkVD6flISv%2BvBisdobqHu9rVX0HiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN7flztJ%2FgxV3%2F0i7KtwDMd46cXQW4oSDueGocJauokdmteVO1j6%2Bjr2YG5TwyFwmVfjotUc7SUCH84QF%2FqAszZaL5x94glodfwbk7KmmXn89oEtTPbH%2FH98Qr0MXMKIPO6X48x7nz4Y9%2F171vWvP%2BfB%2BBxW1INfu5gTQbC5pcJOQDjCqRdDZDBG4CSdeMT03in%2B4n14Awg2fAw7%2Fjawd0DNBZ%2FYfVEFwpNL%2B9mPByz3AniKPVGLe7%2BqawTz%2F2o96eFTV8HXLUG9nz77Yi%2B1jx7nfS%2FLLvmna%2BQyuel%2FZ4mCL%2FkdS0w3yTnFc6MaDX5n6bfGhCuF%2F0Ue3ZUsQJ8806zSVmMvbBlDeOkgbIuFrddR%2BVEhSGNJ%2FsA5EHryk9646KuNwLPwG3u0jaj2umMSLybqEsFbftcgdsZpXrhRZ4XN6WpPBLTxVLOwZH8BuTrHazeCGnpoomWNs6uh8L96a35PDeMy1Xc2w8D4t733kdY8k6fsy%2BHYGWtW41jZDJmZAFBsf3a48rW4wuq2R6wPA9UtSgSE5G2KS12WFy%2BdMGfsbdSS0DRTNkXn8Uez%2Bor3%2Bn2eDzlRSMfhexLhJYUga7C3yYE7m%2FMvlvmW3tSlPkTtcaOm2PwsaG9OT08TScNm0W8QX3%2FxGT1U%2B7nIw8LXx0AY6pgH5BcgWLn7pnRvVezPhv2%2B0Uzlaf9GUZBzFuTZNA6%2BJtTQX9yY9Cbq%2FJdKXcM0vrYb32SvYbBDi4ohE6BsDqR6J3UBsJpx067jTNy4iiiADDWqdNRSW51J%2F6lgrP7UrtVHtrbVRqDCZckgRNw7njbUjqf3jyM27hznFvBY5QD0kcL9f9yj5%2BXXPIuH%2F7xMC4RyrvkTBcxJwHDfxri5OIO8t0P96OXSI&X-Amz-Signature=5ce94af4df170d2a5d3aa864d0a597d5d85748cc447055f80e9b8c15cd63b517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

