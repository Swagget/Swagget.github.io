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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4JAAU5G%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T000344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIEW4NYhUS7DEmrQ%2BGZET22RaeZIddhAJ7g6wJJVhHS0uAiEAjlRyOpYLMUvF34iPtJn5cd85kgkhd69YCnqYa6wPdCMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNKyCTQ00qXiop2BiyrcA6b%2Foe8G6ajPojNq55aKYR116%2FC%2BYg7LX%2FC9zDETQtHer6rEQRN32yQrqK2j2TGHgBUXKgqKF%2BoJCAk7WoS6Zyzh8UUo0NPxcntMkk6pHuxJt3dkSGDwrjeQ5%2BNmDi%2BwG2BEN0nMT5cHNBw4PjRYBitQrmguE0TsD17zprxaQX8ZRK0vk6CkPe7gmbpqvHfZwsFq0pVkR%2BUeRUJovMhlzdyjJvPEaxSBuj6mHNWL1BX6NWE8%2FHPg5hn6SaHSteRIANoZ%2BVtnNRfxerzw2gOFnxnQIt9hEHZULrpY3K7cYpJiLR0lXlpHmb9aaZySs3DwJBMdMH1YjmxwC%2BmoKxRTYAh7CvBKvjxCQzKI09HQ3C20xXaZX4xzgqjUaOj6vtIPK64OOdGqXAc8F%2FKkqzlr4nGCbuWzUuIHXGCYlo7au5r0wbN%2BQzqA1JfMOsNlkPRMbmbZjJmbrgPaxiOGnRFxbOnFX4Pq6aaIuFWlRRb5acJjW7r9fPt0aweVi%2FBpUpa9w6XrSbfAvuJQREa%2BsnwOFfnw3yydNMr1cLp4zyk2Q8uLteubXMrzCp0vvQBsoa2Z2cx%2B7jr7EPv7LysURrPNGBmNUp%2FIozy863w2zHxrbISHUiFR5MCmj5QQO67CMMHp99AGOqUBBgZSFgmjXv6TPzHLvIZ61Y%2BPaf8jfUWhk7MIWAZk1RV0mGGwsvKNQEZa9Z%2BfoxHCvQJEHD9RFf29jkYZKEiyvnJ%2FYmrWHMsR7jGilfFzCrv%2B5ipbc0kaxZd%2F9sTjK4XtavpsS6mAAUil24WgWysJ8RRr23DxKExiPcTg6QwymG3XL16Ld6uaK2JW5GGLFBGLFsZQ2NEDSxethw7rmCizuHOzRhwp&X-Amz-Signature=ab25cb1ccb2e91ec8fa939bc67f6ef5d85c49d5a47913b88795b6cec81a116ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

