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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QB24KQE%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T182043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBk5B3L1zLf4qNgabovTAcDdH9Ylm6slkiI%2BmL6EXb9uAiEA5VF5YKGjsdgormskBdSb3lU6U%2BPbjZ8523Uj81om3%2BwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrPA%2B2MLmeuFx35oSrcA0q%2BlwjCPAI2d6JHNSIJw8y42pwG2gK%2FFlQOoSDZJVGW29yGS7dAFedr%2B5l%2FW0tnb6x5YApgxejgm5U8idXFnNp0gEROUBwl730Tx%2FntFyatw4YKe88aqAVJlJWNpjtxSynf8D112Ek8p2bXGQAFa8uk2Dxr33J0%2BF4PdRHAFtLT4ygfhQ%2F7SgePgmBS69Z6FVQLJOsB5EOj1p8ypF2EYq3IJOvmEHX1eJIbmC4edBqIq62OMzadekksfqt9cklCMUjK6IiLeRnLdt5we%2FgRGjBvh9SGSv57wO2o5%2BPnht614%2FzMYnkHxMiIvylw0o0%2FeDFQmkB33SiAJ9ll1AfruOQH%2BWokDcJtyktveczxocLe9hIbEC%2BRQ77QiTn%2FNTsSLBPbSWTSsgNKtCKaq0YISYRKhJWhIMIjpC4brXd5PHrvVoTUEjoLmSoLCR4fFnz9ZjNt9ccO7vUGqysUcSUzmGfabpqSBaWiDod8UgfvRI7L4kc4yrBwasE4Gr7USl3XCLyHPGuEiH9XV2oBxeUO4kFeStbb1hmBz3ovgOeKANfQ0TXnMJUYhZQFzWCSEXUAmoHJIzUNnM%2B3dR87L4dxNTfTqDkflMxL3EA3Yh91zZFxt%2F2wDpju0gldZ%2FmWMLGUstQGOqUBq3hiZkwRqcG5gOddKselCcQCDzf23%2FiH8Twyha7i%2BRsQ3uzljRRgrmWYg1cv0wfcOQ%2B2AIBIZhYmN3MbcnVnA08uFwfGHCi64retyqz9l8t4uLJP32zX9siRqLUWWP8lcj6vfajGTAQyZW24otjMRHqajaSr9qbrrzdxIomhF2Y%2F%2BRSKikOCW2fdaj3gTncCRXmL9ycvPUp8MVoIdMzE6un2xIMO&X-Amz-Signature=112225bc250d7e317d576f8f5e26db697b577e920725c60de8b30416cb1d849a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

