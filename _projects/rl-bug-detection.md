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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWI5CPWO%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T070654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCQBhk8Xm5aJQCj%2B9m1JMjv6Bgg4Nd9xcjHbRwLBt7J8wIgFYaJ282R9n5ZN6aYlVkVw5UBMim1jOFlagpBulbHbuYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3wS2EKSai39y6eyyrcAwj9vfb4g325v%2Fz7AknGXHqPXAsQZPstSc3VeKqQaE4OiG3S5SR1ECpttjhwlqDf6nOVU5znzo05FzWTa5%2Fs52Opo7lGSMj%2Fjfgp%2BTH9Pq00E7dsR0YaAaCejHbJQj8Aa%2Bu5%2BaZYk2AATHqbUs8oFliYCxtN8r47GO95gSayw35wpZKki3PwIxreRsmjJraGCXa%2BeyHjey958gZA3wjlTiLmxMABVA%2BrPvK0KfT0c1T53E2bxQY9Xh8%2Bre4m6u3EMr9qwKW6tnNRzSUJH2XRapZ9Zd1UafdbuVOj8MhCsjHTO5oduHcTifcdK0JDIKp398KRhEb5R7DKY12h4vdI2KKe8Vle8oyZk09B0mxDp59%2Bvcusa9rOnguZYrVH%2Fo7%2BjacWwgcfOa13L9yzwr1qkz8e1Hqd90VcgD%2BP5eTzzpBsi4I5W2DVxPQiuprUI0GODeXRy3AglTslnQD%2BsEx2ugyVnBRw2UGk3wHAxdLMqb4%2Fl1A3ry4z9DbjNV4OzRVHTyt7ktJf0rQbWl%2Bd9SGOD0ubvr%2B574XooVsdh9DAc4j41ejHTE4esWq1Wi1zOG2YJKNeiR8IcdnHYDwm4LXDmq4SOpdCyP%2FQgcxuGc3%2BBNuZ05YYVVn3Gf4iZIaEMPu89dMGOqUBsduYUy1T%2FoiEHGuD1wS9BYTze%2B72%2BEP5pTVIZCf%2B6u6Fc594o3lQT0PZXPxGSYTJejYkJ2vu%2FB%2FBMGCMepMDRdBWxt2KEhA90qehSxAizKUjqnoF2CLCEtqidAInm7CV7ZOezlbiyPZ8K9fHUylhgyAFLZq%2FB4OFwVrNZmW%2BZuDl4jo48oiFLEdUAnMz9G5ukl91lxLKdPz7scJUv9g4v6KWspB1&X-Amz-Signature=a6bb3ad1dbfdbe70f9f1bcd3f2e55b9f5c24d11ffbdc4b45d4ad277495b68da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

