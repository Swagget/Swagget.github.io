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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAOMQL4%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T153401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgTve8PE6Va1e1MfflJPwA1mCYBlxbH6lRFqoghW8ZJAiEArTfooMrWdyzIZABt2Q3metTrEuhwy81IWkSoqi97EiUq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGXg4nceNoJwuDKYQSrcA1L%2BCZSHRa9aKRTg7s7SRJ9kKUYiFwAB0KFmIgUMnI18ivh0EVDEmJI9xxnSJ9S3d7j5qem0Tonu2mSW07zAdPR3nvCrVQsj8AGSFjLMI8M%2BL329E8FmsdZVpogD6irLx%2BBlTbHVQ18fdSDfUZZBcohkK40wCOUawg6DBS%2BOmgW82gNqmI0v%2BQAgATTGzbeRI41bTK7BSzN%2B90gEIy0vW7woceQySXvEU5cbti%2BmsPdOwuldoASmQvB6PYv6IPxokmo9L7fTo54JtB%2Fqkl7g3doopi1ChKWKHpOx2ucQMLojoC8TKBvVEdTGkr6t3oQYDrkzw5iNfFhdL1w%2FrrwAG7GKar8ngetLWWzuhJCvaeIoEKZ4X1u83L3sS%2BEivjjoEzZSEqvh2ChlQf0zx%2BtE6wYGZ5at3cE4%2B3%2Ff8KFjsX630QcFsRHmSioIUOdOn%2BqJ2%2B3YBsTM8j0Awvesw2vZTXo%2F2OmPbDPTQ0C5rbv45xCMlk0M4f5jNqC8IK%2F8sZZGeYxysm2q6641zcW69QnNhz60VePkSYv%2BBrRBs6u95eyNp1hxr%2B%2BjeWhttxuyS7fqyMWSL6A442JHFo7jRaGffEnH8GLG%2BenKOomyJ7CJcf5sIWVq%2B4FD4m%2FyPF3ZMMzendMGOqUBrf1QJui556WP6xpbRrjNVyou373F4e6SLjhUYrOkMjj6fgAtnPLzLKJNdHGHoVWFjx75IytNNP6VYNkV0BZYgiwbOTt2nJLwP%2BoP%2Bbg5Js4z%2BYroSKKC0VtdR9%2FCdRBaH18r4BRgqh1prPSHbmaHEXJstQi38YHhp65xTcJId0%2FmO4yuW5L1dC4XHLNyg1H9oh0qREbP5hA0Y0dCLwwxv0Ag31p9&X-Amz-Signature=e1306615a77273d960dbd5455731865d3f451c9eb30f3e1b65a31adf33c1a5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

