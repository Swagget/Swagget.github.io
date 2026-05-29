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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CQSPD6O%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T111705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTzeCUyCh5%2F1ilui9PoEfjcoSGdxoa5PAOq2xHbTySaAIgT4wSMpyZbhuPVdDwb6DIigB1d%2BO8OlnHZPZd1Ozq5jkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwqHX2HRErqhN7SrCrcAw4eupVfOpwQBYTzuEkOrCUWvlIbZ814%2Fm0ZnCClQxpo6Mxq9EL%2B8bPEvzQqjmnjHT3ObTQ9zB6vT6YTyzEydbcwQQ0l1z8JasUQctX%2BJwH36Fra3lj2icWk8%2BCNtfMTZZnCQiWYu%2FYr9LP8KyFw%2BJ2UGlBl0BfwvAXJEhGJs36jhFyuO0KNHOiT2vEY4nAmCcRiAr7aK8BFKUDm65kF9ZVlqJVNh8wXbN3zKMs9Tv29jt1vP5aP6gzOC%2FWQKlnizoD1nL5DlFRrs009DUJB3vllO3svfiBAaYXEtYpY9RiR7vc41srXaHtLLnloxQESkImY895ACtuekVoCsZmNEwltgiY7PR%2BICjSpBkwU3gnZi5oTVSSZs%2B4lakPIRhDWqf9zoVoptZTONVQA2uC%2F5AEJpQgBJsyNpCDygPmiPA%2B80jlg2SNQQMpbXB2H5wUjshCiY%2BaE5MeSybD6hTi%2FIxPcKecU30SBo7hJqExaqU7ssaPEBVrogbLHb%2BRHgTM6%2FqHss8Gj11SusCe8790b5Hg2cZk5tcC%2B6fvq7gfBb3NYKIQ558xMUIjQgLSr%2B6pvRhwGIuyeFumwOvd7Yjzz4JwXLyy%2FcPqPPeqcyveiqit01UAF50mZkRbMaHQ9MKzm5dAGOqUBCuWiM%2Bzo8ciYWg6CbapL31Sp2zC60Noa4%2BhTYYNHixyuj9MCfGKsxRz9UIe%2FwHH2SUQ0NvpSFHDQf5d4dqVEHji6j89i7FVEWGDJM6FWCgGlFL9pT6Bo27mFjcnkxOkBRc0q279dPaP2A3ntX54w2hDoJQNqCVeWByXWkHigLgjRK9%2FAE5K1Ixy1c8%2BYiqkXYP55X3T9S8tRkKAU1CW2b1CEZIZj&X-Amz-Signature=6be33e25d9da8de001d4c152f9d5a2b7b22241b929790bbfe4317a562b27a10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

