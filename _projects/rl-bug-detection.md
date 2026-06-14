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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSU4IRWM%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T170524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDBLWJCeeT02rH%2F7qrm8jGdTl8V1flW4hh%2F2XUDmN8bqgIhAJ3J4L34Kt4DTUb24dGFimrHnBcc05AqulG0BJ21IxpBKv8DCEYQABoMNjM3NDIzMTgzODA1IgwXVUBd7ytfjpqN4iIq3ANRuKGznRexsuyzLDIbdmJ0kyr%2FlRGOdpq%2BnYubNvUzuoaDJETxIQb%2FSjsCuS0KXeCMDpBI5VzE9hnsC99%2F8FtxdG3b7hO9%2FSFRH9iXM37rYVq7MZlKxhyWkZgbTqO1%2Fk6CxHd%2F2BqzHMw%2B1FVx4wMG5OQDvfH9ZKdMWgYgHVx9VAf5QPY%2FVMh3jdSuQXXODgs6v7muQ6%2FcZ3fxS5xQZDgOKzbtFW%2FqovO4URwdvOOcQayiJwRwFceTuno22ucudT2gT8j8Yuv0227nRId56EsQrJ6FAdZzt7m9VfL9022MN%2FaH9idyTtuhMUTBl%2BkhAEKQL2Jnz8EWqtHxT0HHyq8mPYu2%2B%2Bzo5sdwjL%2FP8Me3RBElVj9BbOIgtESvIOm46cVuKZoHOFOYZa7bndb%2BPZZ7U5CXB9gFi1RsfShtiAYxMX4k8%2BEEveo0qodAE8dbsluf2Xq1QVc5ZjDnZZ5Kxr6kaSFw6Xy1u6vxmsXo8AW8kk9dZ088KDIo2aSgXLWtrzKADCAgcLjd7UcKkZF2r2qUdZqphSPQo5Ts7eB07R8uW79aXxpTL%2B%2BtvSNnzvH0O7BIcv9MiyYrfZiKNcMGhmFmHCu%2BesAeoJHqyyfYtg4qNzlEo4ZchiJ30WT5GjDDwLrRBjqkAXumM%2BYF6bWWvkfRIxee%2BjJM7iHXsdIGnGC2Z%2Bdp6PtztIF3Z51VVxCoBb78bnFyicu%2B0vSDJdGpX%2FzqwULZnJrZ0FgpakrQopW3bKOVOMQGLK5vFAibXt31y%2BDyK2lDGqFERxTCtJN4th%2BLrPC%2FWhkKuhqofigXwo0s%2Fi4JtqWVTNjKEG%2FQoqZtWRG4WOQR6cecLnmtr%2Bk88cbipYUzX5%2B4KPK5&X-Amz-Signature=c31556bb660f1bb801e649df1f379298f4c063b0fef895ca8d3ba1649920b5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

