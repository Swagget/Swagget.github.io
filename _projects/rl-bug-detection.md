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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF7XOVJR%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T201710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq9ZHCb4j1TL2rTPCDNBUEkc%2BMetezoi8mCI3e7jLaTwIhAKugxnzTo97cj85RAmuh6JOMgfYV8JbsFPZEk2OqqOJXKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBUXTUlOijs7E3pPkq3AMJaEmXHEFKLEwXiAx7lCflHQt2mSB0cfUx3saf2PwRI2aVhSc0QTumFY8HSco7eJaHeYBbBHWxKc07f4aLQk7JBaNVSCDZ6QEkGtphEF74waZDo5dWuyq1j1M9Io%2FH8aLkxpx%2FLXvK%2B7nm5moIFL8YpgYDjOv85HCNSrg%2F2ZUERBXllC4C%2FLILjcaImDp0e6P%2BxeIeARj8SfXSW7ekv7aZUHFrrmWK5Y79E9wnzhK3aKNSQYdNaM8lar3v0pLUohG5gnWI4LA55oSlZtzwbZCu%2B1VCsjdnK1XTnQhQJhDMBL6SkSaaLiq11y8MbZmWq6bkzHdiIY4kkLoGco3CWNXlG%2F%2BssaMLGMMDOrJT3WQPKO86fqq%2B9eNgaNzRyWH3Q5n0LPaBGkCK3Pn%2F6LyKCob%2BzHPVmYvOIKlUCach7Q9rWZQdAeNtk3jLIk9leUTgO%2BB6tpPY4wHD3FvsEMk6QJ11c3fNM2jn%2BBFAxFvuz7gjdYHRmsogldGVSBcrCuaJPAn6hJh035LSkGK4RCLVk3CEZ3%2BNeSttypzec5zQYRqLBJHz%2By2lJVv6wVqsJ47H6FNsql1UVjUeae92PMqzODamwTA1XapMFA36X%2Bu2Dnqg5B56NiCsSNqUPNhW9DCHmuPTBjqkAS2of7lyzOd%2FFBgCyJW72avyVefLDzDifWpFRgSHqqeUmA8Th3IOzN92s0JDtQV7Raw0OSviPzL23X2uqz1ELkZNryMMj924QU8%2FcuR%2FZEcz5p7nO0auL9EmCCQEwI%2B4bevWTYlp0u7dQ8B7poeykAYTXxJ%2FxGYSZOuyqrSSzQJIJVJVGRQO3CklkPEVKqgi%2BaG9XZeVJeV5Z7CBHf12c6hxkbfQ&X-Amz-Signature=cb18794c4b2fda8c6d3613222a6283fe94b7183ee94da67e6f258c2941e2d257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

