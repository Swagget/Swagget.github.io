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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2DLT24%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T172250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHE3hhl8hfRwqUi960rm8SdJM6TNR6ymu5%2FWzlToMnSSAiBERdAxE1%2BXoRmFBaUeCNnPJNW84%2BCFtPIlLQYQtMGJVir%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIMZzPeS2yFcv1tD%2FfmKtwD9r8d45PbLVPveP0IvmIKVB694r0egb519PHEn5qM1k0hPGIln%2BEnihzwdSZ4jZFTXNCjIsJHFLdTXGT5Yy%2Bs%2F4ZbCQy39hnKIX3nxEaGBYhXTI8FWQVrFZHFrSYAY90wrrYXua9J%2FNPjvlRPPzrvIu0fzzS51zBPfset6fk7OCNKE%2BML7jUI9GlBdbCKX6ROe7NKum5J1cFz9CwsUrEQS7KnyUUQg4A9bymBKIQdLEX5Zjt2oVBxE96yH%2F4QfJUiHtStBWpc2%2BIJkVj5qitaAFhvWZCDOfOc6ZzNCW8ujZyghbCa%2FSyqqeK5ggowY5ZwGeNyS%2FM4NBbMvGft7Yas03ltADzPTq%2Fd4M7fIwMgJsGyW3Mn18jqODBt%2Fhr40E%2FvHNBKiFs%2F6xNUWYC3wWFVjKeyhz43dr8%2FOQo%2BuEsfR%2BdR6Qr0LB6ID3AYD1mBQoF1r0zv%2FnUyzAQn9sZ%2BFlMcTtBcnx3GcmHNJWuqm1KuwFaq9z7WgNFZ%2FKctYDvJpf5bGOBcV0mLuQMvOq%2ByJpHAKawBLZKS%2B%2BYwFLWb9IdNiVbNkGk9SHBKvd0%2F9sejm5qmwdCpChq89dH%2BR%2BttVn4lVTpOzW%2BSq%2BzTfa2tg0MGDb81W7Gx8%2F%2BZHyH2SmEwusfl0QY6pgF7GqSpwdY3JNynRUbiSO8D7ezOYvMieh3GPH6vg9fX3de1WR%2FY%2BBLWqM9%2FzIkie0pcS97jZJltBSVJB6N79tc6Ju26gEgr60MCcnJbmoqR1thi%2BlHl0788Ex%2FZxYxC8hckAGbolYLqZnQMgkf6caREfpvmtiBUFqAq%2FGjIki8OT6ktuhNevF%2B5pi5J9Zjevme9qe14Y3Q6Zm4Z2RVbazToaJwJIykx&X-Amz-Signature=90a4517837ef2eba7492d1dc1fdfb298d7cc28081bda096d5ddaaf4948127553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

