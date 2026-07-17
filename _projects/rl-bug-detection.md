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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTKTWDDT%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T213903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIwiJ6D%2BRLANofx9gNaqC3%2F3JKaJE9unBkSpNLlQAIpQIhAIHQIdE%2FU9YVonlxuoQYpUd6SGkSyBVf1sO0Fnq%2BDvDkKv8DCGUQABoMNjM3NDIzMTgzODA1IgxFgwpar7mT3k1d14oq3ANsRN9pND0NcK4%2FNBdpD3C3N0y8uv3B7eGJXM%2F6oI17kUmKoIQWc56JYqIh2s2YO9c%2BfGZtL4VxIX2fVKUQ0rELQpFNiarpxhn8qt4II6LzsiivS7apJoQaTz8kNFmWE0hpeVesQglLHS2jxapMkLwQ7sPGbBHhLF0jVXfTspJ4ymnSrCock6U4V2kEzHLb2JrUJT3Synitu2JAT6R3FYQZ9DzoVxPCu%2BiWXVRI8fodFI%2B2bxluJFmMUEdzA1o%2FyNLlvxh%2B6w%2FcSUQXjSLjs93M%2BoY149w6w7OJKr56R7mRCEZaDGiziZGT5S%2BpYrymRfbEutDrfp57D0pi7iaCaiKm5uzIPGuLTzWZr8Nk3SBVWookHRfMtP7nyrIwiaphtT93paxfsUUJxjGcZTPTkTBxZQP%2BdToYtkjjCK39hBxY1%2BjK4UJBnkDEdWDRV3fQcLMVMcNadZ7oLU0dfL%2BxxlGGX%2BTj2A%2BIAv3GmeAdQSSUysBU8MfZMbOL4vWWLYydgBk3yAsuc4U1ZgWkXGYOuwxrbwcC7STTA83eLb6%2FuRLEpAY8sR3CISTuPj3EdLRA1SGBdlMcj%2BJBFbxD1vI9dJ2XAo65RUJGl3ukDLLtIuU0qQgNa34PhViG90Xk6TCDhurSBjqkAX110hN145%2Fv%2BTW9P1DjvQJE68Z3q1KOjNxsuNqJgvtMenRQnHLqCFr1P7iNJccIgObKvz3I2glWYn4cPVTna18dVTPTwjuTO4uaiCRVCLZWg2kEHPXATOXay3%2BSjlvnUOnbrmkqxNjjrn%2FlgO4Xaa%2B%2FExuvmwgfMrTBBR2EEwrQLb4pACNiXT4Ba1xbIrCl6j8i1DKiQRjEstSNls9pEnPCqtBl&X-Amz-Signature=521532364f308e231bd1c5587b06729576b182fce675dbdad7943de7ade29a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

