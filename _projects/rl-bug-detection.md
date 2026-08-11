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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVUQPSC%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T094643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByo8IcKHyLojffPfQOlE5KxorZim%2BlIGqABc1dL%2BrW9AiA9JR8RJvTjDgSLJ1l%2FnYKczUffBEfUvOyzvkmJm7VtpCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ6UfngB7mkeyvcjgKtwD2GIohGZN2jq3NkWRxPonjG3TZPIgpDBKRK5ptEuQbD6Rq5v4o5nEqnVpGXGbUyc1W4WyVqRhCyVpAv%2FnBr8o%2B%2FIbvo2%2FdfsuhpaF2JlaOOkxyP%2FBf%2BvrfCrmch7VYAHxBhFbXYaDQUnzKnPQdYFJQcmwb23XwFtgcEHVwzPima%2BsJUHjirgLFp0g3xoxkyq3EtJE60D4yBf7uyXcyT%2FfQbqWqq6LQlLcqZ5I7tLhuzelAZsc8Mt47TaaJHHclBeybyOHpTgWKwi%2Bm7o1IiHjDt6b1NYbwvLpFW3dX6kueyRnAqpaiw5og4NJ5aTZdYYV1KIF6KIWl6XjkH5hwtOYfFbd7mMoTAJmP8z2c1o9eR3rbygzXVZATdVTQvJTrcAJsVezL73QE6TS%2BIsanxju0FwcGRp4n2K1eNNdtN0Xw%2FX7B62FaWsD8BtOhNRZo%2FZkpKnWcM2FCzchnsV%2FEcTJnSSgksm6qCEcvMXueqVudpz9doGz3mdvdUL%2Fms3mObOj4eAMpDZvai0KszxfUmzKiyoF6pKTXV4uY349f13GDz5%2B%2FpLI1XWR6tsWMiM2q3Kz%2FY6CPKVapNZdrWjMf2Fz%2FFE0tGtFHFgWsPhtzZuZUG7t%2FjjB%2F6%2B7YG2dvmYw0Mrr0wY6pgGj87EBfHba7%2Fy8FJIgoiLfawd%2FRLRSJAUYLj5BBkjyj8ju%2BPqHghj0OTrXwyEGhNHDZKHT3anoKXwPJ35IluWW1QtyWhilhyIss3BJ8H%2FiJtMT86BIgSfWSyykU%2FYTScCCgDbe1%2FC5zx9rMKRIiwp5hVJWT9pZOHx8bOtYtc0eTmrDXWxyPyssgs4kWrDIscAo6D4bvMINtzBXwGIy1pX48L36Psbq&X-Amz-Signature=882dbc5d00fa667b3d9b6af170a1fa2a811964d3cab6dc83b329e20c5d8feabc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

