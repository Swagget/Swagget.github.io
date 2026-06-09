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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWDR3PTT%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T175003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAIDuGWesiUEMJnbK4Helbe2UzjhQsQJdEopx0CTZUFWAiEA94YF924vXQfqDzfyJRXNbdR4LIzS16zngbrHvExuoQsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtTFREuHh1fiZQsZSrcA6BKpVawjWyCDULs0z9oQP6HnBqYtPNUksC3SlHjIgBn4JDjvKaalunfZes86nai%2BBS4l6WuFFomcTZ70qIp5Rgw1sxKfo%2F4ANJoezTn3XSjdlMLt%2FX974KcmwX5ClN4khKpfcilnv7FfkGeOHpimUCMLElp7C0lDOd7GWOYVJE3DkdoDXhYFVg7nCI3yzINkB3J6jeyDyFV1PTEAXkmKUDKeRlkveh1ttNjZxoi9klbWHNbV8xJL82%2BpdFL89FnznOfIbPHm94HlbdNGpEgyRnvXomPjtBQhn4Ct99XK%2B4IbQGHvOwQ3YIuSyQmmtD4qCR3sudE%2F3DpD%2Fa%2B6Bv%2Bu9gmm8QifnBn1VIFZV2DwgMpsdCAZiGaDit4tUJfcSRvlcBM3ZQomAOJpFG5NCP1%2BPrR7cX2FToCmc%2Ff8tGgb3H1ozoxT%2B5mYSMeFPFMXemvrak3BKNSWfu1mCaio%2FCUyAt7A08Wv0%2BjEkGeuY76hXp4KVWDnr1KjhWZzpzATMH%2BX7vTNCnxtdn6OYPF8QtjWxpHDwcES65VQZ9%2Bpmut3ReN4MJ87zsTEP8WI6rEVUKLWE1zSfHpsPfuevbQuy4qUKPt76YPYZutRAOSXBGYIGMOoCVfkiamPjsk1Q4qMKCEodEGOqUB6WxCrG6L0mVGzfxn2Dy%2FUxb7UViMW4a6rsUL64k3HiS6tppFpxMIHxcxs1ZNo3SGYXUc%2BB77njDbcQFJLQl%2BZwRNECz0wtuXEkIkgBX7Ehe3nfpqcKbL4g%2BYXavWJhgzXwrzKvnmVT7Lo4b1lX4AF1W33mjoUbb1MUCN9b%2FEqnmkS8c4ALVmZudM9DtLAG%2BVHLHlX9ua0hbspsS%2BiJJc0NBXm3z8&X-Amz-Signature=ad8c240b983be75943dc8f166253f119ef0170097cea145a0098f7ff8fa9e918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

