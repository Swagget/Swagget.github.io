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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCHBK7ZE%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T085447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCvxfnzDH3XAy8iui5zVix%2Bp%2FBnagWEnSvTm79MaTeDBQIhAJ7FdBSoLqGQNYL4blSdnBHXFTIzaKDWis38uSEEsX4ZKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybgegdGyB31Y4wlYEq3AOLswyxpG3TkegOnSZac21wPU7EvYrvA0Ei8fnLzQnu2gVsameIuTAZ6q6%2FTI0VbALs6SYArjVMcMXXG7jfr7BUIjquvVgcNHYnffWVa0kaSZonUY2DJPRUF6O1LHV0qvGOjt0rWiWiciCOjCT5BzQIAQEWMV8HBECin8yLzrDU5YdtY%2B4yUUVyDc9lOjzrLJJx%2B8ewsUY3DikcsFZlY4OToRHTmdxH0nStbL3DIuC72Jh7aK1KoBq2LphRjvMfqEG00gqGvvq3vKv5maRQS%2B5WMgDJfbOBjsUULmYU9ZRjpNj0rLO4vhJnFYdA7win1%2BQQIS9zr6nFKsruoE4uDq5pzPPWU2KR7pn1O0e%2BeEvCC87fovYBvlvifqQ6eXg1eiGMpFzJdpO7mxU%2Bg8ZOKF30GwFPX%2FjjBulQn1QtMWmv7pe0HSQapaOzN4GRbyVesGZDk00v1NU3ESAWxHUjjaHmZmvf%2FdjdB4vJK6DrOuznuJhma9NTcCyIB3LjDlj9Xrg3e1Myxzey50A%2FiELLsYE3tr5P7Il7dpuvzbRYYDAvHkDZ%2B8TgkGHYs0b2JQkxiOEQqVXhCIj%2BuHg2siQJ4sbLFv0JnqT4Z%2BZkhhsQAGOBFseWbWYT7DD8PFmEnDCYnfvTBjqkAZsmedr94jZ7fW6jAu%2FG5ZCj7vCrw%2FJ%2BYTGhPjfXwi6BOxMHYV5nNnfFtYDE%2BqOuOJmNAnebC8iRkVCQO1ZyrzuglAzyFcU%2B1ttR3hBfknIUMzdtibmsQC529LD72QvP5WSqS1EebWeKocdz4g61h1a2D7KnW9Hb1Nrr2ouw9OVX1Ot4yhUuvJgYBmuQDlGTLpTYDVb3CY0v6lybuRV5cs2zLiOC&X-Amz-Signature=e2618bb99e138ce8e00b9ecb178f9a89900b40885f658a1bcc203e8239625b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

