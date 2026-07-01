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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAETHC3%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T021209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC1Z5e5BIkqUdz8deesvhRYp354eM5mLKRCySrA7oUlMQIgGUjbAga1J91zGV5IdTY4LjMworU9QCxQMBZ%2BcpqQjWMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7E1Jz6vzREPZZvUyrcA0kFos5V4yFSOewFzf%2BHOkMdlw7PdSH8l%2BnKNQTFd%2FRzDqhIZmK6gPuS0RrcUb%2BkGz3j%2Fcxss32MpyMIWQ%2B6GbT9D1RDFQXEQTcP7OkkccRYyJQtxXvP284hW9WmzsU%2FrnxdKgY0YkEoPTn1RbrfL1YDZkcLFPLp9wsg631U8dKBvzlOKI75NBAORP0OjUAav%2FCnlcnpYMFLWU6lph5OSIidNZ0701g8K%2BFB5VedVKyTTo91e8BktWU0zeY%2Bd3n6yAwcg5Q%2F9F7lVFi5cqt0HUYZRf%2BXKaFdo8UoKywHqRTwjc%2FiUo%2FOne%2FNHw2Hc%2F%2BgMUtIKxPK6vWeTjbgPaBYhzbpxbxHtM%2BB83wHdFpulslS%2B7qFgLk4T6GONExf9xMPv%2F5BaQ9obDD0i670iStcZRxFMBptnOw86C3vtiPRZ4JPaJUNywNelk8%2FFprdfQlHaz%2F1B3MGOX%2Bbn%2BnBaL2PmdFwDDOOX9Pb21Mbndlg2swYGq%2FFQjlFMuRBq4txJLwLocbsUKmM4QSwwSEw90N1vGRUMa79t1f4UHFh%2BsN1YJopO0ZLAz2Uji%2B9PgGaIhpZTxlwEnthl%2BowtdPqX77gFBuUVSXZYOH2v4p4iqotxDud%2BnDXN8m2rJ5NTCvIML7lkNIGOqUBDBZIDCtFoyuJQ4%2Bz4WEMpAY3XjhO9YUQo9gBpDR6DYgiM6N9YxlnsqLO11pTLTx%2BBhsrd7TtjXzYz4%2FYJQiM7bOdZ5mIVuGxNI8Rs9zlEvtX43voVOodPT%2BmwXBl0VxF4SDfPV%2BHjSlLnllQKyf%2B9ZHFqdIgKu2DuCwlbOoYndJ8KlaqdkdlaTiIKqNsgvDQapk19hl1%2BnfDF3inhqUy3bwDBTdU&X-Amz-Signature=df3361b5309707d2152646b097ea471e0bbd9b091b8e6d4d9c2804d4c8037c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

