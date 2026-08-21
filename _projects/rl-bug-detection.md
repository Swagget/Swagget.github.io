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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637SOUYH%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T101706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIMyjhCu2P7zRMpMKlf8fGDvkWHAxPmmIswjxF5ZsfqgIhAIbrpWt1JaJUNANTQWsxt8dU7TzMH%2FR0%2F0hOs4nDchxpKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyEN5SsDRP0oyLjxQq3ANXMZQ%2FZiA%2BzG1FU7KoUUfsOzZZuqzR1Mgk329oj%2BavRH0AExhsaJG23ap4yPlatteNBcZqGs45HfbxdwMSnThh%2Fs4QqJO39EuJjHp4ho1H2697vb3ehxRCp29FjeQmXceYVHZs9pjehlKcQA20Na2EH9U3vbBmC1f%2FcYosyWClfp58OuMbsOoGm85DbzpYu%2FU%2FQevBf1c2gVF9xfz1oS1%2FvLoISZE%2FLTC83EQpTnC%2F%2FXy4brE2WSz4r3VNXzEAbQviynYH%2BXBRTFqXrcMnK6gf4nWfAY3%2BfGKtJ%2F2XIyjEjWT5BGIsAq8%2BZm4Nth%2FkaMDEjE2ETz8NI0Mowfby9W558VFOI5h7qmIiqPNzajVzZVrxaMlEDkhsGh960Oc7zdhShHzimmlnkbPEUHIxkzYPCLXqDHCT8cACRRLNiRsw9ddT4BTtmW0rNo7QFmHGPBXRMihimLfYn4sv5%2Fmu3Gm3r1GBD2KSqNAR%2B4ZQlwJWFRLFKrrTQNf3aRwtRZAgMkqMAogVwJz%2FmxCoAknaVed%2FxkDHEAtfvmr%2BUDiOZfrqnJxVRHHoi5IeUSAS52lJhNw8bIajddN1AislpwxRoNjJSmFq20b7J%2BrcWtEndkgn3%2FoQlsJmhgO0cufuCzC8o6DUBjqkAT6NGYflZhZ1KguXzC9d4iHeTJc3VoDFWk9kVC0XDVXw8KTEohS8Uigc1Argr1lDrOj9izlZi6wsKvWwWKKq0rNXc36dH9QW19Wy%2FX8dW5BUnVSWqEbrlxriWsuO75x%2FuAE%2BuuTHnKMhNhI3J8z3RGKcw6308CtTG%2F5DB8QhSGYtagzAClAViMbyEFA0t2RRAg30UUSC5JidqX4n1eQWBc51h6%2B9&X-Amz-Signature=e5f17a0247b69f7bdb8896e7fdcdbc0f7691701a9e8fe5c516c25ad4bb51f455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

