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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EKZQFG%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T105425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElwLh482ACwVt4a0OQFBbJ0UsKRpLFJFCrgwjvNYT8IAiAwEskdXYuHOtkMB8odcAOEwaC372vYlxi18rtFxM6GsCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv%2F4pkWRurHhxP66zKtwDuQxuUAa5AmoH%2BNtPoOrS8Ui5299ti%2FSO5v84Yti%2F%2Fi6W7OmUwLfICeFztQkBsSuPx5syaZIToG40BAlOZkLQqf8tTXVQgeEbsLNyZuw4eH3FgtauBDoGVi3Cp21%2FiG3VFUh1MsGA32KuL1tiWmP81DQTQAQ1EDWZrYTZFZ853Qk1zuun2QQnQgCR6lEvqkh38ls%2Fvzq804EO3xvOBOw8qzaZcGKkSSzllIRjMux1BUMnJJuDuDlGVYGsDaiuBw4ueI%2FldFXI%2B4pm2Ax%2BAG%2FH5RhMtVy7QMxEz2I4r%2FZF7t6Pd4hZ22k2bcX0EprdLy3v3Pjo5EBvY8DDtSwlBtVRuCsFv8Vd3ylORjTZtE%2FHnSa%2BB9e%2B6j4M%2Fj1TNyXg7X7UNb7z2E26V0RlvStXN0Y%2BYhoUbeQ6o9I%2BUrcVPTiau8P6RDLam1ITSNnf7%2FsY6kHkCApfYMazoc5Ml1bGbyckguGNIB75kxNh42IQY0dfCA7CAmQSUtc5EdX%2B%2BWlFjOS8BrkZJOvSdj5%2FfqYtNsCHhVKs0amQJgBDvtaUKVkpwv%2FmB1NIgsdxiwrDYtD7dTQKFgzWdIYsYqxC92lzW0aCH%2FUljdxO70CPqIYaLbh9kXlHcr3ad2Ka1LI5pSgwlLTm0wY6pgFC%2FNAJT%2FoV8sAywZyOrGr9RV%2FW64yE8zmeBQF03oee%2BAm5laC9shn0GMiSsX5BpHEgu3wMOkIqp06QYzDi66KfXufGISPWlTOamzvKjtmYy7g0E36XglwzTuJlh1etLM%2BS2I0AG9Jn3qHsM%2Fe11%2FiBDY6Up3uq8fnWfNVeL1KA0htB%2Ft2mer4sfQUw6REr2CZQ%2FuIxq6noH7t7SLmqf%2FZ%2BlhUbIHJi&X-Amz-Signature=675973e064a926b3161a5a6b9cee1b450d1b74629b965390220941d76fb10126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

