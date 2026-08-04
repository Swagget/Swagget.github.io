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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FINTAC%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T172637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDmzcnxIc%2BiRT2nKKOqfOEYftlQ9BjYT2fxNTMwyJ72OAIgNtFp3eNyqRe8m2S5oKMPMcHxTqdx6%2Bh8zIp7%2FUVpJo8q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDMTRk1NToku5qIRJ8ircA3yEqGkhon9culRtqg9c0VfJh8J15xqWG7ilsdJznii56rSShyO04lXPgRSLxGyZQq%2F6If3xZaOjxau8luJY7o9JLXdebBXfZtZTPzPJ6lrcWcXVsazUv%2Fu5FEIoiByrkpaqwKc4QzNPNFw%2BARo8YzkeUed0YttXc5LJQRWU55DX1js%2BjDbD3bwa5Hc4XzahtAIgpGqMQd%2B8Q5Maa5HrVXfAF%2Bnu%2F3NB%2BgeJDHFD%2BVj%2Ffo7uBYmaiZAvO0iu8Lls3XadnhBqJdQdoI7gxX7sTyzi%2FFJXk%2FMbmJ%2B8HQc5nPCNl%2FTeHw93l%2BhTILslYu1U5dFiVANcg3GxP97WjKuVyOLg7PZ6WrcUcKgFFHxrWb5f0xKgyVc4nWUWe1KVTVAhws3ro5QcCfdThvLbnF606LmM1BHKTJIuFrsi6TQCch7I3%2FhJwq4jKGtxZ7jKB8PvdAWXpU3bHuv6%2FucMhIucMSI%2F1%2F2wOFFbCuzv8S%2BaQfCkjMA6NrnPN3wm2NTVrManXibSIWNKwVHvfXtI6vazF%2FGuo%2BhFqQ1l42MsXEUeIFv4965z%2FR%2BSrCJlIHqmoWkqDPFTTeTICSOp2u4Z8T9f5s5sp8i%2B431%2FKHEcdN7yWV4XxRmcGsYRFTgj0jZlMOuOyNMGOqUBzaBPPv9rXqwnMYOFiYDAcSL0VZRbSpOr0qCoqyI8ual2mHiJuHyWE%2Bz9S%2F1TqpzpzmiuS761OVp%2BLYuK4sK0j8lb3HICLVt%2FWTVE0VVwHwxtQGsSilw9C3sZ0VKvVUkfIkaSi%2Fgc9sptw9w8Fzcbi%2FgJYJgwxFvnUzPehbEHrWwbBJ23zYsSS5HLRTA2ponyo5CFBiybboElFoILp2Y1wJa3zHRg&X-Amz-Signature=7446db2fbbb6c7d911870aaca84bd39966ab16aaedceac5bc96b99def1466405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

