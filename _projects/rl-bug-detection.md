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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4MJHKK5%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T101854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIA%2B8c263uINEuuhqnuEA1VXkJLQgUpvb63iaLWQDKKKWAiBlqIdQ%2Fe5MOBe%2Bl9%2BC6InTOKlcVLOcYIYbz5gk5awiZCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMI4kaW3Au3IldMbQTKtwDszNp%2F%2BLa5Ta1CjFIfIP0Xldlp1bXI3cmFQYQx%2BGLQLY%2F%2B9gUbS2GYgX6b9Fh98VXBE9DDMfEfI%2Fx02tzIuaZ3%2F0fEgGGHD4UpYzoSuog1DV%2FOy46%2Fdljn3ZY5tPjmrjd2BDtO2inEo9WfgyJmI3I5KHDG0PQJYso0oQL%2FfXMa1X78EroJfSQeKwQeOu483ObN1pSHP9cfx0oSoO59nUFiNXjvPjI2QNDvUq6F4rD9yi7ySVTPOBb0GKjaLW%2F6ORnzGR3CHCPyIFTPhXTXgTDRKOXDwYQZtt4r5zicgaky%2Bzku1ke7lgrqklh9o921UxSHMvXLPUBC0lXgSG8HH9%2FRvdcn%2FEh4uOTawvSta59B7XJs%2F%2BFgzTnorw3iB2AFaxDp92qP4b7agPltWUCshcqbhbMfX5wrPO9iVq55mFLJcgWkyu8GQwlnHHgMuR0vPaBmHVZbt9s%2FBpPxGiOSLwU4QykOH9zNqvWvx4in8pww4PSrqqKijC8QrFgvsJaPGkTCTE5sjsqCNrMvYYaTXG%2FqdycN5rxn5K7JA6jrxIzGX5gMD%2FKHM1zFfIoqhV47w67VttkRj%2F3jnnSQ8EO2KUqBmBaSv%2FTCnuZNiIPKcjaqMUFyM6L01fQdGpy8jUwpNS11AY6pgG5j%2FUs8KYnpb5ZxVYxJVH2tYaE74ZFAwgprgqlkJZxjnhyiYGQxX91b2bBr4LK1bm23AZgR6rL33xn4%2Bmbh6kfQCeIPQFnlvGpCCslwRq6nbBCz5boZlzv7TKkLqj9SUx9VyCKAZq7d8VAFiLmTnSIn30BJfsNMtCVkrC4KnnaYTeSttkjaSBhnFZwaxj07lUbTb9S9mE0v7i%2Fwds%2Fqg%2ByQDI8WGlq&X-Amz-Signature=34f1787c25ac7a590f71386d6b3f6fbbdcb7492af970f3ddab34cf4eb8b8d6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

