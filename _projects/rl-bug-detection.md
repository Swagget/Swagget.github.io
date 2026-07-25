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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q544KT46%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T105916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCXLbQ4AEMTkPUqygX5VxWEa7VB0rmm9QKhDBkXwi5EAQIhALSCRd4IIS8UAqNDt%2Bo8C9%2FnOsk2d7sqrzMZ8xCNpf7fKv8DCBwQABoMNjM3NDIzMTgzODA1IgyTscOkq%2B1mEHiAGMEq3AMGpTjwlxT5pOOhj0Ec2ck9x8GA06OgCt7FkF2AeQD3KP%2BC3kuIi%2BUIZtWoUFht3Bh2L8TJKwGgaFS70nCSc3XoL5NODrLwt55JSA6BdqP3Z0MxkiEDICejLi3RWQim3FiM6TEAqjrjxKdD5YkHxW1pGlcRj4yW7QQsmJUIz5sig6cP2z%2FGqSv%2Bh%2BEye0eFj8iL%2B5xWZEQ4P2oB%2FJI9oCwvKwqwO%2Ft%2FxTLHu9PwGWaKbHTnRUCoWDv%2F2%2FAyDqeZUKTDXwmYOVMgWN73UQJnsIyh6eLVYGiMSQjI3vkpzv%2FERlGNyX0tdvhfCopP%2Bi%2Bw%2FlCT4z0fOZjJLHGRc5Y%2B0X6U8MF4QbRY2TM8LQKyjng7o3yjqZneJ9c2as3YRxfvN0gX6DWbIGNGnoem4J%2BOduI9V4FdzR0y82G8dfMAXOwEjdwI4O8av9ACK2eQg2xEsDdyL1ObJI6%2FpBFHDTNGLzLqpA57HyOdRsbjL33TRCmwbXeNCoMMrFjwPtXU96Bhg6GveD0ZAHp%2BVorAMISXDfEtVSd8%2BR9ldpaY8xBkf%2BZbhP7c8adiYBMkU3fBiKDxhKU6aNhOHBGCAY5%2BynZ8NS8SzceWor2vUoI7RLiO17%2FC00CVBm1Z1Xe8qK2K9jDgn5LTBjqkAbMRZ6eG8%2BeGlAz1Vo5p5n7QtWWzgfhlLw6bCVS0tzVphLKuKvfUbASxTGJvQ8BolpwvexklsGC%2BK36R6cwFucsab4E7TCuvxOlTCwR%2B%2BNkDBPYXMG7e4OzDOuWn6sGD8oM2UJw2WF6YxwqS664l%2BuEmoprPujj47h2spx%2FvlAutZLksql4R%2Fv4iEEWOQl%2Fwl5f0H27zhJoG4QGQh%2F0jeux8Je%2B2&X-Amz-Signature=35a75b014891c46150056f96d5e4193e6c9714d7cd15395420223b9afb055b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

