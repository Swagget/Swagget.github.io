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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFZHAWB%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T094233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIG73VgrMRkPaDujjMRf4UH7mW%2BIfzQOzx7ofSn3oH4OUAiBqWrl%2FE4dAriU962J7tnVrOswBeEcmqSSdgpp31IiBxir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMePNr2FOoaRxoP5xCKtwDUDK%2BODUJve2Ql0nF4FnwV7ctCl91h5d9QHz6OUhIW6lfved3C%2Bhw5vYV%2BA2dKAjT9RZW8hqD%2FTuFlALI5vjuJnqg%2F96C%2FTnP1ePLC958E%2FFCG0D9xyY5T%2Fa0K2IOe55K0PaUmYLPkRaVgHz7SnWUpNtTxH5wxAtiEUDM43%2Bow0%2FGzYr%2B1vM8j9xrTnHQpHPcqFygc5TDHyE3IC86sOcTBqNIvpwLMkVEuDpJnr6sXv4LkJ4G9qUzyVggDlBdA8L%2FMvLKIG7YhHJNHzFQOdhpCJa%2BRB3Fyortl%2BUX%2FiwO0AkIGmowkh%2FqLGytjNM7YK88nTh19NJzK6bpQPVzVoLFkWHulJToeyqHgFZjSZgsZUhOfubIa%2B%2FpHbGXlWjcW1dsNimE8a1u2mySGhjJ2yOsSs65sa2%2B2Dv6f9op7HaQH3vil0F4IDPsY0Pl0y1fxEs397ol0XtW22LBSs%2FdXoXqYlgO%2BJR%2FLJxBY4zPBxHUW8vd%2BFLvbPF7cG%2FbaegNaFEEVkRwZ1iMzCdW45h8K1%2B6mIKDqXO7nn1WYsWqtHCcUanhnNTg6%2FCETBiOv3ZuSY0M8HJLmoQJlHl8lAuihmFUkG8ND33MqXe4Jg0txnlQE30UtO2uxXBbpASOLeEwy83X0gY6pgHbQwoscPBB%2B6QoZVsuOxibVDpKWYjMGJyLIAGVjFRSJJpKKFn4Xkl5c90Rh235lVNjbfj02KsOcRvgwy62W6XqGTZkVmG5ZDRirHvCu%2B51Cc9PZqMRRnSlqj5doSEkGDTu41tzRehhHpkJ5f5gkTePwOM2QTYd3QeBPkXD2agcEeWHqlvoRMSI7yyZ4rVpy84kB%2BmD0WO4J5dgYJILVzhDG2CruMMP&X-Amz-Signature=8d89e732ee63e4a48623a6152c60825ac8f3960196e9a8062b9c82be5ce12390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

