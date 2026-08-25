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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEI3SBXO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T052115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDKM2bFliGSJUgJR7O2IpUx8Xdrq2RqC8NXVBK8q91KxQIhAIoGosvNU%2FgFd7UZTQVli9sCBeXCx%2F8DNwdhTbYBWpKMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIjFiA9ftTu%2FJGYWEq3ANC71ItudIf%2FlBVVwwS9xiXbNXE4hqKqPtbY0vBxnONyS0HHuI5oVw%2BhryBHEhCJsKw3Tbkklbi2USYKqm67P%2FvV6HY8toqDnoeNk7pliyQOBSc3RlTOWUloVx61fD5SDGVLmel%2B%2B8of%2BBKNffZjmgk%2B0x8rjdaXkw1Bm9QXTVCZ72cYE%2F82LZxONJAsJ%2Bge1%2BW2%2BTkYQ4R%2BIM%2BUVM%2B%2BhcdJNmmyc4ZFcKSQ0nBN1wvvpadqgXte%2FIaAU5ChimsUn%2BnNqN%2FjHmEshqF0SCNQeF0MDun9LNkkRvJsUoc4m8mmy6RjCUc4akhPKPRynGweSluUAmN7FkHXFvfbbuWfSqVoVvGfhGUlq2z5z6tsqskIwRZbsjkD4FuDR1prd2QDHwNmjFBVW8GMx9QK7I6gm3%2BbohMUigu9zY9jq2pg3TxiDaJlz1L9m5uRYH7tt3NcrOjohdXc24J9ViXyTTIS3%2B2Tninvu4f28dzXlS9NtjChOLrj1jsXyzL8tlm6VY9ZNJXGUllr0hYFKC7oHMDvsDVaI5Hf5hQeT8GzrBqUFZEfs1KN9Tdg80xh7wSBLi2iAJWCPjdH%2FpMZ6qeIAOd3IfhaNLFdVgF6CY7piIiYy%2Fxpeni%2Bp046dsaZnxjFDDy07PUBjqkAfSJ2UyjhfN9azBCHfwG%2F9pkudDTOs42bHP56n0yUPUseHTq9mxhaLcLHchjYHHXgFhBlbjSy46jYfh6e6hBAHQpEqTBSlqjJDhCKZOUpp%2F33Dyxh4TyWmJ0Ol413xMt94vYp60mng4UnLdeBptzJHn71LQP887mzuin8khJyTCnfMvQpwgn8PCUrC31i84hS6baYFSwC%2BceodM6I6IYAxV3%2FhDn&X-Amz-Signature=40cbf9466bb31b9557395d188637bac6830bb4dec2c842e9ea2d00096b65ef8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

