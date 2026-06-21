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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKQ6FQ3%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T034732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD5qvcYLraTPPasieA%2B5SlR%2BS23NgpeGFGNdQ39Ly134gIgWhgimVBEH6AKn1sphLpDHikL9konVXlp1q%2BdxVGzsx8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnMEpTBytDYldEp5SrcA7lQO67cQTEwQSvB9FwcYBbVpg60Ci1OPG3FgIHCEd7y37fzCF8ZG2xGz7zD8446yB%2FeF8%2BaLutPO88jYEDquIy7smlaltzVjwoKwWfZSduhYZ2xVuroeO3pkSeCrjX0WWgx03BJoLtbv1s1Na5Syw7KJlxcdc1F7U3FWsbwmo2QjDQ97bE46B6Yw7fUxMXjFahTP9%2FEoW5GcuaxMD91ITTLtXzLhVZ1xqK2KfqSGD0lmCZfXwAhi%2BWJ%2FMYGbYM%2B0jdL2S%2FJhkbh91tW1159h%2FU87UbYsENjutpDD82tkQDbt182eS30K8vt380rX5VkgFSBV5dNzVZ05lI7UeShfZKL8cn7F7XMPFhWGEQlWdfTM27jzvCcQaZWwIgVGa4xgpofL%2FBuIC1dlEFXc%2B8rP0OLy52Ei5u5LBJqLQKM4NY6u6dRrVVxyN1XsX2RCKz0tz0fsRmnX%2FNg4gHJnGoa081T%2Bf7VWAv3uS63LJkllD2j%2Feh3bUfW771pjjeZaujjAoXTtEY4dNS%2FyVpbQlQZ%2BEWHTw3rlcZwUnKpfO8%2BsFjgp1CdMVAMJ8wKbbosoGoWvaIoaVemUT%2F7MFz0ck3A3Oa2jlQkTzmnHQ9z6JGEQ%2BvB5LDg7JUScxarN95SMM2l3dEGOqUBCgkJYJHX51qBN%2BvD%2FuRDhKxjHylckRmDEEl0L4u%2BwT16DrvzaZDRBqRcauP2TVAQUeoRnQ7K0nb0Rgg2j38a%2Fufvf3wPFyKR4Hh0H2wt6kR3aQ%2BA%2F1UaXUDNZFBzoU3QkNxfF7lUvvHUwgogWCEFYh9vXWzETRlBv27Pq4EzLkTxPj11iIT%2BdH82RjiXktbEAzKmSR%2BCpBC2%2BE%2FprYWk%2FOdKJh1A&X-Amz-Signature=324cd9efe78a796012442f632d7faeadc361f2ba0d81d8839ee293ee4c5dd2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

