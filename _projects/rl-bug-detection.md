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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ABQIPBX%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T072459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEfgkR4RvTN2Mn2%2BVYtQ3Xglrw3h5kMt75ZYMtIZS%2FtQIgfkb0AzercZUnRxd6wfLbVz9eXRFQBGIJzNB5lzERkwgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDG0egrBPyrax0F%2B3CrcA0bLVMw0evQ1vrJwGjLUArYVUqo%2BhnyLcnmLm1ERuwa9lb9g4wE6GkL5F348rSDS5f%2BYpAemuO783%2BvjPwBf6I%2B783KdaxSo8t6DZYIK9SxZqhntnh0C6DDq47wh%2BVJ%2BwrTt9d4tMKdZrL6lB1qJyc1ax9ziCiYI523uVhisyXfHLYC6ulrT%2FHyWQfrRo83Iw1SCLQSHbd%2Bg87g69Q3zG0Bt2jo3ckcoNjx9Abv1IxL0s%2FUBfOudbXhBzciejj3iZXs0tx0AXXbG3POCyONcuxOVyLXDfF1Peau1sJMdcqmx7k3UfDaxbcANXqZ%2F6cpsqthTktXLF6VQQx%2F%2FjAF12xtRBvCpS8rXhBzhrE4LwDHo5ps8T5fShKFinNmSxoZyCP2F2PXhiS2krrfi9kmMuWnyXwOcF2jfezSzuoPhm1r6QagrhwrNIGuBjBg4Hjl%2FdCgPJNDrbHT6VfeeTRVLiJ0XTC%2BjV5oU3gCAwwYhGcn%2B5Y2ojOyluojaVEe%2BnnGB4YhikwRUOWLyYWA1KsvbkpQe3fo%2BQDXNUKuiQiy%2F3S8Q%2B%2Bw8njqfGgaJ%2BCW%2FSt%2FV42Pn3tl5RUtT2Pby81yc851mfUIAE7q0wDujVZbr8qvmST4UhLteMoRAyTMbMJzBq9MGOqUB08icyQONfsrLyJy8DiA9wTzUm50v6IU%2FNlsBwbGRTrpceAYYToL5lCnoNmAzxdR65uo4uhbwYKH0Q8nxq9x61uV6gybXgXjKBpYUyN1c2465tSxtva5GuGCtEd9Xe8QkV0nLiUZIawIW1TZli0PTkxvTwfXo0mi30y9VhwQoMQyZUFwFVrCmEK0P11wAYQPSiLEcrlRpiay6lGguV40KZ5Wz%2FBkc&X-Amz-Signature=cb8e155d3c8de430ad14bc66fc89fdbcad4fcb252775abd7ad75b18bbe4cbc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

