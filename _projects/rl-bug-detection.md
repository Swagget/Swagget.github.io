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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHIE7YY%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T073556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi9c4z1rJRB8LttlNe2blvoJdI%2FdaPwSD6nZASfLu2IAIhAIGMsz8FixMSdQPMEF5L%2BJMmNd1KR0I6JrpCepXLq7j5Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwyvJhsdFfSHJIGkncq3AMo6BZV7b%2BczrIPMsLgpMLjzVK1QAX0ZtWlEfQ7VGEgPwE01XEC4YEOx5EA71fjXueqacRRSzFdUlw9MfzC81G3DOtj3V00e0GkVWXMBy71%2BwbxYTmvWFE%2FjaI2P4L699x9G0zPYkQ4evTgp%2FD8XuuY9HXl%2FS9i%2B9pAl6KY7XRsl6WOocT5hmif2YallW7suBvoOOH4%2FNHFb00v7xv5HuKo7plsaEmWP2MDMPU2Yxupd9EZrLW%2Bu8QHghylpjcLDgerN2dmAkKFBMlDMjZqsVyKSar1N%2F17C7Pj2m6z9pBtcLQ7LXsljH%2BKrzpl1PJFbM7WtDZWtmhovcly7ww6zWKu3rk90155I%2F%2F6LUllslSfAgZtm89gXSzWQHH4fDuS%2FQO4pclSuhbqgvelCqv6Ti31xFxBYk%2FjgZDyljUavICm6ZVpfExM92qysAqTNs60Cv4T9bLi9iCoZO25IQnOWgrlPnCjOWu%2B6O88NGUWo0AC0cMKOPglbNOtOtBEdnQ2SPy7R5vj6YUWBHj8HVrAhUcdXt9kI%2BrQ6faXsTXQuKh%2BRxsCui6kO%2BhIxcx6%2BVmtltEh%2BQo1%2FNBVaMSJDZMZIOWSUr2%2BbwXDOhU8Ot3VuqA1jsbO1%2FcHFMzwmsJPTjCSxKXTBjqkAZrXGjgZ0GSxPkyhBXRjTRXeVUzH1%2F%2Fr0bOPICn5MBVvmd3h3OoXNkVgYZBEt6u0PreZQQXZbItmc8eaxZ7qEgrukc%2BkFjr03MJ%2FqzLs6M6NXJmSC5cyBPbW8dXOlZ%2FAgNpGG%2FsoYQuJkH8czffOu9%2F86aIccrxhomraDsyEE%2F9KShT1HMNh%2F%2FUslw3xNyU4Lg6%2BHNNPndCc2pBiibpZSIqehaYw&X-Amz-Signature=ecb7cd7ab20547020dc3786b6f318e46da65be257a1484264865817e94adcb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

