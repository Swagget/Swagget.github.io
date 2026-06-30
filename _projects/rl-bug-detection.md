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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXALCJUN%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T130116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJIcqOeI5%2Fajt64Jy5eDkTHMW8D%2FVginQhGMMUDqewkAiAX4r1Q4n6MggZZnLv%2BqOT9xch0rfP%2FsHswWNj4rxPriiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXEt2qgQqw%2B7hF20hKtwDuNzetWMo6U4SvskWllWylJFk%2BqDNhwVpARJ4MKsGS17qsUp8ntNGwUN7JRzX0RkaPOSjhD3DiZRaS8jWoPoUrxVeiB0QvpA28T5H6fiNGZtH89UeWmPzIKMvnbesJMTSQHjiQpF4pg%2FYzVWh%2FrH%2Fl%2BOksfH65JcoC8TeCzoBQjWwTBKPbvkxbMvjJyAQBTknWTUcWcyZipTiYxb1kLRU%2Be4meJdb1sZJ8UmhGznLWveS64eDEvTx9g8u5gs5tn%2BkM4hJfeAtRV%2FVHhoDbnG4IWEdVU8KKfAJSY%2Fnf7H9aaAJFbIGiz23x0uKh6rkP7cwQ%2FZR3rakMTBd0ifjZzjU7sjHq7TN0s8xrBY1BfNIfwnw%2FlvjuxV6Q6myKwtAW21oOjUblPFtZAwdEwd3JHgpflpTpSINXgNZoEt7HYK%2Bq8JUxhihZPJs3SLVxJ8u%2Fj%2FpSxg0k50JM71OFN7iDqw4vIxqZZUSCnrYTz5Ux6yzUQX85gxvMR9QTLIlqEo4i5i206e6jkT93hesoTJMWh5nw77yiqAT0Ce2sLH%2FQaP9Wef9sQBVaOCkFcQ630XotGoWoEWtJn1NimL1Ob7FAd3d4mnvF1kGvzCO0ssNgx5JUAFXGWHOhDGLhrGqPicwnbeO0gY6pgHMld13OIQAPXtdDMsmLHsvt1vno%2BnfIxmxT587Ew5qO59RRCixLpKqceRDb0amh5SyRz5li%2B9cIEzQUU%2FR2Lm37z0iM%2FPsyGym3KhdjuLt4pi%2B5IrAChwTEHCxT9aQudKi2E%2B1On0axE58p9NwEEqQkpXbx6JL3se6DL5izErIdniC35SfllvStN5ETHtBrWvAoipGSdW02cpXCMwAl1%2BG5bK8MPoN&X-Amz-Signature=97fd0b7f6290e4ed970a2510ae7ee19ec500ab50846cc4af6900514aa9fec6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

