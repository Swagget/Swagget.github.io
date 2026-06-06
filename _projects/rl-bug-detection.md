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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWPJ4SQN%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T023210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2Bl%2Fh%2FNWb67ntQpU6GVjcKZIw%2FFe4LsoQk%2BwiGow0QwIgV2qOnv7ptOUyLJAUMtFk2pzrJmknJHKS3l5eFSZnhe8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDEzp2YRLACafS6ynASrcA6DubOIpJF2kibBH4pVaZw6XI%2BHj7GKncpjddt70xCDkOWJ%2Bm3wwEulBO98gzwFSi4FJnnVl7olc8xbiU%2BB1jDay2Fzj6SL1sH6%2Br9f0tcvilg%2BeyghPnAma6knrGUbLG5bnlwgL9k%2BZbYz4AtwT5673LMW6UvvtZ5ZZ%2FGXkaOzy1iZtucLku5W3VKSm3wiRxZ8i5YUPRMxypFOkZtzqRm884H2E76MpU4YX1vy9lEu4poVpmnkU8p68a8Hp%2FMnytTlJkgEg7E8typgnuKjw72zr2AwK3EYXlMERY8XUYLuy7ucLL%2B0%2BOX%2BUVddhzPxIPZdaMliBSG2HkB1Rc%2FrzYjzwe%2FNH6%2BG5X%2Fi9k5KP2Aj19nVkTM0qUYVDt33q%2FpzBm6A1yUnVWU7rDgGKRVQ%2BfjD5a8epLloYfVkK0M%2BAGM74mkWwZi4HZDzJLTXCBCd31i9XTO9EkvKncMWbjJYSkHJGwhmmGWQLSN6UHDnYp8t8RseH%2BwqNowsjWMO4vN9L1XHnPZI%2FV3jIMOkqrq8E1gwFybWbLLgJKJTxv9CIIwvEFrSETXliEveOcREw1L3oWWOT7%2FegPEMuS%2BxZ%2FSKKQ3I37heR59i89UcbuwcC6%2FHyUmZOG54xX0t6YaAMMNL8jdEGOqUBqQ1TqY6ooCPIqF67Apur0wa8sAYYS1XJNemuuGyXK4kgMFUWm96a7wcgjmg1DRqcyCu%2FAQvv%2F0fRmausXWzBBms4t2OasYaX7b8J3mdx1sGQ2rfOIDOf5vVXMbfY%2FHD66l3wYHuiec9lNP8Fnz0F9BVJXEoIYmEWFg68v2R3ZTmVSsSpGKLlJRE3WAqx6SvYmzH%2ByI6hOMHCTIlCINyR8B7ssUH6&X-Amz-Signature=5c730d4b1389e5dd2f19fedb873c537de3f247fade06fdceb24c03c771ac0e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

