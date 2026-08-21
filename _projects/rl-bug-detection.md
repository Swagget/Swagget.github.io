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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BZW4FKG%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T062231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWGCim1sBq2fv%2Fvb0gZrMPXFDfsxCERLsqrXICf7msigIgIt4FdF7q1KWKgueUUq5ZPFFsgu1QJmoq3FaIFbcZsfsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNetKAr8EiSWseco4ircA9rUnLyyroKOtYbbn0HZrQlrD71fBeUFQmVkvugfBA1fIE9pujWjjX%2BRxQEzsD5Svrc6FdcffsNotTfXS%2BjPx5KbY9oEt8D02XxfeL3b5b0ZK%2FNkdhZCw8cYwUFjtiQwb05mjRU%2Bgp9Fn6BFGOS9VmPOJxDNbDS4W2HoefgSMOJgroTdQF5N8%2FybG8ODCDOMaSlIeAZD%2BPvnmOxue8PU6m5qi%2FW0oh2U%2FrhPNclrcn6eWVM%2Fny4uHyXSGZvP8UWX9dbkalQQMmMDHF1F4xSGZxQr3Syafn19oZ0EIP6widrYSA1f0h5W2sJjyeq0kPRTgG0MuTJle1iRlD%2FXY1ALDJBo81qAIm%2B8Z1h5eBpUvuaG5xjcM07wjiOzGLE6V8Rxp4k9NOIg0By4GtN%2F3imKPjhBTJeti3pV6ta0RRKNGX70Xw4Q9hvG34pVuIIXhpSuBEvmn2WGivOgRf85YLfbtnye5v7G7HnGvqMNTeERSHmqCrB6miJ4ZR25dI8ekaImiGbff8IEvxV8AjIi4%2FWuLTLcpyh0yo3nCRwv7ayY6UNI5CF10U2MiX0SBwja%2FcwrjFiz2S4z3YsOX9Djrd7ywoS6CBbjlrRnm3g6N97FAQV%2BlLEPbEwzRZF%2BQQNmMLurn9QGOqUBLbQd6brBEXcK5ViheLs8Yg2kXHuIWAl2ygUk2mdLH6VvpsILQrvX6gaeXOtKwxtcDT7HXa0jz%2F3WNqHTnpByVKoPZPFX%2FhFAfuqutmKjZnuONnREfMI7qXdgb5N5ryCmSJGcO0hLFdHykWqXcPobJqwJhAmg8FGgrvpSBlGo%2BYad5THN9Tfqn7MDiKWT6YzUH9lUQULVd1y3on43xU1q3xrFIsGA&X-Amz-Signature=9668d6227a818defbbcfc1a4d815d2c4017a1a745dd71553e61e4c6daad24785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

