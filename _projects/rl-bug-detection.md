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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPXE45LM%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T184849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC7Gx8aOaKXs9jnghp2jCyXMd8gEzRvuT2AGuHVjWc13QIgBGS5XvJiuoGWOvbhRUU%2BEXzotgSXKBfRqUHAu2F8dg0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLN9SN9EhouwP9lLyrcAwyH0c%2BQwwThaYVmMrX89QdfiSAICHme6oYSPZ0PF3ejrM93EEo%2BLb9xOPdXN%2BxD9avFM67yhhmYfeQmZr7MaepU6FUgBjp6aNyxsMYZ1jBR86Z5laUR0WbfzXcFPRaMsdwgcnOA1dR7Gepd17bpdPGCU1W7I%2FPQW7gIZFsanLhmYT93sSlx%2FBp4%2BzUcntrV%2B%2B173%2B%2Frf7naMO%2FSBSUVpTKnJg%2FOIfeLJCZgzcdBXKauBxQVsGIgoOWlriuKs%2BIli7X9WYMIsl7U1M6v%2FPUKkVzE3S7MhNfqEStfoVL4EWk%2B3WpCBxLCL6Z50eSffAUpMtMRnqE8ZwMnl%2B%2FEz8FW0joLAMgtvMNWorsfbb5JtDHJXPh0zFx%2F6sQODwneYsnd6ff%2B%2BBelN7Z57W1NRQ%2F07Pa%2F5c%2FJE4mBwtzF6EczxDgp6gs0yAclqBZWGqedEUaX7bVblA56TjIQIKtuEvtx6o4tJ4Y7goMwPXG1v3Ze4pu%2FkdOF8TXa14%2Fz7rJ0LZQCNv500jH6LDXuf1spyANGEwedwoNGmuxYbDTPT87Y6ODq1YRmvpKTCuH%2FxfhmTKBCNBIYHdhpPNOGpKW%2BVvlg1CFQSvExVYyhyEbENAzL%2BWVv6pURQ0DX7aHBgowiMJKNvtMGOqUBCg1hwNHa7mJ5UIVaelfBsCGU1PmCjIhlgRGX0K4yf03ooX0vQ0CLyfl7A7jANBVASrStM3CIrfWQTGajoVWmiI7iA1Elw8epZC%2ByBznQa5GzavBnvS6JCjQf06p4okoehkmOpyZ2t5BaE7RS0hTZ1b5z5oGP5NAZz7Ea%2Btas0BMJfv0UoqX%2BAg8aH9W6hR31tDdk8tkAgRudz8MhNXgD%2F5DbZmo2&X-Amz-Signature=08ede0f41e8882e9601f148bc6692518e29381fe1a3229f034f85fb0c796d5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

