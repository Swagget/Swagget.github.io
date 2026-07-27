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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFPQHOR%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T205837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI24s%2BgGQ8BA8Pe4dKVug7O2cbSLLmwygOJ4PJO1I7LAiA9xHxVK63qXxTExLmDZTro9x0T2HFPZ%2B%2FgpfvANv82Cyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM%2BGeM18MWoqn2vLjnKtwD0A8l%2F4eXGUSxjtpceO3gBHWjENahBVX1EqdguQnlco0w6F9jcOPL8Bz6F4Tipzk4aEA8xsSYF1ctl7JQYmCg1qXQGALbEoDgGTfZKhlzpjzxIVxqgc%2FcGkuMxIxf7ulOlVwgvaQ%2BWLhj6L0j%2BWKLqqthtvfGfXBdrmj3qBmVGfs8llNcq4b7aYL%2BbUNV5oW1lBuxJnQ7O3Rs9%2BHPLt1vK1mPXn2berm3TeJXaSFLHzxJYywPdU7oMN5%2FL7z1U2E3G6T0a0dzTISbPUKlqMkPm9VcT%2BDPjJADNrZuKuwYNY%2FfkEaLBepsVIwE5vX9wxvfZr9%2B0pzGYkgr6Clj70%2BHOKo%2BT5E2Vd033h%2Fwk312TpOyqWz%2Fn9rq8IBel9sDViJEZ%2BtZYsdvOjcXd05NuqjLGoJI6TOHYsfNJyxt6kb4%2B9e%2FfsbGVHyYSKmbNkXlxWrsD4oCPNiVzwqu3DWfZO03EjV49XXOrNJ3ThN0jDprqXNKcMF1gPiMyIzg0x4qq4dRvLxc%2BAoFTtdVJ2Tjub28VVg76a1H%2Fzc%2Bz8hglqDPnyRgn38L%2B%2BASLXpzkw%2FbgInxqN8f9XmpEIDkp5MUOVqe5hUOiQH0Vqv1pT5d414vNz1chzbV3p7fkHqjQk4whe6e0wY6pgE8%2FRe91reiJaUZu4a22roVdP22BIE0qAb9tgTdajUaYo1mi2zNx4IJ%2BMZqO%2F1H%2F3HVWWbPykwn1ndF29tCMFaywLRjjYqpR5hhk0ePJUSRJB8FDB0BHn7FvdmshfOTkZI2B8FUz23yCKakFIOAXED5ZvoCFfA2SF4gD4oiJcTToJc5pIPVzxrrtEk5GfSueRE%2Bcrss5h2EPgXwllQOuEr5gU3mWWuJ&X-Amz-Signature=a7594ec30ca6c18769b4be43ba09b5abe10f42eaf5535f90903acfdf5c897db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

