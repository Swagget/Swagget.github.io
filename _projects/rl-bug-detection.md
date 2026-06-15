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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5WXE57%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T153508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFec%2BpBjhqZBZIla3Wv3Ba3%2BGdpHoTWEXZ7OSMh6IywAiAL8qEEgaWLMbIImvTQI%2BmbeuSU2cf4lq%2FfOAfiLQHWjir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMO9fG%2FjH191cYGj%2FdKtwD2lgJk7a6CfBMWAsJT3l0zcGYjvV6nyfNnK7Ow6GN7Xr2y8UlBSmBynKzGHpAXl57%2FHGGSX7JnuA%2F9LE3wo%2Flse5SWtUnPlZyGh7WpC7KjBhBONNq47nhAGc%2FN56n83Ft2bxEIbdk61dxyYVL1LvHo6OTTccqM0PLj4GoAt0dh8vYStOCssV1eo7nlE82Ht3ZFz3ElMapI6RLfXYQD2ddx4ZEytLnoVqFazySn1HV6MlXeGtqTgxVYxkca24SIrd1kOompsgZHk%2BIgdG2V69AFHnJGN6h94M1kYGASjhzpld2MMCNtJaNfiHgC3jO3F4wpe9gUE5uKspNLotTxGB1wYi1Ipwb7Vy%2BmbSYNzW%2B5mq76A7E9JqAbt8E7zq%2BypaN2sZIkOsUZOX9RaXOrvoPedLGnEoeDwInLW2lTXsTJ5o7nsaHvFRNJQgcDAb2%2BooHfnGHzLPgbYNgNQogntykRE5ng9M71q2zjhZnWDl11f3rKbRfx5i%2FiV%2BFFzGLBoI942oQ1Z4rhs1prqAn8hswdp7T6Tq2f0IyBEYRzCefRYtgCmfd2VOSdhgGpf3jC%2BnYgpwpLcAE0JgGqrMh7Kl3xMjxrMxgzwJshH%2BPyT2CH4kT44yeD0%2BSE8UEon0wx6%2FA0QY6pgFK7%2BjDZy7HA6EVZu%2FdWH%2FrMDBBxlmWcox%2B9T42RMJYoIRzw%2FNUccskl365PpHC4hV77I5cZn8xcrsnKzPtWsxMSnrNZgvpMX4oo%2BrmN%2Bd8OeIfwBWSUzHPh4TAtD0xzPxjW0vNhmIamAKwaPzwVEx7xaOCeE16Dw7m90F8wZH9LAM8VY8U1jXLKXpyMfcEZwPJRcuUwkjv4zHRQanwq3J1P6g769Oh&X-Amz-Signature=d5ae0520d326cc5bfe3632ee8a5426cc3d04eedcdcba3a6130b57309f4e56a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

