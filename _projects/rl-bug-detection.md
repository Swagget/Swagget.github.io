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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPYLUP25%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T174543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFovYKEeOtojP0DNRO9pgubRv0gzZu47mivNhoqKqNmDAiEAxuSJW0%2BP7IBidPs8Um2wk%2BZqIzS00u1k%2Fojg0fibyj4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDH%2Be%2BXH%2F1Fu4IQH%2BwSrcAz%2BhjSqMk8WGsBOBarX8mJ6X2gfuACDQgn%2Fd%2BUYInk0UY7l6SEo5rKSEzlFdSvgbzaSslz%2FAejapxcCkyicdhGHU4rVb8XTD%2Ftq2NIRcQJp55QikLXLsOs3whNofYaxCElNCq9EKQogH1lsvuugQBIczbG4CJ9kUHjY5p6TlXHlzo152%2FZXlpBeAfqYf%2FMb1evFnuRwCrqqBgJqwunJrt7R2E6gHlxsLo5OVauYLnldPIZwunWh7cfF1FX6B8hMT6Oq93OtlQ3ArG%2Bvw3nPWv56U%2B151%2BCqosZcq3%2Fm2iloKwkGCc84%2BPEWk4yZNtN7jEkIL2zvw2pwSj2N9Roy7DNUJvBYapKe7YWa6KP59QRg5%2FlWnOoQek42aRGB6mlaGv3SusrkKhtDa%2BlFEXYzyru5pxZkHjWPMykQRiXu5YvSic%2B1s7QjfVd4QL0J%2BO79EQ0IGp1ebf5ASe35CtfpQzOy8ccVhg%2BYkcEo8ROCxz1b%2Ftml6FeIuVEBkzJTHZH5B%2BKnfRmiyv7zR5y3hmCGEzyWHCs%2BXFpyNxGfVW9xYcVuOxxJCPz%2FlrpqYZRF3MZ2V9Dpf%2FtxOiAK3b%2BGZqET5n4FAOqCucogQafnY%2FJu2AUjAIx%2BW1Zij%2B%2FrlTpKAMLv479EGOqUB8CtivBfqq86zkJ9NNreYAzDrr%2BrzXEh221DdEcj1hYc8bgzwFtqVl8mp5qlFLJSCv5MWeGF3MowcwD%2Fmd4f4UwvaqlVK%2BA3Oph%2ForYuWv0249BAlQIuFEixyCFMpFjop3%2FqJduczODuyUuEfLwIqkdgRHGNwQEOaMt%2FmJhUqrvazPb6HaJlkWHYzO%2FHHW%2Bp2v1dvf1Rwq9oyIFijBwgd1zNsbLxr&X-Amz-Signature=8b1f0a36f422981474654eb13fe1f92230be766b959ea46e8c2502d19f34ce6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

