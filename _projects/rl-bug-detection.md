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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJSUZ4Z%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T192041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCco69aSsEnd0EyZDMNSwBLfmHrwiHx%2BFTxp2Zd5P6%2BVwIhAOn%2FK1KRpyD%2BZDDGjr2ZNmNkUgnlOtqOQvBp9bQyDFyFKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0abx%2BpHw9%2BGCoazEq3AMgqd20ICHS3McW6WQu76b4UuYn0%2B8wGZbF18IMzbcePpxJ%2F00kJqtOd0pO6%2FQQJZvuvSDlQGEUmizYRNRENnLbD0Bdr7kHTGyz5N96rbUkSnxm8t9ws3SPMe6fr%2F3amdJ%2FDR17BKF8upQ1GRX6r9f0yn7s0bhjMN7B%2F%2F3sptvNS5JKx4P7T9wIbyjhcX1ykn%2F8660oRKfcXRfkU6mKJJcT0oWeXh2ybYX0dQiQGbPA%2BUOTxw6PPnNi0pfOlE8Cty3gQQ08IFGmRMQk2F2mVHgbNUgqOcXSE5jHGzn2MykhWuIdQZKu6yGwL1ctHlZRq3lMmI5OZ%2F2k9VaeSPgoLXjn9TS%2FH%2B9i%2BBstLK9lJZN0LC4bYMju20gM5utA0THjdhtrK7KpftSHZ5r83KmLVD1Lw5vtc%2BF88LJHTLnasUt8PKokE3fvUCXYlDzRbEjJgitK3bL6mW%2F1tT4ZcUNmow0bwhC1O63IKqXynPnlyo902Ala30Ra1pXMij0IIWTHsn5o%2F4NWfJkJeGmFN7dzbgXB1eKqH89ryO7jSCROcHTaKHOuWBqmx%2BI5HWrbxcxbwFY4ao4wgJvQ210gFIlPA63pskvuqHQkPQ38oerXp1%2F3j3nodMmWt6WutJVy5TCX0PnSBjqkAZCuzNtOaq0I0DXGuW%2F6JR6A2zkkqhjLRXALqe%2BLKFEFPSEDqEMy0gY93cDrAMWewanXTOlvNET23sjawxpN9GTHpoCkUN0nshczSw63osM7Zm%2FYZlifvRSZnQmHy2tjzpTxjaMOe4kh5X1fH3ExBiZY0QOBVjWZ12trqxH82XvAjESHjeULIPRzUC%2B8PB2eLnNdrnTGzeHudns4IVZAzGTluu5D&X-Amz-Signature=a3a27c032a5596816cb5907d4b636fb102a1297638ba055e4f7c2a2a7b92e07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

