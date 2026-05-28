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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZUARBM%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T055856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLZRcl8NLqZF8%2BmfL0AiIXheZlczjWw33lWb%2Fe3dAgyQIgNmW8gWySvhDfWfQQLA8GJ7%2B5%2F%2BCGA17qLD4mUdvaFDAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcQ9l4n8XbeaO4vQyrcA96f%2F5XiNuMCuhwps92WphcoOtgwdAtftYP9X4CoYCT3n4g1gmvTY6h7qZn1jNFckRj8OjGsUKB29rLbtdFIj8FuUuW7cbglA2b94oPMmD7gHrTrBonTLmohWcL%2Bw9rRownutrJQa627I2neq8KNjxtRpsL5LHKdstvC5i5mNjkeTMQaCqWA2f%2B%2BsrfbtUQ%2BKQH4FfR0hXIDqN%2B1Lm2lG4%2Fpxp%2FxkBakpAzs272m0gs8x%2Bu4GIXL8eM3LFAx5FRfX6kANVXBbtLgOME6NXEjZnwZUJa55u%2FQS%2BcBoKdeJvDzinlmnfPiahmR9v679P2838HGwip6qBEqyZqtM4iwhr0DgkMXNkfSZqOCGttLJ%2BZxm3YTXl74gYhxVF9Y7Ho5mxbM8VYEEbAkATddLU4yAyCJeejAzjxHHEUYlBu%2B3FX77RMdEfAY1dNFn6MUkxpD5ZikpfIHn9q%2FV0WKN6%2Bpol1aicS2GCnWegQozTvaEEs52CpeTL75n6vkjQzDmWP5yIya9oa4iZWyI5rUY2MTUnRVO5lse7YC3A5GIIle1HP3nSurUaGs5oc065wd8KokOfxQJdak3ZrpRB7SnimBzIDZEX6R5cURw%2FvH%2FsV3%2B6N1%2B7rwEql%2Fp3k7DMBgMP6U39AGOqUBz6317JBYXwTXdtn6mJfjgkOf9Kq30o5K2wAdZLOfHfzLBXe3VL26MIL8m2nNxXLrLo6MS6uC1IG%2BGK%2FWl%2BhGmW9dJl0bcNuwmxuu6jaaNBWDMuQnJUysO0R9xZ1h5Ayl3mDXPvIjrORMnzLuWUAvKulpC3YPtqIgvDhwvYYxhfyJzFzeanOM3fJiUh98DN%2FtwGgLLtx3ohZNSHSno1NAP%2FeU7VHj&X-Amz-Signature=bb742f4a61241eea48092c7f77ac51990a711c531ff7501bdd4f4be173219403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

