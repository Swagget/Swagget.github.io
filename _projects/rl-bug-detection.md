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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD33ETSG%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T153444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDciPuiRPHBfciZvw5TrhoYTVVDINJS37zQPhsmH3%2BelAIgVwA1a1Ua2dmAAoj8DyjrMhNg5O97nVOgo6951B%2FdZxQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLaTgFFKLsctD%2BiBUCrcA0M%2FjJ3jvNRVghmi4TaP9oTtdGJaq5Nob27IvaLtMgNsLhspBY%2B838i2OcOjLKsibs9vwN2rt5MzU89iO3k5ApkbVpxwaqPFh%2BNgPzlygPg7AdDfG8MkIEFHX5C7mjnBkuSFqO%2BPEVq%2BGyDA%2F3x0dt3%2B1fcGFW9I7WDTds2EYTcOQP0RM%2BNjZXBMsRgk%2FyrJ8UzsBjMGRgVxbMHVgGfJPvmmDrHp98a5IPTsCiIeXeHUVyF9x%2BUmOuMnORtTPEXC0pNu%2BzKZNkVx9XbkKBcYo9fK1QjvhCCZ7DaZz7eCe6E1YYt4xKMWUDR5uKLUm7dZLTVKIoOVxlsJoV%2FjbID5L4QjFkhckTqpoBZzHmN3wYBx0XRRusyl4fVmszjvQsKfk3htRIy0nyvWPUEHrf4RRq%2F9estInHdI%2BK12VImxT%2FpHZhX9Bed9rDCToBceQmYFsU9tiLcWB83BRbeBG8rOUlYqUN5nu7FQy5LiALGq4XgpL1%2BPKFjI3%2B37aExeM1uCk8MGfS9iFyzYOg%2F3kOGb9MytLFne6CWPWBDAvKT%2Fqd8nCoLtKTfNdLkSXLfP5JRkfVt0l3Tq5gvAiPAm7mmi8R0HZ0CNHl7hcBxmE6nEDbg2HXIlYqg9psjdKmWGMKvN0NQGOqUB7OKfzmfEN01sBUu4ueSbZ2ts7TMhZP57IL2Cbd7b59P8DpnviJ4GVJJX%2B2Cvep9TAxQvH7f8WSKyD0R%2BX19GLW4S2ehsOTP5ZY0wWtYZjDxcdx5BVM2lJsMtUv8essC87je5H6wLrhY8pyZnj2RlYd20nx8p%2F%2B0Vi%2FikHCCVo%2F9FDY4bGsRPBNooQCBncC%2BCDhOJ%2FztZEF7JAdxlqm%2F6adEJPc99&X-Amz-Signature=ab4dc94281c5bdc67c45978b1065d553dec9362bb3db906ed10a77476e377a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

