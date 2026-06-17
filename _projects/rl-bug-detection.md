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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6IMSULK%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T215042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwdAQyP6v%2BVxCajCOP7qzhnOERWL1ilCvKtr%2BwB5sVBAIgWNSLGXi1dOj%2FE0RgrOfeb7UMu6ZEyA1hxl90hgfuX7IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzFDO07cZF2wPBVhSrcA40dch44PvYXeTptFFhLhp4R%2By4t%2BDGBHOLTeMpoO%2F3SLAkwbVnOI4v8ArYnK1eYfgOvcvFFVcpDyzaIsz94ZdoMeqrkDjwQejtsjCv1h1Q50iiPAPKk39hfb4FDpTpPMupt5S4qUWu82tdgTHV1pePaFtk30BfOlIxi92%2B7BL569kTc7gmgF16V67hJuJh3VS97abSpH%2BlfBFoeesgdBZc7HWd3fSAEym6GGrvTDfeUYq5NqG6C0BfC8AYTpMDWiBXiMUoQp6U13lnU%2FENDkMqyXH1YqmtLzWEHKA%2BgRR9pUZWeYSifw%2By8cFQ7HxEjxtNORRkH2xGfwMOChVtSz5z4rDX1uR1l%2FFFbQ3cBf6N5A8DESM5LdXgUvzwRl9MJ2DerkcP3Le951mAzjR0INrnO722HRLcPQCCgsqah%2F5uQS02o%2ByB4JkfaNcYjSMMXKdZKf193qb8Hq6602I2bMXY%2F4W5forpV3l4x2aSkasBsqW04RY7vMSa%2F%2BjDG%2F6mSgcDWG8q%2BS3Yv3L67OyEAxbGOOkl5GaJXFFawBwGP0%2BwnrB6k5KNsmRy3NAHa4EMUUnRoayPV1%2BjWuEeCwAb6sq4rCW%2FnolhmIb7DCGKGVYAytyXyeeVzR%2FHfnOOvMISTzNEGOqUB8vIu%2BhZCfmu36ltuXcuK8yNQkcc2iW90lqwve%2BtRj4g4flKt14vM1fSOqsE5CTvrfZ4LYqV9mDa7aVfsNdonIqCWeDfK2G6IP2OqmYRohi9Y13G2bCMcbiNiyXUiR8RwCIi0a9v7KqsygAxC4Uu3yGLydXkEi5v0nbfqGlKqp%2BuTNSF4IFmlj1xi8t2s0V47b57ErvsmItTJy9xMRcRNupsJpNFp&X-Amz-Signature=699215128d71c2d17b9fa4cdaf6ef8f9a586aa44e03275ef6bf4e733963f44a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

