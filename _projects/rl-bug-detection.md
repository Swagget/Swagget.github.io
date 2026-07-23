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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDPN7U6%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T080613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDcssfu9h%2FuuE1Fj2zrWvi2GlKdRbO%2FQ%2BODgLrZqg5UAgIgAWiEP9o3SEserEsRc0F7p3dkGRE9VaVfDP%2BkvefQOVgqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPFgK4aPxMaVWlU7yrcAxFc3WGM5Aq%2Bg4PBIzKcAqsr8tnmA28wqvhjo8HoxCXFAvK%2FwPmr6tnX8JzHmQfgDUqjnSNZ8Yh1P2lxZ0z7DhRenaIhU8u0lzj2u0kIz%2FNyBywO3ruFpHhAxbhkyZr48LPtMppcsuUdadlv4zHbIEpiit1DpYf%2BYHbi0fKS%2BIKwTIaXMbgL8ycDkzLXJL9P7xO9x7QBwhH6db5lfKwaIDBRP9ACv4z3QnIs6%2BPY0vQk0REd%2BLNFV0NHVc7f2Ajk2QiSiBqsuq5g%2FHYDJf7tGFxlozRNqz1QcLbctokh04B079mt5QN9aGBMnoYmCmX72iWqvj%2Bf4NtYw5ZHvjdq%2FOkfVDHv7R0B4PvGRLvzzuBEYf5YtyAqJJHqPXIjCNgCcwm1hcdN9G2QW6dH4qA%2B4SZbKaGwcYm5h%2BBIvzoVbRj36RzPoDEOtwh5Ab2wKOu7g4qIe%2BvL59mc8w3zjvibcqYUf%2B83dOM8dkoQ8DiTKmG%2F05DGdmqulQkN2PT2TFC1E12ADlrpOjrDf%2Bvh6JZAZi9yU%2B%2FARJ%2FjzigZNPB1O42uRPQ2FN8iayesMirL5NINwWMwW4ncA7%2BATKSCUGAN%2FccrpmNGY7hGID3my85Z6QurVEAtVsfQmbFBs%2BStMKjohtMGOqUBW63Ur5MRhcl2UE%2BbeHzhRN311Mn56z3CjIwCOEKfkTu3bgvOdC4V4HWPlu91VT5cDoIU3CHhJZvVQIcMxjj%2FQpvfJisjTERfEf9b7HMv%2FnVG56hTeOULh1EUSfGcceFSf1F9PWAe36T1UGVFZR6LaKbC1HBoyCtCH8il5Hi5YD%2BL4TbSCEsXf7GRy3RZjPI%2FNI%2FBNY9eZ9LJHgENiAp12%2FZQUnch&X-Amz-Signature=1e19f03224abe995be797d9b712a063deaf610af579bcf8d3c48a986872bd96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

