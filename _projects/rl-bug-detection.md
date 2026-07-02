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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKQWNLD%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T065803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCVyduse1XTQIRFxCz%2Fb6qkaknsr2g3h0XfWw1PL2JbFQIgQJfisHBLEX9IUKCdndUPjxU9Q1IvuneNKdDKktv67SEqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1E2Bj4OyAxSqE0QSrcA3apkpDiiknR%2FbCgc93MU73npKRdLwph%2FpaZSjXOutUB63YK%2FdQRAMrC69LeiiURQ7JAV1Eo9f6xQvxxhmn5t6gsUAKayJpx8yX912IZ%2Brc0Dbw2fqVM9FjWd58tfw5nmrSuVValHalfsSScHXgMZfUTOTwAX%2BBk9Mp3a49v9n2udDPpA6WxJyd0pOOKW9oK8p702Wfqn9krfNAaCExLLi5cXEomg9FbNw0XmXXWAd7oVnMRmUAV8JJwGfKwnqeQbefJTJqm4BlJLKKLSo0H3f23kUvFNycfsTZbMfUOkjnrq61X%2Fd7f0OTryL0bGy5ootRXoVjVHDs%2FU2u%2FP4WDLd4oNw4W8Gggo0jVqMonTBfwUjDc9wnEOTYqeNBqFo1jOExPHhuqZ0gho5KyFUeE7Pp6DHxyBauZyZOUvBcTWihRjNNiXO%2FAR99n3WJPe%2FxRWtIJHTe0F5igS27LfcX1ARCPXZ3i3PGu8xHgUlY0%2F3WvLrySsvcq80M9wB9LJyGRD3FwFatdGoS5Mo2VX46%2FwvgtKYeLkdA6U%2B7BRvrsC0XS6jgJU3AKhiMJCZQWCngXRUgeFWBtZv3SAh%2FTP5hB5M%2FqN3HFp%2BLfrFpcUdWQR52ECFawwPOvn0baDvhRMJ32l9IGOqUB4CSxfIyVYyK7a7GPl6mENfK5Cjl6sJPUkJM83urmufd2L9DCnXaM5AuVza1uhLOCc8aQNcR1VCUeZWEthz2ufU51O0Qag8qRJcaHSIc2ZkhUWvQ62gq0MXaeuyj9atEGcN5bKgR4BdC3SU5gVuMSDzwQN9KjETV%2FHlyWcqvwUVKgY0p6Qs7J4O%2FzPAYCCywArurAAiXXMewt%2F2QnQy3qLKyNRiRB&X-Amz-Signature=38e84a96f4d2ca4f12c753ce42db2f171b3c7984cb716b4f70d52f1a53d6baa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

