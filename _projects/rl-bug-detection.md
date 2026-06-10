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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DODNZU%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T065533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHYO9yFOD%2BB3VKDQRZ4mmY%2Ff8%2FkMzL6GX9qPO3BYTjD0AiB4mvhncRZuWPoHuqQjBAeraf%2F1WwpiTe%2B5mkNod9r2ZCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs%2BtpapQR%2BP56x7SxKtwD2F8PVJn2W4yWXoq6h0%2B3G8FNkR7wd6uVPmOOcj13%2FoRpR%2FD85CsVZykHTHw7SuSrpawHwUlMvxmm4wukizwcyzNILl7qamg3IPo%2BOij7v2OMa1Yoayc1VrAN5BxYnjtoBBAOlI%2BvuP2eGoFB25qzE4KWqF3p5DLQPeGEu4zMk5ymkDJDwj7Rv%2FF7xAC76Y0I7XqNfKueLLGdOnE9%2FPEHmROfSwmUCuj%2B8fX9UcarjYU9str9e6tmsPmKhzorxZ%2B6qPjo6JaZ%2Fq%2FHMlEvuPI339EwFlKkh%2BK6yxoy6oflQRU1TxSKW6b2Km%2BlRDAnEKj2Nbk2qR8BKsVh2nP9AE62x%2BD%2Bp%2F5Vg%2Bw3jlIWtR4lfFMgC2fTlu%2FBwH6KjE9HELVaGCx3RA9EAEg0NQd9IlKwBY9dWHz2mh9yF2WwUwArZBv4owu%2BVbiZs%2B2N0ZdkqEb5eXDRHh3N5XYf4ff5B21DkOMQ1l%2BA0uQtakpkB3Y9BlBJhyoKUwDVUiTNPEd%2Fdu7KeiDu5ViSLMERA33tqIYkkvhGeYuAKZf8N9AxxdkwwuOJAOCkXv0jFRL6ESV1fa2O%2F71JhS8dDDFwCpvMZ46enImMESI6JZj%2Byrtw9wZHcAj5AoTY3Mhgmfj%2FHAowov2j0QY6pgHRjS5bOcbriRgFQOpMW5ULdyMElY8kLKqzufliO0iQLxfOXT%2FePuBTZslImosfyxXnjff1mVBlucJkvg2Pb9GP%2BCecAQnFABI12CBXWurBARnwce4kr%2BOtQ6uU0stUeW73jkrev8I5nq2DoLagaseCi6iBNIC3xTnryUSjy6U3Rbi9WrxOOwabKdr215qndyIWEkPpWexHAvHQZ2FKmiOmPgzwxz14&X-Amz-Signature=53c811ff7bc66b09e4cd360a151c6c03b318b9d6a81437812a3519496e41499c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

