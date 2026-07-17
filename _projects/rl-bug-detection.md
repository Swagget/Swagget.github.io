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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZLXRLD%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T094308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkow0QZ9Ux1n%2FNsAXsLSnhJKzO4p1wjGfym2N%2BSNzOxQIgapS2XrVjLq%2FFu0U6j5eKyRpcQP8u5qku2%2FskhVGOzAIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHSYLx0EdW8YjuHB7CrcAxBg6hi5qmG7JkB3Qa5%2BuKgNk9%2B8ESrhSGORyncMrG2rdlU6T2lEqYRVJgMVphlQRFPl0HGiZ58WBxonpXlV%2Ff1vhToLdu9gyWhm2Qs9anKXSCg3k90otQlDx00Nu4gB6X6Mj0Ehoee4rBiRhkS2ijK1je1B8Y6m2rCx%2BUpYcH1JsEoh5DSGYEgQsmu5z9qBdeErHTdHuzQXFRiz7C%2FkU7sSzXoxuX6ghOv3y2PgyWUMjckc0fYwjbE9Yt6%2FsCZutJ3mg3K5Pp7vwzXYnJxq4VbNLBl%2FTiK36UD9B4xXhdU5EmVhdlwT3xoblWFXdXnk9q1zo8BtIe3chMpes4poLr3kRyqMutE55pggS2mAL6a64Pn7Z%2FBt7I7NQJHAphqOmWkHvlnyCEbGPgdC%2F5Y8ILaUnwAZboiP%2BsiBC3Lznh7Y49sbevQlqZ1Awg3WVJiq1xEw6FRt9QBbQh9vKU5UfYN7Qod0r%2BrJpBGTK%2BKCg0NJebJn0Q1W428cFrL6AzA%2BKnjAgOvlEnBp%2B%2FBGQur521zowck67ERG%2FF4Dow2qYlJZ8R807gpKkJMG3ji22C3toSKNQ492DLegwzVHN2OA9abhTO4fE3%2B9YlzkHUZKk36d%2Bpaf7U0qNwppWOgGMITb59IGOqUBb369Kkp0Jj%2B7mIskBwXHkv3bhe8M3krHf2WcozKNVzVhCaUEkRL0KiiFG6M3hOk2M1KpvIc2Tv3H7rIPTEoCU1ySzM5otxGgcKGbkrA3eshqZESERM%2FkX8xC7U7M%2FIagIW0ZRv3FiaC0ClQdYxeWi144XPA13j6b9qRpr3ug0MNDqCkANN1P7k2Pg2PujlE%2F3A6W%2BR15ZY1zQZKxZhbZwVPH9MuV&X-Amz-Signature=0e764ade29b691cc013d8b69407e240aee37810874a165dfd539a5dad01f8061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

