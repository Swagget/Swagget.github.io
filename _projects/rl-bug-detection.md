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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWTNAWX%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T232246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm9q0l8aJlyXZ2%2FB5JeK2h13X3yg9E1GVfR7eGRzCO%2FAiAzS8NNjd%2FU%2Bk8gwW3xmQpbA71VJAn8WnNsSRNZNb%2F9SyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0PKYVULOk3KcnSP6KtwDGLJvaKbcqhbn6pYMxTnBrgafWkVF%2F2FkuHYZZCjahNxLqEsYAZK583O8rCx2mxSM4999UY3UifVxaIdL8JaLRSM%2B2RUf7gIiHq%2BYUZReqNVDaKljC0w5wQGYIXjkVdco3LQpWjCAHn%2BaTr%2BZyJYTZijo4E%2FheCinVmj86tiSekSAUzMSbritaojIz6fTbr7HrhCv2dwPR%2BNHVa%2FnBtKRsQ6SogYJ3AX0cj9FqcWER0uivqPKHpTbVxZYzcuSR8qt2aR2LTUiLPYNPtWo3zyQpJvETQ1sHOeSasL3B5SWMCoTjS4KBQLZpwe%2F2YlquMwTDHuo%2B0e6tpHt7EjHuFOzF8Xf6o%2B9LAmeG5KcyzhMfzDbpnf%2FY7fDeKGPfGyHlgGzQGw7yR6l9lU5gc0mD6v0X3ORapJYhZNeaTL5Np2NvnNhf0tPWM0dp7tIbCjz4dWmPwozp5MRqwN%2FfsUfnVnj8leKic8oXlNgOPnNU8tqkDaqF9pQ8U26t40B7KKRcziKE9ktpQeXN5ubpw1Jx2gF2PxaC17%2BzvBZIfuvRg1gVqHbXCuX8tWEIvLqMg01z9KznEqOuodvVXfFn6HgVVudIB3gF2lDsiuIJ2g5Dr8tHeCgLrNwFtZiNu62XT0wjLnp0wY6pgF23mf6D9x5e4SZh5amG%2Fl9KPhljthvCXe6KiD%2FGp6jmvq2hu157MzH32SC4ZVHg5dxwTsCSE4M7sQXlf%2BOJcSwHt9YMfiVB2or4P21ZaJW7sT1tHP3RZyES4SVzIQBkPhI2j1NgbNx00LPaVsj%2FKVzGDKfYp2V6HU%2BSz7a1CnjbcaILfVX%2FtrdyNVyuoyEC5kKMttp%2BVdgs60VDcL%2F4OJrx3RqS0nQ&X-Amz-Signature=ef2b44221977ba6b4e16d1392804b7cc0cb988e6b6331dfd4cec33f0ce2975aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

