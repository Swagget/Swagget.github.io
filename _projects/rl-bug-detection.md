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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIJNLOS%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T204043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDX6krBSCZoqvnhxtWxYoRe9WSVTUO%2Br56847nXmr8a1gIgHF3ZgBBp0%2B3UNY5cCRkRS3VFLXjPlYDKn284U9BOtLYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl%2B4LdA%2BGHq5llwtyrcAzVtgXGdFBkPYzAhPs8oitMTDRjx5tbXh4UaHCiSUzw9htEAqA9RYTBcG7V7O8mjgkKmIK0EuZSKLV0hdXQRMQZhP5ZB7gr8ttQ4X%2F3Jj6t3M0OQVmd%2BfMp9zhHW01YIT0vOAFZmvK3CwX4wezz4MTRzgq8%2BzmGvKkp8ryjznbtdWub0zOpZ5sk4jG5iCOIzVkPJh4zPcRKfE0Pas1YPvvwkvs2%2BDF40UJUdgo1NISYwaheXTEZYv9j4GmL2YmmowuW1ONcQakUZjglmQW7Zx0O1hydG2R167K9brwV2s6PrAae4quiwhiiBQwZz%2BcGZVVUkXhwe6nbYrfQeWLgIJEOXKSyR6DhEl%2FsC6oboo9G1ES4Lc8KSMyqC22ChU2VLvMEz58xXkjsyoO11Vlw5MzWk3JueDWEy0FvEdWrnTVUsva2yHohWrv57F7%2BNqTTcpTUfBJryqRMUHc0h4SxUEjmlnHcWF0HoU8atwtokRa3yDCKd7tLOmRTBu4aZhPyK%2B12P2rL9%2BKBXPUSgAIvXqJ8Yis%2BVsl8zVxfmVZBuNGASKbLFgwsZOM9ufjLHrUWUmjU9nsgevTLQsCFdPApKbkmGODwwUEBCxHinkv%2BTTSv3x2KPEm289%2B3xu69aMOLxz9IGOqUBLM%2BF8YotYpQiyJg0FQTYuWBFV3EuoQ8%2BxvzUSciBdBSp%2BlQ4XxJGxGAu6DwJBcQBDuq9Gh52yLzAK3IhXrATBywFp4QEdxKHBTh1sGZt8wxkjyQPlb8YxUsjvVXfJjIocPsHhbytprNOE4W4IwUmbxeZm%2BCxwrMR3HRoNbyObK%2B9Vs30Zh82jQjRWaWt%2FGQqFvxQG9Rd7yLAfz6HFaYhvd%2B03S5H&X-Amz-Signature=6c32a8f61b19e5ba0ef255f21cbd2fcb6aa82a251dd35a992095d93f2ac057d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

