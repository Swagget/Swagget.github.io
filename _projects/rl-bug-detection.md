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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4YDIH3%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T191247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwnnGhauuFIN%2BS1ka2tYhQE43APfO6okVV5DhBcpZAgIgBSv7TPJZUt%2BWrwNB5i1sDD28VxmyyJj7lykH5ZsRI5AqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMNR7biPAG7xqjk%2FircA9GRMS8d18Mtcq1nmZJ0CQ46jiQlnpWciv7HZAZRsoW0%2B4ocQijUGHgBquywWoup1y3QVZZZk4L14BbakKSeMVaRiqjtAu22T4kkygea%2BAP4fEJCH5%2FlCPPv9o0oBDVmuncnhqeFSS43zejUxJARdxhRWvlMGoaWZKscXJWUPXSRfZZGaaK1LieV69PaXeUDKkI5dr7xzi5%2BQyqhkjSeMv2TnLLSkxclN%2BPgU4Zq%2Bcrr5%2FCs2vmHtmZhyIsVg%2B6Px1OCFT6o7r76wTwTS1XBX9qLgA0kyP3UdJ3QrqdiaszC%2FYIYaG%2BRu3LqCn73M4Bo9bnh0N9P9noXfBnYZM4QkGMMmO4WmI2HO50Z1XeqiWS7CLHwrxUV%2FovKLxxyDSBly5167%2BRqIKWgY0%2FsKlDXJ4JDLC1iePflRlsfDX%2BlM2VDEGf0ekBqVqDKH4Yf2IhAF01XnpGTU1cASn4o6vgB9%2B2tCYngzdlFFk97NUCglfYUuVD33t7Pr%2FZsOBm6uJHJDxTSiPZMwvSuDNu%2BkFne6ZCVOEDMM%2BVH%2F6KfTpyWW0GDo6F3YFdMmurxsycrX%2FkKsVkWlpIo1LpGjfbRBq36kmbJkMygQJXjPE%2BFUE5xqbLJQilFzpyeV5Xqg3HgMMaFnNEGOqUBvZZerDAkWCtRyNqzuEMPZlYfjJFk8vaHxkDufifFmJEbPxbkaf4x9dTKVFhOP9tCrosFB71%2FHmZY43w7doHtO1E%2FiyOU4sj%2BNfPhsljsHdlcWOpspJ6rYwTOgZf6TUqPk2wMNQJQBwVx%2Bl4edFcIufO6IBRN2a78ahsRIqee7UvlOEJfzK%2BkJbx78Nw92VtPiXoPCOf%2BOtWB%2FgEcAIBsYQWUKL3%2B&X-Amz-Signature=65ae8d79b1b426267183cb88a5e11575ef91dc90c0b1bedb425d0edd6bb58ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

