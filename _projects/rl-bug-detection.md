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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFMVEV4%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T125145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQC%2Fe5xNtsLpQxb%2FJWjhsCnLBJjVQ6zK8LF12Zcnf%2Fz0JgIhALEuqZhTGJPBo18jDTgWgeSU8%2B9QJnmQO65wdcCdOBXOKv8DCDQQABoMNjM3NDIzMTgzODA1Igye6OpfbOI2KvzbYMgq3AOJx0XKp5zgKsXicj5SO%2F7B0j5ES3pCDTzsJn8dHocLQIUM%2B4DIC56l34gN%2BsrXekhWkIMDXZi2HkRy9aQgn%2FAr9BFDeoNCHpWKL1tp%2FPpeuZVINEthQ%2FpsZ8CJnuTt5YteMt8j3w7fAN8%2ByD1bbxv6BHAToh0g2d8U0dhy5DTinGnHBo1qwzwozJ8%2F2tI%2BRxxHFGKYmgqE%2BUOEBE4EsgIfH2UCocH0PxXze8d02nZP2AY06x8iINuY7TkW9ipdYuf0tSHLUT%2BdEXNPg6KZ8PJ%2BbCyE8snwkPLqNjv0Y2tpfMOLSlDb77g4PFbjuTl%2FXnHGxDMJalevPZ1Wig6c0vsHpkpAQ9KZKQQFMf1Tn7uem8jFDzVkwHcCoDAxifLkZci%2FxgtBvcBR9sYo745Qd0nljtwvrezVC45rUW95ArcelP2uUyZO4HPn0gcR9mp3gHJox6VTMCvMaIh%2BwmiDOkojUK4hKDZUdSrcD0sS53Y64k3eShVmkydDPE4WfoIkPt3xc5IezIK7qZV70tlpvxvoStAX57Eamrx%2FWplg5a7NBFOFVqhDhQX%2FJ2jHyoVivOHaQ9kM7%2FoXx%2B8IFWEgaAUL%2BtbjJLQjztvxx7jrV82WuIhLMa2DRO91I%2BjeMTDXyZfTBjqkAXYsWK6VKqADrB0zclFlLkk56pJIGSmFSlFT5E%2F0mi69sc%2FY%2BpMFG2I%2FYkwQYsCraYzEaSMsOe1Tbjc%2F1qgO0wdGcTghecp703s%2FGbNUpddmVgTfi%2B8CT7%2FukW5k3sLjvZxXDh716rMGdr9GdbsdkUaxRMbaJx8mCIgtSEEeFDWZnnXWOVg2FHKdqp5KdUnrJXDI507hztv4c5Q%2FLyN6Ou4Kz3BM&X-Amz-Signature=e9099f991168b730d32a4e1e78d21f420f6621e4db48423d6b089f2ece05679a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

