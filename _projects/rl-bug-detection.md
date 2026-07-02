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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBLYI7O3%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T150232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCuvPcNDoAmrD%2Bkv%2F%2F760C5xGWBA1usP1wQ0UZ3HW7H4gIhAOnCnBzb7tYg%2Bwr2Il6Ytv7P0fv8MDafNcK80R81nUcZKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKDvL7pcgkw6FW%2BQ8q3APKjvUkQmmrt0fsfiFF%2FM8LljlTp4nfWzjPx04dqD6r%2FO6at2%2F0HXqTDRZ5zctQJxe2GgWCCHmH7aBKPOKzjpgIl9GXXCD%2FtXon8K91J6VjdJ1eugj7CRzEEi%2FW78P9ovc5joN5oz%2B7QbdGd6t25l6MpBXuxaWZ4DIzVrG9v%2Fs5%2FyGZ9CFUbClrg3Gvf4fN8YolTNq%2FCva0HY9okVMbUdwbRG5oVAi3VqKRF9G5dDyfB7%2FEHN0aZGwoTDZ09YcYzyGVOWuxLMFnuM5xPMePLvIVerrvdcGStBDj8Pskv%2Bep3UP%2B9ycEIELpSKciLp7cePtXnbmJ1140dBHNNCbACVJBURZ2yOHoZlW0wbKHlwmfAxtykzSW3WyKEQPHNZ2w5DXdU3WeV1BvCg9LbYS7bl8v%2BaQ72O%2FH3MrFr3IuavZQQTMmSPfIee%2BsOG1aPbRP7GjO7w8yjfTCRUzPaKZPU5Oz6B%2B75%2F19MRXqC1nZ09fjqZvu%2B9I3v%2FQqEGz%2FsDC344VScoUQMZZNxGGgn5OUcvAgnVAe9xOijEmC1VxIekCRvweWfUhEEcdFXCavh%2Blnh73TwwtfLIv%2BOScjhdZSStriIsP%2B%2FrGCy%2FXv5dpCQfy8%2B1dyVJhXbIfE2x6UnTC6%2BZnSBjqkAbOOakDvKOD4ifcwAKiGT1Myk8WRTuEFHcLx7fNw%2BkDMlB3ze45xCkXsCL7eEj7sbDna5idgi%2Bn56TnvLk8KnhXAxsrcSy6ex96ppEC6dYZ9KkW0A0aD%2Falxajummblr7X0xFfB%2BtrPqmx79gbv0HpCHboAbnS4rubt%2B44E8PuWzEYbBpA22tZVdKjRKirTtGqWAW8gFEpgLZefJ51EMhcHjaFr0&X-Amz-Signature=958781e2de5df3324d2ffc2821ef56ae253b8a9e4c270d2479ce2ba428bf026e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

