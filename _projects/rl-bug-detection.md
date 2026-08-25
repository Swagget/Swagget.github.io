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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3TAMQN%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T211501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDQs0%2BGo4Mix0V%2B35R%2BwcKJxi1LOcCj41tEjrw38sXaxwIhAOqo6bmusUMy3i2D1Ui2oq2sjDG8hyGoTi5BTdJ0DQzrKv8DCA0QABoMNjM3NDIzMTgzODA1Igz6AH65IAEBbiCyPegq3AOy965dGwuUlgXQLkcJE1CXFVV5m2obDi8diFmHU9vP1bQVm7xj7v%2B9uUzBcHlvKDOuLWM5NfqZT2EuHgcaRpFeBiDc4pTAf8wIY%2F8s4a9oRFcNZMmRLgxCNr2Epa87QOwGX7znBE2VHCOrZlCgbLSDF3%2Fp7PPp4XkISJTS%2FjX8%2FZB75ir2WTUomtZfIRwdZBmHxjuAeSMypbzSe9fqMSWXD488b8hDAvAFnJVy0kSUyQRVOUiRpA7E6MrRbxQPe%2FHMhlRTcXfjbbLZVF19lmhpJGM69ZIDu9VaM62zN1bm75BSn8OPPg1y3FVV0NDgWIadbRhrxIKTmy0xG3ZK%2FqYU49gR0YUoQg4QxISq5Jh2PLDvGqRRhEkytEHhpuQq6B3lIs2w3WjpIuXCDIDUkkxybbAwxPrMTkP0kpvw3W4FHA5UfV23nvxLbpLfkn9ZmBSzTdmyYaqEQm6woePqiLaLOFeV4K%2Fv73n9YYmbFWY%2B0ozzmXxmkf4Y4NO7ub99upzlfIkFLd%2B2%2FP94RAXz4%2BQS%2BqBJ5fY2Fk9CEdZLgb3KIF6OM12ii0npwzL0HUYgN06USoKc1A3eVnPL%2Fsj5KsVf%2BqhLwZwaX2AyaiweSNtsIUinrnCVK0Sr3APgbTD317fUBjqkAQoIimE8VpoSGBgtwRrC6qnJtubwNbviMV9TMsYcAKucMgg1Q9prlXfWZ1RifxID7uYPp%2BhWWB%2FgETst0pM%2BvJF4SxwQJu26IkXNpfHoCHpme95sIaiHs07LqHfB1%2F%2BK71xnDJr07TZEsVHbVWbC1Ngq9e%2B4Ud5NkU%2FsnC9G6YZc9vTVMNlv6px9V%2FIeYkvJqTzGkpyq1BolnBTARDXdk6cNOsO4&X-Amz-Signature=b261ca1e0ee758fc066da2bdbe51d3975c224ebbf1c2ba7e8091595ba150cf81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

