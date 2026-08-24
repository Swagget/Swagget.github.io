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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73AVVO4%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T093315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD3jY17s8sY5N%2F%2BkjSretwAlB%2B%2BqPtZt5nTtEOLlbqjUwIhANjSIV0qgAETygPASES596sGiVFR5Se%2FCLkaTQ6sTqzzKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGcRZHy4fJydnPMRIq3AMcEJPyZEhUg2nHVh0asYqR%2BSWzzrS0UMxS3ep84KFKbHDQ4DYDUbkUujjcB%2FCetnZFDXGD3qD9NMp3nGqTilRAQ%2FBCsFXmsj4iuIKFq13%2BF3VTFza2fXObDFDMMV9uutJzMkpbZISOh0IrJAWbMuwuswj99n9Izm5MaPEXC36NXLO1tszskaRDCu1yGjenm2Te5%2FjgSDss6gsjOjg7Sji6qW9bWcsy%2BRZSjL4T0cEt8i%2BQcfbFQ5apsp0I0x0wDz7goaq8Gl3%2Fyu%2Bd1vtznlW667Z9oC%2Fk1b9npTEwYsbzWUy9WVTYgh%2Fbqs0mEGSs4pkie3jieEbZ341xKYbR8VySDO7HhtVUIK3DRTEodG7CfkvNWM0XQAD4Z%2B9uIWebmw%2F6uCsp4tISm%2BlKn4jMM9mjXU1H22H1UWxWFKn5VzbwH2xnXJihjuMKbBmqYXRMa9bUM4sYB0u5awZ9iAWRByc%2BuLeHhM2WePAEWXa3M1hu6y%2FjxHJlWBYW%2F%2Bsp4i3mzSp081OZ4NyRIcMTAGgU3YixvWNBaxRnS8O2FKzVlDPNRPX%2BHCCp2npV0sxqRWPtUBvioCyTQ9jn4atKmoR9JXFu3kWxCIdQg5qCyp7nR%2BBcNEX7HEVYT4wQlz05oTDy5a%2FUBjqkAZSQaihWAbaXDnbg4V1l00NS0oWXJCgJq1IvH2mSju%2FHSTuA6akxrZf0RRXzM2esIs1gL3J%2BUlkWuOXWddLN9i3Lqsvi9%2FW86ujbLg2s41IVQJGAeGpaBFHUN8ViOkWoICFmgbFaEsorJ8%2B3HExl9%2BDhbTrE8l8matcwr9csUZbO%2FZEV9HCXQpyg%2BMV0fqZzqBaJ3rnb%2FHYhvckqt%2FAM%2Fl1MFlMu&X-Amz-Signature=4bf8d7bebfc4832c8e90183a7d971bca7b6862bd695c66404de92340129d903f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

