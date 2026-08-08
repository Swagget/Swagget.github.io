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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZSVOZT%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T181905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE9unZv9fsU4HZlgyfovxDKi3GVSK0b%2F7tas%2FDn17MPgIhAPo026W9PxF8fFEYHyDqd57mNsOd0FQHxk47wPAyrhvvKv8DCHMQABoMNjM3NDIzMTgzODA1Igwbnw6GFyeC8LXh3QEq3AP9qIntxg5FljK921Ap75AzlDbunTu6G78VFfRyFX7KbJlM%2Br39eGRzPRL1iTesKCKedFQ%2Bj5EAWnPQmqy3xtoWjlje3K7%2FF7DXoOBINrzndCnyjHuVWZEqGWIY%2BpHMTB%2BFhsqP3Kj82xzsdRYdWy1twB%2BeK%2BXBG7mDQHCXYzB0zefRP%2FBplxDTFmS0vnWGpz1MQ0CSjGTz69VLKTp83Wu92v1Fk7OEZX0N5E6eoflck1%2Bamiuanlpf2hxb2bx7KmuE3ZmH007Dvt0nBwyFNrLL5S%2FdVGnX8p0tSC%2BWO1zlNap0xaE0yTbQqeDYG3GPA3XPVUlwSJZ4Qm%2FFBTgb6f0ZORU5rCdH6X1z6EfUsvirwlJygimCkcrT%2FQo0Jqlf4Z3PW7Jtc9%2Fn2wg7%2BBAntT5tY%2FC7TKn%2BnMA36yQiCAen%2B%2B4rf7BckAxNCj%2BfPBe7AF6u4y7xnA5v%2B6EGcpwIHPuW9GQS8JW3qPsndL79eZX3DFAPtytYP%2BKtBiU%2BirO4cJ4Oh9721ebHtSq41o8P4SAN651ikSSh3XXV7jALKk638sQfWnoyZuMsF9%2BaTveH4%2BvhYjSXB%2BITZwYaQ5cz8HBB9SrOO36KI9sBGp4qTUJvNHF90CTtWADIrMEhNDDO1N3TBjqkASRe3h4sCD66gK33HXx8xp6BLAHla3A2H8vgkHiPwXSLeJLsCV6%2BvPCshBZx%2B0uzG2EsarHAXeqi3bUWHaQjBoP8D3DDXk5dLbGMm%2B99tzf9pGSI3tkd%2BGyoYphw95GJ%2FC6GOD%2FE0wZcaA7DlzOlTj6SGwpRYFve17L%2Fq%2FuFQeo7zTGvBQ5fisAPqG6nBiHVlUyJmF%2BDkawivYRcXnggCqwnefTs&X-Amz-Signature=e3aec37790d42d0dd1a46172fc16bff54f506953e2a4bcd33a6680379e0e9bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

