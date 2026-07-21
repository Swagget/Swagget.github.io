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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPASHH2%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T215127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOnl4OObQMxr00mrtANNDjfw050CgBcq0qw5vTAvG2QIgMnIV9MQoCX0I12prF78a5NDBXMROGq7%2BtM0TvNglHKsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIaZwNYkGpl99Z8RircA2v3UpGjQ%2BCxI3SNZGpUAO4r6W3Z0JdYrqEOKgDIXiUFusjldCcSLIy%2Bd9aPGe40H9ueq%2Fo8frQZrsHE1U6H7hCWxrdIra1aH20MFj8Q8TIadasSBqpTzStBiKGZBB%2FzSSVjTI%2Fpd2ntA2ArBxEt3uvWKCmzTnRCVdvYPbuRQRB58gn1WDjWvuIDe0qi7SdyMuolg6st0YtBfy49MdQ8ojpZgo23YykZ1y4NUknkVgo%2BlBvccfC%2FuaJR86aI19O7813owOMH3Jgj6O2lfNTiHc%2FFLyZipqfVaylW4yJD4uBxkEiQksEtnLfo9zOOW4YSaBEEcyi58KF5fYlKB62UCNhV7e7pTclPbx0nIRrYfx%2BaXOY36dIvJHrs0rDd8xHjTiR5Yg6bGvcb1prlg5O%2FuaaXUSa1GitBsIsgG77HBL4pKJn9OAvTC9PqucG08z9qIL9WjMhQfSprXQ8PSf5GKxKWgM4UIAzek3xSQeTFLCieJKUCkCSI6kGtb228ga4iWHS6z%2Fjxf7DPEdejOJb3na5I6RX9qWbxh7BZcXkmjJO%2BvXeLf5e259KC%2BHchWcmy%2BfP0l9%2BsyL1hGS8u6sE8Yar0Mi1S6GrhgNhhS5GSM1W9R3LmEJKrr%2BWQssE6MIe3%2F9IGOqUBb5NrVt%2Fv71tOZd1ETJZRvgMcwPXIBoYTe4rzqkysEw4Do8C5nZIBZmH50kAUuKLwipyIiP1sSrHwJnlZYxTDTqGaZh0q8YN5amg1t9a%2FaKOTG5e5pGq6As2cvI8dGCBBACH23G%2Beunf2R8ce%2FK%2BSlFfo7V%2BUfGdHaQjuXOaoHtvuHEx5jY%2FjPRtWqSl5A3RZpvwemkKlmWpgqQbQ5%2BIb0NCVHaN3&X-Amz-Signature=6ad9a10109b479d95458f05e120ede23c6748c9354ddf5acb647e3d88f4f343b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

