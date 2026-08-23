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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3UHFYX%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEcSKif7d6nQ%2Bd9U2PJh%2Bhw2wjQ3CySDLQxU0g1DuoLfAiEA6V1%2Fu0cg0G7zfjftjbVMqlXQhIxVPoT5%2BvbMmspD0ZkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5SDDudbgw0EMjcdyrcAwTolrpkx%2FC0BBFXzRHgpZRaFoq3xaPUFsAfL3QE%2BRKesJrvp0v7b41owTwivEvmckNXPC4lERhzCm7KrHpNN8A3R%2FOCV1eHo4j3pO%2Bfrc%2FnLD4MBjOjLddbxyFKh76lDgpKoejfeB%2B87JoYuhHrvrDa6oqjBesrjWwdE%2B1ytinEMUiTFEGWvCVaPx1cvK6%2B6clZxzSwgTPWN2dGartOUavD1VgQYg%2Bk0%2B%2BTJAFqhlmSexyGbETvoeHYWC3iX6TwFc69QmHRW6sLn%2BywmcZlvyvcvCBmYDDVsPHJB6ZiUzBMNnuSe7INyyeGV20BKyXKeaHf29F1hVWz8N6C3Ac4SaCh0o5dR0hRC00eckD%2FP%2FKgUxcwaNpEa%2FED9NEJsY2%2BplsfCfYylHaV455IhbRuuSIVyMRigNARoNC8WGK6qx6IudRnqZIn43tM10fIpI0Ek5hiMdhbUzahVA7x5PSnkYV5j%2FhyGILCstS0t6jq%2FGEmKY66J76wfe3AAxmK19HSO%2BP1eBYfQaNZIZ8G%2BN5jr2vs2trxmWlBIYEGzRVi7pIf8iTEi5QGvVi8bu1gr4bnip2YYHvdBJDXC2Sf%2Feqnf3KvWDlTVbzDurFpdf1JRAUsqHwVgZGdabcrCsg5MOrZqtQGOqUBZ6IEMFZ79Ab4bz0r8cZIQ63i%2BRXePmFax93CWatUSfLyWTnevKitSaQpLgwp8xFySLapEvl32LTivAC6yPB%2F9YlVeRYdhEBkkF5pguvV13M%2Bcmdke%2BFoXG1dn2IkiII8FbHbOxyELQ86F6PcbiPjXgKa3KR%2Bcd4HlfpH94ks91r0b49fGEXLv%2FBBKNgcl6T4b0eMb%2FAQgmNuTzz3jX1Tu33yMi8j&X-Amz-Signature=b8bcf278c74f68484bc4b9f978e339ceff55fbf6e3ee44ed20d38147309873fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

