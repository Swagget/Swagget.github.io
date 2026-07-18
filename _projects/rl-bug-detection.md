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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM3R6HLH%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T195709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiTZJP5ekhPQuJCG%2Fyv3Wa4tDBTzThYw7YOvCnlCBQNAiEAuo3D9ePxEw5kL3mDkGNcuqHMKXxBR0TRuYLeLpHkbG0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJrZlZR3gHCmyIxSLSrcA2Nb%2BjsrysVHOh2c5hEkPISWwf%2BBd4pqiSy%2BlfjYx5nY5JPCCSxn6dBcEn1%2BrTUI64ykgVLrOholEiKeMDq7dYnc4pBCKLacAyMZsaEI5RCHv%2FhqqhqybW2EUWRMzFXoqpufGsmdaGL%2BjhOm4yE2GDv5TzQXDhrcbPYykyzpOfpePMHFLJp6gUk%2B%2F26zJzTmQQtcXVLtOPyg%2B6z5wu5xKl6Q6ikxmcIsWBBFEZO7XmOtCQ1avFjw8q9s%2Balskeusppvn5sIMdsK79XWO2dXvQMGmfEPJ33o6S8Gd0M2gIGqNzkBL271iIvmtZjKKU8x%2FNop5sNaV5Uo8ofDElIeIWxYVueV4T5KlRIr76RX7o13Ws1V6oyAD0%2FoYlzHumaJGmHfymeIsEBQ7694AzSl2VXWRBONFKIfpGxB5LR80c5ErP73f8rslRWRUny1u0%2BmcQw1u77jU1%2FhIjqfjYaZuVKzn6wf2rOaE9gq%2Fy%2FeugHLBu9Vu6jqi5x%2FImG%2BFkI%2BFeXU0ABrJ7%2BZh3QkJWqQLAI582ffTziKccq%2Bvm1pXFzo70Jiwk7cgisueCVcmGPpNoXAi7sOaHG%2FT2ObiRsoEh9tgAJZNDWnDw9sxbTevHRJQqLHToyp7F6WrXPX0MJaO79IGOqUBWcHWE%2FvKqbzesCcReOIBD76N0BoyKZJhU5ai70%2BMkezYB28ELTGgMxou5K6BEePFfVvndfhzy8TAOAF4eXiHWmrE7%2BfjATwJfPa%2B3zpz2GrheLpsY%2Bf5zbTD3XOUqAT8osqyxVAbiVJOhJDhKEUofY0WNemImJfyRh6m8VmEmRoXjtl3Ytsuyh6imYDNoJEIbc5mYDXRzFr2mP5u6XRvOGcflI%2FN&X-Amz-Signature=49021a73a1cb2f2af89a478454fe575c726e1baefd3b1ea7e1e48d2e8338a612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

