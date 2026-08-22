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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4RWV2OB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy4yWZZJ6Rc362osigagYU917cGYm6vFORpkm7sgxqxAIhALWz%2BEcrpgGNR11%2BBlK0D20AgZGovgGhCkY5yKnJMbu9KogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyierNfkqaVeG9W9V0q3AOl3SI%2BPZ7OKxl89mb%2F4YGqaIUHa9s%2B5d9JqDFlEygWse6e7hlfbleJrLjXuGZLPMFo7DYv6uqvFPEHMIUhM4cSen53rfQKwx1EfzVBKQGxyNa8KGbAFRHv5510GVx2v8qu23YnU7SNXfuFWy0XLB5KoFDPujPooQ9YkW1wOGdgN94h81GxU39kEZNH34SAgMLAdkoEHB%2Fg0AUeV2XauS4KUbrk%2Ba%2BCFxIpL%2BgaejOXmyO7LntWCSdmz38KUoo9et25Vitga%2FIWNEWO488egFQ75PxCyB9FWSq3izVq7KfgaL3AT2LSTfSfuvaJ%2BIsvfcNxsLj5noBjNs%2F1Zkzkx1e%2FrfCX%2FOhz7xTOfkbetqswjSjI145xgrj4%2B7sLxM2lN3%2Bog4MtcznhDIMNze81Z6jvupB1T%2BnOcVwXq3E%2B1zhezFGNw1kN8oQQ23f6xBglVh9pO1OezDvtn5BgCt4sz76SmmDBYoyPb%2BsXfx%2F9gVxq3OPt1jLisapNaLReR%2Fpa07YPBk3PXGfR7JgH%2BGGT%2BSX55mdnSvKARITUrgvPhJ0%2Fhu0f3tA%2ByXEBAOxbibU1BC2o1QLij0PZUoSKxX42bSZ4iKK0NttxvsZYx3rdaEyTeTSTPiOTf9OY6kyKxzDc4aXUBjqkAW99wdggFFkgBCPW0TUNvk9V3EmQ%2BDX3A%2BHBakxT9GXj6zjnJwdEst%2FkYK439wIgnUnvOzxBKM46xl4kBic2Mb5Uxo2y%2BE6JBxAFJ8oSEK3XPk8zoDOx%2FsV2%2BmLW%2F0%2FqdtP3nKQnOA41k166%2FpFO23JS4uk4QzUThA4GiTRF90yxJ2QeRdXCbzkYRGeGmfkIJJ%2B3RR0IuyiXeObOwc300Db2Qzf3&X-Amz-Signature=6afdf1f6eaa2eb80bfefa8d792028cfef8e78240d4a65b1a4e6358261d38b6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

