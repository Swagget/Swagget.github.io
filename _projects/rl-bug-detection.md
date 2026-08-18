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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JS3TFOY%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T081957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FbDljui%2Ft8I37b9aR3pG0R7jZRA0RYGlXx1N%2FdbjFQAiB6Ycy8P4rGLOjfdfDsiiEz7X%2BpgXfVf0%2F8rGx9UX9Avir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM55AtNvLpC7%2BDeYq7KtwDPDN7egyqw1LZNrDVUQ2nUK9sW4OGSoQv3sdoMtiJRmvqEOJELpVw%2B%2FdTBXajO6dV4TK4NDsLNlHkpWVlNZwPBrKigDjmvWalNzoIQvNvv%2BEJ8aj1gW%2FfFgNb0te2sILS5UmssjD39Exu0q2hJJyAzrBzKuDqMvI35%2F%2F1srqFMRqhI9E59rWnanNoRbMcxPk%2BM3EwYPYBVbN04UmqC9uPVRJ7TYscEz1Ro%2FCNdZprCT4Bo0O4aUnyGgyvUsto2TwEDL5p5DjDZW0H3n5OEwT3NJw1SMSUfZsdQ4Hwq7mLUajFItnwxUhbOL2GXEH0bQQrW8cWLXDnkjrYiFp26znk1IylHufy2Wx%2BQdVQzbeI7CLljuSXWn1PoquUIpTLxTRo%2FrmLcz3crGdnJA6ruIK1gXrTLtS%2FYjTiFL9H%2FQhmeSIGrKoDzi4SxUuwJ54CENSsVJNxNDvzPDXBO0%2FpSHhUlbAexqSv3YrInSyRlcBVn3cgMB4gZTBuZJcWkyKFuVGJATfHeqQAQWD8KrV0N340tTp2%2BiF3UwrA30mXPWRH1nka4s0X8gotgugubLEkRlmYJc%2FkmhyyzMrwGcWgiNEf88nMIKqFroaLt8Sj02YjbvSF5GnqzG7XQheH%2BYMw%2BfqP1AY6pgGDN5e84tK45ssviol%2Bc2R4RZmYU4XVO%2F7tAhwY29Vb2LJJ5BTjrybOiG5Yjtt0E%2ByUCRoDHYioRqiYDukY1DSi8P3PYFHySZxeYxFoodlv8mdV6teSEBf%2BKDIX%2Bipp1jGlW7evygvASJ5xTs%2FsB1rkoWAvlwfLoYf9QL8DwlzRINi4qJWxJ7GPJuQV0fAHm4UWd49gpeY0GlwuY4OIMcc3YoN4KMEr&X-Amz-Signature=39416b5a71b62ed183d39b69a17a5eb2b447201c86d0fccd143f474e0eb12f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

