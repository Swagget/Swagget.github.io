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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7AZEZT%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T104449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEJzZ1SOyIk6Y%2Fc2u0q%2BpqLpuMVMRRnXd3CHT5t3ZgpJAiEAlf10zRVLD5oE38fipaBwNQnCEhFCkOttkPiQ3XBgQnIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBse6H2%2BvL%2FyPsVASrcAzowiy8PrpHzlA0qmxs4%2FfN7lhD0aZKA0GPpW%2FcVD8xeHsQE3D6uECCvkJCO3hkQ85y26j02dHzJWOVoFyj%2BGuemPRF3pMzjFDNTHY5i3g06ETLVxzQ0w86CqZ2wy955KLqkicWdNov%2FgstdwvY2cV1i3VDRoCPHnk3WRS1CFhFs0%2FRWOlir5LOi6tqyVU9ivGfgYvZ1HLgnek9byuifFvY5P%2FXpQQDrteZuGcfFMqYi%2BJSG2Ygbx2O%2BOY8UuIL5sTOgCzHRCMuiJUw%2B65Y%2FIaLe3JQviSp1bhSljQHhvzR6Ts1Ib%2B0Xs89KHUV%2FnYthLcJb7ZX1ABokGt1dW2AjG6ABl%2BmGvacVrQksPKIi7kFgNcLTJKu%2Fn0HBRhYraTSfCTKkL0KrWprA0DGHdbIpKk8%2BYaeuZuTCIV395a1eAE2%2B1DEdNbp%2BdU5fRFdfA22eCBuYTdkQEfV8GIHzoSJ06LL6X1RRFcNZRw4IGGtz%2F2%2ByeOX7ig%2Fq12xVy8UFqMQuQ%2B7SgOP47udSlIrTj5CqgicGX0%2F6Dq9zQ8VULzhV0XLmg2uDlyH25jrydyNqqLxM2x29jJMsQRF9yqOFyfeH%2FPdf0fGdLZqE4OxTkSjxZhlncnEKU3kJj0fip7l7MJGe%2B9MGOqUBbWijflimcQKwlRHlvH%2FndztPFL4o%2FiCBfPe5EuNrK3SfcBCNrXyl9%2BX0dq%2Fgn6UIdQtXZtyzQBRey56kMQyBFjK9GdDQFBpc86GLuoMyq8ntdVl2Pcjn6%2FwmuhwEHqaSrGwpq55gxiO9mHsphRWnmy7dk9QuD22rSijgBHifLzIC4fC9EvjV2Q%2FAa87eqDQO3oP8lsNZuf5L5VxVXAQ31O86ZI5f&X-Amz-Signature=670b7c5a755bb281364207c98248665c9a0b02b93a6f32d18910f9e817a691f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

