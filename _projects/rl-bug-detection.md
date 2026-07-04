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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6RJJELR%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T164844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIE1dxThhFtJsH3a%2B%2Fsc%2BzrDrgDldOJds53Y6iTb7VCUBAiA9WgGmhDLxCYO0yn7N7%2B3FIMaGz8y9EpiyOSqU74qq7Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMtyZD9X4HgdFNvnAyKtwDdGJqQE7a7wJdKqzhhhq7HVwKteuNlydIAV1YCQyx5FyXJQct0Zh%2BZSomPE2635ginF%2FvbZoExCwLDlB2SDJMBdjzGHlXAn%2F2Mrg4e%2Fn4AfkThrxXO3fABSgTAQlHAL7cmeU7SStD20Vgs0K5LJxG36diIWXPtBrAXaNR7l%2BOYLzspZarot8W7RrPkn%2F03RiTHLY94Enk5DwdI1KIgWsj3HwkFg%2BUkYQYMZd%2FlG3OuxUNe%2BmihanH0DOI%2BG1W9uosKd%2BS%2BhgsP59JOuCLGUc2ok9DsAYQL%2BalUEEtsOqoO0QD7ftAx7X0pcGKrcbQ6D8Ot82dl5i2Im96gzAUFiENk0yahDbSTYXLcrwVNgpnYfKWrH94HsvUSFAtBS9V9pD39Ar5%2BUxgL99FSs95NYIINKAXSUfGF%2FH7N11%2FDuK8erCg9I0dl4T1EjDevY5arkt78viQ41rqJuT5J95SZ%2BAIYJvcZij6wovnm%2FvJUzpMB5fpdrgIJ5hOAr6GLsBVmeXa2cZcnloNEpxzH46l3poI3jtK%2Bf9Wi%2BWrTBYPv%2BVgSZZ7glCPGsDDQnJI64ME%2FuFGwM7t6jHkmI%2F5w5%2FIHPjbfakPYC24YX%2BMdqexM5sDjmHjE2rR5W%2Bz5C56gMYwpsKk0gY6pgGO8mda8GcIIGtIEP7CAH5IdEVI1HTPDYSzannrnQSkXpy3PG2FbD8D2KquUegI3TQTdDiqs7SO0vajeVh3gmd08N7m%2BgoVNhKbyGGtNLBr6HVHZyyfHh3MOVoCNVNgA%2FHSBGEVeqvzVpLh8iQEbanaQQbkgOH4SycHvN9kK8fveM7kzG8ry%2BjoPP29OTcoPFR0VqBiDQVUWAlFRlAZT0xPyVdw8pZg&X-Amz-Signature=ee044b3cbcf1738723c764af228c834027203aaf1df9940cfd15247fabf05ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

