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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPKGXFG%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T222257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFE%2Be7Yotl5M3brX01hoWRnQzZt6WMrEANe8GHgH%2BiaXAiAMIh7Flg4oF04N3upsfD9%2BdkdQDZzZy60BJXWNXQbVbyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF0WLFrjSW1aIyqM8KtwDKXOtwMPuRZulpl5qq9IVZ4xJ3%2BEk5MKn34LGgh%2FqK3y5AwNTiCbf2FnN9FB9JKF5htLBf1DO9uq2xzgzAso4CoqdRTHGA3c2LVqvnB2X4hWj6bLy0bygw07nreQ025K3OE9qIqDQLl6PZr97%2BaW60MAzDalGcpW%2BXLYv6orS7oWPOcpddV6cPSfKOoIQfQtpGBMfbC%2BrMR4L6%2FgOvvKyr%2F%2BImWtl%2BHWpmmRXbD3OHCLCimj1N7E%2BDEyraeFWyNyK198L0xJnTOSb2tpPky%2FZHq1dy0mQiFEVvdcsmxnHK91vaO47MARu5SqESVWoX7ogn0P0nU4%2F%2BX%2BUw4LltBGmnL%2BljxTRPcNcPv9ABkgJz2Bkin0v%2B7oFxhnyMdYq34lNX80RK7f2c4oWGc4ZsDngVAFiT1E4Cj0ebzYuKPkAJYful7jmjpyDmjikp1wEwiJLFzpjMzeyJ4BPW03cyQ3xh5cHxFiq0l%2Bp4N%2BmH5yI%2BqJrhsAqo4g1GAcT3zOVTdF23jzNgpMtgmb8aXdvy3JWgLVU2iF7swQDzIOp6pJPys9DFjZxUAz9Dzo%2BYJV7onF9TnHxkMjZvK0hn0pIAqBDO%2F3OIdA2KLF3pF%2FcgeobtDzH%2FWHAVp8Mb2J2e4cwn%2FDn0AY6pgHpTQNFSCqo0FRu8ZxZzbWjDmcG%2BE%2FGye7wJaEu7aWy35LuYOWfT9Q%2FeaVqIumiyl0rfod2vpJoXmPqHRLkIhLVv5jzB%2BnCAaR%2BNYo9%2FtqcHA1201WNXwZLy247%2FbQ2zUx8v3qZ7k38r8PJyEvm4S1hV9o%2BH3pSJTtuEA1laLj3%2FE1TYAyaLdaa0jYS3dxZQ0q%2BnwLsI9FkZtgsbyxYEtN%2FtAyV5iyf&X-Amz-Signature=1022c1410092c8d6c5119438f9b00457dfb7bf39008d0148e4449e0440e76417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

