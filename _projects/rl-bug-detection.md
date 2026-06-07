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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLV6VEA%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T151631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvDYo6KgHpXfpSdIWFSZPxWIPWrKZXTxBUyyGkkTw0igIhAOBjUN5%2Fm4g8nUBDlwTV55QjEJKqq19aW1jXXKd4tgDsKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlDdn0spFIO6cCTEcq3AM7uhJkq5MgxpwgPzXlVV5Nlm6%2BZ3SnO7CD8c2HaDk4Wwa5y%2BzikBnxu4TJ46rg9xpZaUjBwPfRhbjzdQ8VPNLdDiOHg%2FZzKsrU1S59qK0UhQVllTJ5NWbkuL8ioUtImXAOOzJlkYF2zG0fAu7iLLZWNpK8xQ%2BaMbWpf65pDKmJMPaxf2fmKFINhbwcKwQAKbQgAA9J%2BqKqyZkicqhytZZTrvWau8ZPplGTpQ80L9aGa%2BHstlA6qhnMQ84sU1rgYdQEct3q8FZAl7uqBQNdK5HAzfGA9OHuSAocAeQDZXCJwJpepryGfDyH3OW250OUoaV8mLC6B8gLJHsKvxvPO%2FGog7LHAMHgqZMysLDEWunBIa1hfLPK8RfvT%2Bm%2FSmLsDTJSPPI07KMViLWr0KjnghIEUfhhqQTKSgiRUS3%2Fca0HW4RyAmnNw1KlW2Dow3q381oh%2ByvXpW%2Bt22oaQmOFAygmL%2FblirwwrmNiVXJ04TpxRFCkElFFJRl%2FSTr1S%2Fenm%2Bgf5MpnvXt1%2Fs36H8TYyKYgSZH15UxZi7dkWH7BbqSzudXslU7R75t8jNOLlJ2DQ%2BsxZh3%2F3XJnJl9lOzNjvW1kcy2RsXTkcyNy8lRpf6DrxlOGSUyx%2BD9QSBjmmTDKjZXRBjqkAd5rWcJOdPwHTTDSUe%2Fo31HlIuQK5b%2FQ9RL8%2FiW6OO5V9VNbfZklBEPYRUv4NI2Y%2FN%2B0Judk0PcPN1n0q%2FcKCAU918l0%2BxR0fTajvPrgO1d7U1CulKVuHVrBY5UhvixSxeMuwxsvDNLU8PC7%2FkmQol20%2FIIZZTiFZ0qGJfVHMXX8VfTaFSepchD%2F%2BOr31kfX7TIC1Pc9cR11bL3RGSZGqusJnXfS&X-Amz-Signature=bb81c0792132c9c5d780323688f4aed0249e39650b58bd18d16b21415e87adb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

