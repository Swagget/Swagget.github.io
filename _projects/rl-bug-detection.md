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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYRK767N%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T145110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfq9Lcy%2FOBbYZH0uRvyUImwW0cB%2FAzna6D00vaV4PzZQIhALDrjtXJ%2FZ0zKXwtJbcd4OoVoX%2FaKAsXZn%2FI1csFAtdYKv8DCG4QABoMNjM3NDIzMTgzODA1IgzdN7YO11fDPMyimZIq3AMMbgiwx0jNAeCCIX1krxVVr99o%2BOcmJjoywjvcT8eo5KQCsiHXV8iCMr0%2BbhAACCR8302CD9j9vrP3p2WAEatZEVVUbxSESNHzb3qkekLoMF9EaXPhIydj6A%2B7jOl5a1yz5P7i2ehdPDmPP95N1AbVTfyrfOmNgo39j0ranMrS5cs4apzMST78lrk7gmQqyLzLG8pyJATMoiDqh96lBBjTe8yjMylJtbMuRRDxaGa084EVOnjxosGINoAv6wctcf9Y5pE9tDoWIQJyap43g1xyw4pN3Og5xtcQsDce%2BucuIoOgp32wcWMB1datOztPwdXIYAwJfrPn%2FW4kXVHb%2FLBY7%2F1AmhI5aVwcVh5d62RTxxabAzCT%2Bl68%2FP2KbyN%2BryxopMJCRa5IZFQi3CP9EO4Em%2FYscDBYlD2TBXpA2HbRZWuh4b4OT1YoDl6YRz4zdg2UYnlmRc7WTAc3IUD3RzILDKSnLrZCkoTwv4Ao6xnUmW9GZjLNhPbq5PJ2j2DLS%2FdGrJzfsnxjIP66AZ8cB0BNEd9K7kTKf4TdOH7FI5uWgoAkY6LCdZtSZI2Ri8%2FMmOZ4X0a%2FTUhSX09TNKozLkG378HzNX98HevOTFYG8tnwxKFtEIFfPbdzqhL3bjCVq4XVBjqkARTlYkndAnSUkMlzHN1ZS%2BxHWuTMhuYtkvHFtmtcJCwphrFL404yAyPTEoaQezwODDDExSD1nKPq0yrqvXJxZmx%2F64pq5kMD26PiqNeazVlNY2pGZ8qXs8pUSPyKwYF1Y16EDQ1%2Bxhl6xFEdWQvSiIZMbE2Pxy9dUpnm65aO85HcCISn%2F5YtIZF9GX2YR6ySHhnRruLqfBxpoawDd5IzFzuqAMej&X-Amz-Signature=4aa72cde91887cee35220d41074d01ed61ab6b580190673ec0cc1f045c91809b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

