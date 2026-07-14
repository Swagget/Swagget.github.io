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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WDQXFXR%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T145150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIHajhSTPLaGDEt8pz%2B7IwIc59VZwUK1wcKNoE8fPIWnlAiBXT2vHBP4DY1kVyeqcGKSSPrBC0joXQQV9WVVy2dqd2yr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMNeTNKnveqSxXLq1fKtwDr0DGInZb7I2LKdZ80Dg0A%2BVH8gLLj3KQBJw5k1fsY8D0nUMm%2BGS%2BqgW3gbjFHYXT%2BTT%2FWSsdXI6UG%2FbSXNUgFT86p1IJsxCaie0Xri6IDREpMVVHUv7PAhqtWt7V%2F8fQYcrLSoY4JM%2B6WrJcsEQ00giTWxQXJ5yHqcFveg24M2dyfvbRVmtBXTlsj%2BRJk%2FSdU0UEd8wTVX%2BU6a3XVzku5QE93411vS36zZEPxdSNeIFMnNakI1hAzJUu7%2FOl6L11t5dxSngls3WGazgPFslOMTipvdTRflsZxYCk8umFVpaE7%2BMTIcNGcQW4WSynZjVE%2FkqFi7aC4AalyoycaXk7H3Cpxx8MJd5FA89lX%2F1rTVcEMnW0zishF%2BTCv6SHFtkJ6eiWbYGNbqRABLWpK4hhI6yMttHXmLT25Tc3Omv8zJVrLVNelUlPiqCAOoajARPkVn6bQv%2BnKS3DgSUffLYsV1X5TkFpKVZCOkdF0tj7iaAfWi8roHsG4v%2FZllFkHkzNMWXJWgPf%2BvqpysxhlfIv3cssdLW7dsrYz5Ym2aYVOjnWsprPDW7K1NPN6d0%2BY8GKtGg6khq7mvMY3MomJ%2FJTRCqiH36U0l3L7%2B40zPi%2F4fzUZOvL63iJ0qVe4Ggw%2FPzY0gY6pgExI%2FQg3XYNILTVaBzE1jiuGzDsldyWqAThoGze2Zh2C7GTYDidW1swjZn5rLtjmVGJ0qMVZbEEG8PD53wyuHNLH%2Bhqw%2FkN%2BmkHvz%2Fav9quj6vuy0QoT6i6SbBdqtZa0RonKvWmsGaedGYxDaenlV4MTh0RkHWjMZUBIS%2BtzDitdVmSuzdhd%2FOWF50%2Bh9oYm0mewkcVWjH2c4pCDn9tDcyMytcxA4eu&X-Amz-Signature=853a77144be9acdb550b00135439977a2cc54b94b9f28045ed23a8b1c958a7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

