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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSBADGEH%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuvLc6K94oWQDzZ4bCl15H2elY2IIlpidMJYhruxSqKAiEAwggifk06FcNP6G%2F0ghOgugs9En62KWJdgssM%2FgfB4wcq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHLMe3HLIBSWPcC9cCrcA6LJi87xhn4i7Kte85PSPwp0%2Bbtcf8It0TSGn1TrELefZr9qX2%2BEW%2FcbpTqLut6iTtX1BfCFi7I1CYv9pAKrkaX1jD2wKv40a186b3WjR4D5H9Ohr6VV6IodiEXnhEAofGlK3DOQ6YiwyZlMNpm%2Bfo8e%2BpMCu2MLX3kFCFRHHZa%2B9BI0H08SyeDwuKcI32LyG5h3fvbHxbAIYRblVY8Gc4oTQpdGLGevCydCNCyBNMKN6f8czR9P25UBQDekUftnwZYktpMJOLiLhe3yge506EbxhrhVGR08%2FeTpE8h9%2BGwaFMmXNgxM8StqJR1kQiVRB5zONUWvuDL0fmaKXg0X7nzW9P93%2FGCD7jpq95haI%2Fd2dDS%2B2Mm7j6gykfyUGadseCf50Dk8hZa30NJJr%2FkPC%2FJ88FJYpmaF9yfX9tqNvj2lVrtfjDRwx6ErnlyrkzpCfJi0YdoEpxU3gS3q8FtnGR%2BvpdlC26taL%2BIBn2rrgydr8ZFDlEaJURMcGC%2BkfTzvEAzMs3afZGbbUE83mIY9PhxdUBzyRfkuYXdy%2BNAIfxbBDQ%2B726aUm1gLsaOmfZJN3Yw5kZZm0eBn0VqgSDQGwb1dvvD3fR3bUsPYlbPru%2B70CK9pD8DFgL5d7ZPdMJqvsNIGOqUBE7zVSKnoqnkNF7z7NYnfSn4TBZJ7jB0pQox4vVQrALik0M2%2B7dAnRZkhH%2B3M7ioIVrz%2Fp%2BVtLgWoCWd8cIU4vbSiCADUJHz4fQwsizdmqSt2WvncS4xlfzMirWiOwWNIadNFpEu6tGI0KYExNSRyxzn92AelfdXXQnIO5oMFv%2FVxZlj%2BNWVGMZQk2GYa8X6DId8wuxh7NTKSdBVqeJswkTM2m8fn&X-Amz-Signature=759523504ab1ee0844962c01f0d767cb2d57dda050d61fa3694b44edd9e291e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

