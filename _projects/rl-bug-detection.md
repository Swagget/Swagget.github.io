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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNDDBYL2%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T125743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC3x%2Bs1edfp3jTbRpkJbiVfMWJBilkaCL6nxUf8hBsIBgIgW4G7VA%2BM72Y7p04e9JLb0564Wkv2jvXdHQF7zBWPlJkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNnG%2B6k5qybzcmPcyrcAwbg9TrudQWbNjy4RYeNoUvIH77Lu7aule3jJevl1RhheUdKoiY4NEI4a56%2BRE%2F5BvIGzmMglwYE%2FchS%2BC7k3apAknLy4nMWp7zMG4uJShNzpe4QbHu7QXmLrrErej81ytKfE7vPAcDy0d2ozGUEYDqnAD3KodPQxeynSAMJt2uLqy4KUMQ%2F1flNbEadivgPkTNJ69AwMZqZh2CZduJ%2Fw0f6kF32lQQQh94KD8XpMswlCqW4W5MD5oD8jeIoRu2EhFIAPE9OhHTn4m5DE4pCV3vsyhtDqurG2LyxZLszKOzTTSztFcDqDdb9s8biDV9BDv2A0C3Pf0Pf4kTsYGQLnrAIA8zh2BuEoK8Q0JTJldv4tmSPH%2F%2FjJC0OM5QnxcKe3FM4ArZxF9RDC1MIc3HIcz8DiX37m5wGDGtjEZXzVUpAxWc7qM8qsUniBS5sBxYePoD1OqP28SIvc0B7ueYpBB5uMJPIvwrpP8vRVUivYbDTVIQs4FfQzwooO9DJMY9vyrK9fasFzIRoabHQNF%2FfIV%2Brcz19N0BmoUthutudMegxCtHo7O2dl%2BT%2FE8ASG%2Bgaq8YrnLBFYL8OiACebnEZVMn9mo28BIVcxJ5Zo1hRzsD%2Fo18psCiOBN1CVQ6LMIm469AGOqUBdN9cIpo%2BQV3ODxVUKm9%2F%2Fw2RwZUKbEeBGDEuFYdFYW%2FkDoZqigcRzdVkdgT9RBLgZP10RkxwnAgZ%2BaU91hI3N5HPOgZbp6c0I39Ju18KA8pd3Ii4vCtSxTIlea9VWfhIz32RwO2LbbrcwBbU4Ipv9lUtIcS5j3DGwwp6vuEFXBjQa0EAkJTwniU4104%2Fn%2FgPP6nRRALW0ZDsvJEL4hSmKtyz2Bgh&X-Amz-Signature=ef8b6a6e45e86bc2b77179b688f0c662c2acb06d405fa27c66919cef5c9b9ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

