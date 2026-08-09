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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMSMLVZZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T211910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHtLSfFE0voLcmpoL%2Fs4B66sKTcQL%2FH2PRvQPQh2pBrgIgHqqX8PFa%2FvuU%2BqO3WXjHodmgs3GVqKeuZ5rYAl597n0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDVEKV0e58B3Hy3lCrcAw2gw1iXwLj5phAks1WOrfnjwxe%2B82e2dEg826M%2FFTu5FizNwRD0pyJGl2l9XkdNg3hVyE0P4R0x%2F%2FB%2BtbgN1uL%2BSSWpFW9mmjVLeVZdqyKm3d6sFygBAw9W5JvElqkx5bUNwJ4nDhn83zANqWtQCzQx6nAVjL%2FPG0tFET7guRYq%2B%2BU%2Bk4279Wb%2BD8oIbE5X36mcTglBg2hDYbKLnBYEp0Wj8mYIDXGhLTVQBq%2BAShm0bo8Vs1bbynC9nR8BXKNADrZ99eEqzM2axr%2Bve4of0o%2B3x%2B0TivK8BwFGs4IHQpzk74tMIQHYdCVW66guylSOozFbd%2B77F6HEcjjvLC2CG%2FeXFP4iXAScCnjB%2F3VHeMK2YLhBRDynuByvIyCxh%2FkrlxFeYUOvpF5FJdzK36mWkBdcLgEKeWETCva6mtphAa%2Bg6mo9YQ8ls4nfj%2BStwP8WFPcnBslm4jOrC24dMUCI1xdIlbO3OyGnIp%2FdNJwZZA1E60%2FjEVq1I5o7EuzS%2BJICIJI4dhEAIXPMzhGDyFjBc54aYs7oYv9bwD1IGPcpVQjYy88nKnrjyAg0NvIcH4JG4fMbIea0mYMBmXZBUSLvRFKhJqHWoGAfb7Du1xWJDC9aG3lGzIp%2BUpm%2Fky3sMNXK49MGOqUBZQhWSSZiMdvItilmCg5XYI7w9unC2FdK1fVaDdth8gI3MmKUt6NFjVNajywZztxhl4XozKHP9KLxtyQ3U9RDQTfl9uCgIabUvTUtkqHtPT12XwhC9xGM2M08JtFo25sr3GPSmRAiTSbPqLUwxFfptpJ2TSCuS%2BgVRje8FmopBLX%2FJpJNOyT1t5qpg2kJXXsIoRV2CgwTLUO0Fsmz9bsygn5KePoW&X-Amz-Signature=a1c2ddf6d7277fa3f2d1274f4acbce11d40d293ef7b3c180579cf8ceedd4e846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

