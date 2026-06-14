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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7MV6VA%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T021316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCr5qXQZVBhasNpFqdDY%2Fz1CjFsGHwvqKaPegE9oEPMZgIhAP4ODFl43LKvHEANnbRmNScpagWNQYL9Y6hAdo57qyPlKv8DCDoQABoMNjM3NDIzMTgzODA1IgypM2xB3tyjlrfBdmYq3ANx1AmUvjC19piWQB5Slz4k9cb0iLj0a85l3AZN6FxDUK0TUhLk2v08zIbzsqoYd3CW0EvZswtYZSCpmQ9r4uWVg9PFPPlchaBIQAXdJi2AHLbd%2BkBFEt5HVLjeIM%2FsCL5NiVUf35uOuswovIuvo%2FfsbwDFOXq0%2FmeM2pxbIy%2FOaOTbWpF8HKc8jzvea8LRBUaGDt1SLXcLwH7O0Ze8qVwN9%2FvrVFwT0dTDDM%2Bhpt7WROIu4iAFeRYWT1fklXTd3qg1TqUhPnI6BUNb5HSo%2FUV8moheBvY5P%2FaKiOiQLtPwX8goZEM8hPGKrOcDBGxxTS21GAPu1nMliQqonwMYn7njc7NvySJIsqdWFujHMzKj4sYxV6DooocNNBqXwI8oDcjfpkHecevMUOcnwX5d7MghX33FXOPtA6RTHDcR5xqNX9Sl1zKXHyqGHYa7uLCRt6TcRdAg8jeSPNcSoMpraYICelIiDHT0h7HxBLjeyGoViNTowIHIMeIDazurB6eAnavaaUVQYNdQ835%2FWEiTrKYlcuqj6bkbSr5HVfjr%2F%2FroVU2D7He%2Fsxp28xjgzG9HrWFO0W3Cn5gNif33H%2F7fO1Uq2NMBXBwUWGef%2BQF7xZb1ygcChNK0U4M4KVLetzCI%2F7fRBjqkASUgJSPveHEVo7q37qabAPPXQOeSHfM9zqRpOfdQJ1hS74q3MrGREO51hIxV5wyaqi8%2F5drwZvcuiHt0SDf%2Fn5KSRsOP8DLxDKpo5Rv%2BlJ%2FN3ugIo8vBdE%2B14v0H%2BkKgJN7NIxemoDN4kBaPtewDyjjx7TfOMXJ%2BAxHnXDPG4eFqjKV2eVAW0E%2FTXp%2B7mN0U2P1W3y8FJaMGsoso1V8Bgwb4O5O3&X-Amz-Signature=082f4b68d6f6d0a51b3bb0ca5aa43a1b33f6268e5f145ab9eab91773c4f07a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

