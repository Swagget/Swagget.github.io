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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNXHGOSY%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T231551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGcK7H1BsAPpubCuEnIUC%2BQ7hnhFiNafvx4Qd%2FE4mT%2FAiAU7jmViDAEEPvW6nhvvZG53dDdrT4h%2BzIDYdIlsruwvir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMfE5XNBD%2B0UyMXap0KtwD97lLjGEF8LEgZNfXlWjJMBLKMKq29iKRWx4%2FsbfjtKeTHq%2B%2BuHyMLozFpRtdrtTQo1OP%2ByZdi2o8DAtSQ2V2ZVjc8ew0Cl%2FbNc55d4%2BmIMucLWebn9E1X654IJNuT7nZnN6Umeogcl8wlho2FBYy0T%2BEQnPnf2G7QFmMw%2BwlOThainqxBlA3Bjjf818RKqEhApIf%2BAOhf4WkUYlSnvpTMFNA6O7nbO1m%2BItrSMeW4LNxo2Hb8DAt%2FakAfyGkm3nE0fz6tm%2BYdOOPPi8Q5i5B1k2xpAOAx2yxoyFHS9Czb5RLqGir%2FU4lXmJHh5UDTD6tx%2FVy8rKMqC1GAkAJDVwJCWu4C8ZxyuVyfpfAFB%2FnAZyyFsNZrnepT2p%2BMnykdQh6HehEe8nUd%2BYWFmtxf9qe%2B4aw8S7bA5MJOQgZRUWArsLjlUrM2Hlhnbe4j6fhRpKwX3Kf0saht5MF1jhzpHdcOrPTPBKkD5n1BmQ2mT%2FUrdai6F0iPpELS8LoMhCxKVzcqbDPGwbnD5cFXRXo09tCxl9lx%2FwM2n9WeMkMvVM1oW82LNz6NEGzL%2BPdF%2Fj38zz85gkbmy4nctJl9N026AOnXdq31LmTBJwmj1mvo60n3afcmuE5T04NpT8eR%2FYwzdXe0wY6pgEqbJBqIoRcYTc502sCvpZVDzuXuCp13RSctMf5yTsBKdslIw6cInbceeQR4TFZXviebj%2F0YAFLHMyWHtqH%2BY1w2gzdWkY4yh0wSVNhKh%2FCcGG8Vs5k%2FDuUj9PBNI%2FDd90tJ%2FerQJfmfT8BJHTQHGWXhw8qFgHOZUR5ZkSSYqTQrf3rZK1exBgARB8QsAns31r0Zzyl2%2FpRiZ8m83Z%2Ftxa%2FWH%2FqTG%2B4&X-Amz-Signature=b6d391b48743a19df8b224b0de993171432496df0e0446747670c3e575a91e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

