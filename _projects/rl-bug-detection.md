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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJDNY7J%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T170645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCtAuLHSJGG6yZiUBMotY4QGNfJpGW7q1Ypr0w2vs3ckwIhAI5WpckqRQNsbYcmuvyWs7jAPKl9AiG5WHbO85pc%2FAKmKv8DCDEQABoMNjM3NDIzMTgzODA1IgwwTc5A6jRSvyTeaWoq3AOW9YWwamvArmFyjbtXyzGdWI%2FY3PityAIflp0%2FpQ3SUmPkqZiWl333Zy0SjJipBZSjR5cJEVI9oJLL6XS7m1sH26edgEHxuztPaTuJnHMo9Ahg7qX7Rz%2Bnvaj945XbSjUYOJU0x2%2FcS83e1XTArQoc0Fzio4JMynKMbiaisuAWtZmSiS0stilyOLRGuvGzE8F%2Bpu%2BWPrx2dCaJ4arqMrTVWQbQn5yG6LEkSS7tEGDsFG4Tpm5IbVVkL1oxmJPwDRktaXZZ3eXEztLX6pmLmCfvLx2nF2WUxlsRZPB6miaviUvyf9JfNzWylpqJ3LqR76Y8S6Q5z7LsvIvmVA4o2%2BSBd7MXhEX7sMLRNj5umvLS4T9OsCNpByNzHEcmWUcY4saioiy2QNZfxsIQM4XzpE3Q6Ax9yoNtavBtdWmXPg70Lo5ZGSQ9a1kaJzlCNjS2M8d%2BYMoTn9wafHmMpIMFb9iVQ%2BTs9iangY1%2FK28vAUXLa3xCu6XDsGhWaKkG2bCzQOg3L2Dym1kJkQHIkFdDeshwH7IrGmiLfobcy1vGECCzFurkW8ZPwx%2BkLltqV8IOTd9QaDhq15Is%2F4kDjtRR8AaEgiNfNKxJD%2FBR4gJcnWl0QQOBm3vFKSMvMRG8LzDl97XRBjqkATsnlUMyvQ4JqMt%2BMbrFEYQLzLlqRjOVisdPuA7tTEcaDsNQNXgU8Y9%2Fljvs23PJADr7267WE1Q9anK3mxfsCiiYNeBokNL%2Fa%2FqpOii4aT1bTbojZZGT%2F0c9HSkBtjnizlUfMpX4d4aUDAdoNrEbZTWnkeMahYCMR3HpgeRtuvVbM3y0l5n42ifmsjVFkCNrqZHEWO%2FoNGmj49%2FTOH4qjk%2Fvb26R&X-Amz-Signature=661fe3f8af42a7204b3ab4072cb4f57d4316d60bf29d218345c63ac4766c5e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

