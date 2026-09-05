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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7Z6FVT%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T133935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDBmtNAeUKKZKEt%2Bd6s4QmSAJjtSklkb8W89EBzEepkXgIgOX7L3QEdaDOwYjfr1D18Sb%2FfYMKmRcegKfctWoDXt1Qq%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDMAcq5lBEOfNF8JRPCrcA6%2FxNU1Jb5x%2Ff%2FkqMEovPVjUsY%2BAZP7exQt2KoEprU5IFgnkLY7s2LuOcUsq4AkM87VZXe%2BCH1hGrCuumWyi7S7OrypVoH3vAI0Vb9L%2F2SmAHvZNuEu6OZnAjTBIPKxI523n1RF%2ByLr0rDrj7gUMHzWQweHjbZjmcxt17sxtfMqfh6klJSXFeZdvBl0pmFko3CdEYrE7%2F4iRh50R0VU%2FAIPzqWTnv5hDXyV0MvHgzvJQZUxdrjNDbfjXlJ6SBR0lwPSJQWxG%2BKy6Z8DwpC6IT643jNdFUpKaCO81tRBBXeuSAU%2FmvbxspDv%2BDscCkYfkqx1wO8DKqAkxuWA8GFMLuZp5XvP5c%2Bq0zJ8NKniF4zmLj%2BcXN92dDVXgOBdBnRzwnzpRvNM%2FfyBOtU51RrISLzXNhESCo9oJOfN9SJaReP8M2KERNSlssB229ctDyzTGKzAdv4fxDKGxcJY4VlqGl%2FsSfFNdjfLKhWGQurKWF%2BZmZkdCBXHK0NWf4TA8P1GTx86NDth0WmKDU5eKDpgKgWGdTDeHOHFhcTzUJLY%2B3fLzd1d0wBRj%2FIH2qXDUO1WuTbCczq%2B%2FscisX5wkUZiMAXtEr0RSL5b0jGDy7d9VG7tQJhUtkv3WZPBdinflMO2x8NQGOqUBU4XDXes8hizDgvKxxxwijaz9ufc94OK8hpilrS9Ba7KMzSB0H1eqQhXXczujpHh%2F62TeB8ETUJ7k2NQMtRDCXRNXxdSgl%2FcbjuZV7FxT68L4tk%2FxRSM0pJDUEdZHalXurwlJtyUkKShfNWp5AGOx%2FRwAHO9vui6MopvXCBhSyS8zMr85E0UoXGMOZRCX3D%2FmI8mk5nRIuYYe4xf0FvmOsk7tdeC%2F&X-Amz-Signature=ec1b3ee24c30300d6ae25c60469aab4f7dfb8fec3913e0233df6f192b07f35b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

