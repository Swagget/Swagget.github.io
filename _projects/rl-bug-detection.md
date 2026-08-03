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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBWE4ZJR%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T173817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDgOrDKHxOYi4r%2FXoZgRaODRjD6L9iFRjpjyrkHffgqvgIhAOUhb6nvWwYvc50%2BXAY1e1a6vabcnAfG%2B1FGeIlzEcErKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyqf9ZvifLtf9cu7V8q3AOLQ2ItcjGJN5tatH7B%2Bd28agV97TkYS50FM%2FGH%2F3NSSMsBZ%2FkR6xlNnxXOxxtmHKfm7OITDi8G55HPy2cOiSytQIZXO8Z0V8iEiM%2FS8dMRkH52qFU26UNPfxAVb5HHrwu7vMvw9JSSPgsKn8sEZ7QJsKwvK5jhRjMSSNxX2xUVHMFJ69CvF4LTs60VjdTSqHa7f3nUkgrdFeOSXt3fZ3Azq%2FVx7XKlRMuSR7GYt99sc1wt8yJ0BighgE3C1VDzeN59GzcvuGgsTnsuwgvFiQhXt2GfE1mNoJ4ERPJu7tmubo0wGHESvrKG8wuMaABx7FYO1RkJIUD3FkccNYB9ttQvDywvfCVIqp8yOR18Y61CBoqSXA%2Fc%2F0a4hNIA%2FQ7L68n6Gst0oMwo9DXZM9pMsL93s54VbZ%2FTokWbLxpceMoGYiygTN7N%2FXlQ4iTYk6DmwsXpQOlgHMZ%2BY7z52rFZEUX%2FMdSE1myoBt%2BintRfLhigXyqbdvKKpeJt2WEfbsI%2FmCyQlJLIN2O%2BaX4C7ERZTJczjFT4fupC5SVP4tEE0wxWZWGIstv5ky57iyff0tu3b0dAB4bCf6midWMAlYRfkM5XnWR%2FyQ8JxUECVeE%2FiiON96ahVZ3v0lKDwtj%2FnzCjoMPTBjqkAYcRg%2FiXVGJWnLQavIKRgxs5eEZUMxaBOfswf9aaciAhc2wdWwSN5tRlZU2FYn4OQ06%2BIFay7vtfNvN%2FL5mrACRzK7kZFn%2BPo9YVMaO5x2XIeoW5FB2lPOIuRC3mS5EuagRZaQQbLWP6WSIg4JiUhwS1KCpyk40Wm99k14aWkskRCLJ6AX2%2BGTNn40RfvXX9lc6tIoPGHAz2UQ1Yg4tEmuOclFCy&X-Amz-Signature=e42442101d61de38cc3d8315a4b12c64b75a28bc33ae956ae305b0c7dd1a132c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

