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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U7LXNIN%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T165926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCID7aUaC8%2BY5p7oO5YErhtdwMbyrulL8MrSJL2e4nDc93AiEA6xkQmIQre5TYBQtbT6E5mZ5FQs4ND5qh1QqvqwWBoaQq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMPjRWtjqd%2Bpiguf%2ByrcAwKQEOXlLqBdrIKcyvHHk1XpThO8mbZ%2Fcss0TDLj6UCSDq7Y5WB9pxOxTwa6XdsCVQMmugZ9h5HX0xTNMCeTJ9i6fg2yGdGIwsyOykOo38PMb5pXUlUtpYFngVD%2Fv%2Bze9S3fBiWOaL5233YZ1gxwjgsnsVMdVSvm1LgDadBz9KnLalPqvyp0gOZY8AMtf8CoI%2Bq6jy2hBiq0OmpuV5hh0Dis5VkDjU9oJyhWIgZm8zju%2FdGEBl7Ilk1NGPS4ZJwzCK3Dny0uYR4e1owm8haJZhl94t5dy6wBC7hESK0Pq6ejcRTMEW4e4P%2FxckI4kMR1MXHwaBUQTfXZzPF10v9XTbMwzLWptGsIOgU3jXpDnzqhGj8VMgUw7y0pxT9mBwMTO8%2FDeO%2Fwtxh8dGWdd4tRcpCZDQ4RtlBPGoUr%2F4jk7uXqr8aCVVjtts0nww%2BYTAgtNNRS4YHkk3uPHBpd%2FtORRipkK657idagi%2BxVCyMy0zb78%2FiNWeq%2FTTvh1GTev7F0ZeWXAnlKeJZQWivZMnDJn55gMLbNzNN%2B0%2BqI%2FolvppZKU%2F%2Br7l%2FGxH6TsD5OPetEY7R21a%2Fx%2F1pCJ3TdS3nEf8%2BELUZ5%2FoNjhZEAFstt3a0pp4lXDyf%2Fj4gwWQeRMMjE49IGOqUB5BnXhryX7btTkg1G6%2BZr%2BO7D8eq2IQC5eBFk4FNLOe4OZ5zQXtptkqycHNfwkcH1weRTKPa20pToKmaJ9cyXcplRcfVuTqR2b74TnQom6D23ZIPWgWZrZlfj5olw%2BcI3R6GQ4B28xtQCPiDwfkQuBcnrWqtY8ueaFnInNX7gi1i2Q%2FuvydKVKm5YiS2sHB0EiN2DeZ2QH1mSViSjNA6IIo8uXV1p&X-Amz-Signature=1704dffe0974f82ff69635405b04de7d91534b09bb2fc83230dea204bdd9da3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

