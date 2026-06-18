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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSYM23WD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T175156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZycCvT2ZoUWz%2F2FlUHwQklloNqwhfOztHzYWCan2kTAiAXBxr6MHZAFi2foybh%2FDAe6YfC6thqwo8Zrs9hwgSblCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuaZGQEWnkAtqcHnrKtwDn1Zp5TiuTT3nsbUXs8PUS9PzvDYNEg5BXM0RWpvrUpb5R%2Fv2qX2swBJRIuce0rHIwBgycxeYrri69UKQ%2FiDgo60nmKsWbXC2e%2BvsJstgdEbZSjtCSaJhw2feSzEZgFXwiRI5WG%2Br2dlj0UQ2mwCBibXLxaOOXVkQH8zb5wEWBaMczEnN5OfIoMh5qJ6J%2BOJDW5Y%2FxFalwfuaLHFDl3x1eptQgqVs6D2QLGsrb3AI3jwOQ8G%2FFYdF5oT%2F7PPpb6rekc%2FmEXV5ll3sVJSKEQu6JqooFfgo3IwEvD8lZW8zu9Us1pWKn402QdZXR%2F6UdZzQmIzJzqVXYa46kQ%2FvpA0tfcAE3JKpz5xquoDfbaTQX0VtJAUXVUK1g8WfClooa59VKTFC2398tzCNpCOpPRgEquXKo6oqtXPCdmEfMIKbeG7xCdIEvUs1pgDie9Jli%2F8B2%2F%2BgoTQnE7%2BUwcqG91ayB8z%2Bts7lGqitdeufkp4Vwlo0qtzu93K8oKRU94msTDnuiex%2FuetklAgJLFVA4woVcXb7jP1OyKmWFoViA7wEFHldfTHcrYLb7L55LznMk3tAp92CUiX07mqEy0OeRQ5q4A5fchujCq5SRu4XZtfrVVhod2tfK8KR5D81Nbkw3s7Q0QY6pgFZt8eX9FCiWBiZ9UpV%2BiDIzQ3FNrlvscGGqS1Nwut2z2qcceSL3t3J021%2FcZk1g9jvQsuPrq2P6nZqo8PygYmAKlkHJXIsQAzYMamSmgcFrqrhoJB6P%2B4tD%2FXxcL8bjbESCu%2FTIuOv0trTp0QOdv0n4wp3u0D0MRERoZe4DtBAFeq4pnKNYpF0RhUWWMjfrFdGnYyEvigfL5piKSkEbyJFm7Hk8xuS&X-Amz-Signature=a4e3f5a307e11f638d8f39611963efff754d1c930d6958443d3794801d145179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

