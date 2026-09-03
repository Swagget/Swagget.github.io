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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666LMETB5%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T233645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIC8EOjpnd9ujo2HpfN7mrsrsu7Ng1LP8hY1JMOjFJoQbAiACTKoiGmBWeosrv6r%2FuYYFrZl8ipgWiLeA54nUJMvsjiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4zyjv1NyuuAGwZYvKtwDnqJ3jRlLtzw0CjQ4xUN6fb%2BASDVr9YLilYzWhfQS53ic89ruOXyHEBs%2BSKnr1GjOYRVJe5ly6yGnIR6%2Bev%2B8PkH3WvBYGdSj%2Fbth1ep1ceX844Zq4gDRLRwR8a0QstEmNAb4itvWyDRd3Q0PPE6k5GpslfQ52a1osVPErvPYygTE2esD6usLguMUjSkMq8MHzjq6p1iPJwr%2B%2BHtE9igpfoFArkEHV8WPUZQV645yq%2F4s93KOV9nj1h4hOCndHuwKMlZR91q56SdgpniCPHzVkLzwbttzQamJWntJf3kHiQn6n4N12ed3D9J9nPEsPIz5IzXAusIkynJ8AnLLfw6j2CGg%2F3G9morbiDrLf9EKkhJ4P3tGQmTZ2dY7BG9JEfSYKILg2zuYNyW03zN4Z7wlUcx6XIdhWfKWcQyinMbpO81hDJKNqjUp23aerL6dcB92F81fIvmUQQR3l8aFktRWyAIwDMfwX4tAm2SXuO54K4xgQ2WYdKaWMO6cD0%2BsrbqUdEdDmHyq3ZdC2D8GZMg0%2B8wuoErtmdHXW6qdGhW5ym0KcBU1xFPFoWyRBdYBZeZRIHRIVwLDfZ3RhaOluxHVTs7fv6UFCw%2B5YIAo0iF2TrIoEKQrFdLqJ83dCGsw%2Fb7n1AY6pgF%2Bxw6pla7hi8yNzL%2FW3em%2B4BytL7Two1syQkPre0EElvwsAPz6oW1vzLDiwv6DsTJfWqT6KUSXaGSefo0KbFdZd2rCbr73mUQnoavBzWcLx5Kz32YTZkoPsvsnaYN6y3DpcJr4bfhXD9%2F9Te5veVCAnrjvwfG9NU6o%2Fdklq30OKPb7w8pAtG5W2%2FjBZEx5tmGqvI2cp4YWIeKBr%2FoYmDRTPn7SrmYj&X-Amz-Signature=966080abc636614afedc0b76a501c0c491f6d32cbdab10597e28869175671afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

