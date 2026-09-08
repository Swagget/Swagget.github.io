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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHLK5YQ%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T114856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD19c6rIGywKVIpmc48U1aBIY%2FVhNCvfgebIPIB33W19AIgAkrJnmlt%2BolqOvBe835OMttUsRUkXAhD2RCV%2BrWwrUoq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNvYi2tt%2FKqNVp8jqircA8%2F2oYkw882shhvwMMNpegcQj49sf%2FLkKKEx6a8kDb6FOdUXJ5veWclqKoyF0bsEX2wrKQOk1Nuy2cif%2FPoHN1IIc705ejfXtjJsdfEWM4y%2FwasiQfMxyf%2FLRtNDtobrw6oRxTNAiXcoaZEut3dNr2Md8pzu3a7LpAUZ007ePIGLVnkP5OkKDH0vVPSBcf%2F8oWRIo4WC5euW%2BPBZhXRMefA1zUushAeD%2BuE%2BdHb6xq1qBlUO6wI0Zu4ck%2BQWQtdq2D%2B%2Fd4sjc3HeLPgt0hT2IGNaDEqatUuG1U0GXdsORQYsbBaXe79tn1UBoYDQqmB%2BjAMDxwTnMO2MRjAG1gjHLvGUeeGKCWdS8M7UcaBYHfce%2BnRx0Nsv%2Fn720b%2FnNS2gCoUVTsVOGM%2B9IuDKNutiUjhP%2FQ6Mlk5pSmauUDWKjakr1YT1dDscM45NqJSfJDsW0ow8Ip%2BlI4bqYIaPXN1ZYYR1ZvBVq0GbHPzb1MwTOKlyHEAoQHLpepnUIRaXpuJNtZTLn2smqI2TOzZfHyPvxMq4Cj%2FmN%2BtiVKWoo4qWS04H3KiVbQBTdFYun4Y8QUjADoxXv9S3w0BY%2BIyxH0mVN4aMaJtgB9eF5Mcee9yl5L6dMf6loBcSI2%2F5Rr2iMMSM%2F9QGOqUBpABecIicTqFecrzpGjDdTncstVlVFZk33anPE3%2FozO%2BNQP%2Fqw2uGLXeZOancy%2FDBkDZwliyMRbPHvK9pyRh4qy%2B8MWWiihopqirWzPhGGMjmx6X81jEjO7JqAwWg53IgfcBu4nG7vXGe6F7SRjW%2FTnIK04jA652AKCNHg8Z6nS0ydYB3CfwPRIb4%2B1llzxQnw%2FuSlOD2wSO1steTv%2BKNej2PS1Ol&X-Amz-Signature=595f16dee05798945916940d6a35f81a672f1360accef28b18e6cb603248e2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

