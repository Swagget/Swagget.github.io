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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBNBSCX%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T174113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqTZ9CVFDgTQlugSd1gl1xJkHMWWFp1szAFZrrB46AUAiEAylfOAjjWMFy6sIzVbOE5b0z%2FHNnDbgzxQFRcv7rwQkwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDD6mKJTLew8qm7wircA84lAqZbLt%2BiJaYTbLvX9damL%2F0dhRqDZOkRpkFX1VLnmEzBN3HsYXxrrqUi65dB6OtmKLwtlkqZwvSDnR6k%2FNozXQqXiKZ%2BB2Zt7%2FU4POrGDweqjgnFJppw%2FfL8iZNylCQDEzjyhnj6J%2BZpz7Whz%2BG76oGgXZ1OP0zHGNfAi6w4NUHg5orocQzllb%2Bv82fkAxJHD8f4AHA71bFfC1QAkdab7u22EpMqD%2BUZhXC8hLowCaavZCncrcvCSNQwWuU81tEHSYK8m9Y7xiUdEtzgg2XZiShJAwSmufh89hYBSY2ecw1y2%2FPKC2B8aOyuuYe7ERbPTAdF5PITffoLLPbLqGz%2F0uyBakumVIzS%2BywSVEEbEavNSoC49VG1KzDVRf%2BQw4nlp6qFHaskQgLRAsAdJ8sIdJ8%2B%2BePM8gnm%2FyLZGQJA8j%2BvhF2T1B9BmuiwjEjYTkxnsWwvnbO6Prz9JX3fxm4Yk3PpxNU5Bgbv5MYA1%2BSOAiscbXgiYZutJ1uENcxqzZw3c9Ah87pa0cYHu44zOJiarxz1cZNazIcY%2B%2FanUohZUaExxRoiuIyG8lrobN2g8aVvRjOOeuEkMzfr%2BCKeiC%2FfsEef192ynumBwk2%2BUPZjne8Qye9qwx5CAgxTMMr059MGOqUBCvPBHPNRgk94JC0KvPCRV8v%2FHktAHs8kbw9m1QENgemy%2FyfskYQLxvoyyB8vXBI3WphO1ZkPRNONlr6EGxkk2EcRO9N2%2FY%2Fbo60KGmV4epEPOHUxxQ9saOjJTRvdaFccArzlUL%2BsWLzSZ4giFVbapa1wxQ8lTMHZW4%2BlZB%2Fjg0P454ufGjIecEttKI5cWl0ihyinmn%2FClyW9UsWb3pJRK0tDYbjo&X-Amz-Signature=dd9d9e8caf9f25731a007e900fcb8435367092a2df103132b163a62201f48168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

