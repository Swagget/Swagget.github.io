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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6D3O5C%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJtfnfPFQhCY3XuRxzS70O0gzRbOBZqDipGKK32hNVdAiBkU9U%2FgFFVPTfGE7lenNOT7LGbMPrvH0t0O%2Bot8lV9%2Byr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM04cHF591WibhiHhzKtwDjK1ukjEwl3cI075sKt72nrmaRTXDSZbqSxdMN2fZdL135Bx9rzuoS95wFRdbo%2Fa9NdF%2BR7BURujwUFDEky0eKElREoKTzm2F7vyA7fCvPGzcbNtwwiUsh9OjXHnQHmr08htbiFiLakUd7fRvlXDUe3X9LwFC7X8rDcx4Eoi5NDY1yoEIj%2BDXX%2FwMz81M1aI52VLkxIWsTolX9M%2FhODcsbLAF3MkUPTeuPRbL0nhlvzSG6K6am3tS4Rhr9NeBVdl8qZ%2FKsF8ine6LcQIk7Xvk1wT0BjoBCLG0p7a2EaeVPS2zy0XhsFxO6UWcyiZ4b%2FpPTyYx%2B%2BsmbnogIO8KpjUELOdmGkESF9ehrHMh9UcoyxThUPZjo1pw6LMYwaPmIZ9a8RWOejBe%2F%2Bs8vPx%2FQVn5em%2BhdPawMpOoCjnU8xddySwBWtbSoEcs3m%2FVc5MzFlp%2B1nylMZ5DB3s5ElJLrGWmt0cW9gajqeiOtVwOOgGptTdJ7q%2BEcAEt92lr%2FuhkPLFFQQDrWJpkOxWxhRpt1YTae8kB2VZfho1aAKG9XZugaHd8K4Iy3JS9LgpQ8TvxftW8QT7Or26h4YQCOVaGSTq0el1QPygcTO7D1CgCeMgTvcsfiPATVkWeBv2pBZYw3viQ1AY6pgG4MvOXOVbEK0P6RKDD%2BrQ30p34ezZHIl5z%2BJhyV6U4B1OQoxElJGl%2B5%2FSuN4bni1ktVV3M3LqJsptbbwJZAhCnY7Eo9QkA8%2Btm%2B%2B%2FDW%2BIlXsIOVQ9LfDrO4E4vydhLPy6A26abzB%2B8Y2afPp1TCOAGYcmHLxdJGlEL2LkDXfYy8ypGLWfYMBQkKhsLELyKUs5D69kxRtrQ6%2F14vfGmWy6GSoTxyy6S&X-Amz-Signature=383fd18fb8146a65c4a2ffb5dca51d4a39cb1a14046ee7267aefd0716386d2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

