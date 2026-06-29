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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQD3QFM%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T025505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMV5DWrtBPOnPfIN2YJ%2FV5zs1JRtGuVXGwfZrTZ%2BF0EwIhAMb7zQ%2FwDgYon3z25LJvJEpXyDgL3AM5YRuLrv0PvlYjKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxurV905a%2Bil6RmqTwq3AOGUgnKWga3cLJqyJmBcHaX6EOVrQPIAkGxbcnwYELR7YzS0OEpsow4C3Igqzc5SWrPiwSEp3%2BN99WxUX8XILorj5nWLyA9lMBe3N651fBKopeEB0CmzGE1GFRa53HLTXsY84R5LkjPZKvZkOyaYdEd06U%2FJNs4h%2FU9CLeBfrd33%2BYGYkTMdG12afsZpIlOzxJzO9CFqiuwkp4C99wxH3w1QNUsVDlzYIPfkaUS6beZs%2BPOkYqukOe01pEVs8jdAHK1lSAYZHwolJh0GvYDebypX9l%2F4cTCSdq1I5GCeFUHRwG66%2FGiFGqVGn2FdUV%2FEUcSAspNxpgqvDIIQXMdMPHhkKvmw6coxNnXe3Qk%2FoOnQWEriYHolokBWOD9wIsdpQLD1xBegsBkO6B%2FC%2BltPP7h4RiZs9a7RLrWmipAM5ZWZIJks8whfxsE%2FFAwDrc3FDKzmmGPoDKIpplpDxHwKhQYzW3krxN4WBpr9iPpQ6Ga1exn7RnxIqEFZA6bhs9PMBDLEY6ywu2Z%2F%2FkQgDFr5fFLWntouhBRMG1qeuObcoK70FImCKB5Uk0YKmjKSqFKIbak4L0DfT8%2BpY2MsnoL1TI2ZCfhobwghal%2B9q6wqVk9NfSatYzEBiN30BkK7jCEn4fSBjqkAXLcueziPIEKUdQYkBMqSOIRC6BL4gnVla65CxuKdZq9P9eC7vqfu6Z4AH2ovPU0FJgkEquvWViakFcnbyld9r%2FGzg5ln6GhoCvee2765AiK9Pe%2FVwj4UgFFaQKy1dZzVKTj4lMtRlHWchMZYIMOB6zLDizlYrFrlZlHuNPbJMkOGBGdb2K6IfBhGWyfYUu%2Bub4RZNHWgUhgVa31azMdNX9pNdP2&X-Amz-Signature=59c8ba8eb7a60f82c0557f70fac15da4da2868160858ba5df36969a810088989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

