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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FBZSW7%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T235037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqSu6iaUC6XDtqCA0qoOEyuVdCksoAJxntjT1ODFOBVAIhALFFpgunEYpWDNy03j0827Xd68CUk6u8mD%2BPS7QlpIyBKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi%2FkE%2BcBDgv9cJUwkq3ANsof3rU8Zk4cAP982owpWL5g3Sk2CYgxR6M%2BQ5OnsbrQNRyerSWTMCgcYQNaWJlp%2FvyDMHcUmP2SJsYrT64pUvrLGFy%2F7Rs6vJhF58%2BP8EJbxkuh%2BOXgeZdgYv6nmwU2rPrW2uYcOuyOZsLp8qTgxteqbBuJao9wyixOGsZTTHsBWdQRRijz2u5WCAOYqbJqarA%2BqNhaxSOHIZLGx3ygGT1gfdzip6f83UAxCyRF%2BeZaUbyoi03CGH0B2tLhGsklB6XLtN6aN5S3Cj6Z4vjq4zXmrewAGdUuzQJG07IU9EgpLRy2h4fMb1uM%2F4Tx5fXQ9XewqeZK8QkvntZMUA0JRx%2F084h0W5GWp1lbFwFrhUck%2FBDnMn%2F1ychdiC%2Bj6kCb34dGZWPWDbORtJamQkcadLYAW6b%2Fa%2F6oMoUikENr3QSWvD196gZ4DXOytdCndzqQzRjka%2BzS6oMfVEpYVL3chLLfSsFPYpbgosX4Af9zrdiI07fArIqhbwxq2S9113gyfw1K%2BQJhTk6KswArqXw2bM5Vk7pS5KZcNpu8oB1SqwvnazuoAK2KokhWm8sFvE7CLjBgzUnNDkzcGOoqryGwqTO9S%2FJpHzCnZ0rrRIUN1%2FVci4CVffAIGZHO08%2BDCew6%2FTBjqkAVqx%2Bxc8%2FjXy62Yx4X9u7QzPJC62ZrcnBlY9vt%2BLwuUANHPP9ihLp0VMgIXgHnrGRjfgNRLsjrm95y%2BBEEPq18AbzeSUPVlA3spxCQd9FFTxeROpBe4cO3f3g6Yz31p9R8oOlouAvGqjmGXe2DPH9eFP%2Ber43VrCeaz2DaqEi2bsMJao1mXgaJ8z8R5LxMhVpn0bMBXE2yZh%2FI5Yyy9UuVuhqfbX&X-Amz-Signature=80a7c7b6153df839e64d35f21f3f9df802a9d9127da85608f07e487b4750c1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

