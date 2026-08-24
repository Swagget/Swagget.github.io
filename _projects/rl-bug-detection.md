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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGT7AATY%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T021429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBPJo7PKODRgNRpFJm9m9m4eEX3SdG0KXBMuGtdkIH%2F8AiAFKITyuG%2FrhnzN86BvNfDAZB7HXDuF3k1cpU98Fx1OlyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8GBckH8dOBzDp9%2BNKtwDzqDDNPpyIIdxDHAfszVrc9g%2FRbmZf0IeITIFnkQv0pBLeJENwNWJyoUQsEvqW4sZXPH4XCwcNKWjAub1QJFp5fuxJr1PGIBHjTX%2FejzT%2B254v7Y9HIj0akBpL88f0HSjBg42Oo2nx616n6Q%2FyGyNrwfdFb2YaGBlDiEDjs3jvbaa%2F3KmlYMOr8BkgKlDCVVFPWN8nLqa1%2BUVBBkhc8jwYPxSNln6s3WLBThjgUAlbhKCeBDbqn%2BNB%2BLqrK69mUS0g8Dxh5QOnIY16TCOWJDipy%2FxFTER0DxNF18C4JdszwYe6RSQmxfQp6jXP7S9V%2BVefLCKZhBeVMpZ%2FNTqyQafki8iBzx6UFlD5MLRM3LT%2B9yUrcE9LtfV1BPKpzopbR4e6yhh7FTY37avC2yC%2BgXnj%2Fa4l42%2By4vjb7isVMN6FxCjd5e%2B%2Bdi6S%2FWw8FKB6iFsYiGhuI98XVAgYiP93IpcBXQm86L7qf4oyfQr63YmEJ%2BTBg3vn87FiXNFRx8illVUaet%2BnUTHqR9LoTmvQHEcXy1aBRh7XL6bZpsLtT9Fod30nDJAZBcdBC65vwfx6Xgd33cuGmlSKeiuYKy4r2ECG%2BZuT1bVzWU%2FETEdBb0WUY9qrlrwKFdm4vShDYgwv7qu1AY6pgGxwDa%2FoAc5XUekTCURGXgULxcPUdU6jKaPDD2L4wKKWm5W0lKJ9uZTtffpxIcgu%2BOLBIHJAqlNZiZuQEjXAVcRLfoTTnlxtqfYUaoB1X4J%2FuocaCmgqFrdjJNYSd5KyUFepTGOfrZM1n4TmHHE4samZnIq5VL7tAfQJIp5OZ4ZYIW3FTozPmH%2BhFWri2Nc7bm5AHypQm%2FJtj1NWbGtVfaj%2FlmiMVFP&X-Amz-Signature=e2801dd6232669feb198762b6dc84564d498c0b93c6ad49544a0648cbd8b07e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

