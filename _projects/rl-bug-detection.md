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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZCN2MV%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T121855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFxo%2FwMyC7DDj2c96EKlTVeaLrFyWgHXGorz94IszhAwIgXA%2FAg7H3UD9Iy5nTHY1jeTWjHmzzWQ4usZke6waew3QqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiWPMhLfVveG5gYTSrcA756ABj7OAFB4A4O%2FSUCP8v2Qycb0o9MnGbpqBYEHKQNcfKxC%2FUIOuvxdYAHrkV5vz8ZLj6PspqmXtJpbrh%2FWJwQyigWNg1F3imb6bOXvpbi9LY4rDh4M7w6zqZeNhPuSEI%2FIvtLhbGJBev459Ot2IbGD6zFVh73d7EXTe6kNZ3AGHSU3lg71t1absibCi3SQgmYtaR2yWszEnnGc91iCUrR99oL%2B5RVyj9lSt17Bh%2FQ13riepzYadrPPKddoqeCO9TSxcCu3FFqaB0gPl3z2N82GaxGYAbf12aiVmOJOifTwcnJW27fobtPoRKfOOr1XG57%2FTWryMimZsumWnV%2F3ac6E6kAULsHbk6EzrAqVE2FZDCZQORJmKwwEyaR%2BQK8jx428KFuyYBcmlTIYGv9GsYK%2BJuREwJv2TOObL%2F6d4cGka0nsUvXNvFvh6GvqSyHKWrXQnFg0tjNk0MG6LF%2ByaSdFeGd7EnoRibZkTbXe3zbJuMQJNNJV7QHcCzXoeNX5PChk5B6h5T8vK1HTYzyCfBiTMgVN47xZuo6l5VP6JWpwmJU4y%2FI1FBgd3BP4D9mcP24VmMNV05T4PDUeHsBAHKJyy9Ix9Hz0DEI9POpVTTwcH4ihObtlzkYu48GMPLimtEGOqUBRtYVtqIpInsVHuJYKkwE5dUyhSfvZ9kYjSp1YUCGTdYkLpWdIDPnyb8TCWdCH%2BY3KPjngo%2BsP6vuTCFkwIy8D2Djg7raUUowlE%2BgNHKuyQ7mgdrl6va0wyGX4CtndOmodDdQye5aGqtZT4Udc34azSH3SYkkh7hbJhC4a70AGmudmHc9AWKdHRFTF%2FGc3P246dIy2k4UiuEq10w7oIQNRAgo1NOv&X-Amz-Signature=5986f9323d7911e54364a94138e5c8d094ea273c138ae826e7a4197b9769ecf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

