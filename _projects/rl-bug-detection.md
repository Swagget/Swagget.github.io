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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DTQ664%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQChSt1cCFDjxDVQGZ3eFt%2BLLYQqB6JbnIY80Fd%2Fys85pAIhAP0ajiat1ipKab2Iuuw%2B2ZIoD5675sFxMc2FeaoxRC0wKv8DCEUQABoMNjM3NDIzMTgzODA1IgxnXyQYVl4lrDc7u2Mq3ANRjFvdORDwTV37y8vZoL7QcoQjAbIILJukGCibDVgakb2ECnYnwS6FRh0NRhLEjf217yHOIiTYpg0%2B2PtZP1lWnBPI3hKNlzDhBgkid7BXpirRI0Jwe7CtKoFavuRDRkWDH5xm4Iq4kY4ntJDO6OFwX%2F4DQjWo9OXVpLUAsjoeUsiO13XW5jeMjU%2FgbtDs1fqY1xDxNhsGNLgzT5II7ZAOk7iMoy8IQtDgbLpX8LY%2FxG8ZNDHsdGkuj3EgUsa92nxpTvyBycUfJ1bz9GPTsezTV%2Fvd51r0sOsz149k5kSQ6exOIrNF2%2F3UpruQNYqTqaevcWwjVZu%2F6Clcy1XGvzWu0ppMTop0LDV0qJ30Hnx81a3YA4WEcmMHjTyqp9PAXDEl75X6RDOiN0gB%2BO1cDIme2eEAKkKBsxzCcKjpcufX3bJ%2BfYPjtkvG93JeUoE9HCM0FpnHiEF5Qoh1UKEcopr%2FxDeFLuwopzrbTTK1cXInS3jPMrCBJBn38XO%2FyWDNfANos2ZeIpWuXhFHeKf7NelKi7BHFvEezTFWgRhTVeRa5f3IsfPBmarbaU%2FoLXzEcwXvVggH4wH6xZk%2FEErMQW1jMvNewRQjHBHb53IWR2Ia7Hvre9BCGn4new9oPDCr94vUBjqkASnmgoZjuXi9u0JSjAe7%2BgaQDsJIiFWKOu1To3Lfjw3ziibzU4uem9iAmwvmS86f44u6qbDsQcKqvTyOhNGhWrAhQDHdC0QnvYqHBJlR55BNp0OQ7XTw7j5hav1oaLMoxx9i%2FV1VsT2x%2FdbeVTXHapBp0oePoz4bC3rj7lIgi1F8frD7VbWbD0Hl3WfIT3lbT%2FS0ZiJmvsIHX92yh7vZnkOTVHtf&X-Amz-Signature=102389af965d9dbb913831fdb21db2d485e52f77bf3602eb5789b02302c29437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

