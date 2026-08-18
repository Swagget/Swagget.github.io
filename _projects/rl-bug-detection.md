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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMOVKOHW%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T020727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWFd0iu%2BIjf7jrysSTy%2FqI92OflmTtb96BMLhxR5TGUgIhAJaSOnZEaghcZ7fO2xNoENDLbc8XozDVmvFgMpv6FRj8Kv8DCFMQABoMNjM3NDIzMTgzODA1Igxe6F7fFLlrErgvpS4q3AMb8ogFKbbiI8cwsN01YGxdw9jg6A2pCtd11sOtS08LCaiFJnOVzvdlB2jan21cZzwKj9YE3gFCfiWI%2FOMoYHo8DExpNSWFykogqU%2BQ6sviHByvkStY4MSIvDqcKnX7wo9SXqhdNCUgOACURY6FL8PLptsIRdo0qOEdqiOEXeLNMSwggKXqBs1fSSJgcu8njNvoGibYxFbOEXDe1R05l4wTbYNbCOElIJ5P2xBOZoVFqlsG6cxnL3s8LyBeh6a39PZO84gk%2F9XQPq9fBtgvBbJLD3s6SQyeHRJ57LvsmGWPn6KkkoI0pAUagY%2Bnmx1cxfX%2FqjkrNwrTVN7NTQwA1BF8UfRvyNpKH7sYfWZvqpNKlomqez5QUstRNG8yWMPPNrpNaGE%2F6ssSyXB6EjEZQYEJAw0IIGk8a2fasRdNCVLuU%2FGO%2BI7GxIOHKJXgBvQARqrnDURGeqyc%2F2TuHI477V5Cbc1gRMQH4gw7pzVWh1Ds91M9AtLkpQy2xG2XIHDHk5TahCl69DurBh4e4uX47UDAqNRMxi4LN4X2aB6rfeHZiScBJGgjBiXtEdrwsfAerA4b%2BmBgq9EPEiVsCZl1PqNkrjX7g%2FJBn5glGyjllWWhxQ95o%2BvfrzNX015nIDCO9Y7UBjqkAXgWw2fbkxfcBjAoIcUCahj4n1X1AJRQonyG5ap1g%2BkU%2BjBXhr%2BObEhf2PFc6TerN%2BGS4guxVOO6CNyVXOqaWgBLEWUV8C2vYVhYkwVMujz1ebI0%2F1qG9zcp2lCHcl5b%2BccQcRvaQlihR2L4%2BSHLTnrD%2Fa3%2BVLXJu%2Fnt2SjgPABl5JFCGy1EshcF2XIvbrccE0SyRQvwEcZtwsYCznJqfTQRXdD3&X-Amz-Signature=377d4dab81a046e02b6353f9f470298d93ee3010b25d372f4e7cc8662c92dc22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

