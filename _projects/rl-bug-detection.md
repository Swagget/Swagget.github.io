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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULPJN4E%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxa8MS%2Bm4wyhcfJqXtxVuc9r4dDGnGdvWxjD2hXAekNQIgYemG5kE9NEw4LmdryCv6sjxxrleHHlmEzqWEdyUs314qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlW8wpwMZ9mQOK4USrcA2eHxB9LSYfVX6i%2BS0KGmM634cVDfSNtoDzntRjLZyiE%2FhBsJPBj4C7aF1mK%2Bk3Juo81PJyaHuhS%2Bu6YYy91p0OBtJcRcwsgtJd%2FlZrH1f2h2bQ7dfX58BS8%2BCwamAXj1dQc5IBFM9CxguvFsnlIrtouPHsncxuIoLG%2B5Q5QpUngzL7pIRM5yjwk%2BqyXWGdmV1%2FeSehT%2FE9sImuT7zj6TJNXyJs1f19BDTxaYUgKE%2FfjwlvlbqyOEcOXK0qogrbSHEpCmUYYPM%2FG3NEiwb%2Bx%2Bc0LG8oSvHmeE0pGtOzLqH%2BiuxpRhWvL6fnyjz35F%2FdOH6FGl9%2BzQk8I1pCskmyz1S1pUJaiCQPpzS8PnPziXqMqGDshsCfO9%2B80FWmcJGGvm0p%2BZoWJn%2BrtjxDGOT7JW3wz8vRPO3O%2BslAUCPSqHPH5LwbVf6Qknw0umlOlQaA5RWNuhPbcJ%2F28YyEMGLw9Na1Bcd9Ywbysm%2B1IK1t68Urj6aiEindvaPQ61i9m2%2BpFqf0gT1OnoWsFQfmg80lkXgwUeoSBa6i%2FoSEhB5FcLpBAv5YRWRtPYPVZhPVM01qmrHdrb027rKqtsujiSK6wq%2FXMcA4yz2nQpN429YPMncYSoKkDRRMsHeSWbl3lMNzf%2FNIGOqUBI8XdGirpGTT%2BTIK8WhI92wFr%2FlwZAQQoZDJCc8oT%2BYK0Ygnrm1JPgotvoPeZADpH60wOD2bAVRM050w6oeOHLKWeYznbRjNP8BHjB0aqSv4dQ6y5fSzGiKVr5D6V9cNRcorZUn9z%2FeOuklK1k%2FwYud5A%2FMdSDXN1vO2o4Sxlkjcbg67IEOR6xTpPxkfdnCjYQkrrI6dieKLO76OT%2BAd2mCymTSoR&X-Amz-Signature=89dc13490b576ffcd1c0918cc6247cc291fb86f0c08a13718874a3ff83ccfa50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

