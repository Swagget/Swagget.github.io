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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2EKDN7%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T152355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDSanXw%2F9aPHYiV3C170esNyql8K%2F4uv0Fd%2BnSw4uxnJQIhAI5HfMasFsK6bCzaZcaytiKHwRLjvhbsh%2FpZGfNTd6QPKv8DCEAQABoMNjM3NDIzMTgzODA1IgwoZxg%2BwY6sR0PyRxEq3ANHOtF1H1gBGMwqnBfCwDdjOI1BCNOVdOflU5Oe%2B06e87WjKNes6cvbTEcrJXXdUL7TG1Vo1PD%2B1QnjUKSOe7onIT2qKzjzqQdfdAp69fe5T8307Pbxxq0tGrASlAoMAuUGuKdhNMBKb6zu56xdxJXb5CvyyH7POBX4D%2Fo08wggvrRo8%2Bt%2Bnc9NxQelx8iKC8LJhgu0W8tlSWz3Dv%2FI1zyDeDB9ssqzapQUzMRw%2FicO31H7FAwwlCGkUTdjH1uCizEN9G5EZoFM0f0n4TJte4BeCVTxZGuv%2BSOQph5N4CMvyZHlwUofITvrFdbD83yd8rkAHBM%2FgytMx1uBAYNZIpsNww3yGZ%2Bquz6QYe5b2qr8bNH4mRYIeprrpxHBpyOqj5BFwcoJxfDySj%2FykX6YNn3lmYxnXumIkdOzPG69L2JfbugC5oRQjrf6j3pGFUCYllrueSZ%2FOac7Aa1JAxnuxKduPLU%2FjIrlTXuGUfeEDdWEuZ4D3tzP8JI4IUSpGhE0fw7BkuPtR9XOV0a%2FQCdat4oLUOEF4oFVTjvMEetzikPqeaPV7BTkyhGz1wqUntxLUEH0KCwop%2Fwty5bZ019ee2Q%2FaG803R2%2FdE4S%2BuWYUW1Ejhrd0bW8gIm3BuFR4zDDhYHRBjqkAd2kRYbCChF6iYQBV9S14VKD3RGrdlWrM2f8kho%2FZ8uc68eKDOPUgYE3HGjmadT12PMzcK3v2Ii79lb1kOfBJ7MN7RsgubIR8PhPmUTMAwNtw691RnCW6lc6JXAW2r%2BbS%2BnKZmgvyrOPuy3qwP5sdOzsjTZsdym6of2bhusIG6VRqYIhIRcpxMfaG3LuEQgFSnC0J%2FHLO%2FWRiu7S9hKHB8V%2FTbV0&X-Amz-Signature=cd8861d50647b38234f39a5ff586942983f67d6da08d794c24e684452dde8b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

