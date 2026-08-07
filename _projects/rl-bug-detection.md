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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZLSEVB4%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T232209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6MPXdEa3bCbfoJNMTlV1jqaFJYYt3IGBWrgEVW7iL6wIgC%2BIOAirgsSpcis5sKScXEXnzRkxPgtSFYELZRzA%2Fevcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFt2pwdqJa0TbDKfTircA1q2CjpJ67m8kMoOoZzA03KD904aMUN9qh9Pim%2BSy%2FC0L9GdOQxcO0Egj2mh6NlOBexz9IJe2xVzkldVc6Gz%2FeyCPvkUIE2o5OHP1AbOn0RfBw3YnkN3n8ZQtj42iQC5m1dOhzoX2VQO%2Feq2pohhsKpMlUHho7ywLVc%2FtQVikpfaOpJGXkwBFr%2BDh1agb3SpFBywsWwvH3aXQ9%2FXFqZIEyHqcz1A%2BCV0653pmZzIAperQZr4Y%2F8aLNEhXo9RnZT6MppZ6Iflff3V8KiQy6%2F9Qd7%2FXzyaB2kjhDW2Qonse01zotLdXrkpnZpKRtGPIev63oSw7SlkuOpZ2N9SxLIZaIJtYQ3miFk4eFWQhtkna79%2FUs%2BHjDplAmIwOAF9S4R68j3iRuTBPkuNW%2BqPfeL3x6TKhWvE7Fd1I%2FFrSLEdXhXj%2F%2F8UtNbHJoez5Upkbj9zbVfesuah6mJDLOcGR6iCno6qAzYxzsGhyA1gxMMFwowb%2BnTg4evwHHmaBqp5npwtFTeGJJAEN1jKi1FnWyhzTJFmoMne4X%2FWwyno1zReUN32n9X1CW2fucr45AmbmP7tU1UHNen8cVGBPXOAVUDw%2BbTJJbDIZHTnduoEVvvZlvbE0cwHDorxNg9eODIjMPWz2dMGOqUBkXQsR%2BKLehkjReco%2BJ4HBcjQhdhqLr1qmhg%2FwWUTnn9ik1Y12%2BxJ9h80aT7IE7v1adGCB4RwcD4X4NzQxUP%2BUQsGzO2%2FCTKoGaaLggw2%2FfuFF%2Fv%2B%2FUIaChOyULe5KG9jBST55VMryf9jAPx8vv9YR0pHkxNosJViKJqt5SgoBsqBU%2Fp7i2FQoCLooJKopcZL0bdywDXmy996SbmukCt2fLPdGSyh&X-Amz-Signature=80939704ee02363731eca7d38dae9b2221ce398235dac2d1ab06dfc8bde88314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

