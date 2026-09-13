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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHSRSVN%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T122311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDTJVgXK8wHroNwgBXTkdLGIygACd8gd728JO5aMshx2AIhAOVS6l%2Fr1m2jgpsm%2FgAmoE1I8SRqE54cgYwAC31KypN8KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeILY6soQfqZ2F7rMq3AOybXYeGSf%2Ff8VXpa404qQM%2BY9nifMsS7OvMvmP2alO6t8hRsNT1PvUlofZJC7gBTpsVTbMWin35XZ9jAN4bnBY7f7tTARTR4dGUtAKVRYkS0LpFC9j5T5Fe%2FtqgPVOfb3Y5sYoOcxPQxYEYhDexe6bsCU1Ln5lub3UMr1aKa%2BkaHggZ9%2B8PK8FTkLRtT3qPcSLjN4QA5NA%2BW8f6h0%2Bz7vf6PAS7lIsUCG3FeS2Mg4RWbBqk7LQ5hc%2B8%2FHPwS2cOmktwpYGEHiHMphg8Cc4%2FeJWCd56jXIm45CXfXZLBu6vFfT7NuLn%2BuhdiD0zcW%2BtXCYWkwspFNE2RPGdgEjtDrepOINwHZnzx%2BdNG2kPwfKbxHFK%2B0pfn3h4UG4KGKi%2BFh%2BGHkquvY3uQwBDfWnDQE2nJ5KgKNxj2eUktG2v6r14JzVodjrMG6J2CWk%2F3AkgVUrvYXPSJGUCwIX0bfCE7F4hTOt7h71ds36eHV7rj15B6zXzJFafYLd35ncE8bzl%2BNMuCHpgeXsd%2B6%2FZBi8j14vOpeC21FHdOGNHQf2Ol3lhrl8L8VVsfk0yq3H9dj2Cdw0DJx5Onl7eYuNvBWuxDdWW9DuJvKMf679lQkooe8C%2BIF57Df7%2BI6Slh4W7xTD49JnVBjqkAeJVyV%2BIoRAjBSoWwNKMKrsgcgvrTvdIipdpQNyZSoBWQXacpj%2FoOaQPGX6DOLlUO%2FZdp84PqFtzc%2FdhkTcK0jRRRu4%2BfFD%2Byvq%2FSGmW1L%2FHxJrjlZ5h%2B6mRAJGswPZYMnvZOsmszW94ZHpZRLCNfvtBKORQCXPPGadl19xpdla9cm4J8Q9bruVLbtbT0NiHnfVgsm7B3FF%2BJXdQUNnTghc2WU1L&X-Amz-Signature=9ce91ecd3e08ec8b9057a827001cb8e8cdbeba91fb25376141a8620be99d98a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

