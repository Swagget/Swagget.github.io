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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUAJT4M%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXW86DHh869HCMyB%2BMV1uJpHT9pubTjlCPHom4OyPf2AiADDVybURPlhX7J5xpmiGo5thp0r1U9vuAUuXNML6fPgir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM5%2F3yGB5LRtsH2uv%2BKtwD2cQbzV6bnSO5xd2OZ%2FbVeTvzXq1aBhb7nh7gMygk6cCkRVTjZOPlr1nUI%2FDQeLuMgstAufz8UL8%2F%2FZaf4nZm%2FCHORBQdiu0yLyz9ca6mZOy2%2BwN0Bv5lTcSCiglj%2F0WvkbO4YXDRnIBKpdc35uOBF7X724Jshu%2FLvXogJ76DFXpoKFP3%2FSdUnoI2agMI0ZxHKJplodTrj6%2FsU90JUb5DpTL7jQCKarQnUGyl426aufcnEuSTJwQCMRq5ZaOP8DBOTfv8ZMPaMYNxCrm0ZxXesvhFYjhJpeNZw4VKi9c7CLEjg3uDr%2BOpjgoN8W8Mf1WoVMKnjZO0A1obAk%2FP21%2F8FmigqP04pS7Bt5hKDLEcnCTIqrcyHdp8%2F3pFeDjNCuSvLpscL6NOAj5kneVkY873QeaVCFTBWOfGTUu6x9t86ik4W1u1Yk4uMS8xu23ru6zr0NZh9mWVN361cpiIvrG7WZK6C0xStlltmZ20kNznGtTSExyplCOqoraqBRzQWZeZ7eVlqlx1Xw6r%2BvU0zrE4fKvJ7XmpUN4Go8dHhPu6Gcgjg0PNTpyMth0bQ49Fsz8IKegcgZNJOHK3gX4HuHxXe%2Fj2YWC59UTfgRsODkOnTr1zPsaSHfBhF12%2FWVIw4cvp0gY6pgGJapmn48sMfsDqrRp8ErJBYRi6UbFXyWQZ1ErqjsDmFgdJqdFiljHWIZmHy6n1BXZC%2BKsEs24KkQtI4RH6tG%2BWwkuyqms%2BXDcP2o72O2Gr%2B8YalnJJk0Lv5v%2B2Ueh7NwgnOHMMRy%2F%2FFWnib%2F%2FmSRMKLmFHEjMn%2BF%2F2PzcZ7cjQvgGmQZsQSV3l0zLu43mbeJU7BIkS1B0aaoiMgI%2F2aael9ICmN49S&X-Amz-Signature=a495828fe1dd5c36e88853f3791013ac613c8252223c0732a32e5f72184fba39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

