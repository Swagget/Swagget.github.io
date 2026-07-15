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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RAYWMXU%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T205837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIHLTQaaViypznGzNGOWM9vWNyMCseHbYpv8M0mxViemFAiEA1I2z86xs2zBbWPFCpaDQvnqS189WiAuJt2q8YniRODAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDE%2FmDvmIGr%2FhuRPsryrcA6TBvtJSTqIjcHOOFeXSTAjv%2FwnSlownotCHyuA6jGKcC%2FCQTkmJJeTpkCqlA9iHKWVhKiFY%2FTHPXMMw76X%2BDtqNMEjBC2Sve2yXAQ%2Fa%2FSFVtLeZZ%2BYyjrzR1gVuJJy8jj4G0rlx37fASiJ%2FQOCy3JLpQK0SFPzSMwHgDrqYL4aUqY%2BFKAVutj5qaBYRQ0UW466sQshXxDRub%2F9rQnwzCwDCFCPfMlPdU4D6UkC8LmFAlGcnuuOiTZMeWvCmtZ9ySVwU%2B3ZI7A46LoHkExLSZzXz3LhMPo711fjN0AJnWuX8yi9z1nvF1CX5upWRN37LeBqzfq43MQfzA6HIBTCAQZmpoH93IrSXEtHoIzq9FwGDxJRsOX7063T8QDVsQhpVoAeebHzeW1ohX%2FIXYOjY14aBg3Po9T7oPzLKsj%2BePXicabsXUxX0StsRZBLCIYMOzOJRzZRw1lVzSaX6maQC%2FGANj98nxjEqkD5sGjUQTjHvXtlBonvqtBosBQKxYIxu7ow68ERJf1vcTJ7q9Q9cKCR8e2YO3TKUYwjM0SxSREr9YEo69HzN5gJAeBw71QvvIKmB8XxWhNwrrJjCMB2Ahrc7k8QoXIsYkjXA7gXe083g7HT04vLenR%2FLTe%2B%2FMPXR39IGOqUBu2HyNfoN4DXZYK8ODJgTR27inyfnnwRq0sRKngGm43%2Bx9yoRDXSOyE1hjzOL7YxNKnIm8d2HBVLYMum%2Bgg4iT%2FvxpKdOWkCuB%2Fc3RTR4peIuDSczVpLaClJubmourvVwusp%2BfOPp624E26YYwyIFqskU0HqxSk2DJVdTN4PhYbcHBscHBe39ayoE0gPYIIP%2B0ZebtQynan0%2FBqyKy6hDiwV2OO28&X-Amz-Signature=ff065491ebc88b370cd7129966f9076e1782764e1a37fee6e045424960333311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

