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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EVIJGLY%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T054427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzqHz9O650cC7bOiWax2sSzezJwo%2Bu1RE0ap9Yz2RRwQIgazc4ToYxNZqJ%2FqlO2IG7H7BWoTBnfOnlxIGsy0%2F8%2FVkqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtrRds%2F9UGIGvERwyrcAzfr5gZKgfbnlgMexFGDRIjc767fF8vf7BMVVFrdP0CZWkfusm1JWt5EHERygCzWTeIjiChNgZvAiqB6NZDji7p8e3Zqs42rZcJEXyIknAPdoeBdJk9zyEk%2Fc6HcZ5imSDpLnSAHz%2Bu9FIrwAwH7jxyyU519NrSQQk3FhrWlf3f4%2F8243OFqfvRVX6MQquIvyXGUupjY6p4auJe2xhTGAYcZCAdwmv1EYSN2oB8kIcT4r16nuqRGp0K56R4gZKggnkyRtfjSB0ffkhLUvTmeMoA56BYCgMvufAqACeFe1gf7tHiL0OGTEGXIzVlPUaYxYDV4AFqgczXjTcRWc28z3CEXKWxK164wePntaX2Y%2F%2F%2FxuVUbfwz1azuV3WgOaZopOHjfMKDezr2rHnP00NnKIH56tVpdrhm5bpevtHtrOpus8UJOu02Sei5sFBqN95iQ94cxDJJRUSlqL8cujHS0UY1UdqaQbC9ImHPvSLXF%2BLIMqYK9RvxriY7vUyPwQubTtL1go%2BelgfVhZZUhQ8sjJNM8ofbUAGBUyR%2F6Uu3rzrFI77tIH66R1fC5gV7P4BpxPEFzKrzSyy92tEH0ZzqCqN8uOvL8tj6hDFgLxLz9aw9TspS2rIWU2%2FoIkcZSMKfR6tMGOqUBuHiQzhfOC%2B2o0%2BrqYqNlVjgQggAiUp%2BPbpoNiD9gHmKvyJhM3Tqst1mOK5%2BVHVFZnF8JrkHp%2FMbKwhvG10OCn9RW0pPLP%2FvkMdzvkVeXPzmMf9y5bzdfvAIODwm67PvcjMq6A2c2vGO5VvnKjEfFcuBRKN9fuSYbOh6Z8W8KgOclS%2FjzIoVzpWfxVu5zCRdvHYSfO7MUNiqG%2BTrWDuLQwgfEHBZK&X-Amz-Signature=a3ab56b2b79a6acd224de4d7262578a892a538e8697ddeebd88e1f0616ca8743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

