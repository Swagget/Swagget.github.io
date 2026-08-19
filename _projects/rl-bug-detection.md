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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666RBH45H%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T161611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ9SI%2BkRRCe0CFbtmDEadGv%2F%2FpaqbECpTlWA%2BupaCrjAiBJ3SSSeLapPI%2FGJXAyASvTr%2FaHWNdED3kinaOKnb%2BfFCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM1wg11rVP43%2B%2BpveQKtwDKScDZFNyd%2FK%2BYrWniGjEJSQX0gOfAVQbXc12Ga6iNhIvk50MJUtVEq5SpoP8rdV32Z5aXd44%2Bjnw89gcx56zk8dO9W%2FQPM4XMDjR7Xk3sdjbVbCB511055ay28RjOKPaooiGB1RW%2BndQw04a2Ui8IiGK8SY1IDCq%2FAVjfO7C2eyicD%2BKQr1Ia4t4w6CBUnct9f53MDnloUtvVUl2whvKL6vPuLIJdlbdhT2TJWbtr%2Byh0RWNs5CELCp%2B%2FIqevW3SrVOekeXtgBJndAmnCJc0lT4OlZI5aTrfaH6V6MatuC70VSFMmrgv2C%2BmIvPT2fJ%2FNN9CkDxi0Y03ByajnbN1RWl0D1AYNwT302kuNAVCS3MNlsArz%2B%2Fh2kAeFAxlz02ITDsk0WFtHIs0KeHGAsItkb2%2FemIM8qdmTfGgBtOVVirhsuY%2FpBSdzk%2FasKSp3VzZikxzH5oNLzcsOBO6iYC2JcvetD7itRzAjMZtL2MKEf2gQpLtKuoBTuxiSPNDpMJW6YsVG9gbXVxl2AzsfSJN7fdlL%2F%2BqaN1CBjf6%2BG3nBYXUiBeJ6NOHy6Hf%2Bl1X%2BqnzstnQWHAnsKQazO0g9m8QUYoB7g%2FwdMxteToVo6BWTQjDKF0oGASP5W6qeYgwyJqX1AY6pgEt7mdzZ3wVs2K8G%2BGtZUCQtSimX6gWwJhVkoYUt53fuCTbzAnBpzCgYOI0%2BbKPd%2BZlEi%2Fi9i277FTg2ysdozCe3CQMwlfFcDgVlyHVYLU9qRGxtpOFt8QLZ7PhsHv8zk%2FST%2BNxDrVWTXR3Vhu296RqCMJ6L%2BAH%2FT%2Bs8TzXixHW5BQUtz0p4Jljtxy1h1Wt%2FHVdfiKp4Afd5JvJW3%2BALPdxurw2tMfS&X-Amz-Signature=7b4edfbfadbd73f8c62718e750d5fd86150f173cfc4d2bde93628f9396e6ea96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

