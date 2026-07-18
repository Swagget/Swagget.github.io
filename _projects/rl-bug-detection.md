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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN45EXLR%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T043527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1vJmmNyjodV498ZsVtnGJnzraPFl040ceECn%2FSLpKzAiEAgE5DLadQcRU0Y%2BNpgxCuKQj34cm4RJ3N9YYQifBlmdsq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDYCIYTrxFw0zE3bZyrcA0OVrh5jV%2B%2FGZq6YTsxCpJB3NsXbm4bZ4Us1HsW9NPYimmwCXlXm7on2D35zKPrI7tH4LTxAQLNznTywxQcodDynTVSEUcFSVk8xMLIeTPid7jJ39wyIACNy%2BjX0ADrcYPrDFS%2F69QgAEZcNNLTNOYDmjPC5ZjQoBtoBKlQBHscvqAlVRhnN%2FojDymMTnvreK%2FmWN3pruEenTGEXEv3NgKcJdENurQCS2pCL9FigpQE3ByFRr8K2JdzCz%2FWS0jaj8KdLifdhoMtceU2%2BXjpC5ozCDR3QZ8896jKFiJOBeYceIxx2YXW2XNxSBaGTWGjo6Ses%2BT0eenunyG9dEJDhfTJj7nYCO0gp9d6b3Rj1Q3dDcAt0813nXYKC%2BA7QHkTF%2BVf5JBTNCThBjBOb2UGNuc%2BxgbskhM2rGegL4ViYL6e7i1YXuY6GLrU2Hpybow2hcqiUklukFyEUoWOFpOL3bP8a02nwVVvtT7wXaCd5QuxHwEUWjJto1lzvPMial%2FjR4CCzbf3GqUHHRlwBUJheSeTVXCv6JlBP%2BTP%2F5BBJS6taHMwJzaMygZq65pPzvhJIH7CIs83IdfB9%2BWRK%2Bb43RNCOVHOU8YV9GDAm5O3t%2BATJSC7Ab%2B2YIkr9pljhMNLf69IGOqUB5vLItLafwTG%2BYYJqgeRFq5lNRcAYY2yahQkEz39u8b6MBwr0TyHfljOWyrfEt9TnTvFZ%2BL%2BRCA3asNEABPgyyaA%2FyEzcgkwHnyixo3wbP0fBeqX0dYRXDyiYTteU4GDWyF9rlg5%2BCRXMHSv98tjxdLTAf2rHfJG%2F1evT1qUtMKkD5FvglMMi4POWe5BKuzkB1i3BuYYWafjOVJrZGdxqe3eMIhYP&X-Amz-Signature=adf4f3263ffe3426feac41d332c84e4429cf96e40e5746415bdf8324529e5c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

