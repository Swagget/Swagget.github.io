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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSQXLZT%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T205302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElVMrQSy3DrGAlLynEfLyZGt05KJdxmwzZv8DnYif2yAiAubU5aM4NTNqZYD6%2FGd%2F9NotRO4f5BoxXA9pX6MO%2FFYCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDMUowqkE68v%2Fn8TZKtwDxAQxkMNpvYEFZflFYeXF8bYfJZSFd8z4XmsUjjtUu2CkgYhI%2FQRtqTaxiy6VzNNDREARwB5pc%2F6MVdMX765DdmtEjUe3s3e2Z0ROrU74XtDBbO5O7MXYCl5w04IBCzdCRTFD8qwdXAWJQdGmtFEgqUdOnwzfyZyDOR1Wcg1ZOY0UehVw9wZLcUZe1bAqDXBud6urkFTy3MtpjWsaKI5euqE7iLGu29xvOH7rA%2BdBVpBuDEmjeC7TivzZUjI0YAB2vi3JCVleQt8ONoKN5n%2B%2Bpy0O%2BmumlD20ZPUIwkRhG1k%2Fxxo6fS97E2RT2wiX11JwSdFSZpHK8tjnKay%2BBX2ZsYlmouQi%2BmPFBtRC1qK92JKfdpsD%2BoPpacVRJEQr6DMSj%2F4J5fuRqv3hE1KKiHD4DNHdojKFzyXcIdT012uvFDfignGNZWANCnSLVeH7hTuOHhYq0wetFjF%2BNnXHKAgD3bCSs3n5yETyPxX53TuEoM5XwM86mkJh8zl2RR%2ButVlzD9x%2BvP9n9rZvk6xGSw5djYNwTdw8kkB%2FC59%2B4GBwDrCqxqThrXnjYUiGa4rM5PE5qpFFs982Dzr%2F2h9rKGInX6D%2BXtDVwo2uztJhDEnZkOoyOHSWYBuaZwc7xrUw8cm60gY6pgGgzY2DtiNp7RPgAqthI4KSR4yOxFkNZzuLeKni7FHkossz7tvPqe9Ho8vy0c58s3peRHwm90WdQGGVwFv4bt8tLECKMZg3pgylNWGh5zoxAqagDn9zgf%2B5exsmNNMSssIs1Q%2FDJx%2FUa7%2Bto2itZ34jg8TI3Z%2FtjZxkCT9ZVHEhc34bLZKmmueIRwRVkgm13jjycQRCMvZm2A0gf1q3vfRKWR1Cwe%2BW&X-Amz-Signature=57b1a337bf3c9d5b5909de6326539665ebbd00c9697261139f505458b85f3f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

