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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLYDQE2%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T142438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIH5AvHrxscwsmmGpv1Gf4UyXpQumM%2Fb7fyF7YZNnIlD0AiBppRFSWq2lWT7jGbAhNxrHIQlB5WrxJKn%2ByvIupOuqiSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMcs%2BHUN7gQvuPPbyEKtwDi1%2BplLC6o2%2BVMI7%2BM6hoJ9zXG6BZTIM3ySrZhLpFal8YBc%2BrvtwEq6IxLgV2HGmovWIsIn4jFXmX5Kb4c0Xl6lCQAkhSga0FE0Q0azIr%2FWPqmbU%2BqIG9%2B8L7DXBNyAzAil6assDXJwXddVWejpruUlQ3ZbFGxd0jxMtKl969RN7Zk5SKeNJ%2FAtqCZga9p2rz7HJO9JE72XlUvEGJtfdU3HyUsjV9Im9yY%2FDNqcZa7itab70%2FsOQyMBnoH%2FZg58%2By%2BL%2B1QtHorTEm5lsTW9%2BmypfKmiwcQ07EouIb1DN3uHfgVVaQAn5WFHQY2%2BYfrGoT1PYC3YMSxX3M318wZwbUpnGjr2RuicnmdsXeCouIvCCsh8IfPvGrkgGJfJXObnmKn%2Fbh3JQejHPJMzArt%2BjXPs2J9JIFcBYHnlGF1HhBBLX442nqpFCDgfGwHw%2FthllQLCaiFBC9LPomILKdltpdmpfV8hxJ5ESUVw8X47C1%2Fx%2BktqMB9eS8u5zE10pldzIFMtS0cLiPJvw9Nm23wME8eXg2etNKzhmd%2FjTAclDxv07UMCJwNKikkR6Qe32ySIlCJM2wYVkKZiJqvg4pU7vfRn8w90ZjRQloDWDC2xbt%2FNpf%2Fq1E5TTnyv8clIIw2IiT0wY6pgHbLSEg%2FRhs9oqG4PYOtIS9%2FdRlg6j3arKuORyrsHQw3ing31T0OeDopGEyi1UzSUotviJLRH0RMdTaDAfwlmv0S7zt2g83X2mE5jmtY6sCG8D0c2MLjYyz7dTlY2ig8Yu4icg7mVH4UWwArkE%2B1GdXH89comr%2FodgbgJwtGMRKlPMH1RHlHhptXRg6F29uHSoY2UkS7%2B%2BJhiOCsnXSSdfJb%2FK2uRjU&X-Amz-Signature=38c6c3d23b339bd10dc8e2f191f854e54f1483778da8fe7fd41f33a8063311e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

