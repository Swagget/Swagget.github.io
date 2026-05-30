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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBQZPYH%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T000748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDUUsGH7rmhyU8hfspXYa6e5VtBIBxkTW0WJuPzjuRP4gIhAJsPoZXlBNRIXeDIEFlo9qvMpROYJqnID1sDy0PrK6YoKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1yKUNrf6ZOXFui5Qq3AMyPPyB%2FyD0EgY7tlhpuG7nvkZe7sCUMD0Lz3IltilH4hbdiQNvDaQ6gpSp32KSXnGnWSreP60QQoKSJqPPMe3D5q5Rwwr1A26NCBIt8846xKWGo6y179UdS1keYMlIOOeqnsdzO5lVfXwVELKkWTEXDclniZ0s5XaAmTH3VpSEBfiSEEZ4m9Mx4oS5%2B7PHWCs2ARAEcwjZnT%2Bah6Q%2BTv%2B2tRHXJZ5K12mEIcbYox18jqDPCZj4GELf9DyVeXHqKVhPaK4r101OZ52fvzafaXpobmrIv0MER0%2BGchEeV7myVfW8eiIbjQgETVbmfNetDE0VW%2BqUy8uW2CqM2OZiOuzQxakOOKZWcvcMj6Kb2jWSHX4bQ6qCAzKOfRnJGqSkwf0m6vdzLOUpCWQ6USTkv3npXelxlFgYXS3%2Fdtytr1vqsHIpLHroJX2m43fqTIM56RPeHujC6DKdm5PHvHc3L6tQqyFJuKpDDulFyxHBVQHRqoQcCrHbWBUH%2BqB85LYE0%2FdFQ%2FVXMgXrsBadIAHRbMou8Df9%2Bv%2BMp3Ac%2BdEFTGjptkEhQ4K3y%2FT2O6bpgkSuwxt0KO6V%2BlHS9CXKxW3h8%2FuhJUNLr2VPQZbsJvjcQqsEOEwZqHWilmY16%2FWF%2FDDYrejQBjqkAU9HXN28FHjPNe5734cr7v1Q11lPR%2FyMrV5JDU3kp4IfzY7JJ8bj1hcObSnFzg3pnDovEAvSX0KayItpUrX2bRepCvP1EOePEO4xeGg4mUe4U5zNSVHf71aMhFbrE1XDQ4PkfH5s0PhKwqOhtYPDuJUXmBQr%2BpEbCGf9qliKYBgkQvugI46UFnohG%2B5%2BQM1%2B%2FCbeYEkarblyp4BwSyVgAuNk2msx&X-Amz-Signature=edb9b0f9d1454c064df4881bebd5b14d7a62cf92e73fc44fe32880525fc34439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

