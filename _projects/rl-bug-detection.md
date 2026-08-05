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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUYFRSE%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T234411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDBaek0kkyGggG9ZqEpgafAnWbRNYN6JNf%2BtP8nRLXqNQIgLOiYBppS7rguRoMlOixHujKzjb1KCMzrvSSCEr7IKlwq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDISvSuIaxxjif8rtoSrcA4OnVFYjoTUfLGWNOmf%2F%2F7sUYwIqbZMugWpUDuy5GoaOPP22%2Bi9hYOpDyU7kb4Uamj8KUYwtHVdrZLJ%2BVLzs%2FKHwiFlsNBDEuCIDCC3Ie%2FWaOQbP4igqMAs0U4avOIraYZ%2BHUkJ7m5s%2FGpVPT3RIvB8CfiHOu%2BhPkSU0WjwqCMDglYuAp3XZE8s3Jvf7cBnczziDFlOnirCIKzCh%2FswkLGlYt%2BMlKnefb6%2FvO8F1IzliFgJ00sdZqZYnxk9VtjiR16WycMyxFyXuP47nRZYBlHTAfHXppNse3166WtZi9ZAt%2BS0lLxEcGFiCxcpCpZsCxOJcc%2F4ltkwLvVbCnzchTCGeCujYCa6aCC5MQuMT2q3p3hLDkzfGuMP%2FZMV0%2FFZOGIDJZZkDdL4C22SZgy3hIHmRDzmpAihD1PDTx2479bxpDx77qFTj277gZgclenErDgs7g1MAG1HCHKt0TnY6QzRf4FFtBJJerQnYc4eP8Zs5yMOFtbqZP2vqVhMtsYnh%2BuRJm2%2FWMymmGekzdFAuNlEF0YS5ezQ1JcyUTAssm2uzz71OUCNpSwWRInpIfW37lQDOnGgYnxOhM8a5LTf027f68qHMx1%2BIWWzZptJAo8nJNy1wfpCEnyG2p748MOSCz9MGOqUBiMLWYBxL3ybOf3uaTHTdE4FjR79P0j%2BbhlfE81qUCIm4vIGb%2Fo7XN01vKJbbK%2FzyuplEe6v6mhZZElxKBZ3jTjo1kxXcg4sm8xalYnj5UjCX3gDhEBcSjUa2KqGkUzXPc01om18QybjhYvdGzOb9C5mu6Tu%2FitvWbqeIz%2Bb%2FCNm8icikp8kGK9QL8d20TCUDP0oU5V3BD3CC3gH5DkYvR0Qbf4fu&X-Amz-Signature=8c9297bd3b126ee685787a1f116f6c227389910c64e68191d4f33b1eba6af94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

