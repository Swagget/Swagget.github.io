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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3DEMTYM%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T082809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAwoOSofjeOofuTcFbTTjzIicMRdrZgvk9Eoticm9BcKAiEAnSXLJzxg7uFzbWCKwx5KLmDn%2Fj9U4vsPSXL35bePPdcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDFjD8VwE6o95URTOUSrcA5T%2BDcpGFvixmvATeMx8gWHqBs5Bam5Rnpo%2F89vnVDJNWpj8bhn3F5fzUAipqw5JfyWK9Ne8DbkhFTWkKOXOLWm370iV8uiYYZkgSEidTM1ysc5N5%2Fx0LfLtNGdnyJ3L9CjBV87fhqSjwt9aY6YrrAaHoR%2BZqZ3SnRY%2FZQghM7qTLYsBGu6gnKIHQGqxhSLalPSV89e4AGh1sjM%2FHjZgJDM3HI8V%2FqKu5QQa0wwN%2FSsTlCNISOBYBJdSymZWy9QsWZZyPwecWZf6odCnSezq0KJO1BwAUvqOgGhhykJTDs3w%2B8qTS8kLEFlFX2PlpVaANIy%2Bn5xnBVxGqCmMtANVTsQYqbhmiFp3cQwfYiXG4bII11lbPbHqkmxUB0%2B9F47BVj8d%2BtJDmOBhzR7EToODqd1343vDUEJ%2FgSYVdga7zH5hII2CpBDe9SqjeQmPXHYLhitYaHvExWPGHuOC457xJGAGsNq96oPG9qaLH415ENjA175U%2FHLdyEEw6vOJGPIqRbBpus7gYwbF4dcq1jAxsTaMllvSaIas2QN6V5O0Ibda1S43H0I9PZ%2FJOa%2BrPqkI6%2FaNfx5oC1%2BhKJqDDJPVvq74ASzG7izCpCAVElBdZf7an16IOc6f6aBeHAcYMLCHi9QGOqUBhUngemDRO5Y7e3tAECNVl3ynu62oJq%2BHZEYla7D7bbjhaQQVAM5%2Fn9S0s37qz3dz0Y%2BLuzR5Rvq5GL0HZL1y4mbhdDFj9UgZgXK6Jo8EjqlPattig5b9di6pMH%2FUa2gkMvya3RJKLZtqjKmEDVHZv%2FDdCYNPAcw6M9wy%2FakBdcvYhrtheqtNL03M1eS%2FgkKmGYe3fSJ0RYd2t02jfk66KhBw%2FRkl&X-Amz-Signature=d3cdba64941146f221c86ca86cfa09003fb4b1f159dcfceb90b98766507497be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

