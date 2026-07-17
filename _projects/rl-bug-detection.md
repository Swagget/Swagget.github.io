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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJEOUQ5R%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlaasVoGOsRrDvQC5DfeWgNuodBdRZUxcQnd0Ugjq1WAiALMKWxqq77hShpvq37cAev7OYHXhGtGXKkkaPzNf%2F5mCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMJJc48jLKspX9FgO%2BKtwDnZlGsFYYttLLWPckeHsQePbLgR948Mhi7kbO3XbDE2iIcOYE2NNHWpBgnq5AxNn66jwbu1S7DoL7bzTqpGmxv9MxXstE0O8orzlp61J7NxX2gay76a5g48cajx%2BmlA8TLrDOJ76WaxObCGvGntfc48xaBbVQMqbx2XUie%2FBJTPTpKNRMP5sbh2%2BrsWhYlBc1IDdELjBBlIhPUNEkJvUl5M4u6Rrq7%2B7UE%2BXgn4c3rmHDlkJXP3WcWnG2VjtB96jkqolsCKLYfw%2B9yF7zAk9frwQ6P5pJ8lAVqjAm9i%2FG%2BPqZROBd6wKuTloxDz%2BUhFOBXHhIQC99piBx44Fc%2BaEjCpsn8EHgLuyaCA7cDvnYhHiib51uVsVnTJd0NGmv8peVNWTRjzCeHhI3W9rzDkxevzSXGht5cwTheQad5W4wEDvHDTkzUtuZyFDWcP35KfXz1aFMovNIRS%2Be8YC20HbD11HA8Li8AxbRFerNHsrxujKmFDDhF5US0RCN2nnzioGSz75oYPDb4RiHpMPGlrbr6IV8zecvfGmV%2BwYUR5nzQ%2Bl08%2BwgM840xpTXmquaGSRLmm5pzjfDBV5xsJWCMqe3gW7DoGgT5poCk1TwgVxYO%2FRz6OZQLefPyxAHOAkwkvbm0gY6pgFEN97Olq5F3UGB0oZ5pgZl0huM9h6gut%2Bo0a6onYAyYuO9D%2BRWigfclpjkPq0lWyoSg%2FFpOD1sF68PqOybI%2F7w7jbWcnqIZXlKim8AetnRwWk2QaGPWKFezGWTlDqeeEX%2BnTRsox44zETCsLStUu0wyo0ucfthgekQJB5R1peelESdYfXv%2B2Xeghiniu9DOiD7dR88I9TbK5RfPWPWER7qd%2BoGLLGo&X-Amz-Signature=7b6fda0f2477a6157e184b123f4c24f87b87b5ee23ac4e2d7640780a4f5aafcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

