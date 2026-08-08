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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YOR23PX%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T221438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRzp8OgEluDJu6lHGN7BK4dKWoybqHAuq1Rlz92wYSyAiEAvAyaWTe8Sd%2F%2Bep9ebfcdFP%2BF0IehQxU9u%2FR3FLJotBQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2Bczf%2B1NRQD79wYgSrcAxoyBJpDIc8AhgXRJP0LhnPgqA0wQTdsa%2BSRHL5qlqGNaLq2s63%2BjhwTXLO9bg9fvZwXdHBy4y9kumpTTARJSrSoGTTuRHZlfjHTJkQKcJxYpUUBnfT6R0C%2FtNmIQCbieGKonDzxqWFVxyrNyMP2QkvZMdMZIOkhhHPAZvsKMfcMWTUxMBi9sWCTT5hAyCBocEtCckbpXsLM9bRUYLFhFNxox2NZ3CaCRRBGXhreKke3%2BxO2dXS%2B81UIhUf3PD%2FoikipBnDvncb16r%2Beob38AQvQgMHTpH%2BCYoESt4hHUzzUr3DR4AHWRWukZ1sTIIyqPaNX6bGAxBo%2FYqzf%2BXEHaMSiMkXr%2FmyDDHS2ceH09K83lxw838EtVdKT5j3VGYm%2BO3NYh8NqStjPQxZzWbm%2BQ0IaBz%2BmQ9F%2FoAirrbQH1Aee76kXLKoBhaTPhL9b6DpzYtshxa8Alu8jTJAtrzu5yH1xxI2lRhAdBzsZT7B13yg%2FWxrgOCuSrss9ASMTMWT%2F8nlfwBfxtfFSfS1J8IvaEv8mjWjGZisbf9vxE1aZsjvdIkknRbWJBYT%2FVXL8Lj1j0s4MmOBNyrg%2FfYJOEdUoxXS6nDyFjRJSyPRsyX3gmHmmXVmdHCIxxdzw2%2FOcMJGH3tMGOqUB2Rc3ZbKmYHbOMII7ibfMJvrQBpjBVsDq5GYIO2QKrDITwzBunK02S6x1iF1F%2F0S%2BUyzXDleWDY%2F8ia398lhRZHcFRYxPBwBrGhXk6ivDOLJecitTMvhwQQ0QlQSAO7tZoSmSvrQBjveeknwGwXzRBP3szIDjEXvERAIZZo4Dg2xERgNr%2Bi%2Fb2R9UEbYLz1psQSMFkR%2BMtNjdjBaGFctjY3ehIi1s&X-Amz-Signature=176fdcf2ef3b79995cce86efb63d72e6c71f9f77cf9e74a73eb99695ca34b67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

