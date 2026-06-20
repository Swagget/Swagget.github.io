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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSSKD26%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T114942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAli2szSJHMjQNTEQQh9YdGG9l%2F9VJ9fT6IdxXnTGkbMAiEAltLoN%2FOqgE3wsh7UPw9e1ruGjFTMZ5PrfVuKA8JHfmEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENNUTWr%2Bs4hNKZReyrcAziZCf8ejLs%2FOGZFkk5z9kq7XOMzb8H6w%2Bx7UtoFOSMa28XhxUFsNndd4HsZ11ibzuqkR9SQIJ0doc2KUJLNMv7GPwc7ZRL%2F8Jt4StSWYWFWRbq5R6KSNyaSpvFAZ9a0YikC6i6Y1FqCroN0lvMHPJFtLU4B726JBDq9K8tTnE2SZMjr%2BWQ%2FLZ6MzwkHQHdXBVqEektNOaX7OcXzF0tIGN%2FiIvuFaNIS0hSMO0AOQ8C2JuYdEVhlbp4uIWFApuvlZT%2BLopDPFempSWk0fPOv1CtHSRA697c8cTzlcUyDJU7qT5ELXNxERpk4Th8Ey3fI%2B8vXuM4Dm%2BpIbVztg%2FBtPApnL0Xbp0%2FlewEK7isOg8DT0RdO2l5uPoGZT6YZj4flUdIwLvs9ylJVklCbazw8p0YYd1YNxmrbNEdq96N13m0qoWB48qWsv6dPYJjyQ5EDd%2BdDNgHVEx3rfqtsGudlj8XMTClCxV3mpm9mVFrmfhVF6BVp70X1C55KN9NKqeH7H4gucvPj06pbLKu0rvI7KrMrKCjQNFVU6jTqaxyE4DuIrdJG37KG9JyXPhun%2FUPl%2B7V%2BulmQCORI0P3tpo0XloWlF8BJhx6fcuPRyORmjBPHKcoNVm%2FayIYSYolNMNvT2dEGOqUBmdhgQh8HLb9jdiNHoFODkJqUfpKbhtXaQzGV8bcd%2BxkpoHBQm21zPnnbbJ0teE2EPOQpMh2OqtVkBWBa1BrF6w%2FTV5a0dKrsc7%2Fxmr383xnZ35f9SkTq6zvCdugYqBT0muW0vrJO%2BVjptjP3WnI5WEIwA4gdE3bBi4H0nhxceFLRucIBd9pGO4853P2r%2F5%2Fb8dQxo0qesQQpbAKyrMFvLpPttAoi&X-Amz-Signature=82c1ae32c7b58f8f68bcce433e20961ba859af7d31ba5d5d90759de327d974b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

