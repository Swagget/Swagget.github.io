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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGAMB4H%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGPn0LF8kruwwf2fb6HueueI6XBk5p6Im1pOmC8Iin9zAiEA0srP8KDd0AMARQgqC0dtyZQARuWDZmh6NHLDw0F4GfsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdqCKuD4CJuMHa15yrcA%2BmwskYcO7hUz6fC%2BO3RLDq%2B54naUsWWqdq76Q7YdrtI9IHlrA%2BTFwdjw22pdyG88PFUZXb9cYmGfnciLezMQZkXkuoDSgMavTOTWGkpBABDyz1MqPUHefJA2WfF1EqmitjXjbiaqv8l3S8v20WQU7mz6%2F2MogEj7Jb%2BnRTcKGPMAx1IYDtTvstCbBI1RkZgv4UdTcIOkgSkvBdxAxLdpG4pbOie2cVnu6erAuEDqFSBFnApsWgwwv7wUveyM6vuPlS7GlzJj8B%2F%2FMuulWgosxIqx1AADnPe%2Bf7CcKg8p2QtoviA4%2F9otDV%2FC5glsUkXYtsXUOpuoxlH3VKNB0CyZlFEfy16Jx07fPpvH0kxDcct1VwZpoKE9XEE3S9dWM%2FrAx0H3KekMfkgSA9TyHi34%2Bx6bxwPbAiZFg5b3fUGh61U4BAeB038a0RyV3JQOk8ykN6tUGIyquxXHRD2QtEJTxhwh2TkPO44ga2wnza5d08smHVug0gvZ98uWsSX7ZQ0jHvXO3mH3EJpu78Jk6t9X3Qk%2B7GLQg7jQRLZl7BAy0EFkKt89%2FqGA5AJWpfC7FzMx3EyVNaISK6OeRVE4wXjB7rBiMW%2BTXuQNOt3TdGS%2BBLbpvx1wYMuL3aAwA97MIzsq9QGOqUBIZUQoTkUZM%2FoOlj3TOeqQgEb5VztTXw2VPJeKC%2BHpdgjJyTCmZ5fVBJylsGh7bIWttaTPsQTto91h0thhWhRf19wsQoEIhY2JF2tmq0EGknP61F3c0fOp7zmlCRTea0ddd0oOPO9kGsNX7CoB73BKX27tFI%2Bk%2F7rAKh%2BFgVAUH0xITrJek299bmJGTGP3ShI4Zw9wUtqfylDxy0gvBcUKywB1W0m&X-Amz-Signature=21613cf7275d8fa043e4b79f423d66890ab7e5dd6511763e86d50b9577334ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

