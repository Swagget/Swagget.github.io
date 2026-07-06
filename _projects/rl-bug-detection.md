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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXSFXB57%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T173532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCxbJPMDwKc4JTSDGRJ48YCefL7oVLXeoITInb81rbCAiEA0%2ByVll%2B4MFlRbD7B8bglllc1em2MYbq8eRjI2yLHshEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLVZN04lH7FQ9LcQ6CrcA5%2ByNzTdV0UC87hD5aWZmb3yx%2F3O93RBxMoxpacUFoN3DyTO2HdWLkP9l0UMEPR4YwzizlpdIlUG%2BUiFG6c8lo5gsGGCHx9tPs2gpDTUGs3FTJbztrYY7UXMbCifBwaUj%2BN6RUyZ42%2FkqYapxrcZLlm%2FOqbwDRKeCNCp8So1zBwYhFjO8wOoU3YaOmfTLQb5g6CGo4j81SjlQOtFRhKt7%2FHECFhoYXPYdxyRxQZRFByLTM8VJDP2RjSTYfLLVWcdT1I3d7tiaVUx5NSz7pdlhf4fppP5pCUiFchNyB1%2FZb1I9%2Fo%2Bj%2F1GA5dOIFKNRzZx5XwsL1z9uQ8nTAbwMXqQnCAWZhtUB9tNdFEYKZ6UWLMwQI2yYFDvUeBATfsBSY7BYBYZFX%2FOL%2F423IrRwyKmzyqPby1yVM%2B%2FhcNRmP7giHyJ0QnTaq8DYJMImzLJ33bzZh4CsRc2eCZmYYLGhg9i5YoHA7YOQP7HbqrP53CbwWP4%2BJk9iyri4wtAxfEqLo0Gl2CyWFwTl2Q3KUtMaH%2FrvB1ApNLpwMQ1cqIJOLm4xhpgfwcm%2FyDcvBocHjVzhTBCMFUPERzq21o%2FHtF4ibR1cPpSZz1mIZl7aYYw88rodj%2Fcz3qVxCGtQBXaVeoMMOmzr9IGOqUBAw1IHl9fiSbGTob%2FDHxLY3BunLft3senHgvFwISgjyzdf2pHdcMpsGOnOwQONpcacFaHDBz%2BdgSmlR8mmGo9Ppg3DI68J5IXav1kcg6WbvV23ot9uqcopoIrQHOQjMyrnrjbYIgWnH19y0zgIXpKmCAGJwe1OJe%2B6nyYNrCBq5MLiKxWXBG3%2F9e0lqwP%2BYnFI8ui9a34IVSrVq%2F6xNHnskDuBvUc&X-Amz-Signature=63903cebd28986d1fc83dae1c7d8e162d826a6662158b9ed591a40d8e0a78ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

