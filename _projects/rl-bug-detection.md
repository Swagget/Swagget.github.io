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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUOIDQUA%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T191249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIAoTKliTeJdkYhUlbUyGH44zK1Ld5%2FNCkty1mLZ8%2Bga0AiEA6TqXDR9pOkJ53rctUk88Cv%2Bn3YwvSgjGEYL4PyfcoX4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvbj0bhZkEfhiOWGyrcAxJa97gSazK6YzyizdrtJSgkw%2F2hYglbXBwTaN6xjqfX%2BUqL5eVaWX%2B4zaWLlttZZ20%2B3jHtONoNPV2p0%2B9ttQT1ED4jFd%2B%2Buao%2FjAj5t5EzPBY8PjSQlww6hTFTPzTD4pJC4ZUxS0GSBp0Pmj%2B5tsVcjjueFLNkRmTUgjczNnHb2j9nEtLoTQx82kOvde88h%2FSWMnWmWV8rHL40KXpoWeUltwQ%2F6ETTRWmUrTIRQsgAvbX%2FE3eZkL6GNqmCeG6uPgsQSw5Fx4BUVeDhHCh8y0%2Bo18QU3vpVWq7GGFVeax2V0o6s%2BOybVlQuZ1VHnB%2BeslyuKGX2FPy6Xq3qhHRpeCjsE%2FFvcYDry8hSZsnOntRgLO%2B2iE7cA5xfyOTeAy8utGYDlX1gtSfBiSGS4YklrCgYd13UxyePWRsKz1d30KOldlkZaLFqdOMxtkHDDLvxOcHrdcxX1ItA%2BqeXz1DyupqFlw4e53aH4kEVJ9AqQOOD5lYhxzp%2FWDpU0GHpH9dTs%2FCCkgAgRtDVtRN7CeVjaBm9KBz%2BXbb2I37JVkSIm1bweDc3lpPvkNOffGGiCfdKF5l7%2F5Zr0a%2FuHEJX0YfIeGaztTn48a8mYosl3wNRny%2Fn7w2ysUPlzy1Fh0b2MOfmrNQGOqUB%2FTx5Baa4RcMfk9fSfAym7%2F9zB8Vi8Q1pzZZze8g1voW7Eej1JrOln9n9jOaEtzO9Dski6CK8dZhH1IyA0LRYWuo1AufbZ1zYifCIu6%2BRtbk6ywWNugYSMzuwQcF%2BDs6VVNiFZIR5apm1OKw%2FBldXVimJhUn58WLy46qRiYsCJ0hJdG2pZbCaA%2B7%2BzM9%2Bi5X%2BoU5fn1yk7%2FnQPxKNpB7J48V9xq03&X-Amz-Signature=18b49c9c8da563f33d263127da4bbeec62aa8320d5e7d69c644a1be7e04dca09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

