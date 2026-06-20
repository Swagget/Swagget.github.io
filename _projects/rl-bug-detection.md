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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N7EON6N%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFCVLT7XAQWBeLKWvcrrs2LqmA5n322jF2PL6iflJgPRAiEAu5BypDgIPwRVashtxP0c4b9NhqoTTnavJdfnS9wJlZgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXtSLENZMT9VSctFircAx6366JuDmIT9gAuHLknJYu0%2FEerkXuUHszCv4zYk5M6sZ7bjf8mAqE2wZORXceS7cPSTee6BU3Mmp2gbgmwUP%2FKj%2F4MMNqOifbnNfYgBJRUdCD8kHRlNR5fAgv%2B%2BpBJo6RDplmfzrO6cq2XnvXzXUQxBnh3D3PH38%2FHrgk7TlF2nsA94OVvn85gzX7GQiFIcgEzZE7DTr%2FbWg%2BB45EeOisFR8O0DyDs6wn8e29ljBfv3Ku3016%2B6pAK82aB5SdD3rJJ4U%2B9INfFT6tndGyDqxwBiZKTQNsh2rOKSeekNG5PAILCGwaN62Lr4COuXEr13KbEnhInt6dpwsC2lxvl35C4iW7psnQHrd%2FP%2BlnEFCcfPeK5RMnqxZ7QaYGEjH7Rzg%2FlWZAZIeBKu%2FLPD0kt5GgWB%2F7USlIp8ZhIh7QaHDD2iF6cmp7lw2BSZFdA6qFyK7j7Fai9iBw5UKW%2BcefHzc%2Fgal5PwKnhzffPSnOqIdfPeAbv4IlZalHqMLd5pN6qAQ9xuHIjpF8iQ1aGi3LhGpfkfK1lC4iwRSELdAw1MjquFGBFJxozxy0AiQ8HZ7d5YGDkJo6RaVjIkSwMgna%2F8niYj9Y4MoSI9%2F9xHOzizfkqyOwVunWX43ZeavVLMM2d29EGOqUB5NNSJaJdTqYsjKf0M8eatkZ1kAin7BNzyi56C%2BWR0fOaKrCZuUrSOwgh9G2WsJcM5xBdrKuOTQ9fV0hFYIBYMC6GLhcNkwZJlCaYFmf%2BM%2FQsZVMeCiAV9XFQHVVe%2FpOUzOl7xmQAbQdxDAnL1fx9YMMbFWA5TgV5%2F%2BwJAo8L5h87Rb7qdCTNQePXrRmJR6ZCkKP%2B%2Bzh7MODTWC23%2FtvKI3F%2B8%2BU1&X-Amz-Signature=65922f1fe2d079cd593c0a7fd9c9704ee7ff877d86c7cd35746ac4fd2125cf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

