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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCWCUI7R%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T235514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICuqqcfvjcibEkNkA7aEsxwSfLrwVfPPTDGPt%2FfeKudsAiBAbxaMvpMlRuf1SlLkaVKK4gAx08Qg8Lx7Sdf1f5klmyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMPiEE4zSFCs7ZZlkpKtwDg5of%2BcrkrP2rmzb3RRv%2Bp1w6ufm08uF2H6N%2F1Vzm7Cmhn4qiG4njf5pt33SHE1an7Vkf9MQjSvpthtU1ikqb9bKAgAcjFfzGXlEtPP9cE8RxeMRMj2%2FdZBTBf3iC4JtRqEKDhc%2F0xe1ZoxHozt35wJsMRfmg9mWpooMIxyCjC8NEpjPHuIjnwGBEndD9nHX9L9ee2oh5XUHvylvI2CLy8HEIPfprXUPzrRZTGYC%2B0g6hS8%2F0zWCWwcI3agEBtn9fidbvdQ4KowowiCmRXWWODVnQG5VTqfpow6XuMDIz4GDeBJSKinNPBxjXzBnOX1R4LfqjNxBo1%2BtshDmp%2Bz4aV4nrtv5ZLiloXJ3a4t%2Fvlk6Pch5kR6Stsx2ZBZDt0JBV8InccwjX70SMSNyCapez5D9xaLz3OxCdgfR%2FLTkLsXQTL6oTC6BPzLwHhku19KVlL5PErjKnMNQiU2XsHqzOxNf3lwhgwIwRjb17eXtqQJMyOWauXh0HegWbfNAQxLlxXEZlDwcGkh%2BoiNOuol6SBS1UqZBM5%2BxtFPVd6%2FDawxNL9jPxJguntZzNyveMKPeLzNh0oNwHHOg6Hg1%2Fbix%2BoVpyoZEbT%2BgLMqriY64R%2BgRkFYKTgOmJch8iO%2BswqLa30QY6pgF4JH5cP15bd%2BPdkq%2FdbTZeofymf6CyguibIZHXlFovbnYQinRYB%2BlUEZH8u8z3qaF4xp3haCqZnyPlynA8bE2uZ68x69ekJBmHzf2Bod%2B85XCz3BD5U86aXmNzhyHLF9rvX%2FX1T2Kdv0QJ1A1JW02BqysLhbegDNp0xpP58pw2ofgV%2F7JKVs%2FiVf45NdpqHVrXpGx3lVvZ0T9wNcenUACYBmGai%2FLs&X-Amz-Signature=cd16778c125e2c937c7645e6343a1fd8f3a1db2086f5f4ef202f9eb68200d19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

