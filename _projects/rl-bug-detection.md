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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ABJ2WK%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T165417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDexUYkSqqVzVobBwApxCZnKoknqI4OW34X3UY6xE%2F6fQIgP8oO1pVsNPrGUZ0UO32dMdr8md9gJPUbfR%2BpBYhJIZUqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdk75GMUhX9gAxZgCrcA%2Fbw4PAzoe5rkE6HeJcNw98Wet3MLcjFsM2lPyMHO7P%2BsJBfTGBFIRTo1cuMrv8C9gQMYpX8aS%2FPHQXf9S8tQAW%2F0AIHmguueYc62D506KjimWGALHSpDz%2FRc5hIbeD%2FQy1nrpKLNfMhEfqg1pWE9q%2BT8SlUlC4iaFroOoECOkpRyXWgfX3L5wJ9JG%2Fxv%2FTnfa8lkOtkcqp3w8laEVZza7TV95mGlKi9TlLv3IpvGFBPMYs1rCN7g7XMT63TPuFGe6GG2ZxHLsAYf8gByxuBBt64%2B2I%2BigZaMFNxToLw6OXOcEkdCYb6Jp2zZG9LhsTYowYpj6IuNIp9v%2BhAAU4ttev7TNOaYRf4YD%2FXMbhEVmEQu7SfBzG1wxKAugSA%2BUQvf9v6uVRcUInUqqp321YTDOZfwHZGm7Ejsnnz0k3acs%2BOZDt5YVh5t7cgxkpPR9GLUuV6UJNmubjDGDdqCCkN42XZhAV%2F%2BZIecIlhuE%2BnGNvNj%2B9bbfPcVeONzYcGvVt2YMVI50ooVDeLhObXW%2FmCg8u7ob59n8VNYYXOJqlOdXS92wl%2BM10Qe0ac2%2BQMh3Tj5qLS9hcXgKb4mqGxe3Xe24DTsfN4nEaGs3yYEoK4soIRn3%2BwR7hN0XS%2BVCoqMN3h69AGOqUBNl22JvDej4hLHnuy8u6PU6AEsYsjmCOF6ER%2BW%2BJ1XICxkv5Yo%2BZdUUCJtSLeGZco4sRWIeInUcoWq5dI5uFOdxZ1%2BHQgIUrtIedPB%2Bht5i6xVQTnFYE%2BfkasSGOq9P3vrsxsmjS8z8F0GEXWJVUdI%2B2G1ASunJlNwUCyW4RnZ9TF55BbeM%2FlhgWc6M4%2FQaAcKQXJZHd%2FhMDAErtiC8DU3v6IH5Uo&X-Amz-Signature=b497f12ff708ed83a86ed6017c1de9db0513ff73c51903e95560b8595c193e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

