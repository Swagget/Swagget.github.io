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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOB2L4T%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T010838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFa1nifU8bcDxEHCpNy2vQTSazLnivZJcu8MkJ3ZL%2F2wIgQ3qV1%2BAliAXCqmcwYdor6jGJXp%2FYJWvkzgxoJMDwWCQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxIo4FmdhYYgdNyAyrcA9lESn%2F5cY374z13IMitdU5eBchbCfmlQARkiy0nak38rr8iJpOzIm8X60JmDU5FrfIVKBCCXAaFMIIfFIIZ8JjQvH5dJ8aQsyXxKzHeNrp8O%2BNHIh%2F%2FqgKfjqmkhgn2Re36uFfxKM2nyLLzTbyUWGxU9e02aTv2c2CJ3nWH5gRAHHB00LzIr%2BhQ83vMXtn9VIr7injg3Jm6HYDrUrNIVk%2FLeO0JTy22auMb92Y99LNGwbW0XwmYuIiIRMlN5CvPaaW%2Bct%2BzB5WAkE7117b07ClzXRvNcqPR%2BEfOvD8r92HfvRXqdc%2Bpoan0h2r8pVUM6jQsduF0PMllPUD%2BlcVSUpp660s0NtvIv46FtfsTSzxZ80%2FjY4vllVGBBkuwkEZj0Rc0u%2BLsO%2FxKGL4LjlfcQQSRhsLy0YrAEpcDX8MWJ3FkmdnIGZUtfu5j6KEePUgBsQKSbx%2FkbtYvAHaDOlEtr4hXs9SAgz4N6Acy402e%2B7YGMvszlMMnCjI1Dn6Foskn0aXKfgrZVj0zXVKVzbFOSMZOCKxOHtkX9F5qGilSQXDRxiOdxvtK2gbjOBWzM%2FQTNo4FUKQl7X1DR5pZ9rhBNBXNrBwracN3Bs09larhwNlXeKd8BlJk2Wp%2F2bgpMNug3tAGOqUBtaAlbRimbZOgWqDYTR3nL9xrLP5Bn1TgSRI%2FeAjuaUW3ZPhqoE0OJLM6SiJK0jnTZkvByZ2MzOJxn%2FK8opVwrbM6fLzVVqH29lP3Phg%2Fy8ZVZWbUIr45s9PVXBZp2rg96j2CJmJjphO6DCqKdVBAdzmlSKAIQGH2aPP71iBl%2BfuV1bOMkFUAk56ThJHOv7b%2BPrkjybeiERrPhCtWe24JSsamQz4Y&X-Amz-Signature=b1f8d046b5421201fc0595badd18fe251b482b1a9ee12f715c89a0eb1338430d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

