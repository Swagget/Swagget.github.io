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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ6BC2ZU%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T092433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyoIHbQglJeZD3sC3%2BNVESiKOVM551AVFvTHobQCiT6QIhALpN18K%2Fg11aNjcQ0eW3TixmB77VZpBwgdndcu%2FUpCUUKv8DCGoQABoMNjM3NDIzMTgzODA1IgzglmigLd2w%2FqftjJAq3AOjzxCMIIg0EHy9Y%2F5IwxjbdiYmx6tllYmgq52KyQ7ND4ZI7H5eoNGsPRvMOnE966FQCHEDXs6EG02hZD8vR%2BEvq%2Bgr%2BUQIwOQ7nFUsJbm96urkWFNS9%2FLCeUKDCG3cTg7o9rEfPrMZz7YEzQuWWiDdzFxU161f5XC4Rt579UicOwJ%2B53a0QQkOHNHfsZ9%2F1%2BoxYjdrYh0FgtysOwNG0Df1hAhojXLFYU1cDwhJ6FCK5disW%2BTv89B%2B1ZuhWu32QGvhkBmDe%2BvqdYn8zPgulbvRBkmPNMpu7441U3oyjMCxgwmOBufMEgKSQsSZ%2BIFf6STOyZI8cdSRkbJASThcnSSWnzNA37FJbm3JY5RaHgKEwzlXr2CRmq8EqJBeSs5oyHTGTDmD2MMhmtP2M4ukhgUQhfHi1TRsNMnrfULIFvWRev9eyECOIqM4acgwCbs%2BiSx5YmV34IuuzGvZ0g%2FfWbLjjN0d%2FJoBaORAKTSuIWeIY6CyAKtr3JkpRrvfuMF8eGi08LivGOtpmFfSwQenuMSZEBpmEQTs2cFeQwpMn3A7aWC16CDGO8aA1Lhbfg8AG8%2BrCAZ2lth1%2FSyRRsIZeAYMgBLHjmdhcUgRulj2f9ApBblNQ%2BnyXdJ1bncBxjC51NvTBjqkAZgaGOIqeIm2Ozoth30GFEgnU38Z2iVp5tTcoQeGoNj1BVGa0bH%2FmhATLKsjljBb6sslXGtGekBdCc9cLPP3zHvJmhnWsFt0X1nUdeqb%2Buw8jG3U79b%2FrmUMUMPeMmqRyQJCTwtbab0Zjnum0DNd24sS3%2BiKGl7FcDfNUfzJ1jmaMFgQYu0gIMNhM4GFEsrYEAege4uSn044gnntOSbspZ6QBtN3&X-Amz-Signature=7576368193fc1dd08fd51ab42bcbbf26cd4bb79eb37ceddb130800a7b86367cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

