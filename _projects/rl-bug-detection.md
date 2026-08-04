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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRNY6UOF%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T205939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDjT%2FFzNqDKmnC8NKWj7%2FhENxx8L%2Fmzrumy1HItNOSw2AIgR0T8O%2FjmI1DK3gIj3rjJheDP5YoAFBS4tnJt12ZcwJUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDDzFHs94rBww7lbfYSrcA229x%2BVniptVHtLcJ1Nbc3LxYamMsKy4RB5VeHhD5YNTNKRfUPzVbbtUAmO9JfFxIhRVI%2BfRuCvDgWOwzJVSxOGl9t8zFpz8x770kCMEuQnWFamKfe8vQz1vGap71YvF5BvBJiRJSRMwwkAnq82NoRIIIFnxk8PQs076AZ%2FUvgY9%2Fz%2BERBInVbPPXiFBPx0AXZNPD71IYaSUvnOnX6LZHluiTT09oscc0dNhqlEl5Xp48y8u7J1LNBGy5C01Yptvikfyqx5MeSCq6YPk6Dj%2BYOJrm5E3lHg0xJ6unfw4IB9zN34pFDQr7GOK24TEC7DJ2gU%2FsOLWaHE6Pk6fRT4Sdy0HvmJecMJBqCCd%2F8Ih2N%2BYWR28l9VDCwmcp4Y9Rix%2Bm9AN7aUO4NA0cPSYf83rhJvfQlVAHZy0E9GdTPu1lZG6RjDYkQ1BzyLaN%2F2AZHGvaNT%2FGdYV%2BPaiEgSm1voqyBuOShfDjX1CIH4fHahtPGi5%2F6WI74dx5o%2F%2B2MCD2H5g8XLpxZ5TDTXoqi0eqw2TEck00oPWuFUvwTvRzlshZ6%2FWpZwtu40b%2FIvJPZFeaNPOTF2lsesDFmsN3EurLi77T6LS%2BO3dhhV1wG4lc4xH7v4x4sSfqzVBa4YGM%2B%2BSMMSPydMGOqUBBJ0ag5lkQwMKr4UmjEzyZ1uTKar3NCBzwl2O0KNDFJIc7ReNFrR9DO4yeOGvXV1yxrthD4l0qI6ofu2YhGZ3wLGF7JPPn%2FvgY8oC0q3NIbCyV2Znb5zrkM9pdFnKINjUCUFcqhAhGxH4VDgKUTNb6WXBf%2Bv8TC%2BsCIHRrUo3DmYfho2Ugq%2FHqQVwCUZOB%2F7gjw%2FDs5fM8%2Fzb%2BqKu%2Fw5YuB8%2FqI5f&X-Amz-Signature=760ed26e14d9210d12289a66caba79e124a4f32cb72f15a684c804df0856ea95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

