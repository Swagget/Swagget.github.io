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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3BDFAFK%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T072006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVWijuMj94WlSMi1tAXAT1AOF1U5cmlaN4%2Ba6bpltAiAiEAoeLvkoblIDAdmAHFJPHm3oMYipSupBjpn%2FOG57clVBYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIiBounjfmhLszvl4ircA0OiDrQFvs7VkR8IRcIPcC29uCmsumbgcOmNPBXK%2FzHFmID7YNxGPKVZ5%2FHPLu31Fc1tPIqphz6UMWjjNQR8KtM9LMlUU9MGrMKcumrS2IMqAUocnvo2P1poRSY2mdbrAfBZjl6OGJ8Gv2basERjWQlGcKBeEVWrySfwwzJxSo8pNiUMaYSDovEmMWv8oNklIF%2FzzBZV7dhYLiBAyxPr%2FUHG9r%2FDHzM2kvXp3n0vgaOO20G4p4osthQYbned5Qf1LwWDg0IoNtIcuPjuNz6vHSvg2sfdukgtIRn6CF3rEudOt6%2FEN8unTWM%2Fev6Lq4hyaYHqNyKNB9Wl2qOt7N5%2Fk72ijawIydcns0i%2FbsgdkY%2BIpik1LXCpfYtc8%2F5TLio6D4X907MLbddzlRRI6gUogurxLTyAJRWsylXnZjyb%2Bx4sRIgCYmWDUsFJ0rzaCwA533UxNWvm%2FqWeDHf%2BJAGZfHv9UZCrh79m6sU96Rg4rJecJw73GpArbFiDvses3AWK0JbFGJlO0eRtVRviSK64BOoxptiP9COpsIn6xo59M6UYP2t1bchA8Y0RoiVe6v4EZWZrOEtJKPllSIxLh9wLCDM38FTNY9sxule0pBrCTy9R8Xk2pYMPlXL7dZ7aMJO2mdEGOqUBmuCj2tqm9R36H70RvluEWoYqsJQ018lEZkgvDRwXexZAe%2B%2FP5%2B4XrZmdOM7JalduVI3sKsRr4F%2FaHENNwhQpWa2mnh6Oh7uZ4uIYC1mvk3bY%2BBm%2Bt5bih4upYdVn0BJDC%2FYKVOdIY087b8AP%2BONR%2FEOwIk%2FzFIDi1GI3n0ITgiVsyeVBSPSAoVmIOiccve5TdOEXFbHHBH8O%2B5tmxMf4W2T5jPWO&X-Amz-Signature=49a6b4c5bbae4d4130f4139bef8ba1052d98c06710f3167f470fbe3c7ca61da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

