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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IEORA67%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T130646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBWr2uOiSopl%2FXBK5Qvwe731QPgngs8anHSefn2JjeDLAiA%2FkGcD1dmCGFgUv9EoY5XnFeXvD7O0e4r3llNwZnb0SiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WZo5pcmQ5u2rghpKtwDB2b%2F3ADsiJVYRIUSfNhEaNoiK5XzCTLBWvJIvV5ZNuEoyTfAViXl7hlhTewWym7V74O8MyC1pb2GiK4t4VxHQ1LNqPNGKURDdca19Q2x6rJ2HhV8ttvPv2FZF6VDJZWvjJkbORpZIRP0WTEury5L3THikx%2BUJtkH%2BgznxzWNzutDy4O9eawlZOsWZqIXSdA%2FyUDrVpRrSBq0uv0gR37eQXxOjE5C%2Fk%2FZWxxmnU%2FZhg9pm3rU1Az3YqF7vkRZMoHpCSSlMY6exuLlftWSR6gbACrRasR4OwssXZBP3pAoGZwx0c0bwwgQNO%2BBZOHuLajrqSyiNgSDrYtRHbCBdUUvndWN2zvIxpNOz15hQIWhPWE7qa01bA%2F9XyPBB89SXnIiCGtcaWb4H4CJq0BV%2BcroNx0PMTGMsusHZ7uXYinumdTUjH%2FYa48pnireipEdNpmUIGw%2FlH9CrD4O6QPfPc7iw8HC6AJS9a3Y4ARzaVZ1FodP%2F58ClFdMsfO4LKGUc8I0J6wpoJBmQwSj3tbY%2BrO49Q9uk4q3ospjyeY1HUromq%2B4gNHk5rvu8hzcA6ldaoIJqMEpVrTy3zf0LfDwmnA4cFaIthRQEMIwy1eJzcvZoi3aUMkNpSO7D7ERBq4w1e7v0AY6pgHgPdlvrJiv6gI%2B9evlGm4AZv9ukla3yHway2kpW0jaekSBiQyq4Zivrj9lG06QpRoAHDIPa8%2FLrTXQJKGwv%2Bh3ieucglk53kbbKdZZXxM42Gu8Puy%2B3r83A3t1nBj%2Fqb%2FR0TDvqo1e3iRj2rxB2sVA7R%2BxXOGkg4CPJc4CJ8nCoFuaUhwOMjO%2BKmG0FnWi2Wf0xy4JxCmNzqKvWKqKHJ19juZ8zyeJ&X-Amz-Signature=27f1c11904f870d5b84ac9129609cd0235b0aed6ba37ace2f546ad3b680a7b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

