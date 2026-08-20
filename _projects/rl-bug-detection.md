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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGC5O5Z%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T171708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDicbyFgKrX8ctC5zJiAPcHDR3d1xoCPg1ZaixA0HKChwIhANS9FGWhFrN%2BJoHw9Xg4q98kPzxfeNo%2BN9N%2FSKwWOIfYKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJiFcCMPu8ExSUA%2BAq3AOu3VBV7771cnAyI62bdFsBnqFq9YxrMcNjL86uO7nDUQf3pzSuORltYJuScW0udDhBeDpHH1LEOwYlaOA34I%2FvcWnOW%2FKg6puIvveOgct%2BFfCqTgRDgEF6uZgqmWpt3H%2FMEkYiSQTpsEEzS45RMvP0OlhBBIjN50rItGhivFXEbD%2BaNKM%2FP2ryoJN%2BE537QUUDa0VesPQ3gX1UFKc5wC8%2F4CM31lx7aKbsBcc%2FABMLp%2Fep%2BWyh5TVddbI6XSgBI250QFeqR04vYJvDWQWL9OAVLKlU3ZLFTd0vDgOYGS7gJCPafVfiUl0BLqbuZN%2FypYFjSTnU3wPDqc7ordu8ERtulZ%2FnvUaJIuUA5cphi7bidKUoP%2BmT%2BpxhWvgc0hpe7gHDGTyxHaWB0258XgVDcG731Zu1ZJb7Qpo2nDlniwF9FsXLyd715gQTIoJFmPdHN1xCL85Di1K6tcfOAAeNFQSQn%2BvSBQEH6lCWJ2CUKjJ%2Fqt76SGJnv4ReGEGy%2F3eLw9qO3wiqbfNgbhMLP7DLqxieKJ72rEgBXWbh6iNKyOoDlaqivCATKkpYo1pdLhEYiBVEG%2BmvHQjP8dtZl99sttA3V614Yt2PH2uDx%2FW8fmO8ksScdUlQctXRzic65zC45pzUBjqkASiRcZ21QrOHhBskl9T7rY3AY910AOe4mcT1O5otfKD2ZDCDh5cUZgTlpYdJ078KVDrAOOMRUonzTWWxYM3c41By4iflezyIZP1Bb1kY9mpnkADLDJdeju4Imw7clOScd1upY2jBn2VRb4vFG7M43fdkpzwDvungRPLg0GHZcaOdBuO3mf%2BvEqWawuawha%2FU2hsAItyhPyUlKvqgUcwtnNH1O%2FN1&X-Amz-Signature=538daa1d086eb49133d51a38b54dce420fe3b2ca42dd1859de6a88d91bc33a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

