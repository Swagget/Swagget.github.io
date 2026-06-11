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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2UWVSWQ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T200639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICnyQOeR335h2midMO9sbBtHXD68dClqOhxw9hBItq28AiEAgVbph%2F7povJQpfnr7m0Io3IG0GkvKsk2pvKGmSPekO0q%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDNoBJgwEL1QqbjzWeircA8cIClR28ppczk2LXJpPILd4bqMZ3%2B2xJcgLFpIDYNkvHEoKcNI34CzNDEN%2FEDQqGxWmpna50arjgnk%2FRRHo%2FMD925d%2FtOZw%2BAuBk4FLRQs8Xu%2BjoSETavoScruIFjqGIXBJrIOmzdT%2BswU1%2F2AMEZGRW%2Fsx%2BvjwskWRG5BaFIVUARKOlanKL8RV83BWsyJVdBvsNYDJuqypZbW%2Fjd7b6r8U%2BPydaX3VfZQoAPs2SryVOMlgGmSzMcsWPIGyqu0Fhr3cyygqHEaYprYs0EUEvQTJ%2B5yjoH4wb9WSxdaVVuJUNGnPJtdmf4fswCzfskwNbimz8VowX3umMqcZ0Je6JzizZlU4NKO86uO%2FVmeMXzOERrx42D%2FyBizpEO6XhiXGHwNNeqDdmsYdooS5cM8Vc0jGzoZh7gW%2BN6Y2slAkbePbWv4G59Ja93MaAvhalp9YL2%2Fb7vAMfV2eqTY1kjP3bx8kqRj22ACb3nEeIXdKAsLxskbzx9yvk7QSpT%2BMcKVpNNO6pEikGjvCebsySr9MdEZTjxukT0pWqii6e31JfC0pEyxYJAKrRHBYn2CLYonXMc11fmOmLVvNcdxnXG64n3Wut9PhxUBCIyRCmYa2tjdJ%2BmyYmSZRE12ruKaHMMWFrNEGOqUBDP7ramAu2HCf7OzckW3WzRvAhowXwY8akKQl%2FI3p5Kf9M4syIvKE5SFQLPTFzeJ2ewT8H%2FWf%2BMQ0qyM1AJ3yl6X6U22xxzZz6eVIT9l2RZe0mzY4LiEBsqMAxNS5%2F74751IVPWxgcb6GmZmyjbY7ZWqkYPlLcMRJqJs9JKM3shAv4%2FOLK0xA%2FBFEVQAaHx2Hl7IOOLtmvCFdHtGaj%2B4%2B166Qz%2Bgs&X-Amz-Signature=a720e207c93ce94b0d80bdbd87ff1bb8b31ca0079b0179261e587d74795c8cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

