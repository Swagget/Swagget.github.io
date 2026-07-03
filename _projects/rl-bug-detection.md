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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2MWOSPT%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T154638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIETzbOt29zlgiK%2BQMeN5m5oy8duzyGnqmv7jPJ5tugdfAiAxIhqlza%2BRV7p%2FhKNgbqUr%2BjLY7foJTFVL98owvRVJair%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMEV93RMMHdOx5SToNKtwDCyISLBmvJDYbvQ5OgTXgw6r5G0akjcJAHJDh6zlr%2BOl7hxyTgeOANyKcJPmz59Gn5oszG427qN8%2Fgl%2BT8PkAVpR5s09z1RVhHakjv5WNDInm3krJ1tCBLP135T2wsJ7ii9ankHAeN7cPUPvB6joAjIUPPMxarUs%2BQ8ThPosdxDlrIyr%2BrOy%2FprSuzB4wloS%2BFmj3%2Fm9DBbsthLSD50HyYx4GzEXjGLu1HXjycJaRxtJW8In7GaL%2BPSJ4AKcZZylTXQRRlGpyuPewEIDnDGhAoL4xSyEB0Hd0uzbGdQv3pXl6AVb%2BqbxP%2BWsCzHhpz0NoOHOeQygkRZvaKDB9sE4WXenP5xv5uiP256rd2IWKvUD9VtxDWZws%2FN1HOLoJAb5hzszMhhHBek7xKZj4RKmY3Wx%2FP5flelhXN1tkhH6RyzwjDiPHSfZom50u%2BXrHguEfaaFh0gCYpm8nMB1p7217iG8xry%2FLvi9ZseNNNeNv9BZmiRrIdq1VVmXQagW5om9%2BVGz2k1lwYybZF3tZh8HkiQUN%2FOYLpVW5spkgsRKtMnjnM5NQM0OQQ2ePwPa%2BzhjNd%2FV7F63AFSfPt0pHBvYX8neuhB51d%2FKqIzYC95erZn%2B1UPhaJB1NBgaYzs4w96uf0gY6pgHKAgfqEEGCunstWuqDoBkddJYPHTvpW3COzybKbbR5iiY9FNveS2A9oPj5wKCnJKXwRHf2gYRDVgK3F2e6idDQRtqQ3AarZ8BOTjzJWXeITEMf91kqdEuYxEmAV%2Bu8Quix1NolgnGc%2FU54PHrNCvI8n5zz1euRHps39GKkZUQWBTxFsNMcJ%2FFLO8EE7TqmEgrehVN5C%2FaZjmKumcFZVJQbpNYbyIHY&X-Amz-Signature=ce489008c1b26cc803d912d79f70890cce489077203a45ce616d3003eb2355e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

