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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LB7ZUQR%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T085536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCVwccRnYEYp9SPmEnI3fDO%2FzRJmTJDBiX0Ck2pBB1OywIhAP5oj3tPfLzwNNYJ33GMBTZG3PtvzN2UgCRNc8YR3AiNKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKTkHqSHMVJ%2BkGpdMq3APJ55WkMZ7IrSeXwqdBYSXaatBkWL0t1r2B5GpGtNHvCA%2Bb2VgzeQ2uGxNTAANcDDVhBB%2BCeg0ah3fVl%2B5AtcboVDAk9EFtXSoWbahmFn1aUeFPGo0qdxLbVP0kI7MrIB7m048%2BGQudqfGjf3td4WyoZvy3Vzg8PQSh3yNiqzku7RW3aFxxUXRWUKjF2B8%2BOP%2FFUqgdbnS5Tf5%2B5AhVbssVB08JJkeiOrWvN5V00854qi0lvLzSXjPjo%2Bvy3MBaOtNI60o2732%2BrXgtWPxmM6IKslNI%2Btq6J7gfk0P1JZTTDYyGdPsW1Lt6PdmmMqYeuQFPx5Z7BJta%2FRzG%2BfOUkWo%2FYFk8eOfkDpvh%2Bf5kJgfYNgjBZzjtMS7vu2z38IDg165BmlrVzceSMjsdeLUMa318hpM3OwN74QlX9EZRDUTCYXPka%2FvdGKRGhfHQP9ZVHg3b%2FHrwH2N%2ByEnniuG0I5aKHxJl0PLvGYyLZN6AJMZhDxzL3JsdWt%2BaPy1UVLmfvg7m%2F8JSrjA8xF0SkOMoX85FJAXHTuBu2DGgl2koKVnhQf3aU54hrOjqbXBM515InvV6IepewZNjl%2BF1OD4FTr6akBeNQpl0bxtkbczHWVARsHBS2%2BNXo8xAT%2FyytTC9iMHTBjqkAT32DV0X6Eg5SMp0qEsKo4cKUf1hxn3GPoNUVCZQBEFZrHFyLgGff%2Fe8YDxtOxAx6VnPFqGjEsGCHtx3ixuc34znX%2BExOxNecbkgYNxA1BPoxoxkS%2Fuf4gjnjsK3p961EsZOMuDDMb1f0EXrakL%2BAl5%2B7Lcrb0y%2BKHOPWYWNC7X6%2B2nJ67m5GFGqY%2FH341vBY7%2FY0kDGtNxrRXvq0TK2SkKdfyE%2B&X-Amz-Signature=817ca8c81bcc96a8dfc816a1921f9fa378f325ff8a06e631f2c09713f4dcc0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

