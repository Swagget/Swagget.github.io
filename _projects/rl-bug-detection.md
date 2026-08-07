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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7AI5UD%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T103941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLNG5czv2HSYy9HZJ%2F4nDWWjLXN8QH2yAtXm4DMomcGAIhAMnYgiat%2BJXWnM3bMw75FL9%2BWUdF%2FF%2F7nwE9E80QxbVdKv8DCFMQABoMNjM3NDIzMTgzODA1Igxb6fixlCFlU348Vpwq3ANc5vDDCcSY4ZtIu8qiudDnkgFjNDHuT4CXfUST0s9WTpvfwXQUL7sjWl3ZmaOiEsPRZEpy8VBK1VpAuVm61j36IvrWE8lF6npPZObXFuCMDVN28kzn8dE6TAQ9yeNb7lNIYXsAq1HeW4BSukFI8dxU6P97IUnQWrpT5FppZgTajWARpW6tkNgGFQJUYf4OoU6CyPqpVS7uJ4ppOlq7mLwteNtQ3Nwu7J0ys6ifPWmUD8p1nM2PQpOJ5%2FJibmn4yr5XgOL4Z%2FtTKfIj7c2ajkzBAIdT48BP%2BoK2m9G0ghWuRso1b2sS2hug7iBhnQW7Sqjq6ymSfn7JtvdFNJpn%2F3dfsoJbrHtR6Z4B8W6puqTuJohUMwAlWV00k3rSXSui2spG1usIy7ibMTXf3lq%2BVv0HfWxN6rorbBJBMjcNiekrFPLw1NQjah33XEn4FHa5kxPHcLcxHBXNSPefn7u2ZzRzxz7mBsvqoDINYEGJYhsFjkD9TfquubpmUz0QT8TblIeneCF9btqhUjw5v%2BbTFtzgbwLEbL%2F%2BXmU3JMhGQbGTbmDmYb9P9zd%2FufOOcaVL%2FwBnVmAYFGNtfw7EG1iXM5SeAbA1xr3gqIVQ6i6Uko2UxIx8PjN1zIB7IzV6XjDsy9bTBjqkAdeWZtWw5%2B9Xhw6KECPpoju1IT8hf9cij%2F2CB54ktv4eqBX5g4AxhNWW8fJHKDc1K59MRLraxm7nnHXmrpEWGdipR5SZgGRYF8YxoRHzqJ2%2FuoU5Emn62r7%2Fg6m79tCCHtC7ED4tdX74g9xeB3c7PycpRXzlUJBgvWDGRleKjON1ToeXmd6Nlxach9oIBMK9ZMiardXiElVXOKRY30A08GfsogN%2B&X-Amz-Signature=2de120cdd826a6cbf3e5400581725e4ec1ffe4f9d357f5f3d89a375ea1c7e60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

