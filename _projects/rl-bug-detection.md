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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5Y3GP7%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T235637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDFk3507rocQdC3vz3pV8qd7vlpnXexSN0J%2FkNAiFoE6wIhALP94XCK3mGzBoufLRavviarbvUu%2BvgqEtX7UR4kbws8KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyvqgvG5YUJCB2n2Mq3APEPo%2FRnfnJkQYordBTyeeDNZf1OkHg8zJo6Q4PV9UCJcme1uS0qFwyVuV6Z6QaKf%2FnbxO%2BCWz8V9ZVgMcGpYSvQVBLbF%2FOhCxc34pNGFZuGJfZPN%2Bykv5KxMMLKSL5nS9mgF%2BakSQetRm8DgJ3i9ol9A4MpZ5Wy89PHegZhlXVF4jtm9drygXWP%2B9Fw%2FB7VdIjDrdijjtX28O%2Bj5SMrB6iS3Q7thKvgvdlNZz9XMt9J987Eo90iMS49E9gjWQDbASwaXtiRRz%2FynJay%2BtO%2Fd%2FwzKxQgucgNbIuLJUIt0pV7nPcQ8PkZF%2FknAu0Lp2C2G0y3IrCrGSBISGWDwnrXFHWk9UKKdNjllZp6cA5p8FIoFtyYGtZ%2F%2B9%2BiOaLFlEzfeu1fTqOn5zXee3XPcr7FzcUBieSbuDL6mVaH%2FM5uLrTa1OP7XBBWyfo55PGa5QiAMYnfyyqEvwjicJNFF2KlyTv1RoqSmB1twNpKllrzit8rPRNHWVz6Kr%2BrBocGeII4Hwf8IL5%2BbYeDcxb9APoY9M3EL2%2FUkl1mAdKfJw3mXnHVqjkvshxQa61cwU3JWhKl5ZY7DSCjy%2FwyCDpPVGcxN9UbKN1%2FyCmQ1Ssb09fisNF8do1t86SUb7jSefr8jC7nNfRBjqkAULmp3Kg1x%2BI39ytyQdVvQyfeeFXZx1tkyzoYZe9TX0u%2FHb3TH%2FkKbZZ69%2BeMSyG7uKUlYeIDxM%2BqqtZxz%2FYJF1ZRUpSqMPgh3SFDybhQNMUNJx%2F4R3vQF08jMCoqN48r2NMdtEY0YGa8YE75rFeCeogg1tBS4kx4V0SC03w%2FmgBKEwRwR%2F09ywF2pLeFiBD%2Bvclgg3wEkDW6xK9p8kIFte2SWhJ&X-Amz-Signature=2b8e0bc151aca2d96392bfe5126d07ee5a1256eb6bbda65657a6c42f47363bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

