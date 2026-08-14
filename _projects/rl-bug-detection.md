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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ULJ7IT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T113423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIBtqpLgPSZSw1Am%2FWxJaYIYG9AdtvXaw2MY%2B8X02G%2BPRAiEArtIsbbik4mugrZo160m7e8F%2FHDmFjjd9CIW33NuZtXoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNf6WH6rl2BorD%2BeCrcAxF1tNQ%2FlS5Ha9FcxCuUq4Gc3poYDK2W5rTxpNauy3hQ26LlNH59FlSyOZ7pRC4wkV3DXFZdAsshazM1Ev%2FknYPDWJgFUzNtsi3%2B75Qtfu0IhmF8cOWVDyKBrgCid1LPm0sYXz6157zMiHzUWTQ%2FTjYvoMCNdolE%2Fxj9D52mlNQt%2B8a7XYKJhLUdmKfBCVhgaJJQ9%2FdA2ZmPKQQGH%2BGPlTsnVrmY1lQwaE71yY0b1i6OEa9U1XqUzqhBJui%2FmaVS%2FXm79TJj9fFEtVjcR9Nz7BZz%2BO1%2FZgBeT3uTLokC7mRug0bn9c7i2JAqs6yNhsT73NM3zjwkBZpoIsfoNtFNXVcDtJGx5MIUc9db1Cnjprztyk4YwZVRpRaP2nF%2BZiwVv8AOiCHzw4eNKqgbaEilGlppO5bUxSnFyfPW%2BidhLXldl98f63P4xj5AhhPeicprOvQ%2FC8oGEXd2qhzq9FfhGHFTIuLjLWqViNHobY9Zxm%2B1gkcK7uY1hZGNOoqV6GLNui%2FHkwN8L%2B9F3pKC4qaHY58yCF4ZvyFkREKcfctGbMEDBcglb%2B44lgROXgLig1RBqeCs%2Brfna0MUov0lLo03F5XQ3jlFfZ0faAjO03UPSCk0z%2BzXkMjFoI9iMAoFMOHw%2B9MGOqUBp%2FMA%2B9wOkz3yjyPNN%2BDGiXOMe%2BjkCq6MuY1lKHNdIUWK4aIIDQudtv29uBEIpkf72AW50t%2F%2BDzVDDSieyXgImc6v%2FfdTg0A60qoH0IaUZuGn4Ch09oDEnEBHXtqsB2HItOm%2F9Qfs7iI2jDQ%2FOsprKgAuZQxmI%2FsZIWgcGc2tS%2Fe4uBPwxNUEdTP%2FU1B2Lni7Pa88oYJwPteUrYJnE6eJpMyT%2BJFn&X-Amz-Signature=e8a8999d1a8f009b091e5869a6d129ee98ea91422912f31c2d07d581c717e00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

