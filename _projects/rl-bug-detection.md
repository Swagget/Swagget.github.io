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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQHQLDYR%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T012559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCICl1bklbWCih8n4%2BaldbvvXOcqQki%2F2FiAI%2B8itN70hhAiBvc1cgvNu1W1S2qkpoQMY9lqUnaa9MR5Kw1SaIU4EQTCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3aAQR2j%2B%2BPj4p7BfKtwDT8iJrxGeYVI9HgQ%2FpHat98QJ6WZVR4t4XB8GpjR1dOomP3SLqq1cSxwowaZUmDVx9oL2ukbLeVLLQlywCZzhAuNLjhyEumQ9cB7pfBFRS1OQwPu7lBzuoaxt0lAEvvjMasYeOoDjiJeTRS5DrUmdiQyLj057Ty6EsvNoDqePwL0vXmhOgrC0I7wSW9mKh9frwkFajbWyNMRXt2vmtlM4FjPfjAD7N4XBBDGuTzW5VTDtLDGgimTCYvG4lGswC7oScX7XGjKemVjZnXlvnKODzDyp2TPgznvdxCwwf43AOLlOA3tTDI8ebb4TzV7BpIky8XL%2BhlyJO2xEh5zAHBE%2F07%2FW1jxaAiYFqS%2FW7SUPZgn9Q7PgFHBZv%2B4DgFujvP%2BjITQ6US%2FtDPMeJZA8qZvI4uXUZI2A7l3PcC1SPMlf%2BrB1CsF56gh%2B4rVVZVD9rF8waj%2FAznxT9oNXyIkDWgKM7JwGmtT%2BmohMq01iBPN8HGsZfdZ8BV9DaMTHNi0NIKV%2Bm0m35x95oclfJ3TkM3Kej8W5Q5XrKZaBXBgVKlM7GiAYwfD1CDGYvgBEcHFxhKaW3VDJ0Op4jpwIUFM8g42qSTwXbp6nBb%2F%2BkcV%2FezVuldccrKllE7arfiA8xYYw48KE0wY6pgH4Infmmu2km35%2BEMrq66ZgLq2hE65GOj7lgsJCU85ZyHKD%2BissIhTQSylLI2TfQs3TdHFFCZ2XCw%2BoXQM3pYFEuvqEtPfbKxrKcz%2BQjH30u2494E1UUVNnLlwtZY9N%2Ft3jK2owH05QAf2%2BZ9cgKvrbPpu%2FdGKd8vtglWEEhVf3SX%2BFX6fCAYgXmENHXlUcaY%2FHYnB0x%2F3ibM%2ByqsRWpUmxK6yrnBs5&X-Amz-Signature=6cf435c7b0a443590ddd8da28c94a8d6b8c4f420b23af4c1fcdd67557b8f05aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

