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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BUNXPXM%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T011559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIClbPiowtG7GVeubMbP7t6N2axpRcxY7CJnffrUmDhr8AiALsFgCgtbKwEBMFj66lJLGKRIjBGq9YlcyU3kMrV99%2Fyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMNm1p%2FfO%2F%2BMcISK3RKtwDz5ms0immoptODHnfiCvFI1JOuCqHqH9gL2Oj3jjSqdQ3uKO5vpJh62WYGRIJ5YEQAkFQOXjy0cNo3NcvXYEh%2FpEASbvMQEHWWSR9jbE1J1IF2St%2FOvGGGctAZs8hdx8NnYPTddXn6g9gTCg%2Fr09Bna46HJe%2Bnzd0CkjhqdskVwmz4QU5sNrjLkBaEI5IlsQXWUiZ18OkVPfyQQuVDkHw6Yuo3b7UcsuHb4Ugf8iUsPPyN2YQnpYfM7CSQ10y9VY3lwnfIm01rjZLlw2bd3fuq16S5EGj1PL37MFIqemNdODIXkQ3G2VgTea3DC7Y4sL9i0iuyQ102ordqUHb1CU%2BdIu4%2FsyDdlAzbkgKnj4J7bZVHZQmwf5pFXutM%2FIPC6s12AP3QhQ6vMer24I7gJz5ckuKPm%2B2tyfWyf3qTfEaUZJk1Eg7Oqlq58tLJLcegAgRe02%2FO1Lo2HfspTMhN8J9DMfG1ZcDOfuWE9NqQLIhaaEDAqZg0wVLlaO6B0WJ7ym99%2BlqVCqCMCO7m8dUHhcHDiOHm69GmeEJbv7YExMJxfnKCB5clOVnsMGYZplt%2BXhWy0UGhjJEr3ZHk8v2ys7Mn1gCuiLpqjOgyo4z4rD6GI%2BYVyU2oLNvPL%2Ft3qUwxabP0wY6pgESIS%2Fjbjjp0ZiAo0TXKZR6HL9fqe4k9SluDIQZy7ZIwG1p%2F8vjDwvoeYSWxtoE4su2aj50J0m%2FeU1lIKp8EfdpwCbjcp4YvF2ekgloxLafI4eak8CyZRU3ifNLQI6qjewCgFVERWt%2FfTVgAkweHmeOrQm73j7eW%2F1YXPonzrqnfSiR8HximI2bvaJMlQIuW2uQDXwKvMgOk3bIR9se%2FFWeDzwTXBoN&X-Amz-Signature=4239d94f4459aaf325eee32440d980ee8a5afa373d763defd5984cb16808e484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

