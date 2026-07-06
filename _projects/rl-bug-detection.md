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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635L6HT7T%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T111927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjO%2BWGoT%2FanxEo%2FpvZw2ZtXGBfoP9uQyDe6XMuKAY%2BaAiEAzuAKnVFXzu%2F4DXpE7OfIVDvoseCYyrrcfKwNcfVB%2FCcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDL4DGL1UvMjU67yz2CrcA0969YLOc%2FPjfe1tg0WP4RRwizRnDj8cEZm9SDcEty2LuA%2FIwNftMlMXouLdd%2B7KGDMrjjkWdww89qRyvaqZv4demzzjTwsFlq43VLkAMhksSX0OxbBw7HpPedKo3c7uZiyPdbcfInF9Ch%2FRuhp59oj6kKQvdR0tT16eHE%2FP46gDZeIJnV27hpSnk2trXqZOD%2FoO0hk0%2BAPka8aM8l9QtPFn9vxNTfEtwn5RevEAjEIsgsEXFuYvVsO8eecxgQiPUH8ll8tBQ8F5kOxuQdcdEdk6PGRCtyV8AH84vdB%2BHWaMG3QBdQziJBc1PL%2BeFiexXOhJzeEmnMncnwvXbwGfr%2F8kx%2BIZ%2Bt4JjhDDgZOPCV%2ByH4zOYL5n1c5J8ZEkN2bR0iO10He%2FnXFvoHE68rNypyUTCffvOnVX3F%2B2Up8ieo6rLzkeP6XlzsmTM%2FURQMFuuvvsSPAgd08j%2BKwKgj2QEYsPL57tCvY87FiGrhrLZspjIKNkqu8QchfnXHgkev4ZydzSDFIIWWqsgdmMVcB6JtDhUbddI5X7CnMX0Vg0ykig%2BPTHSwjzGhJJDB%2FWmCoF3QgzszUAtg3gbyjai5DCKr0BHNjD7AfO5hZMVj0uxFtCAZ7%2FBIYV4Rx5nK24MKD8rdIGOqUBUBm4gD%2FVqJVv7wAZH%2Fj2tb2%2Bzonkyx0x93qbD9CrLKzdj5dmde6bSWCA1OqO2JeP8CpFueJ9FkKhyrK%2BxN3moQlEx54uQwupclcnoexFv%2FnY%2BgmsgEUXodV%2BYxh%2B0vywX86f0bTVmXhHNbhiGlpUK%2Fv316anRcCDEh%2B6eCYisb8u7Fyh6wFRYbz7HMxYfDcSaj5%2FyPWRr6VeW%2FQIkz9vhDvh345P&X-Amz-Signature=323ae353c01f187e9e1d175aab0fb2fbc74e74c5768e416f630d40ab41efb8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

