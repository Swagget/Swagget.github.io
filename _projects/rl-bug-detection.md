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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FQK6L53%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T184902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhpZqsC4nL3HeDWL7AWKk4IIEsP7PY0GLY652tFzyL4AIhANBcfXimd7i4cgSKmzVMRHwbYsfPPe2tUnrgg0Snjkv1Kv8DCGIQABoMNjM3NDIzMTgzODA1Igxx47QNr0d29wbIwcgq3ANwEVxfz3YYhkmWusTAMbVdvb7iZZ0b6qMVUU7KJ1hfwWPuwkHyMC0sZ1bm8W1p0U68EBjvEe%2BJK%2FLzqbgp6RlR0IIxLRqpv39y3VT3dcfot2hJLy%2BU0zBX%2FQg%2Fve4awVuUk7dAhj62h8Xx3KRAcb9NKzhnfEJgb%2BmuHO2JATjYdzyazGQOU05D%2FRPbx7s9h8RVRebpCXStv3g68gaY6L5O8XDTOBVJUY4j8njE2uWACSJN9IywpMj%2FgsI8yGatmMfhWFv9XF9yZ3eP8mszgOCr9w%2BvjYNQtFUBGNKLg7YawnvQdBIkRCfds4L3pO8IoUB7JRXJkSTWiiN8P7osjR1XjSgAQnuAi3MGua0OuF16%2FNxn9lGowu4DnBuhMGTyGZAcuTXuJC3Y2sGxzDeMIfglV%2F%2F0Rkj%2FsFocN6CKx7qw0SdYwOzAWG%2Fvb2FKVNqyf8W6ZWii3sxlOb1TXsA50YOYX%2BnKSW5xgxcIDM6CIKH39jj5bdPW6Hed3XLylLd5UwpQFNdUJshr%2BeoVaWdCqtYY4UmaV7SaeSMqA9rmDZspSIYbWa9U9OnAdQnIwWTeNWUh3cMyaMXSe8EU4ajTSvfgaTA5wJLvQnA4ODQDLaaX3vmEUil%2FrQmmY%2B5mADCoyenSBjqkAVC1HJwN9VqrxUVBn8jYieH2cxhanEXzaGuOEObiYdnvpvtIRAj6JMSbOlRMb9M4AFLP8lKjUked%2BPHSpdaI5gHV%2B9IuMAhS5afns7rM7nScgKUourQYF8hmVk27KSflcoN6JnvvgnXV6KYACQgGs9%2FebenoObtcQYrtf%2FHQtIEE9j8FBfboo%2Bcu0J2fxK7kWUWHXMIYYhShh2Same7UHAdDRL8X&X-Amz-Signature=9caefc1712922061f166e51f580c63e31d471cc8949b35392948dbdf28960263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

