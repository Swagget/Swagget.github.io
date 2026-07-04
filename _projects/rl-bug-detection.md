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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIP6DIE%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T013022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICD1J%2FhsxQRDUwEYOBdSgMVUmvCzI6YnGm92a44SLS71AiEAyocCckEnM264ZiBWf5abCk4bMwq9lEIWZkzroXi0gA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG%2F7otSZHRVcO6TE%2FyrcA%2Bs9aS%2Bq2Pno08%2BvN6UaRexbUsfMbTI42xtHewtOcNpwP026k3JaJsaR7YhxfSehaUk0Uq4bLznFoPogvTx%2FWGWSzXLCszC%2FBCsqUwBJdqz%2BnL6PXDQNk1t8pWaUFcHehEF0aabAiU31Iy%2FFaB1GssEfwZMXYodFUeBgCFqSLN6SfGRlF9Vm75Y16m%2FUb2A0uUKXG5EKPjxq5Vi30AAj4KTvjdQK3HrEzfX89i7hRD88X2UZni6pEHSwnIgjNuZ2CAkxr9QAspV589dzO2PXvJYlawqUfdxYp8k%2BRL4FkxRS%2F3eKZlQnTwv%2BiCft1pk3QL3ZdsW7nMGHN6gMv%2F1l1dtMLY8fZCa1RNH0JHkqqN%2BLsnpbuPpuwVhbFrP%2BwEGSgsgLb2PGYcrZjKJGNZFUOn%2Bp0XsG%2FMF2aaXUuufH8LpR14Twtwr5pyKk71AmEw7Tk%2BF9ZeD37vSFrfF3HjflWqZnu%2BSTqxpwc2ykFUecadST5fZqkuxz0WDLcrTIa487XnRkHdoZVbGJO3yvIL3vMwA1GjUUv2DD7Kz8kja22xmS3Z94tj2eTL2Ap%2FSBqtiySP%2Fqvs%2Bohy8G%2FyLRhtBPn5xbsdnMCFf5kl4kAfWvuuirf2HwDfLkZo9YVqiqMKC3odIGOqUBToVIhBblgWMGDmLcBjmiqqIEyFiry7GfO39UP0iNTdIUpqFQ37A0N6tMvea6PJozQP9nzjM1RzMjH9pEjMGQ9qSfhbRtHXG9C5phgbKm8nEM5PAIibLGIn0TaDEe%2BKj6AnsgsNLmHT8icl5lFMM%2FfhR3P70kCNJo%2B1ixXBj8pcLOtjrsCns5pGvuAXr1kt7StmNK1ajcoewiuxveC1txPEEw0lBP&X-Amz-Signature=ab5b4424dce7e709b05af26482582cbe39bbfc333de7215ce0bac882e0347147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

