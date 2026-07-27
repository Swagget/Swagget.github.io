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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLQZWCY%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T124705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ8xSQlX2uceOWZe5JKIY5oGKOCyRSv4zMlaG5fDxcAQIgCcwP2KDuuI8z2Gh1e79aoKf3HjrUaq7QRKFnkJrt01Qq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAScBR2B0PvLVhuD%2FircA1qBPsoYo7wArASwVByaWzcvyQ%2BHDGcHS9JVoUmIJLnWQaAP8NC9%2FhK8L3Lv0gihDy3RFRdiS7lPDslF0BMruP1yrrVMD3490t595pfjwA%2BCfqIzSt5bVg3wndiXS59xObuNO7JGsnQ0Q7P%2F3Gwmrl08CrDJIzuGRu%2F7FjBY7%2BZSU2OukOk%2Fop1a4DuI0VWr2BEujt07eGWEF5PoCRlR9KTG4E8Mv1l0LlYYpixmeiZ56XLpW2ynQo90BSbb7N5GNITTKcA8Ri%2FdunvBUsqaXdMyQYwdQF6HpCoj6E7UHlx8jAM7tDZ18xuL3eJ0s3PcT0T%2FgJ1Xo%2FgdE7paYfMSagHJbkknlP%2FcYpDv2ieJoyTiK22DZk7XRfNy0pHnsDUeVf5Dl9sm7s8Zt%2Br37jnslxyK3ArFsWyxqncmO4H%2FZTlVrKZp%2B%2FOjx%2BuaoIF5oBdA1GA%2BMk%2BhfIGuUFFgj%2BluCxUw3YHuxWssvYtz8ZhEmtzBDR7VElwgSzAhUJf3By9FG2SMVX3NxEfAr6ZxpBuFhN91y8A5js0h6mpdElyCO37GdTEDEeu8vZRNaYgTzm038iISLPlgbrEBK2MTXyr8%2BfsR1AT7lDY0izzcGQSiVibgOOA96xzaJ3voT198MPaWndMGOqUBGfiu%2F5abFRDHG9hHGHe0Y1TKbhd8Q0Ah7nGg7vLJg6dvYWNm%2B%2FduMFjTXpXzXw72dp4kXHZCfGtLLwH1nLnbWKIS%2FHILSXYHfKGLlCgoANgquHzJSsuA%2BIwYjYD%2BqYM5yysTzV1BWc6%2FqOcSciO8t21eUcjPatEUrSrEqW4XTaeZnlg8TF%2B4BVDdNnb9EYLvTWVyaNw%2BWXSv6%2BnloxiqG1gCvBQH&X-Amz-Signature=a90f55be558c64e5b82276e7d73fd9ba8e9c511998d7473ee6d31ab51c672fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

