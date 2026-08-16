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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4KCOB4%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T191143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCWUY6NSiG%2BEvaDSRpxYCp9wMPa27OIrpMqM%2FyYC07PIwIgV6bjvqm820gfy6JbAf7HWExcz%2F93tgQ1Pd29BVhwMlEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIaGRFToI3vO629X0yrcA2%2BJtnTgOgDqRYZaakznATTo1ooUaJuS7KPZrqJb59hRw7%2B54rRkkbZfPaeAqnaBQN1ZPfsodiZQPc4pygVq2OUJdbX9PPzAnL50lHNdVW99ytMpHh4gWfjvj9Deq9NqYxUvqvzUo5keHs8s0IG3v87gtxIhZP8MiAlWvZ9LNfND2hnsgwyhmxoCDlM79XcYgTp0UZ8JFyEc8Qwy8WdbNmir5dYXEiiIZsXP5lAECkYbmHCa7oweBVEZkMBTVZ8Fu7i1Q17ukaNgzQ%2F%2BXMRh%2BczqtBq1kgHwo0l9M95wbOcRjLAlB4cOc%2Fw3cqWJgVikVQJDjpDCf4dYYZETCqdi2Z%2FE6j5OcN9AJatCvg%2FqbEmAi60%2BhyPeqV54RpJ056%2BwEOJ5Vd3%2BPdHQdCBZx1Yh%2B1cHPW2SwmRqZoqtL5iGBEC3VW3nUmPKCTx7%2BKXaWL%2BmDycadlgaZaaAqW0cEmXoCsr2FhOplQ8LcPSLdyOMq7FQweQp66rut5wXtLu9HFFBcYOECOzVTN%2FJgBQZT0Jc43tdkObsRSerIKvP7k%2BSJQkfbU8zdqzZ4s2z4MEnBWYx%2FL1kujpoE%2Fzx61h80gZX4MQZqF3PYzrcNuLQBDt0C8DQBrXYyBNV%2BmOFiKcTMKGGiNQGOqUBZlYvXLQ57aNidWldfardB1zzgtLxb3r0PRwOUn2GN8uE1uVuacx0YaGA%2FvFhDqBHFH3l123DVtOiw3fMonk8iF3k6f0Z5%2FB%2F4fxIXuGMtPGhQ%2FJ8L90TzATi5v8jMkozbVStSFbPwBoA4Wg2425CaiE8TKc7DUObQmMjYxdypeXj%2BUI6o02PR1dJCFs7jqO9zvCWF4RG3JHg8C0UKJS4oZHnS9iE&X-Amz-Signature=c89854b6b87d7a0bb16d59c1ad9ede30b05a517c81294e4dd2689fc348033748&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

