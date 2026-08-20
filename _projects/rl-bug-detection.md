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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREJIPJU%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T133634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD3naSRNiF2g%2BbhxJp5cHJ9CQoht5wfOC83pZ%2BPn5yHwIgeoVe3YpI1wGiAmRgAV5QnYy3gvoVTjlQ0d7bgSQNi3wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGm5g%2BWjZVNXcYKSJCrcA7jYyV%2B8vwocJLDa94dks64AsHiPibpsv8eNPW6QAs5Dzvnqro4%2F7X41FXY5qYloMAb0W6et22OeJ6RLmGOJm93Ye9cyPwDKA8d4ZRtUdnCGE%2FOrgEGph4z2ktpxQPzZDBcfk6VjgwWACysLp1jWWsOyPVYdWdaXia9WTgC2%2BYQgP7wmYF98a3fsnArNErzfvziBYEmEvYZkvCMonv7U%2F%2FDiKVRTA989x9bvh2Cgd4GcPdVKOJ9OCwkewrv4BAPUL0ypIFJvVUxaRDVxbU3vA%2BQCC2WCfvFM5pjCqsKVhzpm5lfl%2FSYAf73ffCSlKcSQiFR5qO1J9nQd4EC5xMSzELsSyRsw9mfbCBr4YxctD4zYTJa0Pu%2BezHNxbqVib2qbOdhhQJhsDoqsNechmKHMdfs1oj8mwGf%2BCwLHHoqEAEZlMUMUZl1i23LIyWHGk4y8eqZVx%2BT5Sm6yVjJ89zG0PrFarnoD3ibwPznXObW5x5P8AhUxl%2BdYftge23SDLHLH%2B3hxne%2Bw3ohnHNFPI5muGzVPzbYYvB6Q35PkpE9sXVyElT4joK8YykcSk9J1JNy%2FH2%2Bl2XRKChTt9Ig9mHhqasvSNBuHqaALPsEzfXQZJlJz1Pc%2FTCG%2F6ljoO%2FbqMO7pm9QGOqUBZ%2BjA5wZ5pnCjZn6WGsedx%2BGWN%2BAsD9%2BgmrkuwZuGQ9exWOnXNOngOU458DRmoC7FZ9FdMldzq68TdFbg3BpZc5b5qcXxJdgFKzW3bIGf%2BnbnRuAGVCNrrAePHooVNN%2F8L7h0NZrXmeppT5P%2FPGMyyVMGmtl4BcL7rhYwgSypXOyk%2F0p9%2FYANGW8y%2FxDwM%2BBVLJEp1taxUTOivM9DrFohnXg9gJwU&X-Amz-Signature=8b206f08a85afed4bfdbe460b6fadc9c269c0232d3acc370cbe1727d7b9ebb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

