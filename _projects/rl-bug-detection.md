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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZJSX2OX%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T222333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVOddw2u2u%2BVi15N3uQ6smZ6p9C8FBb5fiaCOc8gTawAiBBizhcCUiz2DuJZvKty5MR0rge%2B1R6E6LHOsmiujHeBCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2FI0ZitY0vUJYJ4oKtwDvs0oHgPHrK%2FWzPzQsAd7%2FiISw77efkp2dhqR5sSo%2FrgavvgxQGTCWJP6PuW7RsLzz6zsFsmGBkspzkmfoCYIKEyQxyDOoNQ5VyLHkGULMFJ1xgNI694x%2Be5hsmP%2FGKZ4xMDtLL61Tvp3aGbiHyYsDXAChdyPQB5w4jQfet%2BQGCSqFgKGXvcE9V%2FZQOQGyr3Pxi9hvsndAAFXQyhyQairfrEBA9AtNLqnkjev92DWI%2BfII1%2Bo6QgUWzVDWkjx4HJwTQJRE%2B1irs65xcAoExtdw5KzTGZj2fsAn%2FnUeh0D6sHtie4e4E28omkWohzQ4QvYL%2BNDxcNeqkH4TjDWEUxuWDdMDSru0rPnWiOgq3oxrtIZ16fNpZgcit%2Bda8f5e8pd4fL%2B09tbGonrhLjpezHokNVOGv6%2BUbYU43cFtWuYsUwFDLJYVLczVUH4Xv4rbYsNOsK3i78TtE%2BDvGySGmNXY4CBWDtRJj4SM9L%2FLCCYocUa5cY5sab2qm6%2Bz9cuKFUnXIMs%2BIXJC7KnG7wuNpGh%2FO12cUVvlymdLHO45fgtsx2YKD2xxXtoDFVKQ463VUCCm0veoAn4KiodeRyK3solqWWgBaSdGXfzgOIvICKOd9FxMmjJur6y9N4zBxow7fPo0wY6pgHnaXkgqxc%2BMYgL%2BhSGTb9PqZimbgHxt3H%2Fz2uZPZHwpfD4xhAZeQynpNi2BR4ImuT7k6pWn8W%2Beza71dY0OU2HlBQMajYXUiBfyLHFMsbticUw0iZe2F4CLNYIT4NAR18T1EeRmasV7%2FykF8zWqpcxnX0g5r5WH6YhuvHneUQtjGAtbyj7Ycahulz%2FYW%2B0Jy%2Ba19SfRsmAAlPT%2FdPinWh%2FeE%2Br8G6i&X-Amz-Signature=508ba412a6076e08e65d8e33621fc1de6442b3e11535bf20c7159e94d3eb59f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

