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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JIHQTNW%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD3rbYKh6ji2M157xZ99cyZHP3QAhm0KhxCMqf6xpDRtAIhAJKWa9aaVOByZdewLT59V9AbC6VTyO4iZebWevBbf4UsKv8DCCYQABoMNjM3NDIzMTgzODA1IgzngrempB%2BatsYjxNMq3AN55uPMdzwIQEoHfc7f5LwY2RVmX0yL%2FbVB0yvqe9CX84oob%2F2PEvvyK4lpgxdxuMAdhQc%2F2Ezsr0ahc33nvAuFHB%2BaJwW5%2FtZhmkI%2Bqdzg1mpWFXcqQxCJiAcTDBfZeUcizoZsnCNBl%2FSZOmlBXMN8QRkm5pv3q19dwi5PbPVXz%2BiNh%2F5mAeY9u79KV0Q5hO7CeuH%2BiCq8Hgf8%2Faeqf6dPNU55SNN3j0ruPkXXeCrq%2BmjE3wyUyFFLFu3IL9LsGPjr4dOIIrEKNBmUow1YAnIzBQKyDghL1eXlwTCyj7W%2F76OOG%2BXQkZsjnlI5bkmMIB21ns%2F9yr3nRjF8PbR1e5y71mZgXUM%2FYpnvaGqp%2FMOkh8UKvg0YbHpkqR3BVag8cknDmo%2B4LB4ilN%2FQZ%2F2uj1Dj9HLe1oGKCw4K%2FTvbnnG43HvboLXq5GulCKlLdiSMGwJzrj8LhiYCqWvDIW6BzbLD0VuYfNjZ8ARndpJCRudtxZOMrTi3Wm%2BspH5mxT9CYu1QfWSl2n6OVoW8gc91sQo4Tfl%2B22EwoxP0JACNlGJKIY55DP3o%2F2H1C0JeXl1RbQ5sM45WuBTOR53ItKp6IFHnTbN%2FFbj1tknTRBJcAdOw4l7V0i1t2CzkdAJf2zCZhIXUBjqkAejm6nmZtBUe5C1t0MEz96groXIAQwaK1JbcJrYkxoE7FPllRqrKHPFdzxlYVxypv0FdSKBW10ynioWUr6gpMKKC0po3UPSChlh4I8hU86Se26kmG%2Bd68GQY48ECpefXb6mnmficHzHefWXWNxtC0auNKUuM5rLzxQl%2BBuN4DFaamdvKhqr4e52hHrpfcSPg88ait%2FQOs8Gyyltxcie0fvAD%2BUrS&X-Amz-Signature=30b71d07ac875abda2ae351c82da481d30c4cbc1337d0887176e5b87bbd2e199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

