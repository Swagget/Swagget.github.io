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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWPIU2P%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T111504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFNuy4CNIwt%2Fyr4Es%2BXLZkj8%2B6ZNTujUeV1GspE7gfisAiBFCYOan0ILZrPjvHA%2FOihDwjgUXuiIQ2Rt2Az5L%2BK7Yyr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMZ0oRyKMNqvew0w69KtwD%2BVNseR1LLKHAMG9FkOXIDXvm6apKsQjn1TCnJ5amwuFz%2FajACszZMeVZ00xsnL%2B128VsvuZlHYvtGRMRej9dz0aH468cu8SfAiaanSM7xzVvGxJq99w44Ys0im%2BiaIvkEFbdcPh%2BwS10AfRiV84iKhVharlz4HXaC50qslQRvVoDJgwCboj9Y4PZIGPBeKscqAlnJNLtH3Obt%2FBLA3NXza81FXgQMApJSwMiR%2BUOJwtEuFks%2FPz3XRAAjO2TEqPizRfqjJsnjlPXDABdeK3jkk%2BRivx3cHfGWfkwGANjGrjZkL16DVsqr9ksomtrEXl%2F1q%2ByaQZ2640s8A7hHGyMeiPvfR4%2B%2F43PDQeyyyV5W0ehbqjA4jnCBw7lKqB5vnOGd3Nprs4fO5xpybapmTt%2BJDIbioLPGPw4FdwE%2BGX2J1sibveIZQzPNP80cS%2BRcWADEr6UnC3mQ8UMPi9LBBOobRXrggkAoAIyz1EYkGUKCtswPJfhwVFws0pV5N07PPC6HGzKW3mopPPPWuOUYf0DCylZ13mRYKPxG5TzSvnUPRrCwmXQ7AisnmoZ%2Bgsh1TnYE7sLkTCgK%2FZKKk0r5vPuYOEPRFg0pZ4GYBQCIiFknSw%2BFyQBRpnW3kPFNykw5NS11AY6pgFqK3ofNKPRWkZg4uTNpixdeaEVm4fxQ8r11dPI%2BvFvvOrq50wxAJ41EfQSdcMTTozZkbQMaAMmqr3MU4kBAvnIjVzribsim5QHYJIgSW6g9HsuaOH%2BSU%2FXcvgUjCB7aPdw%2B6QsJzCWE2k8aJCRsd11TAGK3xW1gIojm9okP%2F7Fp4T4c6rxlacvnht5lTkhRcvbRmgi233EbDzbiQnNjpl5lN%2BMWdM%2F&X-Amz-Signature=a128b0f1b6445762d12540424ee7e6c705614c7715dc4a872ab8d4abed558694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

