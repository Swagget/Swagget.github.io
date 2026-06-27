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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTZO6UC4%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T105124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDatsDNN6fY3QttaUd%2FjmOevbavF8hDOjxCpQMx%2F4zHNgIhAIZO7t6A1ORNmxXlcpocEUvJIYlfZsw%2F7%2B7eHszU2PLyKv8DCHsQABoMNjM3NDIzMTgzODA1IgyU6uNJjrlvTavFwlQq3APGj%2BeTPKC1yXZyUVwlP2%2F9XwMyjOjz%2BPD0dkwSErcryl3ZmdvgOgmtijTO1aj%2BBMFNEhtddj1CiXMiTuIPcxseyXPA9%2BMlNB%2BsJ7tB9X2BFDmqDMBF1HJHZ%2FxAikFFyecwDxmia%2B1unnE0dZawKQ7sknzJL9UQVGKD%2BnBoy4G641HcPJOLpBwHbcoNtbFQeKE3TU5Hy49pJYXwO0pdJqSVC6OdNmGY7jJldpB4N%2BuBghojwm0nLlo3x7QEgLfnuu5a7HBKf6nfzcskFT65308Jnt1nF43XapzbtOeHnWJxsDYkjoD3niMqq%2BmGZvNthAMCxwKAv3EW%2F7HLT71TMZngyvlWvVB6wMgCFoBJ4YP2sDCfzfNPnv%2FF9vvNinZxOiwg8EmnpMrPvX46147n9mjZcB3sYRE%2FUQlxp%2BdHiXlEoCSxhg5nxnH1vIOk9axOV%2BSM0pd0dDD9VSZcit5DK7ceLggx9a9MOhCu5d1EErK7wDmVfOWUwrN0pEqO7FY89m5M1rBm52rf5hzMOJzVZp6bko1s3g95COA3mjDtbUy99gSQoF24ryR58S7NhqBALyxpCOYKoeI3pr8adIMwzEeNS6sGpKkK%2BgZqvg6KDvAkmi204TjCw6mqKHf1TDCBsf7RBjqkAV2dGMAyVLWNSFJrb%2BqqNVStQ0R0GEUqA3BB0q2NS6g2G%2BL%2FKAV7bMoMDLlMZAdZAnpZmARL%2BrXcZrOySJOLTqL4AX8iFXhgzU45Nviz3DesD5X8G%2BqZ6WIsI%2FwTBdH12OMpKnpmk%2FR2AH3qv5el5lxd30SNjS6s4LcatYUolutyNPs%2BpXzUhLUOqQBHWqK741RZJAsV4sPK37%2FCh6%2BcN3mm90Wh&X-Amz-Signature=2f2592dc94466b2cd1139fa15892dd3a41cfd024e6aa6599ae7e942e5eb19c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

