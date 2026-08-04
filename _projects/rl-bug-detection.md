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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TGUL6B%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T072842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC%2BnByLLw81%2BF9o4%2B9rgs1S1ApV%2BzeIaaVJqUQSueU37gIhAOKIhB0o%2BaquoVv9EwOJBLUmv7FIVs0y1nxb7%2FIwZFB9Kv8DCAcQABoMNjM3NDIzMTgzODA1IgwxC2JzPdnuzkKoT6cq3AOJQxY9i25g%2FnndzzMHQFxW20LAclFxXkufgJO%2BjGKxHYjNosaeby7NpYO8%2FSLqxi%2FWzXFfL%2BbAYobr%2Fe4RaL%2BZ5XTBN2djzkN1WKGrJ43pxVCzCksm1iLSeUcYhhULDMW8VjobT1sGRyO0o2Cwq%2BD6stKTi5BaAlBnyuB50q10U0FF497DINYar7lI3aEFJ7k%2F5qw7Hlv8B%2BbXBrPBNls%2FJJMyXcIXxDWWHDLba7Y0R3x2DR9w6FT1gTYIFaJYNxrZKisM9H4ybj%2BTgdAymTZycA2%2BZ3kmb%2B7st1xT8L2JeJTrcW0wZHHHNP0N3r3TRExOVjQ1ybbZQmSWL7bNloUzXOW%2BuJ7f3eAg47MSOUYZCCmZjREyD6XjUQ2%2FwPVJpUmd4h28bphIw9UgvHzpUUoR7C9fx8zzScl9dAOXMdQCGM7uB%2Fz5zD1hS5Q4SmBlFGW6Iwkl%2BbYtJ0Os%2Fh0%2FOGhI3DqEMqImjGJlGpQ4zUqnL8z0RhEDlvUBHOxSi4E0AAv4EkjswVE2O1ML7aboTQPtu5exoc%2BxFJ2vWID35iSqUTxHK%2FCpXKH%2FEi5IDbByti%2B9BzfQFje4NRsWmf2AH2tdTrVjab5DKV5yICj4Cglrw1Jn7d%2B6ybKpCsPNjTC0isbTBjqkAcLWyg68D5uvxCIG9EqLfcUfJXwcPrXPm0%2Fy62QtP7nnQzpXKYguTjTsxqzgSh%2FbhTEYMUi%2BI0EOfh79UQlNZ%2BpqbTKHV23eJDK2E2%2B9nTL8meAcjbJGxFmprTRySAbaQL%2BDX6JyHnmUB%2BiORfKgCyAe4R7SjQRhw2q0bSPsr56K7MSh22X1LwDfAZ4IqaOs6vnhwvqOI%2FVbP62mUa8xE9Cg26Jx&X-Amz-Signature=ae481902f4df4b04f1732453d9089efdc231c3e032a9cacd6330a7d77c560cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

