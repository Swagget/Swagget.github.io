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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B2ISZPU%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T062452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCvofr5J26WnYlXyrHOVJ4fV4q63EDZZ00o04dYwF%2BqxwIgQK3ClY45gvMrqEnSGChN4jmSIrQYEe7mNlnF8g%2Bok5sq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKua%2BJvKCBOjdpAVgircAw7982lHRA55HQY6ntq0YNg%2BUCZHrSlWOcfGl8xEwFNU6oi%2FDTk0xbUsAW33kK9wXWgf0Z967kz432zaHhLm88dJx6miPRyE70yPna0ZYIg0TTh39ttplJ%2BovMrmbeFqBOaK8RrsmSnO0JJy0Yrc7suVn4W4fYQhrL0FPGNNCHMD4a2VKppZ6hl06nfGMu8RXGqT%2BqSnLpi8R15ev4Yi6PooJbTk4y35LTR6wCZzOdj7EAat9B27dv6JwgqloVdg98d8xQqFkZq%2BSSfMHA17cB9Axu6pq4lzzPvnHxNOc4fMhuVEt7n6v%2Fl9Qqr%2BXjUgY5QIsV3zajEEcZVmJxdO1Pm4OhnufZvFV7499Qx9VwoXqWvAaaQd9Ry%2B61I6oDx%2Bd8NWEsecpnZP31XNp9c8FJ6DMSU%2F%2FrL9W7STyEjCHrdMESzZ1hHBBWPK9rAmhMtNjiQMvVTswkEAvhFQL%2Bx40KDIlH1MPzDHeV%2B8W23QSF7ExY%2BbWw1MTwFJQpQjlr7HVG7TbC%2Bs2aRg7RJF6OXSUkDz6ksp79GvbOIEpwHokEfmE%2BiuOJLnlPV3ROGDpB%2FvGhXwx5E3Gwr4AqCxViCx75Btsxt%2FcMtBmwwc3h2yQU1Z2tnWA3%2Fj%2F4hKeuNwMJDTudQGOqUBgXnlNNLEDH53C6a7Msg4eR0lmMO4YMiKSxFv%2FbWKUGwhrx4mKVUYsSwiWXHYhjvmGJbx8U1hsHDtoxDt2go0gMRnGnjk47BvaYbMJnhBML%2BeCgjhfzI3QUXSXHf7AgDBvH1DJYKMbmz1s%2BBzSfYGe%2BmvJWMpa1u%2BOToqBgLPx0XsDMaSK373nFoCq%2BJ2tql7GFWp4PjVVXM3vsj%2Fvtw2rb8bKa0L&X-Amz-Signature=a7bdbc1637bf3fc7add99e2f6494d1efb2d57a33d723cb6297d3bff10b9f90cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

