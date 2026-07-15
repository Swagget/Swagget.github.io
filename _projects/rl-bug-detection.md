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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVGN2L6%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T010928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFXxeAHyONyKoiijlKfd3ClOZJ7foygzu9qsvHVOamI%2FAiEAqa%2FcQumjZOZGfUEd6IrL4UuM3%2BJTviIS8UL53XotEMwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMgu5heXAcbxFimdDSrcA6CQje6Mqqpxqh305E1ilMjX%2FQcdkGStB8KvQ9LREh9RkQQ3J8tANgpZ9HHof05T5iBhVn%2F7vfG2lQdB1kXJqvtZ5p7jfHY7Bs46gFJAFh7UAue66seda0WC%2BzGzF2ucy%2FFL8JhDeH95iweeQ0vIDec%2Fv8TiWXLh%2BGsliw1nptQ4HTPesxfAX0SAzV1fUP4qyc%2BvAeg0aOH8h95ngUTeNUMddM9Uf6E2gFj7tbjC%2Figre9CY5hmL233W7e11Oy8c6PCaVFFY%2BRZEFuMMIzq29v0gIF3G1414GXiw8iuC7sRDBvOGeucuQwPnBxF8mgKeG7QuARhKDUqRDYO3JAVkpxoqQ%2B3u2PV4NE%2Fr9RSq121uV7kQk%2FUeGmkY1tF7Q1kgQ8O3XXEVpF2%2BVMXeEgxS1YPYaYezH8WnoUKxAXnUm%2FwqEEceDZVYCM6prtiPenvuLP%2BXj%2BMfezoei32x1i86iCSwyiFp3AyrVG6CivDQn%2BjqE4J5%2FQsH7m2qCWdSZEJ2sv%2BjUV1vxpcdpK6bgTDVptvd0kNlqvfFZx4XyfC%2Faqs7OkrW0mlunG0D%2FvPSeHQvP2LqmuMuVws%2BVGOuRRFq5tZU1Ws311OUYF3%2Fcnya%2BjZhyWm6tzQH9a31MRZ%2FMKaE29IGOqUBlrQ8mXFGXNvrlzFJzEh%2Bg8pDyJBne4eQnIwcVrPtLAWiQJA%2FWrZmj9aE%2BRROk1QDX6ms2PRnppGun85Lw5kCWuibVD5%2F3dkxGZys5zUXGWAmK1DJX3IGKo%2BvkEISbbJlHDfiJmwNbdgLeye8%2BBGRRB1Xv18h6TUvVDJZsPGcTD9J6F3lC97j0PH2ZW70nDRzGTK%2BOgDqFrpfVNua5NoriwkGVr4I&X-Amz-Signature=7e1120948a9720cf3704b85754e9c0a8201362534020bc341e3a176c65cdd2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

