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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY3XDUQW%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T185943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGP74VWADrqDhrQ6yQo42nYyavQTZo8WPN4l0tJNkUOpAiAfCorBBvwUpAA5dY5Wk6AbJrbEwkZu%2FFIBIfFL5hekHir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCMP3Q2dDGwkxFnlqKtwDogNVYeB4tuc0Q23bmtHveedOnGulHIcAIsxN9CxGojgje52a5WEa69uQ9xwDbClYVKmJ8zkMWyNI5D5o4ExEsyOmJUCs%2Foizh1Eos14In8eyI8TPI0DAN%2FLzuUxwE4JckYpHtJuN%2FKrgOPUVupn4J7nRZmQpdV1XbUohurT7rxtOmsuMQ7bo2EegnUYqHuBsTH7pLI1cXpLEYjOhrik%2BdvyGsjXPGXATUdvN8mo6t7exBkRyu2%2BsKo90zEwLnE1HhnnGSr9yoxrJviAfm6gbQV8RS7OlUWddxlfm5tuzP418seNqKwf1MCXLMN9HQfvIn9EH4btlfr5ATSbU6ec5gF9C3JT0o8V7OEOP%2FATemsoR7BW0l8coTpQ9xPua7O8zpvu0Wqhsw696EYmimaT4LWNA55U7fX0aRmmeaMa3dun1S9lMQykYuYXE%2BjYHxCgBQnDGtLb9BbZLEDXDkPTu3O9OaLZb5se9juLb37GAsNZqA86ao3UqsdGzl8OgammcCOP%2FlSyz84Qx7q9iCqCSTzDVlg3PgVQ8LId1GLsguvJqTjbzw5Z%2FQ%2BfdrFwbtl%2FZJxWmDR2JORC8ZKLq2%2FY4%2FGngIyte87AuV%2ByYG42pDC5Vg%2FJLIJhRfOaGz%2FswmJvr0QY6pgGH9kWXNpkVTk%2Fu0AsblRaOrRc2cnUydomwf4io9%2FtJTDLlHrM%2BI4itZf8CcIjbisxT5e5D3kl6FUn4JcPRwHRvnKCmhNzJwEH8VsvzpJH2xj2A5OBTgQlTzrgTZb1iUl9RHpBeFltT1T6lKZGOZMASprToh9OeogMuXHjL5lj36DbybMjqDqaXSvr6rH4QF634KzAubwvzTVM1d5pEJ%2B6yKbeHUQWd&X-Amz-Signature=93ebf8e7fafd77a92c4abfe27e3274fa5d52752606726ff1f6ba527c259c1550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

