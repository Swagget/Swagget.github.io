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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CBKGUD%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T191950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDzyuIkSGyMf%2Bcmy2F%2FXWkbsf8vucATzXcepnT63pQ1uwIhAOa9YjbsZEd6Taf%2Bx4gkthx7bKa2DrzjR8V5mQIoqHUdKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLArNsfYNFPC2FCb8q3AOFqlNuPwAn2ZKmyw2l7SyLv3zpy5EwZBMywDKCGf9Fep9xbkWow9044znrlumn4JnWlOh%2Bchgy13iWjhKFlB399Vs%2FIhJ8c%2BxFfFBlbLt2Pr1VO0SO%2Fi8nMreQh9WLs%2F2%2FxpAs1SkJz1i6e3NFMF1YW8etezwwndSh6EF0S4IFANszmxp9hKDH6XkVPytsY0%2BzGJevug2ZGrve9XgK6DjRhvONGa7X4LNXdDY6onRoT8GwOmfXBRZ0ORhQTIiSghk2Fx6qK%2FUQcWX1ObgAQZsYBUgU3FG3rl0YqFLCVeJWVCTXUG6JSqe2bXE%2FfjPxbYXxIEWUpKdoAkzuBmnjLOWtrXzyfruWCflmL%2FhXViE9T%2BlVsYVgVqDMBoy3LNd%2BTciyFFA3bOmp62AAzaM87mTSq5%2FPZN7YFhlC%2FstSvGc4WwdhYkfyMsIcFl3diFHWUivPFs3m37eyfqxV4kud%2FBg%2BjtXugbffmvq6wD1x5nK906HKahaXYv0l2XSxA9CEYQMyVA2ITO7zvPsxb7TZfGD23dOUWLTFJuR6mXHfM7NYdgoyXSG%2FoTdch08%2FZ84C5skol9%2FjbklBFq7z6ylS6RlzmNS%2Btf31TeSr0NzaWnZn8kB4RDILscyltJ6ITzDx%2F7HUBjqkASHpUh4ElEkOYf8y7Iy0b4y8kLVObJF9yR7xbSlWNQmdzSO4uEefATKfkP5eMDUB%2FDGwvxglKoD8CCsdS04%2Bbr4wHhwigo8i3AsUxt4mA4pGJKRUE3DU6oTCprcVnK7WrGESRODLFekSG6%2BJZs4bSILEaawAyqAVOmU44LTvyEIARtBBGCeq8ZL5r%2FnL4rUcCqwcgG35Waomlis0%2BUL9vnJuVWdX&X-Amz-Signature=bb41295d1024ef2b0ea89ebb1788a1b57bb3df893608d59f3b1887dcc65ba75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

