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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJCLWU3%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T114751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIC86uWwTIJhNrrmHhgPOS1b64VfTQ9B4d1R5nRJlOnJvAiA7tVmI4QQlnLROW97p5v12ygbhNmAJW9U4tNX2%2B1aG0iqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAjcQWeBzTDzq8cP0KtwDOMU24qbVchI3LbvZ9uhOudF8yD%2B0vi4SG%2FC0aICPgPl3SLNhaBqYsNUfn8H4TfXDdYBrk3cTuouuLGd9PSua5CCFA7pgoOkK%2FTL0BERWN8MNpsSjo4XtSX51MreY%2F5%2FkqzWcObXiLurAymzi5iWZfEvriKdOUrOzpY5eC5nUTEOxBAD7tFmGqldL%2FUYnVjGCw7c0XusJiKnhKIdiYllSQ3l1PH%2BhsSE4ZwlZ92Ah%2BaHxqKSOnjmO7FIKgn97gQ8SrycWT6twJAQiwis92lGPHbBBWHS4WW7zCoyO%2BxNgOBbZiCz0eLNppiJ8xxjMlhy%2FdKx%2FH3C7Gud5pMdq9pkNjHVmqQ9FBF8Hcs4Uh5oJ9Xi9Sw%2BCSz0LoewfHRpagdtRXaSGRunCuDUYLwhpKmiAhwpcXQ4%2BmW2tWmPhtctTbWAfvIGWab%2BuNf11cxOA2AdHd0YQMnkfNBvl%2BM2ZekHvJ6sfTtb7r2IwGLqAfyBnlO60VzVqM7t0bxF0yFcAI2Q246ugGa7O4V395f4awF6jAtIdU%2FqAVKjVtzVrmrsEy4%2BE36Sq%2FewDzGG%2FZCjMlHl2p%2F68ywKwfRRpnqFe45%2BuS212d8zxwIksvLEDYI1u30CveBSRqf4XIndRKlcwmYPT0gY6pgG%2BOvlJDW79gSBGHDDw9jGAY6veDXzH%2BJt0Kzt0j9q3Vx6t%2FUfFbuKjhi1qj7SezPjnrYHxKko6Pksfk8QQ%2FcR9PKfDgmVxJ0Y6jx7XUIgHOeLW18V3tWXScyYVAbXLwrtGT%2Bo%2B9jyqOJY8s9rgvcOys%2BYgjIoXppGP0mjMOYXSp%2F8tUqXbF5o6b6Wmupk346GDMxA3W0J%2FXfwAgFu3MG8N%2Ff2CuA2O&X-Amz-Signature=f36bd21d4443b4c0c2e46f5b613bec10aac709e47f6877a565a4a9aa69955d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

