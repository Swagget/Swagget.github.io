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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIQ2O4B%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFsZ1dcBt7hXtQ%2BAYYBd7J64dtJOVmEZG%2BQ4Vn%2BGEOdAiAPf2UlzeKkFyzqn2s1P3MdGs8MXKF486g8KLlAl%2B%2FW9yqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI4%2F8JXRvgyEsPK3YKtwDeWYX54VYtgjoHC7d9n9Ex%2FGfV6qrmi23ytK2%2BYA0jxdMR2Pl6PyY0bNKu%2FxHVc98GjBDIhymPABf2sADk8xmCM9EDVCgdGMT%2FF1eW7Ep81DlQ7eT%2Bd5EAtKQ0uPFN2STrZph9q3%2F8WkUD9XDTqP0v2ZpQ7an3c3%2FkYgvfKMuVnOobCKSXyo24WoPBkwcv4ixSSY7fVu0FwGYE9WaXME2bMvrIEq4IzuQ43%2BcdRIOPFNNv02yaUKSM%2Fmoyr7cJuA%2B8PeElBDM19qqrAvSxrZbJMuWFh1C9Ux2n76CxqjWTrxiyNEyAIyI%2B04LQc%2FLjc2noslKyQ449NEg9Ns2%2BKGwSxCAZK1q06%2BLsXfUM%2F%2F1iyvS6ldi%2BB1nd9F63Dktu2QqzaeXbeZkdjzk%2FA3Rpxek6VwzMk1N3K1P1Hmoo%2BS5TseEwKaqUlgbCxLC%2BxQ8QhjGhDHTi63eO%2FJa1d%2BiPTkeIYnMkMFZn0n0woPw0KTzhRvV%2Fk4oZ5Sr9S7h2zzh%2FFgVWbvh2o1dEAIf8qs50AE3tJHXAdr9Uw11ExOeKFUBTSqAPK3hDDs1v9dQJZaE9D%2FEsAOhxwtpHlYfDNlvNDMGvdEqKlynYx%2BHmOS00p9ckUICyjBdhdfT7OvN%2BvMw0oq60gY6pgFFqhjgxpibWeLAkZMeC68L3NgfvZOMWlWxshI0prDJcxfNQiHXzmAkLb3U%2BqEl%2Fm0ce4MkVIqtjCdEeiqz8YhSaLqKjUHJWj3uY8aHNIHYg%2FqTqHf3wAkK8Q4UW3erWC5xeukJrg4DsHve3yIgHEF5d1oMAETP908OHUMLunnJjbFwaUIDolDhIVWhpJWRO%2BwBw2acyQy7E8n3dzUpCk%2BO6E4yLSqP&X-Amz-Signature=d61abcc614ff684554feab898fd2a1e0bc0732b9a569b3a06114f2c3954dfd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

