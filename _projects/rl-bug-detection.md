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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7KVJYV%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T052611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICw82ShmBM%2FoGE1%2BYKtfXKWJE3EOJqngR8wUkqaxt7WBAiEA%2FUgrDXaCoapsGP8DYxeIOPguZiYQUNEWDdyFVR2A%2Fh0qiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvxd5WQFjOIWD5j8ircA42c0lWoxF6P93mOAU5IM1AIy7UyYZjw0VE35C%2B2DGZcjz7EuhnZ4wEqwcN2M6mcNdtmeL%2B3zmNeDwrVsbqABj8tLaFKOuhiXKAezcfurNDU7db%2B0Zrfxvb%2BlbGiJxD0TFedfb7VZXhAc98m7SWKF%2BGsXuaMmzXlrEqEKDg5Ftrw%2FV%2BHJGgmrVL2x0VbzJAUHpsdndTFojZCiT3xivr%2FlBqoaqpCFkt2GmUTtMcDga2athnvgYOmoY5LCszu7agcu4ipbZ4CtR0tx%2Frn4y20mDj9Ht2f0SA1eFtWMdDkGEBQtYjsI%2FZh48EFl7gIBqGNjsYGVG2Z0A8TKMjb%2BfFQnyEJ5Z2RX5U5H0q1sKQaZdrj5Moe7cEESXKF6L9HugXPuCLbQ%2FxTpFxqUJsw3mfobcDnVxnV9LEk7raIfaiLN5LoZtt3g9MdHihZWPhnk1sUjinetC%2BWyJGG3woJj5yY0RhTgV0GL4BizbdM1f7i2AMnZoopwA1YmRLvg1khxQ36%2FYheLeNUwTEBGn5FEy5qpNsRfsYaNXDElkIuwOiKvORZ%2F%2B7cfj%2FRhX%2BQA1ZzMZeyrpaQlSDhm3FHXW8fpRRnjc6OBCsB1iF%2B5dbOqId%2FLVkqVB0v6dL3XYbin2GRMKW%2FwNMGOqUBMMNxes3zbMhFYmxSDmsBcOgrUeuU31Bqq2II%2FIM4ZnX0fFWqjaI0Mc5382YSKpJ3bOqEITdAf9QjJUR5WxPOsxE7CjDJx3WzeqSkB0jEy8EqhKlAQpZJGwDSkZRnf6qbfc6H6C5JlPxdLhGfnd0dAdnQEQ2UmpVF9DwNCu7IpUVh3tx14DsFuTpcOHdni85raIOkkWA49KG9zhuhgedcYjYgAWa5&X-Amz-Signature=d2a4b2a1b5152097c45fbbbd2c63ba84af7fbcfab91888ae2f9ccbf472b76fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

