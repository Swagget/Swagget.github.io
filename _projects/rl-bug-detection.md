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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLHSZ5A%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T184222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG2b83yEVSRfFGcarci2FWNYnRrpwmvgy2V5dOr9PRApAiEA%2B1BMZf2ueaKysoX658mB%2FceYup6M2aaSn7HJqiPCHJAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlKKu5C9rlxENxniSrcA6rNjpbtwxDdYanDxJVUv6p1ldSLuVRSLrD%2BigaMQHBCz1mj3b6VxUpcGmWwLQqlwhbu2M%2BH9mYDurZQYoP4tj2q4KfipaI5JkSaJYZcvMMsr4aLjB652R9Ci%2FAHqgjI6RukQZHehodMws%2BYCe86CpcqrFxXYMGvYakhDy0uMOlnOJR0jWFWuNyUFNY9zxvLCBFSfGUhCPpNMn0EWvzmeZ6kwFfoCYA9m7QXTqIFo32PslwU7NYJTRmdMZNrFHHC0aBOta9XJn%2FoBrcS0pnyW3pN9bfXquCtG%2B0BKSmUA0pL21XIEwOzwSAcLUVOaOhjOlQk%2BOh5mRv2ScpD%2BLp%2B3UOq0G7zh7VVaoKgbcGCZgw1ikjELvItU8v2JCCi4YhyipQBzRnVJNWKjWcDH2djHGiNHc%2Bo0Mj%2FLkhr1Rzu2KxIqAas4tevKQzOU2aC%2BQocE8UNvwhp3IRfCeetGuSqKVsxs8W4GxpTb19kt3hVTjo%2BCgl1wG8YOyRL%2B8kCmQiQTN5X5GI4Zsy%2FdYNOOvKXprI5mVBiJQOPVXaWtZBFHylYeZCP%2FRBJOr8VvfofVhSQV%2FmW7hWLPM%2BFUzkw9i39melB5lVHR7zXalGLo92HoNJSbs8OtRM4HCI64vOBMMHR7dMGOqUBm0GhurFWMJPAx%2Fv00nOjbfkp4eYV%2Fib%2Feg%2BRum003ozQpj7Cgx%2FossOx2KsCyy%2BDp%2Fj%2FO3nj%2Flo8z4S7wDEsSTuvLM%2B30nsoulsYbFel60dE5cgZju76S%2Frp9VtdeUmszAbhijClHq86j83u60I47RvaoyHXbMjuA4UBMDMwWxqdLVq2e4uDaBe3ChIYYW8ieY4YsH2LZ56uzbh9XOqgk1HIRqp5&X-Amz-Signature=9e806bdb6da0f59ebbb88c0bf326a870ce27b682dca7095daa8052742f80286b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

