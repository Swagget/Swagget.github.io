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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K6QSP5K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T051622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICCNV2yor1nzTbjfbf8cTWHzt1zM2iHYOeQQaENV7dxCAiEAqkzSOYT7dhRNJ%2FGcuoMHQ2LgxHnDJwOnT%2F0SYmVbWNoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKhg88AudW4kqvN2%2FyrcA8UcHfUu9h8QQaBkB0BTt%2FpRSZ0PMLmQtwIpI%2BYO0byG%2FQN4gURLQ7A2ax05wfTbcquuP4tPSBTDP3hb%2FuO93R8%2FG1Sn%2F%2F6BWwTwoN%2B9XwP1NvOakXaFgV5Fb11ZKogCXg44KHg2Ni5vkhpibhNWmj7WEI0gPE4zq4dneBibNr75H%2Bu47%2B5qXNLALBbnDgIRfYPBCC%2Bah937w5nf9wfdmJCjt213NfNZDglMJjPvO0%2Biy6j%2FT79rsFF9I2O5fILYzsuADF6o9GWTMABJMIc2ZhNF%2FnQsTFfzemmYe8p9%2BG4%2Fg%2FDQ3pLS7aIKkZd7UB1y85UjNazDwjpi9wMBL1jDbEF%2Bg5fEQdzx5fKwzjwhAzZSHhZNpBaX6EWWqyPWjaynVDrEtobR9sSoF5OyXo5Mk86PK%2FjYnvXkZyjlebpfTlPkrmlAFV6KDBTahfQEiy%2FxtgnjieEZi243DNbKyjmjwettdgRHvAfunZFyBCSwLia%2B1Iv4KM%2BY6dLrSsDqVYmGG%2BqyLoWCMdmbsa77BLkrJ9F%2BexAo%2BfGK4oqZM0XJ0%2FKnRXcJcIBI15YxIIWin7huYvPQW5w6g04emC8Qx0NwcfizM2YpTxK9qGDfn%2B4YCY9nr%2B8pedixNpV6jR1lMImChdQGOqUB6M0R5428wjQsKzJNYpU5s2QbHnjSVbXNTtv8XuKgnqe7bNkirSRsLY70WALlo9hJYS4g4lDnzXsRkHogEyxBFcbe3yG9GDTI9WzRJpT%2FSCfkp3EJ2PBaG6IQoxBmEyOYQDrFCPedbODp%2Be4lrRoWv8SkqOUMp8t3aTb3Vaw%2BurffvqV%2BVV203X33iirIjuqV6%2FBnrD9cP69K8JuyGVR%2B1N0hGsjl&X-Amz-Signature=d9ad2055f6ff7b148fe84eb1c152e5bbc04871d460db98b307180834f7478ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

