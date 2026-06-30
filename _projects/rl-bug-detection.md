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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7JC5K57%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T220623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDxlle2JrQc4uzTTlyTBtZBWpn1EKzjLWX4CdeXPxWfhAiEA4AmySWDlJ6c3Y0%2B9v3f9SULBCqKtFTOhv5ymN5DkPdwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASG4uSHjtjwZ0mJgCrcA7bVMQQ3M%2FiAvImD1%2BGQLlEFFHEEShFSj61y3NxwtRibleqXHavwBRmnDeB0QB3JL7tNMNTKbIPBmTtU08qKYRFLh6VLLD5mZ1L%2Beb1TpabEiVxXLLfKm30jcHSXQAn92p5RTPgjndfulvODZUd5SKK%2F%2F8hT506d8EIveWFjRHzrtm2EygIdXdow%2FLmLoSrB8NCWtTpYrJmhtjnP%2FqnqSurf4nSvxtk8zhkDRvAGD0wGkZ5pLXFbq16T8GqNfB15DO4MedWoKZjWn6T%2BD0QkasEEzdCapEolIHgN4vi6z4h253%2BxVL2NPoWBEvNVd4t32NKAHiIBHhHWO1fRcmKgWXZDSAGrNmRHq%2FaQoE4pQD%2FF5fP4g%2FPLHiDrsHofIDfjbuVGu3ZtCMnFSuosrqn544IrY1tTcV4bhGlJIuECaN0caUndVmZgy5eUZxObfKxIpcWCrs9gOQP3VKpc06Om6qh9ajrVRRyJc3ms%2BWRJzacIRkb1LotET6Ru68pAcwgQnaljaPG1j1Go%2By8TUIBeajbQ1jGEVKgU8Pj4kL5OPoEX8h5QrIUQq0qcCg%2FujUe8NOnC3YS7Voc64djFIh8om4%2FkhytfzxdO5FI2QpAdpO8E5Jewn7HoQB3DSwpIMIDmkNIGOqUBuPl2dMiFSQRjaADwHm%2BDPzqLCLhA3IWicEJh%2BrZmZOsNJjdTZ3OKhY%2FN9Rq1dImF%2FE4JCF2mHMSygzC0jo11LQ9fkf2fZVouFvOP0uqHYk%2BikA8IrR8IIpJZI8kTbGRL%2BNMfFm4HKXVUazO7AXjs6Ut1Ag93JCrTygR7mPAMzv%2Fp2kEcxwOJ%2BJSFkwh%2FtmAeOGROkbdFrRoAu7ziQDs%2FiFkrj3rZ&X-Amz-Signature=f215acf05d0867602bfe946cce0b66522080d73f9aec196fac63ad9e5fc05dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

