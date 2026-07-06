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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXG3WT5%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T061519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHoYveViJQ2ZllNKv7L7fCQPG2xs2ruIWaFVIXmyvKXAiEAiW3pvmr6b0eWJ6cXLuNjDoCgl2nTBjks8nWD7KbY2w4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDMWj07zKp8FqW%2BTmTircA1dBw9GMGI9NDjIzq%2B8aR44HGXIVyOcaSsXR9zVibyfA05RtDV49V7mQn8SiVhqAyZ6eDFKqAV8j%2FlzdMofQyZuff8bPXPVoxnqB6HxtZqY6umvF46uI2Qk3ecdYLyS%2BVFGWjRvFz%2F9fceSoqDfWIPcd8phQERl2jcBC83q5XoY7AiufAkpL%2FqbY4gtTpGsyNGO9LSaaDNQIxV1aEZoYxerDv3YybvTe3vyZRVpldEFVT7NjH2oCOfO%2BVpXM59HD8fILRxXoJ%2BrH%2BsLUUtzsWVPe0EDGv%2BQZspnkIFDGo6IPX4tYUaYw1wMRdve4bWQFiBsrlftCDW8UpQh6wVjOIn%2BxmaUIaei929bjliGKqc7qV84hJCWC1xjontHvDldcMUbzApqcxGqFS0fouNBy9WBzCgIcx6QsomQ%2FXgpTGq894%2Fgz%2BfffP%2FRkwfGE8Y1xfokXeCAS4RGYVc8PXTD6TuR6TTnJgB7t96l30rH6qwr5Slb6eqlOfWc5CTmVhwuXNobFla%2BIKGCCD04vGKqWYdo8BfIiEAaYjC6IjGhYS530R5Ti%2Fmg7Qoiaq1DxLfDTkUkfqLotORj0E14eFPXHhurc3VrnJlx4JlRd4hMNR%2FNuJGDWvO29VlKsx8WKMMTprNIGOqUBUqc4%2BjHcyx%2Fo1%2BUnSRGNSSgxPvo7ByebcJL7w4wvwWxWdYNx5hh1QuE63pbw6%2FDUafghpIkdVdIvKMrkq1y%2FtQm5IqApXldU6F%2F2uVD1%2Fs3Was9u4joxpzoBhpt6C6xC6yDjPGH9ysHmNXTZpPzFkQmRhT4uCwLJg6m%2Fg9%2F%2F7C%2FYSA500h61bw%2BGJNbnVla5Fu9LRoGKwKD6yKtZ8ygFfz4jOJ%2FJ&X-Amz-Signature=e6c6f33765ab5ba8bd7c033e735b24234373e565caf77d255d255fe388ff1f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

