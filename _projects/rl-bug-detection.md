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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CAAEHBS%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T130316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD6Nw6pWC4YQblB05F01UEri8t6yf%2FdKZVTYqnyB1w1OwIgdoSSsncdrAmG%2Bb1%2FLUVbVix90CcQRKKnPRUdskUQpboq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD%2BuNT9vklwfoo9fYSrcA9LNQ0Lxmrh04lXhBm5mraXvkblusbA9yzHbuZPtzUbSkS1YLLm3diJro667ilLvIbSCR9P140w%2BVUA4%2B0lLZ6137FSBpQ0BLkBzKtRim6gk5dbD41wxK4nLwfHQvw6F%2BWzNR%2FX29p%2BRKlv82vdOZ6y%2FvAeAtSCSGc8ryo7nh1okJFr7cWxIaEUVGC4zqoNMbf2sJJQEDd7S6UZGFFF94LiFxpEDvbDCSDa7krmR5nPiFmrD%2BEKcu9pMiWzMH35yZh5O3tzHYKjd91FCf1MmM%2FaWuKqKGIFQY0rcI6I6T2N061nLk3aHn2vgVyE1chnSZJgAh2G51u6r5YcDOvffa%2BVIsBfXvmeyBouP2B4m02YBgj%2BkFu3g0VpVXPDSVb3VnRT5LTE1oVFoEtQEmccUPSs77sD5dd%2BOEP0R7c6g1C3x73ipONBB%2FPcJ8xIm939lj%2BhapDIECI7mkObSlWEl4bc02UfhfZM2p%2BpHGcXaf9wODH%2BpRqVBUnff6whCyZtjdF5X4Bi5MCi3UQMfAuOpgi9o7if4%2BqTVRK86Rv7IUiNn%2FrjomYbBCkjdGVKQcP4aHfV0GvqwLN7r5A5JDRIh5us6BMpBHXMrjBtEyeNHNzAia0E8IDFalh7rIOmWMLr23dIGOqUB06gqIWMRNYc%2FyOOqRxLr%2BXb5LgxZtsrU%2BC%2BX2VzqixeMQXeNRR679LOoqSj5Nl3iLx19DCtB5exGxvVOdLGj2WtBy1HnsUKgF4D4gRtu9DOE4ZtWnGypeXWvR22QeeImojmsf3l5%2BRak83RyF5zMhIOfXjZ%2F9Ub31Pus0q9u1aQm%2Be4JCBgUfMTNnXGnsoAzZQiA9zcTiq2ffWRsl7zruV3e5l9K&X-Amz-Signature=32a3d0098e570fc38c981bd47756fb105d141421523633054b8ce3ae640eebd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

