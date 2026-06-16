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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W7ECDX3%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T062015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWiotLGvgB2lR%2FuZSAWH70h1JuCur6Io6iyKJ1ZJr27QIhAJltxm1QdB1I6zLm%2BQyyAODwhyF9Qnn267t%2B2KW8QIz7Kv8DCG8QABoMNjM3NDIzMTgzODA1IgzlsD7Qm%2FVsSYKg%2BRUq3APAk7hSHF9mQ8pJxEBZxD5uKcUylWBkHV%2FCNRTDxLmo7%2BmcuWfhYzQFqD48w5OCF%2BDU3t2ndrjdOpnemiweQOutw%2FoNMyH6bNOwjTT6%2BU7P3mbLLMLAdzXXqf63kJCC3PxZrPkI7czDYQ6%2BTc0hWMWtZ06BIkTvM8%2FdU7R6QbKdmLRxk4YfYo7rUIytRCXOfhiTBZoGnQSGUhcDeYzLykNVlDpqiB59o%2BrlfrcQ1Fq7i67S2Ep8WZUy5Y4p%2B4fMoZ%2FoO%2BFMb1XsrmEP%2Bk%2FJ8K3wTg7vuWsXjbA8AQuyeqfv7xyvp8aKsQ80s%2FCBAd74mtDwdJNIFROs4TbFyrgOjes6ffwfijnhK9oxbQWAp9C2%2FzCV%2FbzMC4Lq1f%2Bg1VNDalnqYi83thf1ySlMhqXYDZpMnwOKQaulck%2Fq59oRIt8TWVa94Q%2FBndEiq9zD316WbeHbmMqp83%2FdHyPFCtgwwoexNZ5grzKKiGzQXQFEI9Q%2FHw6cyAGfw0RTso1FQvnJA526AUA0OBpqg8SIdPMPSvaCf2dZA5b5UHNQv5FHFNuNsxOagfy6zmBI1H6rnmXws9Fm3s%2BrrEcz6IiC9ERJ2eX%2FbnLOKek2aM7XRWCMse4HkXP8HrLd2UVrecbgMzDFwsPRBjqkAYa0YTh533CBxC8qJmSfACI8fJzXsVd7lin9t9DllFCZilCbXaljt7Iyiag6Bp0TNXVAuc0x6qHt3JrQenl6c5zeYQR%2BdBpVdrTuX%2FGwTh3jtC3qH2J1sQA4GbYCbpALp8apMc%2FbzDX%2BICgDu7G%2Fbw9YQ7nvGjuucbrHyR%2F9ikgPPl%2BRKPATiKIKe0RbXOxI4gvMhF6TrOivkrKVtHqur5C5MYKM&X-Amz-Signature=653bcc7ceb7547d13e2b85c961a0a91a83b095a59b89110438f09baa4d714f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

