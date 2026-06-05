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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVCDE2C%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T174438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCS3ppYrZ%2Bo4cu4jamxMyoEamvvPvxsJ%2BZZHSuptdGRAiBslY98%2BI7mqbT68PJPz4VcFB9SbXqRxQzn986SQPQEeyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMGo%2BfwGkiqky2FnqmKtwD4F2dkwZ04knbRBKOsaqadFCfOsbdweZL5rNs6G0QxVnYow2Mhk22cTpwUrpJ8QMoLc13Iej18TG0JXXHquqVM%2FF3%2F4t1Py6cTVmIUTy5cGeoeA8KSgDGwbZjCEJ%2FydxxjpNmD4c%2BcNZ9cjD05EBVJb3FyG7K2274vTI4bQE%2BiDvOOm2%2BlaN6BBOLbo5BrKpLr1%2FsTNvgraAaS1KCwiKZU0moon%2BNmUhvq5NEIj%2FMForUuRg1263L31r0N59RIBNk%2F0Z7EF4Qa5IFFgk6IR6xXFWtEs2tMtQMA9ltwbngrNMP9A8855NGlXG%2BDPGl0gvUwhCRPT%2FSWeasasJ0PWKmbmJ7RNaASSZPX0%2Bhcm2wkkUbjjstwJ4Znov1LhzuNvTSSZFlEfw9XfDcNk8bfQ6eqjiMwvcLEbGHnPlZQI%2Bw1It7euiykV5SontwiPuJh7fpoVP1rLITBPcrTnCBvGrK8d%2BGBfZDYc76ORXRvZ3jkxHx2dGm6ZIemXSihTYRUENmWad%2BGNy5r84DqhcDyifi0gBmWu6bBoz08b3J0UO7yAoT%2FtIxmgcxD0jV3n9wwa4xaI6v3AUmjcG%2BNN1g4cNu8rC58zZw1UwFglxUspXZJSP5mtdBz%2FT5jBT5GR0w8%2FuL0QY6pgHAT3bfXhCQLkBoy4E8CKF8ccIZcN5ZsYpILYkJB0iulLSc1Thp67BqSjFad93Bv8CP0SSdpT91QO2XrpbWks6tw7fdLbNF%2FNuuRgk2Uk%2F1mIk0NyF9YIH6gbKEigBFIvKUhSDzsBEG5I35Io96RKkwFM2ZMwoELS0FdU5xV%2Fudyf1KjDKImSg1Zmin03Zull3JUyDxhNUnwFNVCbij4vXaYtO8YV%2Fi&X-Amz-Signature=fab5fef1329325d673f999cdc0e88bb8e28b7c63179352327e3915516d66ecde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

