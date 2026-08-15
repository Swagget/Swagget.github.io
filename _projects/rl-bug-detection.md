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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQKM6EH%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T191154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIEsw5eqYHzvg2C1%2FzfALe3e%2Fb5eUFehnKO8eydP%2Fp9ikAiEAyOc9039VHwswMI7M0R8yf3OYPymHTgQOvp6qSfhpfYMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEVxb%2B84sKeptr6ZSCrcA8zDIwYavIrKrlqkbL7xkm9bZeV1BRxOhYSV8xrNMXx1pcg1KliZ8sTyLza7eYUSbye5%2BunHVcnLUte%2FXdFujCxE3evM0NTWUVQ4Y2Sv8W%2Fo0%2BwESROjZQJ6CzAtIGfEW3YEcGJHzYAEaGKNQXxQxEKZ2y2TO7a1xKCBt5L0Y5FhdvmSHP8gcrmynD0EP9lHsdkzmty7guNnF6sR3MWXhRnD1NP2cE6B4aBFi5PNNTyFtF69QqwcDLATW6f7BsAtvSDAdCVKA%2FOCtqiQQGX2YjbzFRh5U9zHD8Z0PyN9oj%2B%2BWo9sLP9D1R5%2FJgnijd92DB4GJ0nQH1ObQoopccXOyzlcNJBWQiqC4kEY4oadJtwtvYvzZ4DJ2KLxaxm8yYmjcHPMBKswqnrlU%2BS%2FUribwK%2FG7uX85hZS6yvDlM0iqiux%2FvuXQysgHPBWGAVE3QnCcJssE%2FWVzxDTamPr5vUYOD6oSNT%2BgjCZ5btChHrz%2F7lSPHSvqCr62t8oISpUkRAiT0MSo120dr2ugtwpCgKRCDvbSvmRkbM6byScYLABDlg6%2F%2FcXOAtY%2BzBzS9qdPub5FNRHElv0WiklhPUcIUE3%2BWS5p08adAuj1rASXii2rO0yaUq53Fe7gm5%2BFXpcMOnHgtQGOqUBdqpDGG1IFoKIu2XVFHZJQ89VkLzHvK0Yo%2Fy3QVz7dJrBfB0KAG18p0NZka9wwvKl2tK5DenYTDP2I9NgjDMvgiTtBsP1ylly5YrD1Ie59i4XxQ0gvURjiRBRc4NGWo3BZFK%2FYLXVdohaDBewM%2F45%2F8T%2FiXb2eXzxbfhG1XGjTDKX3Go0iQjSNyg9Ww4VhmZdreftQWJe9kQ4O3aStFCuuFOYIFes&X-Amz-Signature=b3dbb000fa48ee412f9f5667704cad6a2317ee0b783907694125048fa1dfc431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

