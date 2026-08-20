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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6R6GGXB%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T142309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHkLBcl1VyJjyKofuUR2vae%2F6V%2FGeksSmfReuRR%2B1HkQIhANaGfo2mNKdiOP%2BME2cb5hqB11zy9mwLHxSoggKehq7lKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpWCUvr1Hlsr%2F8yIoq3ANX1SAjdmkqIFMzQnzX8IPh6oCOSOLwYabCZxVjCSiiOAeFJKIC%2FdSu45%2FH2oY90UY6BU%2B1dsJrLXeTrZljwdC8sB%2FTdWOrVKI%2BToH82KeW57%2B5cfs9MzZgmGlqO%2BCufROWZEtgaKarMj5w79VkxZ%2FdaBZvxnpJHglpa5LwoYCEdXrq5aSiyKnQCCAWVBj%2BoiiC2DvCuBFygC%2FC4bMcbEjz%2B1wAiHkAN8NGIWxuPhxBgPqhlVg9v%2FDyE%2B8yJ1Oj9FW8jPXWUdVyiwfecDh%2BIwxqxZkfz53TufxlFIvrFxSN0hnSR5mpFFO2l1Wsxu6T6WZxor1CKqUYm34WWwF34roxdZZzUwNdXZIxu%2FRtvtBDwhINaTwej5skofwRihEB4G4i75O%2FYx4tEHhXdx9E1vgaTZhizPgm5aKFrNNmJ1fYCx0OR90%2FyA8r2R%2BHYUF0XTHqKurafZOzkUuZ%2BaUOXk0Adyf%2FQvo0ZHu%2BLnrdO4mJyRBmTzro%2FPzcgXjv0fsZlyiDUV9Mk%2Bt0ojQ5O1cAODKLqCwT3O9WLSEeEeVGvdEPqAdbrzpoR4kixnfVNb%2FIw%2Bknv5JADy97%2FAWSYsRXjvXPA0LSrSOEjYblkBP%2BKoVqB7peQ7o3WIabhzgy1DDz6JvUBjqkAbf%2Baqx%2B%2BGUA5x8IWbU6ATcSZ%2F7f55k6F9hdK7GGRV8qm3sECrcQ%2BFFU7vFhknG0W1NpsIaR5afAP4%2FY15nEIsbcPvlhO2n3VXCxBep%2FG1pyKU1WmQytw7gcISZod7dUntwBch8prYU4wjrUAySrTF5uP1puTWgm9CESfB%2BYeZpgWgV0mQ%2FXOguL%2FYMsrPNSkI9aAM%2BIf1N2Ce0URSTQLNE4gz0R&X-Amz-Signature=0b83193492c6d8f3778df3d190cbc363ccda6ffc9be22203c5f77c529c16c7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

