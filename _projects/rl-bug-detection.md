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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A36WBXI%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T232003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIC6aefGnbKzF1pqesvKV1FQIvQcEfLn%2FnrDxsTPuar1VAiAwlHf0sFeqJ6XAXOBcqUkXiW9NFKtOY4xbecwQxQ8AcCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM9dsX50fGHLv7e2tOKtwDFzn32NsA8fBcNuM%2FTQtuYWZyyQZZB9IQbPGF4FE6Zg287UmGTan8uaTV8mNFWRuhbhtmks%2BGNQWsJIV%2BPqIuLND%2FcE9lZiJux%2BM60K8EV8IHQrh0hVrs5%2BODpO6lpxB9aS4wddGSMkqI%2Fihri5g5IzvF38fFbmipkp1NTvv3BTu6JEelWxcpFSTMusP1%2BBCWkNbhbQWFixdrHRbVFewiP9O6273Bh3FqmlwpyF95mDuuMTxbKv0iPILBTB%2B%2B1CJH0PbgpGYV%2F9%2BUjeZHRvQaDlRQYLLAnGgDMNjbD%2BIeHnfF%2BWXKelmtoBWQ%2B%2BZbpCBQcUWISICWHv8TI8RGrk%2FXq3%2FkH6qjV%2FZoUGxFKh3AsGNgWeutToriJfVqPgFuj0oPXH9SE0PVtUct9hcVBIu%2FYPToRH1aF48F%2BCGy84084IRdDnsrV%2BPfhDaT48zsl64hmDjco0pucdyQ2fAGHkqtHPR2cumIy4bI6GLOMy%2Bjy9DYbGnCFFBzMjDyiCHeDSvYznh%2Foh1xKhilA7sxPEgNAn34ewJ8Ll0w11%2Fq1vEkC3VgSrgmWtwPp71lDMVI4YBOU0fB%2FP3fq96e8CK%2Fjd6CMkC3RjX%2FQ5b0wsJ%2FcixyPGcpWWg10JKg%2FMr%2F1pswsJ6s1QY6pgEV55Wgf1Eq4t1u5MvUFTnSYO2zuhOyb99likRfET3RzM%2F4bGga%2BStTcz7dBXxijP%2BOZZQjGssYdL%2FcDjJ89rh2uuGrjMShbIM0j3Jnre9lOChZgIOG0Vr5L0ZwX8TLb9QPBstSTAV2yhH6utuSjiuofD%2BOr2lHfpgVzEVTPMc%2FGg9tTzYt8VyVIWsCsUhaK4ZVZdbKY%2Fr3YWaQ9ZCx2ltvD1%2FXXusx&X-Amz-Signature=1f5cb806fff6655857f2e12a2c1804ff4b2286d434a9e138bb8ecdc3aafb5aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

