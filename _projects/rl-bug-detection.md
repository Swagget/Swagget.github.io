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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY2EPHUL%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T112412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDxexeiYNeYPLLzsFWyka7NKkA8B%2Fm0PjSqjph9djzsUgIhAILZQn5%2FC2hhcxsy2zKpOZgYuBG2es9nAVzBzjzenrHsKv8DCEMQABoMNjM3NDIzMTgzODA1IgwvPZo247%2B6SJuH%2F9Mq3ANluuxmBuBNyCpRCCtWX7CwzT%2FkFF6U04Sxdru2lOt6BTVxVQQteSPse15RE%2FzSRlr%2FSK7FFzmnuluMeN6g9IzoHO3arovpkaSQxX85ksACIum4J6RTrkqBEPLxFgZ%2BX6jj1VE9sfE5gXsk45x8ml8fJ06FWFDrJ37pUpfzuIG%2FRKV%2BV91wS3HqDrqAs8%2BAQ1fIaAY5Vj3GNyU9u5%2BrwkkZMYGmKo7L094x8TSTlWjr0OAGfdjN3UVduek39mWvryRSvP3x4EwDi781uD5kMPXO98U8UV6farYBFD3aYIgM0Vrtc3XvweNhsRmZ3faQEUt7Wvg2LDNnWYK%2BZtk%2FmfFZRac3XzcF0r1kpsUEfmLr5RdPDfp%2BQUNUy7Yd0ugQrsQzuCOQBRuzpJKpFE4DaiuqbznpKVXcq%2FVIFBI4QfC40c%2BHhjucTWZTZIhyP2GnRymJkp8w2Myxj134uix8Ejg2W6eRqX8MVMjEqbcWxqWPhdGjp0TLbfnvcbqArTVX6U%2FYDp9P8sbRksa13ywZ7dcCnK7MoJTs1bWDD4E7R9zYmZhRXZY4LGgfVyVPpycDziQ%2BnNByBob7pIeaPnmvazxeu88WfsFzhKXg38MBMZyFYkywslqoZJOvdsQHvjDd2%2BLSBjqkAZP9RgiY04M9YlZyg0btCW%2Fq%2FrQjDc3gV3ddUGruC8CNUdaZ0a8ZutpKwkgzjCyWSnVJi%2FViuKup%2Fk1GyGG6GJnLsUufRfqSJRNZ8uav4e8rWNx7XftvRwZKdLe3wTr7zXVEKw1wA7jZov2uKYgyogZzQ7%2Ft7Tu0zm953YoXYvHiYGJB%2Bn3glPhzjPxu%2BFz9FyvL8WfSLjUXB8VUb3%2Bt9mYgoS8P&X-Amz-Signature=c4ab473f7642e55788b4b8c43978b752a10d65267df3e9949ae11d9cd985102a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

