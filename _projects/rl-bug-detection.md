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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW4ZPF7L%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T050055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxeBEJjtVKoen7cac2e9FAEbFHIUYNTFCvwmA2cTTkogIhAL3aKbNq9hym%2F3X8gYbhwAbtyf7dRPBiLUpMFlWNGqzAKv8DCFsQABoMNjM3NDIzMTgzODA1IgwR7X%2FYIENgb8wEPosq3AO1GVIGHWM%2BXRU3JTV4BXYKzflnEbFS76nsnX723a4%2BfEtYGJ006XJnX5qpfW%2BMvFUvlNIw1KKBP5aWZVo7fmWDvDS3T88nCvrvmKaYv0CSuI7Bso6jYXhHtL8NM4tpMWGNKNn0WF2XVvZDfhTFY0tMsNZxYXfmb0vPdVpHmbgKG9Y7Xx3qsL1vFAW5iZHbsE6AtWqXYxvS0nH5FSi%2F%2FfLv07k38auMihmwpgGUwjSkk7aDkruduVAxtWAByGoxdiAimnoGyPYaBYWc62%2FJT2TF0B2hRSu2AQtaccu8qD0fvYmGlAd5jgKWl7BLpTbf0VmQWvB8O1nPThg3daPOt9xJ%2BY7tkSxyX5RlfeeyyyzZ5S%2FAfTHxeP1%2FKycFv8PeHE9Jr2qYAgqUlRLsZY744xI8s7vjDUai%2BDk4nF7pTU82mfuPD9jhPYdNWc1b4s%2BNorIoZ7OVxT0uAY4Uu3OIRYgQyGaadOD%2F6lgMS5hEIGnziA4Qby6Y6R9w7Cb2qIjIvSdE2I2ohl07I2RjhAZKUGZS5rWIUITn7UZPEVpMqyx2XVW2YsoqUWQh%2FI2TEDXqqvshfzxJVJhqJrYgn1gxBnwMoPr2zRIHVoPQvk%2BVpcFImzJs%2Bl4eW8b6%2FnoqxDDBxffRBjqkAWOiHY2VJgCYhlVGXfR%2FcnEI5sJlFtjI0mvjkszFQ8SGrN%2Bc2%2FeTr45FVMjuyKTLPB4hEjGAL7p4rwIbWv6Mr5EGwEXvhnqKoNSvS9ZCbvh2bgUrGJSf%2FoPYhtfoeukl1C9pPaimd41Qc1jpwKcZoQnhwo4FNfe8QdAKg%2FyDIrgY4X7NRaDwodh8BmPDaEgPo6DIMF6rFA9CsclmpKmc0FXP%2FnjM&X-Amz-Signature=a12447951b53d33440114c06d2697829487f78476aa6540c82cf246d83731c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

