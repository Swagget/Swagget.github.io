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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUZUYO3%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T061900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9IomGtsRD1lOe6Hb8I68mAzBJsG7yBI1uxZtVLIsyPgIge10Pf8E5%2BiWtQMm5AblXKU8SY0N36DhOnfPiED9LZW8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIeUbCTlQFwMseyJzircA0zzCYxqFMb4B4VOxRZlq4su9Y8VGOnb9ZKZwZPBIqzVQyGGfXjZiOKNAOAVfbAD%2BPvz5%2BCx4RnIc1X3MlFs7mqS8W4QN1U00MJy%2FZLa3i1Hxr6HjCBeAQEP6aJMDXth%2BCBkouP2RVj4uUMHNHXXIkwdgOLYv6LZRYfFTMVLbKmOY7f26LLDYLznaf2VCGtGX%2FxZa%2BthvPKIBTNXvqbGdMS%2BcXd95CU6nB9pVX7RVDevyw9VLBHfLtSYHdR7eVg6Z%2Fb48zOIDUwMJPy9ZLlH3X%2F4eoLk%2BuyhrfNNGOBq3zDn%2BxC0G%2BFcLh56CUB3I%2Fa%2FpMR1LyONxEvXdyGkl5f5%2BpxFZB1j5pUBxEi3kJF0%2By0UUKw1tnYksEWXpfluYoh9QAvdh08FISP0CCDjNJPP8SClw5Jk64Y%2FCmH%2BxZRvpzg71S7R98Zmy9mgKgiUwKKidhU9yhZe47mnwrH9WJ%2BQJpe7pzFvMuXv70KmOOZmrcIgv%2FCSxSsMNvH8NVOFwJ73fr9Vl%2FkiJpj9ByMKi6uHXDn3rdFSRnBXjK3F4HVD%2BqbCjkRkRdEUBWcqLjw2YiLw%2FKrdE0S0fLiwj2zKUy9%2B%2Fum%2BXjGHRfoxa4BFH1M0B%2B7zxLvieAlxfamnuTDYMMThjtEGOqUBkqxZ%2BFim8FFfNna4lAIiXnH71oDOpIy9cHjibnrTj2VznFqQHOXCPVogG%2F3AjD92HhT7ChXf8qQ75RgWxsvaqWsp7uFstSyqNLR9cJ8eW7OMRShf6NuXP8fyqRrW6Y5MId5gz101tXia4FsHmLKZtAXhApo%2FOdnQ5PRMGjybNPyK591WpUXEiE7WK8HYM0n57B5a%2F26gQRGtg%2Bzszqg0cvp2%2FO%2F%2B&X-Amz-Signature=dcac42f040e326451f73c6ba132044270098414bdc33b01bda203ad3f3e9e57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

