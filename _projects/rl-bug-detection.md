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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WICUMJLV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T190404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAexeeBT9XucCKXK8Kbz%2BnbIMzQkXjWOz3NE8sR5YHbCAiEA0MTq7OfdRoY7dQjjkN6olFTHd4NJZ%2BCAlhql%2B8kk1wcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDE2T%2F7Gx9Rw1TB11XCrcAwfk227K1bLTmdd%2Bxa3DluHSouOQI8ZMZOkd1yGtkGMvW27cDSqm9YWX2%2Bux154hPnZXbVNVFnZm3PP3kIu7NBFJF06NTzkYlhOGjwc1vhX36ohX9DQtQqI6OhvMvCQ8G%2BDRTcEcZctC4x%2Fu8IHot2l3Xw52jp7gClBlZ9X%2FcRqS93HA%2BOSSvw35fJsRFufTM6DlHV37rYS%2BMXP7pxmyn62z7HPFcEWGjhal5V4eKGyfk6atr7LYjeaFNetHGrtJqWZv7L33Xzp0ML0b0dj925hJ%2BcjQi2yYM5RFTC93Vm6GPeIn9WQJ4KkNeXFl7pRLIw1HZSZEbY%2Bhy5IiZ93FZB0V98Ecir38G6zmwasF94GQj%2B%2BV7D47%2FQQXNUwLfUoxOJxIw3uX%2Fy4V%2FcrdSqbEUcOuOus6jgQ%2Bl7uwJnLxnnuRJ1S5wsGpetOU5JUhRf9qkipmQwFkHiiHSjl8%2FsjYQFayfOc8QAoV4Ld3ijhpOFsz6WJMVBAcQB3F5Q43IxUAx%2Fg9Yubq%2FT0TzUxNwE8U58EvOc5SXPmPsBRwAT86FoQ5Rvr35tNbeKrvRtLDYxO58IR1ofzAace2DBa6AWO%2F90h5cFfKjcscJpA6snAMVgZrIdZLYosuebaZptZYMJekttEGOqUB9qx6esBxmJ4Ab59EKmg4Qpn5asi%2BTA2jggsVI4zCp3en0YmeJZFQT3FYi6iV5QTan3sIfh8xhKUvQ7Y2XmhM5eR5spAveIqretz3fFGBZ54BhB2hqF%2B6lubzg74FGM77KYx%2BvXrtK250MmhYZOWQCbliGe1CSoNOQ9eHb%2F%2FbtOpKjIshEzXTWZHsQG%2F7%2BtF%2F7wMnLCLLENflysN0nMx9f3Lqc9Eu&X-Amz-Signature=b4f60863701a4366917c4599a415e392c18362b970f4021ce970e428e3895ad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

