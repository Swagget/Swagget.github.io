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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QKNB5QW%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T051807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW2UOoG1vQlXj%2F7BFWolveElVRe9JcxV4%2FlZAWwnkjaAiEA2iutpY6WjHLAlQbKtulYeFh4wpwb84r5vEr37ZiYJPoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBt44Dj5Oq0sYA67hircA%2Fug6yKt3%2BCi2MlO8d1XLKwDhfisfYJaRgpzq%2B%2FQE44HghIhNeY4fvm42%2Fg1vS%2FZKC%2F0Spp6ZyrCUX2mB%2B%2BV91O9BU9ZbEeqjOpv26tcp%2Bhv3gB5YP57erdYNWgkXU6Pb6JviEvdvUFKcOQ54MFgEbXvh1IBdtXocJRZ0YYujlpNt%2FG%2FZT3epMCZ8TtYAwG2Ph6%2F8Qh62%2Bs%2Bc8%2B837wXun6woj%2BeOwDMxGRybS33MfRcpxD4pUc0RzMHTT8dEVKPd3o4hwVdzbVn0lRIdH2sSxEaD%2FRrMX3wLTpZsgP8iY5xeS28VSrT3DjFI32cdJcF%2FK078OPtmkh6qNMssQw5QAXmrthKeN1aIPOabDEtZgKOH6TI1uJO3YnI0Iynhy89%2Bnn5%2BclCEJwClwMUOl1O%2Bzf98StOWZzXgmrBggOniojBN%2F3GDiBQzFc9PB5hLndfDflhhOnv2Aec6jlmFO4cKAIW8IlDpr7QfkcccKTqLUhIGlrTgUm1xidcgEuW%2FOyVQDqhfy3HgIe0x%2Bc7fcwdcKR9GqQlQsdDQ6xY%2BjC%2BA5OcvhaIO8%2Btm92o7MP13KcTHeySu887j%2BEzgrxu5t12I9bnAVya3hkXyOg1yfXhqvvE8b%2F%2BjLbpUMNrlP0MMN3flNQGOqUBpLtS7FcmL%2FDaui7qa5SCsxeRsrqZp4EXSbsEyZVLQ%2BZfEpvQK7SsPSv%2B635w3h5fw0hhdAhN9KzLvuTs2CZVnU7VOCf2jfPGZxlsALvE6zrlhnWohXsZCX9mfWOwYrNyiosgbinVNlRjb6HZfkVPkG17Df5UJ3q9BeoK24tPRNTLYbY1cqFKVTjXMzbSJU0JJThOPmy1SqtZlYZdUDcMj02xpllc&X-Amz-Signature=0b30ce504c1dcc25c756fac4745c6acba02449be91702497e9ca6afbc69b91ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

