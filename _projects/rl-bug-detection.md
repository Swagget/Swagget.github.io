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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZXTBNJ%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T000655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BGWc%2B9c%2B4kI50HK6WwE6I6Jk8CszqoG6sY4rfXKaYHAIhAOZGkW4uGu5LQrqdxqGLZc98kSYUoh2wSBUpW0bQ1%2FUWKv8DCH8QABoMNjM3NDIzMTgzODA1IgwWaGutPFlktnX9oaIq3AN%2BEFxwrMkndVOKecrXEmbDEkKsQoOQ0eBl87SPRTVbbnQy8LSw5dHvXsfy%2Bdnk8OTY0yJpryCBZRJz6KQwGSvW6ppWzIgT1zatEK7BW79%2FmwUlJ6qdPrKh1ry2Qs2SNloHNfImyLF3g%2BiX8%2FqLun2fmaMaMAD%2FKmAuhS%2BwDEFLM5sXuue1IQtW4QmTg5VvV5l2Nw6i5geiiXyvGIakUurDs3nNbEb9kWzi23EKwNmPjCdoevNDsVVzp9LRiJpMNufrfy9yulqHc9PV9y8qXpJwGGV60MnM9YqvD49%2Fx5xJ%2Fef5pkg6MuRXSWpD6%2Bqjuog7CllbvmLWqFGItmP3%2B%2BkaWuOOyrf%2FltD6lyU7SMVmPldSB5qevKIG7W7RSVPoammztPJfsWBX3LuL0GYKdNRgWRDiO9zpl90c7M9pZLxyIfCZOSD%2Bwce%2FQjq8vYcQzh%2BeO%2F5IkSFsjj5fCDzzWpvWFGSUCYd2bCbtjQlOFU4ZNkBAX8VfC3Oc1%2FsQpvpmFEZNvpipvzIVHabqzzHKFKsZ%2B7bbUSzh3IfVfAqZtpW5H0imwIJEZ2x6URv1edFB%2BpbG3zc9alW9HVY2p4RKV%2BqOjrHpAnZLeiX4T6rpNGeSNlS8IQMZToL9AR5AIzCWmMfRBjqkAR1ZocoC%2F1gXygx1ACtIX11XDJDp8178%2F5XwLSAkKRc7DPyIGew4Gg7kG158PCMrWldfQVjj%2FQ6pofuac1SYfhOY10dNbl3AMAVu6m8Ym4i%2FBvre4MUldDCimEFk6z6k9Am7gGI5272TAX%2BwqUjHPQkgXqqyG94uoCasSqqI%2FAwO9YOIq12DddhUIgJWtkq9t%2BXkuxUJuIeOdXcGjjz2BoxMn%2FMo&X-Amz-Signature=867db5fe58d31f01a09ae75c9a03dcbc8dad437007089c648d00f01f5d76f95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

