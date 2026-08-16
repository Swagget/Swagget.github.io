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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXLH2VBG%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T200736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDZ5FkLpGglk2BxgcqpkrM5VLRImIoph28eFH1Xoj4ySQIhAOnmqWZR44MlbNjXZz763NcJ2rlTR1Y%2FkR24jOoId0fRKv8DCDQQABoMNjM3NDIzMTgzODA1IgwQElaH798thxs3NlUq3ANIr%2FVy%2F3VxsdZVW9HFvMwXHi49v3sQsVMGpT7g63bw4wXxArSOlP%2BWhQzg41i7J8C44YnHTpNviDlw3BvhpMOtVxmT%2BcNirPIg38KRm0XJ8OgpT1Ho5Y%2BNV0v3NaSrsTsg1eS%2Bw%2F6csl%2FSmzYGAT6cU2JY2CNCEFR4DM%2FZkuM4AKL5oSa8hNnEwpW5nsHELAYGssw%2BiWZ4Duij7pZqPus43MwldExqmD7JRPJJWpVNXgjYM5VUrN7%2BkJjzJ7YLxeq%2FD81NGVwhZ5%2FhW0y5rYBFeMiw2wQZqjFwiOAOj9ChP%2FyHwt5Fhi5L91ei9ckgZej9hM2YR0CqASA4a1ZbGoDmFK0nfAaH3FpWJrCfU69ZMhmYmV6r8EuDvbDkkEvCfGyE9DPe3fPfE04%2B1X7r06zBzofsyOQEpnMjlqa5hXbkKM4pZbrRFnPE5u45ttlUfSOowE%2BnA1s4TYCdez59u0n3SIJ11O5KvYhpFmkO%2BVHItV140KjuM1s%2B5LuUwPrlfvl1eVcbV%2FzGUwRgN7nUptIBm3%2Fd5AeKQfiXkTWopnHqaFxC%2B7FQvZ%2Fwt3%2BDsejQAe0GADjoLgrfQUjZIRfSck%2Frx99heq9tfs2cONYOF%2FxRo7tjw1nNbpEjfSiyYTCChYjUBjqkAfI4gkOsKbiJqDersCgsmTOmpdoJ%2FWuHuQ3VrS4Miqmw6esRuW4oBVBxgpTamMFfJD%2BqnbKHt8bsRf2TI9xAgB%2B4LYhCy9wXtckjniEMLHtLptj53whn7wgLXTYyYAKdmW1DQQuaNouJ1J%2Bomu9CuSDHK%2BlITlQwDFYxgN2Pm4Y31XH%2F90AhR0wUvrjCQ14nIbLm9Ma2XHpdldX06YNnBRNDz3Xz&X-Amz-Signature=e4fd5f81c4a8ed64b991e9119224fe3719f9ae66e08f024b1c00a6036c73102e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

