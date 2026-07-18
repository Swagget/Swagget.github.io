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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJBTODVL%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T114143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3Ub%2Fv9ZPOqATds2RHgnC3ViASZqS9WBsHr0410nMzgIgb1iNOYkzhfeoJ5r3aINrTMB4T0Hmz3O%2FH3t81MhNfdAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIPSD4VE4m8aZ8GQVircA6YJu3uoEIE%2BlaVNaK9FLDmad%2Fc5MGsmCznkP7YD5JFWd8npulCisAAB%2Fwed2ztzqXUDKWHbo%2F26xH%2B2Kzp345XYwAeN6SpIrYYo%2F0depcNgbfk258IDKAXc6LSzq77RF9TWOkNjfejMNdo9zJ5jDdb%2FEmJ1evNi65PurkAMBeTsRuEjG00Pn8FGQ4hHlzWDJabDqw6PuI164bl%2BeZYlpwvHiOEklcuCJMp2WGxboMO6arsifOSLA4SaGd88jjiSeStfa6BoJqS5Q1J06Rf6v%2FyxXzBshld%2Bgayx%2FbE%2FFvkVs3%2B5m2iayONYvcj5RN6gnxV%2BvwN8%2Fs3DIkol7YkJyp975Cd76HKKYOYBhzdn7cWDES1NKOVlNnybSAxhgo2LRp0qKwJR9mxpk8ho%2BfvOf2%2F0fbwuAri6LKBrI6kainHGYCR6g9KDdvXUHZtWKwE7DsSEgoMb1yC1g8GvDMuWGonR7XKaCzGnoiFcfgRKkjI7CLuivjBktT6ZVMS%2Fv6vTo%2FNVOptVRIHnXTdw5DaADesR9pz9ygzjRV%2F0Jx9KmghewY%2BOsi67G6QF%2F6vD7GG%2FuGLA9iEZ5bvBUBQFhXbubn4Wq3Au%2F3BCgXgDtxHIBCFjeXw9w9FZeayHloPKMMih7dIGOqUBtU1ylszK3clmi4EWf6fwZAi8ONTOaIsL9rBDkgiq0fGVFSuMMrMz8ranQuw6gzz7fKb85mVgA9GSx8QtApUlRBOfN6h%2FS6UQoY9W3X62dE8kSs9jdb7%2B6t7Yzlxw5KqU288VyJeDuWgdof27Eupi5NWB%2FfmloPENcqki%2FVBLH1%2FMccmMsENs9GNAk%2BaU0DjHVVZe6CgNVORjmBWUDcZFVIj4Y89r&X-Amz-Signature=a7cd529023fdccadf08dc1acb566f68b5e7c8ad8cc067bcee62784eaf171b986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

