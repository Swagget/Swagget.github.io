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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOZPEGP%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T063405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2q1XROyNC1giiBkv40jCYY21yIcBSR7KmoJw3XbSqAAiEArf82CtpFlRD3CchO36BrrZnMN3yeaLdCvi1H8gCnqdwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDRI88%2FpbwWigv3cKSrcA%2FKfMWs%2BwI4edWpoQaaI1koDaijsbCCSKLYkrQbhoINutioh8LbcUPrLtbQtRmnUIy0ngtEj6kNNo6CCQAySswe%2FkS5IGHMp5nGlROanTQyL2%2FO5FQpzGHXIjuVYTklya%2Bkm5FjS0p8bpJPRDldRMHtiD1xhVDkLibjqXY86OrxhSBRIQsLZipSlpCal47zBPnLcQrJqxXJe0SSmqdSuqV3JyyVoudPWTO87nEhIlsupq07bTRC5RBjMvLNEvhJ%2FRun42z1IBjcejcKOtxYCHic29twKLR71i%2FXz%2BKxQ%2F8bYGlb0wsdkB42NHRTYHtJYKCctKYzPldXbTcY5whLWWyuLKeib1dAYdjXIs9n3k3%2FieCkfiVMl%2BEv8mjEJB7b8sX1Ksc1uJ9NGCAWmbv8ZGPWGCFg4Tr0sbyY2IuGslEUm%2BoZjCeFgb3gUQvv3YkCO98fV95A0Iv0z1CKyGR9f0SHhNXFX91VFb9evEMOYnctRMi6wpJHn01QhgOX6BhmMFYu0tIgxG3GeMimxDyBk0FyWFzpR0sYwsEW2pLdRba1tuK54Yzw5BuGbXivsXj0%2B1tWq%2BokGYchT1v2TqCi6p1KNrkpZMwGV4uptwtfwPrRPnKpcyB%2BTa64PHyYKMOX539MGOqUBuozQRsggJTKUYMpIq%2BRbrksEa1%2Bdh5%2FiMW8k4HfmveDxq8%2FbR4mJS3mmrMQRHxnC5gXE2v9x6m0lQE8LazLvZNXMCyqhrEP6iAtTRDsTdcj3FLq1B0Ux7rmEDQHjOwR0UxVe%2BmMDfOcZTMFoD1Melji2dPZFN3p60FCs91bTtdiuZbst2Hrnf999iwz4Osdr%2FAMiq%2FR0cTGdcG9Al%2FqRdMWdRfRI&X-Amz-Signature=015f14800fe924353f2412e3a01b9ef95d1dacdcbe63281b4dc75cfa748b5384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

