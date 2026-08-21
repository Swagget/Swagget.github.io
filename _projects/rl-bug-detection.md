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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYI5ANO%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T111450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDomUFMPmu3g8lXmfBFytpkG6hgc5zL1YXNXKiugEW5RAiEA%2F0hAp6OssvsM2lc9tSM%2F4hWqk7Ta73SyPlL4LqVaaFoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExAezf5RjmrfPD2JCrcA4SXsD8vEdVb2ZfQkZPfMLgrNvjfXZyRI%2FwQSevFKcfahyb2e4N0WBfIBbg1%2FxdvUmqUT7pL4xgBE8GmnnTP0kABJUNiy6JdqZuNnTsO6m5TFC0QpuvS57hvUYorbvBsFWcrQOgAYDk6%2BDPkWuo4iCpXyV9LDZ%2BBRoICZfcqjVhXX3iP42NYQUdSYhB%2BwMxfss%2BCvW9t3g0Lw%2BufeQbsLRE%2BO%2FU%2FrsF3ZOYjirclepdSFww6MPsr9oxvr8a37355FbfV1qP9upD%2BZXdlmopVpO3obzeRO3%2B91fgqPyCnH2FkRGmQVxuMAZL99L%2B0838vlgABml9DijrDF6TAChu%2FOoNdGHkLu4KwQnFESEx%2Fkqafv95s%2BVpwPvUArDSfmVOe0zgsNO4Ftp8yhkaKm1TBbLCjfsrI370Je5XPAnl9xTzhzBa7l8n9O6A2aTMHf10STlt3osuDt54JNv2lJdCfvpCHcbVHFD1%2FY5GRI5etj2XXn%2Fo7AszQpqRBJT%2F3V3ZUl7Zmp6cOti%2F6gSocXho0d6xxFEuz2ktTQNYo9ZWfZnDiopF%2BEdP5%2FYatu0sVm%2FBwKdjLUEL0JW1EJufEy%2B10pf6LG%2BrfvhuXQVfuVd9VoSZUdV7GuiQ%2FtwD17dgvMM7aoNQGOqUBSPKAcFcXBx5sba9hH7qlb0x4emYbWSF49Tla8rxa%2BShsKmDRGYAs1mqG26uNXrOyVXlKEWqH2tKP7dVINeFQubXhvNEyhn%2BO%2FJ0w82RSrpgQUeTn4WYI82EOMYgBwm6SnE8OsBVmr%2FwZNNA5RR0khYpUnNxdO%2BLCez6J2WgfgtfLAhdYPBRNyOzDe46XeR6xhCtF5fwP1JY01WzNtjGQoP8l6kQb&X-Amz-Signature=3df42f77f1ef24d391360e8d938321395a8467733a683e2d9937fbe1035c3793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

