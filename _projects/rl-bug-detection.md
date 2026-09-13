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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLNIBVP%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T164156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCANNyR%2FgXknY9OUpa8HILCGxWAyndb6fWTx7TYdN0BBgIgFbRfQe4CpvIu1PV0aMUCm%2FSvUHfsVWtpaJryh4UaLbUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpE5Dqcn6g%2BccPWWircA3GC2w9%2FvEw%2B1gFW7vNsYjBruY%2F0ZpJtxW3VPqoTCp4pJw%2FVaJ4vnZmEoPnUVsHDokfkYSFe8OAK4VOqIMU%2FHBS%2B6WLIHSI%2FSMxpG3CpW4Larz%2Fx9lSA6ggzVivp3SbpH74n1zqfCmDDaguaByaqAVqgCjg8o1OE%2Bbe6kL4V7qiF%2BIakcUF9FYB57CR3mL9Up3ct%2BEMG9etF0oPkcIy0%2BT%2BdcirwEDVLGyOg%2B4wFrLocSRZk%2B36L%2BRdPKhjj7fzjDlpn0yJLguvT4VStffgbRuRDnxbRCG1G7EHHGVuG2IAFD3pU1Dqnja1jzXA%2FnR6ZrjRnUxOyWq1j3yxxiFGu1d3AQx7J2Bfp1VkUGrPGVQPV990WGRQuIIhpishxnKHPkuWrtlNBDz72j3XMlCmmlUMzoRjVyA3tCm1ehCVm2NQt7rT6Faa7l4DJx7pViK%2BvMSZJhvVGJ5rxh9pik1NnByuehIjrji8HnaWcouxPesJQKGs%2F%2FLYve0qEqj6xv7rrUeLKJuhAH%2F2fKmR%2FryW3Z5g5try1T2xF67NmdlXIpYzTOCuA%2Bwil%2FbxZxPlLqk7UOhzIhom5CQCtYfzOV3H2xU5p8VaOF%2FS0r7Me0n6s6RpbOL73fMtBUVZkOxTrMJrlmtUGOqUBhvdK54FeEHLPgI9%2FrFDUiFKX0sjDwRAOGfSnhAKmefvqyuXbgHqGBBHg1bLafRjHl%2BpJaC6Ua1kEmVhe5Uw5HU4jwzi1EZnfiaI1ALqTJ%2FsDlUbDyUr6Im%2BfzNwUX3T0vAximEFISO6uqKi2fziKDcvS7nyaGvY40k6lg7Wapx68RlbKGGvmhpzDurlhcgMEI9uiJRLuPOJQ9iQl4wt64NI4EQoA&X-Amz-Signature=6dadd8d00fb4f0c577a060b2e1aa452554fe03159edfaadf78923273a9b54d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

