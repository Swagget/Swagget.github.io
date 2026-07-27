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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CONESE%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T220334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyRVVfG36M60L8IKmTrtq3M64VB62w6U9BCNKoTV3fgAiEA9qb5tnc2L59xoWhk3H1lG80uPyyyPO%2BrZff%2FThF6k9kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL6BXW%2B91y8R5PrGeircA%2BjXsynrucb7ApvCfNJu4ttitlZJGoUV9IDbF3of7xh4R6uuQOArGWZLGPhFg3uSQvxZ0StxFUPIwHL97VB2VvtG%2FJwEsbAks4qX5XKZFBJl7dBjdnsLrX2m5HrVOKuJG0JCE332SGC4IQKvkGnHE99EpWGPnZiUTqu1%2ByGwsC6tfjLsUEXJMHxZ2bTf7njL39GXIBUPvGmJZmbrOpiVvgAyHKZso1eYQKwigIOzC6pG1q1uSkI504ijqfJufph6tVxLNdB22b%2BZXk8WvKKVBEtHapX5cA8k%2By3MqoqBuNQyPl6IAiIpkg29OWuaR8%2BhbEsu07BeiabaWuI3bLIAN8Myi27jQcB7Fxg6sw2ABW0ZR%2B%2FrF2lXUjv4TTd84TLP2Q1FngIUxQaURcYk2%2BReWF1bpTf9%2Fnf7vM47DahY1%2Buim%2Fa3DkrW%2F9RopXmbZvqiSAYuxKZRv2Xuo%2Bom6BDUryMZO4N1xfN6H6ps7zeoJslkHUs97yot1WNDB0pgkUysHr0RTqBeNP4jq2x0Ujj7OEta9OVsPfica5c4Z5lH00S8m0v%2BCqvpoxXepj53rIvoBDwEvf1OzX4ItsR%2FSKY2QXQRIgmagd5X2ZHxHag7xC5JoOHbxJdqyl5i9FLiMMXtntMGOqUBhM0iMUKI1FLQPjBWz4Z2aQBopnoKfGLVBBsPTnYnfJRU3rena1lLeGxOH3xh%2FvoJ5auxOLxJY3ZOamY2VNaSQtZssLxl6cxQUpPWqeV1XwJPbURCIG5NTuHXpbn1L0QRXeAcOs5HyEmmRH7EC6gRzn8DQrkaLGZ8UFM9BRFPmS4lsOkae6wVWph0sf7notu8ifD957ERnPxpxWCArPLWpSUt56V7&X-Amz-Signature=f8b5a2f9458c0a69f95a79df75eb96f0ff8165aebfb4e8537fbdf90d2e884165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

