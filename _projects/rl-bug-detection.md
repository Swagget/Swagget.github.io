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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W552AG3N%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T235039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCHtiqo8u2ETVMcmdsmzT7Ks%2FCBCko1iUMgqmloA56oAiBEN7Cr1GGqYH8pnvNxWCZhrxNAAsDrH7MeztqYZo3fPiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4B7UFVW7aKAg4ZFfKtwD6VOIQikjDdV0CSPCyBzPUJeN4kHpJ21Onjk7ao8UdRkGfqdN1VUQY9jzgmS6yGUHPcfJTDbTZBRQd9XxDHcWKbMy741vXv65q1TeZ%2FY1O%2B%2FRboZWszjyWZv7lAoMstIf8KXKUantBTO2kzEYhHGnlHOT7RvdM3MQhUE%2BDE1FZENh7iB0n%2FEPquEQYYcZONx6XY4pi2YI11LeVv31ec8h7JyNmCRYe4lKvxkFbhaYspFfAXEQQdKV1j%2Fhaql4DHBFgxQWfa%2F1acy2T2AnCrJqSJV6OnxgFDL1Ni5ztuKjo6qeLZqDaxUIay%2Fw8Xjy7RwTY248Rr8YIPyD1NzmUVSbc2AOCwyqp5y8xI4aqUAEsnlJvanhocP87UYwaAiEbeIPugtzP0SzbZYcNGki%2Fdg325RWE0gi3p14KeGPbEBwekg7zV8fJTK%2BgHoF2StjEMbunTMrAH91UyXMD%2Bnsnw6W%2BMeYCz%2FAOxhcMLfNJJzp8SZ0ScEznGwSM0ytjed8O%2FfkeJn%2Bj1XASVTr1HYN5kfUXAZJ2xuaFDaKL4AX9lZzAacBACfDZ23gPU3Zg0d3STx2VT99nroLP76UamnbJtYougYF7jzmOpMlJocB6du8s4ACg7%2Bm9ndTXuNbbYMwkLOB0gY6pgFEAYYNMklXfGsxO2Aux2wqcPn2Upc1K60KLXzQF%2BSQhIhsDue%2BarhGHed7VhFwf%2Bb97Gpi1r5fJ3fM9oVI303fkFmhlrif%2BLG08ZhYtug3LZGZnPaUjxQKVEIwkxCN3BFwoK02gPpFZtAjTgEAKiVcRQcphFi5xItICyNQQ2wOwM7a7Z06rRAosHY4FZdWB2nex%2BDu2AHwFMHSTXGFkh02M71jCn8U&X-Amz-Signature=6dbd5de6f13e37b97a2d31e356252bc82af57696ad2b436636b7069d3d236e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

