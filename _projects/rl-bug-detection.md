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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2WKQQP%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T164205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDFZFipdybkNh0PhkjehFPJFsnzK2PGwkoa2sfdbgjkaAIgdXPMZ6mYG7cM54DOj4G2GdvXnf8oIVM6iC2uqIdmTVYqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxi5qqAWyapMQnQiCrcA%2Fs%2B4G7p3FI9PMI2Z2BAxbdeE5c9fXV%2F459GZoaiRB4cfLKNg5NjcOh9nbXZRk1LSOgngxsLpdCCfZqBlmA70r7KKDG9JETbSaRlp8%2BfPucdpYDQjVRLanV4k%2FM3v2Q75HuWEQhAhaUy7En5SNDDCohKVaReK6z18x3O2CGRRzS8TvoUvecnwfa0lz7AkrArume4eZohlXUvCdHFwr8gnW8ygrq9Vn8mtE0jOzlG5%2F9sfmZ4CCqaRR5oyl%2Fzmbf%2FVcoyglxelEdu0V7RkS7vnWTER3KU9ONb0JzlDPb04ugiGnwam7SHVjs5to8tPHBigYDAp6a%2FbazkdDju4txBAKMq7LRSu0nlFKqi1WD8CsaB%2FboDTaJyvav4LY%2BJsUj5BMlCqjuAt6fBxak8nUWwPIgPA6rZlavSD5NAHDES0S7iyyfMe%2FEsUP7QuKon6rrwA%2BmSVzl8F2Bn5RXrMSep57TEFN8siNMgWsQVO9dKdFinL81aNikSHBovHdlmvcWCl89n8qkkCzAjADiMzQXAZeFF1RqjM2mgyvjzyZh73IXIBGsD8nwkLU8OoDgcl75HnKVm7858DZ08X7zONTby9bK0Uz84OFOan8C6BqtQWXJL4bZCMZvN05%2BFE2sJMI3a99MGOqUB4CuIEVY7VlZuwJBT7TODc70xAY81QWMRbRHcJT5QylKqZCZTqBmJSy9NgB9uTrg3HmZpt%2Fd1l1f3i%2FfLpABiml8fRIgv7oMS4S7f5QES3qktrxjnd0j%2BHZXjgkJ58LStAlXWnWw%2B0%2FbQQVsiDu9kMhlxjvVz0OJJfiVYFjuHCbruRZYCKUeraIXH5grPRsxyN2PD1EKm4tTLy%2BYFpf%2BbiiCjr75C&X-Amz-Signature=761f11932e47a679c196aef43f4e071076549652462cadacfc01bcc2d506c831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

