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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVZGOPZS%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T205746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDptbAg%2F0svJC4evqU%2FVgfdsuLNgh4e3ESRJ85XJhIkGgIgVaA59o4Wwwl1qA3uCiArrc4jzBELiT22FUyX5PTx%2FlAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFd7Q%2FOK%2BiRoyWeNUCrcA%2FzNKUM%2F%2B%2F%2FB%2BpVnypgogWo2D%2BAaF6VlZTnnYjjnizN9brW7G%2Fp0HBUP1f6N946zK3XCZQF2sAeRrVMuc0FdrtZm%2FDhSUEpknSBEjrsfsKiggv2aYohe%2BmxxY%2F8VA41GHffjYJMenweXc5%2FMAmWxhPJG5dZZNmOgBa9BeihNgjl02UkbeVaqAo5HA9DBf2Ii80gpwWjXQWnymjii5jfzHyuBCg1LvbTyUXEfNP1EqfvQ1NzaRngKzaJ2N5Cj9sLB9sH3cslI2W0lvAWHbFEoP%2BWsoMlba6O5ApH9Zza8eOR2yqmCoOJ6bxd7Iqk7XTuK5SeRfGyfYAIltx9Z8TnJa5PdwAb7YtaJUwtBdF8pL4sjJZ%2BnfOd9SSlvx96XGXnLO8qx%2B%2BJx%2BORVy6wg%2F477vsreRu0jaRSYiK2TWdxzNjoWylR0PDrtQJ8cbh7ZG3IfS1V%2FpDgwkHyxaVOX%2FP0eSYuuloccQMA2Ywb4VniepPPsQnICVstO%2Fgk%2Be3AU2vEJ1wzE2NmH0CeudvTzc%2FI78v2y2eKn5g50hxeXmrZVVqqVdoBphM2xevgsQDKPaTUCbyqzuOF1f6bgSOcC63cMprCD7h1XY9%2BRp32j3znPX8SDPmZg1lK%2Ff%2F4O5AVCMMWH%2BtIGOqUB2oqFZnnLURJV2hWrmRZkHdtNnxeZZXzXN5Dt2wX3Q1PZm51qJMR3nZoY3wRkyLeTFnIr5MpEuhUnkGWUoDB7fv1khtpMVsPi37mnGKBStwGRC%2FYq6iQEAye7YlwpG%2BrOCl%2FKdBUHL96uAY496bSrpUHE1YUbqP%2Bzn8WCzJyv0%2BHB8i4eqf9WLFnH9iNuWf%2FbqXPVRA1%2Fr42fP8VFoIQDjSMq54Th&X-Amz-Signature=1dde4db323703917d0a19fa80bbe0c1fe100cc296eb2d758e50fb1ee90046227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

