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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUGC2WCG%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T091514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFYaaIK4iLKJcyA8wMK2JEotwM4tHt7Dr%2FzYen71rY%2BvAiEAsRC3%2BAC1aJwJU3RkKrz4R7PEahxRYzZIUcuDd21phoEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpSwREog0hwmdq42SrcA%2FwIXFSX3GFA%2FN%2Fuq1holfIvh%2Bms2BaKazszdthK6%2B%2Bb%2FuLb9WIiYIgV5OiTjCvFlTJgF%2F6JeEgptH%2BW%2F8aiiRMUOLUj3eVS%2BfmO3MuN4gKP3FnGlAzF0KK9Vvyv9u5623aP2LAfg840yBWEKDp43Q64ht6NTiv8Wcq8xyaz0jkQ4SSN%2F5pCevm%2BD22zFyFRIE5O2Bt8WaNWAy0wZng8WKpppOan%2BB42dq2idNPGNOzJ%2F7sZHnrKyZjeC%2FvfeMDB9hmDaXsCsCP2P9L8ArFBGRl3BBAPBzroku6IR3l3uavw%2FrUZSCEMbEjyNkoRqIJhh6DQ%2BuEPlCN2pXIOfcXiV8iMaT0GV2FGfgyW%2FDTmeO%2BCB1jdR8SSkBrEQQG%2BzXoLR52JkJzw9blr4JyyE6gZWcU1CFysnijqBQi4dejROVCrgruYMDEEUIOJlBrZUw02YYMa9gnyXZQ7jxIYM3nVemwXVz2LX0b%2FZkkwQWEdREvT8uYGqtgFiZqnwU22FXlg91nuQbAKYtdyCQ7A241gJrHRotCOWhND398nSEn81JqE36d385JXx2KH0eyzwSxfXLJtheYW51%2FiNjTUJ7u2ugWxYG63O%2Bjkm31K99K1v0InofkoXau%2F%2B7YrC3L7MK%2FZqtQGOqUBlFxAeCFb3y1XyM1idtKVS%2Bpuk%2Bg8%2Fifkh5JXcTC1UhulNctcGOxRgC%2B2M5pQ1VkB99ZY4y3IK51J4GukEkPwSjt%2BGyMbAfALy7LHRr0mBmtt%2FufnzPj8nlbQSNlpILgaGdT4iMZS7%2FEeJKQm3dJbXHHwhweofciQ4qxLcXQP3bg6vDDviEJYQ1uSbvdM08NBrdYfvpPgatDgzyfWuM%2F4YQbrh1b%2B&X-Amz-Signature=3e53223a65cbdc5c71e4c36c9bcc385ea3d2c688948e55c4e29e5cae25f70b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

