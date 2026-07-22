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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UQBE7L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T072747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDhDuZqfYiRDj%2FzbH8csPwVGslo1A6bo2v0YJCcdO6W4wIhAMqSH7DPNY27HVUKH5kQEezhQWn2WVugj%2Fgh6BfMpnrxKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH%2FDwEejYfwssjj6Yq3APa%2FBHhXiD1AOMRHqrThkm4CShQwl9wJ%2BKY%2BTlSE6x9a171rxRl%2B%2Fo6mVA272WHEG%2BU2Tb7TEtIgLeLZ7FoZ%2BVP3X3TaCn%2FQR%2F%2FUDdFUWHVZVsjtRk0Q%2BsxlJjBr95HApqIJcUNzY5pUaQBxYP7UApr2NLFqArSozttsOvhgNLle8lDUzjAYyDzf6quOuV4HC4MS0ZE1hwY5O246x3Ld1mQ1WOpWVtUKlNSAvX5OHkaK4oikZBgFRajnF95L%2BnGnVJDqOig3LW9IV78ghNT1iBhSFxJl0f8m1L7F7tgKTzGsGUqHxGmL4Zt0sI3K%2BACCJhaXsPTN%2FARwYDI0r%2FLGPQyLM2JQdjS1AKonI9Ddcz8Mhxv8hh7vKiYA%2Fk8zpFd1ccXDxIzrY266FzzGD8HS88eI0ETjWVHSwslYCH%2FlO0T25WYKuvOpsXZIKA4%2BQLz%2BfmbBoQSkBsBLxngAIZVwYpnatd4biJ9wm1pMhKauPcHwflZ0%2F0uGhcNYbbub5RSSVsjPamwfEmNoTEsxeXqW%2B4VUnwWDbOmy1975UCNECTn%2BxKRPtTWaubYORkWC8FffuPG2HFbtsoqwDFHXNoXQq%2F82SsyhO2sey8ZCjsXeUOkOfz4uQ2AXXOxGVKcDDCs2oHTBjqkAQuASvxIE3GUkI2NUonrYdT2UwTSAlR85YnWVvwHYR3jKNMVv7Z0WqSMOHpjwo1YDtf6ceHLZiVpBdTOLDPC%2F7kz%2FHeg8dxVwmiQe%2B6fm%2BEhtptWWn%2FxmzM2bHgTqbjQpIKkGElncC3FfgzUeV%2BGoOWxL5mqYlT6%2BAmiusTXMBrbScOALesbpl30BQGThAagJ9m4HlwyFMZbUQ1680kvonoEi3YP&X-Amz-Signature=46275dcb1c10ad936d83c9baa6ec77c27378f8e0d5b4746bd1327355f5e2ee95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

