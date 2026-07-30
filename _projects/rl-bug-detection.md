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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7U3RSLB%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T180727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDY8121hQA%2BDIj0McB%2BcV4qShahM9dJxYiO4w51kzeT6AiEA5dzuc%2BDp52qRSjCqWKSiju20iX16fR4GKQremki%2BwbgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSSD%2BELBSy8CT9yZircA8ZxnIIedrwYyb5Ygf6jMRWwgu32G5175lBe2ifS8ret%2Bmu71YfY4Ip91W9BQzWAnuCTvaYPB%2Bjd%2FUXv5QnWP8p8t8mfL2Wgn5yvtXLB0Woxa0KwEqgVyhKF4hI%2Fze1n%2B%2FT%2B6BIxxWuYi6An30UKD7WtdYdyjmW2qoKK2PCMyK8JeRCRZ7ydOdfA2D9%2B19NNmRhlINb5pJBIlC5Ktv%2Ff5okw6ygA6mPrL4LkVSzmj0mWD%2B6P6iEAeb8dAj%2BzNXvldeUBCXWGWIJGyFRTKkXr9dv%2FWoyxSvJ4tuHY2Dm081Y61xa5TxJEkpxLa5fl%2FdX6TPUvvo1NS7%2FKruFiyFElYRQqaqezOP3XQi6M8B8Mxw2vhfBmyV3jdaNeR5zppJmXyi123hTlgtBsZIQVU8ZjxnmpqYddVngbm97ckhrx%2Bvstr9ZHqKaGuWlp3cMNyjGN05D1f2bNf166fnlfAQyx%2Bcs6yjM9%2BJ2jdx5vFRu%2FMA0JS%2FERbvXnjGIzloXosWfJQm11OoxsPt%2B8EUaF52D3BBeBTvw%2BeSaiUN8ZYuwHFDmENrrbsUgxHvFiPNpLPBITc1ek5t8ma7aJwK%2Ba5kSzDSB1n%2BsL3LJazNtL%2Bo6vZYyIVwnTNeUTZbJG4%2FHnMNOQrtMGOqUBCOMYCKt3pTlrcqG5xOK2deJ31gvjEdEvbyWaM7ujU93lTvGeTECJ9BDAC8zCNo2%2BmBHNBV6pjRDbsFZ%2BzBCnB5m2d7Ttn41IvVAHqxddYTF7jQPACSv9157XdTOYY5lme%2BXPQDMXOSsJtWr9Bb%2FdscV5jCzx6653SIQRPHcNC%2B7v89lspI3KeQpStcwiIyHlRzPHP%2FwKK4QxcNSvljOVK3NyXdkK&X-Amz-Signature=84e7e358bcb7a69621aebfa800f5161eda72725c56854cf717907e7f0009a6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

