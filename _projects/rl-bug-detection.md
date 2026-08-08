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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWWDSX4E%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T201417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgH4ulKh7%2FfRP6pHLYl9nTeh2TaPL2Ank3Wwwp2KqMnAiEA17jgHr0YGbJ1FPriWLtbrKfQRTJ2gYsWC4JOFDI3pyEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI6xQ7rTYD2fCtkNQircAyTxwA%2FfusaKbRR9vjPbkN5wVrvgYrOCndYPvQuv893wZ0GsdkYJV2fJztPcYw4DswrNJBJZzvdxOVhUNFdTVRuJE7%2Bu2mExNzwCwJd83LcDvJTv%2F7hUrPwdo6O%2FRclwqAMx30qjrhyzTahREqeyt%2BvOdXGToZNt59pREdZ9iXUUbJB9H0g1y%2FUvPj2R7WQKdgBIxq76UVfnpRV3sc6enM1u%2F9y3XZKx3dRfnCSu%2BdDMW%2Be4roUIj0SCoEg%2B2QQiwi8QGrNE0DSfDR58DZmLLGUmqp7rSwSeTHI1Qp77TvJhE1BAqvbbRwdI4x%2BeiRnzNeWZ8xOo6CYnwwWeMbKiTeqydH7YICFPD%2FEMPB7Ivn69jDEfvSy0wfUKOOl6LPa1rgy7LwlEu74u19qLCWdGn4oEa%2BC3T5RIsbKiH5s9VddrI8Q%2FkV7I5OK8MYgKRqA7fKdz2rMQx2cGWl4%2F8yBRugNMno1lIJnxZO4swuVXdCOkRoTluCKIqdQOpRDEzCOokvtqICdam2qx1ui%2BNLn1D0r%2FllpD6ht5I8rm0IH4Vt7un79Z8mO7Wt54hHyMK1O7x9bjiIw7zSMLJ%2B2yRT5PO3Mf2%2F7JzDAA3n2oSO4HDiI9LNRTUaXJCDppNw1TMLKF3tMGOqUBoTqnN8KpC1vYOyyGc%2BTFbTbGFuEMV1rX%2FtY1NvnDliei9DyQmh6CQuYh2JlFjwFl7XeKdsSfsLkFp8z%2BzruWyL%2BvsoGnLsJFItSqJrY77DTg2GmEnDxNRo892YQ0EqYPLQA0axbVCfv4%2BAsTJscvwgdcQRjctHOjBQm3RURCrAmmQIHP53jODS7bx5Fy7c2K5Z1EkksnEtdJ%2FA6i5DdaG3fpnBy1&X-Amz-Signature=948b499b58a45bf50a7dc3ab4e134f72701ab29aef89990f9b4897894d2879d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

