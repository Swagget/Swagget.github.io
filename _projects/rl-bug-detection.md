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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5IJWY7M%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T053844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5%2BenHMKfzVKe6AEEgLbM3HNXn9ywe8V%2BbCXE2mukrvAiBBvLNIpf7VyM71n0w7d%2BZ9hyBynUcMuQYdc4Kw9cmOhir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMjRBgr3XOOWVvG6RuKtwDWR42hxc2NOGU0qyycXNAY7piG6XmPVx%2Bl8%2FQGgSXyTzSzxFtINJXiAX2BBYsutqR0JSPGEzeCeikHRSdXDgqLtixIsSiC7GTttq3XE04Arg4HW2UAc8XhDdm0B2FTqbidiIM431l2T0cMlF2N5F4cM%2BacxA%2B7cP5HGhDDIPUndv75q8lPAyg2oiENRN0TNeESoM3c%2F%2F2WHQ3QOv9hBHVGxEdkrcV4knctUaC1jUg7deLoqG8NaPjA%2Bj6A39lgj31R7MWHkQny5DuRAT0IZHblUo%2ByVp%2Flz%2F%2B7BFEXRhKl%2BFQbFvb6LSbSM9S3qaCRxEb5yDs3Ed5ASE7ywBDZOgFphlykfZ05PoZtId1VAKsLtO8UzUgCLJ8QAKbvW3p38YE%2FDeToLd7A1VvhiKkCJYvf4b3cCbid%2FRFLjpF7MEGKqHYDPgDTmPWAWI5leN7ZBA4Jd0UTPRYy3awXIceChSHoneLCYkqYWyM9ZaWHfTjQ4X%2BUWiq14CyaWw4SDQoJssEtvsXBVA%2BtvyGb8Z8E4jnI0hkUThDvh0c0Kt8S9auP4F8EtCrQciNuU5kgIlEj%2FQDrTLJ4cLlQFgLzKuctmpbEyk%2BYchGaeGF0xz5pBm7mWH%2BxiR5IZY600Un8Z0wo%2FTf0wY6pgEdaSyJezW5e6RF%2B31H%2BhnyC3d2AogwyA1%2FPsHB4w9DxSZ9fXEyU7P4Pb5hqlCZBikiOY7G6H4kCAdDqJbAtaZCF11a1N8w3VPDC7tfQsfrxw2ZtSTF%2FCyiVC%2FAxOxMYvi%2B15dRLDOxl0ObJ0Jh0jKmQFRpyuo%2FO0oJNAdUY0DWBYJDq%2FuDYgteDZaqPAJpJQb%2FrfHtfXktmdYM13Jz9fSg6KIMsU%2BA&X-Amz-Signature=e3c48276fc8fbb30c2328abeb4aeb45cbc19192f0234f0f7a7c46cff17f8e6d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

